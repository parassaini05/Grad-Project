# Phase-Wise Implementation Plan: AI-Powered Discovery Engine for Myntra Wishlist

## Phase 1: Project Setup and Prerequisites
**Objective:** Set up the development environment, acquire necessary API keys, and structure the repository.
- [x] **Repository Setup:** Initialize a Git repository and define the directory structure (`src/`, `data/`, `notebooks/`, `docs/`).
- [x] **Environment Configuration:** Set up a Python virtual environment and install core dependencies (`google-play-scraper`, `google-api-python-client`, `pandas`, `groq`, `python-dotenv`).
- [x] **API Access:** Register for Google Cloud (YouTube) and Groq API.
- [x] **Secret & Config Management:** Store all API credentials and configuration variables (`PLAY_STORE_PACKAGE`) securely in a `.env` file.

## Phase 2: Data Ingestion Layer Development
**Objective:** Build scrapers to collect raw unstructured feedback specifically targeting wishlist and purchase hesitation behavior.
- [ ] **Play Store Scraper Refactor:** 
  - Update script to fetch a larger volume covering the last 12 weeks of reviews.
  - Apply data quality filters during scraping:
    - Exclude reviews with less than 8 words.
    - Exclude reviews containing emojis.
    - Exclude reviews in the Hindi language.
  - Add keyword filtering to only save reviews mentioning `wishlist`, `cart`, `save`, `price drop`, `waiting`, etc.
- [ ] **YouTube Scraper Refactor:**
  - Update queries to "Myntra wishlist haul", "Myntra wishlist vs reality", "Why I don't buy from Myntra".
  - Apply the same data quality filters and 12-week time range.

## Phase 3: Data Processing & Storage Layer
**Objective:** Clean the raw data to prepare it for LLM analysis.
- [x] **Data Cleaning & Filtering:**
  - Remove duplicate entries and irrelevant metadata.
  - Strip URLs, emojis, and special characters.
  - Apply strict Regex/NLP filters to ensure texts passed to the LLM are explicitly related to purchase decisions and wishlisting.

## Phase 4: LLM Integration and Prompt Engineering
**Objective:** Connect to the Groq API and develop prompts to extract behavioral insights without relying on monetary incentives.
- [ ] **Groq API Connection:** Implement a Python wrapper around the Groq SDK.
- [ ] **Prompt Development (Behavioral Focus):** 
  - Instruct the model to act as a Growth Product Manager.
  - Extract specific details: Why was it wishlisted? What is the non-monetary barrier to purchase? (e.g., fit uncertainty, waiting for reviews, social validation).
  - Output strict JSON categorizing these barriers.

## Phase 5: Insight Extraction & Data Aggregation
**Objective:** Parse LLM responses and store the final structured data.
- [ ] **Response Parsing:** Validate JSON.
- [ ] **Data Aggregation:** Merge identified barriers back with the original text context.

## Phase 6: Visualization and Final Reporting
**Objective:** Visualize the analyzed data to present actionable recommendations.
- [ ] **Dashboard/Visualization:**
  - Quantify the frequency of different non-monetary barriers.
- [ ] **Final Discovery Report:** 
  - Formulate non-monetary, product-led opportunity areas (e.g., UI changes, social proof integration, fit predictors) to increase the 30-day wishlist conversion rate.
