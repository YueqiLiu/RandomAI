# Random AI gashapon design QA

final result: passed

## Scope and evidence

- Source visual truth: user screenshot `/var/folders/46/t_mkq3g10bs8mm8ym91p6pzw0000gn/T/codex-clipboard-eb5b5a25-ab9e-42ae-af95-526a8fe82bae.png`, plus live Chrome capture of https://april-zhu.com/colorfigures-demo#gashapon.
- Implementation: http://127.0.0.1:4173/.
- Browser-rendered screenshots: `qa-gashapon/desktop.png` (opened capsule), `qa-gashapon/desktop-final.png` (initial state), `qa-gashapon/mobile.png`, `qa-gashapon/mobile-final.png`.
- Focused combined comparison: `qa-gashapon/comparison.png`. Source 934×1018; implementation desktop screenshot 3024×1740 at native 2× display density. Machine crops normalized proportionally into 440×760 slots in one 920×810 comparison image. No shape distortion introduced. Compare model fidelity separately from intentionally changed page chrome.
- Desktop browser content approximately 1512×750 CSS px; mobile Chrome responsive viewport explicitly 390×844 CSS px. Mobile screenshot includes DevTools and is scaled by its fit-to-window control; judged for overflow/reflow, not pixel-identical typography.
- State: blush body, initial 24 capsules and default camera for model comparison; product reveal tested separately. Mobile initial blush/default camera after reload.

## Comparison history

1. P2: source gallery's fit-to-leftover-height routine made the machine too small after adding Random AI intro. Removed the max-height cap and compacted the intro, preserving proportional SVG rendering. Post-fix evidence: desktop-final.png and comparison.png. The page scrolls naturally to secondary controls.
2. P2: machine sticker text overflowed after replacing GACHA with RANDOM AI. Reduced projected label size. Post-fix evidence: comparison.png; text fits within sticker.
3. P2: mobile inherited a 200px action-column maximum, causing excess rows. Overrode mobile max-width. Post-fix evidence: mobile-final.png; all five actions wrap into two rows with no clipped controls.

## Required fidelity surfaces

- Fonts/typography: retains source system monospace for controls; Chinese system fallback and a compact product heading are intentional. Machine lettering uses the original projected type renderer. No cut-off labels in final captures.
- Spacing/layout: source machine, action group, stats, palette and view grouping retained. Random AI header and introductory text are intentional additions. Mobile content flows vertically and requires normal page scroll.
- Colors/tokens: source paper, ink, grain, blue cast shadow and all five original palettes retained. Palette change to mint visibly confirmed.
- Image quality: original local projection/rendering engine and geometry reused, not a raster imitation. Combined comparison confirms globe, capsules, shell, crank, tray and shading. Dynamic source-authored SVG is retained under its MIT license.
- Copy/content: operations localized; simulated credit labeled free inspiration coins; FREE replaces price plaque. Product reveal shows description, suggested use, official-site action and TopAITools4U directory link. Initial catalog is an editorial seed, not a live integration.

## Interaction verification

Observed in Chrome: coin 0→1; crank/dispense reduces 24→23 and clears credit; opening reveals Notion with its correct official-site link and the TopAITools4U directory action; put-away increments collection and hides reveal; refill restores 24; mint selection changes pressed state; turntable toggles on, and initial-view action stops it. See-through and Labels absent from the page accessibility tree. Source interactions also inspected before adaptation.

Console checked using Chrome DevTools: 0 messages; final mobile reload displayed No issues. External script syntax checks and git diff whitespace checks passed.

## Remaining validation limits / follow-up

- Physical-device pinch, wheel gestures and prolonged performance profiling were not completed. Zoom and orbit code are retained from the source, but native automation did not reliably confirm every gesture.
- Chrome reported high memory during prolonged turntable operation. No leak diagnosis has been performed; profile/optimize source SVG redraw before broad production rollout.
- Live catalog synchronization and reverse links on TopAITools4U are not part of this frontend change. No deployment performed.
- No remaining P0/P1/P2 visual findings in the reviewed desktop/mobile captures.
