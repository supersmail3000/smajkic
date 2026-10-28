# SURF — case study draft

Page: /work/surf on smailsmajkic.com. The page sets everything lowercase, like the homepage.
Assets: public/work/surf/ (stills + clips, see the list at the end).

---

## SURF
A browser for four people. Built in six days.

**Team** Ante, Josip, Dominik, Smail
**My seat** interaction and visual system, sidebar motion, performance at power-user scale
**Platform** macOS, Swift on Chromium
**Time** October 2026, ongoing

---

## The problem
On October 22, 2026, The Browser Company announced that Arc stops working on December 22. Four people who live in Arc had two months to find another browser. We started our own the next morning.

The rule from day one: Arc's best decisions, on an engine someone else keeps secure. No URL bar. The sidebar comes in at the edge. And one thing Arc never had: an agent that uses the same browser as you.

[sidebar-docked.png — the docked sidebar: Tiles, Pins, Groups]

## My part
Four people, no sign-off. Everyone builds, everyone ships. I took the parts you touch a hundred times a day: how the sidebar looks, moves and scales. 33 of the first 89 merged pull requests.

Ante set the bar ("perfection, no compromises") and how the Wave springs open. Josip built Pins, Split and Capture. Dominik and Ante moved the engine to Chromium so the agent can drive it.

## Decisions

### 1. Nothing may hang in the first five minutes
I imported my own Arc: 659 tabs, 21 pinned folders. SURF froze. The first five minutes decide whether someone switches, so that became a requirement: hold 1,000 tabs, open only what you look at, show progress from the first click. Folding a group of 143 tabs went from 780 ms to 130.

### 2. One grid for everything
Icons 14, buttons 24, rows 32. Type in five steps: 10, 12, 14, 16, 18. Spacing on 4 pt, the sidebar 12 from every edge. Text is centred by its capitals, not its box, and checked by measuring pixels in a screenshot, not by eye.

[tiles.png / groups.png]

### 3. Motion you don't notice
The hover highlight slides from row to row, it never jumps. A folder's flap swings as the group opens. The first try at 180 ms felt abrupt, 280 ms felt right. A Cmd-clicked tab opens right below the one it came from, named by its link until it loads, and grows into its place instead of popping up.

[folder.mp4]

### 4. The row becomes the tile
The sidebar has three modes: docked, rail, hidden. The switch between docked and rail was a cut. I asked for three clickable prototypes before writing any code: icons glide, two beats, or each row shrinking into its own tile. I picked the third. Each folder row shrinks into its rail tile, the favorites merge into one card. Built, checked in the running app, shipped the same day.

[morph.mp4 + morph-01…06.png]
[sidebar-rail.png · sidebar-hidden.png]

### 5. No extra step
An empty window keeps the Wave open. A second click to get the field back is one too many.

[wave.png / wave.mp4]

### 6. Explore: taste, kept
Cmd+E keeps whatever is under the pointer: an image, a quote, a piece of code. Explore holds it at the right edge, with its source. Claude reads it first, so a new chat doesn't meet my taste as a stranger.

[explore.png]

## How we work
Prototype in the browser, pick, build, check in the running app. Every visual change counts only once it's seen there. Every decision goes into the component docs with a name and a date, so the next person knows why.

## Outcome
SURF 0.2.0 shipped on day six. The four of us use it every day. Arc has eight weeks left.

[peek.png · capture.png · split.png]

---

Open for Smail
- Claude Code as the dev team: mention it in "How we work" or leave it out (homepage rule: AI as a tool, not a topic). Draft leaves it out.
- "33 of the first 89": keep the number or drop it.
- Is the page linked from LATEST WORK (SURF row, "READ →") or only by URL for now.
