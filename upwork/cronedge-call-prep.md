# CronEdge call — my script

I'm meeting Anuoluwapo Balogun (CronEdge LLC, US-registered, she's Nigerian) on **Thursday, June 11, 2:00-2:30pm WAT**, Google Meet: **meet.google.com/adz-buic-sfp** (on my calendar, both of us RSVP'd yes). I'm doing it from the hub on Starlink, set up 10 minutes early to test mic and cam. If the hub network dies, I hotspot my phone.

## What this call really is

She asked about microservices on a $250 site, so she's not shopping for a brochure builder. She's deciding if I'm the long-term technical partner. My goal: show I can own the whole arc (site, then portal, then backend), agree on next steps, and leave with the site contract moving. This is a conversation, not a pitch. I'm not presenting slides; I know this cold and I ask sharp questions.

## My frame — MEMORIZE

"You need a credible, lead-generating site now and a customer portal later. I ship the site fast AND lay the foundation so the portal never needs a rebuild."

## How I'd build the site (8 pages, each with a job)

- **Home** is my lead-gen page: clear value prop (the DevOps and cloud ops partner), services snapshot, trust signals, and a book-a-consultation CTA.
- **About**: story, mission, credibility.
- **Services**: one section per line (DevOps, cloud infrastructure, platform engineering, automation, managed support), written as client outcomes, and structured so each can grow into its own SEO landing page later.
- **Industries We Serve**: segment pages, a future programmatic SEO play.
- **Pricing**: plans or retainers with a consult CTA, or contact-for-quote if she prefers.
- **Careers**: open roles, easy to update.
- **Contact**: lead form with spam protection and email notifications. I'll point out that this form is the seed of the future service-request flow. It shows I think in phases.
- **Blog / Resources**: MDX or a lightweight CMS so her team publishes without a developer, with SEO topic clusters around DevOps and cloud keywords.

## My stack answer

"I'd build it on Next.js (App Router) with TypeScript and Tailwind, deployed on Vercel, so you get preview links for every change. SEO done properly: per-page metadata, Open Graph, structured data, sitemap, fast Core Web Vitals. Analytics wired in. And at handover you get the source code, deployment docs, and everything sits on accounts YOU own: domain, hosting, repo."

## My microservices answer — MEMORIZE

"The marketing site itself doesn't need microservices. Next.js on Vercel is right for it. Containerized services earn their place when the portal ships. I design the boundaries now and deploy services when there's something to serve."

If cost comes up: "unneeded complexity is unneeded cost."

The fuller picture I can speak to:
- Now: design system, auth-ready route structure, lead data captured cleanly, so the portal slots in later.
- Portal phase 1: client login, service requests (ticketing), account management. Phase 2: Stripe payments and onboarding.
- Portal backend: containerized services (Docker), one concern per service (accounts, requests, billing), typed API contracts, each independently deployable.

## My timeline

"Five to ten days. Days 1-2 I set up the structure, design system, and Home. Days 3-5 the inner pages. Days 6-7 blog, SEO, and performance polish. Days 8-10 revisions, deploy, and docs. You get daily updates and a Vercel preview link the whole way."

## Questions I'll ask her (pick 4 or 5)

1. "What matters more right now: launching the site fast, or laying the portal foundation first?"
2. "What exists already? Logo, colors, written copy, reference sites you like? Who's writing the copy?"
3. "After launch, who updates content: blog, pricing, careers?" (Sets up my MDX / lightweight CMS pitch.)
4. "For the portal, what does a customer actually do in it day to day?" (This scopes the microservices. I won't let it stay vague.)
5. "How do you like to work? Milestones on Upwork, daily check-ins?"
6. "What's your timeline, and how will you make the decision?"

## My money lines

- The $250 covers the 8-page site: design in code, responsive, SEO, deploy, docs.
- Portal, Stripe, and microservices are separate phases I scope after the site is live.
- If she bundles it all into the $250 — MEMORIZE: "The site I can start now at that scope. The portal is real backend work, so I'd scope it as its own phase, and you only commit when you're ready."
- I'll offer milestone 1 = Home + site structure so she sees momentum within days.

## If she throws curveballs

- "Can you design it too?" "Yes. I design directly in code with Tailwind against reference sites you like. A full custom Figma design phase first would be its own scope."
- "Microservices for the website itself?" My memorized judgment line. Saying no to unnecessary complexity is my senior signal.
- "Can we work outside Upwork?" "Let's keep the contract and payments on Upwork, it protects us both." (And the review matters to me.)
- "Can you start today?" "Yes, as soon as the contract is set up."

## My logistics checklist (nail down before we hang up)

- How I'll get brand assets and any existing copy or designs.
- We communicate on Upwork during the build.
- Contract through Upwork before any work. Her accounts own domain, hosting, and repo; I hand over cleanly.

## How I show up

Direct, prepared, friendly. Warm with the Nigerian rapport, still professional. I've shipped Next.js and FastAPI SaaS (Arvalox) and a live App Store app (Food Pilot). I belong in this conversation.
