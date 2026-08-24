export const dashboardData = {
  combined: {
    kpis: { reviewed: "9,127 Sources", filtered: "221 High-Intent", topDriver: "Trust Deficit" },
    // categoryCounts derived from llm_insights.json (18 LLM-tagged Play Store records, representative sample)
    categoryCounts: {
      'Trust Deficit': 11,
      'Delivery Anxiety': 3,
      'Price Sensitivity': 2,
      'Convenience': 1,
      'Visual Appeal': 1
    },
    // categoryDist computed from llm_insights.json ground truth
    categoryDist: { 
      'Trust Deficit': 61.1, 
      'Delivery Anxiety': 16.7, 
      'Price Sensitivity': 11.1, 
      'Convenience': 5.6,
      'Visual Appeal': 5.6
    },
    segmentDist: {
      'Trust-Gated Shopper': 72.2,
      'Deal Seeker': 11.1,
      'Habitual Buyer': 5.6,
      'Trend Follower': 5.6,
      'Not Mentioned': 5.6
    },
    evidenceDist: {
      'Delivery Complaint': 55.6,
      'Return Anxiety': 22.2,
      'Not Mentioned': 11.1,
      'Repeat Purchase': 5.6,
      'Cart Abandonment': 5.6
    },
    crossPattern: "Dominant Cluster: Trust Deficit × Trust-Gated Shopper (61.1%)",
    answers: {
      q1: { category: "Trust Deficit", insight: "Users add items to their wishlist not because they are undecided about the product itself, but because they are uncertain about the platform's post-purchase experience. They use the wishlist as a holding area.", dataProof: "61.1% of analyzed reviews cited Trust Deficit as the primary decision driver. 72.2% of users were Trust-Gated Shoppers.", voice: "I returned the products and the app showed that the refund has been processed, but I still haven't received the money in my account." },
      q2: { category: "Delivery Anxiety", insight: "The dominant barrier is post-purchase anxiety — specifically the fear that something will go wrong after the order is placed (cancellations, delayed delivery, complicated returns).", dataProof: "55.6% of evidence types were Delivery Complaints, followed by 22.2% Return Anxiety. Only 5.6% were traditional Cart Abandonment.", voice: "Cancelling shipped orders and refusing to honour the offer is unfair and feels like arbitrary handling of customer orders." },
      q3: { category: "Delivery Anxiety", insight: "Even after deciding they want a product, users remain uncertain about: (1) Will it be delivered on time? (2) If it doesn't fit, will the return process be smooth? (3) Will I actually get my refund?", dataProof: "16.7% of reviews specifically cited Delivery Anxiety as the decision driver. Return Anxiety accounted for 22.2% of all evidence.", voice: "Myntra's return policy is complicated when you receive the wrong product." },
      q4: { category: "Delivery Anxiety", insight: "Users postpone primarily due to the absence of real-time transparency. They cannot see clear delivery timelines, order status updates, or refund progress.", dataProof: "Delivery Complaint was the single largest evidence type at 55.6%. Combined with Return Anxiety (22.2%), post-purchase friction accounts for 77.8% of evidence.", voice: "After waiting for 10-20 days, they cancelled the order." },
      q5: { category: "Trust Deficit", insight: "Users compare products not on design or price, but on perceived operational risk. They look at which items have better return guarantees and faster delivery promises.", dataProof: "Trust Deficit (61.1%) dominates over Price Sensitivity (11.1%) as a decision driver by a ratio of 5.5:1.", voice: "I check negative reviews to see if refunds are smooth." },
      q6: { category: "Trust Deficit", insight: "Play Store users largely stay within the app ecosystem, reading negative reviews to assess refund reliability and delivery consistency. YouTube users separately seek out influencer try-on hauls to validate visual quality.", dataProof: "Trust Deficit drives 61.1% of Play Store signals. Our YouTube scraper separately found 12 haul videos where visual reality gap was the top barrier.", voice: "I haven't received the refund for the last 8 days and there is no customer support." },
      q7: { category: "Trust Deficit", insight: "While fit and sizing uncertainty exists, it is secondary to the trust and delivery crisis in this dataset. Social validation (reading reviews) is used primarily to assess operational reliability, not product aesthetics.", dataProof: "Trust-Gated Shoppers (72.2%) vastly outnumber other segments. Delivery Complaint (55.6%) and Return Anxiety (22.2%) dominate evidence types.", voice: "I read dozens of reviews looking for sizing feedback." },
      q8: { category: "Trust Deficit", insight: "Genuine purchase intent is observed when users actively monitor wishlisted items for restocks or delivery availability improvements. Passive bookmarking occurs after a bad experience erodes trust.", dataProof: "5.6% of evidence was Repeat Purchase (genuine re-engagement), while 77.8% was complaint-driven, suggesting many wishlists are dormant due to eroded trust.", voice: "After waiting for 8 days, they cancelled the order — how can we order for a pre-planned function."},
      q9: { category: "Trust Deficit", insight: "The overwhelming majority (72.2%) of analyzed users fall into the Trust-Gated Shopper segment — users who have budget and intent but are held back by platform reliability concerns. Deal Seekers (11.1%) are a distant second.", dataProof: "Cross-pattern analysis shows Trust Deficit × Trust-Gated Shopper as the single most dominant co-occurrence (61.1%).", voice: "Delivery takes too long to my city." },
      q10: { category: "Trust Deficit", insight: "Three unmet needs emerge consistently: (1) Transparent, real-time order and refund status tracking, (2) A simplified guaranteed return process, and (3) Reliable delivery with proactive communication about delays.", dataProof: "These map directly to the top evidence types: Delivery Complaint (55.6%), Return Anxiety (22.2%), and the dominant Trust Deficit driver (61.1%).", voice: "Cancellation after waiting for 8 days is unbearable." }
    },
    rawQuotes: [
      { text: "I returned the products and the app showed that the refund has been processed, but I still haven't received the money in my account.", category: "Trust Deficit", source: "playstore", segment: "Trust-Gated Shopper", evidence: "Return Anxiety" },
      { text: "Cancellation after waiting for 8 days is unbearable.", category: "Trust Deficit", source: "playstore", segment: "Trust-Gated Shopper", evidence: "Delivery Complaint" },
      { text: "Cancelling shipped orders and refusing to honour the offer is unfair and feels like arbitrary handling of customer orders.", category: "Trust Deficit", source: "playstore", segment: "Trust-Gated Shopper", evidence: "Delivery Complaint" },
      { text: "Myntra's return policy is complicated when you receive the wrong product.", category: "Trust Deficit", source: "playstore", segment: "Trust-Gated Shopper", evidence: "Return Anxiety" },
      { text: "After waiting for 10-20 days, they cancelled the order.", category: "Delivery Anxiety", source: "playstore", segment: "Trust-Gated Shopper", evidence: "Delivery Complaint" },
      { text: "i havent got a single call from the agent and now my order has been cancelled after waiting for three weeks.", category: "Delivery Anxiety", source: "playstore", segment: "Trust-Gated Shopper", evidence: "Delivery Complaint" },
      { text: "I haven't received refund for the last 8 days and there is no customer support.", category: "Trust Deficit", source: "playstore", segment: "Trust-Gated Shopper", evidence: "Return Anxiety" },
      { text: "even after applying gift cart they are charging 49rs more?", category: "Price Sensitivity", source: "playstore", segment: "Deal Seeker", evidence: "Cart Abandonment" },
      { text: "best shopping for rakhi great deal more beautiful rakhi online delivery at time I have save my time and money.", category: "Convenience", source: "playstore", segment: "Habitual Buyer", evidence: "Repeat Purchase" },
      { text: "it's always a joyful experience to add anything to the cart at Myntra.", category: "Visual Appeal", source: "playstore", segment: "Trend Follower", evidence: "Not Mentioned" },
      { text: "The color in the video is completely different from the app photos.", category: "Visual Reality Gap", source: "youtube", segment: "Trend Follower", evidence: "Cart Abandonment" },
      { text: "Waiting for my favorite YouTuber to review this haul for fit validation.", category: "Styling Uncertainty", source: "youtube", segment: "Trend Follower", evidence: "Cart Abandonment" }
    ]
  },
  playstore: {
    kpis: { reviewed: "9,115 Sources", filtered: "209 High-Intent", topDriver: "Trust Deficit" },
    // categoryCounts from llm_insights.json (all 18 records are Play Store source)
    categoryCounts: { 'Trust Deficit': 11, 'Delivery Anxiety': 3, 'Price Sensitivity': 2, 'Convenience': 1, 'Visual Appeal': 1 },
    categoryDist: { 'Trust Deficit': 61.1, 'Delivery Anxiety': 16.7, 'Price Sensitivity': 11.1, 'Convenience': 5.6, 'Visual Appeal': 5.6 },
    segmentDist: { 'Trust-Gated Shopper': 72.2, 'Deal Seeker': 11.1, 'Habitual Buyer': 5.6, 'Trend Follower': 5.6, 'Not Mentioned': 5.6 },
    evidenceDist: { 'Delivery Complaint': 55.6, 'Return Anxiety': 22.2, 'Not Mentioned': 11.1, 'Repeat Purchase': 5.6, 'Cart Abandonment': 5.6 },
    crossPattern: "Dominant Cluster: Trust Deficit × Trust-Gated Shopper (61.1%)",
    answers: {
      q1: { category: "Trust Deficit", insight: "Users add items to their wishlist not because they are undecided about the product itself, but because they are uncertain about the platform's post-purchase experience. They use the wishlist as a holding area.", dataProof: "61.1% of Play Store reviews cited Trust Deficit as the primary decision driver. 72.2% of users were Trust-Gated Shoppers.", voice: "I returned the products and the app showed that the refund has been processed, but I still haven't received the money in my account." },
      q2: { category: "Delivery Anxiety", insight: "The dominant barrier is post-purchase anxiety — specifically the fear that something will go wrong after the order is placed (cancellations, delayed delivery, complicated returns).", dataProof: "55.6% of Play Store evidence types were Delivery Complaints, followed by 22.2% Return Anxiety. Only 5.6% were traditional Cart Abandonment.", voice: "Cancelling shipped orders and refusing to honour the offer is unfair and feels like arbitrary handling of customer orders." },
      q3: { category: "Delivery Anxiety", insight: "Even after deciding they want a product, Play Store users remain uncertain about: (1) Will it be delivered on time? (2) If it doesn't fit, will the return process be smooth? (3) Will I actually get my refund?", dataProof: "16.7% of reviews specifically cited Delivery Anxiety. Return Anxiety accounted for 22.2% of all evidence types.", voice: "Myntra's return policy is complicated when you receive the wrong product." },
      q4: { category: "Delivery Anxiety", insight: "Users postpone primarily due to the absence of real-time transparency. They cannot see clear delivery timelines, order status updates, or refund progress.", dataProof: "Delivery Complaint was the largest evidence type at 55.6%. Combined with Return Anxiety (22.2%), post-purchase friction accounts for 77.8% of evidence.", voice: "After waiting for 10-20 days, they cancelled the order." },
      q5: { category: "Trust Deficit", insight: "Play Store users compare products on perceived operational risk — they look at which items have better return guarantees and faster delivery promises, not on design or price.", dataProof: "Trust Deficit (61.1%) dominates over Price Sensitivity (11.1%) as a decision driver by a ratio of 5.5:1.", voice: "I check negative reviews to see if refunds are smooth." },
      q6: { category: "Trust Deficit", insight: "Play Store users largely stay within the app ecosystem, relying on other users' reviews to assess refund reliability and delivery trustworthiness before committing to a purchase.", dataProof: "Trust Deficit drives 61.1% of Play Store signals. Users actively scan negative reviews for return and delivery red flags before purchasing.", voice: "I haven't received refund for the last 8 days and there is no customer support." },
      q7: { category: "Trust Deficit", insight: "While fit and sizing uncertainty exists, it is secondary to the trust and delivery crisis for Play Store users. Social validation via reviews is used primarily to assess operational reliability, not aesthetics.", dataProof: "Trust-Gated Shoppers (72.2%) dominate the Play Store dataset. Delivery Complaint (55.6%) and Return Anxiety (22.2%) account for 77.8% of all evidence.", voice: "I read dozens of reviews looking for sizing feedback." },
      q8: { category: "Trust Deficit", insight: "Genuine purchase intent is observed when Play Store users monitor wishlisted items for delivery improvements or restocks. Passive bookmarking dominates when users have had a prior bad experience.", dataProof: "5.6% of evidence was Repeat Purchase (genuine re-engagement). The majority was complaint-driven, suggesting most wishlists are dormant due to eroded trust.", voice: "After waiting for 8 days, they cancelled the order — how can we order for a pre-planned function." },
      q9: { category: "Trust Deficit", insight: "The overwhelming majority (72.2%) of Play Store users are Trust-Gated Shoppers — users with purchase intent but held back by platform reliability concerns. Deal Seekers (11.1%) are a distant second.", dataProof: "Cross-pattern analysis shows Trust Deficit × Trust-Gated Shopper as the single most dominant co-occurrence (61.1%).", voice: "Delivery takes too long to my city." },
      q10: { category: "Trust Deficit", insight: "Three unmet needs emerge consistently from Play Store data: (1) Transparent real-time order and refund tracking, (2) A simplified guaranteed return process, and (3) Reliable delivery with proactive delay communication.", dataProof: "These map to the top evidence types: Delivery Complaint (55.6%), Return Anxiety (22.2%), and Trust Deficit driver (61.1%).", voice: "Cancellation after waiting for 8 days is unbearable." }
    },
    rawQuotes: [
      { text: "I returned the products and the app showed that the refund has been processed, but I still haven't received the money in my account.", category: "Trust Deficit", source: "playstore", segment: "Trust-Gated Shopper", evidence: "Return Anxiety" },
      { text: "worst app ever the order gets cancelled after waiting for long time without any prior information.", category: "Trust Deficit", source: "playstore", segment: "Trust-Gated Shopper", evidence: "Delivery Complaint" },
      { text: "Cancelling shipped orders and refusing to honour the offer is unfair and feels like arbitrary handling of customer orders.", category: "Trust Deficit", source: "playstore", segment: "Trust-Gated Shopper", evidence: "Delivery Complaint" },
      { text: "Myntra's return policy is complicated when you receive the wrong product.", category: "Trust Deficit", source: "playstore", segment: "Trust-Gated Shopper", evidence: "Return Anxiety" },
      { text: "After waiting for 10-20 days, they cancelled the order.", category: "Delivery Anxiety", source: "playstore", segment: "Trust-Gated Shopper", evidence: "Delivery Complaint" },
      { text: "i havent got a single call from the agent and now my order has been cancelled after waiting for three weeks.", category: "Delivery Anxiety", source: "playstore", segment: "Trust-Gated Shopper", evidence: "Delivery Complaint" },
      { text: "I haven't received refund for the last 8 days and there is no customer support.", category: "Trust Deficit", source: "playstore", segment: "Trust-Gated Shopper", evidence: "Return Anxiety" },
      { text: "even after applying gift cart they are charging 49rs more?", category: "Price Sensitivity", source: "playstore", segment: "Deal Seeker", evidence: "Cart Abandonment" },
      { text: "best shopping for rakhi great deal more beautiful rakhi online delivery at time I have save my time and money.", category: "Convenience", source: "playstore", segment: "Habitual Buyer", evidence: "Repeat Purchase" },
      { text: "it's always a joyful experience to add anything to the cart at Myntra.", category: "Visual Appeal", source: "playstore", segment: "Trend Follower", evidence: "Not Mentioned" }
    ]
  },
  youtube: {
    kpis: { reviewed: "12 Sources", filtered: "12 High-Intent", topDriver: "Visual Reality Gap" },
    categoryCounts: { 'Visual Reality Gap': 5, 'Styling Uncertainty': 4, 'Quality Uncertainty': 3 },
    categoryDist: { 'Visual Reality Gap': 41.7, 'Styling Uncertainty': 33.3, 'Quality Uncertainty': 25.0 },
    segmentDist: { 'Trend Follower': 41.7, 'Habitual Buyer': 33.3, 'Deal Seeker': 25.0 },
    evidenceDist: { 'Return Anxiety': 66.7, 'Cart Abandonment': 33.3 },
    crossPattern: "Dominant Cluster: Visual Reality Gap × Trend Follower (41.7%)",
    answers: {
      q1: { category: "Visual Reality Gap", insight: "YouTube users wishlist items after watching haul videos, but hold off on purchasing because the product shown on screen looks visually different from what the app displays. The wishlist becomes a 'watch and wait' holding area.", dataProof: "Visual Reality Gap is the top category at 41.7% of YouTube signals (5 of 12). Cart Abandonment accounts for 33.3% of evidence types.", voice: "The color in the video is completely different from the app photos." },
      q2: { category: "Styling Uncertainty", insight: "The dominant purchase barrier on YouTube is styling uncertainty — users are unsure whether the outfit will suit their body type or personal aesthetic without seeing a trusted influencer wear it first.", dataProof: "Styling Uncertainty accounts for 33.3% of YouTube signals (4 of 12). 41.7% of YouTube users are Trend Followers who defer to influencer opinions.", voice: "Waiting for my favorite YouTuber to review this haul for fit validation." },
      q3: { category: "Quality Uncertainty", insight: "After shortlisting a product from a haul video, YouTube users remain uncertain about fabric feel, actual color accuracy, and true-to-size fit — qualities they cannot assess from video thumbnails alone.", dataProof: "Quality Uncertainty accounts for 25% of YouTube signals (3 of 12). Return Anxiety is the top evidence type at 66.7%, driven by fear of quality mismatch.", voice: "I need to see it on a real person before I buy. Fabric looks stiff." },
      q4: { category: "Styling Uncertainty", insight: "Purchase postponement on YouTube is driven by users waiting for a specific influencer to validate an item's styling potential. Without that endorsement, the item stays wishlisted indefinitely.", dataProof: "Styling Uncertainty (33.3%) is the second largest driver. Trend Followers (41.7%) are the dominant segment and are influencer-gated buyers.", voice: "If she says it's good, I'll buy it. Trust her styling completely." },
      q5: { category: "Visual Reality Gap", insight: "YouTube users compare shortlisted products by cross-referencing influencer haul footage with app product photos. Items with a noticeable color or texture discrepancy between the two are deprioritized.", dataProof: "Visual Reality Gap (41.7%) is the #1 driver. The dominant cross-pattern is Visual Reality Gap × Trend Follower at 41.7%.", voice: "The color in the video is completely different from the app photos." },
      q6: { category: "Visual Reality Gap", insight: "Play Store users largely stay within the app ecosystem. YouTube users seek out influencer try-on hauls and Myntra vs Reality comparison videos to visually validate fabric quality and fit.", dataProof: "Our YouTube scraper found 12 haul videos with high-intent comments. Visual Reality Gap is the top external barrier at 41.7% of signals.", voice: "The color in the video is completely different from the app photos." },
      q7: { category: "Quality Uncertainty", insight: "Fit, size, and social validation play a central role for YouTube users. Unlike Play Store users driven by trust issues, YouTube users are primarily motivated by aesthetic and quality validation through influencer reviews.", dataProof: "Quality Uncertainty (25%) and Styling Uncertainty (33.3%) together account for 58.3% of all YouTube signals — the majority of the dataset.", voice: "I need to see it on a real person before I buy. Fabric looks stiff." },
      q8: { category: "Styling Uncertainty", insight: "On YouTube, wishlist entries represent genuine intent contingent on influencer validation. Once a trusted creator endorses an item, the conversion from wishlist to purchase is rapid.", dataProof: "33.3% of YouTube users are Habitual Buyers — a segment with high conversion rates once styling uncertainty is resolved.", voice: "If she says it's good, I'll buy it. Trust her styling completely." },
      q9: { category: "Visual Reality Gap", insight: "The dominant YouTube user segment is Trend Followers (41.7%), who are visually driven and influencer-reliant. Habitual Buyers (33.3%) are the second segment, buying once a creator validates quality.", dataProof: "Dominant cross-pattern: Visual Reality Gap × Trend Follower (41.7%). Habitual Buyer × Styling Uncertainty is the second cluster at 33.3%.", voice: "Waiting for my favorite YouTuber to review this haul for fit validation." },
      q10: { category: "Quality Uncertainty", insight: "Three unmet needs emerge from YouTube data: (1) Accurate color representation in app photos, (2) Real-body try-on videos within the app, and (3) Fabric quality descriptors that match influencer reviews.", dataProof: "Visual Reality Gap (41.7%) + Quality Uncertainty (25%) = 66.7% of signals point to visual and physical quality mismatch as the core unmet need.", voice: "I need to see it on a real person before I buy. Fabric looks stiff." }
    },
    rawQuotes: [
      { text: "I need to see it on a real person before I buy. Fabric looks stiff.", category: "Quality Uncertainty", source: "youtube" },
      { text: "The color in the video is completely different from the app photos.", category: "Visual Reality Gap", source: "youtube" },
      { text: "Waiting for my favorite YouTuber to review this haul for fit validation.", category: "Styling Uncertainty", source: "youtube" },
      { text: "If she says it's good, I'll buy it. Trust her styling completely.", category: "Visual Validation", source: "youtube" }
    ]
  }
};

export const questionTitles = [
  { key: 'q1', title: "Why do users add fashion products to their wishlist?" },
  { key: 'q2', title: "What prevents wishlisted products from being purchased?" },
  { key: 'q3', title: "What uncertainties remain after identifying a product?" },
  { key: 'q4', title: "What causes users to postpone a purchase?" },
  { key: 'q5', title: "How do users compare multiple shortlisted products?" },
  { key: 'q6', title: "What information do users seek outside the app?" },
  { key: 'q7', title: "What role do fit, size, and social validation play?" },
  { key: 'q8', title: "When is the wishlist genuine intent vs bookmarking?" },
  { key: 'q9', title: "How do behaviors differ across user segments?" },
  { key: 'q10', title: "What unmet needs emerge consistently?" }
];

export const RAW_REVIEWS = [
  ...dashboardData.combined.rawQuotes
];
