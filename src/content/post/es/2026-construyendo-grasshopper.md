---
title: "Construyendo Grasshopper"
description: "Qué pasa cuando le das a un diseñador aumentado un fin de semana y Claude: construir una plataforma de mentoría gratuita y de código abierto a través de la colaboración humano-IA."
date: "2026-07-19"
tags:
  - "IA y diseño"
  - "colaboración humano-IA"
  - "diseñador aumentado"
  - "mentoría"
  - "código abierto"
  - "Claude"
  - "diseño de producto"
  - "construir en público"
categories:
  - "diseño"
slug: "construyendo-grasshopper"
draft: false
lang: "es"
translationKey: "building-grasshopper"
image: "/assets/images/grsshppr/grsshppr-card.png"
---

He pasado dos años escribiendo sobre diseñadores aumentados: personas que usan la IA para amplificar su trabajo, no para reemplazarlo. Dos años *hablando* de ello más que *haciéndolo*, al menos en algo que importara más allá de mi trabajo diario.

Uso IA intensamente en Affinidi. Esa es una historia para otro post. La pregunta que me seguía rondando era distinta: ¿podría usar estas herramientas para impulsar el cambio que quiero ver en el mundo, en mis propios términos?

Así que un fin de semana me senté con Claude y construí Grasshopper. Y todo lo que había teorizado sobre la colaboración humano-IA dejó de ser teoría.

## Las plataformas de mentoría están rotas

ADPList tiene más de 38.000 mentores: abrumador. MentorCruise cobra entre 150 y 360 USD al mes. Pero lo que más me molesta es la gamificación: "100 horas de mentoría", "Mentor del mes", insignias y tablas de clasificación. La misma cuantificación que alimentó el hipercrecimiento estaba erosionando en silencio la calidad de la propia mentoría. Cuando optimizas para el número, dejas de optimizar para la persona que tienes enfrente.

He mentoreado a decenas de diseñadores a través de ADPList. Cada vez, deseaba algo fiel a los principios sobre los que se fundó, en lugar de una plataforma con fines de lucro, respaldada por la codicia y hackeada para crecer. Donde las relaciones importaran más que el mercado.

La critiqué, y vi a otros hacer lo mismo. Desde el principio, no podía dejar de preguntarme qué pasaría si la propia comunidad impulsara la plataforma y las decisiones importantes.

Así que decidí empezar un experimento: un concepto de producto abierto para la mentoría. Gratis. De código abierto. Minimalista.

## Cómo fue realmente trabajar con Claude

Yo aporté lo que una máquina no puede: visión de producto, criterio de diseño y una obstinada noción de lo que mentores y mentoreados necesitan de verdad. Claude aportó patrones de arquitectura —el layout de app-router de Next.js, el esquema de Drizzle ORM— y la capacidad de convertir un esquema en una funcionalidad operativa en minutos.

Aquí un intercambio real. Esbocé una funcionalidad en lenguaje llano: "Los mentoreados deberían poder fijar objetivos y vincular sesiones a esos objetivos." Claude propuso un esquema, expuso los tradeoffs y me hizo preguntas aclaratorias que yo no había pensado a fondo. Le contesté: "No, los objetivos deberían ser módulos opcionales, no el núcleo. No toda relación de mentoría necesita seguimiento estructurado." Claude refactorizó, actualizó la documentación de ingeniería y escribió un ADR que capturaba *por qué* tomamos esa decisión.

Esa última parte importa más de lo que parece.

## El logo, el mismo patrón

<div style="display: flex; flex-direction: row; gap: 1rem; align-items: center;">
  <img src="/assets/images/grsshppr/logo.svg" alt="Logo de Grasshopper emergiendo" style="width: 100%; opacity: 0.15;">
  <img src="/assets/images/grsshppr/logo.svg" alt="Logo de Grasshopper emergiendo" style="width: 100%; opacity: 0.35;">
  <img src="/assets/images/grsshppr/logo.svg" alt="Logo de Grasshopper emergiendo" style="width: 100%; opacity: 0.55;">
  <img src="/assets/images/grsshppr/logo.svg" alt="Logo de Grasshopper emergiendo" style="width: 100%; opacity: 0.75;">
  <img src="/assets/images/grsshppr/logo.svg" alt="Logo de Grasshopper, final" style="width: 100%; opacity: 1;">
