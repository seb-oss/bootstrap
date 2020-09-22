import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  get title(): string {
    return this._title;
  }

  @Input() set title(value: string) {
    this._title = value;
  }
  get source(): string {
    return this._source;
  }

  @Input() set source(value: string) {
    this._source = value;
  }

  private _source: string;
  private _title: string;

}
