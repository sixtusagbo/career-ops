# 012 — Alignerr (Labelbox) — Multi-Role Contributor Stack

**Date:** 2026-05-22
**Company:** Alignerr (powered by Labelbox)
**Role:** AI Training Contributor (7 stacked roles, see below)
**Score:** 3.5/5
**Status:** Applied
**URL:** https://app.alignerr.com/home
**Legitimacy:** Proceed with Caution (destination legit; inbound recruiter channel suspicious — see Block G)
**PDF:** ✅ (existing baseline `output/cv-sixtus-agbo-baseline-2026-05-07.pdf` uploaded; no per-role tailoring)

---

## Path to platform

Cold outreach from `thomas.taylor@meetalignerrexp.com` on 2026-05-20, sat in spam, surfaced again 2026-05-22 with offer of "Senior Software Engineer, AI Code Ranking — $90/hr, 39 hrs/week, fully remote." Recruiter domain registered 2026-02-17 (3 months old), MX on `mail.nationalbizresearch.com` — a third-party lead-gen front, not Alignerr's mail infrastructure. The application link itself went to the real `alignerr.com/jobs/c142fb9f-b4bc-42d1-825a-ff2ff8fbdc06`, where the public listing showed **$50-70/hr, 10-40 hrs/week, Bucharest**, not the inflated terms the recruiter pitched.

Pivot: signed up directly via `alignerr.com` rather than the recruiter link, bypassing the lead-gen funnel. Nigeria accepted at signup, phone-code (+234), and country selector. The original AI Code Ranking role did not surface in the Coding match feed (likely geo-locked to Romania). Strategy shifted to applying to in-feed high-fit coding roles instead.

## 7 roles applied to (2026-05-22)

| # | Role | Rate | Job ID |
|---|------|------|--------|
| 1 | Full Stack Developer (AI Training) | $60-90/hr | 3e678f6c-578d-4990-b0fe-35aeef89a38f |
| 2 | Python Engineer (AI Training) | $60-90/hr | b028f20a-9991-436d-9507-b5d578e7f233 |
| 3 | Frontend TypeScript Engineer (AI Training) | $60-90/hr | e04be9ec-e8aa-4df2-9667-6a1f6c419482 |
| 4 | Software Engineer – Backend (AI Training) | $90-120/hr | d4e72406-684b-452b-ab70-e98e2b2bafb5 |
| 5 | Software Engineer – Frontend | $25-120/hr | (not captured) |
| 6 | Code Review Specialist | $40-120/hr | (not captured) |
| 7 | DevOps / IaC Engineer | $90-120/hr | (not captured) |

Platform enforces **two stacking caps**: 5 per 24-hour window AND 7 pending applications maximum. Hit the 7-pending cap, which is the operational constraint. Remaining 3 from the curated batch (Python Developer, JavaScript Developer, Coding Expert - SQL) are on hold until at least one pending application is reviewed and moved out of pending state.

---

## A) Role Summary

| Field | Value |
|------|------|
| Archetype | LLMOps / RLHF (data annotation flavor) — not traditional IC engineering |
| Domain | AI training data, code review for LLM alignment |
| Function | Evaluate AI-generated code, write structured feedback, rank pairs |
| Seniority | 3-5+ YOE required across all 5 roles; Sixtus has 6 |
| Remote | Fully remote, async, no meetings |
| Commitment | 10-40 hrs/week flexible (SE-Backend role had 15 hr/wk minimum) |
| TL;DR | Contract code-ranking work for frontier AI labs, paid weekly, work on own schedule. |

## B) Match with CV

Each role requires "deep expertise in {language}" plus "exceptional written communication." All five fit Sixtus's stack directly:

