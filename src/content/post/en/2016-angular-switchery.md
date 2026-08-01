---
title: "Angular Switchery"
description: "A practical case study on wrapping a UI library inside AngularJS without breaking two-way data flow."
date: "2016-02-27"
tags:
  - "components"
  - "javascript"
  - "angularjs"
  - "opensource"
categories:
  - "JavaScript"
  - "Components"
slug: "angular-switchery"
draft: false
lang: "en"
translationKey: "angular-switchery"
---

![Switchery](/assets/images/angular-switchery/switchery.png)

[Alexander](https://github.com/abpetkov) built this beautiful checkbox component called [Switchery](http://abpetkov.github.io/switchery/). From their website: "Switchery is a simple component that helps you turn your default HTML checkbox inputs into beautiful iOS 7 style switches in just few simple steps. You can easily customize switches, so that they match your design perfectly."

![Spaaza Screenshot](/assets/images/angular-switchery/spaaza.png)

I used it in multiple projects and loved the visual quality, but the AngularJS integration was fragile. Existing directives worked for initialization, yet model sync was inconsistent in edge cases.

So I built a directive focused on one thing: **keep the UI and the Angular model in sync at all times**.

![Spaaza Screenshot](/assets/images/angular-switchery/console.png)

The result was [Angular Switchery](http://natos.github.io/angular-switchery/), [a directive](https://docs.angularjs.org/guide/directive) that transforms a plain checkbox into a switch and supports reliable two-way binding.

You can still find the source and setup notes on [GitHub](https://github.com/natos/angular-switchery).

## What made this integration tricky

UI libraries that directly mutate DOM state can bypass framework state updates.

In AngularJS terms, that usually means one of two bugs:

- switch changes visually but scope value stays stale
- scope value changes but visual switch does not update

The directive had to bridge both directions.

## Simplified directive pattern

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

## Lessons that still apply today

- wrap third-party components behind a thin adapter layer
- define one source of truth for state
- clean up listeners to avoid memory leaks
- test interaction, not only initial render

Even if AngularJS is legacy now, the integration lesson is timeless: whenever a UI library and a framework disagree about state ownership, build a clear contract.

The specific stack changes, but that principle keeps shipping velocity high.

If you are maintaining old AngularJS apps, these adapter patterns are often the fastest path to stability.
