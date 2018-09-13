---
title: Checkbox
componentid: component-checkbox
variantid: grid
guid: some-random-and-unique-checkbox-grid
---
# Usage and description
Use rows and columns to create a responsive layout, in the example below checkboxes will be placed inline on medium sized screens and up. On smaller screens the checkboxes will stack on top of each other, test by resizing the window. Use one of the following utility classes `.my-*`, `.mb-*` or `.mt-*` to add spacing between the different options, ie. `mb-2 mb-md-0` to get a small bottom margin on small screens and below.

## Base state
This is the default state of the component
```html
    <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-auto mb-2 mb-md-0">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customCheckInline">
              <label class="custom-control-label" for="customCheckInline">Check this custom checkbox</label>
            </div>
          </div>
          <div class="col-12 col-md-auto mb-2 mb-md-0">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customCheckInline1">
              <label class="custom-control-label" for="customCheckInline1">And this one</label>
            </div>
          </div>
          <div class="col-12 col-md-auto">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customCheckInline2">
              <label class="custom-control-label" for="customCheckInline2">Don't forget me</label>
            </div>
          </div>
        </div>
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