import os
import pandas as pd
from google_play_scraper import Sort, reviews
from dotenv import load_dotenv

def fetch_play_store_reviews(package_name, count=10000):
    print(f"Fetching {count} reviews for package: {package_name}")
    
    result, continuation_token = reviews(
        package_name,
        lang='en',
        country='in',
        sort=Sort.NEWEST,
        count=count
    )
    
    return result

def main():
    # Load environment variables
    load_dotenv()
    PLAY_STORE_PACKAGE = os.getenv("PLAY_STORE_PACKAGE", "com.myntra.android")

    print("Starting Play Store data ingestion...")
    
    # Fetch reviews
    reviews_data = fetch_play_store_reviews(PLAY_STORE_PACKAGE, count=10000)
    
    if not reviews_data:
        print("No reviews found.")
        return
        
    print(f"Successfully fetched {len(reviews_data)} reviews.")
    
    # Convert to DataFrame
    df = pd.DataFrame(reviews_data)
    
    # Select relevant columns
    columns_to_keep = ['reviewId', 'userName', 'content', 'score', 'thumbsUpCount', 'reviewCreatedVersion', 'at']
    # Filter only columns that exist to prevent errors
    columns_to_keep = [col for col in columns_to_keep if col in df.columns]
    
    df = df[columns_to_keep]
    
    # Filter for wishlist and conversion keywords
    keywords = ['wishlist', 'wish list', 'cart', 'save', 'price drop', 'waiting', 'later']
    pattern = '|'.join(keywords)
    
    # Keep rows where content contains any of the keywords (case-insensitive)
    df = df[df['content'].str.contains(pattern, case=False, na=False)]
    
    print(f"Filtered down to {len(df)} reviews mentioning wishlist/cart behaviors.")
    
    # Save to CSV
    output_dir = os.path.join("data", "raw")
    os.makedirs(output_dir, exist_ok=True)
    
    output_path = os.path.join(output_dir, "play_store_reviews.csv")
    df.to_csv(output_path, index=False)
    
    print(f"Data saved to {output_path}")

if __name__ == "__main__":
    main()
