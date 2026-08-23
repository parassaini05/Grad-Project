# Phase-Wise Implementation Plan: AI-Powered Discovery Engine for Myntra Wishlist

## Phase 1: Project Setup and Prerequisites
**Objective:** Set up the development environment, acquire necessary API keys, and structure the repository.
- [x] **Repository Setup:** Initialize a Git repository and define the directory structure.
- [x] **Environment Configuration:** Set up a Python virtual environment and install core dependencies.
- [x] **API Access:** Register for Groq API.
- [x] **Secret & Config Management:** Store all API credentials securely in a `.env` file.

## Phase 2: Data Ingestion & Normalization
**Objective:** Collect raw unstructured feedback targeting wishlist behavior and normalize it for analysis.
- [x] **Play Store & YouTube Scrapers:** 
  - Fetch reviews and comments from the last 12 weeks.
  - Apply data quality filters (exclude < 8 words, exclude emojis, exclude Hindi language).
  - Apply keyword filtering for wishlist/cart behaviors.
- [x] **Data Normalization:** 
  - Clean and normalize the text.
  - Export the final dataset to `data/processed/normalized_reviews.json`.

## Phase 3: LLM Integration and Prompt Engineering
**Objective:** Connect to the Groq API and execute the behavioral analysis strategy.
- [x] **Groq API Connection:** Implement a Python wrapper around the Groq SDK.
- [x] **Prompt Development & Extraction:** 
  - Instruct the model to act as a Growth Product Manager.
  - Output strict JSON categorizing the barriers (e.g., Fit Uncertainty, Social Validation).
  - Parse responses and merge them back with the original context.

## Phase 4: Visualization and Final Reporting
**Objective:** Visualize the analyzed data to present actionable recommendations.
- [x] **Data Aggregation:** Quantify the frequency of different non-monetary barriers and unmet needs.
- [x] **Dashboard/Visualization:** Generate charts (e.g., using matplotlib/seaborn or saving data for BI tools) to visually represent the friction points.
- [x] **Final Discovery Report:** Formulate non-monetary, product-led opportunity areas (e.g., UI changes, social proof integration, fit predictors) to increase the 30-day wishlist conversion rate.
