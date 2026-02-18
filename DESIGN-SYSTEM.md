# PickStack.ai — Visual Identity & Design System

**Brand:** PickStack.ai  
**Tagline:** "Stack the right tools. Pick what fits."  
**Audience:** Small landlords evaluating property management software  
**Tone:** Authoritative, practical, no-BS. Editorial trustworthiness meets modern SaaS.  
**Designer:** Nova (DEH)  
**Date:** 2026-02-18

---

## 1. Brand Concept

The icon is a stack of three horizontal bars, tapering slightly from top to bottom — representing layers of software tools. The **top bar is amber/gold**, symbolizing "the pick" — what rises to the top of the stack. The wordmark is clean and bold, with ".ai" de-emphasized in a lighter weight and muted blue.

This communicates: *we've sorted through the stack so you don't have to.*

---

## 2. Color Palette

### Brand Colors

| Token | Hex | Tailwind equivalent | Use |
|---|---|---|---|
| `primary` | `#0F2D56` | custom `primary` | Nav, headings, footer, primary actions |
| `primary-light` | `#1A3F6F` | custom | Hover states, secondary UI on dark |
| `accent` | `#E8A820` | custom `amber` | Top pick badges, star ratings, CTAs, highlights |
| `accent-hover` | `#D49516` | — | CTA hover |

### Neutral Palette

| Token | Hex | Tailwind | Use |
|---|---|---|---|
| `neutral-950` | `#0D1117` | slate-950 | Almost never; deep text |
| `neutral-900` | `#111827` | gray-900 | Primary body text |
| `neutral-600` | `#4B5563` | gray-600 | Secondary text, subheadings |
| `neutral-400` | `#9CA3AF` | gray-400 | Muted text, meta |
| `neutral-200` | `#E5E7EB` | gray-200 | Borders, dividers |
| `neutral-100` | `#F3F4F6` | gray-100 | Card backgrounds, table stripes |
| `neutral-50` | `#F9FAFB` | gray-50 | Page background |
| `white` | `#FFFFFF` | white | Card surfaces |

### Semantic Colors

| Token | Hex | Use |
|---|---|---|
| `positive` | `#059669` | Pros, checkmarks, positive ratings |
| `positive-bg` | `#D1FAE5` | Pros background tint |
| `negative` | `#DC2626` | Cons, warnings |
| `negative-bg` | `#FEE2E2` | Cons background tint |
| `neutral-tag` | `#6B7280` | Neutral attributes |
| `link` | `#2563EB` | In-text links |
| `link-hover` | `#1D4ED8` | Link hover |
| `affiliate-badge` | `#7C3AED` | "Affiliate" disclosure badge |

---

## 3. Typography

**Font:** Inter (Google Fonts / self-hosted)  
**Import:** `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`

| Role | Size | Weight | Line height | Use |
|---|---|---|---|---|
| `display` | 48px / 3rem | 800 | 1.1 | Hero headlines |
| `h1` | 36px / 2.25rem | 700 | 1.2 | Page titles |
| `h2` | 28px / 1.75rem | 700 | 1.25 | Section headings |
| `h3` | 22px / 1.375rem | 600 | 1.3 | Card titles, tool names |
| `h4` | 18px / 1.125rem | 600 | 1.4 | Subsection labels |
| `body-lg` | 18px / 1.125rem | 400 | 1.7 | Article body text |
| `body` | 16px / 1rem | 400 | 1.6 | Default body, descriptions |
| `body-sm` | 14px / 0.875rem | 400 | 1.5 | Meta, captions, table cells |
| `label` | 12px / 0.75rem | 600 | 1.4 | Badges, tags, uppercase labels |
| `mono` | 14px / 0.875rem | 400 | 1.5 | Pricing figures, code |

### Typography Rules
- Headlines: letter-spacing `-0.02em` (tight, editorial)
- Body text: default letter-spacing  
- ALL CAPS labels: `letter-spacing: 0.08em`, always paired with `font-weight: 600`
- Max content width: **680px** for article body, **780px** for wide layout

