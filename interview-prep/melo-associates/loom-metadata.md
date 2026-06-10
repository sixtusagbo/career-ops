# Loom summary and chapters

Paste these into Loom's Summary and Chapters fields to replace the auto-generated ones (which have a factual error in the summary and stale timestamps in the chapters).

---

## Summary (paste into Summary field)

Sixtus presents Interview AI, a single-page app that takes a job title and returns three interview questions: one behavioral, one technical, and one situational. Each question ships with an 'intent' that tells the interviewer what signal a strong answer should reveal. He walks through questions.ts, where all the AI logic lives, including a prompt with three rules (Coverage, Relevance, Signal) and an OpenAI Responses API call that uses Zod for structured outputs. He chose OpenAI as the provider for SDK familiarity and the Responses API, and gpt-5-nano as the model for cost, structured-output support, and speed. He closes with what he would add next (streaming for faster perceived latency), his building philosophy of shipping working versions in small atomic commits, how he collaborates with technical and non-technical teammates, and how he debugs by reading errors first, pairing with AI, using the Feynman technique, and stepping away to break fixed thinking.

---

## Chapters (paste into Chapters field)

```
0:00 Intro
0:16 Live demo
1:21 Code walkthrough and prompt rules
2:50 Provider and model choice
3:48 Reflection answers
```

---

## What changed vs Loom's auto-generated version

**Summary fixes:**
- Loom said "three technical and one situational" which was wrong. Correct: one behavioral, one technical, one situational.
- Added the prompt's three named rules (Coverage, Relevance, Signal) so a reader skimming the summary sees the product's actual structure.
- Made the provider AND model rationale explicit (Loom's version mentioned model only).
- Added the Feynman and "fixed vs dynamic thinking" notes from the debugging answer.

**Chapters fixes:**
- Loom's chapters had timestamps at 7:15 and 9:11, which don't exist in your 6:53 video. Those were from the original 9:26 recording.
- New chapters cover only the actual sections, all within 6:53.
- Renamed "Product feedback and process" (which was inaccurate) to specific, descriptive labels.
