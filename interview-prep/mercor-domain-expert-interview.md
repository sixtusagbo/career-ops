# Mercor Domain Expert Interview — Prep

**Format:** AI interviewer (not a human). ~18 minutes. Camera + mic required. You pick the domain.
**Retakes:** 3 of 3 remaining — your first attempt is effectively a free practice run.
**Timing:** On your own time. Target: get it done before Sunday's new week runs out, but only after you've learned this, not crammed it.

This is not a test you can fail in one shot. It is a conversation about something you already know cold. Treat it like explaining your craft to a sharp junior dev — which you have done 60+ times.

---

## Pick your domain BEFORE you hit Start

**Primary pick: Flutter + Firebase mobile development.**
Why: you have shipped real products on this stack (Food Pilot with real users, Puntuquest, NexSolve products). Concrete stories beat textbook answers every time, and you have them.

**Backup pick: Integrating LLMs / AI into production apps.**
Why: interview-questions-ai (Next.js + OpenAI structured outputs), Food Pilot's AI food suggestions. Pick this only if it feels more natural to talk about on the day.

Do NOT pick something broad like "software engineering" or "full-stack." Narrow = expert. The AI rewards depth and specifics, not breadth.

---

## The 4 beats to have loose in your head

Don't script these word-for-word. Know the shape so you can talk naturally.

### 1. What you build and why this stack
One or two honest sentences. Example shape (make it yours):
> "I build cross-platform mobile apps with Flutter and Firebase. I reach for that stack when I need to ship fast on iOS and Android from one codebase, with auth, a realtime database, and hosting that scales without me running servers."

### 2. A real architecture/design decision you made
Pick ONE concrete decision and walk through the reasoning. Candidates:
- How you structured Firestore collections/documents for Food Pilot (users, meals, streaks, quests) and why you denormalized or didn't.
- Why Riverpod for state management over alternatives (Provider/Bloc) in Puntuquest.
- How you modeled level progression / stars / unlock logic.
The point is to show you *reason about tradeoffs*, not that you memorized the "right" answer.

### 3. A tradeoff or something that bit you
Experts know the sharp edges. Real beats polished. Candidates:
- Firestore read/write pricing surprising you at scale, and how you batched/cached to control cost.
- The Food Pilot streak bug (streak stuck at 1 day even when the user made progress) — what caused it, how you reasoned about "what counts as a valid day."
- Offline behavior / sync conflicts in Firestore.
- Cold-start or auth-redirect edge cases.
Pick one you can tell as a short story: what broke, why, what you changed.

### 4. How you'd explain this to a junior
You do this constantly (60+ devs mentored). Easy points. Just narrate how you'd break the concept down — e.g. explaining Firestore security rules, or async/await + streams, to someone new.

---

## Likely question types (AI domain interviews tend to ask these)

The AI usually opens with an easy on-ramp, then drills into specifics based on what you say. Be ready for:

1. **"Tell me about your area of expertise / what you work on."**
   → Your beat #1. Keep it tight, then let them probe.

2. **"Walk me through a recent project and a technical challenge in it."**
   → Beats #2 + #3 combined. Food Pilot or Puntuquest.

3. **"Why did you choose X over Y?"** (stack, library, database, pattern)
   → Show tradeoff reasoning. There's no single right answer; they're testing how you think.

4. **"How would you explain [concept] to someone less experienced?"**
   → Beat #4. Pick a concrete concept and break it into a simple mental model.

5. **"What's a mistake you made or something you'd do differently?"**
   → Beat #3. Honesty + a lesson learned reads as senior. Don't claim you've never been wrong.

6. **"How do you keep up / how do you decide what to learn?"**
   → Quick, honest answer. Docs-first, building real projects, mentoring forces you to stay sharp.

7. **Follow-up depth probes** — they'll often say "tell me more about that" or "why does that matter?"
   → This is good. It means stay specific and go one layer deeper. Have a second sentence ready.

---

## Concrete facts you can pull from (your own proof points)

Use these as raw material — they're true, so you won't have to invent anything:
- Food Pilot: real shipped app, 127 users, ~7.25% conversion. AI food suggestions, streaks, quests, daily challenges.
- Puntuquest: Flutter + Firebase punctuation riddle game, Riverpod + GoRouter + dart_mappable, level progression with stars.
- interview-questions-ai: Next.js 16 + TypeScript + OpenAI (Responses API + structured outputs via Zod).
- Mentored 60+ developers — you are practiced at explaining technical topics out loud.
- 3 NexSolve products shipped.

(Don't recite these as a list in the interview. Use them as the source of your stories.)

---

## Practical setup checklist (before you hit Start)

- [ ] Enable camera + mic (the page showed "no device selected" — fix this first or Start stays blocked)
- [ ] Quiet room, decent lighting, close other tabs/apps
- [ ] Use "Test your mic" and "Play test sound" links on the page
- [ ] Have water nearby
- [ ] Decide your domain (Flutter + Firebase) and your ONE story for each beat before starting

---

## Mindset

- It's a bot. No human is judging your pauses.
- You have 3 retakes. Attempt #1 is a warm-up you're allowed to fumble.
- You're not learning a new thing — you're talking about your own work.
- Specific > polished. Real story > textbook answer. "Here's where it bit me" > "I always do it perfectly."
- 18 minutes. You've talked about your craft for longer than that, many times.

You've got this. Learn it, sit with it, then do a throwaway first take when you feel ready.
