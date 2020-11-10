import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  components: Array<ScssImport> = [{
    title: 'spinners',
    fileName: 'spinners',
    comment: 'spinners'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
