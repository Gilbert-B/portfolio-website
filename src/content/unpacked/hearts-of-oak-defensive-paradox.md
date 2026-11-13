---
storyId: GILB-001
title: "Hearts of Oak's Defensive Paradox"
domain: Sports analytics
summary: "24 clean sheets in 34 matches — and still no league title. What the match-by-match record actually shows."
order: 1
approved: true
status: production-complete
video:
  src: /unpacked/video/gilb-001.mp4
  poster: /unpacked/posters/gilb-001-poster.jpg
  duration: "1:40"
keyFigures:
  - { value: "24 / 34", label: "matches without conceding" }
  - { value: "13", label: "goalless (0–0) draws" }
  - { value: "25", label: "goals scored all season" }
  - { value: "8 pts", label: "behind champions Medeama" }
compare:
  title: "Goals scored, 2025/26 Ghana Premier League"
  note: "Hearts conceded 13 fewer goals than Medeama (15 vs 28) — but scored 27 fewer."
  items:
    - { label: "Medeama (champions)", value: 52, display: "52" }
    - { label: "Hearts of Oak (3rd)", value: 25, display: "25" }
methods:
  - Match-by-match data transcription
  - Reconciliation against official final standings
  - Descriptive statistics and rates
  - Comparison with the league champion
  - Separating descriptive findings from causal claims
sources:
  - { label: "RSSSF — Ghana 2025/26 round-by-round results", url: "https://www.rsssf.org/tablesg/gha2026.html" }
  - { label: "Ghana Football Association — final 2025/26 league table", url: "https://www.ghanafa.org/official-ghana-premier-league-table-after-the-end-of-the-2025-26-season" }
  - { label: "Ghana Football Association — 2025/26 season statistics", url: "https://ghanafa.org/ghana-premier-league-2025-26-statistics?amp=1" }
---

## The question

Hearts of Oak kept **24 team clean sheets in 34 league matches** in the 2025/26 Ghana
Premier League — an outstanding defensive record. Yet they finished third. How does a team
that rarely concedes fail to win the league?

## The data

All 34 of Hearts' league results were transcribed match by match from RSSSF's round-by-round
record of the season. Each result was normalised to Hearts' goals for and against, whether
the club played at home or away, and placed in the order the matches were actually played
(RSSSF notes that round 31 was played before round 30).

## The approach

- **Reconcile before analysing.** The transcribed results were checked against a second
  source: they must add up to the published final record — 13 wins, 15 draws, 6 losses,
  25 goals for, 15 against, 54 points. The Ghana FA's season statistics independently
  confirm the 24 clean sheets.
- **Count what the headline hides.** Clean sheets were split into those that became wins and
  those that ended 0–0.
- **Benchmark against the champion.** Medeama's final record (17 W, 11 D, 6 L, 62 points,
  52 goals) gives a like-for-like comparison over the same 34 matches.
- **Use a fair league baseline.** 627 goals across 306 matches is 1.02 goals per team per
  match; Hearts averaged 0.74.

## The discovery

- **13 of the 24 clean sheets were goalless draws.** More than half of Hearts' shutouts
  earned one point, not three.
- Hearts failed to score in **18 of 34 matches** — 13 goalless draws and 5 scoreless defeats.
- **Both clubs lost exactly six matches.** Medeama had four more wins and four fewer draws —
  and that difference (+12 points, −4 points) accounts for the eight-point gap.
- The defence was elite; the attack scored **25 goals, less than half of Medeama's 52**.

Defence alone wasn't enough.

## Limitations

- These are **descriptive match-result findings**. The data has no shots, expected goals,
  injuries or tactics, so it cannot say *why* Hearts struggled to score.
- "Four more wins explain the eight points" is arithmetic on the actual results, not a
  simulation of what would have happened with different tactics.
- Team clean sheets are not the same as a goalkeeper's credited clean sheets.
- Results were transcribed by hand; reconciliation against the official table reduces, but
  does not eliminate, the risk of a transcription error.
