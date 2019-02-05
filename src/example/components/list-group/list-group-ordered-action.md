---
title: List group
componentid: component-list
variantid: ordered-action
guid: some-random-and-unique-string-list-group-ordered-action
---
# Usage and description
Just add `list-group` together with `list-group-ordered` to ol element and `list-group-item-action` to li elements. Add `active` to highlight active action and `disabled` to disable an action.

## Base state
This is the default state of the component
```html
<ol class="list-group list-group-ordered">
  <li class="list-group-item-action">Lorem ipsum</li>
  <li class="list-group-item-action">Dolar sit amet <a href="#">do something</a></li>
  <li class="list-group-item-action active"><strong class="mb-1 d-block">This item is active</strong><p class="text-muted small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales, nulla sed lobortis maximus, nisl massa vestibulum lectus, in tincidunt tellus elit vel neque. Vivamus ullamcorper auctor dignissim. Maecenas placerat, odio nec vestibulum pulvinar, tortor tellus cursus quam, sit amet vulputate est diam in justo.</p></li>
  <li class="list-group-item-action disabled">Disabled list item action</li>
</ol>
```
