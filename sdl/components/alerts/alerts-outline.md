---
title: Alerts (outline)
componentid: component-alert
variantid: outline
guid: some-random-and-unique-string-alerts1
---
# Usage and description
The first example below uses the `.alert-outline-*` class (replace * with context) for a more subtle message. The background is white to make it stick out when placed on grey backgrounds.

# Want to import only alerts from Bootstrap?
Sure, just add the following (instead of `@seb-style/bootstrap/dist/scss/bootstrap`)
```scss
@import "~@seb-style/variables/_variables"; // variables used by bootstrap
@import "~@seb-style/bootstrap/dist/scss/styles/_functions"; // functions used by bootstrap
@import "~@seb-style/bootstrap/dist/scss/styles/_mixins"; // mixins used by bootstrap
@import "~@seb-style/bootstrap/dist/scss/styles/_reboot"; // reset browser specific styles (based on normalize.css)
@import "~@seb-style/bootstrap/dist/scss/styles/alert"; // specific styles for alerts
```

Why not just import alerts? Well in order for the styles to build we need include some common variables, functions and mixins too, but don't worry these won't add size to the final output.


## Base state
This is the default state of the component
```html
<div class="alerts-example">
    <div class="alert alert-outline-primary" role="alert">
        <strong>Primary content</strong> This message just needs to stand out.
    </div>
    <div class="alert alert-outline-secondary" role="alert">
        <strong>Secondary content</strong> This message just needs to stand out.
    </div>
    <div class="alert alert-outline-success" role="alert">
        <strong>Well done!</strong> You successfully read this important alert message.
    </div>
    <div class="alert alert-outline-info" role="alert">
        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </div>
    <div class="alert alert-outline-warning" role="alert">
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </div>
    <div class="alert alert-outline-danger" role="alert">
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
    </div>
</div>
```