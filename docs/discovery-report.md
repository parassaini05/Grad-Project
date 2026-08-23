# Discovery Engine Findings: Myntra Wishlist Conversion

## 1. Introduction & Methodology
To understand the behavioral psychology behind wishlist-to-purchase conversion without relying on monetary incentives, we built an AI-powered Discovery Engine. This engine ingested qualitative feedback from the Google Play Store and YouTube, filtered it for high-intent wishlist/cart signals, and utilized a Large Language Model (Groq) to programmatically extract non-monetary barriers and unmet needs.

This report synthesizes the findings to directly answer the core behavioral research questions and identify quantifiable opportunity areas for the Growth team.

---

## 2. Answers to Core Research Questions

**1. Why do users add fashion products to their wishlist?**
Users utilize the wishlist primarily to delay immediate decision-making. They identify a desirable product but encounter a point of friction—often related to operational trust or delivery uncertainty—that stops them from completing the checkout immediately.

**2. What prevents wishlisted products from eventually being purchased?**
Based on our quantified extraction, the primary non-monetary preventers are *post-purchase anxiety*. Users fear order cancellations, poor customer service if something goes wrong, and unexpected delivery delays.

**3. What uncertainties remain after users have identified a product they like?**
Users are highly uncertain about the *fulfillment reliability* of the platform. Even if they love the product, they are unsure if it will arrive on time, or if they will be able to easily return it if the fit is poor.

**4. What causes users to postpone a purchase?**
Postponement is frequently caused by a lack of real-time transparency. Users pause to look for guarantees (e.g., guaranteed delivery dates for specific hyper-local regions like Tier-2/3 cities) and hold off on buying until they feel confident the logistics will hold up.

**5. How do users compare multiple shortlisted products?**
While our specific data subset didn't heavily index on direct product-to-product comparison, general trends indicate users compare the perceived "risk" of buying one item over another (e.g., comparing the return policy or the number of reviews on similar items).

**6. What information do users seek outside Myntra before purchasing?**
Users frequently turn to YouTube hauls and Reddit to seek out *social validation* and visual proof of fabric quality, fit, and accurate coloring, trying to bridge the gap between polished catalog photos and reality.

**7. What role do fit, size, styling, price, reviews, occasion and social validation play?**
Fit and sizing act as massive friction points. If a user is uncertain about their size, they will leave the item in the wishlist rather than risk the hassle of a return process. Social validation (reviews/photos) is the primary tool they use to overcome this sizing uncertainty.

**8. When do users use the wishlist as genuine purchase intent versus simply as a bookmarking mechanism?**
Genuine purchase intent is signaled when users actively monitor the wishlist for stock availability. Bookmarking is often used for "inspiration" without immediate intent to buy.

**9. How do these behaviors differ across user segments?**
Users in Tier-2/3 cities exhibit significantly higher anxiety regarding delivery logistics and local courier reliability compared to metro users.

**10. What unmet needs emerge consistently across user conversations?**
The most frequent unmet needs extracted by the AI were:
- Transparent, real-time communication regarding order and refund status.
- Simplified, hassle-free return processes with guaranteed packaging quality.
- Reliable local logistics in underserved areas.

---

## 3. High-Potential Opportunity Areas

By quantifying the non-monetary barriers extracted from user feedback, we have identified three distinct opportunity areas that influence the 30-day wishlist conversion metric. 

*(Note: These represent behavioral opportunities to solve, not specific MVP features).*

### Opportunity Area 1: Bridging the "Trust & Support Deficit"
- **The Friction:** Users abandon wishlists because they fear poor customer service and slow refund processing if they need to return an item.
- **The Opportunity:** Improving the perceived reliability of post-purchase support directly on the product detail page can lower the perceived risk of checking out.

### Opportunity Area 2: Eliminating "Delivery & Fulfillment Anxiety"
- **The Friction:** Vague delivery timelines, especially in non-metro areas, cause users to hesitate.
- **The Opportunity:** Providing hyper-local, high-confidence delivery guarantees while an item is sitting in the wishlist can act as a non-monetary trigger to purchase.

### Opportunity Area 3: Mitigating "Stock Uncertainty"
- **The Friction:** Wishlisted items frequently go out of stock silently, resulting in permanently lost conversion opportunities.
- **The Opportunity:** Communicating stock velocity and scarcity dynamically can create organic, non-monetary urgency to purchase.

---
*These opportunity areas represent the foundation for Part 2 and Part 3 (Metric Decomposition and Primary Research) to determine which specific problem to pursue for the MVP.*
