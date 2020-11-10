import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anchor-heading',
  templateUrl: './anchor-heading.component.html',
  styleUrls: ['./anchor-heading.component.scss'],
})
export class AnchorHeadingComponent implements OnInit {
  get anchor(): string {
    return this._anchor;
  }

  set anchor(value: string) {
    this._anchor = value;
  }
  get heading(): string {
    return this._heading;
  }

  @Input() set heading(value: string) {
    this._heading = value;
    this.anchor = value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  }

  private _anchor: string;
  private _heading: string;
  constructor() {}

  ngOnInit(): void {}
}
