# CronEdge launch call, outcome (Mon Jun 29 2026, ~1 hr)

Raw transcript: `upwork/meeting-transcript.txt`. Call went well. Site demoed, deploy started, portal scoped, and a new referral surfaced.

## Deployment (in progress, she executes / I guide and build the pipeline)

- She uses **GitLab, not GitHub** (self-hosted/Enterprise GitLab, SSO). She created an empty GitLab project `cronedge-website` and added me as a member (developer access, my regular email). I push the code there. **Important consequence: the Keystatic admin is built for GitHub mode, see the blocker below.**
- **Container registry**: her GitLab registry. We tested `docker push`; after a login/tag fix it works.
- **DNS**: she manages DNS on **Cloudflare**, but the domain also has a **hosted zone in AWS (Route53)**, so there was confusion about where the cert/DNS records land. She's sorting that herself tonight.
- **TLS**: cert-manager + Let's Encrypt, was on the **acme staging** issuer, needs the prod issuer. The cluster handles certs.
- **Pipeline**: she originally said she had a pipeline; on the call she **took me up on building the CI/CD pipeline for her** (GitLab CI). So that's mine to build.
- **Secrets**: she wants GitLab CI/CD variables, env files, or cluster secrets (no secret injector yet).
- **Resend**: she sent the **API key** (in Slack/chat) and created an **Audience** + sent the **Audience ID** (had to add contacts to the "general" segment for it to show). She made a full-access API key for adding contacts.
- **Turnstile / analytics**: she has Cloudflare; the Turnstile widget keys and the analytics token were not clearly confirmed as created. Confirm.
- **Plan**: she did the repo access + registry; I push code, add the YAML configs, build the pipeline, and reach out for any config I need. I said I'd work on it tonight (my ~7am). She's up till then.
- **Comms**: WhatsApp is fastest for her; also Upwork/email.

### BLOCKER to resolve: Keystatic admin assumes GitHub, she's on GitLab

The self-serve content editor (`/admin`) runs on Keystatic **GitHub mode** (GitHub App sign-in, commits to a GitHub repo). Keystatic has no GitLab backend, its git integration is GitHub-only (local mode and Keystatic Cloud are the only alternatives, and Cloud is GitHub-backed too). So pointing the admin at her GitLab repo won't work. The marketing site itself deploys fine from GitLab without the admin; what breaks is the "edit it yourself" feature.

Options:
1. **GitHub canonical for content + admin, GitLab pull-mirrors for CI/deploy** (recommended): the content repo lives on GitHub (so Keystatic admin works and edits commit there); her GitLab pull-mirrors it and runs the pipeline that builds + pushes to her registry + deploys to her cluster. She keeps all her infra; GitHub just hosts content + admin auth. Edits on GitHub trigger the mirror, which triggers the deploy.
2. **Keystatic Cloud**: hosted auth, still GitHub-backed underneath, so it doesn't remove the GitHub dependency.
3. **Drop the self-edit admin for now**, launch the site from GitLab, and handle content edits another way later (worse, loses a selling point).

Recommend option 1. It needs her okay to keep a GitHub repo for the content. Flag to her (and it slightly changes the deploy: the Keystatic build args point at the GitHub repo, the pipeline still runs on GitLab).

## Portal scope (for the written proposal)

Her flow: client books a consultation → discovery call (understand needs/environment) → proposal with pricing → client signs the contract → gets client-portal access.

In the portal a client can:
- Sign up via a sign-up link.
- Share secrets / API keys so CronEdge can access their environment (AWS, etc.).
- Track work progress (status, what's being worked on now).
- See an estimated timeline (from the statement of work / proposal).
- Add a co-worker and assign a role (e.g. read-only).
- View previously signed contracts and NDAs (no confusion).
- Submit a ticket (for incident-response subscribers) and track its status.

Architecture she's picturing:
- **Multi-tenant** ("tenants"), each tenant with **configurable settings** that pick what the client sees, matched to their service type. An incident-response client's portal differs from a one-time infra-review client's.
- **MVP must include a DEMO TENANT / demo account**: a configurable demo she shows on discovery calls to preview "this is what your portal will look like," able to fit different service scenarios and hide unrelated functionality.
- **Payments**: incident-response plans have fixed pricing (Stripe, standard vs priority). Other services are priced after discovery, in the proposal; the price then shows in the portal; the client signs and pays through the portal, then work begins.

Process:
- She'll **create a PRD-style document** for the portal (MVP essentials vs later). I asked for it; she'll make one.
- I send her the things I need on the scope; she adds anything she thinks of.
- **Timeline**: she'd love a first version by ~**July 30**, but it's cost-dependent (she's stretched, "almost dried up", juggling a lot).
- **Budget**: she has **no fixed budget** ("I don't have a budget, I want to work with you"); if a number is unaffordable she'll say and we do a monthly retainer / talk it through. She's receptive to the **monthly retainer** idea (I explained it; spreads cost).
- **Pricing approach (mine)**: no live quote; do the research, send a written scope + pricing. Phase it; offer the retainer.

## New lead: her husband's website

She loved the design ("I really like the whole website design"). Her **husband wants his website (re)designed**, his is functional but he wants better design, and she asked to connect him to me. Warm referral, follow up.

## Next steps

- Me: push code to her GitLab, build the GitLab CI pipeline, add the configs; resolve the Keystatic/GitLab admin direction (option 1 + her okay); reach out (WhatsApp) for any config; then portal research → written scope + pricing.
- Her: finish DNS/cert tonight; create the portal PRD; loop in her husband.
- Confirm: Turnstile keys + analytics token created; where secrets live (GitLab variables vs cluster secrets).
