# Wishlist to Purchase Workflow Diagram

This workflow diagram visualizes the user journey from adding an item to the wishlist to completing the purchase, highlighting the critical drop-off points identified by our AI Discovery Engine.

```mermaid
flowchart TD
    %% 1. Discovery & Intent
    A[Browse Homepage / Search] --> B[View Product Details]
    
    B --> C{Click 'WISHLIST' Heart Icon}
    
    %% Adding User Intents
    C -->|Intent: Price/Drop Tracking| E
    C -->|Intent: Size Out of Stock| E
    C -->|Intent: Style/Occasion Planning| E
    C -->|Intent: Bookmarking for Comparison| E
    
    E[Item Saved to Wishlist]
    
    %% 3. Evaluation
    E --> F[User Navigates to 'Wishlist' via Top Nav]
    F --> G{Evaluates Item}
    
    %% The Drop-off Point
    G -->|Operational Anxiety / Trust Deficit| H[Wishlist Stagnation]
    
    %% 4. Moving to Cart
    G -->|Trust Established| I[Clicks 'ADD TO BAG']
    
    I --> J{Size Selected?}
    J -->|No| K[Error: 'Please select a size'] --> I
    J -->|Yes| L[Item Added to Cart]
    
    %% 5. Checkout
    L --> M[Reviews Bag]
    M --> N[Clicks 'PLACE ORDER']
    N --> O((Purchase Completed))
    
    %% Styling
    style H fill:#f8d7da,stroke:#dc3545
    style K fill:#fff3cd,stroke:#ffc107
    style O fill:#d4edda,stroke:#28a745
```

### Key Insights Highlighted in the Diagram:
- **The Major Bottleneck:** The transition from `Wishlist Evaluation` to `Add to Cart` is where the majority of drop-offs occur. Our data shows that 68.8% of users (Trust-Gated Shoppers) pause here due to a lack of trust in the post-purchase experience (delivery, returns, refunds).
- **The Minor Bottleneck:** The transition from `Checkout Phase` to `Purchase Completed` sees much less friction. Cart abandonment accounts for only 3.2% of the issues based on our evidence types.
- **Strategic Focus:** Interventions must happen at the `Wishlist Evaluation Phase` to shift users from the "Stagnation" path to the "Add to Cart" path by mitigating perceived risks.
