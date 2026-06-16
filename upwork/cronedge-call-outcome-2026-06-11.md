# CronEdge discovery call — outcome (2026-06-11, 5:30pm WAT)

Anuoluwapo Balogun, CronEdge LLC. 30-min Google Meet. Went well, good rapport.

## What she confirmed
- Site is for the company itself, consulting-focused for now, doubling as a marketing site.
- No branding assets and no website blueprint yet. Only asset is the company logo.
- Wants the design as unique as possible (no template feel).
- Must stick to the color coding from the logo.
- They intend to self-host (she mentioned a cluster but isn't sure on the details; not a web person).

## Offer terms (read on Upwork offer #111702934, 2026-06-12)
- Fixed price $250, minus 10% Upwork fee = $225 net to me.
- 3 milestones (no due dates set, I pace them): 1) Design & Core Website Structure $50, 2) Website Development $100, 3) Content, Blog & Final Delivery $100.
- Decision: ACCEPT as-is. Matches my scoped $250. No changes to request.
- "No milestones" stance is dead: the offer already has 3 milestones. Don't mention milestones to her, just accept and deliver against them.
- Hosting is concrete: self-managed Kubernetes in HER homelab. Spec requires containerized (Docker), deployable to Kubernetes, CI/CD friendly, production-ready, maintainable/extensible. K8s experience "preferred" (bonus, not required).
- Deliverables per offer: complete design, responsive frontend, source code, deployment docs, AND recommendations for future portal architecture.
- Tax/withdrawal note: Upwork shows "withdrawal methods inactive, provide tax info" banner. Sort tax info before first withdrawal.

## More of what she said (her answers to my questions)
- Reference sites: she'll try to put together a list of sites she likes. Ball is in her court. I can offer a few starters if she stalls.
- Who updates content after launch (blog, pricing, careers): HER. She is not technical, not into coding. So the content editing has to be genuinely no-code, a friendly admin UI, not raw MDX in a repo.
- Hosting/deployment: she prefers clusters (that's what she knows), and she has a pipeline she can deploy on. Hasn't used Vercel, might look into it. Deployment was her single biggest question/concern on the call. My Docker-container-onto-your-cluster answer is exactly what reassures her.
- Working style: she lets people work however they want (any tools, AI, whatever) and does NOT micromanage. But she is STRICT on timelines. If you commit a date, hit it. That's her #1 value. I told her "so you don't like micromanaging," she agreed warmly.

## Implications for the build (act on these)
- Deadline discipline is the whole game with her. Quote a date I can beat, then beat it. Lean to the conservative end (closer to 10 days), deliver early. Never slip a committed date. This is how I earn the portal/backend work.
- She edits content herself + is non-technical -> plan a real no-code CMS UI, not MDX. On a self-hosted cluster that points to a self-hostable headless CMS (Strapi/Payload/Directus) with a friendly dashboard. Note: this is more than a static blog, so confirm whether self-serve editing is in the $250 or a small add-on. Don't overpromise.
- Deployment is her worry: reassure in kickoff that I hand over a containerized build that drops onto her existing pipeline/cluster with deploy docs, no Vercel required.

## What I committed to (held the line)
- $250 = the 8-page site, deploy-ready, 5 to 10 days, daily updates + live preview link.
- Stack: Next.js + TypeScript + Tailwind, packaged as a Docker container so it self-hosts on their cluster/server.
- Portal (login, service requests, account management, Stripe) scoped as a separate later phase. No bundling into the $250.
- Everything stays on Upwork.

## Open / next steps
- She sends: logo (high-res/SVG), 2-3 reference sites, any existing copy/industry/pricing notes, and the hosting target.
- I draft the copy for her review (fills the missing content blueprint).
- Contract via Upwork, then I start.
- Gemini took notes on the call. They land in the meeting organizer's Drive + email. If she was host, ask her to share the notes doc.

## Status — WON (offer received 2026-06-12 ~05:30am WAT)
- She finished her other interviews and sent a FORMAL Upwork job offer: Website Designer and Developer for Tech Startup. Respond by Jun 19, 2026.
- The held "where do we stand" follow-up is now moot. Do NOT send the recap. The next message is an ACCEPT + KICKOFF note (rework upwork/messages/cronedge-followup.md into that).
- Action: review and accept the Upwork offer, confirm scope/terms match ($250, 8-page site, 5-10 days, portal as separate later phase), then send kickoff asking for logo (high-res/SVG), 2-3 reference sites, copy/industry/pricing notes, and hosting target.

## Build kickoff (2026-06-16)
- Offer accepted, contract live since 2026-06-13. Milestone 1 ($50) active and funded.
- She went quiet over the weekend, then sent all the start assets on Jun 16:
  - Logo: CronEdge Logo (2).svg + CronEdge Logo.png (dark green mark).
  - Reference sites (her picks, all K8s/cloud-native B2B): stormforge.io, container-solutions.com, fairwinds.com.
  - cronedge-service-pricing-description.txt: services, benefits, what they do, pricing direction (content source of truth).
  - She removed one message (unknown content).
- Build workspace created at ~/projects/cronedge-website with KICKOFF.md (self-contained brief). Sixtus drops the 3 assets into ~/projects/cronedge-website/assets, then runs a fresh Claude Code session there to produce the build plan + firm delivery date before building.
- Next client message owed: the firm delivery date + short build plan (she is deadline-strict, so commit a date we can beat).
