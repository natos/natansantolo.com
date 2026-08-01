---
title: "Scrolling performance"
description: "How I fixed janky scrolling UIs, and the mental model I still use to keep interfaces smooth."
date: "2016-02-29"
tags:
  - "patterns"
  - "css"
  - "performance"
  - "scroll"
categories:
  - "CSS"
slug: "scrolling-performance"
draft: false
lang: "en"
translationKey: "scrolling-performance"
---

When an interface feels "heavy" while scrolling, people don't describe it as a rendering issue. They describe it as stress.

I learned this the hard way while working on sticky bars and animated UI elements that looked good in static screenshots but stuttered under real interaction.

## The core problem

Most scrolling jank comes from one of these patterns:

- layout recalculations on every scroll event
- expensive paints caused by large shadows or filters
- JavaScript that does too much work before the next frame

At 60fps you have roughly 16ms per frame. If your scroll handler and paint work exceed that budget, your UI drops frames.

## The principle that fixed most issues

Animate **transform** and **opacity** whenever possible.

Avoid animating top/left/width/height on scroll-driven updates.

```css
.floating-toolbar {
  position: sticky;
  top: 0;
  transform: translateZ(0);
  will-change: transform;
}

.floating-toolbar.is-condensed {
  transform: translateY(-4px) scale(0.98);
  opacity: 0.97;
}
```

`will-change` helps in constrained scenarios, but use it carefully. Overusing it can increase memory usage and hurt performance.

## A safer scroll handler pattern

```js
let ticking = false;

window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;

  requestAnimationFrame(() => {
    const y = window.scrollY;
    document.body.classList.toggle('is-scrolled', y > 24);
    ticking = false;
  });
}, { passive: true });
```

This avoids stacking expensive synchronous work in high-frequency events.

## Practical checklist

- mark scroll listeners as `passive` when possible
- audit paint-heavy styles on sticky/fixed elements
- test on a mid-range device, not only your laptop
- profile in DevTools Performance and watch long tasks

Smooth scrolling is less about tricks and more about respecting the frame budget.

The experience difference is huge. A product that feels fluid communicates quality before users read a single word.

Reference that originally helped me frame this work: [Four Kitchens on `will-change`](http://fourkitchens.com/blog/article/fix-scrolling-performance-css-will-change-property).

I still use the same principle today: optimize for interaction first, decoration second.