---

## 4. Logo

### Files
```
logos/
  pickstack-logo-light.svg   # For light backgrounds (default)
  pickstack-logo-dark.svg    # For dark backgrounds / nav
  pickstack-icon.svg         # Icon only — for favicon, app icon, small spaces
```

### Usage
- **Minimum size:** 120px wide (full logo), 24px (icon only)
- **Clear space:** Equal to the height of the icon on all sides
- **Never:** Stretch, recolor, or add effects
- **Favicon:** Use `pickstack-icon.svg` at 32×32, export to `favicon.ico` + `apple-touch-icon.png`

---

## 5. Spacing System

Based on Tailwind's default 4px grid. Key values:

| Token | px | Tailwind |
|---|---|---|
| `xs` | 4 | `p-1` |
| `sm` | 8 | `p-2` |
| `md` | 16 | `p-4` |
| `lg` | 24 | `p-6` |
| `xl` | 32 | `p-8` |
| `2xl` | 48 | `p-12` |
| `3xl` | 64 | `p-16` |
| `section` | 80 | `py-20` |

---

## 6. Component Designs

### 6.1 Navigation Bar

```
Background: #0F2D56 (primary)
Height: 64px
Logo: white version (pickstack-logo-dark.svg)
Nav links: white, 14px, font-weight 500, hover: amber underline
CTA button: amber background (#E8A820), navy text, rounded-lg, px-4 py-2
Mobile: hamburger menu, full-width dropdown on primary bg
```

**Tailwind classes:**
```html
<nav class="bg-[#0F2D56] h-16 px-4 md:px-8 flex items-center justify-between sticky top-0 z-50 shadow-sm">
  <a href="/"><img src="/logos/pickstack-logo-dark.svg" alt="PickStack.ai" class="h-8 w-auto" /></a>
  <div class="hidden md:flex items-center gap-6">
    <a href="/reviews" class="text-white/80 hover:text-white text-sm font-medium transition-colors">Reviews</a>
    <a href="/comparisons" class="text-white/80 hover:text-white text-sm font-medium transition-colors">Compare</a>
    <a href="/roundups" class="text-white/80 hover:text-white text-sm font-medium transition-colors">Top Picks</a>
    <a href="/about" class="text-white/80 hover:text-white text-sm font-medium transition-colors">About</a>
  </div>
</nav>
```

---

### 6.2 Hero Section (Homepage)

```
Background: white
Max-width: 1200px, centered
Eyebrow: amber label, uppercase, small
H1: 48px, #0F2D56
Subheadline: 20px, gray-600, max-width 600px
CTA: two buttons — primary (amber/navy) + secondary (outlined navy)
Trust bar: "X tools reviewed • Updated monthly • Affiliate-disclosed"
```

**Layout:**
```
[eyebrow label]
[H1: Find the Right Property Management Software]
[subhead: We test and compare X tools so small landlords don't have to.]
[CTA: See Top Picks] [CTA: Browse All Tools]
[trust bar]
```

---

### 6.3 Tool Rating Card

Used in roundup pages, homepage featured picks.

```
┌─────────────────────────────────────────────────┐
│ [RANK #1] ⭐ EDITOR'S PICK badge (amber)        │
│                                                   │
│ [Tool Logo]  Tool Name          ★★★★½ 4.5/5     │
│              Best for: Free landlord tools        │
│                                                   │
│ Short description (2-3 lines)                     │
│                                                   │
│ ✓ Free forever plan   ✓ Tenant screening          │
│ ✓ Rent collection     ✓ Maintenance requests      │
│                                                   │
│ Pricing: Free – $15/mo           [Visit Site →]  │
└─────────────────────────────────────────────────┘
```

