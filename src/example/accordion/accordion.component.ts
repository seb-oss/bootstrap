import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  components: Array<ScssImport> = [{
    title: 'accordions',
    fileName: 'accordion',
    comment: 'accordions'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
