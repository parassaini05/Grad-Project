# Unlocking Myntra Wishlist Conversions
**Final 10-Slide Presentation Deck & PM Speaker Notes**

---

## Slide 1: Title Slide

<div style="border: 1px solid #e5e7eb; padding: 40px; border-radius: 8px; background-color: #fdf2f8; text-align: center; font-family: sans-serif;">
    <h1 style="color: #FF3F6C; margin-bottom: 10px; font-size: 2.5em;">Unlocking Myntra Wishlist Conversions</h1>
    <h3 style="color: #4b5563; font-weight: normal; margin-top: 0;">Through AI-Powered Validation & Operational Trust</h3>
    <br/>
    <p style="color: #374151; font-weight: bold;">Product Management Strategy Deck</p>
</div>

### 🎙️ PM Speaker Notes (Slide 1)
**The 'Why' & The Story:** 
"Welcome. Today, I am going to walk you through a strategic product intervention aimed at one of the most underutilized assets in e-commerce: The Wishlist. For millions of Myntra users, the wishlist is no longer a stepping stone to checkout—it has become a graveyard of high-intent purchases paralyzed by pre-purchase anxiety. 

Our goal is not to drive top-of-funnel traffic, nor is it to erode our margins with heavy discounting. Our goal is to unlock the trapped demand sitting idle in our wishlists by systematically solving the operational trust deficit that prevents users from moving items to their bag."

---

## Slide 2: Business Metric Decomposition

<div style="border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; background-color: white;">
    <h3 style="color: #FF3F6C; margin-top: 0;">Converting Wishlists Requires Solving Pre-Purchase Friction, Not Lowering Prices</h3>
    <table width="100%" style="border-collapse: collapse; text-align: center;">
        <tr>
            <td colspan="2" style="padding: 15px; border: 1px solid #d1d5db; background-color: #f3f4f6;"><b>Increase Myntra Revenues (GMV)</b></td>
        </tr>
        <tr>
            <td width="50%" style="padding: 15px; border: 1px solid #d1d5db;">Increase AOV</td>
            <td width="50%" style="padding: 15px; border: 1px solid #d1d5db; background-color: #fdf2f8; border-bottom: 3px solid #FF3F6C;"><b>Increase 30-Day Conversion Rate</b><br><small>(The Core Focus)</small></td>
        </tr>
        <tr>
            <td style="padding: 15px; border: 1px solid #d1d5db; border-top: none;"></td>
            <td style="padding: 15px; border: 1px solid #d1d5db; background-color: #fff;">
                <b>The Bottleneck:</b><br/>
                <span style="color: #ef4444; font-weight: bold;">Wishlist to Bag Rate (High Friction)</span>
            </td>
        </tr>
        <tr>
            <td style="padding: 15px; border: 1px solid #d1d5db; border-top: none;"></td>
            <td style="padding: 15px; border: 1px solid #d1d5db; background-color: #fff;">
                <b>The Product Outcome:</b><br/>
                <span style="color: #10b981; font-weight: bold;">Increase 'Intent-to-Buy' Confidence (Without Discounts)</span>
            </td>
        </tr>
    </table>
</div>

### 🎙️ PM Speaker Notes (Slide 2)
**The Data & The Story:** 
"As a PM, before building a feature, we must mathematically identify the bottleneck. Decomposing our GMV driver reveals that our biggest leakage isn't cart abandonment at checkout—it's getting the item out of the wishlist in the first place. 

If we rely on price drops to force conversion, we hurt unit economics. Therefore, our target product outcome is strictly defined: we must increase the user's *confidence* to buy. If we can solve the friction preventing the 'Move to Bag' click, we unlock immediate, highly scalable revenue."

---

## Slide 3: AI Discovery Engine Architecture

