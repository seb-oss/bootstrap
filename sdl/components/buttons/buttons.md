---
title: Buttons
componentid: component-button
variantid: primary
guid: some-random-and-unique-string
---
# Usage and description
We have five main button classes that we use together with the base class `.btn` and they are `.btn-primary`, `.btn-secondary`, `.btn-outline-primary`, `.btn-light` and `.btn-link`, use the latter to give buttons the same behavior as normal links (used for links placed outside text segments and paragraphs as well as actions similar to "go to" or regular links).

### Want to import only buttons from Bootstrap?
Sure, just add the following (instead of `@sebgroup/bootstrap/scss/bootstrap`)
```scss
@import "~@sebgroup/bootstrap/variables";                   // variables used by bootstrap
@import '~@sebgroup/fonts/scss/seb-fonts';                  // import seb font
@import "~@sebgroup/bootstrap/scss/styles/functions";       // functions used by bootstrap
@import "~@sebgroup/bootstrap/scss/styles/mixins/mixins";   // mixins used by bootstrap
@import "~@sebgroup/bootstrap/scss/styles/reboot";          // reset browser specific styles (based on normalize.css)
@import "~@sebgroup/bootstrap/scss/styles/buttons";         // specific styles for buttons
```

Why not just import buttons? Well in order for the styles to build we need include some common variables, functions and mixins too, but don't worry these won't add size to the final output.

## Base state
This is the default state of the component
```html
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-outline-primary">Primary outline</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-link">Link</button>
```

## Disabled state
This is the disabled state of the component
```html
      <button type="button" class="btn btn-primary disabled">Primary</button>
      <button type="button" class="btn btn-outline-primary disabled">Primary outline</button>
      <button type="button" class="btn btn-secondary disabled">Secondary</button>
      <button type="button" class="btn btn-link disabled">Link</button>
```