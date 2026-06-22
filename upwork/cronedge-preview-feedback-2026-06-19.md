# CronEdge preview feedback (round 1)

Client: Anuoluwapo Balogun, CronEdge LLC. Sent over Upwork 2026-06-18 night into 2026-06-19, after the Vercel preview link went out.

## Verdict

Positive. "I must say that this looks really good. I like the color blend, and it's close to what I had envisioned. I appreciate all the work that went into this."

## Corrections requested

### 1. Title-case section headings
Every word in a section heading starts with a capital, including the small words. Her example: "Your infrastructure deserves more than guesswork" -> "Your Infrastructure Deserves More Than Guesswork." This is true title case (cap every word), not AP style (which would lowercase "than"/"more").

### 2. Pricing pulled from all services except Incident Response
Remove pricing from every service. Incident Response keeps pricing, restructured into two pay-as-needed plans.

**Incident Response Support**

Standard Response, $250 per incident
- Best effort support
- Business hours

Priority Response, $750/month retainer. Includes:
- Emergency support access
- Faster response times
- Incident troubleshooting
- Root cause analysis reports

Benefits
- Expert assistance during outages
- Faster recovery times
- Reduced business impact
- Post-incident recommendations

### 3. Pricing page becomes a Products page
Replace the Pricing page with a Products page. One product for now: CronPlane (cronplane.io), in development, MVP expected live in July. Nav item changes Pricing -> Products. Her copy:

> CronPlane
>
> Ship code. We'll handle the rest.
>
> CronPlane is an upcoming platform from CronEdge that simplifies application deployment and operations. Connect your repository, push code, and let CronPlane handle builds, deployments, scaling, and platform operations behind the scenes.
>
> No Kubernetes expertise. No DevOps overhead. No infrastructure babysitting.
>
> Build faster. Deploy confidently. Focus on your product, not your platform.
>
> Coming soon.

### 4. Careers page: email + core values
- "Get In Touch" button uses careers@cronedge.com instead of info@cronedge.com.
- Add the company's six core values. Her copy:

> **Ownership** — We take responsibility for outcomes, not just tasks. We approach every engagement as if the infrastructure were our own, focusing on long-term stability, reliability, and business impact rather than short-term fixes.
>
> **Practicality** — We believe the best solution is the one that solves the problem effectively. We prioritize practical recommendations, realistic trade-offs, and solutions that fit each organization's needs rather than chasing trends or unnecessary complexity.
>
> **Reliability** — Systems should work when they're needed most. Whether supporting a production incident, improving deployment processes, or reviewing infrastructure, reliability remains at the center of every decision we make.
>
> **Transparency** — Trust is built through honesty and clear communication. We provide direct feedback, explain risks openly, and help clients make informed decisions based on facts rather than assumptions.
>
> **Continuous Improvement** — Technology evolves constantly, and so should we. We are committed to learning, refining our practices, and helping our clients improve their systems, processes, and operational maturity over time.
>
> **Partnership** — We succeed when our clients succeed. We aim to build long-term relationships based on trust, collaboration, and shared goals rather than transactional engagements.

### 5. About page: mission statement
Add her mission statement to the About page:

> Our Mission
> To help organizations build and operate reliable technology platforms through practical engineering expertise, operational excellence, and trusted partnership.

### 6. Homepage copy swaps
- "Let's make your infrastructure boring." -> "Your Infrastructure Deserves Expert Attention."
- "The DevOps and cloud operations partner for teams running production infrastructure. We make what you already run work the way it should." -> "The trusted infrastructure partner for organizations that need reliability, security, and operational excellence."

### 7. Free resources + newsletter capture (new feature, shipping with the site)
She wants free downloadable resources that collect emails for a newsletter. Decision (Sixtus): build it into this site, no extra charge, no follow-on phase. Approach: a Resources section with gated downloads (email required before the download link), feeding a newsletter list.

Newsletter tool is her choice. Options offered: Resend audience (default, already on Resend), MailerLite or Buttondown (free tiers, fuller editors), or wire in Mailchimp/ConvertKit if she already uses one. For this build: design the Resources section + signup only, leave the tool integration until she picks. Worth checking the reference sites (stormforge.io / container-solutions.com / fairwinds.com) for a resources/insights pattern to model.

