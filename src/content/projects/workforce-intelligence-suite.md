---
title: "Workforce Intelligence Suite"
summary: "Does our training produce people who perform, and how quickly? Three Power BI reports on one shared model follow trainees from the academy to their first 90 days on a payments operations floor."
status: complete
tools: [Power BI, DAX, SQL Server, MongoDB, Python, pytest]
repo: "https://github.com/Gilbert-B/workforce-development-analytics"
date: 2026-11-20
---

*Portfolio project. All people, cases and numbers are synthetic, generated for a fictional digital payments company.*

## The problem

A payments company trains new Operations Associates in eight-week cohorts. It approves them for readiness and deploys them into a team that resolves payment exceptions: returned and duplicate payments, failed validations, missing beneficiaries and sanctions-screening hits.

Three groups ask three different questions:

- **Academy managers:** who is progressing, who needs coaching, who is ready?
- **Operations managers:** are we meeting SLA, is quality holding, and how long do new people take to get up to speed?
- **Leadership:** is the academy working? Do the people it approves perform, and does what we see in training predict it?

Those answers usually sit in three disconnected tools. This project joins them.

<figure class="shot">
  <img src="/projects/workforce-intelligence-suite/02_rampup.webp" alt="Payment Operations report: graduate ramp-up page comparing SLA met, first-time right and productivity by tenure band against tenured agents" loading="lazy" width="2000" height="1168" />
  <figcaption>Graduate ramp-up: new graduates against the tenured benchmark, by days in role.</figcaption>
</figure>

## What I built

**Three Power BI reports on one shared semantic model.** Each report answers one group's question. They all read the same model, so a measure such as *SLA Met %* has one definition everywhere.

1. **Workforce Development & Readiness:**
   - cohorts compared by programme week, not calendar date;
   - competencies;
   - attendance, with *unrecorded* kept separate from *absent*;
   - the coaching watch list, certifications and readiness approvals;
   - a Trainee 360 drill-through.
2. **Payment Operations Performance:**
   - SLA, first-time right, QA and the open backlog;
   - each graduate's ramp-up against a tenured benchmark;
   - an Agent 360 drill-through.
3. **Workforce Outcomes & Training Effectiveness:**
   - each graduate's first 30, 60 and 90 days, retention and proficiency;
   - how training results relate to those outcomes;
   - a Graduate journey drill-through.

**A real multi-source pipeline.**
- **Training records** are relational.
- **Payment cases live in MongoDB** as JSON documents, as a case-management system would hold them, with nested events, QA checklists and rework history.
- **A Python ETL** loads them incrementally into SQL Server:
  - an `(updated_at, _id)` checkpoint copes with tied timestamps and resumes after a crash;
  - each case is replaced as a whole, so re-runs are safe;
  - malformed documents are rejected with a reason;
  - the result is reconciled against MongoDB.

<figure class="shot">
  <img src="/projects/workforce-intelligence-suite/architecture.svg" alt="Architecture: Python generators feed MongoDB and CSV files; a Python ETL loads SQL Server; SQL views feed one Power BI model shared by three reports" loading="lazy" width="1200" height="520" />
  <figcaption>From generated data to three reports. One command rebuilds the whole database in about a minute.</figcaption>
</figure>

**Tested, so it can be trusted.**
- 171 automated tests.
- 115 SQL checks across the four builds.
- A check that proves new work never changed an existing measure in the shared model.

## Decisions that matter

- **Honest denominators:**
  - an open case is never counted as an SLA miss;
  - an unsampled case is never counted as a QA pass;
  - a graduate who left in month two has no month-three score, rather than a zero.
- **Benchmarks that compare like with like:** the tenured benchmark ignores agent and tenure filters, but keeps team, queue and priority.
- **Built as code, editable in Power BI:**
  - the model's tables are generated from the SQL views, so they can't drift apart;
  - report pages are generated and checked against Microsoft's schemas and the model;
  - shared styling lives in each report's theme;
  - every label is a normal, editable title.

## What the data shows

<figure class="shot">
  <img src="/projects/workforce-intelligence-suite/03_effectiveness.webp" alt="Workforce Outcomes report: training effectiveness page with SLA by competency band, proficiency by band, a competency vs first-time-right scatter and a findings panel" loading="lazy" width="2000" height="1142" />
  <figcaption>Does training predict early performance? Moderately, and most of the weakest trainees catch up.</figcaption>
