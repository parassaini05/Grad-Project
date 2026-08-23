# Phase-Wise Implementation Plan: Sentiment and User Experience Analysis of Myntra

This document outlines the step-by-step implementation strategy for the Myntra sentiment analysis project, based on the established problem statement and system architecture.

## Phase 1: Project Setup and Prerequisites
**Objective:** Set up the development environment, acquire necessary API keys, and structure the repository.
- [x] **Repository Setup:** Initialize a Git repository and define the directory structure (e.g., `src/`, `data/`, `notebooks/`, `docs/`).
- [x] **Environment Configuration:** Set up a Python virtual environment and install core dependencies (`google-play-scraper`, `google-api-python-client`, `pandas`, `groq`, `python-dotenv`).
- [x] **API Access:** Register for a Google Cloud project to obtain YouTube Data API credentials. Register for a Groq API key for LLM access.
- [x] **Secret & Config Management:** Store all API credentials and configuration variables (e.g., `PLAY_STORE_PACKAGE`) securely in a `.env` file.

## Phase 2: Data Ingestion Layer Development
**Objective:** Build scrapers to collect raw unstructured feedback from the Google Play Store and YouTube.
- [ ] **Play Store Scraper:** 
  - Write a Python script using `google-play-scraper` to fetch Myntra app reviews.
  - Handle pagination to extract a large volume of historical reviews.
  - Save raw extracted data (review text, rating, date, version) to `data/raw/play_store_reviews.csv`.
- [ ] **YouTube Scraper:**
  - Authenticate using `google-api-python-client`.
  - Query specific videos or search for keywords like "Myntra haul", "Myntra delivery", "Myntra app review".
  - Extract video titles, descriptions, and top comments. Save to `data/raw/youtube_comments.csv`.

## Phase 3: Data Processing & Storage Layer
**Objective:** Clean the raw data to prepare it for LLM analysis.
- [ ] **Data Cleaning:**
  - Remove duplicate entries and irrelevant metadata.
  - Strip URLs, emojis, and special characters using Regex.
  - Handle null values and excessively short reviews.
- [ ] **Data Structuring:** 
  - Combine YouTube and Play Store datasets into a unified format.
  - Save the cleaned, normalized data to `data/processed/cleaned_feedback.csv` or load it into an SQLite database for structured querying.

## Phase 4: LLM Integration and Prompt Engineering
**Objective:** Connect to the Groq API and develop prompts to extract insights.
- [ ] **Groq API Connection:** Implement a Python wrapper around the Groq SDK to send API requests and handle responses/errors.
- [ ] **Prompt Development:** 
  - Design system prompts instructing Groq to act as an expert UX researcher.
  - Instruct the model to return structured JSON containing: `sentiment` (positive/negative/neutral), `category` (UI, Logistics, Quality, etc.), and a `summary`.
- [ ] **Batch Processing:** Write a script to iterate over the cleaned dataset in batches, sending text to the Groq LLM, and handling API rate limits appropriately.

## Phase 5: Insight Extraction & Data Aggregation
**Objective:** Parse LLM responses and store the final structured data.
- [ ] **Response Parsing:** Validate the JSON returned by Groq. Handle any malformed outputs.
- [ ] **Data Aggregation:** Merge the LLM-generated insights (sentiment, category) back with the original review data (date, source, app version).
- [ ] **Final Storage:** Save the final evaluated dataset into `data/final/analyzed_insights.csv` or a dedicated database table.

## Phase 6: Visualization and Final Reporting
**Objective:** Visualize the analyzed data to present actionable recommendations.
- [ ] **Dashboard/Visualization:**
  - Use `matplotlib`, `seaborn`, or `plotly` to create visual charts.
  - *Metrics to visualize:* Overall sentiment distribution, most frequent issue categories (e.g., app crashes vs. delivery delays), and sentiment trends over time.
- [ ] **Final Analytical Report:** 
  - Synthesize the visual findings into a comprehensive document.
  - Formulate actionable recommendations for Myntra's product and engineering teams based on the generated insights.
