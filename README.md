# PickStack.ai — v1 Landing Page

**Built:** Feb 19, 2026  
**Designer:** Max (landing page design reference)  
**Design System:** Nova — see `DESIGN-SYSTEM.md` for color tokens used in comparison/content pages  
**Product Owner:** Venture  
**Handoff to:** Codie  

---

## Status

The Astro project (`src/`, `package.json`, `astro.config.mjs`) is already scaffolded from Feb 13.  
Nova shipped a full design system on Feb 18 (`DESIGN-SYSTEM.md`).

**`index.html` (this file)** is a standalone, pre-built reference landing page — ready to open in a browser as-is, or use as a spec to rebuild natively in Astro.

---

## Two Design Contexts — Both Intentional

| Context | File | Style | Purpose |
|---|---|---|---|
| **Landing / Marketing page** | `index.html` | Dark, modern SaaS (Linear-esque) | First impression, brand credibility, waitlist capture |
| **Comparison / Content pages** | `src/` (Astro) + `DESIGN-SYSTEM.md` | Light, editorial (Nova's system) | Tool reviews, category pages, affiliate content |

This split is intentional: the landing page is a conversion/brand play, the content site is a trust/authority play. Not unusual — think how Vercel.com (dark, bold) vs. their docs (light, editorial) feel different.

**Option A:** Keep both styles — use `index.html` as the home page, Astro handles all inner pages with Nova's system.  
**Option B:** Unify everything under Nova's light design system. This requires porting `index.html`'s sections into Astro with Nova's color tokens.  

**Recommend Option A for v1 — ship faster, unify later.**

---

## Page Sections in `index.html`

1. **Nav** — Sticky, blurred, logo + links + CTA buttons
2. **Hero** — Headline, natural-language input, trust bar with avatars
3. **Product Preview** — Fake browser chrome showing a rendered stack recommendation (the "Stack Builder UI")
4. **Logos Bar** — Tool brands we track
5. **Stats Bar** — 4 social proof numbers
6. **Value Props** — 6-card grid explaining the differentiation
7. **How It Works** — 3-step section with detail bullets
8. **Browse Categories** — 8-category grid
9. **Why Different** — Side-by-side copy + comparison table vs G2/Capterra
10. **Testimonials** — 3 testimonial cards
11. **CTA Section** — Email capture with waitlist framing
12. **Footer** — 4-column: brand, product, compare, company

---

## Design Tokens (in `index.html`)

All CSS variables are in `:root` at top of `<style>`:

```css
--bg-primary:     #08080F   /* main background */
--bg-secondary:   #0F0F1A   /* section alternates */
--bg-card:        #121220   /* card backgrounds */
--accent-1:       #6366F1   /* indigo — primary */
--accent-2:       #8B5CF6   /* violet */
--accent-3:       #A78BFA   /* light violet — highlights */
--accent-green:   #34D399   /* match scores, checkmarks */
--accent-blue:    #38BDF8   /* secondary accent */
--text-primary:   #F1F1F9
--text-secondary: #8B8BA8
--text-muted:     #55556A
```

To switch to Nova's light theme, swap these tokens. The structure stays the same.

---

## Codie's Build Notes

### Fastest path to launch:
1. Drop `index.html` into `src/pages/index.astro` as the outer shell (or serve it static from `public/`)
2. Wire up the email form to your waitlist provider
3. Replace placeholder stats with real numbers when available
4. Ship

### To wire up the Stack Builder:
- Hero input → POST `/api/stack/build` with natural language query
- Return: array of tools with `name`, `category`, `price`, `match_score`, `integration_notes`
- The UI mockup in the hero is already styled — just inject data into `.stack-row` elements

### Email capture:
- `#cta` section form → POST to `/api/waitlist` or wire to ConvertKit/Mailchimp
- Form is in `<form class="cta-form">` near bottom of page

### Analytics:
- Add Plausible (one-liner script) — do NOT use GA4
- The hero input queries and email signups are the key conversion events to track

### Responsive:
- Fully responsive down to 375px
- Breakpoints: 1024px and 640px

### Before going live — replace these:
- [ ] Placeholder stats (1,400+ tools, $2.1M saved, 1,200 founders) → real numbers
- [ ] Testimonial names/companies → real quotes
- [ ] Social links in footer
- [ ] Logo items in logos bar → real SVG brand logos
- [ ] Nav "Sign In" → auth route

---

## Positioning Context

From Venture's research (`/research/three-domain-ideation-research.md`):

- **Core angle:** Stack-level recommendations — genuinely differentiates from G2/Capterra
- **First vertical:** Property management software (already in Astro src — keep it)
- **Target user:** Founders and ops leads at 5–50 person companies
- **Key differentiators:** Integration compatibility, live pricing, total cost of ownership
- **AI Overview risk:** Low (stack queries are less affected than individual tool queries)
- **Monetization:** Affiliate commissions (15–30% recurring) + lead gen to vendors + sponsored placements
