---
title: "Capítulo 2: Cómo funciona la IA"
slug: "como-funciona-la-ia"
weight: 3
tags:
  - "how-ai-works"
  - "ai-explainability"
  - "machine-learning-process"
  - "ai-for-non-technical"
  - "design-technology"
  - "ai-mental-models"
  - "understanding-algorithms"
image: "/assets/images/the-augmented-designer/how-ai-works.png"
draft: false
lang: "es"
isIndex: false
translationKey: "how-ai-works"
---

## Desmitificar la caja negra

_"Entender la IA no se trata de matemáticas—se trata de modelos mentales. Así como no necesitas comprender las longitudes de onda del color para usar la teoría del color, no necesitas cálculo diferencial para diseñar con IA."_

## La magia es solo matemática (pero no entres en pánico)

Aquí va un secreto que podría enojar a algunos ingenieros: la IA es solo coincidencia de patrones con pasos adicionales. Eso es todo. Sin conciencia, sin comprensión, sin inteligencia genuina—solo reconocimiento de patrones muy sofisticado. Y como diseñador, ya eres experto en patrones.

### Todo se trata de patrones

Piensa en cómo aprendiste diseño. Miraste cientos de sitios web, apps e interfaces. Tu cerebro empezó a notar patrones:

- La navegación suele ir arriba
- Las acciones importantes suelen ser grandes y coloridas
- Los mensajes de error frecuentemente son rojos
- Los formularios siguen layouts predecibles

Internalizaste estos patrones tan profundamente que ahora puedes detectar el "mal diseño" al instante, aunque no puedas articular de inmediato por qué. ¿Esa intuición? Es tu red neuronal biológica en acción. Los sistemas de IA hacen lo mismo, solo que con silicio en lugar de neuronas.

**El concepto central:** Todo sistema de IA, por complejo que sea, sigue este proceso básico:

1. Observar ejemplos (datos de entrenamiento)
2. Encontrar patrones (creación del modelo)
3. Aplicar patrones a situaciones nuevas (inferencia)
4. Recibir feedback y mejorar (iteración)

¿Te suena familiar? Es exactamente como aprendiste diseño.

### Datos: el cimiento de todo

Si la IA es como cocinar, los datos son tus ingredientes. Usa ingredientes frescos y de calidad, y podrías crear algo asombroso. Usa ingredientes echados a perder, sesgados o insuficientes, y ninguna habilidad de chef salvará el plato.

**La metáfora:** Imagina enseñarle a alguien sobre el "buen diseño" mostrándole solo sitios web de 1995. Aprenderían que el buen diseño significa GIF animados, contadores de visitas y carteles de "En construcción". Esto es exactamente lo que pasa cuando la IA se entrena con datos sesgados o limitados.

**Calidad por encima de cantidad:** Todos hablan del "big data", pero para los diseñadores, el verdadero problema son los "datos correctos". El algoritmo Explore de Instagram no necesita cada foto jamás tomada—necesita fotos que representen aquello con lo que los usuarios realmente interactúan.

**El problema del sesgo:** Aquí es donde tu ética de diseño importa. Si entrenas una IA de contratación solo con los empleados actuales (en su mayoría ingenieros hombres), aprende a preferir candidatos hombres. Si entrenas un sistema de reconocimiento facial mayormente con rostros blancos, falla con las personas de color. Como diseñadores, debemos preguntar: "¿De quién faltan los datos? ¿La experiencia de quién se excluye?"

_Impacto en el mundo real:_ Amazon descartó una herramienta de reclutamiento con IA porque penalizaba currículums que contenían la palabra "women's" (como en "women's chess club"). El sistema aprendió de diez años de currículums—en su mayoría de hombres—y concluyó que los candidatos hombres eran preferibles.

**Tu rol:** Tú eres quien diseña cómo se recopilan los datos. Cada campo de formulario, cada solicitud de permiso, cada interacción es una oportunidad de recopilación de datos. Tú decides:

- Qué datos son esenciales versus deseables
- Cómo solicitarlos sin resultar invasivo
- Cómo mostrarles a los usuarios el valor de sus datos
- Cómo mantener la confianza mientras recopilas insights

**Dónde profundizar:**

- "Weapons of Math Destruction" por Cathy O'Neil
- "Data Feminism" por Catherine D'Ignazio y Lauren Klein
- Los recursos de la Data Visualization Society

### Modelos: el recetario

Un modelo es solo una receta que convierte una entrada en una salida. Aliméntalo con una imagen, obtén una clasificación. Aliméntalo con texto, obtén un resumen. Aliméntalo con comportamiento de usuario, obtén una predicción.

**La metáfora:** Piensa en los modelos como los filtros de Instagram. Cada filtro es un conjunto de reglas (aumentar el contraste, cambiar los colores, agregar viñeta) que transforma cualquier foto de manera consistente. Los modelos de IA son similares—son reglas de transformación aprendidas de ejemplos en lugar de programadas manualmente.

