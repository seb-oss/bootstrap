---
title: Pagination
componentid: component-pagination
variantid: pagination
guid: some-random-and-unique-string-pagination
---
# Usage and description
Framework needed! Please note that the example below is just a representation of how the pagination looks and the needed markup for it. In order to use pagination you need a framework to control when and how to show different pages. If you're using angular, please take a look at ng-bootstrap and their [pagination component](https://ng-bootstrap.github.io/#/components/pagination/examples).

## Base state
This is the default state of the component
```html
    <nav aria-label="...">
      <ul class="pagination">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
        </li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">5</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
```

## Disabled state
This is the disabled state of the component
```html
<button class="btn btn-primary disabled">Button</button>
```