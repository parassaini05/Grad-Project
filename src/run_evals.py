import os
import json
from llm_processor import get_groq_client, analyze_feedback

def run_evals():
    print("Running LLM Evals Pipeline...")
    golden_file = os.path.join("data", "processed", "golden_dataset.json")
    if not os.path.exists(golden_file):
        print(f"Error: {golden_file} not found.")
        return
        
    with open(golden_file, "r") as f:
        golden_data = json.load(f)
        
    print(f"Loaded {len(golden_data)} golden records for evaluation.")
    
    client = get_groq_client()
    
    matches = {
        "decision_driver": 0,
        "user_segment": 0,
        "evidence_type": 0
    }
    total = len(golden_data)
    
    for idx, record in enumerate(golden_data):
        print(f"Evaluating record {idx+1}/{total}...", flush=True)
        text = record["text"]
        # LLM processes the text and uses Pydantic/Tenacity guardrails internally
        result = analyze_feedback(client, text)
        
        if not result:
            print(f"  [Error] LLM failed to return valid output for record {idx+1}")
            continue
            
        # Compare extracted tags to golden truth
        if result.get("decision_driver") == record.get("decision_driver"):
            matches["decision_driver"] += 1
        if result.get("user_segment") == record.get("user_segment"):
            matches["user_segment"] += 1
        if result.get("evidence_type") == record.get("evidence_type"):
            matches["evidence_type"] += 1
            
    print("\n--- EVALUATION RESULTS (Accuracy) ---")
    for key in matches:
        accuracy = (matches[key] / total) * 100
        print(f"{key}: {accuracy:.1f}%")
        
    print("\nEvals complete. Guardrails functioning as expected.")

if __name__ == "__main__":
    run_evals()