<div style="border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; background-color: white;">
    <h3 style="color: #FF3F6C; margin-top: 0;">Groq-Powered AI Engine Analyzed 9,000+ Reviews</h3>
    <table width="100%" style="border-collapse: collapse; margin-bottom: 15px;">
        <tr style="background-color: #fdf2f8; color: #831843; font-weight: bold; text-align: center;">
            <td style="padding: 10px; border-right: 2px solid white;">1. INGEST (9,127 Sources)</td>
            <td style="padding: 10px; border-right: 2px solid white;">2. FILTER (Keywords)</td>
            <td style="padding: 10px; border-right: 2px solid white;">3. TAG (Groq Enum)</td>
            <td style="padding: 10px; border-right: 2px solid white;">4. ANALYZE (Matrices)</td>
            <td style="padding: 10px;">5. VALIDATE (Golden Evals)</td>
        </tr>
    </table>
    
    <table width="100%" style="border-collapse: separate; border-spacing: 15px;">
        <tr>
            <td width="50%" valign="top" style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
                <b>📊 1. The Data (Quantitative Proof)</b><br/>
                From 9,127 scraped sources, 221 high-intent wishlist signals were isolated. <br/>
                • <b>59.7%</b> driven by a Trust Deficit (vs 4.5% Price Sensitivity).<br/>
                • <b>68.8%</b> are Trust-Gated Shoppers.
            </td>
            <td width="50%" valign="top" style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
                <b>🏷️ 2. How Themes Are Generated</b><br/>
                <b>Strict Enum Mapping:</b> Instead of open-ended generation, the Groq LLM acts purely as a tag-labeler mapping to predefined dimensions. Pydantic schema validation ensures zero hallucination.
            </td>
        </tr>
    </table>
</div>

### 🎙️ PM Speaker Notes (Slide 3)
**The Data & The Story:** 
"To understand *why* users lacked confidence, we couldn't rely on guesswork. We built an AI Discovery Engine to process 9,127 raw data sources (Play Store reviews and YouTube Hauls). 

Crucially, we didn't let the LLM hallucinate open-ended insights. We used Pydantic schemas and strict Enum mapping to force the Groq LLM to act strictly as a tag-labeler. This gave us hard, quantitative proof: 59.7% of high-intent signals were blocked by a 'Trust Deficit', completely overshadowing Price Sensitivity at just 4.5%."

---

## Slide 4: AI Discovery Findings

<div style="border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; background-color: white;">
    <h3 style="color: #FF3F6C; margin-top: 0;">Discovery Data Reveals a Massive Trust Deficit</h3>
    
    <div style="display: flex; gap: 15px; margin-bottom: 20px;">
        <div style="flex: 1; text-align: center; border: 1px solid #e5e7eb; padding: 15px; border-radius: 5px;">
            <h2 style="color: #FF3F6C; margin: 0; font-size: 2em;">68.8%</h2>
            <p style="font-weight: bold; margin: 5px 0 0 0;">TRUST-GATED SHOPPERS</p>
            <p style="font-size: 0.8em; color: #6b7280;">Willing to buy but held back by reliability fears.</p>
        </div>
        <div style="flex: 1; text-align: center; border: 1px solid #e5e7eb; padding: 15px; border-radius: 5px;">
            <h2 style="color: #ea580c; margin: 0; font-size: 2em;">54.3%</h2>
            <p style="font-weight: bold; margin: 5px 0 0 0;">DELIVERY ANXIETY</p>
            <p style="font-size: 0.8em; color: #6b7280;">Fear of delayed delivery without communication.</p>
        </div>
    </div>
    
    <div style="background-color: #fdf2f8; padding: 15px; border-left: 4px solid #FF3F6C; margin-top: 15px;">
        <b>Most Dominant Cross-Pattern (56.1% of all signals)</b><br/>
        <b>Trust Deficit × Trust-Gated Shopper</b> is the clearest opportunity. The most impactful lever for improving wishlist conversion is not better fashion discovery or discounts, but solving post-purchase anxiety pre-purchase.
    </div>
</div>

### 🎙️ PM Speaker Notes (Slide 4)
**The Data & The Story:** 
"The findings were a paradigm shift. Traditional cart abandonment on Myntra is only 3.2%—meaning the massive drop-off happens *before* checkout.

