---
title: Slide toggles
componentid: component-slidetoggle
variantid: slide-toggle
guid: some-random-and-unique-checkbox-slide-toggle
---
# Usage and description
Below you'll find some examples of slide toggles (switches).

# Standard checkbox
We use a standard input element with type="checkbox" for slide toggles but we need to wrap it in a div to get the right style for the different states.

## Base state
This is the default state of the component
```html
    <div class="custom-control custom-slide-toggle">
      <input type="checkbox" class="custom-control-input" id="customCheck">
      <label class="custom-control-label" for="customCheck">Check this custom slide toggle</label>
    </div>
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="customCheckDisabled" disabled>
      <label class="custom-control-label" for="customCheckDisabled">This slide toggle is disabled</label>
    </div>
```

## Disabled state
This is the disabled state of the component
```html
    <div class="custom-control custom-slide-toggle">
      <input type="checkbox" class="custom-control-input" id="customCheckDisabled" disabled>
      <label class="custom-control-label" for="customCheckDisabled">This slide toggle is disabled</label>
    </div>
```