| JD requirement | CV evidence |
|----------------|-------------|
| 3-5+ YOE production code | 6 YOE: NexSolve (May 2025-Feb 2026, 4 production apps), Listacc (Jun-Nov 2024), ALX (Jun 2022-Nov 2024) |
| Python, modern frameworks | Arvalox (FastAPI), Food Pilot logic backend, Vitrine (Flask) |
| JavaScript / TypeScript | uStackSchool (Next.js + TS), Arvalox frontend, Grosonix (Next.js + TS + Supabase) |
| Full stack (frontend + backend) | NexSolve role: "RESTful APIs, database schemas, responsive frontend interfaces" |
| Code review / mentoring | Mentored 60+ junior devs in PHP/Laravel at Listacc; code reviews part of NexSolve role |
| Written technical communication | Active blog at sixtusagbo.dev/blog |
| CS degree preferred | B.Sc. Computer Science, Nnamdi Azikiwe University, 2021-2025 |

**Gaps:** None hard. Light on RLHF/AI-evaluation-workflows experience (called out as "Nice to Have" — not blocking).

## C) Level and Strategy

Roles position as 3-5+ YOE Mid-Senior IC, which is the right level for him. Pay band $60-120/hr is consistent with Mercor / Proxify / Lemon for senior remote contract work. No downlevel concern — these are flat IC contracts with no promotion ladder.

**Strategy:** stacked applications to maximize match surface area across direct language/stack hits. The platform's "Apply to more jobs while you wait" prompt and 5/day cap together signal that quantity-up-to-curation-limit is the intended model.

## D) Comp and Demand

| Source | Rate range | Notes |
|--------|------------|-------|
| Public listing (AI Code Ranking) | $50-70/hr | Original recruiter-pitched role on alignerr.com |
| Dashboard sidebar | $80/hr avg | Platform-wide average across all roles |
| Applied roles | $60-90 to $90-120/hr | Top of band for senior coding |
| Recruiter claim | $90/hr | Inflated above public listing — not trustworthy |

At 30 hrs/week × $70/hr (mid-range realistic): ~$8,400/month. At top end ($120/hr × 30 hrs): ~$14,400/month. Comparable to Mercor's $70-200/hr range. Payouts weekly via platform-managed processor; Nigeria-specific payout method gating is the deferred test — not surfaced until first qualification clears.

## E) Customization Plan

| # | Section | Status | Change | Why |
|---|---------|--------|--------|-----|
| 1 | Resume PDF | Existing baseline used as-is | No tailoring | Alignerr resume step is automated parsing — extracts YOE/languages/role titles. Tailoring wastes time. |
| 2 | Profile (Alignerr) | Auto-filled from resume + manual phone/DOB | Native English (not Fluent) | English is Nigeria's official language and language of his work — Native maps to higher-paying English-output projects |
| 3 | Coding languages | All-Advanced except C# (Intermediate) | Skip adding C | "Can write C" is not Advanced — risk of eval failure outweighs marginal project pool |
| 4 | Domain preferences | Coding + Engineering + Writing | Three-pick curated | Stacked picks vs spreading wide; Writing checked because code-ranking output IS structured feedback |

## F) Interview Plan

No traditional interview process. Each role has its own qualifying evaluation (timed code-review/ranking task, typically 30-90 min, often unpaid). Screening will appear via dashboard notification once application is reviewed. Prep:
- Read 2-3 pairs of code and articulate trade-offs in writing (correctness, efficiency, readability, idiom, security, perf)
- Don't optimize for speed; optimize for clarity of the written justification
- Each language's evaluation will be language-specific (the Python Engineer screening tests Python judgment, etc.)

When screening lands, ping me — I can draft sample justifications.

## G) Posting Legitimacy

**Assessment:** Proceed with Caution.

The destination (alignerr.com / Labelbox) is verifiably legitimate — Labelbox is a real, well-funded AI data company. The inbound channel was suspicious enough to warrant pivoting around it.

