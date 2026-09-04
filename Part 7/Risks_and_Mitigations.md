# Part 7: Risks & Mitigation Steps

While the "Need it By?" date selector is designed to directly solve Delivery Anxiety, introducing active decision-making and urgency into the passive Wishlist environment carries specific risks. Below are the most critical failure points and our plans to mitigate them.

## 1. The "Broken Promise" Risk (Logistics Failure)
* **Why it might fail:** We guarantee a specific delivery date to alleviate anxiety, but a supply chain issue (weather, courier delay) causes the package to arrive late. 
* **Impact (High):** This would destroy user trust. Since the target user already suffers from "Operational Trust Deficit," breaking a *guaranteed* promise validates their fears and likely results in permanent churn.
* **Mitigation Plan:**
  * **Algorithmic Padding:** The date selector should only offer dates with a >98% historical fulfillment success rate for that specific pincode/warehouse route. If the fastest delivery is realistically 2 days, the selector's earliest option should be 3 days.
  * **Proactive Recovery Protocol:** If backend systems detect an unavoidable delay, instantly trigger an automated, proactive apology (via WhatsApp/Push) *before* the delivery date, accompanied by a high-value compensation (e.g., ₹500 Myntra cash or a no-questions-asked refund). 

## 2. UI Clutter & Cognitive Overload
* **Why it might fail:** The Myntra Wishlist is currently a clean, visual-first grid. Adding a date selector, return policy badges, and a countdown timer to every product card could make the interface visually overwhelming and stressful.
* **Impact (Medium):** Users might stop using the Wishlist for discovery and casual saving, inadvertently dropping overall platform engagement.
* **Guardrail Metric Link:** Monitor the **Wishlist Addition Rate**. A drop in this metric indicates the new UI is discouraging casual browsing.
* **Mitigation Plan:**
  * **Progressive Disclosure:** Do not display the calendar or timer by default. The default state should only feature a subtle "Need it for an event?" or "Need it by?" text link. The full UI (calendar and timer) only expands when actively clicked by the user.
  * **A/B Test Visual Hierarchy:** Rigorously test the visual weight of these new elements against the baseline Myntra UI to ensure product imagery remains the primary focus.

## 3. The "Artificial Urgency" Backlash
* **Why it might fail:** The 15-minute "lock-in" timer used to push the item to the Bag might be perceived as a manipulative "dark pattern" (like fake stock counters) rather than a genuine logistical requirement.
* **Impact (Medium to High):** Our target demographic (Gen Z & Millennials) is highly sensitive to forced urgency. If they feel manipulated, they will abandon the Bag out of spite.
* **Guardrail Metric Link:** Monitor the **Bag Abandonment Rate (Post-Date Lock)**. A spike here indicates users are locking dates under pressure but balking at the final checkout.
* **Mitigation Plan:**
  * **Transparent Copywriting:** Frame the urgency around logistics, not marketing. Instead of *"Hurry! Buy now!"*, use rational phrasing: *"To secure this specific delivery slot with our courier partner, please move to bag within 15 mins."*
  * **Soft Expiration:** If the timer runs out, do not delete the item or heavily penalize the user. Simply revert the state and say, *"Slot expired, but you can select a new date anytime."*

## 4. Technical Latency (API Delays)
* **Why it might fail:** Calculating accurate delivery dates for multiple items based on real-time inventory and pincode routing could introduce API lag.
* **Impact (High):** Increased page load time directly correlates with increased bounce rates in e-commerce.
* **Guardrail Metric Link:** Monitor **API Latency** for the delivery fetching endpoint. The UI must feel snappy to maintain checkout momentum.
* **Mitigation Plan:**
  * **Asynchronous Execution:** The Wishlist page must render immediately. Delivery date fetching should happen asynchronously in the background.
  * **Pincode Caching:** Cache expected delivery timeframes for regional hubs so the UI can populate instantly without waiting for a complex supply chain query.
