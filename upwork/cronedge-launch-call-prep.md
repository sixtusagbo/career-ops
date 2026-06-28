# CronEdge launch call prep

Mon Jun 29, 5:30-6:30 PM EDT (10:30-11:30 PM Lagos), 1 hour (she extended it from 30 min). Google Meet: meet.google.com/uaf-qyoy-xwp. Late night for you, be set up early.

## Goals (a full hour now, room for both the launch and a real portal conversation)

Rough split: about 30 min on launch + handover walkthrough + admin demo, about 30 min on portal discovery. Order:

1. Walk her through the finished site and the admin panel so she can self-manage.
2. Align on the deploy/handover steps and what she needs to provide (prereqs below). The cronedge.com email verification and the final DNS cutover will likely finish async after the call, not live during it.
3. Open the client-portal conversation. With the extra time, do proper discovery: gather requirements, signal you can build it, and you can sketch a rough phased plan live. Still no firm quote on the call, send the scoped written proposal after.

## What she should have ready (answers her "system requirements" question, expanded)

The site is a single stateless Next.js container, no database, runs on her existing Kubernetes cluster on modest CPU and memory. To deploy and go live she needs:

- cronedge.com DNS access: an A/CNAME record to her cluster ingress plus TLS, and the SPF/DKIM records to verify the domain in Resend so the contact form can send email.
- A container registry her cluster can pull from, to host the site's Docker image.
- Three free accounts, set up together on or after the call:
  - Resend (transactional email for the contact form; verify cronedge.com).
  - Cloudflare Turnstile (the contact form's spam check; a site key and secret key).
  - A GitHub repo (the site's repo, transferred to her) plus a GitHub OAuth app, so the Keystatic admin panel can save her content edits as commits.
- Optional: a Cloudflare Web Analytics token (free, privacy-friendly).

You bring: the built image, the Kubernetes manifests, and the full deployment docs (deploy/DEPLOYMENT.md).

## Deploy / handover walkthrough (high level)

- Transfer the GitHub repo to her ownership.
- Switch Keystatic to GitHub mode on her infra (admin edits save as commits to her repo, which redeploys).
- Swap in her keys: Resend, Turnstile, the Keystatic GitHub vars and OAuth app, the analytics token.
- Verify cronedge.com in Resend (SPF/DKIM). This needs DNS propagation, so it may complete after the call.
- Deploy the container to her cluster, DNS/TLS cutover from the current coming-soon page.
- Reality check: even with the hour, a fully-live launch on the call is optimistic because of DNS and email verification timing (those propagate on their own clock). Aim to walk it through and get it moving, finish the cutover async.

## Admin panel demo points

- /keystatic, behind a secure login (only her team).
- She can edit blog posts, services, products, careers, certifications, and resources (add or replace checklists, more coming).
- Every save commits to the repo and redeploys automatically. No code, no deploy knowledge needed. This is the answer to "I'll add more checklists later."

## Client portal discovery (her ask: "what it'll take to have a client portal")

This is a separate, larger build than the marketing site: a real application with accounts, auth, a database, and a backend. Do not quote a number on the call. Run discovery, then send a written scope and price.

Questions to ask:
- Who logs in: her clients, her team, or both? Roughly how many.
- What do they do in it? (submit and track service or incident requests, view incident reports and recommendations, see account/contract details, invoices and payments)
- Payments: does she want billing/invoicing in it now (Stripe), or later?
- Any must-have integrations (email, calendar, tools she already uses).
- Timeline and budget: near-term build or a few months out.

Framing for your own positioning (not a hard quote):
- Likely a Next.js app plus a database (Postgres), auth, and role-based access, with Stripe when billing comes in. Separate from the marketing site.
- Phase it: MVP portal first (login, submit and track service requests, status), then payments/billing, then extras. Each phase a milestone.
- This is weeks of work, not the $250 site. Position it as a new milestone-based engagement, or a monthly retainer if she wants ongoing support. After discovery, send the scope and price in writing.

## Portal pricing and the "who names a number first" game

Your instinct is right: let her anchor first. The reason is upside. If she names a number bigger than you'd have asked, you take it; if she names a small one, you scope to fit. Either way you don't leave money on the table or get lowballed into your own quote.

Get her to price first:
- "What budget range are you working with for the portal?"
- "Where does this sit budget-wise for you, so I can scope the first phase to fit?"
- Tie it to scope: "The number depends a lot on what goes in the MVP, so let's lock the must-haves first, then I'll send a proposal with the price." This is also why you don't quote on the call: defer the firm number to the written proposal after discovery.
- Ask if she's gotten other quotes or has a figure in mind already.

If she pushes you to name it first:
- Give a range, not a point, tied to scope, anchored at the higher end so there's room to come down. "A portal like this usually runs in the $X to $Y range depending on how much goes in the first phase. I'll firm it up in the proposal once we've nailed the scope."
- Never anchor off the $250 site. That was a deliberate foot in the door. This is a real application.

Internal reference numbers (your own floor/ceiling, not for blurting out):
- MVP / Phase 1 (auth, client accounts, submit and track service/incident requests, status, basic admin dashboard): target $2,500-$3,500. Floor around $1,500 if very minimal; reach $4,000-$5,000 with multi-role, notifications, and polish.
- Phase 2 (Stripe billing, invoices): $800-$1,500.
- Phase 3 (reports, notifications, integrations): scope as it comes.
- Alternative: a monthly retainer to build it, around $1,000-$1,500/month for 2-3 months, then ongoing support. Turns a scary lump sum into manageable monthly and sets up recurring income, which fits your cash-flow goal. Strong option to float.

Tactics:
- Phase it so the first number she hears is the MVP (smaller), not the whole portal.
- If it runs through Upwork, the ~10% freelancer fee comes off your number, so price with that in mind or quote gross.
- Anchor high, phase, let scope justify the number. Don't discount before she's even pushed back.
- Silence hold: after you give a range or she names a number, go quiet. Don't fill the pause by talking yourself down. Let her respond first.
- Value recap: if she hesitates, restate what the portal does for her business (faster client requests, less manual ops work, a professional client experience), not the feature list.
- Walk-away ready: be willing to decline a number that isn't worth the weeks. You have other work, and that calm is leverage.
- "The grateful get the floor, the prepared get the range." Come prepared, not just thankful.

## Have ready to screen-share

- The live preview (with the three real checklists wired in).
- The /keystatic admin.
- deploy/DEPLOYMENT.md.

## After launch

Once it's live on her infra and she's happy, submit M2 and M3 on Upwork to close the contract. The portal becomes its own new contract/milestones.
