---
name: Editorial Wishlist System
colors:
  surface: '#fff8f7'
  surface-dim: '#f1d3d5'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f0'
  surface-container: '#ffe9ea'
  surface-container-high: '#ffe1e3'
  surface-container-highest: '#f9dbdd'
  on-surface: '#271719'
  on-surface-variant: '#5b4042'
  inverse-surface: '#3e2c2d'
  inverse-on-surface: '#ffeced'
  outline: '#8f6f72'
  outline-variant: '#e3bdc0'
  surface-tint: '#bd0043'
  primary: '#b90041'
  on-primary: '#ffffff'
  primary-container: '#df2457'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb2ba'
  secondary: '#006b55'
  on-secondary: '#ffffff'
  secondary-container: '#78f6d0'
  on-secondary-container: '#007059'
  tertiary: '#006a34'
  on-tertiary: '#ffffff'
  tertiary-container: '#008644'
  on-tertiary-container: '#f6fff3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9dc'
  primary-fixed-dim: '#ffb2ba'
  on-primary-fixed: '#400011'
  on-primary-fixed-variant: '#910031'
  secondary-fixed: '#7bf8d3'
  secondary-fixed-dim: '#5cdcb8'
  on-secondary-fixed: '#002118'
  on-secondary-fixed-variant: '#00513f'
  tertiary-fixed: '#7dfca2'
  tertiary-fixed-dim: '#5fde88'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005227'
  background: '#fff8f7'
  on-background: '#271719'
  surface-variant: '#f9dbdd'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  price-main:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 20px
  price-strike:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 16px
  gutter: 12px
---

## Brand & Style

This design system reimagines the wishlist experience as a high-fashion editorial lookbook. It moves away from standard e-commerce tropes toward a structured, "High-Fashion Minimalist" aesthetic. The objective is to make the user’s saved items feel like a curated collection rather than a digital junk drawer.

The style is characterized by:
- **Sharp Precision:** A zero-radius grid that emphasizes structural integrity and professional polish.
- **Editorial Contrast:** Using whitespace and high-contrast typography to elevate product photography.
- **Urgency through Sophistication:** Communicating scarcity and delivery speed through disciplined color accents rather than cluttered iconography.

The target audience is the fashion-forward consumer who values brand prestige and a clean, undistracted shopping environment.

## Colors

The palette is anchored by the signature high-vibrancy pink, used strategically for primary actions and brand presence.

- **Primary (#ff3f6c):** Reserved for high-intent actions (Move to Bag, Buy Now).
- **Secondary/Success (#03a685):** Applied to pricing discounts, "In Stock" indicators, and trust-building delivery promises.
- **Neutrals:** A hierarchy of grays defines the structure. Pure white is the canvas; Light Gray (#f5f5f6) provides subtle contrast for background sections; Deep Charcoal (#282c3f) ensures maximum legibility for product names and prices.
- **Urgency (#ffc107):** Used sparingly for countdown timers or "Low Stock" alerts to maintain a premium feel without inducing anxiety.

## Typography

The design system utilizes **Hanken Grotesk** across all touchpoints to maintain a clean, sharp, and modern professional look. 

- **Hierarchy:** Brand names and prices use bold weights to establish immediate visual priority.
- **Editorial Labels:** Metadata like "Best Seller" or "Limited Edition" uses the `label-caps` style with increased letter-spacing to mimic fashion magazine layouts.
- **Readability:** Body copy remains tight and functional, ensuring that long product descriptions remain legible even on smaller mobile screens.

## Layout & Spacing

The design system adopts a **Mobile-First 2-Column Grid** for the wishlist view.

- **Grid System:** A fluid 12-column grid is used for desktop, but the mobile experience defaults to a 2-column "masonry-lite" or structured card grid.
- **Margins:** A consistent 16px outer margin ensures content doesn't bleed into the device edges.
- **Rhythm:** Spacing follows a 4px baseline. Use 12px gutters between product cards to balance density with breathability.
- **Full-Width Utility:** Bottom-anchored actions and "Add to Bag" buttons always span the full width of their container to maximize the hit area and reinforce the architectural look.

## Elevation & Depth

This design system avoids traditional shadows in favor of **Bold Borders and Tonal Layering**.

- **Surface Tiers:** Backgrounds are Pure White. Secondary containers (like "Similar Items" or "Cart Summaries") use the Light Gray surface color.
- **Borders:** All cards and interactive sections are defined by a 1px solid border (#eaeaec). This creates a crisp, architectural "wireframe" look that feels premium.
- **Active State:** On tap or hover, elements do not lift; instead, the border color may darken to #282c3f, or a subtle gray fill may appear.
- **Modals:** Bottom sheets use a high-contrast overlay (dimmer) at 40% opacity to bring focus to the selection UI without losing the context of the wishlist.

## Shapes

The shape language is strictly **Sharp (0px roundedness)**. 

Every element—from product images and primary buttons to search bars and badges—features hard 90-degree corners. This uncompromising geometry reinforces the high-fashion, structural narrative and differentiates the experience from softer, more casual competitors.

## Components

- **Product Cards:** Featuring a 1px border. The product image is primary, followed by the brand name in bold. The "Remove" icon is a minimalist 'X' in the top right corner.
- **Primary Button:** Full-width, #ff3f6c background, white bold text. No border-radius.
- **Secondary Button:** White background, 1px #eaeaec border, charcoal text.
- **Badges:** Small, rectangular labels with no rounding. "Fast Delivery" uses a light amber background; "Best Price" uses emerald green.
- **Input Fields:** Bottom-bordered only or fully outlined with 1px gray lines. Sharp corners.
- **Bottom Sheets:** For size or date selection. These slide from the bottom with a sharp top edge. Items inside are presented in a clean, list-based format with 1px dividers.
- **Selection Chips:** Rectangular boxes for size selection. The selected state features a pink border and pink text, while unavailable sizes have a diagonal strike-through.