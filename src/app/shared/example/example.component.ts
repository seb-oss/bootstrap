import { Component, Input } from '@angular/core';
import { UtilitiesService } from '../../services/utilities.service';
const temp = (path: string) => require(`../../../example/${path}`);

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  get isVisible(): boolean {
    return this._isVisible;
  }

  @Input() set isVisible(value: boolean) {
    this._isVisible = value;
  }
  get title(): string {
    return this._title;
  }

  @Input() set title(value: string) {
    this._title = value;
  }

  get loadSource(): boolean {
    return this._loadSource;
  }

  @Input() set loadSource(value: boolean) {
    this._loadSource = value;
  }

  get language(): string {
    return this._language;
  }

  @Input() set language(value: string) {
    this._language = value;
  }

  get source(): string {
    return this._source;
  }

  @Input() set source(value: string) {
    this._source = this.loadSource === true ? temp(value) : value;
  }

  private _source: string;
  private _title: string;
  private _loadSource = true;
  private _language = 'markup';
  private _isVisible = true;

  constructor(private utilities: UtilitiesService) {}

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  /** Copy to clipboard */
  public copyToClipboard(text: string) {
    this.utilities.copyToClipboard(text);
  }
}