</figure>

- **Ramp-up:**
  - new graduates meet SLA on **75%** of cases in their first month, against **84%** for experienced agents;
  - after 90 days the gap is under one point;
  - productivity rises from **1.15** to **1.6** resolved cases per day.
- **Proficiency:** **74%** of graduates still employed at day 90 reach the proficiency standard by then, after **64 days** on average.
- **Training predicts, but only moderately:**
  - **24%** of the top third by final training competency meet the standard in their first 30 days, against **8%** of the bottom third;
  - by day 90 most of the bottom third have caught up (**72%**);
  - passing both certifications first time goes with a faster start (**16%** vs **9%** proficient by day 30).
- **Retention:** trainees who needed the coaching watch list were more likely to leave in their first 90 days (**90.5%** vs **96.6%** retained).

**So what:**
- **Use training scores to target support in the first 60 days, not to screen people out.** The weakest trainees mostly catch up.
- **Treat the watch list as an early retention signal.**

*These are associations in a simulated organisation, not causal claims. The simulation deliberately builds in a moderate link with large individual variation, as real studies typically find.*

## The reports

<figure class="shot">
  <img src="/projects/workforce-intelligence-suite/01_overview.webp" alt="Workforce Development report overview: KPI cards, training pipeline by cohort and weekly competency progression" loading="lazy" width="2000" height="1083" />
  <figcaption>Report 01 · Workforce Development & Readiness: the academy at a glance.</figcaption>
</figure>

<figure class="shot">
  <img src="/projects/workforce-intelligence-suite/01_trainee360.webp" alt="Trainee 360 drill-through: attendance by programme week and competency progression for one trainee" loading="lazy" width="2000" height="1058" />
  <figcaption>Trainee 360: one trainee's attendance and competency against their cohort, week by week.</figcaption>
</figure>

<figure class="shot">
  <img src="/projects/workforce-intelligence-suite/02_overview.webp" alt="Payment Operations overview: KPI cards, monthly volume and SLA, SLA by priority, queue league table and open backlog" loading="lazy" width="2000" height="1149" />
  <figcaption>Report 02 · Payment Operations Performance: volume, SLA, quality and backlog.</figcaption>
</figure>

<figure class="shot">
  <img src="/projects/workforce-intelligence-suite/02_agent360.webp" alt="Agent 360 drill-through: one agent's KPIs, monthly cases and SLA, ramp against the tenured benchmark and recent cases" loading="lazy" width="2000" height="1131" />
  <figcaption>Agent 360: one agent's months in role, with no invented zeros before they started or after they left.</figcaption>
</figure>

<figure class="shot">
  <img src="/projects/workforce-intelligence-suite/03_overview.webp" alt="Workforce Outcomes overview: retention, proficiency, 30/60/90-day SLA and first-time right against tenured agents, and results by cohort" loading="lazy" width="2000" height="1162" />
  <figcaption>Report 03 · Workforce Outcomes & Training Effectiveness: the first 90 days in operations.</figcaption>
</figure>

<figure class="shot">
  <img src="/projects/workforce-intelligence-suite/03_journey.webp" alt="Graduate journey drill-through: one graduate's SLA, first-time right and productivity in each 30-day window" loading="lazy" width="2000" height="1164" />
  <figcaption>Graduate journey: from academy to day 90, one graduate at a time.</figcaption>
</figure>

<figure class="shot">
  <img src="/projects/workforce-intelligence-suite/model.webp" alt="Power BI model view: one semantic model with training, operations and outcome tables" loading="lazy" width="1687" height="958" />
  <figcaption>One shared semantic model behind all three reports.</figcaption>
</figure>

## What I'd do next at scale

- **Materialise the heavy tables:** build the agent-day and outcome tables during the ETL, rather than as views.
- **Use change streams** instead of polling MongoDB.
- **Publish to the Power BI Service** with incremental refresh and row-level security by team.
- **Measure the training effect properly:** replace the synthetic link with a real evaluation design, such as a hold-out cohort or a staggered rollout.

## Where this comes from

This builds on a single-cohort learner-performance dashboard I created professionally. This portfolio edition is a new, fictional scenario: the multi-cohort design, the pipeline, the payments domain and everything in the repository were built for it. No original files or data are used.

[View the code, data pipeline and documentation on GitHub →](https://github.com/Gilbert-B/workforce-development-analytics)
