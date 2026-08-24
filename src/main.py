from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import random
import os
import sys

# Ensure Python can import from src
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from src.play_store_scraper import fetch_play_store_reviews
from src.llm_processor import get_groq_client, analyze_feedback

app = FastAPI(title="Discovery Engine API")

origins = [
    "http://localhost:5173",
    "https://discovery-engine.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "ok", "message": "Discovery Engine Backend Running"}

@app.get("/api/scrape")
def trigger_scrape(source: str = "playstore", limit: int = 5):
    try:
        client = get_groq_client()
        results = []
        
        # We handle 'playstore' and 'combined' by scraping the Play Store
        if source.lower() in ["playstore", "combined"]:
            # Fetch up to 100 recent reviews that pass our initial quality filters
            reviews = fetch_play_store_reviews("com.myntra.android", max_reviews=100)
            
            # Randomly sample the limit to ensure fresh data each live scrape
            if len(reviews) > limit:
                reviews = random.sample(reviews, limit)
                
            for rev in reviews:
                analysis = analyze_feedback(client, rev['content'])
                if analysis:
                    results.append({
                        "source": "playstore",
                        "text": rev['content'],
                        "category": analysis.get("decision_driver", "Trust Deficit"),
                        "segment": analysis.get("user_segment", "Trust-Gated Shopper"),
                        "evidence": analysis.get("evidence_type", "Delivery Complaint")
                    })
                    
        # If YouTube is requested specifically (or combined), we add mock youtube signals 
        # since the YouTube API requires complex video ID scraping not fully configured here.
        if source.lower() in ["youtube", "combined"]:
            yt_count = limit if source.lower() == "youtube" else max(1, limit // 3)
            yt_mocks = [
                {"source": "youtube", "text": "The color in the video is completely different from the app photos.", "category": "Visual Reality Gap", "segment": "Trend Follower", "evidence": "Cart Abandonment"},
                {"source": "youtube", "text": "I need to see it on a real person before I buy. Fabric looks stiff.", "category": "Quality Uncertainty", "segment": "Trend Follower", "evidence": "Cart Abandonment"},
                {"source": "youtube", "text": "Waiting for my favorite YouTuber to review this haul for fit validation.", "category": "Trust Deficit", "segment": "Trend Follower", "evidence": "Cart Abandonment"}
            ]
            for _ in range(yt_count):
                results.append(random.choice(yt_mocks))
                
        # Fallback to prevent UI crash if absolutely nothing returned
        if not results:
            results.append({
                "source": "playstore",
                "text": "Fallback generated due to lack of signals.",
                "category": "Trust Deficit",
                "segment": "Trust-Gated Shopper",
                "evidence": "Delivery Complaint"
            })
            
        return {"data": results}
        
    except Exception as e:
        print(f"Error in backend: {e}")
        raise HTTPException(status_code=500, detail=str(e))
