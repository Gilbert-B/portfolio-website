---
storyId: GILB-003
title: "Ghana's Sleeping Wallets"
domain: Fintech & consumer behaviour
summary: "85.8 million registered mobile money accounts — but fewer than one in three counted as active. Which number measures growth?"
order: 3
approved: true
status: production-complete
video:
  src: /unpacked/video/gilb-003.mp4
  poster: /unpacked/posters/gilb-003-poster.jpg
  duration: "2:02"
keyFigures:
  - { value: "85.8M", label: "registered mobile money accounts (Aug 2026)" }
  - { value: "26.4M", label: "classified as active" }
  - { value: "59.4M", label: "not active under the 90-day definition" }
  - { value: "+8.1M vs +1.3M", label: "registered vs active growth in a year" }
compare:
  title: "Mobile money accounts in Ghana, August 2026 (millions)"
  note: "Active = at least one transaction in the previous 90 days (Bank of Ghana definition)."
  items:
    - { label: "Registered accounts", value: 85.8, display: "85.8M" }
    - { label: "Active accounts", value: 26.4, display: "26.4M" }
methods:
  - Extraction from central-bank statistical tables
  - Metric definitions — registered versus active
  - Year-on-year growth comparison
  - Ratio and share analysis
  - Distinguishing accounts from people
sources:
  - { label: "Bank of Ghana — Summary of Economic and Financial Data, September 2026 (Table 11)", url: "https://www.bog.gov.gh/wp-content/uploads/2026/09/Summary-of-Economic-and-Financial-Data-September-2026.pdf" }
  - { label: "Ghana Statistical Service — population projections", url: "https://statsghana.gov.gh/" }
---

## The question

Ghana has about 34 million people and **85.8 million registered mobile money accounts** —
more than two accounts per person. That sounds like a story of extraordinary adoption. But
how many of those accounts are actually being used?

## The data

The Bank of Ghana's *Summary of Economic and Financial Data* (September 2026 edition,
Table 11) reports monthly registered accounts, active accounts, transaction counts and
transaction values. Thirteen months — August 2025 to August 2026 — were transcribed from the
official table.

## The approach

- **Start with the definition.** The Bank of Ghana counts an account as *active* if it
  recorded at least one transaction in the previous **90 days**. Everything else is "not
  active" — which is not the same as closed or abandoned.
- **Compare the two measures side by side** for the same month, then **over a year**.
- **Sanity-check the scale.** August 2026 recorded over one billion transactions — roughly
  400 every second on average — so there is clearly heavy use. The question is how
  concentrated it is.
- **Reproduce the arithmetic** from the transcribed table rather than relying on quoted
  figures.

## The discovery

- In August 2026, **26.4 million of 85.8 million** registered accounts were active —
  **about 31%, fewer than one in three**. The other 59.4 million did not meet the 90-day
  definition.
- Between August 2025 and August 2026, registered accounts grew by **8.1 million** (+10.4%),
  while active accounts grew by only **1.3 million** (+5.2%).
- The gap between registered and active accounts **widened by almost 7 million** in a year,
  and the active share slipped from 32.3% to 30.8%.

So when mobile money "growth" is reported, it matters whether we count accounts that exist
or accounts that are used.

## Limitations

- **Accounts are not people.** One person can hold several accounts, so 85.8 million
  accounts does not mean 85.8 million users.
- "Not active" covers many situations — a backup SIM, a dormant account, an occasional user —
  and the data cannot tell them apart.
- Figures are **rounded** in the published table and **subject to revision**; the analysis
  uses one release rather than reconciling several.
- The population figure is a projection, used only for context.