</div>

La colaboración no fue solo sobre código. Grasshopper necesitaba una identidad, así que hice lo que le diría a cualquier diseñador que hiciera: fui dueño del concepto y del estilo, y dejé que la IA se encargara de la ejecución. Sabía lo que quería —la idea, el ambiente, la sensación— y lo refiné a lo largo de unas cuantas iteraciones de Midjourney hasta que encajó.

Con una idea inicial generé muchas oportunidades, que llevaron a nuevas decisiones.
<img src="/assets/images/grsshppr/grsshppr-logo-iterations-2.png" alt="Iteración 2 del logo de Grasshopper" style="width: 100%;">

Afinando la especificidad de la dirección estética, las líneas, las formas, los colores.
<img src="/assets/images/grsshppr/grsshppr-logo-iterations-3.png" alt="Iteración 3 del logo de Grasshopper" style="width: 100%;">

El mismo principio que con el código: el criterio y el *porqué* eran míos. La herramienta lo hizo real, más rápido.

## La velocidad no fue lo que ganamos

No gané velocidad porque Claude escribiera más rápido. La gané porque nada se volvía a discutir, y la razón por la que nada se volvía a discutir no era que Claude "recordara". Es que cada decisión quedaba en un artefacto: la documentación de ingeniería, los ADR, el propio repositorio. La continuidad no vivía en el modelo. Vivía en el sistema que construimos para sostenerla. Las decisiones de diseño del martes informaban el trabajo del viernes porque el martes quedó escrito.

Esa es la parte a la que sigo volviendo. El andamiaje que hace que la colaboración con IA se acumule es algo que un humano todavía tiene que diseñar.

### Se sintió como co-diseño, no como delegación

No le estaba dando prompts a una herramienta. Estaba trabajando con un socio que tenía contexto. Cuando dije "esto se siente demasiado pesado", Claude entendió que me refería a *pesado cognitivamente para los usuarios*, no a *técnicamente complejo*.

### Me hizo mejor arquitecto

Al obligarme a articular *por qué* una funcionalidad debía existir, Claude sacó a la luz mis propias suposiciones. Cuando no podía explicar por qué algo importaba, normalmente no importaba.

## La tesis, hecha realidad

Esto es lo que quería decir cuando escribí sobre humanos aumentados:

- **La IA amplifica el criterio, no solo la ejecución.** Claude no reemplazó mi pensamiento de diseño: hizo accionables mis instintos.
- **La colaboración le gana a la automatización.** Los mejores resultados vinieron de ciclos cerrados: yo validaba, Claude construía, yo refinaba.
- **Los humanos son dueños del "porqué".** Claude nunca cuestionó si Grasshopper *debía* existir. Ese es mi trabajo. El suyo era hacerlo real.

## Construido en abierto

Grasshopper está en beta: el núcleo está ahí, y ahora se trata de endurecerlo y pulir los bordes ásperos. Busco contribuidores (ingenieros, diseñadores, PMs) y mentores (3+ años de experiencia, cualquier dominio).

El código es público. El roadmap es público. El registro de decisiones es público. Si vas a construir una plataforma de mentoría en abierto, la plataforma misma debería construirse en abierto.

Y lo llamo "nosotros" porque eso es lo que es: una colaboración humano-IA. Tengo genuina curiosidad por ver a dónde llega.

---

## Enlaces

- [Explora Grasshopper en GitHub](https://github.com/grasshopper-protocol/grsshppr)
- [Conviértete en Mentor](https://www.grsshppr.org/)
- [Lee la documentación de diseño](https://github.com/grasshopper-protocol/grsshppr/blob/main/DESIGN.md)
- [Lee sobre nuestro modelo de colaboración humano-IA](https://github.com/grasshopper-protocol/grsshppr/blob/main/HUMANS.md)
