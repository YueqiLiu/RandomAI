# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Portfolio direction

The user selected the Aldena Studio reference screenshot for this portfolio. Reinterpret its editorial typography, large image-led sections, alternating dark and light surfaces, and disciplined spacing for Liu Yueqi's own projects. Keep the look minimalist, spacious, and premium. The color palette is black and deep forest green with warm off-white text and surfaces; do not use red. Keep project claims grounded in the supplied resume and verified work. Routune is a personally planned and built drum-practice app; do not imply it is publicly released on the App Store unless confirmed.

The user subsequently provided four portrait-led portfolio references (Dymas Alfin, Alex Graham, Free Alexfolio, Makeup portfolio) and specifically asked to use the photo already present in their CV. Prioritize a portrait-led first screen with oversized name typography, clean framing, and black/forest-green accents. The original CV photo is stored at `public/assets/portrait-source.png`. Do not replace it with an invented person's image.

The user also supplied `portfolio website demo video.mp4` as a motion reference and chose to combine portrait motion with section transitions. The intended portrait effect is specifically a black-and-white base photo with a pointer-following mask that reveals color only beneath the hovered area; do not substitute a scroll-linked full-image color shift. Keep sequential section reveals, preserve the existing content and black/deep-green palette, avoid scroll hijacking, and honor `prefers-reduced-motion`.

The portfolio is bilingual: Chinese is the default and English is available through the compact language switch in the header. Translate all meaningful page copy, project summaries, controls, accessibility labels, and document metadata while keeping the same projects, claims, links, visual design, and interaction behavior. The chosen language can be shared via `?lang=en` or `?lang=zh` and is remembered locally.

Routune app imagery follows the selected language too: display authentic English app screenshots on the English portfolio and the original Chinese screenshots on the Chinese portfolio.

The user explicitly likes the existing portrait-led hero composition and the second-screen “Turning ideas into measurable impact” About section. Preserve the portrait/name composition and About section. The earlier Routune revision redesigned only the “02 / FEATURED PROJECT” section with a stronger editorial title, concise product-planning-to-iOS-implementation explanation, one genuine localized screenshot, and no invented metrics. The latest hero-side-content revision is authorized below.

For this Featured Project revision, the user also likes the preview's subtle forest-green background texture and handwritten annotation. Keep both restrained and contained inside the Featured Project card. The handwritten annotation is explicitly exempt from translation: show “Small steps. / Steady progress.” in English with Allura in both Chinese and English modes, with `lang="en"`. The rest of the page and authentic app screenshots still follow the selected language. Do not apply the texture or note to the hero or About section.

The selected first preview is `/Users/yueqiliu/.codex/generated_images/01a0d2ef-973c-75f2-9bc9-03d3b34503bb/exec-535d4d1a-5fd7-4132-a9c5-7bc735fc9156.png`. Match its fine-stroke calligraphic annotation and soft botanical branch/leaf shadows, especially at the right edge. The user explicitly rejected the casual Caveat handwriting and uniform paper-grain substitute. Use the locally hosted Allura face for the English annotation (the user's latest selection, replacing Pinyon Script) and `featured-botanical-shadow.jpg` for the card background. Apply Allura only to the handwritten annotation; keep all other fonts unchanged.

The user selected displayed hero option 2, explicitly removing the left “PRODUCT · DATA · GROWTH” eyebrow. Implement a clear role title, the short “Building useful products. Creating measurable impact.” introduction, and a “Let’s connect” mailto CTA at left; compact X and Reddit pills with the “ELSEWHERE” heading at right. Translate meaningful copy for Chinese. Preserve the desktop portrait/name composition, existing font families, About section, and Featured Project (including Allura). On narrow screens, place readable intro/social content beneath the portrait. X destination supplied by the user: `https://x.com/TopAITools4U`. Reddit: `https://www.reddit.com/r/TopAITools4U/`.

Hero preview results displayed on 2026-10-28 (option 2 is the selected source, with its left eyebrow removed):
- Displayed option 1: `/Users/yueqiliu/.codex/generated_images/01a0d2ef-973c-75f2-9bc9-03d3b34503bb/exec-5397bb5c-5084-4334-a353-c8a288e1b2f7.png`.
- Displayed option 2: `/Users/yueqiliu/.codex/generated_images/01a0d2ef-973c-75f2-9bc9-03d3b34503bb/exec-671b4f4a-2103-496e-b0d0-c52c4ee64d86.png`.
- Displayed option 3: `/Users/yueqiliu/.codex/generated_images/01a0d2ef-973c-75f2-9bc9-03d3b34503bb/exec-427bbcb9-b1b0-4851-94a6-41b7867bd41d.png`.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
