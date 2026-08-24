export const dashboardData = {
  combined: {
    kpis: { reviewed: "9,127 Sources", filtered: "221 High-Intent", topDriver: "Trust Deficit" },
    categoryCounts: {
      'Trust Deficit': 122,
      'Delivery Anxiety': 50,
      'Price Sensitivity': 25,
      'Quality Uncertainty': 13,
      'Visual Reality Gap': 5,
      'Styling Uncertainty': 4,
      'Visual Validation': 2
    },
    categoryDist: { 
      'Trust Deficit': 55.1, 
      'Delivery Anxiety': 22.8, 
      'Price Sensitivity': 11.4, 
      'Quality Uncertainty': 5.7, 
      'Visual Reality Gap': 2.3, 
      'Styling Uncertainty': 1.8, 
      'Visual Validation': 0.9 
    },
    crossPattern: "Dominant Cluster: Trust Deficit × Trust-Gated Shopper (61.1%)",
    answers: {
      q1: { category: "Trust Deficit", insight: "Users add items to their wishlist not because they are undecided about the product itself, but because they are uncertain about the platform's post-purchase experience. They use the wishlist as a holding area.", dataProof: "61.1% of analyzed reviews cited Trust Deficit as the primary decision driver. 72.2% of users were Trust-Gated Shoppers.", voice: "I returned the products and the app showed that the refund has been processed, but I still haven't received the money in my account." },
      q2: { category: "Delivery Anxiety", insight: "The dominant barrier is post-purchase anxiety — specifically the fear that something will go wrong after the order is placed (cancellations, delayed delivery, complicated returns).", dataProof: "55.6% of evidence types were Delivery Complaints, followed by 22.2% Return Anxiety.", voice: "Cancelling shipped orders and refusing to honour the offer is unfair and feels like arbitrary handling of customer orders." },
      q3: { category: "Delivery Anxiety", insight: "Even after deciding they want a product, users remain uncertain about: (1) Will it be delivered on time? (2) If it doesn't fit, will the return process be smooth? (3) Will I actually get my refund?", dataProof: "16.7% of reviews specifically cited Delivery Anxiety. Return Anxiety accounted for 22.2% of all evidence.", voice: "Myntra's return policy is complicated when you receive the wrong product." },
      q4: { category: "Delivery Anxiety", insight: "Users postpone primarily due to the absence of real-time transparency. They cannot see clear delivery timelines, order status updates, or refund progress.", dataProof: "Delivery Complaint was the single largest evidence type at 55.6%. Post-purchase operational friction accounts for 77.8%.", voice: "After waiting for 10-20 days, they cancelled the order." },
      q5: { category: "Trust Deficit", insight: "Users compare products not on design or price, but on perceived operational risk. They look at which items have better return guarantees and faster delivery promises.", dataProof: "Trust Deficit (61.1%) dominates over Price Sensitivity (11.1%) as a decision driver by a ratio of 5.5:1.", voice: "I check negative reviews to see if refunds are smooth." },
      q6: { category: "Visual Reality Gap", insight: "Play Store users largely stay within the app ecosystem. YouTube users seek out influencer try-on hauls and Myntra vs Reality comparison videos to visually validate fabric quality and fit.", dataProof: "Our YouTube scraper found 12 haul videos with high-intent comments. Visual reality gap is the top external barrier.", voice: "The color in the video is completely different from the app photos." },
      q7: { category: "Quality Uncertainty", insight: "While fit and sizing uncertainty exists, it is secondary to the trust and delivery crisis identified in this dataset. Social validation is used primarily to assess operational reliability.", dataProof: "Trust-Gated Shoppers (72.2%) vastly outnumber Fit-Anxious Shoppers in our tagged data.", voice: "I read dozens of reviews looking for sizing feedback." },
      q8: { category: "Trust Deficit", insight: "Genuine purchase intent is observed when users actively monitor wishlisted items for restocks or delivery availability improvements.", dataProof: "5.6% of evidence was Repeat Purchase, while the majority was complaint-driven (dormant wishlists).", voice: "Added immediately after viewing the size chart." },
      q9: { category: "Trust Deficit", insight: "The overwhelming majority (72.2%) of analyzed users fall into the Trust-Gated Shopper segment. Deal Seekers (11.1%) exist but are a much smaller segment.", dataProof: "Cross-pattern analysis shows Trust Deficit × Trust-Gated Shopper as the single most dominant co-occurrence (61.1%).", voice: "Delivery takes too long to my city." },
      q10: { category: "Trust Deficit", insight: "Three unmet needs emerge consistently: (1) Transparent tracking, (2) A simplified return process, and (3) Reliable delivery with proactive communication.", dataProof: "These map directly to the top evidence types: Delivery Complaint (55.6%), Return Anxiety (22.2%).", voice: "Cancellation after waiting for 8 days is unbearable." }
    },
    rawQuotes: [
      { text: "I returned the products... but still haven't received the money.", category: "Trust Deficit", source: "playstore" },
      { text: "Cancellation after waiting for 8 days is unbearable.", category: "Trust Deficit", source: "playstore" },
      { text: "Cancelling shipped orders and refusing to honour the offer is unfair.", category: "Delivery Anxiety", source: "playstore" },
      { text: "Myntra's return policy is complicated when you receive the wrong product.", category: "Delivery Anxiety", source: "playstore" },
      { text: "After waiting for 10-20 days, they cancelled the order.", category: "Delivery Anxiety", source: "playstore" },
      { text: "Even after applying gift card they are charging 49rs more.", category: "Price Sensitivity", source: "playstore" },
      { text: "Why is convenience fee added on every single order now?", category: "Price Sensitivity", source: "playstore" },
      { text: "I need to see it on a real person before I buy. Fabric looks stiff.", category: "Quality Uncertainty", source: "youtube" },
      { text: "Size chart is completely wrong. XL fits like M.", category: "Quality Uncertainty", source: "playstore" },
      { text: "The color in the video is completely different from the app photos.", category: "Visual Reality Gap", source: "youtube" },
      { text: "Waiting for my favorite YouTuber to review this haul for fit validation.", category: "Styling Uncertainty", source: "youtube" },
      { text: "If she says it's good, I'll buy it. Trust her styling completely.", category: "Visual Validation", source: "youtube" }
    ]
  },
  playstore: {
    kpis: { reviewed: "9,115 Sources", filtered: "209 High-Intent", topDriver: "Trust Deficit" },
    categoryCounts: { 'Trust Deficit': 118, 'Delivery Anxiety': 48, 'Price Sensitivity': 23, 'Quality Uncertainty': 10 },
    categoryDist: { 'Trust Deficit': 56.5, 'Delivery Anxiety': 23.0, 'Price Sensitivity': 11.0, 'Quality Uncertainty': 4.8 },
    crossPattern: "Dominant Cluster: Trust Deficit × Trust-Gated Shopper (63.0%)",
    answers: {
      q1: { category: "Trust Deficit", insight: "Users add items to their wishlist not because they are undecided about the product itself, but because they are uncertain about the platform's post-purchase experience. They use the wishlist as a holding area.", dataProof: "61.1% of analyzed reviews cited Trust Deficit as the primary decision driver. 72.2% of users were Trust-Gated Shoppers.", voice: "I returned the products and the app showed that the refund has been processed, but I still haven't received the money in my account." },
      q2: { category: "Delivery Anxiety", insight: "The dominant barrier is post-purchase anxiety — specifically the fear that something will go wrong after the order is placed (cancellations, delayed delivery, complicated returns).", dataProof: "55.6% of evidence types were Delivery Complaints, followed by 22.2% Return Anxiety.", voice: "Cancelling shipped orders and refusing to honour the offer is unfair and feels like arbitrary handling of customer orders." },
      q3: { category: "Delivery Anxiety", insight: "Even after deciding they want a product, users remain uncertain about: (1) Will it be delivered on time? (2) If it doesn't fit, will the return process be smooth? (3) Will I actually get my refund?", dataProof: "16.7% of reviews specifically cited Delivery Anxiety. Return Anxiety accounted for 22.2% of all evidence.", voice: "Myntra's return policy is complicated when you receive the wrong product." },
      q4: { category: "Delivery Anxiety", insight: "Users postpone primarily due to the absence of real-time transparency. They cannot see clear delivery timelines, order status updates, or refund progress.", dataProof: "Delivery Complaint was the single largest evidence type at 55.6%. Post-purchase operational friction accounts for 77.8%.", voice: "After waiting for 10-20 days, they cancelled the order." },
      q5: { category: "Trust Deficit", insight: "Users compare products not on design or price, but on perceived operational risk. They look at which items have better return guarantees and faster delivery promises.", dataProof: "Trust Deficit (61.1%) dominates over Price Sensitivity (11.1%) as a decision driver by a ratio of 5.5:1.", voice: "I check negative reviews to see if refunds are smooth." },
      q6: { category: "Trust Deficit", insight: "Play Store users largely stay within the app ecosystem. YouTube users seek out influencer try-on hauls and Myntra vs Reality comparison videos to visually validate fabric quality and fit.", dataProof: "Our YouTube scraper found 12 haul videos with high-intent comments. Visual reality gap is the top external barrier.", voice: "The color in the video is completely different from the app photos." },
      q7: { category: "Quality Uncertainty", insight: "While fit and sizing uncertainty exists, it is secondary to the trust and delivery crisis identified in this dataset. Social validation is used primarily to assess operational reliability.", dataProof: "Trust-Gated Shoppers (72.2%) vastly outnumber Fit-Anxious Shoppers in our tagged data.", voice: "I read dozens of reviews looking for sizing feedback." },
      q8: { category: "Trust Deficit", insight: "Genuine purchase intent is observed when users actively monitor wishlisted items for restocks or delivery availability improvements.", dataProof: "5.6% of evidence was Repeat Purchase, while the majority was complaint-driven (dormant wishlists).", voice: "Added immediately after viewing the size chart." },
      q9: { category: "Trust Deficit", insight: "The overwhelming majority (72.2%) of analyzed users fall into the Trust-Gated Shopper segment. Deal Seekers (11.1%) exist but are a much smaller segment.", dataProof: "Cross-pattern analysis shows Trust Deficit × Trust-Gated Shopper as the single most dominant co-occurrence (61.1%).", voice: "Delivery takes too long to my city." },
      q10: { category: "Trust Deficit", insight: "Three unmet needs emerge consistently: (1) Transparent tracking, (2) A simplified return process, and (3) Reliable delivery with proactive communication.", dataProof: "These map directly to the top evidence types: Delivery Complaint (55.6%), Return Anxiety (22.2%).", voice: "Cancellation after waiting for 8 days is unbearable." }
    },
    rawQuotes: [
      { text: "I returned the products... but still haven't received the money.", category: "Trust Deficit", source: "playstore" },
      { text: "Cancellation after waiting for 8 days is unbearable.", category: "Trust Deficit", source: "playstore" },
      { text: "Cancelling shipped orders and refusing to honour the offer is unfair.", category: "Delivery Anxiety", source: "playstore" },
      { text: "Myntra's return policy is complicated when you receive the wrong product.", category: "Delivery Anxiety", source: "playstore" },
      { text: "After waiting for 10-20 days, they cancelled the order.", category: "Delivery Anxiety", source: "playstore" },
      { text: "Even after applying gift card they are charging 49rs more.", category: "Price Sensitivity", source: "playstore" },
      { text: "Size chart is completely wrong. XL fits like M.", category: "Quality Uncertainty", source: "playstore" }
    ]
  },
  youtube: {
    kpis: { reviewed: "12 Sources", filtered: "12 High-Intent", topDriver: "Visual Reality Gap" },
    categoryCounts: { 'Visual Reality Gap': 5, 'Styling Uncertainty': 4, 'Quality Uncertainty': 3 },
    categoryDist: { 'Visual Reality Gap': 41.7, 'Styling Uncertainty': 33.3, 'Quality Uncertainty': 25.0 },
    crossPattern: "Dominant Cluster: Visual Reality Gap × Trend Follower (41.7%)",
    answers: {
      q1: { category: "Visual Reality Gap", insight: "Users add items to their wishlist not because they are undecided about the product itself, but because they are uncertain about the platform's post-purchase experience. They use the wishlist as a holding area.", dataProof: "61.1% of analyzed reviews cited Trust Deficit as the primary decision driver. 72.2% of users were Trust-Gated Shoppers.", voice: "I returned the products and the app showed that the refund has been processed, but I still haven't received the money in my account." },
      q2: { category: "Styling Uncertainty", insight: "The dominant barrier is post-purchase anxiety — specifically the fear that something will go wrong after the order is placed (cancellations, delayed delivery, complicated returns).", dataProof: "55.6% of evidence types were Delivery Complaints, followed by 22.2% Return Anxiety.", voice: "Cancelling shipped orders and refusing to honour the offer is unfair and feels like arbitrary handling of customer orders." },
      q3: { category: "Quality Uncertainty", insight: "Even after deciding they want a product, users remain uncertain about: (1) Will it be delivered on time? (2) If it doesn't fit, will the return process be smooth? (3) Will I actually get my refund?", dataProof: "16.7% of reviews specifically cited Delivery Anxiety. Return Anxiety accounted for 22.2% of all evidence.", voice: "Myntra's return policy is complicated when you receive the wrong product." },
      q4: { category: "Styling Uncertainty", insight: "Users postpone primarily due to the absence of real-time transparency. They cannot see clear delivery timelines, order status updates, or refund progress.", dataProof: "Delivery Complaint was the single largest evidence type at 55.6%. Post-purchase operational friction accounts for 77.8%.", voice: "After waiting for 10-20 days, they cancelled the order." },
      q5: { category: "Visual Reality Gap", insight: "Users compare products not on design or price, but on perceived operational risk. They look at which items have better return guarantees and faster delivery promises.", dataProof: "Trust Deficit (61.1%) dominates over Price Sensitivity (11.1%) as a decision driver by a ratio of 5.5:1.", voice: "I check negative reviews to see if refunds are smooth." },
      q6: { category: "Visual Reality Gap", insight: "Play Store users largely stay within the app ecosystem. YouTube users seek out influencer try-on hauls and Myntra vs Reality comparison videos to visually validate fabric quality and fit.", dataProof: "Our YouTube scraper found 12 haul videos with high-intent comments. Visual reality gap is the top external barrier.", voice: "The color in the video is completely different from the app photos." },
      q7: { category: "Quality Uncertainty", insight: "While fit and sizing uncertainty exists, it is secondary to the trust and delivery crisis identified in this dataset. Social validation is used primarily to assess operational reliability.", dataProof: "Trust-Gated Shoppers (72.2%) vastly outnumber Fit-Anxious Shoppers in our tagged data.", voice: "I read dozens of reviews looking for sizing feedback." },
      q8: { category: "Styling Uncertainty", insight: "Genuine purchase intent is observed when users actively monitor wishlisted items for restocks or delivery availability improvements.", dataProof: "5.6% of evidence was Repeat Purchase, while the majority was complaint-driven (dormant wishlists).", voice: "Added immediately after viewing the size chart." },
      q9: { category: "Visual Reality Gap", insight: "The overwhelming majority (72.2%) of analyzed users fall into the Trust-Gated Shopper segment. Deal Seekers (11.1%) exist but are a much smaller segment.", dataProof: "Cross-pattern analysis shows Trust Deficit × Trust-Gated Shopper as the single most dominant co-occurrence (61.1%).", voice: "Delivery takes too long to my city." },
      q10: { category: "Quality Uncertainty", insight: "Three unmet needs emerge consistently: (1) Transparent tracking, (2) A simplified return process, and (3) Reliable delivery with proactive communication.", dataProof: "These map directly to the top evidence types: Delivery Complaint (55.6%), Return Anxiety (22.2%).", voice: "Cancellation after waiting for 8 days is unbearable." }
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
