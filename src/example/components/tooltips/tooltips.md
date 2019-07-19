---
title: Tooltip
componentid: component-tooltip
variantid: tooltip
guid: some-random-and-unique-string-tooltip
---
# Usage and description
Framework needed! Please note that the example below is just a representation of how the tooltips look and the needed markup. In order to use tooltips you need a framework to control when and how to show tooltips. If you're using angular, please take a look at ng-bootstrap and their [tooltip component](https://ng-bootstrap.github.io/#/components/tooltip/examples).

Use the traditional `<abbr>`-tag or the `.text-help` class to underline single words where you want to provide additional information inside a tooltip. In forms use `<i class="far fa-info-circle"></i>` to display an -icon.

## Base state
This is the default state of the component
```html
<div class="tooltip bs-tooltip-top" role="tooltip">
        <div class="arrow"></div>
        <div class="tooltip-inner">
          Tooltip on the top
        </div>
      </div>
      <div class="tooltip bs-tooltip-right" role="tooltip">
        <div class="arrow"></div>
        <div class="tooltip-inner">
          Tooltip on the right
        </div>
      </div>
      <div class="tooltip bs-tooltip-bottom" role="tooltip">
        <div class="arrow"></div>
        <div class="tooltip-inner">
          Tooltip on the bottom
        </div>
      </div>
      <div class="tooltip bs-tooltip-left" role="tooltip">
        <div class="arrow"></div>
        <div class="tooltip-inner">
          Tooltip on the left
        </div>
      </div>
</div>
```
