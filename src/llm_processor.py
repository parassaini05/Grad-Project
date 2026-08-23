import os
import json
import pandas as pd
from groq import Groq
from dotenv import load_dotenv
import time

def get_groq_client():
    load_dotenv()
    api_key = os.getenv("GROQ_API_KEY")
    if not api_key:
        raise ValueError("GROQ_API_KEY not found in .env")
    return Groq(api_key=api_key)

def build_prompt(feedback_text):
    return f"""You are a Growth Product Manager at a fashion e-commerce company (like Myntra).
Your goal is to increase the percentage of users who purchase items from their wishlist within 30 days.
Crucial Constraint: You CANNOT oYour workflow should go beyond summarizing reviews or performing sentiment analysis.

It should enable you to identify, quantify where possible, and compare potential opportunity areas that could influence the stated business metric.ffer monetary incentives (discounts, coupons, cashbacks).

Analyze the following user feedback and extract behavioral insights.

Feedback: "{feedback_text}"

Output a strict JSON object with the following schema, and absolutely no other text:
{{
    "is_relevant": true, // false if the feedback doesn't actually contain a purchase barrier
    "reason_for_wishlisting": "string",
    "non_monetary_barrier": "string (e.g., Fit Uncertainty, Need Social Validation, Sizing Issues, Waiting for Occasion, Out of Stock, None)",
    "unmet_need": "string",
    "suggested_product_feature": "string"
}}
"""

def analyze_feedback(client, text):
    import re
    try:
        response = client.chat.completions.create(
            messages=[
                {
                    "role": "system",
                    "content": "You are a highly analytical Growth Product Manager. You output ONLY valid JSON. No markdown formatting, no backticks, no explanations."
                },
                {
                    "role": "user",
                    "content": build_prompt(text)
                }
            ],
            model="openai/gpt-oss-20b",
            temperature=0,
            max_tokens=1024
        )
        content = response.choices[0].message.content
        match = re.search(r'\{[\s\S]*\}', content)
        if match:
            content = match.group(0)
        return json.loads(content)
    except Exception as e:
        print(f"Error processing text: {e}")
        return None

def main():
    print("Starting LLM Integration (Phase 4 & 5)...")
    
    input_file = os.path.join("data", "processed", "cleaned_feedback.csv")
    if not os.path.exists(input_file):
        print(f"Error: {input_file} not found. Run data_cleaner.py first.")
        return
        
    df = pd.read_csv(input_file)
    print(f"Loaded {len(df)} cleaned feedback entries.")
    
    client = get_groq_client()
    results = []
    
    # Process up to 25 rows to ensure a fast turnaround and avoid rate limits
    df_sample = df.head(25).copy()
    
    for idx, row in df_sample.iterrows():
        print(f"Processing {idx+1}/{len(df_sample)}...", flush=True)
        analysis = analyze_feedback(client, row['text'])
        if analysis:
            # Merge original data with analysis
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
    
    # Save to CSV
    df_results = pd.DataFrame(results)
    csv_file = os.path.join(output_dir, "llm_insights.csv")
    df_results.to_csv(csv_file, index=False)
    print(f"Also saved as CSV to {csv_file}")

if __name__ == "__main__":
    main()
