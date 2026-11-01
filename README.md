# gilbert-botchway website

Personal portfolio site built with [Astro](https://astro.build), deployed to Cloudflare Pages.

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
| `src/content.config.ts` | Required front-matter fields for projects and notes |

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
