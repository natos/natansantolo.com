---
title: "Currying con JavaScript"
description: "Una introducción práctica al currying y cuándo conviene usarlo para diseñar APIs más claras."
date: "2013-05-22"
tags:
  - "patrones"
  - "javascript"
  - "currying"
categories:
  - "JavaScript"
slug: "currying-con-javascript"
draft: false
lang: "es"
translationKey: "curriyng-with-javascript"
---

Durante años, currying me parecía un truco académico. Después empecé a usarlo en productos reales y descubrí que puede hacer el código más legible y reutilizable.

En simple: currying transforma una función con varios argumentos en una cadena de funciones de un argumento.

```js
// no currificada
const formatPrice = (locale, currency, value) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);

// currificada
const formatPriceC = (locale) => (currency) => (value) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);
```

La ventaja aparece cuando quieres preconfigurar comportamiento una vez y reutilizarlo muchas veces.

```js
const formatUSD = formatPriceC('en-US')('USD');
const formatARS = formatPriceC('es-AR')('ARS');

formatUSD(19.9); // "$19.90"
formatARS(19.9); // "$ 19,90"
```

## Cuándo brilla

- utilidades reutilizables parcialmente configuradas
- pipelines más expresivos
- menos ruido de argumentos repetidos

## Cuándo molesta

- puede bajar la descubribilidad de la API
- puede complicar stack traces para quienes empiezan
- mezclar estilos currificados y no currificados confunde equipos

## Patrón amigable para equipos

Si el equipo no está acostumbrado a patrones funcionales, deja la versión currificada dentro y exporta una API directa.

```js
const _formatPrice = (locale) => (currency) => (value) =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);

export function formatPrice(locale, currency, value) {
  return _formatPrice(locale)(currency)(value);
}
```

Así mantienes flexibilidad interna sin forzar un estilo en todo el código.

Currying no se trata de ser inteligente. Se trata de diseñar interfaces que hagan más fácil el camino común.
