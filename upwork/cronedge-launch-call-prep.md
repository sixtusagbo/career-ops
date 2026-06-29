# CronEdge launch call, my prep (in my voice)

Mon Jun 29, 10:30-11:30 PM Lagos (5:30-6:30 PM EDT), 1 hour. Google Meet: meet.google.com/uaf-qyoy-xwp. tl;dv is running. I'm set up early, this is the launch and the portal-sale call, so I'm sharp and I let her drive the portal part.

This isn't a script to read out. I go through it, it sinks in, then I just talk.

## How I'm running the hour

Roughly half on the launch (walk the site + admin, set up the accounts, line up the deploy), half on the portal. I lead the launch part; on the portal I mostly ask and listen.

## Opening

"Thanks for making the time. The site's done and live on the preview, so tonight I want to do two things: walk you through it and the editor so you can run it yourself, get the launch on your own infrastructure moving, and then talk through the client portal you mentioned. Sound good?"

Then I share my screen, I'm showing her the site and the admin first, and walk the live site quickly, the pages, the three checklists on Resources, the contact form. Keep it short, she's seen it. (Later, when we get to creating her accounts, she shares her screen and I guide her through each one.)

## The admin, what I'll show her

"This is the part you'll use the most. It's your editor, at /admin. You log in with GitHub, and only people you give access to the repo can get in. From here you edit everything yourself, blog posts, services, products, careers, your certifications, and the resources. So those extra checklists you'll make later, you just add them here yourself, no need to send them to me."

I'll do it live once: open /admin, edit a resource or a blog post, save, and explain: "When you save, it records the change and the site rebuilds and goes live in a minute or two. No code, no deployments on your end."

One honest caveat I'll give her: "It's all-or-anything though, anyone you give access to can edit any section, there's no 'this person only edits the blog'. Right now it's just you, so you're fine."

## The deploy, the order I'll follow with her

