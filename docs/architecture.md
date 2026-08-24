# System Architecture: AI-Powered Discovery Engine for Myntra Wishlist

This document outlines the high-level system architecture for the Myntra Wishlist Discovery Engine. The system is designed to ingest data from diverse platforms, filtering for high-intent wishlist signals, and use LLMs to extract behavioral psychology insights.

## High-Level Architecture Diagram

```mermaid
graph TD
    subgraph "Data Ingestion Layer"
        A[Google Play Store] --> |Filtered by keywords| C(Data Aggregator)
        B[YouTube] --> |Keyword Search| C(Data Aggregator)
    end

    subgraph "Data Processing Layer"
        C --> D{Data Cleaner & Filter}
        D --> |Removes Noise/Irrelevant| E[(Raw Data Storage)]
    end

    subgraph "LLM Processing Layer"
        E --> F[Prompt Builder: Behavioral Focus]
        F --> |Batched Text| G[Groq LLM API]
        G --> |JSON/Opportunity Areas| H[Response Parser]
    end

    subgraph "Insights & Presentation Layer"
        H --> I[(Quantified Insights Database)]
        I --> J[Visualization / Dashboarding]
        J --> K[Final Discovery Report]
    end

    subgraph "Interactive UI Layer (Live Prototype)"
        K --> L[React Dashboard]
        K --> M[Live Scraper Simulation]
    end
```

## 1. Data Ingestion Layer
Gathers raw feedback focusing heavily on wishlist behavior, intent, and barriers to purchase.
- **Play Store Scraper:** Uses `google-play-scraper` fetching large volumes of reviews and filtering them locally for wishlist/cart related keywords.
- **YouTube API Module:** Uses `google-api-python-client` to search for "Myntra wishlist haul", "Myntra wishlist vs reality", extracting titles and comments.

## 2. Data Processing & Storage Layer
- **Data Cleaner & Filter:** 
  - Standard text cleaning.
  - Strict filtering to ensure only texts containing signals related to saving, wishlisting, hesitating, or comparing are passed to the LLM.

## 3. LLM Processing Layer (The Core Engine)
- **Prompt Builder:** Constructs prompts instructing the Groq model to act as a behavioral product manager. It asks the LLM to identify the specific friction point, the user's underlying need, and categorize the barrier (e.g., Sizing Uncertainty, Social Validation, Wait for Price Drop).
- **Groq API Integration:** Handles inference endpoints.
- **Response Parser:** Validates and extracts JSON containing identified barriers, user intent segments, and unmet needs.

## 4. Insights & Presentation Layer
- **Processed Insights Database:** Stores the final LLM-evaluated data.
- **Visualization Module:** Charts showing the most common non-monetary barriers preventing 30-day conversion.
- **Final Reporting:** A structured breakdown of the Discovery Engine's findings, highlighting non-monetary opportunity areas for the Growth team.

## 5. Interactive Prototype Layer (Live Working)
- **React Dashboard:** A live, clickable interface to explore the discovery findings (e.g., viewing Trust Deficit percentages dynamically by source).
- **Live Scraper Simulation:** A visual terminal demonstrating the ingestion pipeline actively filtering noise and categorizing high-intent wishlist behaviors, complete with real-time dynamic graphing based on source.
