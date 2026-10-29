# Random AI · AI Capsule Machine

The homepage replaces the previous generator hub with an interactive Colorfigures gashapon machine. Existing generator routes remain available.

## Preview

Run `python3 -m http.server 4173 --bind 127.0.0.1`, then open http://127.0.0.1:4173.

## Interactions

Free coin → crank animation → capsule rolls out → open capsule → AI product description and external experience link → put prize away. Refill restores 24 capsules. Includes five body palettes, wobble control, orbit dragging, arrow-key camera control, turntable and zoom/pinch controls. See-through and Labels are intentionally not mounted.

## Product catalog

`assets/products.js` is an initial editorial seed, not a live TopAITools4U integration. Replace `AI_PRODUCTS` with a catalog export when the source data is connected. Product schema: `id`, `name`, `category`, `description`, `play`, `url`. A shuffled bag avoids repeats until all seed products have been drawn. Saved discoveries use local browser storage. Machine toy collection resets on reload as in the source.

Cross-site links include UTM attribution. The destination is the existing `/tools` directory; no invented product detail routes are used.

## Attribution

Machine rendering and animations adapted from [Colorfigures by April Zhu](https://april-zhu.com/colorfigures). The original MIT license and credits are preserved in `assets/vendor/colorfigures/LICENSE.txt`. Source captured from the public gashapon demo on 2026-10-29. `gashapon.js` contains the locally bundled rendering core and figure code, with Random AI branding and product hooks. No source assets are hotlinked.

## Hosting

The existing static Vercel configuration remains in use. Scripts are external to comply with the existing CSP; image policy also allows local Blob URLs used to bake SVG noise textures. No production deployment has been performed.

## Languages

The capsule homepage supports English and Simplified Chinese. First visits follow the browser’s preferred language: Chinese locales use Simplified Chinese; other locales fall back to English. The footer language dropdown switch UI, status messages, accessibility labels, metadata, and product descriptions without resetting the machine. An explicit choice persists in local storage under `randomai-language`; saved choices override browser detection on later visits. Translation map: `assets/i18n.js`; product English fields: `assets/products.js`. Existing legacy generator subpages retain their original English content.
