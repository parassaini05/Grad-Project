# Part 6: Define Success

To evaluate the success of the "Need it By?" delivery date selector MVP, we must track metrics that prove whether giving users active control over delivery eliminates their operational anxiety and drives wishlist conversion.

## 1. Primary Business Metric (The North Star)

### Wishlist-to-Purchase Conversion Rate (30-Day Window)
* **Definition:** The percentage of items added to a user's wishlist that result in a completed, paid order within 30 days of being added.
* **Formula:** `(Number of wishlist items purchased within 30 days / Total number of items added to wishlist in the same period) * 100`
* **Rationale:** This directly aligns with the strategic goal. If the MVP successfully removes the "Pre-Purchase Validation Deficit," we should see a significant baseline lift in users actively buying items they previously parked in their wishlists, without relying on price drops to force the action.

### Incremental Wishlist GMV (Revenue Lift)
* **Definition:** The total additional revenue generated directly from wishlist conversions compared to the baseline.
* **Formula:** `(Total Wishlist GMV post-launch) - (Average Baseline Wishlist GMV)`
* **Rationale:** While conversion rate tracks user behavior, GMV tracks the actual financial outcome. This ensures we are creating net-new revenue, not just shifting purchases from other funnels.

## 2. Leading Indicators (Feature Success Metrics)

These metrics indicate whether users are discovering, interacting with, and deriving immediate value from the new feature.

### "Need it by?" Engagement Rate
* **Definition:** The percentage of active wishlist sessions where a user clicks on or interacts with the "Need it by?" date selector prompt.
* **Formula:** `(Number of wishlist sessions with a "Need it by?" click / Total number of active wishlist sessions) * 100`
* **Rationale:** Measures feature discoverability and initial user curiosity. If engagement is low, the UI intervention might not be prominent enough or the value proposition isn't clear, meaning it won't have a chance to solve delivery anxiety.

### Date-Locked to Bag Conversion Rate
* **Definition:** The percentage of items moved to the bag *after* a user has successfully selected a delivery date and locked in the commitment.
* **Formula:** `(Number of items moved to bag after date selection / Total number of items where a delivery date was selected) * 100`
* **Rationale:** This is the core validation of our delivery transparency hypothesis. Giving the user a guaranteed delivery date creates a micro-commitment that directly pushes them past their hesitation and into the checkout funnel. If this rate is not significantly higher than the baseline Wishlist-to-Bag rate, the delivery selector is not solving the stated anxiety.

### Time-to-Bag (for Wishlist Items)
* **Definition:** The average elapsed time between an item being added to the wishlist and it being moved to the bag.
* **Formula:** `Sum of (Time item moved to bag - Time item added to wishlist) / Total number of wishlist items moved to bag`
* **Rationale:** By proactively removing delivery uncertainty directly on the wishlist card, we expect to accelerate the user's decision-making process, thereby reducing the average time items sit idle in the wishlist.

## 3. Guardrail Metrics

These metrics ensure our solution isn't causing unintended negative consequences downstream or merely shifting the bottleneck.

### Bag Abandonment Rate (Post-Date Lock)
* **Definition:** The percentage of date-locked items moved to the bag that fail to result in a completed checkout.
* **Formula:** `(Number of date-locked items abandoned in bag / Total number of date-locked items moved to bag) * 100`
* **Rationale:** We need to ensure we are actually generating high-intent checkouts, not just moving the friction from the Wishlist to the Bag. If this rate spikes, users might be feeling artificial pressure from the "15-minute lock" but abandoning once they see the total price.

### Wishlist Addition Rate (Overall Engagement)
* **Definition:** The average number of items added to the wishlist per active user session.
* **Formula:** `Total number of items added to wishlists / Total number of active user sessions`
* **Rationale:** Adding the new UI elements (date selector and urgency timer) to the wishlist card must not make the interface feel cluttered or stressful. We must ensure users continue to use the wishlist for discovery without feeling pressured.

### Average Order Value (AOV) Impact
* **Definition:** The difference in basket size between standard checkouts and date-locked checkouts.
* **Formula:** `AOV of Standard Checkouts - AOV of Date-Locked Checkouts`
* **Rationale:** Because the "Need it By?" feature is per-item (each wishlist item gets its own calendar and its own 15-minute window), it may encourage users to check out one item at a time rather than batching multiple wishlist items into a single, larger order. A significant drop in AOV would indicate the feature is fragmenting baskets and hurting unit economics.

## 4. Operational & Business Metrics

These metrics ensure the MVP doesn't hurt unit economics or supply chain trust, and tracks support cost savings.

### On-Time Delivery Rate (Promise Fulfillment)
* **Definition:** The percentage of date-locked orders successfully delivered on or before the promised date.
* **Formula:** `(Number of date-locked orders delivered on time / Total date-locked orders) * 100`
* **Rationale:** This tracks our biggest risk: The "Broken Promise". Failing to meet a guaranteed date for a Trust-Gated shopper will destroy trust and cause permanent platform churn.

### Date Selection Completion Rate
* **Definition:** Of all users who open the "Need it By?" calendar, the percentage who successfully select a date and confirm it.
* **Formula:** `(Number of confirmed date selections / Total number of calendar opens) * 100`
* **Rationale:** A high drop-off between opening the calendar and confirming a date is an early signal that the calendar UX itself is causing friction — e.g., no suitable dates shown, confusing interaction, or visible dates are too far out to feel useful. This must be caught during MVP validation before scaling.

### Timer Completion Rate
* **Definition:** Of all date-locked items, the percentage where the user successfully moves to bag within the 15-minute commitment window (vs. letting the slot expire).
* **Formula:** `(Number of date-locked items moved to bag within 15 mins / Total number of date-locked items) * 100`
* **Rationale:** This directly measures whether the micro-commitment mechanic is working or backfiring. A low completion rate means the 15-minute window is either too short (adding friction) or the urgency is being ignored (not compelling enough), both of which are critical design decisions that must be resolved before rollout.


