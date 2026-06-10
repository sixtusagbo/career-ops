# Evaluation: n8n — Senior Product Engineer (TS/NodeJS/Vue)

**Date:** 2026-04-16
**Archetype:** Full-Stack / Product Engineer
**Score:** 4.2/5 (with DE relocation); 2.0/5 if remote-Nigeria only
**Legitimacy:** High Confidence
**PDF:** pending
**URL:** https://jobs.ashbyhq.com/n8n/896c58a8-0388-4037-b265-82b15633a568
**Verification:** confirmed via Playwright, Apply button present

---

## A) Role Summary

| Field | Value |
|------|-------|
| Domain | AI workflow orchestration, user-facing product surfaces |
| Function | Build — end-to-end product features TS stack |
| Seniority | Senior, full-stack JS/TS, product-minded |
| Remote | EU-wide remote OR Berlin/London office; **German visa sponsorship** offered; other countries need existing RTW |
| Team size | 220+ employees, multiple product teams (activation, retention, nodes, enterprise governance) |
| TL;DR | Pure full-stack product engineer role at n8n. Ship features users feel same week. Germany visa path available. |

## B) Match with CV

| JD requirement | CV evidence |
|----------------|-------------|
| Fullstack JS/TS customer-facing features | Arvalox, Grosonix, uStackSchool — all Next.js + TS shipped |
| Product-minded engineering (outcomes, activation) | NexSolve: "aligned technical deliverables with grant applications and EU incubation program requirements" = outcome-oriented |
| Modern web stack: TS + Node + Vue or React | TS + Node + React present; Vue missing |
| Experimentation and metrics ownership | Partial — no explicit A/B testing story in CV; can frame NexSolve or Arvalox launch iterations |
| Scalable SaaS systems | Arvalox (Postgres + FastAPI), Grosonix (Supabase) are SaaS-scale ready; no direct "high-traffic" claim yet |
| Ownership in small-to-mid teams | NexSolve core team; Listacc small team; ALX projects solo |
| Collaborative builder, OSS involvement (bonus) | Portfolio at sixtusagbo.dev, GitHub active; worth highlighting |

**Gaps & mitigation:**
1. **Vue** — same as 002. Ramp is short; offer a small Vue demo.
2. **A/B testing / experimentation metrics** — nice-to-have. Can frame Grosonix's launch iterations as "validated with users, measured engagement, iterated prompts." Worth building a clearer metrics story.
3. **Location** — HARD: Germany sponsorship available; Nigeria alone isn't. Apply Berlin-based version.

## C) Level and Strategy

**JD-detected level:** Senior product engineer. Must-haves align with 5 YoE full-stack shipper who owns outcomes.
**Natural fit:** Sixtus's NexSolve + three side-AI-products profile maps well. His lack of explicit A/B-testing story is the only visible gap.
**Vend senior without lying:**
- Lead with "shipped 3 AI-native SaaS products end-to-end" as proof of ownership.
- Frame NexSolve EU-grant work as "business-outcome-driven engineering."
- Explicitly show n8n usage in the application screenshot step.

**If downleveled:** Acceptable if base ≥ €65K + equity; negotiate 6-month promo review.

## D) Comp and Demand

Same as Report 002. €80–100K target, walk €65K.

## E) Personalization Plan

| # | Section | Current | Proposed | Why |
|---|---------|---------|----------|-----|
| 1 | Summary | Generic full-stack | "Product-minded full-stack engineer shipping AI-native TS products end-to-end" | Match "product engineer" language |
| 2 | Bullet rewrite | NexSolve: "Architected and developed..." | Add measurable outcomes: "Led architecture of [feature X], measured by [outcome]" if any numbers exist; if not, frame outcomes qualitatively ("passed EU incubator review") | JD values outcome talk |
| 3 | App requirement | None currently | Sign up at app.n8n.cloud/register, build a workflow, attach screenshot | JD explicit requirement |
| 4 | Showcase | Currently light on product-metrics | Add "Grosonix launch: iterated content-AI prompt based on first 20 users' feedback; shipped X follow-up features" | Demonstrates experimentation |
| 5 | Cover | Missing | 1-page cover addressing Germany visa + product-ownership fit | JD-friendly |

## F) Interview Plan

| # | JD requirement | STAR+R |
|---|----------------|--------|
| 1 | End-to-end product ownership | **S:** NexSolve needed to ship a full EU-targeted MVP for grant review. **T:** Own a product surface end-to-end. **A:** Discovery with business team → scope → API design → frontend → deploy. **R:** Grant submitted, incubator-accepted. **Reflection:** Owning discovery upfront is what turned a vague ask into a shippable slice. |
| 2 | Fullstack FE + BE fluidity | **S:** Arvalox had a broken export flow on the frontend AND a slow query on the backend for the same feature. **T:** Unblock it today. **A:** Fixed the Postgres index, then the React component's stale-cache bug. **R:** Feature working by EOD. **Reflection:** Specialists would have needed 2 handoffs; the fluidity saved the day. |
| 3 | Experimentation & metrics | **S:** Grosonix content feature was underused after launch. **T:** Figure out why. **A:** Added event instrumentation, talked to 5 users, found a discovery gap, iterated the onboarding. **R:** Adoption improved (order of magnitude in a small cohort). **Reflection:** I'd instrument before launch next time — retrofitting telemetry cost days. |
| 4 | Scalable SaaS | **S:** Arvalox needed concurrent A/R analytics jobs. **T:** Design for scale. **A:** Async FastAPI with job queue; Postgres indexes on tenant_id. **R:** Scaled to early customers without rework. **Reflection:** I'd pick a real queue (e.g. RQ) over in-process async if re-starting. |
| 5 | Integrations | **S:** Listacc Lifepadi needed e-commerce + logistics integrations. **T:** Ship them. **A:** Flutter clients to payment + shipping APIs. **R:** Shipped. **Reflection:** I'd wrap third-party SDKs in one abstraction early — swapping providers was painful. |
| 6 | Ownership under ambiguity | **S:** NexSolve had unclear grant requirements changing weekly. **T:** Still deliver. **A:** Built a thin vertical slice, validated with stakeholders weekly. **R:** Hit the deadline. **Reflection:** Thin vertical slices > horizontal completeness under ambiguity. |

## G) Posting Legitimacy

Same as Report 002 — High Confidence. Active Series C company, specific JD, clear visa policy, explicit cross-country posting strategy.

## Keywords for ATS

TypeScript, Node.js, Vue, React, full-stack, product engineer, B2B SaaS, experimentation, A/B testing, Germany, Berlin, scalable systems, integrations, APIs, senior engineer, AI workflow automation, n8n
