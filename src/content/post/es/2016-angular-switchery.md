---
title: "Angular Switchery"
description: "Caso práctico de cómo envolver una librería visual en AngularJS sin romper el flujo de datos bidireccional."
date: "2016-02-27"
tags:
  - "componentes"
  - "javascript"
  - "angularjs"
  - "opensource"
categories:
  - "JavaScript"
  - "Componentes"
slug: "angular-switchery"
draft: false
lang: "es"
translationKey: "angular-switchery"
---

![Switchery](/assets/images/angular-switchery/switchery.png)

[Alexander](https://github.com/abpetkov) creó un componente de checkbox hermoso llamado [Switchery](http://abpetkov.github.io/switchery/): convierte checkboxes nativos en switches estilo iOS con una API simple.

![Spaaza Screenshot](/assets/images/angular-switchery/spaaza.png)

Lo usé en varios proyectos y me encantaba, pero al integrarlo con AngularJS aparecían problemas de sincronización. Había directivas existentes, pero no resolvían bien algunos casos de two-way binding.

Así nació [Angular Switchery](http://natos.github.io/angular-switchery/): una directiva orientada a mantener UI y modelo alineados todo el tiempo.

El código y la guía de instalación siguen en [GitHub](https://github.com/natos/angular-switchery).

## Por qué era difícil

Cuando una librería visual muta el DOM directamente, puede saltarse el ciclo de estado del framework.

En AngularJS, eso suele producir dos bugs clásicos:

- el switch cambia visualmente, pero el modelo queda desactualizado
- el modelo cambia, pero el switch no refleja el estado

## Patrón simplificado de directiva

```js
app.directive('switchery', function () {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      const sw = new Switchery(element[0], { size: attrs.switcherySize || 'default' });

      function renderFromModel(value) {
        element[0].checked = !!value;
        if (sw.setPosition) sw.setPosition();
      }

      ngModel.$render = function () {
        renderFromModel(ngModel.$viewValue);
      };

      element.on('change', function () {
        scope.$applyAsync(function () {
          ngModel.$setViewValue(element[0].checked);
        });
      });

      scope.$on('$destroy', function () {
        element.off('change');
      });
    }
  };
});
```

## Lecciones que todavía aplican

- encapsula librerías de terceros en una capa adaptadora
- define una fuente de verdad para el estado
- limpia listeners para evitar leaks
- prueba interacción, no solo render inicial

Aunque AngularJS hoy sea legacy, la lección sigue vigente: cuando framework y librería no acuerdan quién controla el estado, necesitas un contrato explícito.

![Spaaza Screenshot](/assets/images/angular-switchery/console.png)
