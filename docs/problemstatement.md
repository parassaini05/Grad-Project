# Problem Statement: AI-Powered Discovery Engine for Myntra Wishlist Conversion

## 1. Background
In the highly competitive landscape of fashion e-commerce, platforms like **Myntra** see millions of users browsing, saving items, and adding products to their wishlists. The wishlist is a high-intent signal—it indicates explicit interest in an item that stopped short of a purchase. Over time, users accumulate dozens or hundreds of wishlisted products, but only a fraction translate into actual purchases.

## 2. The Problem
One of Myntra's strategic goals is to **increase the percentage of users who purchase at least one item from their wishlist within 30 days of adding it**. Improving this conversion rate would increase purchase frequency and better monetize existing users by extracting value from high-intent demand already on the platform.

However, the underlying user problems preventing these purchases are not fully understood. We need to discover the root causes of this friction.
**Crucial Constraint:** The solution **CANNOT** rely on offering monetary incentives (discounts, coupons, cashbacks) to the users.

## 3. Proposed Solution: The Discovery Engine
Before proposing any product solutions, we will build an AI-powered Discovery Engine using the **Groq LLM**. This system will analyze user feedback at scale from decentralized platforms (App Store, Play Store, Reddit, YouTube, Fashion Communities) to understand the behavioral psychology behind wishlisting.

The workflow will go beyond basic summarization and sentiment analysis. It will enable the product team to identify, quantify, and compare potential opportunity areas that influence wishlist-to-purchase conversion.

## 4. Key Research Questions
The Discovery Engine will process unstructured data to answer:
- Why do users add fashion products to their wishlist?
- What prevents wishlisted products from eventually being purchased?
- What uncertainties remain after users have identified a product they like?
- What causes users to postpone a purchase?
- How do users compare multiple shortlisted products?
- What information do users seek outside Myntra before purchasing?
- What role do fit, size, styling, price, reviews, occasion, and social validation play?
- When do users use the wishlist as genuine purchase intent versus simply as a bookmarking mechanism?
- How do these behaviors differ across user segments?
- What unmet needs emerge consistently across user conversations?

## 5. Data Sources & AI Stack
- **Target Product:** Myntra
- **Large Language Model:** Groq (for rapid, complex analysis)
- **Data Sources:** 
  - Google Play Store / App Store (Reviews mentioning wishlist, cart, saving)
  -
  - YouTube (Comments on fashion hauls, "Myntra Wishlist" videos)
- **Primary Language:** Python
