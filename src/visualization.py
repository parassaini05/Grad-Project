import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os
import json

def generate_visualizations():
    print("Generating Enhanced Visualizations...")
    
    input_file = os.path.join("data", "processed", "llm_insights.csv")
    if not os.path.exists(input_file):
        print(f"Error: {input_file} not found.")
        return
        
    df = pd.read_csv(input_file)
    
    # Filter only relevant insights
    if 'is_relevant' in df.columns:
        df = df[df['is_relevant'] == True]
        
    reports_dir = "reports"
    os.makedirs(reports_dir, exist_ok=True)
    
    # --- Chart 1: Non-Monetary Barriers ---
    plt.figure(figsize=(10, 6))
    barrier_counts = df['non_monetary_barrier'].value_counts()
    colors = sns.color_palette("coolwarm", len(barrier_counts))
    bars = plt.barh(barrier_counts.index, barrier_counts.values, color=colors)
    plt.title('Non-Monetary Barriers to Wishlist Conversion', fontsize=14, fontweight='bold')
    plt.xlabel('Frequency')
    # Add percentage labels
    total = barrier_counts.sum()
    for bar, count in zip(bars, barrier_counts.values):
        plt.text(bar.get_width() + 0.1, bar.get_y() + bar.get_height()/2, 
                 f'{count/total*100:.1f}%', va='center', fontsize=9)
    plt.tight_layout()
    plt.savefig(os.path.join(reports_dir, 'barrier_frequencies.png'), dpi=150)
    plt.close()
    print("  ✓ barrier_frequencies.png")

    # --- Chart 2: Decision Drivers ---
    if 'decision_driver' in df.columns:
        plt.figure(figsize=(10, 6))
        driver_counts = df['decision_driver'].value_counts()
        colors = sns.color_palette("viridis", len(driver_counts))
        bars = plt.barh(driver_counts.index, driver_counts.values, color=colors)
        plt.title('Decision Drivers (Enum Tags)', fontsize=14, fontweight='bold')
        plt.xlabel('Frequency')
        total = driver_counts.sum()
        for bar, count in zip(bars, driver_counts.values):
            plt.text(bar.get_width() + 0.1, bar.get_y() + bar.get_height()/2, 
                     f'{count/total*100:.1f}%', va='center', fontsize=9)
        plt.tight_layout()
        plt.savefig(os.path.join(reports_dir, 'decision_drivers.png'), dpi=150)
        plt.close()
        print("  ✓ decision_drivers.png")

    # --- Chart 3: User Segments ---
    if 'user_segment' in df.columns:
        plt.figure(figsize=(8, 8))
        seg_counts = df['user_segment'].value_counts()
        colors = sns.color_palette("pastel", len(seg_counts))
        plt.pie(seg_counts.values, labels=seg_counts.index, autopct='%1.1f%%', colors=colors, startangle=140)
        plt.title('User Segment Distribution', fontsize=14, fontweight='bold')
        plt.tight_layout()
        plt.savefig(os.path.join(reports_dir, 'user_segments.png'), dpi=150)
        plt.close()
        print("  ✓ user_segments.png")

    # --- Chart 4: Evidence Types ---
    if 'evidence_type' in df.columns:
        plt.figure(figsize=(10, 6))
        ev_counts = df['evidence_type'].value_counts()
        colors = sns.color_palette("magma", len(ev_counts))
        bars = plt.barh(ev_counts.index, ev_counts.values, color=colors)
        plt.title('Evidence Types from User Feedback', fontsize=14, fontweight='bold')
        plt.xlabel('Frequency')
        total = ev_counts.sum()
        for bar, count in zip(bars, ev_counts.values):
            plt.text(bar.get_width() + 0.1, bar.get_y() + bar.get_height()/2, 
                     f'{count/total*100:.1f}%', va='center', fontsize=9)
        plt.tight_layout()
        plt.savefig(os.path.join(reports_dir, 'evidence_types.png'), dpi=150)
        plt.close()
        print("  ✓ evidence_types.png")

    # --- Chart 5: Cross-Pattern Heatmap (Decision Driver x User Segment) ---
    if 'decision_driver' in df.columns and 'user_segment' in df.columns:
        cross = pd.crosstab(df['decision_driver'], df['user_segment'])
        if not cross.empty:
            plt.figure(figsize=(12, 8))
            sns.heatmap(cross, annot=True, fmt='d', cmap='YlOrRd', linewidths=0.5)
            plt.title('Cross-Pattern: Decision Driver × User Segment', fontsize=14, fontweight='bold')
            plt.ylabel('Decision Driver')
            plt.xlabel('User Segment')
            plt.tight_layout()
            plt.savefig(os.path.join(reports_dir, 'cross_pattern_heatmap.png'), dpi=150)
            plt.close()
            print("  ✓ cross_pattern_heatmap.png")

    # --- Generate Cross-Pattern Summary Table ---
    if 'decision_driver' in df.columns and 'purchase_context' in df.columns:
        cross_table = pd.crosstab(df['decision_driver'], df['purchase_context'])
        cross_table.to_csv(os.path.join(reports_dir, 'cross_patterns.csv'))
        print("  ✓ cross_patterns.csv")

    # --- Extract Top Verbatim Quotes ---
    if 'verbatim_quote' in df.columns:
        quotes = df[['non_monetary_barrier', 'verbatim_quote']].dropna()
        quotes.to_csv(os.path.join(reports_dir, 'customer_voices.csv'), index=False)
        print("  ✓ customer_voices.csv")

    print(f"\nAll visualizations saved to {reports_dir}/")
    
    # Print summary stats
    print("\n--- Quantitative Summary ---")
    print(f"Total Analyzed: {len(df)}")
    if 'non_monetary_barrier' in df.columns:
        print(f"\nBarrier Distribution:")
        for barrier, count in df['non_monetary_barrier'].value_counts().items():
            print(f"  {barrier}: {count} ({count/len(df)*100:.1f}%)")
    if 'decision_driver' in df.columns:
        print(f"\nDecision Driver Distribution:")
        for driver, count in df['decision_driver'].value_counts().items():
            print(f"  {driver}: {count} ({count/len(df)*100:.1f}%)")

if __name__ == "__main__":
    generate_visualizations()
