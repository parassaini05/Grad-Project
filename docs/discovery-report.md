# Final Discovery Report: Myntra Wishlist Conversion Strategy

## Executive Summary
This report outlines non-monetary strategies to increase the 30-day wishlist-to-purchase conversion rate on Myntra. By analyzing recent qualitative feedback (Google Play Store and YouTube), passing it through data-cleaning pipelines, and extracting structured insights via an LLM (acting as a Growth PM), we have identified critical friction points that prevent users from converting high-intent wishlist items into purchases.

Crucially, these recommendations focus entirely on **product-led growth and UI/UX improvements**, strictly adhering to the constraint of avoiding monetary incentives (discounts, coupons, cashbacks).

---

## Key Friction Points (Non-Monetary Barriers)
Based on the programmatic extraction of user sentiment, the leading causes for wishlist stagnation are tied to post-purchase anxiety and operational transparency, rather than the product's price itself. 

The top extracted barriers include:
1. **Order Fulfillment Anxiety:** High uncertainty regarding order cancellations and service reliability.
2. **Delivery Transparency:** Frustration with vague delivery timelines and unexpected delays, particularly in underserved regions (e.g., Tier-2/3 cities).
3. **Trust & Support Deficit:** Difficulty in accessing real-time, helpful customer service when a product in the wishlist is finally ordered but faces issues.
4. **Stock Uncertainty:** Items sitting in wishlists frequently go out of stock without proactive warnings, leading to missed conversion windows.

---

## Unmet User Needs
When users add items to their wishlist, they are often waiting for more than just a price drop. The data reveals they are waiting for *reassurance*.

- **Real-Time Communication:** Users need proactive, transparent updates about their order status, especially if delays or cancellations occur.
- **Reliable Local Logistics:** A need for guaranteed delivery options in specific districts.
- **Simplified Returns:** Fear of a complex return process prevents the initial purchase of wishlisted items (e.g., "What if it doesn't fit?").

---

## Strategic Product Recommendations

To drive wishlist conversion without discounting, we propose the following Product-Led features:

### 1. The "Wishlist Stock & Urgency" Predictor
**Concept:** A UI feature in the wishlist that indicates stock velocity.
**Implementation:** Instead of a generic "Out of Stock" label, show tags like *"Selling Fast – Only 3 left in your size"* or *"High Demand – Usually out of stock within 48 hours"*. This creates organic urgency without a discount.

### 2. "Return Confidence" Badges
**Concept:** Directly address the fear of returns for wishlisted items.
**Implementation:** Highlight items in the wishlist that have a *"100% Hassle-Free Return Guarantee"* or show a badge indicating *"95% of users say this fits true to size"*. By lowering the perceived risk, users are more likely to convert.

### 3. Hyper-Local Delivery Promises
**Concept:** Alleviate anxiety about delivery delays.
**Implementation:** When a user views their wishlist, dynamically calculate and display precise delivery estimates based on their pinned location (e.g., *"Guaranteed Delivery to Kottayam by Friday if ordered in the next 2 hours"*).

### 4. Proactive Support Chatbot on the PDP
**Concept:** Rebuild trust for hesitant buyers.
**Implementation:** For users who have had an item in their wishlist for >7 days, trigger a subtle, automated support chat when they revisit the Product Detail Page (PDP): *"Hi! We noticed you've been eyeing this. Do you have any questions about the fit or fabric?"*

---

## Next Steps
- **Dashboard Review:** Please refer to the charts generated in `reports/barrier_frequencies.png` and `reports/suggested_features.png` for a visual breakdown of the data.
- **A/B Testing:** Prioritize the "Return Confidence" badges and "Hyper-Local Delivery" promises for a two-week A/B test on a cohort of users with >10 items in their wishlist.
