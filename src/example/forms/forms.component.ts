import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  components: Array<ScssImport> = [{
    title: 'forms',
    fileName: 'forms',
    comment: 'forms'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
