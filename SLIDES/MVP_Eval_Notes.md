# Appendix: MVP Solution Rationale — The "Need it By?" Feature

**Reference Document for:** Solution & MVP Eval Slide ("Need it By?" — Turning Passive Wishlisting Into an Active Delivery Commitment)

---

## 1. Research Foundation & The Core Problem
Our MVP solution was born directly from primary user research, validating that intent to buy remains high, but execution is blocked by operational anxiety.

**Primary Research Data:**
*   **User Interviews:** 5 deep-dive interviews with *Trust-Gated Shoppers*.
*   **Survey Data:** 20 respondents (16 questions, mixed methods).
*   **Wishlist Stagnation:** **45.0%** of users (9/20) leave items in their wishlist for *weeks*.
*   **Latent Intent:** **45.0%** (9/20) explicitly stated they "still intend to buy" and are just "waiting for the right trigger."

**The Problem Statement (H2):** 
> *How might we help high-intent Myntra wishlist users confidently commit to a purchase by surfacing delivery and return certainty at the moment of evaluation — before they reach checkout?*

---

## 2. The Solution: "Need it By?" Scheduling
Instead of discounting products, we created a feature that attacks the root cause: Delivery Anxiety.

**The Concept:** Let the user name their required date directly on the wishlist card. The system immediately confirms or denies feasibility, completely resolving anxiety *before* the user is asked to checkout.

### How the Feature Works (4-Step Flow)
1. **"Need it By?" on Wishlist Card:** A scheduling widget is injected directly above the primary 'Move to Bag' CTA. This intercepts the user's hesitation at the exact moment of decision.
2. **Date Selector Modal:** The user selects their hard deadline (e.g., an upcoming event or trip).
3. **Guaranteed Date Confirmed:** The system runs a background check against stock and logistics, returning a guaranteed "locked-in" delivery date.
4. **15-Minute Urgency Hook:** Once confirmed, a 15-minute timer begins. The user must "Move to Bag" to secure their delivery slot. This creates natural urgency through operational scarcity rather than cheap financial coupons.

---

## 3. Product Design Principles
This MVP was designed around three core behavioral shifts:

*   **P1: Passive to Active.** Currently, the Myntra wishlist is a passive bookmark. This feature transforms it into an active scheduling tool. The user declares their intent, and the platform commits to fulfilling it.
*   **P2: Surface Anxiety Pre-Checkout.** Currently, exact delivery dates are hidden deep in the checkout flow. We surface the date at the wishlist stage, which is where the actual evaluation and decision is made.
*   **P3: The Micro-Commitment.** By asking the user to lock in a delivery date, we create a micro-commitment. This builds confidence and naturally triggers the final "Move to Bag" action.

---

## 4. Projected Business Impact
Implementing the "Need it By?" flow directly addresses our core business metrics without relying on margin-eroding discounts.

*   **Unlocks Idle Demand (GMV):** Converts the massive pool of high-intent *Trust-Gated Shoppers* (68.8% of wishlist users) who are currently paralyzed in the holding area.
*   **Reduces Return Rates:** Upfront delivery confirmation prevents rushed, unverified purchases where users buy just to "see if it arrives in time" and return it if it doesn't.
*   **Plugs Competitor Leakage:** Directly stops the ~40% of users who currently abandon the Myntra wishlist to cross-check Amazon or Ajio for faster, more visible delivery dates.
