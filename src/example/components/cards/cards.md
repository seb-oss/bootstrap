---
title: Card
componentid: component-card
variantid: accordion
guid: some-random-and-unique-string-card
---
# Usage and description
Use cards to wrap content.

# Want to import only cards from Bootstrap?
Sure, just add the following (instead of `@seb-style/bootstrap/dist/scss/bootstrap`)
```scss
@import "~@seb-style/variables/_variables"; // variables used by bootstrap
@import "~@seb-style/bootstrap/dist/scss/styles/_functions"; // functions used by bootstrap
@import "~@seb-style/bootstrap/dist/scss/styles/_mixins"; // mixins used by bootstrap
@import "~@seb-style/bootstrap/dist/scss/styles/_reboot"; // reset browser specific styles (based on normalize.css)
@import "~@seb-style/bootstrap/dist/scss/styles/card"; // specific styles for cards
```

Why not just import card? Well in order for the styles to build we need include some common variables, functions and mixins too, but don't worry these won't add size to the final output.


## Base state
This is the default state of the component
```html
<div class="card">
    <h5 class="card-header">Featured</h5>
    <div class="card-body">
        <h4 class="card-title">Special title treatment</h4>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
```