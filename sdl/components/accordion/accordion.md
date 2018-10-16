---
title: Accordion
componentid: component-accordion
variantid: accordion
guid: some-random-and-unique-string-accordion
---
# Usage and description
Bootstrap doesn't contain styles for accordion by default so you need to add separate package as this component requires additional javascript. Please see info below for more info.

### Want to import only accordion from Bootstrap?
Sure, just add the following (instead of `@sebgroup/bootstrap/scss/bootstrap`)
```scss
@import "~@sebgroup/bootstrap/variables";                                               // variables used by bootstrap
@import '~@sebgroup/fonts/scss/seb-fonts';                                              // import seb font
@import "~@sebgroup/bootstrap/scss/styles/functions";                                   // functions used by bootstrap
@import "~@sebgroup/bootstrap/scss/styles/mixins/mixins";                               // mixins used by bootstrap
@import "~@sebgroup/bootstrap/scss/styles/reboot";                                      // reset browser specific styles (based on normalize.css)
@import "~@sebgroup/bootstrap/scss/third-parties/ng-bootstrap/mixins/ngb-accordion";    // specific mixin for ngb-accordion

@include ngb-accordion('ngb-accordion');    // include styles using mixin
```
## Base state
This is the default state of the component
```html
<div class="alert alert-info"><strong>Framework needed!</strong> Please note that the example below is just a representation of how accordions look and the needed markup. In order to use accordion you need a framework to control when and how to toggle between active states. If you're using angular, please take a look at <a class="alert-link" href="https://ng-bootstrap.github.io/" target="_blank">ng-bootstrap</a> and their <a class="alert-link" href="https://ng-bootstrap.github.io/#/components/accordion" target="_blank">accordion component</a>.</div>
<a href="https://sebgroup.github.io/bootstrap/accordion" target="_blank">Show live example</a>
```