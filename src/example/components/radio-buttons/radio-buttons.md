---
title: Checkboxes
componentid: component-checkbox
variantid: primary
guid: some-random-and-unique-checkbox
---
# Usage and description
Below you'll find some examples of radio buttons and layout options using the grid (rows and columns), head over to [bootstrap](https://getbootstrap.com/docs/4.0/components/forms/#overview) docs for more info and examples.

# Standard checkbox
We use a standard input element with type="radio" for radio buttons but we need to wrap it in a div to get the right style for the different states.

## Base state
This is the default state of the component
```html
    <div class="custom-control custom-radio">
      <input type="radio" class="custom-control-input" name="radio" id="customRadio1">
      <label class="custom-control-label" for="customRadio1">Select this custom radio button</label>
    </div>
    <div class="custom-control custom-radio">
      <input type="radio" class="custom-control-input" name="radio" id="customRadio2">
      <label class="custom-control-label" for="customRadio2">Another option</label>
    </div>
    <div class="custom-control custom-radio">
      <input type="radio" class="custom-control-input" name="radio" id="customRadioDisabled" disabled>
      <label class="custom-control-label" for="customRadioDisabled">This option is disabled</label>
    </div>
```

## Disabled state
This is the disabled state of the component
```html
    <div class="custom-control custom-radio">
      <input type="radio" class="custom-control-input" name="radio" id="customRadioDisabled" disabled>
      <label class="custom-control-label" for="customRadioDisabled">This option is disabled</label>
    </div>
```