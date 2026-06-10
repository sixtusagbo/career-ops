# Melo Associates Founding Engineer

**Referral:** Julien Barbier (ALX SE)
**Deadline:** May 25, 2026, 11:59 PM Chicago time
**Submit to:** swati@meloassociates.com, subject `Technical Screen - Sixtus Agbo`
**Live demo:** https://interview-questions-ai.vercel.app
**Repo:** https://github.com/sixtusagbo/interview-questions-ai

---

## Pre-recording checklist

- [ ] Test the live URL once with two job titles. If anything fails, fix it before recording.
- [ ] Open three tabs: the live app, the GitHub repo (src/ folder), and this script.
- [ ] Camera on for the intro and the reflection answers. Screen share for the demo and the code.
- [ ] Loom records camera and screen together. Use picture-in-picture so your face stays visible the whole time.
- [ ] Voice check. Quiet room. Drink water before you start.
- [ ] Do one full practice run. Do not ship the first take if it feels stiff.

## Submission email (send after recording)

```
Subject: Technical Screen - Sixtus Agbo

Hi,

Coming through from Julien Barbier, who shared this role with me.

Step 1 submission:

- Live: https://interview-questions-ai.vercel.app
- Source: https://github.com/sixtusagbo/interview-questions-ai
- Loom: https://www.loom.com/share/8074aadd47cb4f01b34313982d24e950

Looking forward to step 2.

Best regards,
Sixtus Agbo.
```

---

## Loom script

**Target length: just under 5 minutes** (Loom free plan caps at 5:00, so aim for around 4:55). Speak at a normal pace, around 150 words a minute. Do not memorize this word for word. Know the structure and say it like you mean it.

Sections marked `[CAMERA]` are face to camera. Sections marked `[SCREEN]` are screen share. With picture-in-picture your face stays on the whole time, so these labels are just about where the viewer is looking.

---

### 1. Intro, `[CAMERA]`, about 25 seconds

> Hi. I'm Sixtus.
>
> Coming from Julien. I learned from him at ALX SE. I'm a full-stack engineer, doing a lot of LLM API work these days
>
> For this assignment, I built Interview AI. It's live, code is on my GitHub. Let me show you.

**Delivery notes:** Smile when you say hi. Sit up straight. The first 15 seconds carry the most weight, so do not rush them.

---

### 2. Demo, `[SCREEN]`, about 50 seconds

> One page. Type a job title, get three questions back: behavioral, technical, situational. Each one is tagged and has a one-line intent.
>
> Let me run the example from the brief, Customer Success Manager.
>
> [click Generate, wait quietly, 4 to 6 seconds]
>
> Three questions. Each has an intent under it. The brief asked for thoughtful questions, and to me, a question alone doesn't help the interviewer. What they need is to know what a good answer should reveal. That's why every question ships with its intent. That's the part I think actually matters.
>
> Let me try one more, Senior Backend Engineer.
>
> [click Generate]
>
> Watch the technical question shift to the new role. The prompt adapts.

**Delivery notes:** Do not talk during the 4 to 6 second wait. Silence is fine. The wait is honest, do not apologize for it.

---

### 3. Code walkthrough and model choice, `[SCREEN]`, about 60 seconds

> [open `src/lib/questions.ts`]
>
> This file holds the prompt and the function that calls the model.
>
> The prompt has three rules. Coverage: one of each question type. Relevance: no generic openers like "tell me about yourself." Signal: every question ships with an intent. It also keeps personal information out of the output, which the brief asked for.
>
> The function uses the Responses API with zodTextFormat, which is Zod plus structured outputs. OpenAI enforces my schema on its side, so the response matches the shape I expect. No parsing loose JSON, no retries.
>
> Provider and model: OpenAI with gpt-5-nano. I went with OpenAI because I've shipped with their SDK before and the Responses API gives me the structured outputs I want. On gpt-5-nano specifically, three reasons. Cost, smallest in the gpt-5 family, matters at scale. Structured outputs, nano supports them. And speed, because for a small interactive tool, how fast it feels matters more than a tiny bump in quality.
>
> All the AI logic sits in this one file. If I switched providers tomorrow, this is the only file I'd touch.

**Delivery notes:** Scroll slowly. Let the viewer's eye land on the file you're talking about. Do not read code out loud. Talk about the decision the code reflects.

---

### 4. Reflection, `[CAMERA]`, about 100 seconds

Take a small pause between each question. Do not run them together.

#### Q1. Tell us one thing you would do differently or improve if you had more time.

> Streaming. Right now you wait four to six seconds for the response. With streaming, the first question would appear in under a second and you'd watch the rest write itself. Same total time, but it feels much faster.

#### Q2. What is your philosophy around building in general?

> Ship a working version fast, then improve what people actually use. I also like keeping atomic commits. It keeps me honest. Each commit does one thing, and the app still works.

#### Q3. How do you collaborate with others when building?

> I write things down. With non-technical folks, I explain in outcomes and tradeoffs, not implementation. With technical folks, I bring options and a recommendation. I default to async, and live meetings are for decisions.

#### Q4. How do you figure things out when you are stuck?

> My first step is boring. I slow down and actually read the error message. People skim errors, but a lot of the time the answer is sitting right there in the text.
>
> If that doesn't do it, I debug with AI like we're pairing, yk like pair programming. I tell it my theory, it pushes back, I adjust. And by the end I understand the problem better, not just the fix.
>
> When I'm still stuck, I explain the bug out loud, like I'm teaching it to someone who has never seen the code. It's basically the Feynman technique. If I can't explain it simply, I don't understand it well enough yet. Half the time I catch my own mistake before I finish the sentence.
>
> And if I've been circling the same bug for too long, I step away. When you stare at one thing for hours your thinking goes fixed, you just keep running the same loop. A short break switches me back into dynamic thinking, and I come back able to see it from a different angle.
>
> Underneath all of that, I just don't give up. Every bug has a reason. AI makes me faster, but I don't give up till I solve the problem.

---

### 5. Close, `[CAMERA]`, about 10 seconds

> That's it. Thanks for watching, and I'm looking forward to step 2.

**Delivery notes:** Do not add a long sign-off. No "let me know if you have questions." End clean.

---

## Backup answers (only if you blank on camera)

**If you blank on the model question:** "gpt-5-nano. It's the smallest model in the gpt-5 family. I picked it for cost at scale, structured output support, and speed. A bigger model writes slightly sharper questions, but for this tool that polish isn't worth the cost."

**If you blank on the prompt question:** "Three rules. Coverage forces one of each question type. Specificity bans generic openers. Signal means every question ships with its intent. And there's a privacy rule that keeps personal information out of the output."

**If the demo errors live:** "The model occasionally returns a parse error under load. In production I'd add one retry and a fallback message. Let me run it again." Then run it again.

---

## After recording

- [ ] Watch your own Loom once at 1.5 speed. If anything makes you cringe, record it again.
- [ ] Copy the Loom URL into the email above and send it to swati@meloassociates.com.
- [ ] Update the career-ops tracker: status `Applied`, and add a report under `reports/`.
- [ ] They review after May 25, so do not pressure yourself on step 2 timing.
