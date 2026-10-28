# SURF — case study (text of /work/surf, generated from public/work/surf.html)
# SURF

A browser for four people. Built in six days.

**Role** Product idea, concept, design and development

**Team** Ante, Josip, Dominik and me

**Status** In daily use, ongoing

**Platform** macOS, Swift on Chromium

[sidebar-docked.jpg]

## THE STORY

Arc was where my work lived. 659 tabs, 21 pinned folders, years of it. On October 22, 2026, The Browser Company announced that Arc stops working on December 22.

So the idea was not to find a new browser, but to build the one we wanted: Arc's best decisions, on an engine someone else keeps secure, plus one thing Arc never had. An agent that uses the same browser as you, as a second user.

- **Oct 22** Arc announces its end. The idea for SURF.

- **Oct 23** Ante, Josip, Dominik and I on a call. What a browser for the four of us needs, written down as requirements. The first build runs that evening: one window, no URL bar, the sidebar at the edge.

- **Oct 24** I import my own Arc. SURF freezes. From then on, nothing may hang.

- **Oct 25** Dominik and Ante move the engine from WebKit to Chromium, so the agent can drive it.

- **Oct 28** SURF 0.2.0. The four of us use it every day.

## THE TEAM

Four people, working async and side by side. Nobody waits for a meeting and nobody signs off on anyone else's work. Everyone builds, everyone ships.

What holds it together is writing. Every decision goes into the shared component docs with a name, a date and the reason, so whoever picks it up next knows why without asking. Every change is tried in the running app before it counts, not argued in text.

Ante set the bar ("perfection, no compromises") and how the Wave springs open. Josip built Pins, Split and Capture. Dominik and Ante moved the engine to Chromium so the agent can drive it. I brought the product idea and took the parts you touch a hundred times a day from concept to code: how the sidebar looks, moves and scales.

## DECISIONS

### 1. Nothing may hang in the first five minutes

My own Arc import froze SURF. The first five minutes decide whether someone switches, so that became a requirement: hold a thousand tabs, open only what you look at, show progress from the first click. Folding a big group went from most of a second to a blink.

### 2. One grid for everything

Icons 14, buttons 24, rows 32. Type in five steps: 10, 12, 14, 16, 18. Spacing on 4 pt, the sidebar 12 from every edge. Text is centred by its capitals, not its box, and checked by measuring pixels in a screenshot, not by eye.

[tiles.jpg]
[groups.jpg]

### 3. Motion you don't notice

The hover highlight slides from row to row, it never jumps. A folder's flap swings as the group opens. The first try at 180 ms felt abrupt, 280 ms felt right. A Cmd-clicked tab opens right below the one it came from, named by its link until it loads, and grows into its place instead of popping up.

[hover.mp4]
_The hover slides_
[folder.mp4]
_The folder swings_

### 4. The row becomes the tile

The sidebar has three modes: docked, rail, hidden. The switch between docked and rail was a cut. Before any production code, I built three clickable prototypes: A, the icons glide. B, each row shrinks into its own tile. C, two beats. I picked B: every folder row becomes its rail tile, the favorites merge into one card. Built, checked in the running app, shipped the same day.

[prototypes.png]
_The three prototypes, halfway through: icons glide, the row becomes the tile, two beats. B won._

[morph.mp4]

_In the app, at full speed, then four times slower._

[morph-01.jpg]
[morph-02.jpg]
[morph-03.jpg]
[morph-04.jpg]
[morph-05.jpg]
[morph-06.jpg]

[sidebar-rail.jpg]
_Rail_
[sidebar-hidden.jpg]
_Hidden. No URL bar, ever._

### 5. No extra step

An empty window keeps the Wave open. A second click to get the field back is one too many.

[wave.mp4]

### 6. Explore: taste, kept

Cmd+E keeps whatever is under the pointer: an image, a quote, a piece of code. Explore holds it at the right edge, with its source. The agent reads it first, so a new conversation doesn't meet my taste as a stranger.

[explore.jpg]

## A NEW WAY OF WORKING

No handoff. Idea, prototype and production code come from the same person, with AI agents as the dev team. The designer doesn't hand over a file, the designer ships.

When something is unclear, I make it clickable first and decide in the browser, not in a meeting. Then it gets built, checked frame by frame in the running app, and shipped, often the same day. Four people work like that in parallel, and the written decisions keep it one product.

Small and fast beats complete: a feature the four of us use every day beats five half-done ones.

## OUTCOME

SURF 0.2.0 shipped on day six. Arc has eight weeks left.

[peek.jpg]
_Peek_
[split.jpg]
_Split_

[pins.jpg]
_Pins_
[capture.jpg]
_Capture_
