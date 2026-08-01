---
title: "Currying with JavaScript"
description: "A practical introduction to currying, and when it helps you design cleaner JavaScript APIs."
date: "2013-05-22"
tags:
  - "patterns"
  - "javascript"
  - "currying"
categories:
  - "JavaScript"
slug: "curriyng-with-javascript"
draft: false
lang: "en"
translationKey: "curriyng-with-javascript"
---

Currying used to feel like an academic trick to me. Then I started using it in real products and realized it can make everyday code easier to read, test, and reuse.

At a high level, currying means converting a function that takes many arguments into a chain of functions that each take one argument.

```js
// not curried
const formatPrice = (locale, currency, value) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);

// curried
const formatPriceC = (locale) => (currency) => (value) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
```

Why is this useful? Because you can preconfigure behavior once and reuse it everywhere.

```js
const formatUSD = formatPriceC('en-US')('USD');
const formatARS = formatPriceC('es-AR')('ARS');

formatUSD(19.9); // "$19.90"
formatARS(19.9); // "$ 19,90"
```

## Where currying shines

- creating reusable, partially configured utilities
- building expressive data pipelines
- reducing argument noise in repeated calls

## Where it hurts

- APIs become hard to discover when overused
- stack traces can be harder to follow for beginners
- mixed curried/non-curried code can confuse teams

## Team-friendly pattern

If your team is not used to functional patterns, expose a simple public function and keep the curried version internal.

```js
const _formatPrice = (locale) => (currency) => (value) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);

export function formatPrice(locale, currency, value) {
  return _formatPrice(locale)(currency)(value);
}
```

You get implementation flexibility without forcing everyone into a specific style.

Currying is not about being clever. It is about designing APIs that make common paths easier and reduce repeated setup.

Use it when it clarifies intent. Skip it when it adds ceremony.
