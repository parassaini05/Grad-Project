# Slide 2: Business Metric Decomposition

---

## 🟥 LEFT COLUMN (The Context & Foundation)

### **Myntra App**
Myntra is India's leading fashion e-commerce company, offering a massive top-of-funnel discovery engine catering to over **60 million** monthly active users in major cities.

### **Mission**
**Democratize fashion** and lifestyle, making it accessible to everyone while sustaining profitable margin growth.

### **Value Proposition**
Myntra offers a vast selection of fashion, beauty, and lifestyle brands, coupled with personalized recommendations, seamless discovery, and a robust **Wishlist** feature for curating intent.

### **Business Model**
**Marketplace & Inventory-led Model**
*   Discovery & Curation are **free** for everyone.
*   Revenue is generated via **GMV** on purchases.
*   *Converting passive Wishlist intent into active purchases without relying on deep discounts is the primary growth lever.*

> **[Business Outcome]** ⬆️ GMV Revenue **Translates to** Margin Growth ⬆️
> 
> **[Product Outcome]** ⬆️ % Wishlist-to-Purchase Conversion Rate & % Add-to-Bag Rate ⬆️

---

## 🟩 RIGHT COLUMN (The Problem & Metrics)

### **Problem Statement** 
> Increase the percentage of Monthly Active Customers who purchase at least one item from their wishlist.

### **Problem Breakdown: Why is unlocking Wishlist Intent important?**

| Focus Area | Rationale |
| :--- | :--- |
| **Unit Economics** | Relying heavily on GMV, unlocking pent-up demand sitting in wishlists directly improves unit economics and inventory turnover. |
| **Bottleneck Scale** | Despite ~60M MAU, the industry average abandonment rate is ~70.2%, with vast intent passively parked in Wishlists. |
| **Validation Deficit** | Primary blocker is a "Pre-Purchase Validation Deficit" (fear of delivery/returns). Solving this drives non-discounted conversions. |

### **Mapping Business Outcomes to Product Outcomes**

```mermaid
graph LR
    A[Myntra Revenues GMV] --> B(Average Order Value)
    A --> C(Total Number of Orders)
    
    C --> D(Direct Purchases - Immediate)
    C --> E(Wishlist Purchases - Delayed Checkout)
    
    E --> F(Total Users Adding to Wishlist)
    E --> G(Wishlist-to-Purchase Conversion Rate)
    
    G --> H(Wishlist Re-visit Rate)
    G --> I(Wishlist Add-to-Bag Rate)
    G --> J(Checkout Completion Rate)

    %% Styling
    style A fill:#374151,color:#fff,stroke:#374151,stroke-width:2px
    style G fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#059669
    style I fill:#ecfdf5,stroke:#059669,stroke-width:2px,color:#059669
```

---

# Slide 3: AI Discovery Engine — Architecture & Workflow

### **From Raw Feedback to PM Direction**

```mermaid
graph LR
    A["<b>1. INGEST</b><br/>9,127 Sources<br/><i>Play Store & YouTube</i>"] --> B["<b>2. FILTER</b><br/>Isolate Intent<br/><i>Keywords & Length</i>"]
    B --> C["<b>3. TAG</b><br/>221 Signals<br/><i>Groq LLM Enum Mapping</i>"]
    C --> D["<b>4. ANALYZE</b><br/>Cross-Patterns<br/><i>Behavioral Matrices</i>"]
    D --> E["<b>5. VALIDATE</b><br/>Golden Evals<br/><i>Quotes & Dashboards</i>"]
    
    style A fill:#fdf2f8,color:#831843,stroke:#fbcfe8,stroke-width:2px
    style B fill:#fdf2f8,color:#831843,stroke:#fbcfe8,stroke-width:2px
    style C fill:#fdf2f8,color:#831843,stroke:#fbcfe8,stroke-width:2px
    style D fill:#fdf2f8,color:#831843,stroke:#fbcfe8,stroke-width:2px
    style E fill:#fdf2f8,color:#831843,stroke:#fbcfe8,stroke-width:2px
```

<br/>

<table width="100%" style="border-collapse: separate; border-spacing: 10px;">
<tr>
<td width="50%" valign="top" style="background-color: #fdf2f8; padding: 15px; border-radius: 8px; border: 1px solid #fbcfe8; color: #831843;">
<b>📊 1. The Data (Quantitative Proof)</b><br/><br/>
From 9,127 scraped sources, 221 high-intent wishlist signals were isolated. The taxonomy revealed:<br/>
• <b>59.7%</b> driven by a <i>Trust Deficit</i> (vs 4.5% Price Sensitivity).<br/>
• <b>68.8%</b> are <i>Trust-Gated Shoppers</i> (willing to buy, but afraid).<br/>
• <b>54.3%</b> evidence was <i>Delivery Complaints</i>.<br/>
• Only <b>3.2%</b> was traditional Cart Abandonment.
</td>
<td width="50%" valign="top" style="background-color: #fdf2f8; padding: 15px; border-radius: 8px; border: 1px solid #fbcfe8; color: #831843;">
<b>🏷️ 2. How Themes Are Generated</b><br/><br/>
<b>Strict Enum Mapping</b><br/>
Instead of open-ended generation, the Groq LLM acts purely as a tag-labeler mapping to predefined dimensions (Decision Drivers, User Segments). Pydantic schema validation ensures zero hallucination.
</td>
</tr>
<tr>
<td width="50%" valign="top" style="background-color: #fdf2f8; padding: 15px; border-radius: 8px; border: 1px solid #fbcfe8; color: #831843;">
<b>🔍 3. How Insights Are Generated</b><br/><br/>
<b>Behavioral Math & Synthesis</b><br/>
Recurring pairs of tags are tallied mathematically to find cross-patterns. The highest-frequency intersections (e.g., Trust Deficit × Trust-Gated Shopper) are fed back into the LLM with verbatim quotes to generate grounded insights.
</td>
<td width="50%" valign="top" style="background-color: #fdf2f8; padding: 15px; border-radius: 8px; border: 1px solid #fbcfe8; color: #831843;">
<b>💡 4. PM Prioritization & Hypothesis</b><br/><br/>
<b>Why Focus on Delivery Anxiety?</b><br/>
As a PM, prioritization is driven by scale and impact. Delivery complaints account for <b>54.3%</b> of all behavioral evidence—dominating price sensitivity by over 12x. Solving this single friction point unlocks the largest cohort of users (68.8% Trust-Gated Shoppers).<br/><br/>
<b>The "Holding Area" Hypothesis</b><br/>
Users add items to wishlists as a "holding area" while evaluating if Myntra can be trusted to deliver reliably.<br/><br/>
<div style="background: white; padding: 10px; border-radius: 5px; border: 1px solid #f9a8d4; margin-top: 10px; color: #000; font-size: 0.9em;">
<i>"After waiting for 10-20 days, they cancelled the order without any transparency."</i>
</div>
</td>
</tr>
</table>

