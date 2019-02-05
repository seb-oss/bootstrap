---
title: Alerts (solid color)
componentid: component-alertribbon
variantid: solid
guid: some-random-and-unique-string-alerts2
---
# Usage and description
The example below uses the traditional `.alert-*` class (replace * with context), for use cases where the message is really important and needs to stand out.

## Base state
This is the default state of the component
```html
<div class="alerts-example">
    <div class="alert alert-primary" role="alert">
      <strong>Primary content</strong> This message just needs to stand out.
    </div>
    <div class="alert alert-secondary" role="alert">
      <strong>Secondary content</strong> This message just needs to stand out.
    </div>
    <div class="alert alert-success" role="alert">
      <strong>Well done!</strong> You successfully read this important alert message.
    </div>
    <div class="alert alert-info" role="alert">
      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </div>
    <div class="alert alert-warning" role="alert">
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </div>
    <div class="alert alert-danger" role="alert">
      <strong>Oh snap!</strong> Change a few things up and try submitting again.
    </div>
</div>
```
