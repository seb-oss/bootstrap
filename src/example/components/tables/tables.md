---
title: Table
componentid: component-table
variantid: standard
guid: some-random-and-unique-string-table
---
# Usage and description
Just add the class `table` to your table element.

# Want to import only the table from Bootstrap?
Sure, just add the following (instead of `@seb-style/bootstrap/dist/scss/bootstrap`)
```scss
@import "~@seb-style/variables/_variables"; // variables used by bootstrap
@import "~@seb-style/bootstrap/dist/scss/styles/_functions"; // functions used by bootstrap
@import "~@seb-style/bootstrap/dist/scss/styles/_mixins"; // mixins used by bootstrap
@import "~@seb-style/bootstrap/dist/scss/styles/_reboot"; // reset browser specific styles (based on normalize.css)
@import "~@seb-style/bootstrap/dist/scss/styles/tables"; // specific styles for tables
```

Why not just import tables? Well in order for the styles to build we need include some common variables, functions and mixins too, but don't worry these won't add size to the final output.

## Base state
This is the default state of the component
```html
      <table class="table">
                <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                </tbody>
      </table>
```