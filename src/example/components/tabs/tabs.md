---
title: Tabs
componentid: component-tabs
variantid: primary
guid: some-random-and-unique-string-tabs
---
# Usage and description
Framework needed! Please note that the example below is just a representation of how tabs look and the needed markup. In order to use tabs you need a framework to control when and how to show them. If you're using angular, please take a look at ng-bootstrap and their [tabs component](https://ng-bootstrap.github.io/#/components/tabs/examples).

If you're using angular and want each tab to have it's own route (recommended), you don't need the tab component from ng-bootstrap (or any other framework). You just need to setup a router outlet and use router links for each tab together with the markup below (real example will be added later).

## Base state
This is the default state of the component
```html
<div class="tabs-example">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
</div>
```