**Preentrenados versus personalizados:** Esto es como elegir entre usar Bootstrap o crear un sistema de diseño personalizado. Los modelos preentrenados (GPT, BERT, ResNet) son como Bootstrap—potentes, de propósito general, listos para usar. Los modelos personalizados son como los sistemas de diseño a medida—adaptados a tus necesidades específicas pero requieren más recursos.

**El tamaño del modelo importa:** Más grande no siempre es mejor. Es como la resolución de una imagen—una imagen de cabecera de 100 MB podría ser increíblemente detallada, pero acabará con tu tiempo de carga. De igual forma, los modelos de IA enormes podrían ser más precisos, pero son más lentos y más costosos. Tu trabajo es encontrar el equilibrio adecuado para tu caso de uso.

**Control de versiones:** Los modelos evolucionan como lo hacen tus diseños. La versión 1 podría ser básica pero funcional. La versión 2 agrega funciones. La versión 3 corrige errores. Como diseñador, necesitas planear para estas actualizaciones:

- ¿Cómo sabrán los usuarios que la IA ha mejorado?
- ¿Qué pasa con las preferencias guardadas cuando el modelo cambia?
- ¿Cómo mantienes la coherencia mientras evoluciona la capacidad?

**Dónde profundizar:**

- Sitios de Model Zoo (ver modelos preentrenados en acción)
- Papers with Code (entender qué es posible)
- El Model Garden de Google

### El proceso de entrenamiento: enseñar a tu IA

Entrenar una IA es como formar a un nuevo diseñador. No le vuelcas todo el conocimiento de diseño de una sola vez. Empiezas con lo básico, das ejemplos, das feedback y aumentas gradualmente la complejidad.

**El viaje de tres fases:**

**Fase de entrenamiento:** Esto es como la escuela de diseño. La IA ve miles de ejemplos con las respuestas correctas. "Este es un botón en el que los usuarios hicieron clic. Este es uno que ignoraron." Ajusta sus reglas internas para mejorar en predecir la respuesta correcta.

**Fase de validación:** Esto es como las críticas de diseño. La IA se pone a prueba con ejemplos que no ha visto antes. Si le va bien, ¡genial! Si no, de vuelta al entrenamiento. Esto previene el "sobreajuste"—el equivalente en IA de diseñar solo para ti mismo en lugar de para tus usuarios.

**Fase de prueba:** Esto es como las pruebas con usuarios. La IA enfrenta escenarios del mundo real. Esto revela el verdadero desempeño y los casos límite que no anticipaste.

**Sobreajuste: el problema de la memorización**

**La metáfora:** Imagina un diseñador que solo ha trabajado en la marca de un cliente. Se vuelve increíble en ese estilo específico pero no puede adaptarse a nuevos desafíos. Eso es el sobreajuste—aprender los datos de entrenamiento de manera demasiado específica en lugar de aprender principios generales.

_Ejemplo:_ Una IA entrenada para identificar gatos podría memorizar gatos específicos de las imágenes de entrenamiento en lugar de aprender la "gatunidad". Muéstrale un gato nuevo, y falla.

**Tu respuesta de diseño:** Cuando notes que la IA es sospechosamente perfecta en las demos pero falla en el uso real, sospecha de sobreajuste. Diseña mecanismos de feedback para detectar esto:

- Botones de "¿Fue útil esta sugerencia?"
- Reporte de errores sencillo
- Escenarios de prueba diversos

**Dónde profundizar:**

- Andrew Ng's Machine Learning Course
- "The Master Algorithm" por Pedro Domingos
- Google's Machine Learning Crash Course

### El ciclo de vida del desarrollo de IA: tu nuevo proceso de diseño

El ciclo de vida del desarrollo de IA es paralelo al proceso de diseño que ya conoces:

**1. Definición del problema (fase de descubrimiento)**

- Proceso de diseño: "Los usuarios no encuentran lo que necesitan"
- Proceso de IA: "¿Puede la IA ayudar a los usuarios a encontrar cosas más rápido?"
- Tu rol: Formular los problemas de maneras que la IA pueda resolver

**2. Recopilación de datos (fase de investigación)**

- Proceso de diseño: Entrevistas de usuario, analítica, encuestas
- Proceso de IA: Reunir datos de entrenamiento
- Tu rol: Diseñar interfaces de recopilación de datos en las que los usuarios confíen

**3. Desarrollo del modelo (fase de diseño)**

- Proceso de diseño: Bocetar, hacer wireframes, prototipar
- Proceso de IA: Elegir algoritmos, entrenar modelos
- Tu rol: Definir métricas de éxito desde la perspectiva del usuario

**4. Evaluación (fase de prueba)**

- Proceso de diseño: Pruebas de usabilidad, pruebas A/B
- Proceso de IA: Medir exactitud, precisión, exhaustividad
- Tu rol: Traducir las métricas técnicas al impacto en el usuario

