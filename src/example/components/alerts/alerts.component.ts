import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styles: [`
      code {
        white-space: nowrap;
      }
  `]
})
export class AlertsComponent implements OnInit {

  active = true;
  constructor() { }

  ngOnInit() {
  }

}