## Inbox note
careers@cronedge.com and info@cronedge.com are hers to provision; she has launch covered. The careers button is a mailto, so the inbox just needs to exist by go-live.

## Round 2 inputs (2026-06-21)

After the corrections-live message, she sent a burst of inputs over Upwork on Sunday Jun 21.

### Certifications: badges, not name certs
"The available certs are only individual certs. I'm working on ones that can be gotten as an organization. For now you can use the attached cert as a placeholder." Then later: "I think I'll prefer adding the badges rather than the certificats with my name on it." So: use the badge emblems linked to her verification pages, not the name-bearing certificate PDFs. Four badges supplied:

- Certified Kubernetes Administrator (CKA): https://www.credly.com/badges/26a05f9a-aeb5-4a29-b591-5144b3e35778/public_url
- Red Hat Certified Advanced System Administrator in Ansible (the Credly page's actual title, used in the build): https://www.credly.com/badges/f9193e63-7059-4495-8a6b-11d36f211f8f/public_url
- CompTIA A+: https://www.credly.com/badges/78f76627-9fce-458d-9f29-8d4125d012be/public_url
- ITIL 4 Foundation (PeopleCert): https://badges.peoplecert.org/Badge/en/11E55EBF-AA31-4CAC-A719-7FAB56FE0DF3

She sent the badge PNGs as attachments (CKA, CompTIA A+, Red Hat Ansible, ITIL) plus Credly embed code; the build uses the badge images linked to the verify pages, not the embed scripts.

### Newsletter tool: stick with Resend
"Concerning the newsletter tool, let's just stick with what you have now. We can integrate a better solution as the organization matures." Read: keep Resend (the thing the site already runs on, which is what was offered as the default), do not add a separate newsletter platform. So /api/subscribe stays logs-only for now and gets wired to a Resend Audience in her account at handover.

### New: CronPlane MVP tester waitlist
"A quick update that we just concluded. For the Cronplane product, we want to collect an email waitlist of testers for the mvp on the website." New feature, folded into this round (no extra charge, consistent with the resources call). Decision (Sixtus): make it a distinct capture, its own placement and copy (a "join the waitlist" band on Products, not a download card), source tag `cronplane-waitlist`. Only the form primitive is shared with the resource downloads (one `EmailCapture` component, no duplicated email/Turnstile/honeypot logic). One `/api/subscribe` endpoint serves both, told apart by the source tag. Logs-only now. At handover both feed ONE Resend Audience tagged by source (not two audiences), which keeps it on the free tier: storing contacts is free, only actual sends count toward the cap, and her volume is tiny. The distinct capture has no pricing impact, it's just a form.

### Resources stay on temp placeholders
Round 1 already shipped the Resources section on placeholder content (two entries in content/resources, temp PDFs in public/resources), so the section is functional now. Decision (Sixtus): keep the temp files; swap in her real files plus metadata (file, title, description per resource) when she sends them. No resources build work this round.

### Still pending on her
- Resource files: she sends her real lead-magnet files plus a title and short description for each; they swap into the existing entries. Reminder sent; she replied she hasn't created them yet and will send by Wed 2026-06-24. Temp placeholders serve the downloads meanwhile.
- At handover: her Resend account + Audience ID(s) so the resource downloads and the CronPlane waitlist actually retain and email signups before the MVP (July).

Build prompt for this round: ~/projects/cronedge-website/docs/round2-badges-waitlist-prompt.md. Reply drafts: upwork/messages/cronedge-badges-waitlist-reply.md.

## Status
Round-1 corrections + fixups built, committed (not pushed), redeployed, and the "corrections are live" message sent. She approved M2 (Jun 20) and M2 is now active and funded. Round-2 inputs documented above. Round-2 build DONE 2026-06-22 (badges in the trust row, fixed to 64x64 square; EmailCapture extracted for de-dup; CronPlane waitlist live on /products; 33 tests green; commits 277ab49, aa9275d, 9929384, d46b3f4 plus 753ddd3 badge images). Badges reply, waitlist reply, and resource-files reminder all sent; only the post-build closing is pending. Nothing pushed yet: cronedge-website history was rewritten (two internal docs purged) so it needs a one-time force push, which also redeploys the Vercel preview. Then send the closing, and decide on submitting M2.
