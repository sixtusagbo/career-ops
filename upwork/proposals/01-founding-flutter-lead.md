# Proposal — Founding Flutter Technical Lead (Flutter + Python + MongoDB)

Job: /jobs/Founding-Flutter-Technical-Lead-Flutter-Python-MongoDB_~022063232645045565002/
Connects: 13 | Proposals: 5-10 | Client: India, new (Apr 2026), $75 spent, 3.0★, 3 interviewing
Suggested bid rate: **$25/hr** (room to hold; this is a lead/architect role, don't bid junior)

---

## COVER LETTER (copy-paste this)

Your stack is the exact stack I build in: Flutter with Riverpod, GoRouter, Dio and a clean, feature-first architecture, on a FastAPI backend. I have a Flutter app live on the App Store and another in active development built on precisely Riverpod + GoRouter, so I can own this from architecture through Play/App Store release, not just the UI.

I noticed your last engagement ran into scope expansion and gaps in the overall app flow. That is the failure mode disciplined architecture exists to prevent. I work in defined phases with written API contracts, agreed collection schemas, and a modular codebase so new requirements slot in without rewrites, and I will push back early when a request threatens the timeline rather than silently absorbing it. You asked for someone who challenges poor technical decisions; that is how I work.

Answering your questions directly:

1. Flutter apps I have built: Food Pilot, an AI eating companion live on the App Store with active users and a 7.25% install conversion (about 3x the App Store average); Lifepadi, a full-featured e-commerce and logistics app; Ace iT Pro, a cross-platform exam-prep app on iOS and Android; plus a game I am currently building on Riverpod + GoRouter.

2. Architecture I would recommend: Clean Architecture with feature-first modules (each feature owning its data, domain, and presentation layers), Riverpod for state, GoRouter for declarative navigation and deep links, Dio with interceptors for auth/refresh and centralized error handling, and a repository layer that keeps the FastAPI contract behind interfaces so the app never couples directly to backend shapes. I define API contracts and DB collections before writing feature code.

3. State management and why: Riverpod over Bloc for this product. It is compile-safe, testable without ceremony, has far less boilerplate per feature, and its provider scoping fits a feature-modular codebase cleanly. Bloc is fine but its event/state overhead slows iteration on a product that will change a lot in Phase 1. I use Riverpod in production.

4. Chat systems: I have built real-time interfaces and would architect user-to-user messaging on WebSockets for live delivery with FCM for push when backgrounded, message pagination, optimistic send, read receipts, and the match-expiry lifecycle you described modeled server-side so it stays consistent across devices.

5. Subscriptions: Apple In-App Purchase and Google Play Billing on the client, Razorpay for non-store payments, with entitlements resolved server-side and receipts validated on the backend (never trust the client). Trial and referral logic lives in the API so it can't be spoofed. I have built billing-driven SaaS (Arvalox, a B2B accounts-receivable platform) on FastAPI.

6. Identity verification: the honest senior call is to integrate a dedicated KYC/liveness provider (HyperVerge or Persona work well for India and Gov-ID + selfie liveness) rather than build verification and anti-spoofing from scratch. I would own the workflow, webhooks, and the verification-state machine, and keep the provider behind an interface so it is swappable. Building liveness in-house is a security liability I would steer you away from.

7. Timeline for MVP: at roughly 25-30 hrs/week, a realistic Phase 1 is about 12-14 weeks: foundation + OTP auth + session/device management (weeks 1-3), profiles + media + discovery + matching (weeks 4-7), real-time chat + subscriptions (weeks 8-10), verification + admin APIs + hardening and store submission (weeks 11-14). I would lock this with you as phase milestones.

8. Team size: start lean. I lead Flutter + FastAPI architecture and build the core solo through Phase 1, which keeps decisions coherent. Add a second backend engineer and a QA tester once the foundation is stable, around week 6-8, not before.

9. Availability: available now, around 25-30 hrs/week, with daily overlap with IST.

10. Why I am interested: I like building products with real architecture ownership, and the trust-first, AI-aware direction (compatibility, verification, the future trust graph) is the kind of long-term foundation work I do best. One early thing I would want to pressure-test with you: MongoDB is a fine fit for profiles and chat, but matching, mutual-likes, and a future trust graph often belong in a relational or graph store. I would model Phase 1 collections in Mongo and flag where Postgres or a graph layer earns its place, rather than defaulting.

Happy to share a short architecture sketch for Phase 1 on a quick call.

Sixtus
```

---

## NOTES (not part of the letter)
- Honest framing held: identity verification = "integrate a provider," not "I've built gov-ID verification." MongoDB = flagged as a thing to pressure-test (he's PostgreSQL-strong), which doubles as the "challenge poor decisions" signal they asked for.
- Chat framed as "real-time interfaces + would architect" — not claiming a shipped dating messenger.
- Lead with stack-mirror + App Store proof in the first two lines (that's all the client sees in preview).
