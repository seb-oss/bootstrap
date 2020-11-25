import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dismissable',
  templateUrl: './dismissable.component.html',
  styleUrls: ['./dismissable.component.scss']
})
export class DismissableComponent implements OnInit {

  alerts = {
    error: true,
    success: true,
    warning: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
