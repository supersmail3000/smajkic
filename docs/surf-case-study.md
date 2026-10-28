# SURF — case study (text of /work/surf, generated from public/work/surf.html)
# SURF A browser for macOS, with an AI agent as its second user

Our browser had eight weeks to live, so four of us took two days to build a working one.

**Role** Product idea, concept, design and development

**Team** Ante, Josip, Dominik and me

**Status** In daily use, ongoing

**Platform** macOS, Swift on Chromium

[sidebar-docked-2.jpg]

## THE STORY

A great wave hit Arc, and people didn't know how to survive without a good browser. So they built surfboards from the planks of Arc's wreck, and now they surf better than ever.

Arc was where our work lived: hundreds of tabs, folders pinned for years. On October 22, 2026, The Browser Company announced that Arc stops working on December 22.

The news came up in a meeting, and it hit all four of us. We had all tried to move to Dia, The Browser Company's new browser, and none of us had made the switch stick. The other browsers we tried didn't convince us either. We are, it turns out, future boomers: every change hurts, and we would rather build a browser than get used to a new one.

So we didn't look for a new browser. We built the one we wanted: Arc's best decisions, on an engine someone else keeps secure, plus one thing Arc never had. An agent that uses the same browser as you, as a second user.

- **Oct 22** Arc announces its end. We talk it through in a meeting, and the idea for SURF comes out of it.

- **Oct 23** A call. Requirements on one page. Ante writes the first version that night: one window, no URL bar, the sidebar at the edge.

- **Oct 24, 1 a.m.** Ante shares the first DMG in our group chat and explains that he had no choice. On first launch it brings over favorites, logins and history from Arc, Dia or Chrome, and Claude Code can already see your open tabs. He asks for our GitHub names.

- **Oct 24, 8 p.m.** Dominik opens the first pull requests, and every one of them is about safety: private windows that leave nothing behind, passwords offered only on https, the page kept out of SURF's menus. Somebody has to read the fine print.

- **Oct 24, 10 p.m.** I install it, import my own Arc, and SURF freezes. By evening I'm in the repo, and my first fix is in before midnight. From then on, nothing may hang.

- **Oct 25** Dominik and Ante move the engine from WebKit to Chromium overnight, so the agent can drive it. By lunch Dominik has SURF blocking ads and trackers too.

- **Oct 27** Josip ships more than a dozen features in a single day: Settings, developer tools, a video that pops out on its own, Split, Capture. Nobody has seen him sleep since Arc's announcement.

- **Oct 28** Explore lands: Cmd+E keeps what inspires you, and the agent looks there first. Then SURF 0.2.0.

[peek.jpg]
_Peek, from the first night_
[split.jpg]
_Split, by Josip_

## THE TEAM

Four friends, no company, working async and side by side. Nobody waits for the next meeting and nobody signs off on anyone else's work. Everyone builds, everyone ships.

What holds it together is writing. Every decision goes into the shared component docs with a name, a date and the reason, so whoever picks it up next knows why without asking. Every change is tried in the running app before it counts, not argued in text.

Everyone owns what they care about most. Ante set the bar and wrote the first version. Josip ships features faster than we can name them. Dominik keeps it safe and moved it to Chromium. I brought the product idea and took the sidebar, the part you touch a hundred times a day, from concept to code.

## DECISIONS

### 1. Nothing may hang in the first five minutes

My own Arc import froze SURF. The first five minutes decide whether someone switches, so that became a requirement: hold a thousand tabs, open only what you look at, show progress from the first click. Folding a big group went from most of a second to a blink.

### 2. One grid, quiet motion

Every size comes from one grid, every gap from one spacing scale. Text is centred by its capitals and checked in pixels, not by eye.

Motion stays out of the way. The hover slides from row to row, a folder's flap swings as the group opens, a new tab grows into its place. And no extra steps: an empty window keeps the Wave open.

[tiles-2.jpg]
[groups-2.jpg]

[hover.mp4]
_The hover slides_
[folder.mp4]
_The folder swings_

### 3. The row becomes the tile

The sidebar has three modes: docked, rail, hidden. The switch between docked and rail was a cut. Three clickable prototypes before any production code: icons glide, rows become tiles, or two beats. B won: every folder row becomes its rail tile, the favorites merge into one card. Built, checked in the running app, shipped the same day.

[prototypes.html]
_The three prototypes, live. Press close, or drag the progress bar._

[morph-2.mp4]

_In the app, at full speed, then four times slower._

[morph-01-2.jpg]
[morph-02-2.jpg]
[morph-03-2.jpg]
[morph-04-2.jpg]
[morph-05-2.jpg]
[morph-06-2.jpg]

[sidebar-rail-2.jpg]
_Rail_
[sidebar-hidden-2.jpg]
_Hidden. No URL bar, ever._

### 4. Explore: taste, kept

My taste lived in four apps and a hundred lost conversations. Now Cmd+E keeps whatever is under the pointer: an image, a quote, a piece of code. Explore holds it at the right edge, with its source. The agent reads it first, so a new conversation doesn't meet my taste as a stranger.

[moodboard.jpg]
_Five minutes on Cosmos, kept with Cmd+E._

[explore-2.jpg]
_Explore, at the right edge of the same page._

## A NEW WAY OF WORKING

The designer doesn't hand over a file. The designer ships.

No handoff. Idea, prototype and production code come from the same person, with AI agents as the dev team.

When something is unclear, I make it clickable first and decide in the browser, not in a meeting. Then it gets built, checked frame by frame in the running app, and shipped, often the same day. Four people work like that in parallel, and the written decisions keep it one product.

Small and fast beats complete: a feature the four of us use every day beats five half-done ones.

## OUTCOME

SURF 0.2.0 shipped on day six. It holds a thousand tabs, previews links in Peek, splits four tabs side by side, keeps what inspires you in Explore, and gives an agent its own seat. The four of us use it every day.

Arc stops on December 22. SURF doesn't.

That was week one. It feels like years, and the four of us still can't quite believe it. Josip has probably shipped three more features while you read this.

To be continued.
