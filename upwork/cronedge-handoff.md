# CronEdge handoff (continue in a fresh career-ops session)

You're the advisor/tracker for Sixtus's CronEdge engagement (career-ops session, `~/projects/career-ops`). Memory auto-loads `project_cronedge_engagement.md` (the master record) and `MEMORY.md` — lean on those for history. This file is the LIVE pointer + next steps, current as of ~2:30am Tue Jun 30 2026.

Two repos:
- `~/projects/career-ops` (this one) = engagement tracking, client messages, proposal prep.
- `~/projects/cronedge-website` = the actual Next.js site (`deploy/DEPLOYMENT.md`, `.gitlab-ci.yml`, `deploy/k8s/*`, `Makefile`).

Client: Anuoluwapo Balogun. WhatsApp is fastest. She's a DevOps engineer, self-hosts everything on her own GitLab + Kubernetes.

## Deploy state (live, mid-flight)

The marketing site is being deployed onto her self-hosted GitLab + K8s.
- Code pushed to her GitLab: `https://gitlab.cronplane.io/cronplane/cronedge-website`, `main` = `a8ee7fd`. (She bumped Sixtus to Maintainer so he can push to protected `main`.)
- Pipeline (`.gitlab-ci.yml`): `test` → `build` (Kaniko — she vetoed Docker-in-Docker; switched + pushed) → `deploy` (kubectl), on `main`.
- **BLOCKED**: pipeline #1 is stuck — the project has no GitLab runner. She's setting one up and it "errored out". She's putting her kids to bed first, then fixing the runner. Sixtus is still up and told her so.
- Registry: private GitLab registry at `gitlab.cronplane.io`. `deployment.yaml` now has `imagePullSecrets: cronedge-registry` (create it from a GitLab Deploy Token with `read_registry`; see DEPLOYMENT.md Step 5). Namespace: `cronedge`.

### Still pending from her
- Fix the runner (errored). When she's back, get the error text and help debug — this is the likely next blocker.
- Cloudflare **Turnstile site key + secret key** and the **Web Analytics token** (nudge sent at 1:49am, unanswered). The Turnstile site key is a build arg; the contact form fails closed without it.
- Cluster access for the `deploy` job: if her runner is an in-cluster K8s runner, kubectl gets in-cluster access automatically; only the runner service account's RBAC to deploy into `cronedge` might be missing. Wait-and-see — a `forbidden` error on deploy = that RBAC gap → ask her.

### What Sixtus has / is doing
- Has from her: Resend API key + Audience ID (in `cronedge-website/.env.production`, the "HERS" block).
- Setting CI/CD var `NEXT_PUBLIC_SITE_URL` = `https://www.cronedge.com` (Visible, not Masked — a URL fails GitLab masking). CI/CD vars live at Settings → CI/CD → Variables.
- **Keystatic admin is DEFERRED**: she's on GitLab; Keystatic's gated admin only supports GitHub (no GitLab backend). Recommended fix (not started): keep the content repo canonical on GitHub for the admin + GitLab pull-mirror for CI/deploy. The site deploys fine without the admin (it 404s in prod, which is safe), so it's last.

### Path to live (once runner + keys land)
1. Runner online → 2. CI/CD vars set (site URL [done], Turnstile site key, analytics token; Keystatic off) → 3. cluster Secret (`secret.yaml`: Resend [have], Turnstile secret [pending], + the registry pull secret) + configmap → 4. first MANUAL `kubectl apply` of `deploy/k8s/*` (creates the Deployment; image → `gitlab.cronplane.io/cronplane/cronedge-website:latest`) → 5. pipeline Kaniko-builds + deploys → 6. DNS (cronedge.com → cluster ingress; she's juggling Cloudflare vs an AWS Route53 hosted zone) + TLS (cert-manager, move off the acme staging issuer) → 7. verify (HTTPS, contact form, captcha, a Resend signup). Sixtus wants it live before ~6am if she moves.

## Queued after the site is live
- **PORTAL proposal** (the big upsell): she'll send a PRD; Sixtus researches → written scope + pricing. Full portal scope in `upwork/cronedge-call-outcome-2026-06-29.md` (multi-tenant, per-service-type configurable, demo tenant in the MVP, client signup / secrets-sharing / progress + timeline tracking / co-worker roles / view signed contracts / submit + track tickets, Stripe payments). No fixed budget; open to a monthly retainer. Pricing guidance + negotiation tactics in `upwork/cronedge-launch-call-prep.md`. Don't quote without scoping; do research → written proposal.
- Her **husband wants a website** (warm referral) — follow up.
- After launch: submit Upwork **M2 + M3** to close the contract.
- tl;dv 7-day trial: cancel reminders already on his calendar (Jul 4, Jul 6); he's switching to an OSS/Gemini notetaker next time.

## Working rules
- **NEVER run `git push` by default** — Sixtus pushes. (Exception this session only: he explicitly authorized the GitLab deploy pushes. Default back to handing him the command unless he re-authorizes.)
- No commit attribution / co-author lines. Commit messages simple, capitalized, no `feat:`. Avoid em-dashes everywhere.
- Client/WhatsApp messages he'll send → write to `.txt` files in `upwork/messages/`. Crisp, no filler closings, no "no rush", no "small things".
- Keep `project_cronedge_engagement.md` updated as state changes.

## Key files
- Memory: `project_cronedge_engagement.md` (master), `MEMORY.md` (index).
- `upwork/cronedge-call-outcome-2026-06-29.md` (meeting + portal scope), `upwork/meeting-transcript.txt` (raw), `upwork/cronedge-jd.md` (original JD), `upwork/cronedge-launch-call-prep.md` (his-voice prep + pricing), `upwork/messages/*.txt` (WhatsApp drafts).
- Site repo `~/projects/cronedge-website`: `deploy/DEPLOYMENT.md` (ordered step guide), `.gitlab-ci.yml` (Kaniko), `deploy/k8s/*`, `Makefile`.