Our data revealed that 68.8% of our segment are 'Trust-Gated Shoppers'. They have the money, and they want the product, but 54.3% of the time, they are paralyzed by Delivery Anxiety. They use the wishlist as a 'Holding Area' while they evaluate if Myntra can be trusted to deliver reliably without trapping their money in a difficult return process."

---

## Slide 5: Primary Research & Validation

<div style="border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; background-color: white;">
    <h3 style="color: #FF3F6C; margin-top: 0;">Users Need Validation Before Checking Out</h3>
    
    <div style="margin-bottom: 20px;">
        <b>Voice of the Customer (Interviews):</b>
        <blockquote style="border-left: 3px solid #d1d5db; margin: 10px 0; padding-left: 10px; color: #4b5563; font-style: italic;">
            "I purchased a high end item from Myntra. It was expensive and the wrong product got delivered, since then I have been skeptical to purchasing anything expensive." <br/>— Survey Respondent (Female, 25-34, Tier 1)
        </blockquote>
    </div>

    <table width="100%" style="border-collapse: collapse; font-size: 0.9em;">
        <tr style="background-color: #f3f4f6; text-align: left;">
            <th style="padding: 10px; border: 1px solid #d1d5db;">What Triggers a Purchase Without Discounts? (Survey Data)</th>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #d1d5db;">🥇 <b>Rank 1:</b> Hassle-Free Return Guarantee Badge (3/5 users ranked #1)</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #d1d5db;">🥈 <b>Rank 2:</b> Delivery Transparency Tracker (2/5 users ranked #1)</td>
        </tr>
    </table>
    
    <p style="color: #059669; font-weight: bold; margin-top: 15px;">Result: 73.3% of users demand operational guarantees to convert without a discount.</p>
</div>

### 🎙️ PM Speaker Notes (Slide 5)
**The Data & The Story:** 
"Our quantitative survey immediately confirmed our AI findings: users ranked 'Delivery delayed past need date' as their absolute #1 fear (3.10 out of 5). Furthermore, in open-ended responses, users pointed to expectation gaps and previous bad delivery experiences as the main reasons they hold items in their wishlist. They don't need a lower price; they need operational peace of mind."

---

## Slide 6: Problem Definition

<div style="border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; background-color: #fef2f2;">
    <h3 style="color: #dc2626; margin-top: 0;">Wishlist Conversion is Constrained by an Operational Trust Deficit</h3>
    
    <p><b>The Core Bottleneck:</b> High-intent shoppers use the Wishlist as a passive holding area. They abandon items because the Wishlist fails to provide the pre-purchase validation necessary to overcome the fear of a bad product and a painful return process.</p>

    <ul>
        <li><b>53.3%</b> of users leave items in their wishlist for weeks (The 'Waiting Room' behavior).</li>
        <li><b>46.7%</b> suffer from Fit & Fabric paranoia (Expectation vs. Reality gap).</li>
        <li>Users are forced to actively <b>leave the Myntra ecosystem</b> (checking YouTube/Amazon) to find the trust signals that Myntra fails to provide upfront.</li>
    </ul>
    
    <div style="background-color: white; padding: 15px; border-radius: 5px; border: 1px solid #fca5a5; margin-top: 15px;">
        <b>The PM Synthesis:</b> 
        The current UI hides delivery dates and return policies until the user moves the item to the Bag. This creates a chicken-and-egg problem where users are too anxious to move the item forward to see the very data they need to feel safe.
    </div>
</div>

### 🎙️ PM Speaker Notes (Slide 6)
**The 'Why' & The Story:** 
"Synthesizing all this data, we arrive at a crisp Problem Definition. 

Our core issue is that 53.3% of users are treating the wishlist as a passive 'waiting room' because of a Validation Deficit. Currently, Myntra hides delivery timelines and return policies inside the checkout flow. But our users are too anxious to even initiate checkout! By forcing them to find trust signals outside of the app (on YouTube or Amazon), we are leaking sales."

---

## Slide 7: Solution Rationale

