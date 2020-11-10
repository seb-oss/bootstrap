import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  components: Array<ScssImport> = [{
    title: 'tabs',
    fileName: 'nav',
    comment: 'tabs'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
