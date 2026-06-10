# Proposal — Backend Developer for Trivia App

Job: /jobs/~022063859155455634173/
Connects: 18 | Proposals: <5 | Posted 4 min ago | Worldwide, NO location pref
Client: Australia, 5.0★ (4), 100% hire rate, 7 hires, $28.64/hr avg paid. Hobbyist building a trivia app for fun.
Type: Hourly $15-30, ongoing. Suggested bid rate: **$25/hr**
Highlights: Food Pilot (Flutter/Firebase) is the star here. Add Lifepadi or Ace iT. Cert optional. NO Solana bot.

Keep it SHORT and warm — this is a friendly hobby project, not an enterprise RFP.

---

## COVER LETTER (copy-paste this)

Hi David, your first issue is a quick one, and the key is that the answer-checking should happen in the backend, not in the FlutterFlow client, so the correct answers never ship to the phone where a curious player could peek at them. I would store each question's correct answer in Firestore and validate the player's submission with a small Cloud Function that returns right or wrong and updates the score. The frontend only ever sends the chosen answer and gets back a result.

That same setup grows cleanly into what you described next: user profiles and scores across many games are a couple of Firestore collections (users, games, scores) with Cloud Functions keeping the totals correct and cheat-proof.

I build Flutter and Firebase apps for a living, including one live on the App Store, so this is squarely my wheelhouse. I am happy to start with the 3-hour trial you suggested, knock out the answer-comparison fix first, and take it from there if it feels like a good fit.

Talk soon,
Sixtus

---

## NOTES (not part of letter)
- Opener solves his exact stated problem (compare answers) AND adds the security insight (keep answers server-side) that a copy-paste bidder won't mention. That is the differentiator in the preview.
- Honest: focuses on the Firebase backend (his real need; he does the FlutterFlow frontend himself). Does not claim FlutterFlow expertise, claims Firebase/Flutter (true, Food Pilot).
- Matches his casual, friendly tone. Accepts his 3-hour trial offer directly — low friction to a yes.
- Bid $25/hr (inside his $15-30 range, near his $28 avg).