<div style="border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; background-color: white;">
    <h3 style="color: #FF3F6C; margin-top: 0;">We Must Provide 'Real-World Proof' Inside the Wishlist</h3>
    
    <table width="100%" style="border-collapse: collapse; text-align: left;">
        <tr style="background-color: #f3f4f6;">
            <th style="padding: 10px; border: 1px solid #d1d5db;">Status Quo (Passive)</th>
            <th style="padding: 10px; border: 1px solid #d1d5db;">New Strategy (Active Control)</th>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #d1d5db;">Hide logistics data in checkout.</td>
            <td style="padding: 10px; border: 1px solid #d1d5db; color: #10b981; font-weight: bold;">Bring logistics data upfront to the Wishlist card.</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #d1d5db;">Hope the user decides to buy.</td>
            <td style="padding: 10px; border: 1px solid #d1d5db; color: #10b981; font-weight: bold;">Force a micro-commitment using delivery dates.</td>
        </tr>
    </table>
    
    <br/>
    <b>Why does this make business sense?</b>
    <ul>
        <li><b>Unlocking Demand:</b> Converting a wishlist item (guaranteed demand) has a significantly lower CAC than acquiring a new user via performance marketing.</li>
        <li><b>Reducing Returns:</b> Forcing operational validation *before* checkout reduces expensive reverse logistics later.</li>
    </ul>
</div>

### 🎙️ PM Speaker Notes (Slide 7)
**The 'Why' & The Story:** 
"If the problem is a lack of operational trust, the solution cannot be a 10% discount coupon. 

The rationale for our solution is simple: We must shift the Wishlist from a passive bookmarking tool to an active scheduling engine. We need to pull the logistics data (delivery dates and return guarantees) out of the hidden checkout flow and surface it directly on the Wishlist card. This proactive transparency is the only way to intercept the anxiety before the user abandons the app."

---

## Slide 8: The MVP Showcase

<div style="border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; background-color: white;">
    <h3 style="color: #FF3F6C; margin-top: 0;">Introducing: The "Need it By?" Delivery Selector</h3>
    
    <p>A seamless UI intervention directly on the Wishlist card, transforming passive waiting into active commitment.</p>

    <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; border: 1px dashed #9ca3af;">
        <b>1. The Trigger:</b> A prominent <i>"Need it by?"</i> button appears below the product details on the Wishlist.<br/><br/>
        <b>2. Active Control:</b> Clicking it opens a mini-calendar allowing the user to select their required date.<br/><br/>
        <b>3. The Commitment Hook:</b> The UI instantly updates to a high-urgency trust signal: <br/>
        <span style="color: #059669; font-weight: bold; background: #d1fae5; padding: 5px;">"Guaranteed Delivery on [Date] locked in. Move to Bag in next 15 mins to secure."</span><br/><br/>
        <b>4. Upfront Trust:</b> The <i>"7 Days Return Guaranteed"</i> badge is permanently visible on the card.
    </div>
    
    <p style="margin-top: 15px; font-weight: bold; color: #4f46e5;">🔗 Link to Live MVP Prototype provided in deliverables.</p>
</div>

### 🎙️ PM Speaker Notes (Slide 8)
**The PM Story:** 
"This brings us to the MVP. We are introducing the 'Need it By?' Delivery Selector. 

Instead of vaguely hoping an item arrives on time for an event, the user actively selects the date they need it by on the Wishlist card. Once selected, we lock it in and create a 15-minute micro-commitment window. By giving the user control over the timeline and blatantly displaying the return policy, we completely neutralize their operational anxiety, directly resulting in a 'Move to Bag' action."

---

## Slide 9: Defining Success Metrics

