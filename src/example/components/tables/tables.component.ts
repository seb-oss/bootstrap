import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html'
})
export class TablesComponent implements OnInit {
    SNIPPETS = {
        standard: [
            {
                name: 'markup',
                lang: 'markup',
                src: 'tables/table-standard/table-standard.component.html'
            }
        ],
        striped: [{
            name: 'markup',
            lang: 'markup',
            src: 'tables/table-striped/table-striped.component.html'
        }],
        bordered: [{
            name: 'markup',
            lang: 'markup',
            src: 'tables/table-bordered/table-bordered.component.html'
        }],
        hoverable: [{
            name: 'markup',
            lang: 'markup',
            src: 'tables/table-hoverable/table-hoverable.component.html'
        }],
        small: [{
            name: 'markup',
            lang: 'markup',
            src: 'tables/table-small/table-small.component.html'
        }]
    };
  constructor() { }

  ngOnInit() {
  }

}
