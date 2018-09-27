---
title: Checkboxes
componentid: component-checkbox
variantid: primary
guid: some-random-and-unique-checkbox
---
# Usage and description
Below you'll find some examples of checkboxes and layout options using the grid (rows and columns), head over to [bootstrap](https://getbootstrap.com/docs/4.0/components/forms/#overview) docs for more info and examples.

#Standard checkbox
We use a standard input element with type="checkbox" for checkboxes but we need to wrap it in a div to get the right style for the different states.

## Base state
This is the default state of the component
```html
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="customCheck">
      <label class="custom-control-label" for="customCheck">Check this custom checkbox</label>
    </div>
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="customCheckDisabled" disabled>
      <label class="custom-control-label" for="customCheckDisabled">This checkbox is disabled</label>
    </div>
```

## Disabled state
This is the disabled state of the component
```html
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="customCheckDisabled" disabled>
      <label class="custom-control-label" for="customCheckDisabled">This checkbox is disabled</label>
    </div>
```