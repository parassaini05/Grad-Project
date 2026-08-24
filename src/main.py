from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Discovery Engine API")

# Allow Vercel frontend and local dev
origins = [
    "http://localhost:5173",
    "https://discovery-engine.vercel.app" # Your future Vercel domain
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
def trigger_scrape():
    # This is a placeholder for your future backend scraper logic
    return {"data": "Scraper pipeline will be integrated here."}
