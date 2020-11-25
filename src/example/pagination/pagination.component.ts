import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  components: Array<ScssImport> = [{
    title: 'pagination',
    fileName: 'pagination',
    comment: 'pagination'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