**CSS spec:**
- Border: `1px solid #E5E7EB`  
- Border-radius: `12px`
- Editor's Pick variant: amber left border `4px solid #E8A820` + `ring-1 ring-amber-300`
- Shadow: `shadow-sm hover:shadow-md transition-shadow`
- Rank badge: circular, navy bg, white text, 28px diameter
- Star rating: amber stars, `text-amber-400`

---

### 6.4 Comparison Table

Core element — used on all roundup pages.

**Column headers:**
- Feature column: left-aligned, gray-100 background, sticky on mobile
- Tool columns: centered, top has tool logo + name
- Winner column header: amber background tint

**Cell values:**
- ✅ Yes: `text-green-600` checkmark
- ❌ No: `text-red-500` × mark  
- Price: `font-mono`, gray-900
- Text: gray-700, 14px

**Visual spec:**
```
Table: border-collapse, full width, rounded overflow container
Header row: bg-[#0F2D56] text-white, 14px font-weight 600
Alternating rows: white / gray-50
Borders: 1px solid gray-200
Featured column (top pick): bg-amber-50 border-t-2 border-amber-400
```

---

### 6.5 Pros/Cons Block

```
┌─────────────────────┐ ┌─────────────────────┐
│ ✓ Pros              │ │ ✗ Cons              │
│ bg: #D1FAE5         │ │ bg: #FEE2E2         │
│ border-l: green-500 │ │ border-l: red-500   │
├─────────────────────┤ ├─────────────────────┤
│ • Free plan         │ │ • No phone support  │
│ • Easy to use       │ │ • Limited reports   │
│ • Mobile app        │ │ • US only           │
└─────────────────────┘ └─────────────────────┘
```

Classes:
```html
<!-- Pros -->
<div class="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-4">
  <h4 class="text-emerald-700 font-semibold text-sm uppercase tracking-wide mb-2">✓ Pros</h4>
  <ul class="space-y-1 text-sm text-emerald-900">...</ul>
</div>
<!-- Cons -->
<div class="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
  <h4 class="text-red-700 font-semibold text-sm uppercase tracking-wide mb-2">✗ Cons</h4>
  <ul class="space-y-1 text-sm text-red-900">...</ul>
</div>
```

---

### 6.6 CTA Button Styles

| Variant | Background | Text | Border | Use |
|---|---|---|---|---|
| Primary | `#E8A820` | `#0F2D56` | none | Main CTA, "Visit Site", affiliate links |
| Secondary | transparent | `#0F2D56` | `2px solid #0F2D56` | Compare, Learn More |
| Ghost | transparent | white | `1px solid white/40` | On dark backgrounds |
| Affiliate | `#7C3AED` | white | none | Explicit "Get Deal" CTA with affiliate disclosure |

**Sizing:** `px-5 py-2.5 rounded-lg font-semibold text-sm` (standard) | `px-6 py-3 rounded-lg font-semibold` (large)

**Affiliate link disclosure:**  
All affiliate CTAs must include a small "Affiliate Link" label below the button in `text-xs text-gray-400`.

---

### 6.7 Star Rating Component

```html
<!-- Rating: 4.5/5 -->
<div class="flex items-center gap-1.5">
  <div class="flex text-amber-400 text-lg">★★★★½</div>
  <span class="text-sm font-semibold text-gray-900">4.5</span>
  <span class="text-sm text-gray-400">/5</span>
</div>
```

For half-stars, use Unicode `½` or implement with CSS clip-path on a half-filled star SVG.

---

### 6.8 Verdict Badge

Shown on editor-reviewed tools:

```html
<span class="inline-flex items-center gap-1 bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
  ⭐ Editor's Pick
</span>
<span class="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
  Best Free Option
</span>
<span class="inline-flex items-center gap-1 bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
  Best for Portfolios
</span>
```

---

### 6.9 Affiliate Disclosure Bar

Required at top of every page with affiliate links:

```html
<div class="bg-gray-100 border-b border-gray-200 py-2 px-4 text-center">
  <p class="text-xs text-gray-500">
    PickStack.ai earns a commission when you purchase through our links at no extra cost to you. 
    <a href="/about/methodology" class="text-blue-600 hover:underline">Learn about our methodology →</a>
  </p>
</div>
```

---

## 7. Page Templates

### 7.1 Homepage Layout

```
[Affiliate Disclosure Bar]
[Navigation]
──────────────────────────────────
[Hero Section]
  eyebrow: "Property Management Software Reviews"
  H1: "Find the Right Tools for Your Rental Business"
  Subhead: "We've reviewed 15+ property management tools so small landlords can make confident software decisions."
  [CTA: See Our Top Picks] [CTA: Compare Tools]
──────────────────────────────────
[Featured: Top 3 Picks]
  3-column grid of Rating Cards
  "Best Overall" | "Best Free" | "Best for Portfolios"
──────────────────────────────────
[Why Trust Us section]
  Icon + text cards: "X tools reviewed" | "Updated monthly" | "Affiliate-disclosed"
──────────────────────────────────
[Browse by Category]
  Grid of category cards with icons
──────────────────────────────────
[Latest Reviews]
  List/grid of recent review cards
──────────────────────────────────
[Footer]
```

---

### 7.2 Roundup Page Layout

```
[Affiliate Disclosure Bar]
[Navigation]
──────────────────────────────────
[Breadcrumb: Home > Roundups > Property Management]
[H1: Best Property Management Software for Small Landlords (2026)]
[Meta: Updated Feb 2026 | 12 min read | By PickStack Team]
──────────────────────────────────
[Quick picks table of contents]
  #1 TurboTenant - Best Overall
  #2 Stessa - Best Free
  ...
──────────────────────────────────
[Full rating cards for each tool - detailed]
  [Rank #1] Tool Rating Card (expanded)
    - Full pros/cons block
    - Pricing table
    - Who it's best for
    - CTA button (affiliate)
  ...repeat for each tool...
──────────────────────────────────
[Comparison Table: All Tools Side-by-Side]
──────────────────────────────────
[Buying Guide]
  H2: How to Choose Property Management Software
  subsections with H3s
──────────────────────────────────
[FAQ Section]
  Accordion-style Q&A
──────────────────────────────────
[Footer]
```

**Sidebar** (sticky on desktop, ≥1024px):
```
[Quick Navigation - anchor links to each tool]
[Compare Tools widget]
[Newsletter signup: "Get our monthly picks"]
```

---

### 7.3 Individual Review Page

```
[Navigation]
──────────────────────────────────
[Breadcrumb]
[Tool name + logo + overall rating]
[Quick verdict: 2-3 sentence summary]
[Star rating + "Our Score" breakdown]
[CTA: Visit TurboTenant →] (affiliate)
──────────────────────────────────
[Table of Contents]
──────────────────────────────────
[Full review body]
  - Overview
  - Key Features (with screenshots)
  - Pricing Breakdown (table)
  - Pros & Cons Block
  - Who Should Use It / Who Shouldn't
  - Our Testing Methodology
──────────────────────────────────
[Comparison: How it stacks up]
  Mini comparison table vs 2-3 alternatives
──────────────────────────────────
[Verdict + Final Rating]
──────────────────────────────────
[Related Reviews]
```

---

### 7.4 Head-to-Head Comparison Page

```
[Navigation]
──────────────────────────────────
[Breadcrumb]
[H1: TurboTenant vs Stessa: Which is Better for Small Landlords?]
[Quick verdict box: "Winner: TurboTenant for X, Stessa for Y"]
──────────────────────────────────
[Side-by-side comparison hero]
  [Tool A logo | VS badge | Tool B logo]
  [Overall scores]
  [CTA buttons for each]
──────────────────────────────────
[Full comparison table]
──────────────────────────────────
[Detailed section for each category]
  Pricing, Features, UX, Support, Integrations
  Each section: Tool A vs Tool B with winner badge
──────────────────────────────────
[Final verdict + recommendation]
──────────────────────────────────
[Related comparisons]
```

