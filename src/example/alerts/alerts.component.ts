import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  components: Array<ScssImport> = [{
    title: 'alerts',
    fileName: 'alert',
    comment: 'alerts'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
