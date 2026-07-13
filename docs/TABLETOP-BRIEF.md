# PIP — Tabletop Handoff Brief

**For:** physical game design & components
**From:** digital prototype (playable at the repo's `index.html` — one self-contained file)
**Status:** rules validated digitally; ready for first physical prototype

---

## 1. What this is

**PIP** is a solo roguelike deckbuilder. You're a human employee on a Performance
Improvement Plan; the company is literally Hell and your managers are demons. A run is a
career across **3 companies × up to 5 levels**; each level is one PIP lasting **4 weeks**.
Permadeath. Score = how far you climb.

Tone: Office Space meets Slay the Spire. Dark corporate humor, real tension.

## 2. Why digital-first paid off (and what it can't answer)

The digital build let us run **thousands of automated playthroughs**. Things that are now
*settled* — don't re-litigate without new evidence:

- **Two competing win paths per level** (Survive vs. Escape) with distinct rewards. Sims +
  human play confirm both are viable and genuinely tension against each other.
- **Goal-end rule** (found via playtest): the moment PIP reaches the goal, the level ends
  — the review happens same-day. Friday penalties can never unmake a reached goal, and
  there are no dead weeks of soaking events after the work is done. We shipped both bugs;
  a player hit both in single sessions.
- **Telegraphed boss moves.** The manager's Friday action is visible all week. This is
  load-bearing: it converts Friday from random punishment into planning.
- **Encounter design principle:** every event attacks a *different* subsystem (PIP, MH,
  Heat, tempo, politics). Same-system-different-magnitude cards feel samey — cut them.
- **Brutal-but-fair tuning**: most runs die; losses concentrate in near-miss FIRED and
  BURNED OUT, not cheap instakills. Only fully-visible states (Heat maxed) kill instantly.
- **The grind drains you**: working deliverables costs Mental Health. This is the
  emotional core — do not remove it to "clean up" the economy.
- **No cash-in card.** Deliverables score the moment their track fills. An earlier "Ship
  It" card gated scoring behind a draw and was pure RNG frustration — cut after playtest.

What digital **cannot** answer — this is your domain:
- Upkeep burden. Digital automates the whole Friday sequence. Physical needs a clean,
  low-fiddle reckoning procedure. Biggest design risk in the port.
- Table time per level / session pacing.
- Component ergonomics (dials vs. tracks vs. dice; how progress cubes feel).
- Whether difficulty tiers are needed for solo tabletop (no instant-restart loop).

## 3. Core loop (rules as built)

**Week turn (repeat ×4 per level):**
1. Draw a hand of **5** cards. You have **4 Focus**.
2. Play cards (cost 0–3 Focus). Targeted cards place progress on deliverables; **a filled
   deliverable scores immediately** — there is no separate "complete" action. Unplayed cards discard. Discards reshuffle when the draw pile empties.
3. **End Week → Friday reckoning**, in order:
   a. **Boss move** — the one telegraphed since the week began.
   b. **Office events** — 1 (weeks 1–2) or 2 (weeks 3–4) drawn from the encounter deck.
   c. **Deadline check** — deliverables due this week: missed = −2 PIP −1 MH; never
      started = −3 PIP −2 MH + a Busywork curse into the deck.
   d. **Heat check** — Heat 8–9: warning (−1 MH). Heat 10: caught → run over, unless the
      Union Rep perk (once/level) or 2 Capital buys it off (then Heat −3).
   e. **Goal check & offers** — see §4. Then reveal next week's boss move, draft 1 of 3
      cards (optional), next week.

**Deliverables:** 2 active at start of level (deadlines Wk 3 and Wk 4), capped at 3 open.
Each has a work cost (2–4), a deadline week, and a PIP reward (3–6). Bosses add more, and
**management refills an empty queue at week start** (new deliverable, due +2 weeks) — the
pile never empties, so the PIP goal is always reachable.

**Resources:**

| Track | Range | Persistence | Notes |
|---|---|---|---|
| PIP Progress | 0→goal | resets per level | Survive threshold |
| Job Search | 0→goal | resets per level | Escape threshold, usable Week 3+ |
| Mental Health | 0–12 | **carries across whole run** | 0 = burnout, run over. Work −1, Deep Work −2, Job Hunt −1 |
| Heat | 0–10 | resets per level | 10 = caught. Visible, player-managed |
| Political Capital | 0–14 | **carries across whole run** | Currency for the Break Room + emergency saves |
| Focus | 4/week | weekly | Boss moves and events can dock next week's |

## 4. The fork: Survive vs. Escape

**Hitting the PIP goal ends the level on the spot** (mid-week included). If the Job goal
is also held (Week 3+), choose a door. Escape-only offers arrive at Fridays:

- **Survive** — reach the PIP goal → *take the review*: stay, climb one level at this
  company, draft 1 of 3 **Company Perks** (each company has an exclusive 5-perk pool).
  The tall/tenure build.
- **Escape** — reach the Job Search goal (Week 3+ only; "nobody starts a new job in four
  days") → jump to the **next company's Level 1**, skipping its remaining levels, and
  take an exclusive **Rare card**. The fast/mercenary build.
- Hold both → choose. Hold neither at Week 4 → **fired**.

**Goals:** RedFlonic 8 PIP / 10 Job · SailHorse 12/14 · McCrapsey 16/18 — a deliberate
cliff between companies: arriving underbuilt (e.g. escaping early) should be felt. Each **+1 per
level** within the company.

**Win the run:** clear all three companies — escape McCrapsey (*Free*) or survive to its
top (*Partner*).

## 5. Content manifest (first-prototype counts)

| Component | Count | Notes |
|---|---|---|
| Starter deck | 12 | 5 Work, 1 Sandbag, 2 Job Hunt, 1 Network, 2 Breathe, 1 Overtime |
| Draftable pool | ~24 | 11 designs ×2–3 copies (Deep Work, Sandbag, Résumé, Coffee Chat, Kiss Up, Skip the Meeting, Ghost a Task, Delegate, LinkedIn Blitz, Therapy, Two Weeks' Notice) |
| Rare cards | 5 | Escape rewards only (Insider Referral, Portfolio Piece, Signing Bonus, Burn Bridge, Fresh Start) |
| Curses | ~9 | Busywork / Red Tape / Dread ×3 |
| **Card evolutions** | — | The 6 starter designs evolve into stronger forms: Work→Deep Work · Breathe→Therapy · Job Hunt→LinkedIn Blitz · Sandbag→Flow State · Network→Power Lunch · Overtime→Crunch Mode → **print starter cards double-sided**, flip on upgrade. No extra cards |
| Deliverables | 18 | 3 role decks (Engineering / Design / Operations) × 6; face shows work cost, deadline, reward |
| Encounter deck | 13 | Office events; ~5 are decision cards (choose A/B), 1 uses a coin flip → die roll |
| Manager bosses | 6 | 2 per company, 3 intents each → per-boss intent mini-deck or a boss board with a cube |
| Greater demons | 3 | Beelzebub / Leviathan / Lucifer — Level-5 bosses; 2 rotating intents + a **fixed Week-4 finale** that checks deliverables shipped this level (≥3 softens it) |
| Company boards | 3 | Goal table per level, perk pool, palette identity |
| Company Perks | 15 | 5 exclusive per company (e.g. Move Fast: Work +1 progress; Corporate Card: cancel one termination/level; The Rolodex: escape cards +1 Job) |
| Break Room (shop) | 1 card/board | Between levels if Capital ≥2: Therapy +6 MH (2◆) · Purge a curse (2◆) · Evolve a starter card (3◆) · Random Rare (3◆) |
| Trackers | — | MH (0–12), Heat (0–10), PIP & Job Search (0–20ish), Capital (0–14), 4 Focus tokens, week marker, level/company marker, progress cubes for deliverables |

Every number above lives as plain data at the top of `index.html`'s script block —
that file is the single source of truth for card text and tuning.

## 6. Digital → physical translation notes

- **Telegraph**: reveal the boss's next intent card at week start; resolve it Friday. Ports 1:1.
- **Goal-end**: pure rules text — "the moment PIP hits the goal, the level ends; take
  the review (or the exit, if the Job goal is also met)."
- **Evolutions**: double-sided starter cards, flip on purchase. Cleanest physical analog.
- **First-run onboarding** (digital: Escape locked until your first career ends): as a
  rulebook **First Game variant** — "remove the Job Hunt cards and ignore the Job Search
  track" — or a sealed envelope if you want legacy flavor.
- **Coin flips** → any d6 (odd/even).
- **The card-draft after each week**: reveal 3 from the pool, take 1 or skip. Standard.
- **Art direction**: procedural occult "sigil seals" on a dark ground, one type-motif per
  card class (keyhole = Escape, flame = Recover, hourglass = Tempo…), demon-manager
  portraits, per-company palette (RedFlonic ember red / SailHorse grey / McCrapsey
  black-gold). Screenshots in the digital build; note dark-ground cards are expensive to
  print — a light "cursed HR paperwork" treatment may print better and keep the identity.
- I can generate a **print-and-play sheet** (full deck + boards as cut-out PDFs) straight
  from the game data whenever useful — the art is all vector.

## 7. Suggested early prototyping materials

- **Blank poker cards (2.5"×3.5"), ~200** — or sleeves + printed paper slips over a junk
  deck (fastest to iterate; card text is short enough to handwrite).
- **10mm cubes**: green (PIP), cyan (Job), amber (MH), red (Heat), purple (Capital) — or
  two **tracker dials/d12s** for MH and Heat if cubes feel fiddly.
- **Small cubes or chips** for deliverable progress (max 4 per card).
- **4 Focus tokens** (anything), 1 week marker, 1 level marker.
- **3 half-letter company mats** (cardstock) with the goal tables printed on.
- One d6.

First prototype ≈ **120 cards + 3 mats + tokens**. No board.

## 8. Open questions — yours

1. The Friday sequence is 5 steps of upkeep. Where does it become a chore, and what
   collapses (e.g. merge deadline+heat checks into icons on a single reference card)?
2. Boss intents: mini-deck per boss, or one shared deck with boss icons?
3. Session length: a full 3-company run may be long for one sitting — natural save point
   is between companies. Worth structuring as 3 sittings?
4. Difficulty ladders for physical solo (no instant retry): base / brutal variants?
5. MH and Capital persist across the whole run — best component for long-lived tracks?
6. Does the 5-level company depth hold up physically, or should companies be 3 levels?

---

*Digital prototype: repo `index.html` (open in any browser, no install). All tuning data
is at the top of its script block. Playtest telemetry and balance history are in the
repo's commit log.*
