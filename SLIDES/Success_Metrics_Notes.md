# Appendix: Measuring Impact — Success Metrics

**Reference Document for:** Success Metrics Slide

---

## 1. Primary Business Metric (The North Star)
To evaluate the success of the "Need it By?" delivery date selector MVP, we must track metrics that prove whether giving users active control over delivery eliminates their operational anxiety and drives wishlist conversion.

### Wishlist-to-Purchase Conversion Rate (30-Day Window)
*   **Definition:** The percentage of items added to a user's wishlist that result in a completed, paid order within 30 days of being added.
*   **Formula:** `(Wishlist items purchased within 30 days / Total items added to wishlist) * 100`
*   **Rationale:** This directly aligns with our strategic goal. If the MVP successfully removes the "Pre-Purchase Validation Deficit," we will see a significant baseline lift in users actively buying items they previously parked in their wishlists, without relying on price drops.

### Incremental Wishlist Revenue (GMV Lift)
*   **Definition:** The total additional revenue generated directly from wishlist conversions compared to the baseline.
*   **Formula:** `(Total Wishlist Revenue post-launch) - (Average Baseline Wishlist Revenue)`
*   **Rationale:** While conversion rate tracks user behavior, this tracks the actual financial outcome to ensure we are creating net-new revenue, not just shifting purchases from other funnels.

---

## 2. Leading Indicators (Feature Success Metrics)
These metrics indicate whether users are discovering, interacting with, and deriving immediate value from the new feature.

### "Need it by?" Engagement Rate
*   **Definition:** The percentage of active wishlist sessions where a user interacts with the "Need it by?" date selector prompt.
*   **Formula:** `(Wishlist sessions with a "Need it by?" click / Total active wishlist sessions) * 100`
*   **Rationale:** Measures feature discoverability. If engagement is low, the UI intervention might not be prominent enough or the value proposition isn't clear to the user.

### Date-Locked to Bag Conversion Rate
*   **Definition:** The percentage of items moved to the bag *after* a user has successfully selected a delivery date and locked in the 15-minute commitment.
*   **Formula:** `(Items moved to bag after date selection / Total items where a date was selected) * 100`
*   **Rationale:** This is the core validation of our operational transparency hypothesis. Giving the user a guaranteed delivery date creates a micro-commitment. If this rate is not significantly higher than the baseline Wishlist-to-Bag rate, the feature is not solving the stated anxiety.

### Time-to-Bag Acceleration
*   **Definition:** The average elapsed time between an item being added to the wishlist and it being moved to the bag.
*   **Formula:** `Average(Time item moved to bag - Time item added to wishlist)`
*   **Rationale:** By proactively removing delivery uncertainty directly on the wishlist card, we expect to significantly accelerate the user's decision-making process.

---

## 3. Guardrail Metrics
These metrics ensure our solution isn't causing unintended negative consequences downstream or merely shifting the bottleneck.

### Bag Abandonment Rate (Post-Date Lock)
*   **Definition:** The percentage of date-locked items moved to the bag that fail to result in a completed checkout.
*   **Formula:** `(Date-locked items abandoned in bag / Total date-locked items moved to bag) * 100`
*   **Rationale:** We need to ensure we are actually generating high-intent checkouts, not just moving friction from the Wishlist to the Bag. If this spikes, users might be feeling artificial pressure from the "15-minute lock" but abandoning once they see the final price.

### Average Order Value (AOV) Impact
*   **Definition:** The difference in basket size between standard checkouts and date-locked checkouts.
*   **Formula:** `AOV of Standard Checkouts - AOV of Date-Locked Checkouts`
*   **Rationale:** Because the "Need it By?" feature is per-item, it may encourage users to check out one item at a time rather than batching items into a larger order. A significant drop in AOV would indicate the feature is fragmenting baskets and hurting shipping unit economics.

---

## 4. Operational & Fulfillment Metrics
These metrics ensure the MVP doesn't hurt supply chain trust or UX.

### On-Time Delivery Rate (Promise Fulfillment)
*   **Definition:** The percentage of date-locked orders successfully delivered on or before the guaranteed date.
*   **Formula:** `(Date-locked orders delivered on time / Total date-locked orders) * 100`
*   **Rationale:** This tracks our biggest risk: The "Broken Promise". Failing to meet a guaranteed date for a Trust-Gated shopper will destroy trust and cause permanent platform churn.

### Timer Completion Rate
*   **Definition:** Of all date-locked items, the percentage where the user successfully moves to bag within the 15-minute commitment window (vs. letting the slot expire).
*   **Formula:** `(Date-locked items moved to bag within 15 mins / Total date-locked items) * 100`
*   **Rationale:** This directly measures whether the micro-commitment mechanic is working. A low completion rate means the 15-minute window is either too short (adding friction) or the urgency is being ignored.
