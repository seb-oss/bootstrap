import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  styles: [`
      .tooltip {
          position: relative;
          display: inline-block;
          margin: 10px 20px;
          opacity: 1;
      }
      .bs-tooltip-right .arrow, .bs-tooltip-left .arrow {
          top: calc(50% - 0.4rem);
      }
      .bs-tooltip-top .arrow, .bs-tooltip-bottom .arrow {
          right: calc(50% - 0.4rem);
      }
  `]
})
export class TooltipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