<div style="border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; background-color: white;">
    <h3 style="color: #FF3F6C; margin-top: 0;">Measuring Success (The ROI Framework)</h3>
    
    <table width="100%" style="border-collapse: collapse; text-align: left;">
        <tr>
            <td style="padding: 15px; border: 1px solid #d1d5db; background-color: #fef3c7;">
                ⭐ <b>North Star Metric</b><br/>
                <b>Wishlist-to-Purchase Conversion Rate (30-Day)</b><br/>
                <small>Proves we successfully unlocked idle demand.</small>
            </td>
        </tr>
        <tr>
            <td style="padding: 15px; border: 1px solid #d1d5db; background-color: #d1fae5;">
                📈 <b>Leading Indicators (Feature Success)</b><br/>
                1. <b>"Need it by?" Engagement Rate:</b> % of users interacting with the calendar.<br/>
                2. <b>Date-Locked to Bag Conversion:</b> Do they move to bag after locking a date?<br/>
                3. <b>Time-to-Bag:</b> Decreasing the days an item sits idle in the wishlist.
            </td>
        </tr>
        <tr>
            <td style="padding: 15px; border: 1px solid #d1d5db; background-color: #fee2e2;">
                🛡️ <b>Guardrail Metrics</b><br/>
                1. <b>Bag Abandonment Rate:</b> Ensuring the urgency timer isn't creating artificial, spiteful checkouts.<br/>
                2. <b>Return Rate:</b> Ensuring the upfront return guarantee doesn't spike frivolous purchases.
            </td>
        </tr>
    </table>
</div>

### 🎙️ PM Speaker Notes (Slide 9)
**The Data & The Story:** 
"How do we know if this works? Our North Star remains the 30-Day Wishlist-to-Purchase conversion rate.

But to evaluate the feature specifically, we will look at leading indicators like the 'Date-Locked to Bag' conversion rate. Does securing a date actually trigger the bag movement? 
Crucially, as PMs, we must monitor our Guardrail metrics. We will closely watch the Bag Abandonment Rate to ensure the 15-minute countdown isn't seen as a manipulative 'dark pattern', and we will monitor overall Return Rates to ensure we aren't just driving bad, frivolous conversions."

---

## Slide 10: Risks & Mitigation

<div style="border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; background-color: white;">
    <h3 style="color: #FF3F6C; margin-top: 0;">Mitigating Operational and UI Risks</h3>
    
    <table width="100%" style="border-collapse: collapse; text-align: left; font-size: 0.95em;">
        <tr style="background-color: #f3f4f6;">
            <th style="padding: 10px; border: 1px solid #d1d5db;">Identified Risk</th>
            <th style="padding: 10px; border: 1px solid #d1d5db;">Mitigation Strategy</th>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #d1d5db;"><b>1. The "Broken Promise" (Logistics Failure)</b><br/>Courier fails to meet the locked-in delivery date.</td>
            <td style="padding: 10px; border: 1px solid #d1d5db;"><b>Algorithmic Padding:</b> Only offer dates with >98% historical fulfillment success. <br/><b>Proactive Recovery:</b> Auto-trigger an apology + ₹500 Myntra cash *before* the missed date.</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #d1d5db;"><b>2. UI Clutter & Overload</b><br/>Wishlist becomes too noisy with calendars and timers.</td>
            <td style="padding: 10px; border: 1px solid #d1d5db;"><b>Progressive Disclosure:</b> The calendar and timer remain hidden until the user actively clicks the "Need it by?" trigger text.</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #d1d5db;"><b>3. Spike in Frivolous Returns</b><br/>The upfront return guarantee makes users *too* comfortable.</td>
            <td style="padding: 10px; border: 1px solid #d1d5db;"><b>Category Rollout:</b> Launch initially on low-return categories (Accessories/Footwear) before scaling to form-fitting apparel.</td>
        </tr>
    </table>
</div>

### 🎙️ PM Speaker Notes (Slide 10)
**The PM Story:** 
"Finally, the risks. The most critical risk is the 'Broken Promise'. Our target user already distrusts the platform; if we guarantee a delivery date and miss it, we will lose them permanently. To mitigate this, our backend will use algorithmic padding—only surfacing dates with a 98% historical fulfillment success rate for that specific route. 

We will also use progressive disclosure on the UI to prevent wishlist clutter, and we will roll this feature out in phases, starting with low-return categories to protect our unit economics while validating the MVP."

---
*End of Presentation Document.*
