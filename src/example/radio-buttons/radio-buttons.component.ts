import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss']
})
export class RadioButtonsComponent implements OnInit {

  components: Array<ScssImport> = [{
    title: 'radio buttons',
    fileName: 'custom-forms',
    comment: 'radio buttons'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