---

### 7.5 About / Methodology Page

```
[Navigation]
──────────────────────────────────
[H1: About PickStack.ai]
[Mission statement paragraph]
──────────────────────────────────
[Our Methodology section]
  How we evaluate software:
  - Testing criteria (pricing, features, UX, support)
  - Scoring methodology
  - Review update schedule
──────────────────────────────────
[Affiliate Disclosure]
  Full transparency statement
  List of affiliate programs we use
──────────────────────────────────
[Contact]
```

---

## 8. Tailwind Configuration

Drop this into `tailwind.config.mjs` (extends Astro default):

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F2D56',
          light: '#1A3F6F',
          muted: '#6B8CAE',
        },
        accent: {
          DEFAULT: '#E8A820',
          hover: '#D49516',
          light: '#FEF3C7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        content: '680px',
        wide: '780px',
        layout: '1200px',
      },
      borderRadius: {
        card: '12px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

---

## 9. Global CSS Variables

Add to `src/styles/global.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --color-primary: #0F2D56;
  --color-primary-light: #1A3F6F;
  --color-primary-muted: #6B8CAE;
  --color-accent: #E8A820;
  --color-accent-hover: #D49516;
  --color-accent-light: #FEF3C7;
  --color-positive: #059669;
  --color-positive-bg: #D1FAE5;
  --color-negative: #DC2626;
  --color-negative-bg: #FEE2E2;
  --color-link: #2563EB;
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
}

body {
  font-family: var(--font-sans);
  background-color: #F9FAFB;
  color: #111827;
  -webkit-font-smoothing: antialiased;
}

/* Affiliate link styling */
a.affiliate-link {
  color: var(--color-accent-hover);
  font-weight: 600;
}
a.affiliate-link:hover {
  text-decoration: underline;
}
```

---

## 10. Implementation Notes for Codex

1. **Font:** Add Inter via Google Fonts import in `src/layouts/BaseLayout.astro` `<head>`
2. **Tailwind config:** Use the config in section 8 — install `@tailwindcss/typography` for MDX article body styling
3. **Logo:** Place all SVG files in `public/logos/`. Reference as `/logos/pickstack-logo-dark.svg` etc.
4. **Favicon:** Convert `pickstack-icon.svg` to `favicon.svg` (place in `public/`). Also generate `favicon.ico` at 32x32.
5. **Nav:** The nav is always dark (`bg-[#0F2D56]`), use `pickstack-logo-dark.svg`
6. **MDX articles:** Wrap body in `<article class="prose prose-slate max-w-content mx-auto">` with `@tailwindcss/typography`
7. **Comparison tables:** Override `prose table` styles — use full-width layout, not prose-constrained
8. **Affiliate CTAs:** All external tool links should use `class="affiliate-link"` + have `rel="nofollow sponsored"` attributes
9. **Rating cards:** Build as an Astro component `ToolCard.astro` that accepts rating, pros, cons, pricing, badge props
10. **Sticky sidebar:** Use `sticky top-20` for roundup page sidebar, hidden below `lg:` breakpoint

---

## 11. File Delivery

```
pickstack-brand/
├── DESIGN-SYSTEM.md          ← This file
├── logos/
│   ├── pickstack-logo-light.svg    ← Default logo (light backgrounds)
│   ├── pickstack-logo-dark.svg     ← Dark bg / nav logo  
│   └── pickstack-icon.svg          ← Icon only (favicon, small spaces)
├── page-templates/
│   ├── homepage.html          ← Full HTML mockup
│   ├── roundup.html           ← Roundup page mockup
│   ├── review.html            ← Individual review mockup
│   └── comparison.html        ← Head-to-head comparison mockup
└── components-preview.html    ← All UI components in one page
```

*All files above are either complete or spec'd for Codex to implement in Astro + Tailwind.*
