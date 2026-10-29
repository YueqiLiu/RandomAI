# Random AI · AI Capsule Machine

The homepage replaces the previous generator hub with an interactive Colorfigures gashapon machine. Existing generator routes remain available.

## Preview

Run `python3 -m http.server 4173 --bind 127.0.0.1`, then open http://127.0.0.1:4173.

## Interactions

Free coin → crank animation → capsule rolls out → open capsule → AI product description and external experience link → put prize away. Refill restores 24 capsules. Includes five body palettes, wobble control, orbit dragging, arrow-key camera control, turntable and zoom/pinch controls. See-through and Labels are intentionally not mounted.

## Product catalog

Random AI uses TopAITools4U's existing public `https://www.topaitools4u.site/api/tools` endpoint. The source website merges its curated tools with Supabase submissions whose normalized status is exactly approved. The verified source response contained 220 published tools on 2026-10-29. No Supabase schema, permissions, or source project files were modified.

`vercel.json` proxies same-origin `/api/catalog` to that public endpoint. On page load, the browser starts with the 220-tool snapshot in `assets/catalog-snapshot.js`, fetches the current catalog, then refreshes every five minutes while visible and when returning after five minutes. Valid updates reset the shuffled bag; active capsules and collected products keep their original product objects. Invalid or unavailable responses retain the last valid catalog. Source-side caching may add delay; this is periodic synchronization, not realtime.

Only public fields are bundled. Contact emails, submitter hashes, pending submissions and screenshot storage/signed URLs are never imported. Outbound links accept only HTTP(S) without credentials. Every Try this tool link sets `ref=randomai.top` while preserving other parameters and fragments. The secondary action opens the real TopAITools4U `/tools/<slug>` page with attribution.

English descriptions come from the source. Chinese editorial copy is reused for matching seed tools; otherwise Chinese UI displays the source's English description with a Chinese general trial suggestion. This is not an automatic translation service.

Refresh the bundled offline fallback with Node.js 22+:

```bash
node scripts/sync-catalog.mjs
```

Local `python3 -m http.server` does not implement Vercel rewrites and uses the bundled snapshot when `/api/catalog` returns 404. To verify live synchronization locally, use a Vercel-aware development server. No API keys or environment variables are required for this integration. Saved discoveries use local browser storage; the machine collection resets on reload.

## Attribution

Machine rendering and animations adapted from [Colorfigures by April Zhu](https://april-zhu.com/colorfigures). The original MIT license and credits are preserved in `assets/vendor/colorfigures/LICENSE.txt`. Source captured from the public gashapon demo on 2026-10-29. `gashapon.js` contains the locally bundled rendering core and figure code, with Random AI branding and product hooks. No source assets are hotlinked.

## Hosting

The existing static Vercel configuration remains in use. Scripts are external to comply with the existing CSP; image policy also allows local Blob URLs used to bake SVG noise textures. No production deployment has been performed.

## Languages

The capsule homepage supports English and Simplified Chinese. First visits follow the browser’s preferred language: Chinese locales use Simplified Chinese; other locales fall back to English. The footer language dropdown switch UI, status messages, accessibility labels, metadata, and product descriptions without resetting the machine. An explicit choice persists in local storage under `randomai-language`; saved choices override browser detection on later visits. Translation map: `assets/i18n.js`; product English fields: `assets/products.js`. Existing legacy generator subpages retain their original English content.
