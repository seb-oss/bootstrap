import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  components: Array<ScssImport> = [{
    title: 'badges',
    fileName: 'badge',
    comment: 'badges'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
