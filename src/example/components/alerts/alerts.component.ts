import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styles: []
})
export class AlertsComponent implements OnInit {

  active:boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
