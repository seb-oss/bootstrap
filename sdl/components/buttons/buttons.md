---
title: Buttons
componentid: component-button
variantid: primary
guid: some-random-and-unique-string
---
# Usage and description
We have three main button classes that we use together with the base class `.btn` and they are `.btn-primary`, `.btn-secondary` and `.btn-link`, use the latter to give buttons the same behavior as normal links (used for links placed outside text segments and paragraphs as well as actions similar to "go to" or regular links).

# Want to import only buttons from Bootstrap?
Sure, just add the following (instead of `@seb-style/bootstrap/dist/scss/bootstrap`)
```scss
@import "~@seb-style/variables/_variables"; // variables used by bootstrap
@import "~@seb-style/bootstrap/dist/scss/styles/_functions"; // functions used by bootstrap
@import "~@seb-style/bootstrap/dist/scss/styles/_mixins"; // mixins used by bootstrap
@import "~@seb-style/bootstrap/dist/scss/styles/_reboot"; // reset browser specific styles (based on normalize.css)
@import "~@seb-style/bootstrap/dist/scss/styles/buttons"; // specific styles for buttons
```

Why not just import buttons? Well in order for the styles to build we need include some common variables, functions and mixins too, but don't worry these won't add size to the final output.

## Base state
This is the default state of the component
```html
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-primary disabled">Primary:disabled</button>
      <button type="button" class="btn btn-secondary disabled">Secondary:disabled</button>
      <button type="button" class="btn btn-link">Link</button>
      <button type="button" class="btn btn-link disabled">Link:disabled</button>
```

## Disabled state
This is the disabled state of the component
```html
<button class="btn btn-primary disabled">Button</button>
```