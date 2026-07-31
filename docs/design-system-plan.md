# Design System & Professional Polish — Plan

A staged plan to evolve natansantolo.com from a clean personal site into a
polished, consistent, "design-leader" brand — **without throwing away the
existing personality** (the animated theme, the snake arcade, the serif voice).

This document is written to be **learned from**, not just executed. Each phase
explains *why* a technique matters, not only *what* to change.

---

## Guiding principles

1. **One source of truth.** Every visual decision (color, space, size, radius,
   shadow, timing) should trace back to a named *token*. When you change a
   token, the whole site updates coherently. Scattered hex codes and one-off
   `margin: 32px` values are what make sites feel "hand-made" in the bad sense.

2. **Scales, not magic numbers.** Professional design reads as *intentional*.
   That intentionality comes from using a small, repeating set of values
   (a spacing scale, a type scale) instead of arbitrary numbers. The human eye
   detects rhythm; inconsistent spacing feels "off" even when the viewer can't
   say why.

3. **Progressive enhancement.** We layer improvements so the site is shippable
   after *every* phase. No big-bang rewrite. Each phase builds and passes the
   link checker before we move on.

4. **Personality is a feature.** "Professional" ≠ "corporate grey." The goal is
   *refined confidence*: better typography, deliberate color, tighter spacing —
   while keeping the warmth and playfulness that make the site memorable.

---

## Current state (baseline audit)

Where things stand today, so we can measure progress:

- **CSS architecture:** three global stylesheets served from
  `static/assets/css/` and linked in `src/components/Meta.astro`:
  - `base.css` — resets, typography, form elements. Already has a *partial*
    token layer (`--font-body`, `--scale-1..4`). Good starting point.
  - `style.css` — layout (`.wrap`), the animated yellow background, the
    arcade/snake, social nav, pagination, taxonomy bits. Colors hardcoded
    (`#ffc000`, `#333`, `#222`).
  - `book.css` — extra styling loaded only on book landing + chapter pages.
- **Type:** Merriweather (serif) for headings, Merriweather Sans for body,
  Fira Code for code. Good, distinctive pairing — we keep it.
- **Icons:** Font Awesome **4.5** via CDN. Old, render-blocking, and a single
  point of failure. Candidate for replacement with inline SVG later.
- **Color:** a bold animated **amber/yellow** field (`#ffc000` + moving radial
  gradients). Energetic but currently the *whole* brand — no neutral surfaces,
  no restraint, no dark mode.
- **Known issues:**
  - Two overlapping resets (`base.css` and `style.css` both reset box-sizing /
    margins) — duplication and specificity conflicts.
  - Body color/line-height defined in both files (`#222` vs implicit).
  - Fixed pixel sizing in places (`#arcade { width: 643px }`), not fluid.
  - A broken `@keyframes glow` (four `0%` stops — typo).
  - No focus-visible styling, no reduced-motion handling, no dark mode.

---

## Token taxonomy (the vocabulary we're introducing)

We introduce a single `tokens.css`, loaded **before** everything else, with two
layers:

### Layer 1 — primitive tokens (raw values, brand-agnostic)
Named by *what they are*, e.g. `--amber-500`, `--ink-900`, `--space-4`.

### Layer 2 — semantic tokens (roles, theme-aware)
Named by *what they do*, e.g. `--color-bg`, `--color-text`, `--color-accent`.
Components only ever reference **semantic** tokens. This indirection is what
makes theming (light/dark) a one-block change instead of a find-and-replace.

```
--amber-500: #e8a13a;      /* primitive: a specific color            */
        │
        ▼
--color-accent: var(--amber-500);   /* semantic: "the accent role"   */
        │
        ▼
a { color: var(--color-accent); }   /* component: uses the role      */
```

**Why two layers?** If a component used `--amber-500` directly, switching to a
dark theme (where the accent might need to be lighter for contrast) would force
edits everywhere. With semantic tokens, we just point `--color-accent` at a
different primitive inside the dark-mode block.

### Token groups we'll define
- **Color** — brand ramp (amber), neutrals (ink/paper ramps), semantic roles
  (`bg`, `surface`, `text`, `text-muted`, `border`, `accent`, `accent-contrast`,
  `link`, `link-hover`).
- **Spacing** — an 8px-based scale: `--space-1: .25rem` … `--space-12: 6rem`.
  Everything (margins, padding, gaps) snaps to this.
- **Type scale** — a modular scale with fluid `clamp()` (already partly present;
  we formalize it as `--fs-100`…`--fs-800` + `--leading-*` + `--tracking-*`).
- **Radii** — `--radius-sm/md/lg/full`.
- **Shadows** — `--shadow-sm/md/lg` (subtle, layered — never a single harsh drop).
- **Motion** — `--ease-standard`, `--dur-fast/med/slow`. Centralizing timing is
  what makes interactions feel like one system rather than random.
