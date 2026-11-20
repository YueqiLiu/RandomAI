# Design QA — portrait color mask correction

## Evidence and comparison

- Source visual: `/private/tmp/portfolio-video-frames/frame-00.png`, extracted from the user's `/Users/yueqiliu/Downloads/portfolio website demo video.mp4`. The user's latest clarification defines the intended interaction: black-and-white portrait with a hovered, pointer-following area revealed in color.
- Browser captures: `/Users/yueqiliu/Documents/randomai/portfolio-lyq/qa-mono.png` (default) and `/Users/yueqiliu/Documents/randomai/portfolio-lyq/qa-spotlight.png` (pointer centered over the face). Both are 919 × 784 px at a 919 × 784 CSS viewport, 1× density. Combined comparison: `/Users/yueqiliu/Documents/randomai/portfolio-lyq/qa-hover-comparison.png`.
- Source video frame is 1566 × 1080 px, including the gray presentation surround. The combined board preserves each image's aspect ratio in equal-width slots. The reference is a framed motion concept; this is a scoped effect adaptation, not a pixel-perfect page clone.
- Additional state: mobile hero checked at 390 × 844 CSS px. Page and section layout remain intact.

## Findings

The previous full-image, scroll-driven color shift was a P1 mismatch with the user's intended interaction. It has been removed. The final browser captures show a monochrome base portrait, localized color visible only beneath the pointer mask, and restoration to monochrome when the pointer leaves. The mask has a soft circular edge matching the video's subtle reveal treatment. No actionable P0/P1/P2 difference remains for this scoped interaction.

Typography, spacing, deep-green/ivory color tokens, the CV-derived cutout, and all portfolio copy were preserved. The portrait still has no opaque rectangular background. The color layer uses the same cutout asset, so the two image layers align without a new image-quality issue. The reference's other branding and page-frame differences are intentional and outside the requested correction. Focused portrait-region comparison is represented by the default and hover captures; no additional crop was needed at this resolution.

## Verification

- Hover/pointer-over, pointer-out, desktop default, and mobile default states visually checked in the Codex in-app browser.
- `prefers-reduced-motion` removes animation and transition while preserving the color-reveal interaction.
- Browser console errors: none. Production build and all four Sites worker tests pass.
- Static `/yueqiliu/` artifact updated locally; no Git push or deployment performed.

## Follow-up polish

- [P3] Touch reveal is available while touching/dragging the portrait; if a persistent tap-to-toggle behavior is preferred, that can be added separately.

final result: passed

---

# Design QA — Routune Featured Project texture and handwritten note

## Scope and visual comparison

- Reference: the user's Featured Project screenshot and the selected preview direction (editorial Routune introduction, subtle dark-green texture, handwritten note).
- Rendered result inspected in the local in-app browser at 1440 × 900, 768 × 900, and 390 × 844 CSS pixels, in English and Chinese. The browser captures were reviewed in-session; they were not exported as separate files.
- The hero and About sections retain their prior layout and content. The background texture and note are scoped to the Featured Project card.

## Findings and corrections

- The first desktop arrangement let the handwritten note overlap the phone. The artwork was repositioned so the note sits on dark green, not on the white app interface.
- At tablet width the side-by-side layout became crowded, so the card switches to a stacked composition. On mobile, the note sits above the localized screenshot rather than on top of it.
- The English card shows the authentic English Routune screenshot; the Chinese card shows the authentic Chinese screenshot. The note is localized. No additional product metrics were introduced.
- The handwritten text is live text using a script face for English and a calligraphic fallback for Chinese, keeping both phrases selectable and accessible. A generated distressed lettering image was rejected because its speckling reduced legibility.

## Verification

- Local desktop, tablet, and mobile visual states checked after the final CSS adjustment.
- `PORTFOLIO_BASE_PATH=/yueqiliu/ npm run build` passes.
- `npm run test:sites` passes all four tests.
- Local static `/yueqiliu/` files updated; no Git push or deployment performed.

final result: passed

---

# Design QA — restore the selected preview's calligraphy and botanical shadows

This review supersedes the texture/type assessment immediately above. The user correctly identified two remaining fidelity mismatches: casual Caveat handwriting and a uniform grain background.

## Source, implementation, and comparison

- Exact source: `/Users/yueqiliu/.codex/generated_images/01a0d2ef-973c-75f2-9bc9-03d3b34503bb/exec-535d4d1a-5fd7-4132-a9c5-7bc735fc9156.png` (1172 × 1342 px). Its lower Featured Project region defines this correction; its hero, invented metrics, and original mock copy are not implementation targets.
- Implementation: `http://127.0.0.1:4173/?lang=en#featured`, browser-rendered JPEG capture at 1440 × 900 CSS/pixel size. The source and full implementation screenshot were displayed together in one browser-tool output for comparison, including a focused visual check of the note and right-hand foliage. Captures are retained in-session, with no exported screenshot file available.
- Additional rendered states: 390 × 844 mobile and the default 866 × 774 browser viewport. Pixel sizes equal CSS sizes for these captures; no density-normalized pixel-perfect comparison is claimed across the different source/implementation compositions.

