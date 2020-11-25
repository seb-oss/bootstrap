import { Component, Input, OnInit } from '@angular/core';
import 'prismjs';
declare var Prism: any;

@Component({
  selector: ' app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss'],
})
export class CodeSnippetComponent implements OnInit {
  get language(): string {
    return this._language;
  }

  get path(): string {
    return this._path;
  }

  @Input() set language(value: string) {
    this._language = value;
  }

  @Input() set path(value: string) {
    this._path = Prism.highlight(value.trim(), Prism.languages[this.language]);
  }

  private _path: string;
  private _language = 'markup';
  constructor() {}

  ngOnInit(): void {}
}
