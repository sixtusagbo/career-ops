# CronEdge call — prep

Client: Anuoluwapo Balogun, CronEdge LLC (US-registered tech consulting; founder is Nigerian).
**Booked: Thursday, June 11, 2:00-2:30pm Lagos (WAT), 30 min, Google Meet.** Doing it at a hub on Starlink for strong daytime network. Be there ~10 min early to test mic/cam.

Before the call: (1) accept the Gmail invite from admin@cronedge.com (Gmail held it as "unknown sender", so it isn't on your calendar until you accept; accepting also RSVPs to her). (2) Send the one-line confirmation in Upwork: "Hi Anuoluwapo, I booked the Thursday 2pm slot (WAT) through your Notion link. Looking forward to the call." The Google Meet link is inside that invite email.

## What this call really is

A fit/discovery call. The microservices question on a $250 site tells you they're sizing you up as an ongoing technical partner, not a one-off brochure builder. Goal: come across as the senior who can own the whole arc (site -> portal -> backend), agree on next steps, and leave with the site contract moving.

Keep it a conversation, not a pitch. Everything below is so you sound fluent and ask sharp questions, not slides to present.

## The one-liner (your frame for the whole call)

CronEdge needs a credible, lead-generating site now and a customer portal later. You're the developer who ships the site fast AND lays the foundation so the portal never requires a rebuild.

## Site outline (8 pages, each with a job)

- **Home**: clear value prop (the DevOps and cloud ops partner), services snapshot, trust signals, "book a consultation" CTA. This is the lead-gen page.
- **About**: story, mission, credibility.
- **Services**: one section per line (DevOps, cloud infrastructure, platform engineering, automation, managed support), written as client outcomes, structured so each can grow into its own SEO landing page later.
- **Industries We Serve**: segment pages; future programmatic SEO play.
- **Pricing**: plans or retainers with a consult CTA (or "contact for quote" if they prefer).
- **Careers**: open roles, easy to update.
- **Contact**: lead form with spam protection and email notifications. This form is the seed of the future service-request flow; saying so shows you think in phases.
- **Blog / Resources**: MDX or a lightweight CMS so their team publishes without a developer; SEO topic clusters around DevOps and cloud keywords.

## Stack and why (say it with confidence)

Next.js (App Router) + TypeScript + Tailwind, deployed on Vercel (fast, preview links for every change). SEO done properly: per-page metadata, Open Graph, structured data (Organization and Service schema), sitemap, fast Core Web Vitals. Analytics wired in. Handover: source code, deployment docs, everything on accounts THEY own (domain, hosting, repo).

## Portal direction (your microservices answer, with judgment)

- Now: design system, auth-ready route structure, and lead data captured cleanly, so the portal slots in later.
- Portal phase 1: client login, service requests (ticketing), account management. Phase 2: Stripe payments and onboarding flows.
- Portal backend: containerized services (Docker), one concern per service (accounts, service requests, billing), typed API contracts, each independently deployable.
- The judgment line that builds trust: "The marketing site itself doesn't need microservices. Next.js on Vercel is right for it. Containerized services earn their place when the portal ships. I design the boundaries now and deploy services when there's something to serve."

## Timeline (5 to 10 days)

Days 1-2: structure, design system, Home. Days 3-5: inner pages. Days 6-7: blog, SEO, performance polish. Days 8-10: revisions, deploy, docs. Daily updates and Vercel preview links throughout.

## Questions to ask (pick 4 or 5; these make you sound like an owner, not a hand)

1. What matters more right now: speed to launch the site, or laying the foundation for the portal first?
2. What exists already: logo, colors, written copy, reference sites you like? Who writes the copy?
3. After launch, who updates content (blog, pricing, careers)? (Leads into the MDX / lightweight CMS pitch.)
4. For the portal: what does a customer actually do in it day to day? (This is what scopes the microservices, don't let it stay vague.)
5. How do you like to work: milestones on Upwork, daily check-ins?
6. What's your timeline and how do you make the go decision?

## Money and scope (hold the line)

- The $250 is the 8-page site: design in code, responsive, SEO, deploy, docs.
- Portal, Stripe, and microservices are separate phases you scope after the site is live.
- If they bundle it: "The site I can start now at that scope; the portal is real backend work, I'd scope it as its own phase so you only commit when you're ready." Don't undersell the big work.
- Offer milestone 1 = Home + site structure so she sees momentum within days.

## Curveballs

- "Can you design it too?" Yes: clean design built directly in code with Tailwind against reference sites. A full custom Figma design phase first would be its own scope.
- "Microservices for the website itself?" Use the judgment line above. Saying no to unnecessary complexity is a senior signal.
- "Can we work outside Upwork?" Keep the contract and payments on Upwork: protection for both sides, and the review matters to you.
- "Can you start today?" Yes, as soon as the contract is set up.

## Logistics to nail down

- How you'll get brand assets and any existing copy or designs.
- Communication during the build: Upwork messages.
- Contract goes through Upwork before any work; their accounts own domain, hosting, and repo, and you hand over cleanly.

## Tone

Direct, prepared, friendly. The Nigerian rapport with Anuoluwapo is a quiet plus: warm but professional. You've shipped Next.js + FastAPI SaaS (Arvalox); you belong in this conversation.
