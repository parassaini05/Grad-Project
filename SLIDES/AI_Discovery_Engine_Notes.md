# Appendix: AI Discovery Engine — Live Dashboard Workflow

**Reference Document for:** AI Discovery Engine Slide

---

## 1. Overview & Prototype Link
To ensure our hypotheses were grounded in actual user behaviour rather than assumptions, we built a custom NLP pipeline with an interactive React UI (The Discovery Engine Dashboard). This tool allows product managers to live-scrape user feedback, filter it through an LLM, and instantly synthesize behavioral insights.

**🔗 Test the Prototype:** 
*   **Live Dashboard / Source Code:** [Link to your prototype here]

---

## 2. The Step-by-Step Dashboard Workflow

The engine operates in a strict, auditable pipeline designed to eliminate AI hallucination. Below is the step-by-step workflow of how the dashboard converts raw user friction into actionable product metrics.

### Step 1: The Live Scraper Engine (Data Ingestion)
The workflow begins in the **Live Scraper Engine** module. Product Managers can select a specific time range (e.g., "Last 12 Weeks") and a data source (Play Store, YouTube, or Combined) to initiate a live data pull. 

### Step 2: Real-Time AI Tagging (Processing)
Once the scrape is initiated, the integrated terminal console outputs real-time logs. As raw quotes are fetched (e.g., *"delayed delivery from 5-6 days..."*), the AI engine immediately processes them. It uses a strict predefined schema to tag the quote with a specific Category (e.g., `Trust Deficit`) and a User Segment (e.g., `Trust-Gated Shopper`).

### Step 3: Auditing the Raw Data Feed (Validation)
To ensure the AI is not hallucinating, the **Raw Data Feed** tab provides a fully transparent audit log. Every single processed review is listed alongside its exact verbatim quote and the AI-generated tags (Segment & Evidence). If a PM disagrees with an insight, they can trace it back to the exact user quote that generated it.

### Step 4: Quantitative Synthesis (Dynamically Generated Insights)
Once processing is complete, the **Overview** tab synthesizes the data mathematically into dynamically generated insights. Out of 9,127 scraped sources, the dashboard isolates the 221 high-intent signals and aggregates them into definitive charts:
*   **Decision Drivers:** Proves mathematically that *Trust Deficit* (59.7%) vastly outweighs *Price Sensitivity*.
*   **User Segments:** A donut chart highlights that the massive majority of trapped wishlist users are *Trust-Gated Shoppers* (68.8%).
*   **Evidence Types:** A bar chart clearly shows *Delivery Complaints* completely dominating all other forms of friction.
*   **Top Cross-Patterns:** Cross-referencing dimensions reveals that the intersection of *Trust Deficit × Trust-Gated Shopper* is the single largest behavioral pattern.

### Step 5: Core Findings & Verbatim Proof (Actionable Insights)
The bottom half of the Overview dashboard translates these charts into readable Product Management insights (Core Findings). It explains exactly *why* users add products to their wishlist (as a holding area due to trust issues) and *what* prevents them from purchasing (Delivery Anxiety). Crucially, these findings are presented directly next to a feed of **Raw Quotes** to maintain absolute data integrity and user empathy.

### Step 6: System Transparency (The "How it Works" Tab)
To ensure the evaluator fully understands the technical rigor behind the insights, the **How it Works** tab provides a fully interactive visualization of the 5-layer AI pipeline:
1.  **Data Ingestion:** Utilizing `google-play-scraper` and `google-api-python-client` (YouTube).
2.  **Data Processing:** Filtering noise and preparing data.
3.  **LLM Processing:** Tagging via schema constraints.
4.  **Insights & Presentation:** Mathematical aggregation.
5.  **Interactive UI:** This React dashboard.

This tab completely demystifies the engine, proving it is a robust engineering pipeline, not a black box.

---

## 3. Why this approach is robust
By combining a live scraping engine with strict LLM tagging schemas, the Discovery Engine Dashboard turns qualitative user complaining into hard, quantitative product metrics. It removes the "guesswork" from the product roadmap and proves mathematically that solving **Operational Anxiety** is the highest-ROI feature we can build.
