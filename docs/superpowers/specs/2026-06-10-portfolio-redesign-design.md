# Portfolio Redesign — Design Spec

Date: 2026-06-10
Status: Approved (brainstormed with visual companion; style B + layout 1 selected by user)

## Goal

Redesign lilwan345.github.io from the current dark-tech template into a light
editorial ("magazine") portfolio, and add three new projects alongside the
existing Olist case study. Positioning: **Analyst + Builder** — rigorous data
analysis plus shipped products. Primary audience: recruiters for Data/BI
Analyst and AI PM roles.

## Visual system

- **Palette**: cream background `#faf7f2`, ink text `#1a1713`, muted text
  `#6b6356`, burnt-orange accent `#c2410c`, hairline borders `#e2ddd3`.
- **Type**: Fraunces (display serif, headlines), Inter (body),
  JetBrains Mono (numbers, labels, metadata). Google Fonts.
- **Motion**: restraint. Subtle scroll fade-in only; honors
  `prefers-reduced-motion`. No particles, no typing animation, no flip cards.
- The cyberpunk aesthetic survives only inside the Cyberdeck project card
  (neon thumbnail) as a deliberate contrast moment.

## Page structure (single page, top to bottom)

1. **Masthead** — minimal nav: name, anchors Work / About / Contact.
2. **Hero** — headline "Data analyst who ships real products." + short
   intro + stat strip (1.85M transactions analyzed · 4 tools shipped ·
   USC Marshall).
3. **01 — Case Studies** (alternating image/text feature cards):
   - **Amazon Revenue Analytics** (featured): 5,026 US households
     (2018–2022), ~1.85M transactions. Key numbers: top 10% of households →
     ~36% GMV, Gini 0.528, mid deciles 6–9 hold 64% of revenue-at-risk on
     14% of GMV. Stack: DuckDB, Polars, scikit-learn, Tableau. Links:
     GitHub repo + Tableau Public dashboard.
   - **Olist Marketplace Risk** (existing project, rewritten copy): 100K+
     transactions, CV 0.42 / HHI 0.18 / Gini 0.475, top 10% → 38% revenue.
     Keeps existing thumbnail. Link: GitHub repo.
4. **02 — Shipped Products** (two cards side by side):
   - **tinytools**: 4 browser-only tools (TableShot, ScrubShot, PageStack,
     HueProof), no uploads/tracking/servers. Links: live site + GitHub.
   - **Cyberdeck**: cyberpunk live wallpaper + VS Code/Claude Code theme,
     Canvas 2D at 60fps, no libraries. Links: live wallpaper + GitHub.
   - Thumbnails generated via Playwright screenshots of the live pages.
5. **03 — Experience** — Everbright Securities internship + MAIA, compact
   editorial list (no timeline graphics).
6. **Skills** — grouped one-line lists (Programming / Data & BI / Statistics /
   AI), no interactive cards.
7. **Contact footer** — large email link, LinkedIn, GitHub. One-line vision
   sentence (AI-augmented analyst workflows) folded in here.

Cut entirely: fake contact form (was mailto), standalone Vision section,
"coming soon" placeholder cards.

## Implementation

- Split files: `index.html`, `assets/style.css`, `assets/main.js`
  (replaces the 1,500-line single file).
- Static, GitHub Pages, no build step.
- Responsive (mobile nav collapses to simple stacked layout), semantic HTML,
  SEO/OG meta tags.
- ui-ux-pro-max skill used during implementation for design QA.
- Verification: Playwright screenshots (desktop 1440px + mobile 390px),
  zero console errors.

## Data corrections

- Household count is **5,026** (README is right; the GitHub repo description
  saying 2,846 is stale — user will fix that on GitHub).