- **Layout** — `--measure` (reading width, ~66ch), `--container` (max page width).

---

## Phased roadmap

### Phase 1 — Token foundation ✅ (start here)
**Goal:** introduce `tokens.css` and wire it in, without visual change yet.
- Create `static/assets/css/tokens.css` with primitive + semantic tokens.
- Link it *first* in `Meta.astro` (before base/style) so cascade order is
  correct.
- Keep current colors as the initial semantic values so nothing looks different
  on this commit. (Safe, reversible checkpoint.)

**Why first:** every later phase consumes these tokens. Landing the vocabulary
before using it keeps diffs small and reviewable.

### Phase 2 — Typography & reading experience
**Goal:** make long-form reading feel crafted (this is a *writer's* site).
- Refactor `base.css` headings/body to consume type + spacing tokens.
- Establish **vertical rhythm**: consistent margins derived from the spacing
  scale; a single `--measure` for text width.
- Style the long-form elements that book chapters and posts actually use:
  `blockquote`, `figure`/`figcaption`, `hr`, lists, `code`/`pre`, links with a
  refined underline treatment.
- Improve link affordance (animated underline, clear hover, visited state that
  isn't jarring).

**Why:** typography is ~90% of how "premium" a content site feels. Measure,
leading, and rhythm do more than any graphic.

### Phase 3 — Color & theme refinement
**Goal:** keep the warmth, add restraint and depth.
- Rebalance so amber becomes an **accent**, not the entire canvas: introduce a
  warm neutral paper background and dark ink text with strong contrast (WCAG AA).
- Preserve the animated gradient but as a *subtle* accent (lower opacity, or
  confined to the hero) rather than full-viewport.
- Tune all semantic color tokens for AA contrast.

### Phase 4 — Dark mode
**Goal:** expected polish for a design/AI audience.
- Add a `[data-theme="dark"]` (and `prefers-color-scheme`) override block that
  only re-points **semantic** tokens (proof that Phase 1's architecture pays off).
- Add a tiny, dependency-free theme toggle with `localStorage` persistence and a
  no-flash inline script in `<head>`.

### Phase 5 — Component polish
**Goal:** turn bare pages into designed artifacts.
- Article/list cards, tag "pills," post metadata (date + reading time),
  a condensing sticky header, refined pagination, footer.
- Book landing hero (cover mockup, "start reading" CTA, chapter progress).

### Phase 6 — Motion & interaction
- Centralized easing/duration tokens; subtle scroll-reveal; reading-progress bar
  on long content; **`prefers-reduced-motion`** support (accessibility + taste).
- Fix the broken `glow` keyframes.

### Phase 7 — Craft & platform details
- Full favicon/App-icon set, `theme-color`, web manifest.
- Replace Font Awesome CDN with inline SVG icons (faster, no external
  dependency, styleable via `currentColor`).
- `font-display: swap` + preloaded woff2 to eliminate layout shift.
- `:focus-visible` rings, skip-to-content link, AA contrast audit.
- Per-page Open Graph images generated at build time.

---

## Definition of done (per phase)
- `npm run build` succeeds (108+ pages).
- `node scripts/check-links.mjs` reports 0 broken links / 0 shortcode leaks.
- No new TypeScript/Astro diagnostics.
- Visual spot-check of home, a post, a chapter, a tag, and a category page.

---

## Progress log
- **Phase 1 — Token foundation:** ✅ done. Added `static/assets/css/tokens.css`
  (primitive + semantic layers), linked first in `Meta.astro`. Initial semantic
  values match the old look → zero visual change (safe checkpoint).
- **Phase 2 — Typography & reading experience:** ✅ done. `base.css` fully
  refactored onto tokens; added `blockquote`, `figure`/`figcaption`, `hr`, lead
  paragraph, refined link underlines, `:focus-visible`, and
  `prefers-reduced-motion`. Removed the duplicate typography/link rules from
  `style.css` (they were overriding base), tokenized `.wrap`/`header`/spacing,
  and fixed the broken `@keyframes glow` (four `0%` stops).
  Verified: build 108 pages, 0 broken links, visual spot-check of home page OK.
- **Phase 3 — Color & theme refinement:** ✅ done. Rebalanced semantic tokens so
  amber is an *accent* over a warm "paper" canvas (`--paper-100`), with
  high-contrast ink text/headings. Softened the animated background to a subtle
  ambient glow (`--glow-opacity`, amber primitives instead of full-strength
  yellow). Made the profile photo ring theme-aware (`--color-surface`).
- **Phase 4 — Dark mode:** ✅ done. Added dark semantic overrides that trigger on
  `prefers-color-scheme: dark` *and* an explicit `[data-theme="dark"]`. Added a
  dependency-free `ThemeToggle` (inline SVG sun/moon) in the nav, a no-flash
  inline script in `Meta.astro` (applies saved preference before first paint),
  and `localStorage` persistence. Verified both themes visually via the toggle.
- **Phase 5 — Component polish:** ✅ done. Added a `readingTime()` helper
  (word-count ÷ 200 wpm). Turned `ArticleListItem` into a surface **card** with a
  date · reading-time metadata row, muted excerpt, and a "Read →" affordance;
  `.articles` is now a grid. Added a **metadata row + tag pills** to `PostSingle`.
  Introduced a **full-bleed sticky header** (viewport-wide translucent blurred
  band, content aligned to the reading column). Redesigned the **book landing**
  into a hero (cover + title + "chapters · min read" + "Start reading" CTA) with a
  numbered, per-chapter reading-time **chapter index**; chapter reading pages
  untouched (striped background suppressed on the landing via `:has`).
  Verified: build 108 pages, 0 broken links, visual spot-check of home cards,
  book hero, and post tag pills.
- **Phase 6 — Motion & interaction:** ✅ done. Added a **reading-progress bar**
  (`ReadingProgress.astro`) on posts and chapters that tracks scroll depth via a
  passive scroll listener. Added **scroll-reveal**: a JS-gated
  (`html.js-reveal`) IntersectionObserver in `BaseLayout` fades/slides `.card`
  and `[data-reveal]` elements in as they enter the viewport — skipped entirely
  under `prefers-reduced-motion` and for no-JS users (content stays visible).
  Added `scroll-behavior: smooth` + `scroll-padding-top` so in-page anchors clear
  the sticky header. Verified: build 108 pages, 0 broken links; progress bar
  tracks 0→100%, cards reveal on scroll.
- **Phase 7 — Craft & platform:** ✅ done.
  - **Favicons & manifest:** generated a full icon set (`favicon-16/32`,
    `apple-touch-icon` 180, `android-chrome` 192/512) from the 192px source with
    ImageMagick, added `site.webmanifest`, and wired the `<link>`s plus
    light/dark `theme-color` metas in `Meta.astro`.
  - **Dropped the Font Awesome CDN:** replaced the render-blocking stylesheet
    with a tiny inline-SVG `Icon.astro` (linkedin, arrow-left/right, caret-right)
    that inherits `currentColor` and scales with `1em`. Updated `Social`,
    `Pagination`, `PostSingle`, and the tag/category index pages.
  - **Fonts:** narrowed the Google Fonts request to the weights actually used
    (Merriweather 400/700/900 + italic 400; Merriweather Sans 400/700 + italic
    400) and kept `display=swap` with `preconnect`.
  - **Per-page Open Graph images:** a build-time endpoint
    (`src/pages/og/[...path].png.ts`) renders a branded 1200×630 PNG per post in
    both languages using **satori** + **@resvg/resvg-js** (fonts via
    `@fontsource`); `Meta.astro` accepts an `ogImage` override threaded through
    `BaseLayout` from `PostSingle`. Verified: build 108 pages, 0 broken links,
    8 OG images generated, icons render inline, favicons/manifest/theme-color
    present in `<head>`.
- **Chrome redesign — nav, hero, footer, sections, homepage IA:** ✅ done.
  A designer-led pass over the site's shell, keeping the warmth/personality:
  - **Navigation:** replaced the bare sticky bar with a branded nav — an amber
    "NS" monogram + "Natan Santolo" wordmark (name hides < 640px), renamed links
    to **Writing** / **The Book**, and an active-state amber underline driven by
    the current section. Utilities (language switch + theme toggle) are grouped
    right with a divider. `id="top"` anchors the footer "Back to top" link.
  - **Hero:** turned the old header into a proper hero — an **eyebrow** role
    label ("Free-range Design Leader") with an amber tick, an oversized serif
    name, a lead paragraph, and a **primary + ghost CTA pair** (Read the book /
    Browse writing). The profile video became a circular portrait that reorders
    above the text on mobile; keeps the `.natan-photo` perspective-tilt hook.
  - **Footer:** rebuilt into a **three-column** layout (brand + tagline /
    Explore: Writing · The Book · RSS / Elsewhere: LinkedIn · ADPList · language)
    with a bottom bar (© year · rights, "Back to top ↑").
  - **Sections & spacing:** added a `--space-section` rhythm token
    (`clamp(4rem, 8vw, 7rem)`), reusable **eyebrow** section labels, and a
    `.section__head` pattern (title left, "View all →" right).
  - **Homepage information architecture:** About → a full-bleed tinted
    **book band** (`BookBand.astro`, inverted CTA) → Writing (first item is a
    **featured card** with a larger title + amber left border) → Playground
    (arcade relocated to the end). Moved the shared `.btn-primary` from
    `book.css` into global `style.css` so the hero and book landing share one
    button. Verified: build 108 pages, 0 broken links, visual QA in light + dark
    across home, `/post/`, and inner pages (nav active state + footer correct).
</content>
</invoke>
