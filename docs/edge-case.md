# Edge Cases and Corner Scenarios: Wishlist Discovery Engine

When building a real-world data pipeline and utilizing Large Language Models (LLMs), several edge cases can compromise the stability of the system or the accuracy of the insights. This document outlines the potential edge cases for the Myntra Wishlist Discovery Engine and proposed handling strategies.

## 1. Data Ingestion (Scraping & APIs)

### 1.1. Rate Limiting and IP Blocking
- **Scenario:** The Google Play Store scraper or the YouTube Data API is blocked temporarily due to making too many requests in a short period.
- **Handling Strategy:** 
  - Implement exponential backoff and retry logic for API calls.
  - For YouTube, strictly adhere to the YouTube Data API rate limits and quota allocations.
  - Use pagination with deliberate time delays (e.g., `time.sleep()`) between bulk requests.

### 1.2. Deleted, Empty, or "Ghost" Data
- **Scenario:** A YouTube video or comment is deleted between the time it is scraped and processed, or a Play Store review contains only a star rating with no text.
- **Handling Strategy:** 
  - Ensure the scraper explicitly checks for `None`, `[deleted]`, or empty string text bodies.
  - Filter out text-less reviews during the initial Pandas preprocessing phase; star ratings without text cannot undergo behavioral analysis.

## 2. Data Processing & Linguistic Variations

### 2.1. Mixed Languages and "Hinglish"
- **Scenario:** Given Myntra's Indian user base, reviews are frequently written in "Hinglish" (Hindi written in the English alphabet) or regional languages mixed with English (e.g., "Delivery late tha, but product achha hai").
- **Handling Strategy:** 
  - Explicitly instruct the Groq LLM in the system prompt that it should expect and interpret Indian colloquialisms and Hinglish. 
  - If a review is entirely in a regional script, either filter it out or use a lightweight translation library before sending it to the LLM.

### 2.2. Sarcasm and Ambiguity
- **Scenario:** A user writes, "Great job delivering a torn shirt after 2 weeks. Best app ever." Traditional sentiment analysis would label this as positive, missing the actual conversion barrier.
- **Handling Strategy:** 
  - Rely on the advanced contextual understanding of the Groq LLM. The prompt must explicitly instruct the LLM to identify sarcasm and label the actual underlying `non_monetary_barrier` (e.g., "Delivery Delay / Trust Deficit").

### 2.3. Spam, Bot Reviews, and Promos
- **Scenario:** Reviews containing promotional links, repeated characters ("wooooooow"), or bot spam.
- **Handling Strategy:**
  - Implement Regex filters to strip URLs.
  - Drop reviews that consist of a single word repeated excessively or lack meaningful structure.

### 2.4. Exceeding Token Limits
- **Scenario:** A YouTube "rant" comment or video transcript is extremely long and exceeds the maximum context window of the chosen Groq LLM.
- **Handling Strategy:** 
  - Implement a token counter (or character limit heuristic) before making the API call.
  - If a text exceeds the limit, truncate the text to the maximum allowable length (usually preserving the beginning and end of the text, where the main points usually reside).

## 3. LLM Integration (Groq API)

### 3.1. Malformed JSON Responses
- **Scenario:** The Groq LLM is instructed to return a strict JSON format (e.g., `{"non_monetary_barrier": "Stock Uncertainty"}`), but instead it returns conversational text before the JSON, or a malformed JSON string (e.g., missing quotes).
- **Handling Strategy:**
  - Use strict system prompts (e.g., "Return ONLY valid JSON. Do not include introductory text.").
  - Use Python's `json.loads()` inside a `try-except` block. If parsing fails, use Regex to extract the JSON payload from the text, or fallback to labeling the review as "Uncategorized".

### 3.2. Hallucinated Categories
- **Scenario:** The LLM invents a new category that isn't part of the predefined list (e.g., categorizing an issue as "Astronomy" instead of "Logistics").
- **Handling Strategy:** 
  - Provide a strict, enumerated list of allowed categories in the prompt.
  - Add a validation step in Python: if the returned category `not in ALLOWED_CATEGORIES`, map it to a default category like "Other".

### 3.3. API Timeouts or Downtime
- **Scenario:** The Groq API is temporarily down or requests time out.
- **Handling Strategy:**
  - Use robust error handling (`try-except`) for network requests.
  - Save processed progress frequently (e.g., saving to CSV after every batch of 100) so that if the script crashes due to an API timeout, processing can resume from the last saved state rather than starting over.
