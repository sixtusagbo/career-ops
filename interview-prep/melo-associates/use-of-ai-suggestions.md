# Q4 answers: how I figure things out when stuck

50 options for the Loom reflection question "How do you figure things out when you are stuck?"

How to use this: read through, pick the number that sounds most like you, tell me the number. I will slot it into the script and you can still tweak the wording. Pick one, or mix two.

No em-dashes anywhere in here. These are written to be spoken out loud, not read.

---

1. When I get stuck, the first thing I do is dump the whole situation into an AI. The error, the code around it, what I expected to happen. It usually points me at something I missed and I am back to building in a few minutes.

2. I lean on AI for debugging, but I treat it like a fast colleague who is sometimes wrong. I take the idea, then I go verify it in the actual code before I trust it.

3. My real first step is boring. I slow down and actually read the error message. People skim errors. A lot of the time the answer is sitting right there in the text.

4. I give the AI everything I have: the stack trace, the file, the package versions, what I changed last. Vague input gets vague output. The more I hand it, the sharper the answer.

5. If an AI hands me a fix and I cannot explain why it works, I do not use it. I keep going until I understand it. A fix I cannot explain is just a bug I have not noticed yet.

6. When something breaks I ask one question first: what did I change. I look at my recent commits or the diff, because most of the time the bug is something I touched, not the framework.

7. I make the problem smaller. I cut the code down until only the broken piece is left. Once the bug has nowhere to hide, it is easy to spot.

8. I debug with AI like we are pairing. I tell it my theory, it argues back, I adjust. That back and forth gets me unstuck faster than scrolling through search results.

9. I check the stupid stuff first. Did I save the file. Am I in the right file. Is the server actually running. You would be surprised how often that is the whole bug.

10. I go read the source code of the library, not just the docs. AI is good at pointing me to the right function fast, and the answer is usually right there in the code I was calling.

11. Sometimes I just explain the bug out loud as if someone is sitting next to me. Half the time I catch the mistake before I finish the sentence.

12. I use AI to read stack traces I do not feel like decoding. I paste it in, ask what it actually means, and that clears the annoying part so I can focus on the fix.

13. When the AI and I are both stuck, I add logs. Lots of them. I print everything around the broken spot until the program tells me where reality stops matching what I assumed.

14. If I have been circling the same bug for too long, I step away. Water, a short walk, anything. The fix tends to show up the moment I stop staring at it.

15. I am honest with myself about being stuck. I do not let pride keep me grinding for hours. If I am not moving, I change my approach instead of repeating it harder.

16. I ask the AI for a few possible causes, not one. Then I rule them out one by one. Treating it as a list of guesses works better than asking it for the answer.

17. I reproduce the bug on purpose before I try to fix anything. If I cannot make it happen on demand, I do not really understand it yet.

18. When I am lost, I compare the broken code to something similar that works. The difference between the two is usually the bug.

19. I keep a last known good state. If things get messy I roll back to where it worked and walk forward in small steps until it breaks again.

20. I ask AI to explain unfamiliar code in plain language. New codebase, weird library, does not matter. It gets me oriented fast so I am not guessing in the dark.

21. The first thing I do is check my assumptions. I write down what I believe is true, then I test each one. The bug is almost always hiding in something I was sure about.

22. I time-box it. I give myself a set amount of time to crack it alone. If the timer runs out, I bring in AI or a teammate instead of being stubborn.

23. I ask AI to draft a minimal reproduction for me. Stripping code down by hand is tedious, so I let the AI do that part while I think about the actual cause.

24. When I am stuck I get specific. Not what is wrong, but which input, which line, which condition. The narrower the question, the closer I already am to the answer.

25. I pair the AI with my own mental model. It throws out ideas fast, but I am the one who knows the system, so I decide which idea is worth chasing.

26. I check versions and changelogs. A lot of bugs are just a library that changed under me. AI helps me scan release notes quickly so I can spot the breaking change.

27. If I cannot solve it, I make sure I can describe it cleanly. If I can hand the problem to someone else in two sentences, I usually understand it well enough to fix it myself.

28. My instinct is that it is almost never the framework. It is my code, my config, or my environment. I look there first and I am rarely wrong.

29. I use a debugger and step through the code line by line. Watching the values change in real time shows me the exact moment things go off the rails.

30. When AI gives me an answer, I ask it why, and then I ask what would prove it wrong. That second question is the one that catches the confident mistakes.

31. I search the codebase before I search the internet. Someone, often a past version of me, has usually dealt with this exact thing already.

32. If I am properly stuck, I sleep on it. I have lost count of how many bugs I solved in the shower the next morning. Tired debugging just makes more bugs.

33. I do not panic. A bug is just the code telling me my mental model is wrong somewhere. I treat it as information, not a crisis.

34. I ask AI to cut long documentation down to the part I actually need. It saves me from reading forty pages to find one paragraph.

35. I write the problem down in a text file. The act of writing it forces me to be precise, and being precise is usually most of the fix.

36. Curiosity does most of the work for me. I genuinely want to know why it broke, so I keep pulling the thread until it makes sense. That beats raw effort.

37. I eliminate things one at a time. Comment out a block, run it, repeat. It is slow but it always corners the bug in the end.

38. I ask AI for the question I should be asking. Sometimes I am stuck because I am framing the problem wrong, and it helps me see that.

39. I check the obvious external stuff. Cache, environment variables, the network, permissions. The bug is often outside my code entirely.

40. I treat AI as a senior dev who is always free to chat. I would not interrupt a teammate for every small thing, but I will ask the AI, and that keeps me moving.

41. When something works and I do not know why, that worries me as much as a bug. I dig into those too, because that is a crash waiting for a worse moment.

42. I rebuild the broken feature in a tiny separate file. Away from the rest of the app, with nothing else in the way, the cause usually becomes obvious.

43. If I have tried everything, I take the smallest ugly fix that unblocks me, leave a note, and come back later with a clear head. Being stuck costs more than an imperfect fix.

44. I read the AI answer critically, the same way I would review a pull request. It is a draft, not a verdict. I have caught plenty of confident nonsense that way.

45. I ask a teammate. Not first, but I do not wait too long either. A fresh pair of eyes catches in ten seconds what I missed for an hour.

46. I trust the process more than I trust feeling clever. Read the error, reproduce it, narrow it down, check the assumptions. The boring loop always works.

47. I look at what the bug is actually costing me. If it is small, I note it and move on. If it blocks real work, it gets my full attention. Not every bug deserves the same energy.

48. I ask the AI to walk through my code as if it has never seen it. Explaining it back to me often surfaces the wrong assumption I baked in without noticing.

49. Every bug that beats me teaches me a pattern. Next time something smells similar, I recognize it fast. Getting stuck is annoying, but it is also how I get sharper.

50. Honestly, I just do not give up. I have been doing this long enough to know every bug has a reason. AI makes me faster, but the real thing is that I will sit with it until it makes sense.

---

## My picks if you want a shortlist

If you do not want to read all 50, the ones that hit hardest for a founding engineer screen and still sound like a person:

- **2** plus **5**: uses AI heavily, but the judgment to verify it is the senior signal.
- **4**: shows you know how to actually drive an AI well (context in, quality out).
- **30**: the "what would prove it wrong" line is memorable and shows real rigor.
- **8**: the pairing framing is warm and true, good for a non-technical founder to hear.

You can also say something like number 2, then number 5, then number 14, and I will stitch them into one natural answer.
