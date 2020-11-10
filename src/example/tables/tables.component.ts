import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  components: Array<ScssImport> = [{
    title: 'tables',
    fileName: 'tables',
    comment: 'tables'
  }];

  mixin = `/* core includes functions, variables and mixins which don't add css/size to a project */
@import '~@sebgroup/bootstrap/scss/core';
/* class to wrap table sort (i.e. table class name) */'
.custom-table-class {
/* include mixin @include table-sort($selector: '.sort', $asc-selector: '.sort-asc', $desc-selector: '.sort-desc', $disabled-selector: '.disabled') */
  @include table-sort('.sort-class', '.sort-asc-class', '.sort-desc-class','.sort-disabled-class');
}`
  constructor() { }

  ngOnInit(): void {
  }

}
