---
title: "Rendimiento de scroll"
description: "Cómo arreglar interfaces con scroll trabado y el modelo mental que sigo usando para mantener fluidez."
date: "2016-02-29"
tags:
  - "patrones"
  - "css"
  - "rendimiento"
  - "scroll"
categories:
  - "CSS"
slug: "rendimiento-de-scroll"
draft: false
lang: "es"
translationKey: "scrolling-performance"
---

Cuando una interfaz se siente pesada al hacer scroll, la gente no dice "hay un problema de renderizado". Dice: "esto se siente mal".

Me pasó varias veces en barras fijas y elementos animados: se veían bien en captura estática, pero en interacción real daban tirones.

## El problema de fondo

La mayoría de los problemas de scroll aparecen por tres causas:

- recálculo de layout en cada evento de scroll
- paints caros (sombras grandes, filtros, efectos)
- JavaScript haciendo demasiado trabajo por frame

A 60fps tienes unos 16ms por frame. Si pasas ese presupuesto, aparecen saltos.

## El principio que más me ayudó

Anima **transform** y **opacity** siempre que puedas.

Evita animar top/left/width/height para actualizaciones atadas al scroll.

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

`will-change` ayuda en escenarios puntuales, pero no conviene abusarlo: puede subir consumo de memoria.

## Patrón seguro para listeners de scroll

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

Con esto evitas meter trabajo síncrono pesado en un evento de alta frecuencia.

## Checklist práctico

- usa listeners `passive` cuando sea posible
- audita estilos costosos en elementos sticky/fixed
- prueba en dispositivos medios, no solo en tu laptop
- perfila en DevTools y vigila long tasks

La fluidez no depende de hacks. Depende de respetar el presupuesto de cada frame.

La diferencia en percepción es enorme: un producto fluido transmite calidad antes de que alguien lea una sola palabra.

Referencia que me ayudó originalmente a ordenar estas ideas: [Four Kitchens sobre `will-change`](http://fourkitchens.com/blog/article/fix-scrolling-performance-css-will-change-property).
