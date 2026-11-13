---
storyId: GILB-002
title: "MTN's Two Market Shares"
domain: Telecommunications & market analytics
summary: "Four in five mobile data subscriptions — but nearly nine in ten gigabytes. Why two 'market shares' tell different stories."
order: 2
approved: true
status: production-complete
video:
  src: /unpacked/video/gilb-002.mp4
  poster: /unpacked/posters/gilb-002-poster.jpg
  duration: "2:02"
keyFigures:
  - { value: "80.12%", label: "MTN share of mobile data subscriptions (31 Mar 2026)" }
  - { value: "87.31%", label: "MTN share of mobile data traffic (Jan–Mar 2026)" }
  - { value: "+7.19 pp", label: "gap between the two measures" }
compare:
  title: "MTN Ghana — two ways to measure market share, Q1 2026"
  note: "Two different metrics: an end-of-quarter count versus three months of data volume."
  items:
    - { label: "Share of mobile data subscriptions", value: 80.12, display: "80.12%" }
    - { label: "Share of mobile data traffic", value: 87.31, display: "87.31%" }
methods:
  - Extraction from regulatory statistical tables
  - KPI definition — stock versus flow measures
  - Cross-release reconciliation
  - Percentage points versus percent change
  - Excluding disputed figures rather than "fixing" them
sources:
  - { label: "NCA — Quarterly Statistical Bulletin on Communications, Q1 2026 (Tables 15 & 18)", url: "https://nca.org.gh/wp-content/uploads/2026/06/Q1_2026_Statistical_Bulletin.pdf" }
  - { label: "NCA — Monthly industry data, July 2026 (cross-check)", url: "https://nca.org.gh/wp-content/uploads/2026/10/Monthly-Industry-Data_July_2026-.pdf" }
  - { label: "NCA — Mobile data subscription release, February 2026 (discrepancy record)", url: "https://nca.org.gh/wp-content/uploads/2026/04/Data-Subscription-February-2026.pdf" }
---

## The question

"MTN has about 80% of the market" is a familiar line in Ghana. But *market share of what?*
The National Communications Authority publishes more than one measure. Do they agree?

## The data

The story uses the NCA's **Q1 2026 Quarterly Statistical Bulletin**: Table 15 (active mobile
data subscriptions at 31 March 2026, by operator) and Table 18 (mobile data traffic in
terabytes, January–March 2026, by operator). The March subscription figures were cross-checked
against the NCA's later July 2026 monthly report.

| Operator | Subscription share (31 Mar 2026) | Traffic share (Jan–Mar 2026) | Gap |
|---|---:|---:|---:|
| MTN | 80.12% | 87.31% | +7.19 pp |
| Telecel | 15.53% | 11.49% | −4.04 pp |
| AT | 4.34% | 1.19% | −3.15 pp |

## The approach

- **Recompute, don't copy.** MTN's traffic share was recalculated from the bulletin's own
  volumes: 1,091,499 TB of a 1,250,099 TB total = **87.31%**. The operator volumes add up
  exactly to the published total.
- **Name the unit correctly.** 87.31 − 80.12 is a gap of **7.19 percentage points**, not
  "7.19% growth".
- **Check across releases.** March operator shares match between the Q1 bulletin and the
  July 2026 report at the published two-decimal precision.
- **Independent audit.** An earlier version of the story tracked MTN subscriptions over time.
  An independent review found that the NCA's published MTN count for December 2025 differs
  by **2,424,652** between two official releases (22,867,689 vs 25,292,341). Rather than
  guess which figure was right, that storyline was **excluded** and the story narrowed to
  figures that cross-check cleanly. The excluded analysis is kept on record, not deleted.

## The discovery

MTN is the largest operator by both measures — but its lead is bigger on **data actually
carried** than on **subscriptions counted**. It held about four in five mobile data
subscriptions, yet carried nearly nine in ten gigabytes. Telecel and AT both carry a smaller
share of traffic than their share of subscriptions.

The broader lesson: a single "market share" figure depends entirely on which measure is
being shared.

## Limitations

- Subscriptions are a **point-in-time count**; traffic is **volume over a quarter**. The gap
  between them does not tell us how much any individual customer uses.
- The aggregated data cannot explain *why* the gap exists — pricing, network quality,
  device mix and customer behaviour are all possible factors, and none is evidenced here.
- Official statistics can contain inconsistencies, as the December 2025 case shows. These
  figures are accurate to the published sources, not independently audited at operator level.
