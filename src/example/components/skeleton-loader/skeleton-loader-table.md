---
title: Skeleton loader
componentid: component-skeleton-loader
variantid: skeleton-loader-table
guid: skeleton-loader-table
---
# Usage and description
Use the skeleton loader as a placeholder for content that is still loading.

### Want to import only the skeleton loader from Bootstrap?
Sure, just add the following (instead of `@sebgroup/bootstrap/scss/bootstrap`)
```scss
@import "~@sebgroup/bootstrap/variables";                   // variables used by bootstrap
@import '~@sebgroup/fonts/scss/seb-fonts';                  // import seb font
@import "~@sebgroup/bootstrap/scss/styles/functions";       // functions used by bootstrap
@import "~@sebgroup/bootstrap/scss/styles/mixins/mixins";   // mixins used by bootstrap
@import "~@sebgroup/bootstrap/scss/styles/reboot";          // reset browser specific styles (based on normalize.css)
@import "~@sebgroup/bootstrap/scss/styles/skeleton-loader"; // specific styles for skeleton loader
```
Why not just import skeleton-loader? Well in order for the styles to build we need include some common variables, functions and mixins too, but don't worry these won't add size to the final output.

## Base state
This is the default state of the component
```html
       <div class="skeleton-loader skeleton-loader-table"></div>
   ```
