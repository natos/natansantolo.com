---
title: "App de tareas con Chico UI"
description: "Un demo histórico pequeño que me dejó lecciones duraderas sobre librerías UI, alcance y foco de producto."
date: "2012-03-28"
tags:
  - "chico-ui"
  - "javascript"
  - "demo"
categories:
  - "JavaScript"
slug: "app-de-tareas-con-chico-ui"
draft: false
lang: "es"
translationKey: "todo-app-with-chico-ui"
---

En 2012 había una forma clásica de probar una librería visual: construir una app de tareas.

Eso hice con [Chico UI](http://www.chico-ui.com.ar), como experimento y como excusa para entender hasta dónde una colección de widgets te acelera de verdad.

El demo todavía está documentado en [GitHub](https://github.com/natos/chicoui-todo).

[![Todo Screenshot](/assets/images/todo-app-with-chico-ui/screenshot.png)](http://natos.github.com/chicoui-todo)

Una idea importante que era cierta en 2012 y sigue siéndolo hoy: toolkit visual y arquitectura de aplicación no son lo mismo.

Frameworks como [Backbone](http://backbonejs.org/) o [Spine](http://spine.github.io/) resolvían estructura y flujo de datos. Chico UI resolvía interacción visual y componentes listos para usar.

Saber esa diferencia evita muchas decisiones confusas.

## Lo que me enseñó este proyecto

### 1) Los demos sirven para aprender rápido

Un proyecto pequeño deja evaluar APIs con claridad:

- ¿el componente es predecible?
- ¿cuánto CSS custom necesitas?
- ¿cómo se comporta con teclado y accesibilidad?
- ¿qué se rompe en flujos reales?

### 2) Menos alcance, mejores decisiones

Mantener la app deliberadamente pequeña hizo visibles los tradeoffs.

Cuando un demo crece demasiado, tapa problemas de API y diseño debajo de complejidad innecesaria.

### 3) Componentes no reemplazan criterio de producto

Los widgets aceleran, pero no responden preguntas de experiencia:

- ¿qué pasa en estado vacío?
- ¿qué merece foco visual?
- ¿qué fricción es aceptable?

Eso sigue siendo trabajo de diseño.

## Funcionalidades que utilicé

- List Class
- Blink Widget
- Countdown Widget
- Keyboard Events
- CSS Library

## Si lo reconstruyera hoy

Mantendría el espíritu del demo, pero agregaría:

- validación de accesibilidad más rigurosa
- pruebas de estado y persistencia
- contratos de componentes más claros
- presupuesto de performance desde el inicio

Las herramientas cambiaron. La lección no: construir pequeño para aprender rápido, y escalar con intención.
