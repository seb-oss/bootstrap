import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  components: Array<ScssImport> = [{
    title: 'buttons',
    fileName: 'button',
    comment: 'buttons'
  }, {
    title: 'close button',
    fileName: 'close',
    comment: 'close button'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
