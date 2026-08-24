export const dashboardData = {
  playstore: {
    kpis: { reviewed: "9,115 Reviews", filtered: "210 High-Intent", topDriver: "Trust Deficit (58%)" },
    crossPattern: "Dominant Cluster: Trust Deficit × Trust-Gated Shopper (55.0%)",
    categoryDist: { 'Trust Deficit': 58, 'Delivery Anxiety': 24, 'Price Sensitivity': 12, 'Quality Uncertainty': 6 },
    answers: {
      q1: { category: "Trust Deficit", insight: "Users use the wishlist as a holding area while they evaluate whether Myntra can be trusted.", dataProof: "58% of reviews cited Trust Deficit as the primary driver.", voice: "I returned the products... but still haven't received the money." },
      q2: { category: "Delivery Anxiety", insight: "Post-purchase anxiety—fear that something will go wrong after the order is placed.", dataProof: "Delivery Anxiety accounts for 24% of friction.", voice: "Cancelling shipped orders and refusing to honour the offer is unfair." },
      q3: { category: "Delivery Anxiety", insight: "Uncertainty about smooth returns and timely refunds.", dataProof: "Delivery Anxiety is the second-largest driver (24%).", voice: "Myntra's return policy is complicated when you receive the wrong product." },
      q4: { category: "Delivery Anxiety", insight: "Absence of real-time transparency regarding order status.", dataProof: "Delivery/operational friction is a major barrier (24%).", voice: "After waiting for 10-20 days, they cancelled the order." },
      q5: { category: "Trust Deficit", insight: "Users compare products on perceived operational risk rather than price.", dataProof: "Trust Deficit dominates Price Sensitivity (58% vs 12%).", voice: "I check negative reviews to see if refunds are smooth." },
      q6: { category: "Quality Uncertainty", insight: "Play Store users largely stay within the app, relying heavily on in-app reviews.", dataProof: "App reviews are the primary source of validation.", voice: "I rely on the star rating of similar products." },
      q7: { category: "Quality Uncertainty", insight: "Fit uncertainty exists, but is secondary to the trust crisis.", dataProof: "Trust Deficit (58%) vastly outnumbers Quality Uncertainty (6%).", voice: "I read dozens of reviews looking for sizing feedback." },
      q8: { category: "Trust Deficit", insight: "Genuine intent is observed when users actively monitor for restocks.", dataProof: "Users wait for trust signals before buying.", voice: "Added immediately after viewing the size chart." },
      q9: { category: "Delivery Anxiety", insight: "Tier-2/3 users report significantly more checkout bugs and delivery anxiety.", dataProof: "Trust Deficit × Trust-Gated Shopper is the dominant pattern (55%).", voice: "Delivery takes too long to my city." },
      q10: { category: "Trust Deficit", insight: "A hassle-free return process with real-time tracking.", dataProof: "Maps directly to Trust Deficit (58%).", voice: "Cancellation after waiting for 8 days is unbearable." }
    }
  },
  youtube: {
    kpis: { reviewed: "12 Haul Videos", filtered: "11 High-Intent", topDriver: "Visual Reality Gap" },
    crossPattern: "Dominant Cluster: Visual Reality Gap × Trend Follower (40.0%)",
    categoryDist: { 'Visual Reality Gap': 46, 'Styling Uncertainty': 32, 'Visual Validation': 22 },
    answers: {
      q1: { category: "Visual Reality Gap", insight: "Users save items discovered through haul videos to compare later.", dataProof: "46% of comments cited Fabric/Visual Reality Gap.", voice: "The color in the video is completely different." },
      q2: { category: "Styling Uncertainty", insight: "The product looks different in the video compared to the catalog.", dataProof: "32% of comments cited Styling Uncertainty.", voice: "I want to see how it fits on a normal body." },
      q3: { category: "Visual Validation", insight: "How the fabric texture and color will look in natural lighting.", dataProof: "Visual Validation accounts for 22%.", voice: "Is the material actually breathable?" },
      q4: { category: "Styling Uncertainty", insight: "Waiting for a favorite influencer to post a dedicated try-on.", dataProof: "Users delay purchases until external validation.", voice: "Waiting for my favorite YouTuber to review this." },
      q5: { category: "Visual Reality Gap", insight: "By watching side-by-side 'Myntra vs Reality' comparison videos.", dataProof: "External video searches dominate (46%).", voice: "I always search YouTube before buying." },
      q6: { category: "Visual Validation", insight: "YouTube try-on hauls are the primary source of external visual validation.", dataProof: "12 haul videos contained high-intent wishlist comments.", voice: "I need to see it on a real person." },
      q7: { category: "Visual Validation", insight: "Social validation is paramount. Seeing an influencer wear it drives purchase.", dataProof: "Trend Followers rely 100% on influencer validation.", voice: "If she says it's good, I'll buy it." },
      q8: { category: "Styling Uncertainty", insight: "Wishlisting after watching a haul is mostly bookmarking.", dataProof: "Passive bookmarking shows no revisit pattern.", voice: "Saved it just in case." },
      q9: { category: "Visual Validation", insight: "Gen-Z users almost never purchase without finding a video review first.", dataProof: "Gen-Z is the heaviest YouTube research demographic.", voice: "I don't trust app photos anymore." },
      q10: { category: "Visual Validation", insight: "Users want real video reviews embedded directly on the product page.", dataProof: "Visual validation is the top unmet need.", voice: "Why can't we have video reviews in the app?" }
    }
  },
  combined: {
    kpis: { reviewed: "9,127 Total Sources", filtered: "221 High-Intent", topDriver: "Trust Deficit" },
    crossPattern: "Dominant Cluster: Trust Deficit × Trust-Gated Shopper (52.0%)",
    categoryDist: { 'Trust Deficit': 55.1, 'Delivery Anxiety': 22.8, 'Price Sensitivity': 11.4, 'Quality Uncertainty': 5.7, 'Visual Reality Gap': 2.3, 'Styling Uncertainty': 1.8, 'Visual Validation': 0.9 },
    answers: {
      q1: { category: "Trust Deficit", insight: "Users wishlist items to delay a decision when they encounter operational friction.", dataProof: "55.1% of reviews cited Trust Deficit as the primary driver.", voice: "Cancellation after waiting for 8 days is unbearable." },
      q2: { category: "Delivery Anxiety", insight: "Post-purchase anxiety: fear of cancellations, slow refunds, and unreliable delivery.", dataProof: "Delivery Anxiety accounts for 22.8% of friction.", voice: "Myntra's return policy is complicated." },
      q3: { category: "Delivery Anxiety", insight: "Whether the platform will reliably fulfill the order without friction.", dataProof: "Delivery Anxiety is the second-largest driver (22.8%).", voice: "I still haven't received the money in my account." },
      q4: { category: "Delivery Anxiety", insight: "Absence of real-time delivery timelines, especially for Tier-2/3 users.", dataProof: "Delivery/operational friction is a major barrier (22.8%).", voice: "After waiting 20 days, they cancelled the order." },
      q5: { category: "Trust Deficit", insight: "Users compare perceived risk of buying (return policies) rather than price.", dataProof: "Trust Deficit outweighs Price Sensitivity (55.1% vs 11.4%).", voice: "Refusing to honour the offer is unfair." },
      q6: { category: "Quality Uncertainty", insight: "YouTube hauls for visual validation. Reddit threads for honest community opinions.", dataProof: "Visual/Fabric Gap is the top external barrier.", voice: "even after applying gift cart they are charging 49rs more" },
      q7: { category: "Quality Uncertainty", insight: "Sizing uncertainty is the largest barrier; social validation overcomes it.", dataProof: "Trust Deficit (55.1%) vastly outnumbers Quality Uncertainty (5.7%).", voice: "I need reviews to confirm the fit." },
      q8: { category: "Trust Deficit", insight: "Genuine intent is signaled when users actively monitor for restocks.", dataProof: "Users wait for trust signals before buying.", voice: "I check every day to see if my size is back." },
      q9: { category: "Delivery Anxiety", insight: "Metro users focus on fit. Tier-2/3 users exhibit significantly higher delivery anxiety.", dataProof: "Trust Deficit × Trust-Gated Shopper is the dominant pattern (52%).", voice: "They never deliver on time here." },
      q10: { category: "Trust Deficit", insight: "Transparent communication, simplified returns, and reliable local delivery.", dataProof: "Maps directly to Trust Deficit (55.1%).", voice: "Just give me my refund on time." }
    }
  }
};

