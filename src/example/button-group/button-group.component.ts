import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss']
})
export class ButtonGroupComponent implements OnInit {

  components: Array<ScssImport> = [{
    title: 'button groups',
    fileName: 'button-group',
    comment: 'button group'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
