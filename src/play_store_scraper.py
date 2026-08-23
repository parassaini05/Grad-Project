import os
import pandas as pd
from google_play_scraper import Sort, reviews
from dotenv import load_dotenv
from datetime import datetime, timedelta
import emoji
from langdetect import detect

def is_valid_review(text):
    if not isinstance(text, str) or not text.strip():
        return False
        
    # 1. Less than 8 words
    if len(text.split()) < 8:
        return False
        
    # 2. Contains emoji
    if emoji.emoji_count(text) > 0:
        return False
        
    # 3. In Hindi language
    try:
        lang = detect(text)
        if lang == 'hi':
            return False
    except:
        return False
        
    return True

def fetch_play_store_reviews(package_name, max_reviews=50000):
    print(f"Fetching reviews for package: {package_name}")
    
    twelve_weeks_ago = datetime.now() - timedelta(weeks=12)
    
    result, continuation_token = reviews(
        package_name,
        lang='en',
        country='in',
        sort=Sort.NEWEST,
        count=max_reviews
    )
    
    valid_reviews = []
    
    for rev in result:
        rev_date = rev['at']
        if rev_date < twelve_weeks_ago:
            continue
            
        if is_valid_review(rev['content']):
            valid_reviews.append(rev)
            
    return valid_reviews

def main():
    load_dotenv()
    PLAY_STORE_PACKAGE = os.getenv("PLAY_STORE_PACKAGE", "com.myntra.android")

    print("Starting Play Store data ingestion (Last 12 weeks)...")
    
    reviews_data = fetch_play_store_reviews(PLAY_STORE_PACKAGE, max_reviews=50000)
    
    if not reviews_data:
        print("No reviews found matching criteria.")
        return
        
    print(f"Successfully fetched {len(reviews_data)} valid reviews from the last 12 weeks.")
    
    df = pd.DataFrame(reviews_data)
    
    columns_to_keep = ['reviewId', 'userName', 'content', 'score', 'thumbsUpCount', 'reviewCreatedVersion', 'at']
    columns_to_keep = [col for col in columns_to_keep if col in df.columns]
    
    df = df[columns_to_keep]
    
    keywords = ['wishlist', 'wish list', 'cart', 'save', 'price drop', 'waiting', 'later']
    pattern = '|'.join(keywords)
    
    df = df[df['content'].str.contains(pattern, case=False, na=False)]
    
    print(f"Filtered down to {len(df)} reviews mentioning wishlist/cart behaviors.")
    
    output_dir = os.path.join("data", "raw")
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, "play_store_reviews.csv")
    df.to_csv(output_path, index=False)
    
    print(f"Data saved to {output_path}")

if __name__ == "__main__":
    main()
