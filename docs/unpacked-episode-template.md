---
# Copy this file to src/content/unpacked/<short-name>.md (not into docs/).
# Only state figures that were verified. Nothing appears on the site until approved: true.
storyId: GILB-000            # permanent story ID, format GILB-NNN
title: "Episode title"
domain: Topic area           # e.g. Sport, Telecommunications, Financial services
summary: "One or two sentences: the familiar claim and the twist."
order: 99                    # position in the list (lower = earlier)
approved: false              # set to true only after final approval
status: production-complete  # or: published (then publishedUrl is required)
# publishedUrl: https://...
video:
  src: /unpacked/video/gilb-000.mp4
  poster: /unpacked/posters/gilb-000-poster.jpg
  duration: "0:00"
keyFigures:                  # up to 4
  - { value: "00%", label: "what this number means" }
compare:                     # optional bar comparison; delete if not needed
  title: "What is being compared"
  note: "Optional caveat."
  items:
    - { label: "Item A", value: 100, display: "100" }
    - { label: "Item B", value: 50, display: "50" }
methods:
  - Method or skill used
sources:
  - { label: "Publisher — dataset or report name", url: "https://example.org/" }
---

## The question

What familiar headline or statistic is being questioned?

## The data

Which official sources and tables, covering which period.

## The approach

- How the numbers were reproduced and verified.

## The discovery

What the data actually shows.

## Limitations

What the data cannot tell us; what was excluded and why.
