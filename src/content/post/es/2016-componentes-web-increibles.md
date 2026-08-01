---
title: "Componentes web increíbles"
description: "Por qué los web components siguen siendo relevantes, cuándo usarlos y cómo evitar convertirlos en dogma."
date: "2016-02-28"
tags:
  - "web"
  - "componentes"
  - "web-components"
  - "sistemas de diseño"
categories:
  - "JavaScript"
  - "Componentes"
slug: "componentes-web-increibles"
draft: false
lang: "es"
translationKey: "awesome-web-components"
---

Cuando empecé a experimentar con web components, la promesa era enorme: escribir una vez, usar en cualquier stack, sin quedar atado a un framework.

Con el tiempo entendí que su valor real no es "reemplazar todo". Su valor real es **portabilidad**.

## Por qué siguen siendo relevantes

Cuando un sistema de diseño crece entre equipos, productos y tecnologías, mantener consistencia cuesta caro. Los web components ayudan porque ofrecen:

- **Encapsulación**: estilos y comportamiento viajan juntos.
- **Interoperabilidad**: Angular, React, Vue o HTML plano pueden consumir el mismo componente.
- **Durabilidad**: los estándares del navegador envejecen mejor que las modas.

## Un caso de uso realista

Si lideras un sistema de diseño compartido, distribuir `<ui-button>`, `<ui-tag>`, `<ui-switch>` y `<ui-modal>` como custom elements suele ser una gran decisión.

Los equipos de producto mantienen libertad de implementación y la plataforma mantiene consistencia.

## Un componente base moderno

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

Para muchos componentes de interfaz, esto alcanza.

## Dónde se rompen los equipos

El problema casi nunca es técnico. Es de gobernanza:

- no hay estrategia de versionado
- no hay ownership claro
- no hay QA de accesibilidad
- no hay plan de migración para cambios incompatibles

La API del componente es lo fácil. La adopción en producto es lo difícil.

## Mi regla hoy

Usa web components para **primitivas compartidas** y **consistencia cross-app**.

Evítalos cuando necesitas integración profunda con internals de un framework o cuando el equipo todavía está aprendiendo fundamentos y no necesita otra capa de abstracción.

No son una bala de plata. Son una herramienta arquitectónica fuerte cuando tu sistema de diseño es más grande que cualquier app individual.
