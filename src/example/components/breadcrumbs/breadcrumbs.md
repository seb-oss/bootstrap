---
title: Breadcrumbs
componentid: component-breadcrumbs
variantid: primary
guid: some-random-and-unique-string-breadcrumbs
---
# Usage and description
Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS

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