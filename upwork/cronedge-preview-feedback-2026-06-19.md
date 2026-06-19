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

## Status
All reply-in-bits sent (upwork/messages/cronedge-corrections-reply.md). Round-1 corrections + fixups built, committed (not pushed), and the "corrections are live" message sent to her (upwork/messages/cronedge-corrections-live-message.md). Awaiting her next review pass.
