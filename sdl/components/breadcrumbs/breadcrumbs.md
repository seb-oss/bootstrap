---
title: Breadcrumbs
componentid: component-breadcrumbs
variantid: primary
guid: some-random-and-unique-string-breadcrumbs
---
# Usage and description
Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS

### Want to import only breadcrumbs from Bootstrap?
Sure, just add the following (instead of `@sebgroup/bootstrap/scss/bootstrap`)
```scss
@import "~@sebgroup/bootstrap/variables";                   // variables used by bootstrap
@import '~@sebgroup/fonts/scss/seb-fonts';                  // import seb font
@import "~@sebgroup/bootstrap/scss/styles/functions";       // functions used by bootstrap
@import "~@sebgroup/bootstrap/scss/styles/mixins/mixins";   // mixins used by bootstrap
@import "~@sebgroup/bootstrap/scss/styles/reboot";          // reset browser specific styles (based on normalize.css)
@import "~@sebgroup/bootstrap/scss/styles/breadcrumb";      // specific styles for breadcrumbs
```

## Base state
This is the default state of the component
```html
<div class="breadcrumbs-example">
    <ol class="breadcrumb">
        <li class="breadcrumb-item active">Home</li>
      </ol>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active">Library</li>
      </ol>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active">Data</li>
      </ol>
</div>
```