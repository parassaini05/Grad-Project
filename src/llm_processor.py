import os
import json
import pandas as pd
from groq import Groq
from dotenv import load_dotenv
import time
import re
from pydantic import BaseModel, Field, ValidationError
from typing import Literal
from tenacity import Retrying, stop_after_attempt, wait_exponential

def get_groq_client():
    load_dotenv()
    api_key = os.getenv("GROQ_API_KEY")
    if not api_key:
        raise ValueError("GROQ_API_KEY not found in .env")
    return Groq(api_key=api_key)

class InsightExtraction(BaseModel):
    is_relevant: bool
    reason_for_wishlisting: str
    non_monetary_barrier: str = Field(description="The barrier to purchase. (e.g., Fit Uncertainty, Need Social Validation, Sizing Issues, Waiting for Occasion, Out of Stock, None)")
    unmet_need: str
    suggested_product_feature: str
    decision_driver: Literal["Convenience", "Price Sensitivity", "Quality Uncertainty", "Past Experience", "Trust Deficit", "Visual Appeal", "Competitor Superiority", "Missing Feature", "Delivery Anxiety", "Not Mentioned"]
    purchase_context: Literal["Routine Replenishment", "Occasion Shopping", "Impulse Browse", "Wishlist Hoarding", "Gift Purchase", "Not Mentioned"]
    user_segment: Literal["Habitual Buyer", "Hesitant First-Timer", "Deal Seeker", "Fit-Anxious Shopper", "Trend Follower", "Trust-Gated Shopper", "Not Mentioned"]
    evidence_type: Literal["Repeat Purchase", "Cart Abandonment", "Wishlist Stagnation", "Competitor Comparison", "Return Anxiety", "Sizing Complaint", "Delivery Complaint", "Not Mentioned"]
    verbatim_quote: str = Field(description="Extract the single most insightful phrase or sentence directly from the feedback text (exact words, max 30 words)")

def scrub_pii(text):
    """Lightweight regex step to scrub Personal Identifiable Information (PII)."""
    if not isinstance(text, str):
        return text
    # Mask emails
    text = re.sub(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', '[EMAIL REDACTED]', text)
    # Mask phone numbers (basic Indian/International format)
    text = re.sub(r'\+?\d[\d -]{8,12}\d', '[PHONE REDACTED]', text)
    return text

def build_prompt(feedback_text):
    return f"""You are a Growth Product Manager at a fashion e-commerce company (like Myntra).
Your goal is to increase the percentage of users who purchase items from their wishlist within 30 days.
Crucial Constraint: You CANNOT offer monetary incentives (discounts, coupons, cashbacks).

Your workflow should go beyond summarizing reviews or performing sentiment analysis.
It should enable you to identify, quantify where possible, and compare potential opportunity areas that could influence the stated business metric.

Analyze the following user feedback and extract behavioral insights.

Feedback: "{feedback_text}"

Output a strict JSON object exactly matching the schema below.
Ensure all enum values exactly match the allowed literals.
Schema definition:
{InsightExtraction.model_json_schema()}
"""

def analyze_feedback(client, text):
    safe_text = scrub_pii(text)
    error_msg = None
    
    try:
        for attempt in Retrying(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=2, max=10)):
            with attempt:
                prompt = build_prompt(safe_text)
                if error_msg:
                    prompt += f"\n\nPREVIOUS VALIDATION ERROR:\n{error_msg}\n\nPlease fix the JSON output to strictly comply with the schema."
                
                response = client.chat.completions.create(
                    messages=[
                        {
                            "role": "system",
                            "content": "You are a highly analytical Growth Product Manager. You output ONLY valid JSON. No markdown formatting, no backticks, no explanations."
                        },
                        {
                            "role": "user",
                            "content": prompt
                        }
                    ],
                    model="qwen/qwen3.8-27b",
                    temperature=0,
                    max_tokens=512
                )
                content = response.choices[0].message.content
                match = re.search(r'\{[\s\S]*\}', content)
                if match:
                    content = match.group(0)
                
                try:
                    data = json.loads(content)
                    parsed_data = InsightExtraction(**data)
                    return parsed_data.model_dump()
                except Exception as e:
                    error_msg = str(e)
                    raise e
    except Exception as final_e:
        print(f"Failed to process text after 3 retries: {final_e}")
        return None

def main():
    print("Starting LLM Integration (Pipeline with Guardrails)...")
    
    input_file = os.path.join("data", "processed", "cleaned_feedback.csv")
    if not os.path.exists(input_file):
        print(f"Error: {input_file} not found. Run data_cleaner.py first.")
        return
        
    df = pd.read_csv(input_file)
    print(f"Loaded {len(df)} cleaned feedback entries.")
    
    client = get_groq_client()
    results = []
    
    df_sample = df.copy()
    
    for idx, row in df_sample.iterrows():
        print(f"Processing {idx+1}/{len(df_sample)}...", flush=True)
        analysis = analyze_feedback(client, row['text'])
        if analysis:
            merged = row.to_dict()
            merged.update(analysis)
            results.append(merged)
        
        time.sleep(1.0)
        
    print("\nProcessing complete.")
    
    output_dir = os.path.join("data", "processed")
    output_file = os.path.join(output_dir, "llm_insights.json")
    
    with open(output_file, 'w') as f:
        json.dump(results, f, indent=4)
        
    print(f"Successfully processed {len(results)} entries and saved to {output_file}")
    
    df_results = pd.DataFrame(results)
    csv_file = os.path.join(output_dir, "llm_insights.csv")
    df_results.to_csv(csv_file, index=False)
    print(f"Also saved as CSV to {csv_file}")

if __name__ == "__main__":
    main()
