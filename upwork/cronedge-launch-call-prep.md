# CronEdge launch call prep

Mon Jun 29, 5:30-6 PM EDT (10:30-11 PM Lagos), 30 min, Google Meet (link in the Notion confirmation). Late night for you, be set up early.

## Goals (30 min is tight, prioritize in this order)

1. Walk her through the finished site and the admin panel so she can self-manage.
2. Align on the deploy/handover steps and what she needs to provide (prereqs below). The cronedge.com email verification and the final DNS cutover will likely finish async after the call, not live in 30 min.
3. Open the client-portal conversation. Discovery, not a quote: gather requirements, signal you can build it, set up to send a scoped written proposal.

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
- Reality check: a fully-live launch inside 30 min is optimistic because of DNS and email verification timing. Aim to walk it through and get it moving, finish the cutover async.

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

## Have ready to screen-share

- The live preview (with the three real checklists wired in).
- The /keystatic admin.
- deploy/DEPLOYMENT.md.

## After launch

Once it's live on her infra and she's happy, submit M2 and M3 on Upwork to close the contract. The portal becomes its own new contract/milestones.
