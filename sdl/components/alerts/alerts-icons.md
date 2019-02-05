---
title: Alerts (icons)
componentid: component-alertribbon
variantid: icons
guid: some-random-and-unique-string-alerts3
---
# Usage and description
The example below uses `.alert-icon` class to add icons to the alerts, note that not all alerts have icons (yet).

## Base state
This is the default state of the component
```html
<div class="alerts-example">
    <div class="alert alert-primary alert-icon" role="alert">
      <strong>Primary content</strong> This message just needs to stand out.
    </div>
    <div class="alert alert-secondary alert-icon" role="alert">
      <strong>Secondary content</strong> This message just needs to stand out.
    </div>
    <div class="alert alert-success alert-icon" role="alert">
      <strong>Well done!</strong> You successfully read this important alert message.
    </div>
    <div class="alert alert-info alert-icon" role="alert">
      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </div>
    <div class="alert alert-warning alert-icon" role="alert">
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </div>
    <div class="alert alert-danger alert-icon" role="alert">
      <strong>Oh snap!</strong> Change a few things up and try submitting again. Look it works with really long texts too. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu purus in odio finibus dignissim. Pellentesque nibh tortor, lacinia a dapibus et, scelerisque quis dui.
    </div>
</div>
```