This is the sequence. After I transfer the repo, the doing is on her end, she runs the steps on her side following DEPLOYMENT.md (it's written for the site owner), and I guide her through each one, telling her exactly where every value goes. So below, the "I" is mostly me guiding; her hands are on the keyboard. The accounts use my setup guides. The only thing on its own clock is DNS + email propagation.

The order, and roughly what I say at each step:

1. **The repo first.** "Step one is moving the site's code to your GitHub. You own it, your editor logins check against it, and your deploys build from it. Everything hangs off this." (I transfer the repo to her account/org. I do NOT need to delete the Vercel preview first, they're independent, and the preview keeps serving its last build for the demo. After her real site is live on her cluster, I delete the Vercel project so there's no stale copy on my keys. And right after transfer, she adds me back as a collaborator, or I lose push access.)

2. **The accounts (she creates them on her screen, I collect the values).** "Now we set up the few accounts the site uses. I'll walk you through each one, you create it, and we copy a value or two from each." Order:
   - **Resend** (email): create the account, add cronedge.com and add the DNS records it gives us to verify the domain, copy the API key, and create an Audience and copy its ID. Powers the contact form and the resource/waitlist emails.
   - **Cloudflare** (one account, both at once, since Turnstile and Web Analytics are both Cloudflare): Turnstile, add the site, copy the site key and the secret key. Web Analytics, add the site, copy the token. Privacy-friendly, no cookies.
   - **The GitHub app for the editor login**: Keystatic's setup page creates it for us, we get an app name (the slug), a client id, and a client secret. Powers the GitHub sign-in to /admin.

   Where each value goes, so I direct it right while she shares her screen. Two buckets:
   - **Baked into the image when I build it** (build args, NOT pasted into any cluster file): the site URL, the Turnstile site key, the analytics token, the GitHub repo (owner/repo), the GitHub app slug. I handle these in the build command.
   - **Into `deploy/k8s/secret.yaml`** (copied from `secret.example.yaml`): `RESEND_API_KEY`, `RESEND_AUDIENCE_ID`, `TURNSTILE_SECRET_KEY`, `KEYSTATIC_SECRET` (a random string I generate), `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`.
   - The lead emails (where contact leads land, and the from-address) live in `deploy/k8s/configmap.yaml`.
   After the repo transfer this is all on her end: she creates the accounts and puts the values where they go, the build-arg ones into her build, the secrets into `deploy/k8s/secret.yaml`, the emails into `configmap.yaml`. I'm guiding, telling her exactly where each one lands. She follows DEPLOYMENT.md for the precise commands; my setup-guides/ (on my phone) cover the account creation.

3. **Domain and email records.** "I'll point cronedge.com at your cluster and add the email verification records. These propagate on your registrar's clock, sometimes quick, sometimes slower, so we kick them off early." (DNS A/AAAA to her ingress + TLS via cert-manager; Resend SPF/DKIM records.)

4. **Build the image.** I build the Docker image with the public values baked in (site URL, Turnstile site key, analytics token, the GitHub repo + app name) and push it to her registry.

5. **Secrets and deploy.** I fill her Kubernetes secret with the runtime values (Turnstile secret, Resend key, the Keystatic session secret + GitHub client id/secret, the lead email, the audience id) and apply the manifests to deploy it.

6. **Verify end to end.** /admin asks for GitHub login (so it's locked down), the contact form lands in her inbox, the spam check works, the resource and waitlist signups go into Resend, analytics is counting.

7. **Cutover.** Flip the domain from the coming-soon page to the live site once TLS and email are verified.

8. **Walk her through the admin again** so she's comfortable editing on her own.

What's realistic tonight: I aim to get it fully live on the call. The one thing outside our hands is DNS and email propagation, which can be quick or slow depending on her registrar. If it's quick, we finish the whole thing live; if it's slow, everything's set up and the final flip-live just trails a bit and I confirm once it's through. What I'll say: "We'll get it all set up tonight. The only variable is how fast your domain and email records propagate, that's on your registrar's side, sometimes minutes, sometimes longer. If it's quick we go fully live on the call; if not, it's all queued and I confirm the moment it's through."

## What she needs on her side (if she asks "what do I need")

The site's light, a single container, no database, runs on her existing Kubernetes on modest resources. From her: DNS access to cronedge.com, a container registry her cluster can pull from, and a few minutes to create those free accounts with me. I bring the image, the manifests, and the deploy docs.

## The portal, her ask

The scope is already in her original JD (saved at upwork/cronedge-jd.md): customer onboarding, service requests, account management, payments with Stripe, and ticketing/helpdesk. So I'm NOT asking whether she wants these, she already wrote them down. I'm confirming the details, the payment model, the phasing, and getting her budget. And I lead with the portal-architecture recommendations I already delivered as part of this project (docs/PORTAL-ARCHITECTURE.md), that shows I've already thought the whole thing through.

How I open it: "On the portal, you actually laid this out in the original brief, onboarding, service requests, account management, payments, the helpdesk side. I made the portal architecture recommendations for it already as part of this project, so I've got a clear picture of how I'd approach it. I like to understand a project's scope properly before I price it, so let me ask you a few things."

Then I ask these straight and listen:
- "Who's logging in, your clients onboarding and managing their accounts, your team handling the requests, or both? Roughly how many to start?"
- "Walk me through how a service request should flow, a client submits it, then what happens on your side, triage, status updates, resolution? Is it helpdesk/ticketing style?"
- "On payments, you've already got your pricing on the site, the incident response plans, the per-incident and the monthly retainer. So in the portal I'd have clients pay for those directly through Stripe, the retainer as a subscription, the per-incident as a one-off. Is that the model you're thinking, or are there other plans or payment types you'd want to add?"
- "If we launch the first version with just the essentials, what has to be in it, and what can wait for a later phase?"
- "What's your target timeline, when would you want the first version live?"
- "What budget are you working with for it?"

How I frame the build (in my head, so I sound clear): it's a real app, Next.js plus a database, auth and roles, Stripe when billing comes in. I phase it: Phase 1 is login/onboarding + account management + service requests with status (the helpdesk core); Phase 2 is Stripe billing; Phase 3 is the fuller ticketing and extras. The whole thing is in the JD, so the conversation is what's in Phase 1 vs later, not whether.

How I close the portal topic: "This is a bigger build than the site, a proper application, so I don't want to throw a number out on the spot. Let me do my research, put together a clear scope and pricing, and send it to you in writing after this." Then I go quiet and let her react.

## Pricing, the number game

The rule: let her name a number first. If she names bigger than I'd have asked, great, I take it; if she names small, I scope to fit. Either way I don't lowball myself or leave money on the table.

Getting her to price first:
- "What budget range are you working with for the portal?"
- "Where does this sit budget-wise for you, so I scope the first phase to fit?"
- "Have you got a figure in mind already, or gotten other quotes?"

If she pushes me to name it first, I give a range, not a point, tied to scope, anchored high so there's room: "A portal like this usually runs in the $X to $Y range depending on how much goes in the first phase, I'll firm it up in the proposal once we nail the scope." And I never anchor off the $250 site, that was a deliberate foot in the door, this is a real app.

My own floor/ceiling (I do NOT say these out loud):
- Phase 1 MVP (login/onboarding, account management, service requests with status, basic admin): target $2,500-$3,500. Floor ~$1,500 if very minimal, reach $4,000-$5,000 with roles, notifications, polish.
- Phase 2 (Stripe billing): $800-$1,500.
- A monthly retainer is the option I most want to float: ~$1,000-$1,500/month for 2-3 months to build it, then ongoing support. It turns a scary lump sum into manageable monthly for her, and it's recurring income for me, which is what I want. (A retainer = she pays a set amount each month for agreed ongoing work, instead of one big project fee.)
- If it runs through Upwork, ~10% comes off my number, so I price gross.

Tactics I keep in mind:
- Phase it, so the first number she hears is the small MVP, not the whole portal.
- Silence hold: after I give a range or she names one, I shut up and let her respond. I don't talk myself down into a discount.
- Value recap if she hesitates: what the portal does for her business (faster client requests, less manual ops, a professional client experience), not the feature list.
- Walk-away calm: I'm willing to pass on a number that isn't worth the weeks. I have other work, and that calm is leverage.
- "The grateful get the floor, the prepared get the range." I come prepared, not just thankful.

## Have ready to screen-share

- The live preview (the three real checklists are wired in on /resources).
- The /admin editor.
- deploy/DEPLOYMENT.md.
- My account-setup guides (on my phone or a side window, not shared) so I can walk her through each account smoothly.

## If the Docker "high vulnerability" flag comes up

(Only shows in VS Code, she won't see it.) "It's an OS-level CVE in the Alpine base of the official Node 22 image, present even in the newest tag, with no upstream fix yet. Low real risk here, the site serves static marketing content and doesn't feed the affected package any untrusted input. It clears on its own when the base is patched upstream, which a fresh build picks up."

## After the call

Once it's live on her infra and she's happy, submit M2 and M3 on Upwork to close this contract. The portal becomes its own new contract/milestones, and I send the written scope + pricing once I've done the research.
