import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

  components: Array<ScssImport> = [{
    title: 'tooltip',
    fileName: 'tooltip',
    comment: 'tooltip'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
