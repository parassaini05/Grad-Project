# Phase-Wise Implementation Plan: AI-Powered Discovery Engine (Part 1)

## Phase 1: Project Setup and Prerequisites
**Objective:** Set up the development environment, acquire necessary API keys, and structure the repository.
- [x] **Repository Setup:** Initialize a Git repository and define the directory structure.
- [x] **Environment Configuration:** Set up a Python virtual environment and install core dependencies.
- [x] **API Access:** Register for Groq API.
- [x] **Secret & Config Management:** Store all API credentials securely in a `.env` file.

## Phase 2: Data Ingestion & Data Processing Layer
**Objective:** Collect raw unstructured feedback targeting wishlist behavior and normalize it for analysis.
- [x] **Play Store & YouTube Scrapers:** 
  - Fetch reviews and comments from the last 12 weeks.
  - Apply data quality filters (exclude < 8 words, exclude emojis, exclude Hindi language).
  - Apply keyword filtering for wishlist/cart behaviors.
- [x] **Data Normalization:** 
  - Clean and normalize the text.
  - Export the final dataset to `data/processed/normalized_reviews.json`.

## Phase 3: LLM Processing Layer
**Objective:** Connect to the Groq API, execute the behavioral analysis strategy, and assign structured enum tags.
- [x] **Groq API Connection:** Implement a Python wrapper around the Groq SDK.
- [x] **Prompt Development & Extraction:** 
  - Instruct the model to act as a Growth Product Manager.
  - Output strict JSON categorizing the barriers and answering key behavioral questions.
  - Parse responses and merge them back with the original context.
- [x] **Enum Tag Taxonomy (Enhanced):**
  - Assign predefined tags across 4 dimensions per review:
    - **Decision Drivers:** Convenience, Price Sensitivity, Quality Uncertainty, Trust Deficit, Delivery Anxiety, etc.
    - **Purchase Context:** Routine Replenishment, Occasion Shopping, Impulse Browse, Wishlist Hoarding, etc.
    - **User Segments:** Habitual Buyer, Hesitant First-Timer, Fit-Anxious Shopper, Trust-Gated Shopper, etc.
    - **Evidence Types:** Cart Abandonment, Wishlist Stagnation, Return Anxiety, Sizing Complaint, etc.
  - Extract **verbatim customer quotes** from each review for the Customer Voices section.

## Phase 4: Insights & Presentation Layer
**Objective:** Synthesize the extracted insights into a multi-layered report with Insight + Data Proof + Customer Voices.
- [x] **Data Aggregation:** Quantify the frequency of different non-monetary barriers, decision drivers, and user segments.
- [x] **Cross-Pattern Analysis:** Generate co-occurrence matrices (Decision Driver × User Segment) to uncover multi-dimensional behavioral patterns.
- [x] **Dashboard/Visualization:** Generate charts including barrier frequencies, enum tag distributions, user segment pie charts, and cross-pattern heatmaps.
- [x] **Rewrite Discovery Report:** Revise `docs/discovery-report.md` with the enhanced 3-layer format:
  - **Insight:** Narrative synthesis of the behavioral pattern.
  - **Data Proof:** Hard percentages from the tagged dataset.
  - **Customer Voices:** Verbatim quotes from real users anchoring the insight.

## Phase 5: Interactive Prototype Layer (Live Working)
**Objective:** Provide a testable, live link demonstrating the workflow and findings of the AI Discovery Engine as required for the final Part 1 deliverable.
- [x] **Interactive Dashboard Generation:** Build a React-based UI mapping all insights, data proofs, and quotes dynamically by source (Play Store vs YouTube).
- [x] **Live Scraper Simulation:** Build a view demonstrating the backend ingestion pipeline actively filtering noise and identifying wishlist/cart high-intent signals.
- [x] **Deployment:** Configure Railway for the FastAPI backend and Vercel for the Vite frontend to provide a publicly accessible link for testing the workflow.

## Phase 6: Business Metric Decomposition (Part 2)
**Objective:** Break down the Wishlist → Purchase Conversion metric and determine where the highest-potential opportunities lie.
- [x] **Audit Live Product:** Map out the exact step-by-step workflow for a Myntra user converting a wishlisted item to a purchase within 30 days.
- [x] **Define Metric Tree:** Deconstruct the conversion math (W2P30) into sequential probabilities (login, revisit, buyable size/stock, fit decision, trust).
- [x] **Synthesize Opportunities:** Intersect the AI Discovery Engine insights (Part 1) with the product flow to rank drop-off severity.
- [x] **Create Deliverable:** Generate `part-2-metric-decomposition.md` and script a PPT slide `part-2-one-slide.pptx` for the final deck.

## Phase 7: User Research (Part 3)
**Objective:** Validate the highest potential opportunity through primary research (5-6 user interviews).
- [ ] **Define Target Segment:** Select a segment (e.g., Trust-Gated Shoppers or Fit-Anxious Shoppers) based on Part 1 & 2.
- [ ] **Draft Interview Guide:** Prepare a script targeting why they saved items, intention to purchase, roadblocks, and off-app behavior.
- [ ] **Conduct Interviews & Synthesize:** Conduct 5-6 interviews and extract root causes preventing desired behavior.
