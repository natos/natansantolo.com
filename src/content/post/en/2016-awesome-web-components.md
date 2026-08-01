---
title: "Awesome Web Components"
description: "Why web components still matter, where they shine, and how to use them without forcing them everywhere."
date: "2016-02-28"
tags:
  - "web"
  - "components"
  - "web-components"
  - "design-systems"
categories:
  - "JavaScript"
  - "Components"
slug: "awesome-web-components"
draft: false
lang: "en"
translationKey: "awesome-web-components"
---

Web components felt like a promise when I first started experimenting with them: write once, run anywhere, no framework lock-in, and native browser APIs doing the heavy lifting.

Years later, the excitement is still valid, but the conversation is more practical now. The value is not "replace every framework". The value is portability.

## Why they are still relevant

When design systems grow across teams, stacks, and release cycles, consistency becomes expensive. Web components can reduce that cost because they give you:

- **Encapsulation**: styles and behavior travel together.
- **Interoperability**: Angular, React, Vue, plain HTML all consume the same element.
- **Longevity**: browser standards age better than framework fashions.

## A realistic use case

If you own a shared design system, shipping `<ui-button>`, `<ui-tag>`, `<ui-switch>`, and `<ui-modal>` as custom elements is often a great tradeoff.

Feature teams keep framework freedom. Platform teams keep visual and behavioral consistency.

## A modern baseline component

```js
class UiTag extends HTMLElement {
  static observedAttributes = ['tone'];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const tone = this.getAttribute('tone') ?? 'neutral';
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: inline-flex; }
        span {
          font: 600 0.8rem/1.1 system-ui, sans-serif;
          padding: 0.3rem 0.6rem;
          border-radius: 999px;
          background: ${tone === 'success' ? '#d8f6df' : '#ececec'};
          color: ${tone === 'success' ? '#0f5d2b' : '#333'};
        }
      </style>
      <span><slot></slot></span>
    `;
  }
}

customElements.define('ui-tag', UiTag);
```

This is enough for many UI primitives.

## Where teams get stuck

Most failures are not technical. They are governance failures:

- no versioning strategy
- no ownership model
- unclear accessibility QA
- no migration plan for breaking changes

The component API is the easy part. Product-level adoption is the hard part.

## My current rule of thumb

Use web components for **shared UI primitives** and **cross-app consistency**.

Avoid them when deep framework internals are required, or when the team is still learning component fundamentals and needs fewer abstractions.

Web components are not a silver bullet. They are a strong architectural option when your design system is larger than any single app.
