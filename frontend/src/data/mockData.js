export const INSIGHTS_DATA = [
  {
    source: "Combined",
    driver: "Trust Deficit",
    question: "Why do users add fashion products to their wishlist?",
    insight: "Users add items to their wishlist not because they are undecided about the product, but because they are uncertain about the platform's post-purchase experience. They use the wishlist as a 'holding area'.",
    proof: "61.1% of analyzed reviews cited Trust Deficit as the primary decision driver. 72.2% of users are 'Trust-Gated Shoppers'.",
    voice: "I returned the products and the app showed that the refund has been processed, but I still haven't received the money in my account."
  },
  {
    source: "Play Store",
    driver: "Delivery Anxiety",
    question: "What prevents wishlisted products from eventually being purchased?",
    insight: "The dominant barrier is post-purchase anxiety — specifically the fear that something will go wrong after the order is placed (cancellations, delayed delivery).",
    proof: "55.6% of evidence types were Delivery Complaints.",
    voice: "Cancelling shipped orders and refusing to honour the offer is unfair and feels like arbitrary handling of customer orders."
  },
  {
    source: "Play Store",
    driver: "Delivery Anxiety",
    question: "What uncertainties remain after users have identified a product they like?",
    insight: "Even after deciding they want a product, users remain uncertain about: Will it be delivered on time? Will the return process be smooth? Will I actually get my refund?",
    proof: "16.7% cited Delivery Anxiety. Return Anxiety accounted for 22.2%.",
    voice: "Myntra's return policy is complicated when you receive the wrong product."
  },
  {
    source: "Play Store",
    driver: "Delivery Anxiety",
    question: "What causes users to postpone a purchase?",
    insight: "Users postpone primarily due to the absence of real-time transparency. They cannot see clear delivery timelines or refund progress.",
    proof: "Delivery Complaint was the single largest evidence type at 55.6%.",
    voice: "After waiting for 10-20 days, they cancelled the order."
  },
  {
    source: "Combined",
    driver: "Trust Deficit",
    question: "How do users compare multiple shortlisted products?",
    insight: "Users compare products not on design or price, but on perceived operational risk. They look at which items have better return guarantees and faster delivery promises.",
    proof: "Trust Deficit (61.1%) dominates over Price Sensitivity (11.1%) by a ratio of 5.5:1.",
    voice: "Refusing to honour the offer is unfair."
  },
  {
    source: "YouTube",
    driver: "Quality Uncertainty",
    question: "What information do users seek outside the app before purchasing?",
    insight: "YouTube users seek out influencer 'try-on hauls' and 'Myntra vs Reality' comparison videos to visually validate fabric quality and fit.",
    proof: "Our YouTube scraper found 12 haul videos. Visual/fabric reality gap is the main external barrier.",
    voice: "Even after applying gift card they are charging 49rs more."
  },
  {
    source: "Combined",
    driver: "Quality Uncertainty",
    question: "What role do fit, size, styling, reviews, occasion and social validation play?",
    insight: "Fit and sizing uncertainty exists, but it is secondary to the trust and delivery crisis. Social validation is used to assess operational reliability.",
    proof: "Trust-Gated Shoppers (72.2%) vastly outnumber Fit-Anxious Shoppers.",
    voice: "I need reviews to confirm the fit."
  },
  {
    source: "Combined",
    driver: "Trust Deficit",
    question: "When do users use the wishlist as genuine purchase intent versus bookmarking?",
    insight: "Genuine purchase intent is observed when users actively monitor wishlisted items for restocks or delivery availability improvements.",
    proof: "5.6% of evidence was Repeat Purchase, while the majority was complaint-driven.",
    voice: "I check every day to see if my size is back."
  },
  {
    source: "Play Store",
    driver: "Trust Deficit",
    question: "How do these behaviors differ across user segments?",
    insight: "The overwhelming majority (72.2%) of analyzed users fall into the 'Trust-Gated Shopper' segment. Deal Seekers (11.1%) exist but are a much smaller segment.",
    proof: "Cross-pattern analysis shows Trust Deficit × Trust-Gated Shopper as the dominant co-occurrence.",
    voice: "They never deliver on time here."
  },
  {
    source: "Combined",
    driver: "Delivery Anxiety",
    question: "What unmet needs emerge consistently across user conversations?",
    insight: "Three unmet needs: Transparent order tracking, simplified return process, and reliable delivery with proactive communication.",
    proof: "These needs map to Delivery Complaint (55.6%), Return Anxiety (22.2%), and Trust Deficit (61.1%).",
    voice: "Cancellation after waiting for 8 days is unbearable."
  }
];

export const GRAPH_DATA = {
  combined: [
    { label: "Trust Deficit", value: 61.1 },
    { label: "Delivery Anxiety", value: 16.7 },
    { label: "Price Sensitivity", value: 11.1 }
  ],
  playstore: [
    { label: "Trust Deficit", value: 61.1 },
    { label: "Delivery Anxiety", value: 16.7 },
    { label: "Price Sensitivity", value: 11.1 }
  ],
  youtube: []
};

export const RAW_REVIEWS = [
  { source: "Play Store", text: "I returned the products and the app showed that the refund has been processed, but I still haven't received the money." },
  { source: "YouTube", text: "Even after applying gift card they are charging 49rs more." },
  { source: "Play Store", text: "Myntra's return policy is complicated when you receive the wrong product." },
  { source: "YouTube", text: "I check every day to see if my size is back but the quality is always a concern." },
  { source: "Play Store", text: "They never deliver on time here. Cancellation after waiting for 8 days is unbearable." }
];
