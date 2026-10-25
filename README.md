# lilwan345.github.io

My portfolio: **[lilwan345.github.io](https://lilwan345.github.io)**

Case studies (Knovus.ai, Amazon revenue analytics, Olist marketplace risk, a
Text-to-SQL agent), shipped side projects (Beacon, tinytools, Cyberdeck),
experience and contact.

## How it's built

- One hand-written page: `index.html`, `assets/style.css`, `assets/main.js`.
  No framework, no build step, no trackers or cookies.
- Two themes: the default editorial light theme and a "Cyberdeck" mode
  (toggle in the header, remembered in `localStorage`).
- Small touches, all of which respect `prefers-reduced-motion`: scroll
  reveal, a count-up on the hero numbers, and a live preview of the Cyberdeck
  wallpaper on desktop.
- Images are served at display size (`srcset`), with the full-resolution
  versions one click away.
- Social preview card, structured data, sitemap and a matching 404 page.
- Checked with axe-core in both themes (no WCAG 2 A/AA violations) and at
  phone width (no horizontal scroll).

## Run locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```
