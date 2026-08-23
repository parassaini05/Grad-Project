import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os
import json

def generate_visualizations():
    print("Generating visualizations for Phase 4...")
    
    input_file = os.path.join("data", "processed", "llm_insights.csv")
    if not os.path.exists(input_file):
        print(f"Error: {input_file} not found.")
        return
        
    df = pd.read_csv(input_file)
    
    # Filter only relevant insights if any
    if 'is_relevant' in df.columns:
        df = df[df['is_relevant'] == True]
        
    # Ensure reports dir exists
    reports_dir = "reports"
    os.makedirs(reports_dir, exist_ok=True)
    
    # 1. Non-Monetary Barriers Chart
    plt.figure(figsize=(10, 6))
    barrier_counts = df['non_monetary_barrier'].value_counts()
    sns.barplot(x=barrier_counts.values, y=barrier_counts.index, palette="viridis")
    plt.title('Frequency of Non-Monetary Barriers to Purchase')
    plt.xlabel('Number of Mentions')
    plt.ylabel('Barrier Type')
    plt.tight_layout()
    plt.savefig(os.path.join(reports_dir, 'barrier_frequencies.png'))
    plt.close()
    
    # 2. Suggested Features Word Cloud / Frequency
    plt.figure(figsize=(10, 6))
    feature_counts = df['suggested_product_feature'].value_counts().head(10) # Top 10
    sns.barplot(x=feature_counts.values, y=feature_counts.index, palette="magma")
    plt.title('Top Requested Product Features (Non-Monetary)')
    plt.xlabel('Number of Mentions')
    plt.ylabel('Feature')
    plt.tight_layout()
    plt.savefig(os.path.join(reports_dir, 'suggested_features.png'))
    plt.close()

    print(f"Visualizations saved to {reports_dir}/")
    
if __name__ == "__main__":
    generate_visualizations()
