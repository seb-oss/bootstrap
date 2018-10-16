---
title: Navbar
componentid: component-navbar
variantid: dark
guid: some-random-and-unique-string
---
# Usage and description
Most applications won't need the navbar as the navbar will be provided by the application shell, however there might be cases where you need a standalone navbar/header for your app. For more examples please visit official bootstrap docs.

### Want to import only the navbar from Bootstrap?
Sure, just add the following (instead of `@sebgroup/bootstrap/scss/bootstrap`)
```scss
@import "~@sebgroup/bootstrap/variables";                   // variables used by bootstrap
@import '~@sebgroup/fonts/scss/seb-fonts';                  // import seb font
@import "~@sebgroup/bootstrap/scss/styles/functions";       // functions used by bootstrap
@import "~@sebgroup/bootstrap/scss/styles/mixins/mixins";   // mixins used by bootstrap
@import "~@sebgroup/bootstrap/scss/styles/reboot";          // reset browser specific styles (based on normalize.css)
@import "~@sebgroup/bootstrap/scss/styles/navbar";          // specific styles for navbar
```
Why not just import navbar? Well in order for the styles to build we need include some common variables, functions and mixins too, but don't worry these won't add size to the final output.

## Base state
This is the default state of the component
```html
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand" href="#">
        Bootstrap
      </span>
      <span class="navbar-text">
          Navbar text with an inline element
        </span>
    </nav>
```