# PIP — Performance Improvement Plan

A **roguelike deckbuilder** about surviving an unwinnable system, for the web.

You've been placed on a Performance Improvement Plan. So has everyone above you,
eventually. Build a deck of workplace tactics, read your manager, and climb the
corporate ladder one PIP at a time — until the system finally gets you.

> _Office Space meets Slay the Spire._ Dark corporate humor over genuine, sweaty tension.

## Play it

The entire game is a single self-contained file — **no build step, no dependencies**.

```
open index.html      # macOS
xdg-open index.html  # Linux
# ...or just drag index.html into any browser
```

Everything (art, logic, sound of dread) is inlined. It runs offline. Progress
between runs (unlocked bosses/roles/cards) is saved to your browser's local storage.

## The look

A CRT terminal in a monitor bezel: phosphor-green corporate dread, scanlines, screen
flicker, vignette bloom, and Balatro-style card juice — hand cards lift and tilt on
hover, the screen shakes on damage, and `+3 / −2` numbers float on every stat change.
Deliberate monospace type makes the whole thing read like a PIP memo you're trapped inside.

## How it plays

Each **job** is a 4-week PIP. Each **week** is a turn:

- **Draw a hand** of 5 cards and spend **Focus** (≈ your 4 workdays) playing them.
  Powerful cards cost more; unplayed cards discard.
- **Friday — the Reckoning.** Your **Manager boss** acts (its next move is *telegraphed*,
  so plan ahead), then office **encounter cards** hit. Escalates across the four weeks.

### Two ways to win a job, in direct conflict

| Path | Win condition |
|------|---------------|
| **Survive the PIP** | Reach the PIP-Progress goal by Friday of Week 4. |
| **Escape** | Reach the Job-Search goal — but you can only cash the offer from **Week 3** (nobody starts a new job in four days). |

Clear a job and you climb a rung: draft an **Office Perk**, then face a new company,
a new manager, and higher goals. **It's permadeath** — get fired, burn out, or let your
**Heat** hit the ceiling and the run is over. Your score is how far you climbed.

### The deck

- **Actions** — *Work* / *Deep Work* / *Sandbag* build deliverable progress; *Ship It*
  converts a finished deliverable into PIP credit.
- **Escape** — *Job Hunt*, *Update Résumé*, *LinkedIn Blitz*, *Two Weeks' Notice*. Fast,
  but they raise **Heat**.
- **Social** — *Network* (internal capital vs. external leads), *Coffee Chat*, *Kiss Up*
  (launder Heat into standing).
- **Recover / Tempo** — *Breathe*, *Therapy*, *Overtime*, *Skip the Meeting*, *Ghost a Task*.

Between weeks you **draft** a new card; between jobs you draft a passive **Office Perk**
(Two Monitors, Noise-Cancelling Headphones, The One Ally, Corporate Card…). Your deck,
perks, and **Mental Health persist across the whole career** — Heat and deliverables reset.

### The antagonists

Manager bosses each play differently — **The Micromanager** steals Focus and nitpicks,
**The Ghost** pulls deadlines forward and dumps rush work, **The Empire Builder** buries
you, **The Nice One** is wonderfully supportive until Week 3. The encounter deck attacks
different systems (PIP, mental health, exposure, tempo, coworker politics), and the best
cards present a **decision**, not just a tax.

### Hybrid unlocks

Climbing the ladder unlocks new bosses, roles (Engineer / Designer / Account Executive),
and cards into the pool for future runs — **variety, not power**. Runs stay honest; the
game grows as you play.

## Tuning & design

Built to be **brutal but fair** (the theme is "the system is designed for you to fail").
The design was validated by driving thousands of automated playthroughs in a headless
browser across distinct strategies — confirming both win paths are viable, that the
hybrid line is strongest (the two paths genuinely compete), and that losses are earned
near-misses rather than cheap deaths. All tuning lives as plain data at the top of the
`<script>` block in `index.html`: thresholds, the card/relic/boss/role pools, and the
encounter deck — easy to retune.

---

_Note: this repo previously held an unrelated, never-completed "card converter" project;
those stub files have been removed. The game is self-contained and needs no toolchain._
