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

A **career** climbs three companies — **RedFlonic** (a Series-C startup), **SailHorse**
(a legacy megacorp), then **McCrapsey** (an elite consultancy) — each meaner than the last,
with its own manager bosses and its own exclusive Office Perks. Each company has up to
**5 levels**; each level is a 4-week PIP. Each **week** is a turn:

- **Draw a hand** of 5 cards and spend **Focus** (≈ your 4 workdays). Powerful cards cost
  more; unplayed cards discard. *Grinding deliverables drains Mental Health* — being on a
  PIP is exhausting, so pace yourself.
- **Friday — the Reckoning.** Your **Manager boss** acts (its next move is *telegraphed*,
  so plan ahead), then an office **encounter** hits.

### Two paths, two different rewards — decide upfront

At the end of a level you commit to a path, and you can see each one's reward on the HUD:

| Path | How | Reward |
|------|-----|--------|
| **Survive** | Hit the **PIP** goal by Week 4 | Keep your seat, climb a level *here*, and draft a **Company Perk** — a relic you can only earn by staying. The *tall, tenure* build. |
| **Escape** | Hit the **Job-Search** goal (Week 3+) | A headhunter pulls you to the **next company** — skipping its remaining levels — with a **Rare card**. The *fast, mercenary* build. |

So every level is a real fork: *grind this place for its unique perk set, or bail for a
rare card and skip ahead.* **Win the run** by clearing all three companies — escape
McCrapsey (freedom) or survive to the top of it (partner).

**It's permadeath** — get fired, burn out, or let your **Heat** hit the ceiling and the run
is over. Your deck, perks, and Mental Health carry the whole way; Heat and deadlines reset
each level. Your score is how far you climbed.

### The deck

- **Actions** — *Work* / *Deep Work* / *Sandbag* build deliverable progress; *Ship It*
  converts a finished deliverable into PIP credit.
- **Escape** — *Job Hunt*, *Update Résumé*, *LinkedIn Blitz*, *Two Weeks' Notice*. Fast,
  but they raise **Heat**.
- **Social** — *Network* (internal capital vs. external leads), *Coffee Chat*, *Kiss Up*
  (launder Heat into standing).
- **Recover / Tempo** — *Breathe*, *Therapy*, *Overtime*, *Skip the Meeting*, *Ghost a Task*.

Between weeks you **draft** a new card into your deck. **Surviving** a level lets you draft
a **Company Perk** (only that company's pool — Move Fast, Ping-Pong Table, Corporate Card,
Union Rep, The Rolodex, Billable Hours…). **Escaping** hands you a **Rare card** you can't
get any other way (Insider Referral, Portfolio Piece, Burn Bridge…). Deck, perks, and
Mental Health persist the whole career; Heat and deliverables reset each level.

### The antagonists

Each company fields its own managers, and they play differently — the startup's **Founder**
pivots the roadmap and pulls deadlines in; the megacorp's **Middle Manager** steals Focus
and nitpicks; the consultancy's **Partner** runs up-or-out reviews that gut your PIP. Their
Friday move is always telegraphed. The encounter deck attacks different systems (PIP,
mental health, exposure, tempo, coworker politics), and the best cards present a
**decision**, not just a tax.

## Tuning & design

Built to be **brutal but fair** (the theme is "the system is designed for you to fail").
The design was validated by driving thousands of automated playthroughs in a headless
browser across distinct strategies — confirming both reward paths are viable, that grinding
deliverables genuinely trades Mental Health for progress, and that losses are earned
near-misses (Fired / Burned Out) rather than cheap deaths. All tuning lives as plain data at
the top of the `<script>` block in `index.html`: the company/level structure, difficulty
curve, card pool, per-company perk and boss pools, and the encounter deck — easy to retune.

---

_Note: this repo previously held an unrelated, never-completed "card converter" project;
those stub files have been removed. The game is self-contained and needs no toolchain._
