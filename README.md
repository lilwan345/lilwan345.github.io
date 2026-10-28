# lilwan345.github.io

This is my portfolio: **[lilwan345.github.io](https://lilwan345.github.io)**

It has my case studies (Knovus.ai, Amazon revenue analytics, the Olist
marketplace risk project and a Text-to-SQL agent), the side projects I've
shipped (Beacon, tinytools, Cyberdeck), plus my experience and how to reach me.

## How it's built

- It's one hand-written page: `index.html`, `assets/style.css` and
  `assets/main.js`. No framework, no build step, and no trackers or cookies.
- There's two themes, the default light one and a "Cyberdeck" mode. You can
  switch with the button in the header and it remembers your choice
  (`localStorage`).
- A few small touches like scroll reveal, a count-up on the hero numbers and a
  live preview of the Cyberdeck wallpaper on desktop. All of them turn off if
  you have reduced motion on.
- Images load at the size they're shown (`srcset`), and the full-size version
  is one click away.
- It has a social preview card, structured data, a sitemap and a matching 404
  page.
- I checked it with axe-core in both themes (no WCAG 2 A/AA issues) and at
  phone width (no sideways scrolling).

## Run it locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```