| Signal | Finding | Weight |
|--------|---------|--------|
| Inbound recruiter domain | `meetalignerrexp.com` registered 2026-02-17 via OpusDNS GmbH; MX on `mail.nationalbizresearch.com` (third-party lead-gen front) | **Concerning** |
| Recruiter pitched terms vs public listing | $90/hr × 39 hrs/wk fixed (recruiter) vs $50-70/hr × 10-40 hrs/wk (listing). Bait-and-switch pattern. | **Concerning** |
| Destination URL | Real `alignerr.com/jobs/...` page, legit Apply flow, "powered by Labelbox" branding consistent | **Positive** |
| Destination MX | `smtp.google.com` — real Google Workspace setup | **Positive** |
| Country eligibility | Nigeria accepted at all three signup checkpoints | **Positive** |
| Original AI Code Ranking role match | Listed as "Bucharest"; did not appear in Sixtus's match feed when filtered or searched | **Concerning** (likely geo-locked) |
| Application flow | One-click apply, no fake assessment pages, no payment requests | **Positive** |
| Daily application cap | Platform enforces 5/day — indicates intentional curation, not spam farming | **Positive** |

**Context note:** The recruiter channel pattern (third-party domain, inflated terms, urgency cues) is classic lead-gen referral-mill behavior. They earn a referral fee when a candidate signs up via their attribution link. The platform itself is real; the recruiter middleman is the noise. **Future inbound from `@meetalignerrexp.com` or similar lookalike domains should be ignored** — apply directly to source platforms instead.

---

## H) Next-day plan

Apply to the 3 remaining from the curated batch once pending count drops below 7:
1. Python Developer ($60-90/hr) — direct stack
2. JavaScript Developer ($60-90/hr) — direct stack
3. Coding Expert - SQL ($20-120/hr) — unique angle, leverages PostgreSQL/MySQL/Supabase experience

Dropped from original 8-batch: Full Stack Engineer (near-duplicate of already-applied Full Stack Developer).

Trigger to apply: when any of the 7 pending applications gets reviewed (moves from "pending" to qualified/rejected/active state), one slot frees up. Watch the dashboard notifications and/or `app.alignerr.com/home` "My jobs" count.

---

## Keywords extracted

Python, JavaScript, TypeScript, FastAPI, Node.js, Next.js, React, full stack, backend, frontend, code review, AI training, RLHF, data annotation, technical writing, async, remote contract, hourly, weekly payout, Labelbox, code ranking, AI-generated code evaluation

---

## Machine Summary

```yaml
report_id: 012
date: 2026-05-22
company: Alignerr
parent_company: Labelbox
url: https://app.alignerr.com/home
roles_applied:
  - title: Full Stack Developer (AI Training)
    rate_min: 60
    rate_max: 90
    job_id: 3e678f6c-578d-4990-b0fe-35aeef89a38f
  - title: Python Engineer (AI Training)
    rate_min: 60
    rate_max: 90
    job_id: b028f20a-9991-436d-9507-b5d578e7f233
  - title: Frontend TypeScript Engineer (AI Training)
    rate_min: 60
    rate_max: 90
    job_id: e04be9ec-e8aa-4df2-9667-6a1f6c419482
  - title: Software Engineer – Backend (AI Training)
    rate_min: 90
    rate_max: 120
    job_id: d4e72406-684b-452b-ab70-e98e2b2bafb5
  - title: Software Engineer – Frontend
    rate_min: 25
    rate_max: 120
    job_id: null
  - title: Code Review Specialist
    rate_min: 40
    rate_max: 120
    job_id: null
  - title: DevOps / IaC Engineer
    rate_min: 90
    rate_max: 120
    job_id: null
commitment_hrs_per_week: 10-40
contract_type: hourly
remote: true
location: global (Nigeria accepted)
score: 3.5
status: Applied
legitimacy: proceed_with_caution
legitimacy_notes: Destination Alignerr/Labelbox legitimate. Inbound channel meetalignerrexp.com is third-party lead-gen with inflated terms — bypassed by signing up directly.
platform_app_cap_per_day: 5
platform_app_cap_pending: 7
next_action: Wait for any pending application to be reviewed (frees a slot), then apply to the 3 remaining (Python Developer, JavaScript Developer, Coding Expert - SQL)
follow_up_signals:
  - notification of screening evaluation
  - first project match
  - payout method setup (deferred Nigeria eligibility test)
```