## Findings, fixes, and final evidence

- [P1, resolved] Handwriting style: replaced Caveat with locally hosted Pinyon Script, restoring fine hairlines, flowing joins, and calligraphic capitals. Removed the text shadow. The final source/implementation comparison shows matching calligraphic direction; exact generated letterforms are not an identifiable font.
- [P1, resolved] Background: replaced the grain-only asset with a reference-guided dark-green botanical-shadow image. Large blurred leaf/branch projections are visible on the right, with calm dark space behind the copy.
- [P2, resolved] Longer English phrase overlapped the white app screenshot. Reduced the annotation size and inset of its second line. Final desktop measurements: annotation left 1155.23 px, screenshot right 1148.56 px; no overlap. At 851–1100 px the note moves above the screenshot. Mobile retains its separate annotation strip.
- `document.fonts.check('32px "Pinyon Script"')` returns true. No horizontal overflow or browser console errors were found. The source and implementation match the requested type/background direction; the established card composition and real localized app screenshots remain intentional adaptations.
- Production build passes, the generated CSS correctly references `/yueqiliu/assets/pinyon-script-latin.ttf`, and all four existing Sites tests pass. Local deployment files are synchronized. No push or deployment was performed.

## Asset provenance

- Built-in Image Gen, reference-guided generation. Final file: `public/assets/featured-botanical-shadow.jpg` (1942 × 809 px, approximately 108 KB).
- Final prompt: use the exact first preview as the style reference; create only its lower panel's dark desaturated forest-green background, with large softly out-of-focus branch and leaf shadows concentrated on the right third/lower-right, faint diagonal dappled light, and calm left 60% for text. Remove all people, phones, interfaces, lettering, borders, and foreground objects. No focused leaves, forest photo, fabric, or paper-grain substitute.
- Local font: `public/assets/pinyon-script-latin.ttf`; accompanying SIL Open Font License: `public/assets/pinyon-script-OFL.txt`.

final result: passed

## 2026-10-28 — Allura font-only update

The user selected Allura for the handwritten note only. Updated its local `@font-face` declaration and `.feature-note` font-family; no other CSS values or page content changed. The Chinese note keeps its existing explicit calligraphic font override.

Browser verification confirms Allura is loaded and applied to `.feature-note`. Body and hero name still use DM Sans, and the Featured Project title still uses Georgia / Noto Serif SC. The note was visually checked in the rendered local page at 733 × 774. Production build passes, the updated static files and Allura font/license are synchronized locally, and no push or deployment was performed. The three new hero images are previews only; no hero layout has been implemented.

final result: passed

---

# Design QA — selected hero option 2

## Visual target and evidence

- Selected source: `/Users/yueqiliu/.codex/generated_images/01a0d2ef-973c-75f2-9bc9-03d3b34503bb/exec-671b4f4a-2103-496e-b0d0-c52c4ee64d86.png` (1297 × 1212 px).
- Latest user correction: choose option 2 rather than option 1, and remove its left “PRODUCT · DATA · GROWTH” eyebrow.
- Browser-rendered implementation: `/Users/yueqiliu/Documents/randomai/portfolio-lyq/qa-hero-option2-en.jpg`, 1440 × 900 CSS/pixel viewport, top-of-page English state. Source and rendered screenshot were emitted together in one comparison call. The scope is the two side-content groups; the established header and desktop portrait/name composition remain intentional adaptations, so this is not a whole-page pixel clone of the differently proportioned mock.
- Additional visual states: Chinese at 390 × 844, English at 768 × 900, and Chinese at the default browser size. These captures were reviewed in-session. No density upscaling was used.

## Findings and resolution

- Left information hierarchy now follows option 2: a bold role heading, two short sentences and a filled “Let’s connect” mailto CTA. The unrequested eyebrow is absent. The Chinese version uses equivalent localized copy.
- The right column has the option-2 “ELSEWHERE” heading, X and r/TopAITools4U pills. X links to the user-supplied `https://x.com/TopAITools4U`; Reddit links to `https://www.reddit.com/r/TopAITools4U/`. External links use a new tab and `noopener noreferrer`.
- Narrow screens place the introduction and links below the portrait rather than squeezing small text alongside it. Body copy is 17 px, mobile social targets are 48 px high with 12 px between targets. No horizontal overflow or label clipping was found in checked states.
- Bootstrap Icons source assets supply the X, Reddit and arrow symbols, with the license included locally. Every rendered hero icon loaded successfully. No invented or generated replacement portrait was used.
- Font families outside the note remain unchanged, and Allura remains scoped to the handwritten English note. About and Featured Project content/layout remain unchanged.
- Tab navigation from X reaches Reddit and shows a solid focus outline. CTA and social destinations were inspected without sending email or opening external accounts. Browser console errors: none.

## Verification

- Production build passes with the `/yueqiliu/` base path.
- All four existing Sites packaging/worker tests pass.
- Local static deployment assets are synchronized. No commit, push or deployment was performed.
- The final local browser is open at `http://127.0.0.1:4173/?lang=zh#top` with its temporary viewport override reset.

No actionable P0/P1/P2 issue remains for this scoped revision.

final result: passed
