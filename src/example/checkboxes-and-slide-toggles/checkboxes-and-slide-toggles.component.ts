import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';

@Component({
  selector: 'app-checkboxes-and-slide-toggles',
  templateUrl: './checkboxes-and-slide-toggles.component.html',
  styleUrls: ['./checkboxes-and-slide-toggles.component.scss']
})
export class CheckboxesAndSlideTogglesComponent implements OnInit {

  components: Array<ScssImport> = [{
    title: 'checkboxes and slide toggles',
    fileName: 'custom-forms',
    comment: 'checkboxes and slide toggles'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