export const RAW_REVIEWS = [
  { source: 'playstore', text: "Added to wishlist but won't buy. Cancellation after waiting for 8 days is unbearable.", category: 'Trust Deficit', sentiment: 'Negative - Delivery Anxiety', segment: 'Trust-Gated Shopper', evidence: 'Delivery Complaint' },
  { source: 'playstore', text: "Myntra's return policy is complicated when you receive the wrong product. Wishlist is safer.", category: 'Delivery Anxiety', sentiment: 'Negative - Trust', segment: 'Trust-Gated Shopper', evidence: 'Return Anxiety' },
  { source: 'youtube', text: "The color in the video haul is completely different from the app photos.", category: 'Quality Uncertainty', sentiment: 'Critical - Visual Gap', segment: 'Trend Follower', evidence: 'Cart Abandonment' },
  { source: 'playstore', text: "I check negative reviews to see if refunds are smooth before moving from wishlist to cart.", category: 'Trust Deficit', sentiment: 'Cautious - Refund Risk', segment: 'Trust-Gated Shopper', evidence: 'Return Anxiety' },
  { source: 'youtube', text: "I need to see it on a real person before I buy. Fabric looks stiff.", category: 'Quality Uncertainty', sentiment: 'Hesitant - Fabric', segment: 'Trend Follower', evidence: 'Cart Abandonment' },
  { source: 'playstore', text: "After waiting 20 days for delivery, they cancelled the order. Never again.", category: 'Delivery Anxiety', sentiment: 'Angry - Operational', segment: 'Trust-Gated Shopper', evidence: 'Delivery Complaint' },
  { source: 'playstore', text: "Delivery takes too long to my city. Keeps items in wishlist.", category: 'Delivery Anxiety', sentiment: 'Frustrated - Logistics', segment: 'Trust-Gated Shopper', evidence: 'Delivery Complaint' },
  { source: 'youtube', text: "Waiting for my favorite YouTuber to review this haul for fit validation.", category: 'Trust Deficit', sentiment: 'Passive - Fit', segment: 'Trend Follower', evidence: 'Cart Abandonment' },
  { source: 'playstore', text: "Just give me my refund on time. Kept item in wishlist until I trust them.", category: 'Trust Deficit', sentiment: 'Negative - Financial', segment: 'Trust-Gated Shopper', evidence: 'Return Anxiety' },
  { source: 'youtube', text: "I read dozens of reviews looking for sizing and fit feedback.", category: 'Quality Uncertainty', sentiment: 'Researching - Fit', segment: 'Habitual Buyer', evidence: 'Cart Abandonment' },
  
  { source: 'playstore', text: "Even after applying gift card they are charging 49rs more. Cancelled order from cart.", category: 'Price Sensitivity', sentiment: 'Negative - Hidden Costs', segment: 'Deal Seeker', evidence: 'Cart Abandonment' },
  { source: 'playstore', text: "They never deliver on time here in Assam. Always 3-4 days late.", category: 'Delivery Anxiety', sentiment: 'Frustrated - Logistics', segment: 'Trust-Gated Shopper', evidence: 'Delivery Complaint' },
  { source: 'youtube', text: "Does anyone know if this shrinks after wash? Waiting to buy it.", category: 'Quality Uncertainty', sentiment: 'Hesitant - Material', segment: 'Habitual Buyer', evidence: 'Cart Abandonment' },
  { source: 'playstore', text: "Customer care is worst. They don't help with missing items in return.", category: 'Trust Deficit', sentiment: 'Angry - Support', segment: 'Trust-Gated Shopper', evidence: 'Return Anxiety' },
  { source: 'youtube', text: "If she says it's good, I'll buy it. Trust her styling completely.", category: 'Visual Appeal', sentiment: 'Positive - Influencer', segment: 'Trend Follower', evidence: 'Repeat Purchase' },
  { source: 'playstore', text: "Size chart is completely wrong. XL fits like M. Will keep in wishlist to check reviews later.", category: 'Quality Uncertainty', sentiment: 'Critical - Sizing', segment: 'Habitual Buyer', evidence: 'Return Anxiety' },
  { source: 'playstore', text: "Why is convenience fee added on every single order now? Removing items from cart.", category: 'Price Sensitivity', sentiment: 'Negative - Fees', segment: 'Deal Seeker', evidence: 'Cart Abandonment' },
  { source: 'youtube', text: "I don't trust app photos anymore, too much editing. Thank god for this haul.", category: 'Trust Deficit', sentiment: 'Relieved - Reality Check', segment: 'Trend Follower', evidence: 'Cart Abandonment' },
  { source: 'playstore', text: "I check every day to see if my size is back in stock.", category: 'Convenience', sentiment: 'Active - Monitoring', segment: 'Habitual Buyer', evidence: 'Repeat Purchase' },
  { source: 'youtube', text: "Saved it just in case, but probably won't buy unless there's a big sale.", category: 'Price Sensitivity', sentiment: 'Passive - Bookmarking', segment: 'Deal Seeker', evidence: 'Cart Abandonment' },
  { source: 'playstore', text: "Delivery boy refused to open package before payment. Didn't trust the contents.", category: 'Trust Deficit', sentiment: 'Anxious - Delivery', segment: 'Trust-Gated Shopper', evidence: 'Delivery Complaint' },
  { source: 'playstore', text: "Added immediately after viewing the size chart but waiting for payday.", category: 'Convenience', sentiment: 'High Intent - Delayed', segment: 'Habitual Buyer', evidence: 'Repeat Purchase' }
];

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
