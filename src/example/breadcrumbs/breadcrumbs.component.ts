import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  components: Array<ScssImport> = [{
    title: 'breadcrumbs',
    fileName: 'breadcrumb',
    comment: 'breadcrumbs'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
