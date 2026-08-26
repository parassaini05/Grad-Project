export const dashboardData = {
  combined: {
    kpis: { reviewed: "9,127 Sources", filtered: "221 High-Intent", topDriver: "Trust Deficit" },
    categoryCounts: {
      'Trust Deficit': 132,
      'Delivery Anxiety': 30,
      'Not Mentioned': 15,
      'Convenience': 15,
      'Price Sensitivity': 10,
      'Missing Feature': 7,
      'Past Experience': 5,
      'Competitor Superiority': 3,
      'Visual Appeal': 2,
      'Quality Uncertainty': 2
    },
    categoryDist: { 
      'Trust Deficit': 59.7, 
      'Delivery Anxiety': 13.6, 
      'Not Mentioned': 6.8,
      'Convenience': 6.8,
      'Price Sensitivity': 4.5,
      'Missing Feature': 3.2,
      'Past Experience': 2.3,
      'Competitor Superiority': 1.4,
      'Visual Appeal': 0.9,
      'Quality Uncertainty': 0.9
    },
    segmentDist: {
      'Trust-Gated Shopper': 68.8,
      'Not Mentioned': 13.6,
      'Habitual Buyer': 7.7,
      'Deal Seeker': 6.3,
      'Hesitant First-Timer': 2.3,
      'Trend Follower': 0.9,
      'Fit-Anxious Shopper': 0.5
    },
    evidenceDist: {
      'Delivery Complaint': 54.3,
      'Not Mentioned': 26.7,
      'Return Anxiety': 6.3,
      'Wishlist Stagnation': 3.6,
      'Cart Abandonment': 3.2,
      'Competitor Comparison': 3.2,
      'Repeat Purchase': 1.8,
      'Sizing Complaint': 0.9
    },
    crossPattern: "Dominant Cluster: Trust Deficit × Trust-Gated Shopper (56.1%)",
    answers: {
      q1: { category: "Trust Deficit", insight: "Users add items to their wishlist not because they are undecided about the product itself, but because they are uncertain about the platform's post-purchase experience. They use the wishlist as a holding area.", dataProof: "59.7% of analyzed reviews cited Trust Deficit as the primary decision driver.", voice: "I returned the products and the app showed that the refund has been processed, but I still haven't received the money in my account." },
      q2: { category: "Delivery Anxiety", insight: "The dominant barrier is post-purchase anxiety — specifically the fear that something will go wrong after the order is placed (cancellations, delayed delivery, complicated returns).", dataProof: "54.3% of evidence types were Delivery Complaints.", voice: "Cancelling shipped orders and refusing to honour the offer is unfair and feels like arbitrary handling of customer orders." },
      q3: { category: "Quality Uncertainty", insight: "Even after deciding they want a product, users remain uncertain about fabric feel, actual color accuracy, and true-to-size fit.", dataProof: "Quality Uncertainty drives cart abandonment, forcing users to seek external YouTube hauls.", voice: "Not sure if the fabric will be itchy." },
      q4: { category: "Missing Feature", insight: "Users postpone or abandon purchases when they encounter technical roadblocks, such as broken filters or missing payment methods.", dataProof: "Missing Feature accounts for 3.2% of signals.", voice: "App crashes every time I try to filter by size." },
      q5: { category: "Competitor Superiority", insight: "Users compare products not just on design, but by evaluating which platform offers faster, guaranteed fulfillment.", dataProof: "Competitor Superiority accounts for 1.4% of decisions, acting as an immediate trigger to leave the app.", voice: "AJIO delivers in 2 days, I'll just order it there." },
      q6: { category: "Visual Appeal", insight: "While visual aesthetics initially draw users to wishlist an item, they seek external video validation (like YouTube) to confirm the visual reality gap.", dataProof: "Visual Appeal represents the initial hook, but users need external proof to convert.", voice: "The color in the video is completely different from the app photos." },
      q7: { category: "Price Sensitivity", insight: "Deal Seekers are highly sensitive to hidden delivery fees or unapplied coupons at checkout, overriding any initial excitement about fit or style.", dataProof: "Price Sensitivity drives 4.5% of decisions.", voice: "even after applying gift cart they are charging 49rs more?" },
      q8: { category: "Past Experience", insight: "Passive bookmarking occurs when users have had a prior bad delivery experience. They wishlist items with no real intent to buy.", dataProof: "Past Experience accounts for 2.3% of decisions.", voice: "I had a bad experience last year so I'm hesitant to buy expensive items here." },
      q9: { category: "Convenience", insight: "Habitual Buyers prioritize seamless interfaces and quick ordering. Convenience drives loyalty but is instantly broken by delivery failures.", dataProof: "Convenience is cited as a primary driver in 6.8% of reviews.", voice: "best shopping for rakhi great deal more beautiful rakhi online delivery at time I have save my time and money." },
      q10: { category: "Trust Deficit", insight: "Three unmet needs emerge consistently: (1) Transparent order tracking, (2) Simplified returns, and (3) Proactive communication.", dataProof: "These map directly to the top evidence types: Delivery Complaint (54.3%) and Return Anxiety (6.3%).", voice: "Cancellation after waiting for 8 days is unbearable." }
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
      { text: "I really love this app... It really saves my money and gives some really nice and amazing discounts.", category: "Price Sensitivity", source: "playstore", segment: "Deal Seeker", evidence: "Repeat Purchase" },
      { text: "best shopping for rakhi great deal more beautiful rakhi online delivery at time I have save my time and money.", category: "Convenience", source: "playstore", segment: "Habitual Buyer", evidence: "Repeat Purchase" },
      { text: "it's always a joyful experience to add anything to the cart at Myntra.", category: "Visual Appeal", source: "playstore", segment: "Trend Follower", evidence: "Not Mentioned" },
      { text: "app is extremely slow , it takes forever to search something and then lands on oops something went wrong", category: "Missing Feature", source: "playstore", segment: "Trust-Gated Shopper", evidence: "Not Mentioned" },
      { text: "it is very nice but same products you can buy from flipcart too in less prise", category: "Competitor Superiority", source: "playstore", segment: "Deal Seeker", evidence: "Competitor Comparison" },
      { text: "best shopping for rakhi great deal more beautiful rakhi online delivery at time I have save my time and money. I always purchased rakhi on that platform there is many brand avalable.", category: "Past Experience", source: "playstore", segment: "Habitual Buyer", evidence: "Repeat Purchase" },
      { text: "This top is very bad because this was very tight", category: "Quality Uncertainty", source: "youtube", segment: "Fit-Anxious Shopper", evidence: "Sizing Complaint" },
      { text: "The color in the video is completely different from the app photos.", category: "Visual Reality Gap", source: "youtube", segment: "Trend Follower", evidence: "Cart Abandonment" },
      { text: "Waiting for my favorite YouTuber to review this haul for fit validation.", category: "Styling Uncertainty", source: "youtube", segment: "Trend Follower", evidence: "Cart Abandonment" }
    ]
  },
  playstore: {
    kpis: { reviewed: "9,115 Sources", filtered: "221 High-Intent", topDriver: "Trust Deficit" },
    categoryCounts: {
      'Trust Deficit': 132,
      'Delivery Anxiety': 30,
      'Not Mentioned': 15,
      'Convenience': 15,
      'Price Sensitivity': 10,
      'Missing Feature': 7,
      'Past Experience': 5,
      'Competitor Superiority': 3,
      'Visual Appeal': 2,
      'Quality Uncertainty': 2
    },
    categoryDist: { 'Trust Deficit': 59.7, 'Delivery Anxiety': 13.6, 'Not Mentioned': 6.8, 'Convenience': 6.8, 'Price Sensitivity': 4.5, 'Missing Feature': 3.2, 'Past Experience': 2.3, 'Competitor Superiority': 1.4, 'Visual Appeal': 0.9, 'Quality Uncertainty': 0.9 },
    segmentDist: { 'Trust-Gated Shopper': 68.8, 'Not Mentioned': 13.6, 'Habitual Buyer': 7.7, 'Deal Seeker': 6.3, 'Hesitant First-Timer': 2.3, 'Trend Follower': 0.9, 'Fit-Anxious Shopper': 0.5 },
    evidenceDist: { 'Delivery Complaint': 54.3, 'Not Mentioned': 26.7, 'Return Anxiety': 6.3, 'Wishlist Stagnation': 3.6, 'Cart Abandonment': 3.2, 'Competitor Comparison': 3.2, 'Repeat Purchase': 1.8, 'Sizing Complaint': 0.9 },
    crossPattern: "Dominant Cluster: Trust Deficit × Trust-Gated Shopper (56.1%)",
    answers: {
      q1: { category: "Trust Deficit", insight: "Play Store users add items to their wishlist as a holding area, pausing their purchase due to operational uncertainty.", dataProof: "59.7% of Play Store reviews cited Trust Deficit as the primary decision driver.", voice: "I returned the products and the app showed that the refund has been processed, but I still haven't received the money in my account." },
      q2: { category: "Delivery Anxiety", insight: "The dominant barrier is post-purchase anxiety — specifically the fear of cancellations and delayed delivery.", dataProof: "54.3% of Play Store evidence types were Delivery Complaints.", voice: "Cancelling shipped orders and refusing to honour the offer is unfair and feels like arbitrary handling of customer orders." },
      q3: { category: "Quality Uncertainty", insight: "Play Store users express doubt about material quality, though it is overshadowed by delivery anxiety.", dataProof: "Quality Uncertainty is 0.9% of Play Store signals.", voice: "Not sure if the fabric will be itchy." },
      q4: { category: "Missing Feature", insight: "Technical glitches and missing UX features directly cause cart abandonment on the Play Store.", dataProof: "Missing Feature accounts for 3.2% of Play Store signals.", voice: "App crashes every time I try to filter by size." },
      q5: { category: "Competitor Superiority", insight: "Play Store users actively compare Myntra's delivery times against faster competitors like AJIO.", dataProof: "Competitor Superiority is 1.4% of the dataset.", voice: "AJIO delivers in 2 days, I'll just order it there." },
      q6: { category: "Visual Appeal", insight: "Users enjoy the visual aesthetics of the catalog, but rely on reviews to assess refund reliability.", dataProof: "Visual Appeal is 0.9% of the dataset.", voice: "it's always a joyful experience to add anything to the cart at Myntra." },
      q7: { category: "Price Sensitivity", insight: "Deal Seekers on the Play Store are highly sensitive to hidden delivery fees added at checkout.", dataProof: "Price Sensitivity is 4.5% of the data.", voice: "even after applying gift cart they are charging 49rs more?" },
      q8: { category: "Past Experience", insight: "Play Store users hold grudges. A previous bad delivery ensures future items stay in the wishlist permanently.", dataProof: "Past Experience is 2.3% of the dataset.", voice: "I had a bad experience last year so I'm hesitant to buy expensive items here." },
      q9: { category: "Convenience", insight: "Play Store users value seamless interfaces and quick ordering, but it is nullified if delivery fails.", dataProof: "Convenience is cited in 6.8% of reviews.", voice: "best shopping for rakhi great deal more beautiful rakhi online delivery at time I have save my time and money." },
      q10: { category: "Trust Deficit", insight: "Three unmet needs emerge consistently: (1) Transparent tracking, (2) Simplified returns, and (3) Reliable delivery.", dataProof: "These map to the top evidence types: Delivery Complaint (54.3%) and Trust Deficit driver (59.7%).", voice: "Cancellation after waiting for 8 days is unbearable." }
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
      { text: "I really love this app... It really saves my money and gives some really nice and amazing discounts.", category: "Price Sensitivity", source: "playstore", segment: "Deal Seeker", evidence: "Repeat Purchase" },
      { text: "best shopping for rakhi great deal more beautiful rakhi online delivery at time I have save my time and money.", category: "Convenience", source: "playstore", segment: "Habitual Buyer", evidence: "Repeat Purchase" },
      { text: "it's always a joyful experience to add anything to the cart at Myntra.", category: "Visual Appeal", source: "playstore", segment: "Trend Follower", evidence: "Not Mentioned" },
      { text: "app is extremely slow , it takes forever to search something and then lands on oops something went wrong", category: "Missing Feature", source: "playstore", segment: "Trust-Gated Shopper", evidence: "Not Mentioned" },
      { text: "it is very nice but same products you can buy from flipcart too in less prise", category: "Competitor Superiority", source: "playstore", segment: "Deal Seeker", evidence: "Competitor Comparison" },
      { text: "best shopping for rakhi great deal more beautiful rakhi online delivery at time I have save my time and money. I always purchased rakhi on that platform there is many brand avalable.", category: "Past Experience", source: "playstore", segment: "Habitual Buyer", evidence: "Repeat Purchase" },
      { text: "This top is very bad because this was very tight", category: "Quality Uncertainty", source: "playstore", segment: "Fit-Anxious Shopper", evidence: "Sizing Complaint" }
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
      q7: { category: "Quality Uncertainty", insight: "Fit, size, styling, and occasion suitability play the central role for YouTube users — far more than price. Social validation through influencer try-ons is the primary decision mechanism. Users defer purchase until a trusted creator wears the item in a real-life occasion context, confirming it suits their body type and aesthetic.", dataProof: "Quality Uncertainty (25%) and Styling Uncertainty (33.3%) together account for 58.3% of YouTube signals. Trend Followers (41.7%) are the dominant segment — entirely influencer-gated.", voice: "I need to see it on a real person before I buy. Fabric looks stiff." },
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
  { key: 'q2', title: "What prevents wishlisted products from eventually being purchased?" },
  { key: 'q3', title: "What uncertainties remain after users have identified a product they like?" },
  { key: 'q4', title: "What causes users to postpone a purchase?" },
  { key: 'q5', title: "How do users compare multiple shortlisted products?" },
  { key: 'q6', title: "What information do users seek outside Myntra/AJIO before purchasing?" },
  { key: 'q7', title: "What role do fit, size, styling, price, reviews, occasion and social validation play?" },
  { key: 'q8', title: "When do users use the wishlist as genuine purchase intent versus simply as a bookmarking mechanism?" },
  { key: 'q9', title: "How do these behaviors differ across user segments?" },
  { key: 'q10', title: "What unmet needs emerge consistently across user conversations?" }
];

export const RAW_REVIEWS = [
  ...dashboardData.combined.rawQuotes
];
