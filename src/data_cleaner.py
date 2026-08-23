import os
import pandas as pd
import re

def clean_text(text):
    if not isinstance(text, str):
        return ""
    
    # Remove URLs
    text = re.sub(r'http\S+|www.\S+', '', text, flags=re.MULTILINE)
    
    # Remove emojis and non-ascii (optional, but good for some LLMs)
    text = text.encode('ascii', 'ignore').decode('ascii')
    
    # Remove extra whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    
    return text

def filter_wishlist_intent(df, text_col='text'):
    """
    Apply strict Regex filters to ensure texts are explicitly related 
    to purchase decisions, saving, cart, and wishlisting.
    """
    keywords = ['wishlist', 'wish list', 'cart', 'save', 'price drop', 'waiting', 'later', 'buy', 'purchase', 'decide', 'hesitate', 'size', 'fit', 'review']
    pattern = '|'.join(keywords)
    
    return df[df[text_col].str.contains(pattern, case=False, na=False)].copy()

def process_play_store_data(file_path):
    if not os.path.exists(file_path):
        print(f"Warning: {file_path} not found.")
        return pd.DataFrame()
        
    df = pd.read_csv(file_path)
    
    # Rename columns to standard format
    # columns: reviewId, userName, content, score, thumbsUpCount, reviewCreatedVersion, at
    df = df.rename(columns={
        'reviewId': 'id',
        'userName': 'author',
        'content': 'text',
        'thumbsUpCount': 'likes',
        'at': 'timestamp'
    })
    
    df['source'] = 'Play Store'
    
    # Keep only relevant columns
    cols = ['source', 'id', 'author', 'text', 'timestamp', 'likes', 'score']
    df = df[[c for c in cols if c in df.columns]]
    return df

def process_youtube_data(file_path):
    if not os.path.exists(file_path):
        print(f"Warning: {file_path} not found.")
        return pd.DataFrame()
        
    df = pd.read_csv(file_path)
    
    # columns: videoId, commentId, author, text, likeCount, publishedAt, videoTitle
    df = df.rename(columns={
        'commentId': 'id',
        'likeCount': 'likes',
        'publishedAt': 'timestamp'
    })
    
    df['source'] = 'YouTube'
    
    cols = ['source', 'id', 'author', 'text', 'timestamp', 'likes', 'videoId', 'videoTitle']
    df = df[[c for c in cols if c in df.columns]]
    return df

def main():
    print("Starting Data Processing & Cleaning...")
    
    raw_dir = os.path.join("data", "raw")
    processed_dir = os.path.join("data", "processed")
    os.makedirs(processed_dir, exist_ok=True)
    
    ps_file = os.path.join(raw_dir, "play_store_reviews.csv")
    yt_file = os.path.join(raw_dir, "youtube_comments.csv")
    
    # 1. Load Data
    df_ps = process_play_store_data(ps_file)
    df_yt = process_youtube_data(yt_file)
    
    # Combine
    dfs = [df for df in [df_ps, df_yt] if not df.empty]
    
    if not dfs:
        print("No raw data found to process.")
        return
        
    df_combined = pd.concat(dfs, ignore_index=True)
    print(f"Total raw rows: {len(df_combined)}")
    
    # 2. Data Cleaning
    df_combined['text'] = df_combined['text'].apply(clean_text)
    
    # Remove empty texts
    df_combined = df_combined[df_combined['text'].str.strip() != ""]
    
    # Drop duplicates
    df_combined = df_combined.drop_duplicates(subset=['text'])
    print(f"Rows after dropping duplicates and empty texts: {len(df_combined)}")
    
    # 3. Apply Strict Filtering
    df_filtered = filter_wishlist_intent(df_combined, 'text')
    print(f"Rows after strict keyword filtering: {len(df_filtered)}")
    
    # Save to processed
    output_csv = os.path.join(processed_dir, "cleaned_feedback.csv")
    output_json = os.path.join(processed_dir, "normalized_reviews.json")
    
    df_filtered.to_csv(output_csv, index=False)
    # Export to JSON format for LLM Phase
    df_filtered.to_json(output_json, orient='records', indent=4)
    
    print(f"Successfully saved cleaned data to {output_csv} and {output_json}")

if __name__ == "__main__":
    main()
