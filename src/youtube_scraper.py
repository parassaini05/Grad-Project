import os
import pandas as pd
from googleapiclient.discovery import build
from dotenv import load_dotenv

def search_youtube_videos(youtube, query, max_results=5):
    print(f"Searching YouTube for: {query}")
    request = youtube.search().list(
        q=query,
        part='id,snippet',
        type='video',
        maxResults=max_results
    )
    response = request.execute()
    
    videos = []
    for item in response.get('items', []):
        videos.append({
            'videoId': item['id']['videoId'],
            'title': item['snippet']['title'],
            'description': item['snippet']['description'],
            'publishedAt': item['snippet']['publishedAt']
        })
    return videos

def fetch_video_comments(youtube, video_id, max_results=50):
    comments = []
    try:
        request = youtube.commentThreads().list(
            part='snippet',
            videoId=video_id,
            maxResults=max_results,
            textFormat='plainText'
        )
        response = request.execute()
        
        for item in response.get('items', []):
            comment_snippet = item['snippet']['topLevelComment']['snippet']
            comments.append({
                'videoId': video_id,
                'commentId': item['id'],
                'author': comment_snippet['authorDisplayName'],
                'text': comment_snippet['textDisplay'],
                'likeCount': comment_snippet['likeCount'],
                'publishedAt': comment_snippet['publishedAt']
            })
    except Exception as e:
        print(f"Error fetching comments for video {video_id}: {e}")
        
    return comments

def main():
    load_dotenv()
    API_KEY = os.getenv("YOUTUBE_API_KEY")
    
    if not API_KEY:
        print("Error: YOUTUBE_API_KEY not found in .env file")
        return
        
    print("Starting YouTube data ingestion...")
    youtube = build('youtube', 'v3', developerKey=API_KEY)
    
    queries = ["Myntra wishlist haul", "Myntra wishlist", "Myntra shopping cart", "Why I don't buy from Myntra"]
    all_videos = []
    
    for query in queries:
        videos = search_youtube_videos(youtube, query, max_results=3)
        all_videos.extend(videos)
        
    # Deduplicate videos by ID
    unique_videos = {v['videoId']: v for v in all_videos}.values()
    print(f"Found {len(unique_videos)} unique videos to process.")
    
    all_comments = []
    for video in unique_videos:
        safe_title = video['title'].encode('ascii', 'ignore').decode('ascii')
        print(f"Fetching comments for video: {safe_title}")
        comments = fetch_video_comments(youtube, video['videoId'], max_results=50)
        
        # Merge video info into comments
        for comment in comments:
            comment['videoTitle'] = video['title']
            
        all_comments.extend(comments)
        
    if not all_comments:
        print("No comments found.")
        return
        
    print(f"Successfully fetched {len(all_comments)} comments.")
    
    df = pd.DataFrame(all_comments)
    
    output_dir = os.path.join("data", "raw")
    os.makedirs(output_dir, exist_ok=True)
    
    output_path = os.path.join(output_dir, "youtube_comments.csv")
    df.to_csv(output_path, index=False)
    
    print(f"Data saved to {output_path}")

if __name__ == "__main__":
    main()
