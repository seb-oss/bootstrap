---
title: Input group
componentid: component-stepper
variantid: default
guid: some-random-and-unique-string-input-group
---
# Usage and description
This could be implemented in a lot of different ways, the example below uses a input group `input-group`, note that javascript is required to update the value of the input field. 

## Base state
This is the default state of the component
```html
<div style="max-width: 140px;">
  <label for="appendPrependBtnIcon">Stepper</label>
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <button class="btn btn-secondary" type="button">
        <i class="far fa-minus"></i>
      </button>
    </div>
    <input id="appendPrependBtnIcon" type="tel" class="form-control text-center" value="0">
    <div class="input-group-append">
      <button class="btn btn-secondary" type="button">
        <i class="far fa-plus"></i>
      </button>
    </div>
  </div>
</div>
```
