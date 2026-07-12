# PIP — Performance Improvement Plan

A solo strategy card game about surviving an unwinnable system, adapted for the web.

You've been placed on a Performance Improvement Plan. You have **four weeks**. The
system is designed for you to fail. Prove it wrong — either by beating the PIP on its
own terms, or by getting out before it buries you.

> _Office Space meets Pandemic._ Dark corporate humor over genuine, sweaty tension.

## Play it

The entire game is a single self-contained file — **no build step, no dependencies**.

```
open index.html      # macOS
xdg-open index.html  # Linux
# ...or just drag index.html into any browser
```

Everything (art, logic, sound of dread) is inlined. It runs offline.

## The look

A CRT terminal in a monitor bezel: phosphor-green corporate dread, scanlines, screen
flicker, vignette bloom, and Balatro-style card juice — hover-lift, screen shake on
damage, and floating `+3 / −2` numbers on every stat change. The type is deliberate
monospace, so the whole thing reads like a PIP memo you're trapped inside.

## How it plays

Each round is one work week. The game lasts four.

- **Mon–Thu — Action Phase.** You take **4 actions**, one per day, from five action cards.
- **Friday — Reckoning.** Control transfers to the system. You draw encounter card(s)
  and the game pushes back. Escalates across the four weeks.

### Two ways to win, in direct conflict

| Path | Win condition |
|------|---------------|
| **Survive the PIP** | Reach **12 PIP Progress** by Friday of Week 4. You kept the job. |
| **Escape** | Reach **12 Job Search** before the clock runs out. You outran it. |

Actions that advance one path cost you on the other. Spreading thin is dangerous.

### Three ways to lose

- The four-week clock expires with neither threshold met — **Fired**.
- **Mental Health** hits zero — **Breakdown**.
- A **tripwire** fires — abandoning a deliverable past its deadline, or getting caught
  job-hunting while your **Heat** is too high — **Terminated for cause**.

### Actions

- **Work on a Deliverable** — add one unit of progress to a task you pick.
- **Complete a Deliverable** — ship a finished task, converting work into PIP credit.
- **Job Hunt** — fast escape progress, but it raises Heat and drains you.
- **Network** — *Internal* (political capital + standing) or *External* (quiet job-search
  progress that cools Heat). One action, two strategies.
- **Meditate / Cry** — recover Mental Health. Advances neither goal; the clock still ticks.

### The antagonist deck

Encounter cards each attack a **different** part of your decision space — direct PIP
pressure, mental-health attacks, exposure threats, time thieves, coworker dynamics, and
forced dilemmas. The best cards present a **decision**, not just a tax: cancel the phone
interview or risk being late to the manager's ambush; take the retention "pause" and
throw away your runway, or smile and keep both doors open.

## Design notes

This implements the PIP design brief and resolves its open tuning questions with sensible
starting values (thresholds of 12, escalating 1→2 encounter cards per week, deliverables
assigned over time, Heat as the visible exposure/tripwire meter, Political Capital as a
spendable shield). All of it lives at the top of the `<script>` block in `index.html` —
thresholds, the deliverable pool, and the full encounter deck are plain data, easy to tune.

---

_Note: `App.tsx` and `package.json` are leftover stubs from an unrelated, never-completed
"card converter" project that previously occupied this repo. The game itself does not use
them and needs no toolchain._
