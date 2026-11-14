# gilbert-botchway website

Personal portfolio site built with [Astro](https://astro.build), deployed to Cloudflare Workers (static assets, `wrangler.jsonc`).

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live
| Path | What it is |
|---|---|
| `src/site.ts` | Name, email, LinkedIn, navigation — edit personal details here |
| `src/data/services.ts` | The services list (used on Home and Services) |
| `src/styles/global.css` | Colours, fonts and spacing (design tokens at the top) |
| `src/layouts/Base.astro` | Page shell: `<head>`, header, footer |
| `src/pages/` | One file per page; the file path is the URL |
| `src/content/projects/` | Case studies — one Markdown file each |
| `src/content/notes/` | Short notes — one Markdown file each |
| `src/content/unpacked/` | Unpacked by GilB case studies — one Markdown file per episode |
| `src/components/unpacked/` | Wordmark, video player, cards and comparison bars for Unpacked |
| `public/unpacked/` | Episode videos (`video/`) and poster images (`posters/`) |
| `src/content.config.ts` | Required front-matter fields for projects, notes and Unpacked episodes |

## Adding a case study
Create `src/content/projects/my-project.md`:
```md
---
title: "Sales performance model"
summary: "One sentence on the business problem."
status: in-progress
tools: [SQL, DuckDB]
date: 2026-11-15
---
Body in Markdown…
```
It appears on /projects/ and at /projects/my-project/.

## Adding an Unpacked by GilB episode
Copy `docs/unpacked-episode-template.md` to `src/content/unpacked/<short-name>.md` and fill
it in. Put the final video at `public/unpacked/video/gilb-NNN.mp4` and a 720×1280 poster at
`public/unpacked/posters/gilb-NNN-poster.jpg`. The episode only appears once `approved: true`.
Keep each video under 25 MiB (the Cloudflare per-file limit).

## Updating the CV PDF
The download on `/cv/` is printed from that page's print layout, so edit `src/data/cv.ts`
first, then regenerate the PDF:
```bash
npm run build
py -m http.server 4402 --directory dist   # leave running in a second terminal
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --no-pdf-header-footer --virtual-time-budget=8000 --print-to-pdf="public/downloads/Gilbert-Botchway-CV.pdf" http://localhost:4402/cv/
npm run build
```