**5. Despliegue (fase de lanzamiento)**

- Proceso de diseño: Poner en producción
- Proceso de IA: Integrar el modelo en el producto
- Tu rol: Diseñar la presentación de la IA a los usuarios

**6. Monitoreo (poslanzamiento)**

- Proceso de diseño: Analítica, feedback de usuarios, iteración
- Proceso de IA: Seguimiento del desempeño del modelo, detección de deriva
- Tu rol: Diseñar bucles de feedback y comunicar las mejoras

### Comprender las limitaciones: los bordes de lo posible

Todo medio de diseño tiene restricciones. Las pantallas tienen bordes. La atención tiene límites. La IA también tiene fronteras.

**Las limitaciones fundamentales:**

**La IA no puede comprender el significado:** Reconoce patrones, no significancia. GPT puede escribir un hermoso poema sobre la pérdida sin entender la tristeza. Es como un pintor daltónico que ha aprendido qué tubos de pintura la gente llama "rojo" y "verde" pero que nunca ha visto los colores.

**La IA no puede manejar la verdadera novedad:** Puede recombinar patrones aprendidos de nuevas maneras pero no puede innovar genuinamente. Es como un DJ que puede crear remixes asombrosos pero no puede componer música original.

**A la IA le falta sentido común:** No entiende la causa y el efecto de la manera en que lo hacen los humanos. Podría sugerir helado para el desayuno porque los datos muestran que la gente está feliz al comer helado, perdiéndose por completo el contexto social.

**La IA no tiene ética:** Optimiza para cualquier métrica que le des, sin consideración moral. Dile que maximice la interacción, y podría promover contenido escandaloso. Es como una app de navegación que siempre elige la ruta más rápida, aunque pase por el patio de juegos de un jardín de infantes.

**Tu desafío de diseño:** Crea interfaces que:

- Establezcan expectativas adecuadas
- Provean supervisión humana para decisiones críticas
- Fallen con elegancia cuando la IA falla
- Mantengan la agencia y el control del usuario


## El modelo mental del diseñador

Olvida las redes neuronales y la retropropagación. Así es como pensar en la IA como diseñador:

**La IA es una máquina de predicción:** Toda aplicación de IA está esencialmente prediciendo algo:

- Los filtros de spam predicen si un correo es basura
- Los sistemas de recomendación predicen qué disfrutarás
- Los asistentes de voz predicen qué acción quieres
- La IA generativa predice qué viene a continuación en una secuencia

**La confianza no es certeza:** Cuando una IA tiene "90% de confianza", no significa que tenga un 90% de razón. Significa que, en su entrenamiento, cuando se sintió así de confiada, acertó el 90% de las veces. Es como un pronóstico del tiempo—70% de probabilidad de lluvia no significa que el 70% del cielo lloverá.

**El contexto lo es todo:** La IA no comprende realmente el contexto—hace coincidir patrones con contextos similares que ha visto. Por eso los chatbots a veces dan respuestas insensibles y por eso necesitas diseñar interacciones que establezcan el contexto.

## Conclusión: del misterio al dominio

La IA no es magia—son patrones hasta el fondo. Como la tipografía, la teoría del color o el diseño de interacción, es un sistema con reglas, capacidades y limitaciones. El misterio no está en cómo funciona, sino en cómo usarla bien.

No necesitas entender las matemáticas más de lo que necesitas entender la física de la luz para usar el color de forma efectiva. Lo que necesitas es un modelo mental—la comprensión de un diseñador sobre este nuevo material.

Esto es lo que has aprendido:

- La IA es coincidencia de patrones sofisticada, no inteligencia genuina
- La calidad de los datos determina la capacidad de la IA
- Los modelos son como recetas—algunos prefabricados, otros personalizados
- Entrenar es enseñar a través de ejemplos
- Toda IA tiene limitaciones que requieren soluciones de diseño

Pero más importante aún, has aprendido que el desarrollo de la IA refleja el proceso de diseño que ya conoces. El vocabulario es distinto, pero el viaje es familiar: comprender el problema, reunir insights, crear soluciones, probar con usuarios, iterar según el feedback.

La caja negra ya no es tan negra. Es translúcida—puedes ver las formas dentro aunque los detalles sigan borrosos. Y eso es suficiente. Porque tu trabajo no es construir la caja; es diseñar cómo los humanos interactúan con ella.

No te estás convirtiendo en un ingeniero de IA. Te estás convirtiendo en algo más valioso: un diseñador que puede tender el puente entre las necesidades humanas y las capacidades de la IA. Estás aprendiendo a diseñar no solo para la IA, sino con la IA como material de diseño.

El próximo capítulo es donde se pone emocionante. Ahora que entiendes qué es la IA y cómo funciona, exploremos cómo diseñar experiencias que hagan a la IA verdaderamente útil para los humanos.
