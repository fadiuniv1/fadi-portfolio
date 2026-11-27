# Fadi Abu Saleh — Portfolio

A static portfolio site for my software engineering work. Live at
[fadiuniv1.github.io/fadi-portfolio](https://fadiuniv1.github.io/fadi-portfolio/).

## What this site shows

- **Featured work:** contextpack, Agent Bridge, MY Local AI, npm-posture, a cross-platform
  infrastructure lab, and small Python utilities.
- **Skills:** the languages, systems, frameworks and practices I actually use — Java, Kotlin,
  Python, JavaScript, C/C#, Linux, systemd, FastAPI, Jetpack Compose and SQLite.
- **Availability:** open to junior software, DevOps and platform engineering roles.

Forked repositories used for study are deliberately excluded. Credit stays with their authors.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | All page content and section structure |
| `styles.css` | Theme, cards, buttons, reveals and typing cursor |
| `script.js` | Typewriter subtitle, scroll reveals, smooth anchors, project filter |
| `Fadi_Abu_Saleh_CV.pdf` | Downloadable CV linked from the hero, projects and contact sections |
| `assets/og-image.png` | OpenGraph / Twitter preview image |
| `favicon.svg` | Site icon |
| `.github/workflows/check-links.yml` | CI link checker for `index.html` |
| `.github/workflows/update-stats.yml` | Daily job that regenerates `stats.json` |
| `stats.json` | Generated numbers used by the stats strip |
| `hero-bg.webp` | Original background image (not currently referenced) |

## Live data and extras

The stats strip reads `stats.json`, which a scheduled GitHub Action regenerates daily from
the GitHub REST API and the npm registry. This avoids client-side rate limits. If the file
cannot be read, the site shows neutral placeholders instead of stale numbers.

The Notes section holds short technical posts first published on X and LinkedIn. New notes
should keep a link to the original post.

## Local preview

No build step and no dependencies:

~~~bash
git clone https://github.com/fadiuniv1/fadi-portfolio.git
cd fadi-portfolio
python -m http.server 8000
~~~

Open http://localhost:8000.

## Deployment

Pushes to `main` are published by GitHub Pages at the URL above. There is no CI step.

## Keeping it accurate

When a project is added, removed or published, update `index.html` in three places:
the stats row, the project cards, and the links. Keep the "Only my own work is listed here"
promise true. Check npm versions with `npm view <package> version` before writing a version
into a card.
