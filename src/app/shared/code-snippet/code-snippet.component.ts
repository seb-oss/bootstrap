import {Component, Input, OnInit} from '@angular/core';
const temp = (path: string) => require(`../../../example/${path}`);
import 'prismjs';
declare var Prism: any;


@Component({
  selector: 'app-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss']
})
export class CodeSnippetComponent implements OnInit {
  get path(): any {
    return this._path;
  }

  @Input() set path(value: any) {
    this._path = Prism.highlight(temp(value).trim(), Prism.languages['markup']);
  }

  private _path: string;
  constructor() { }

  ngOnInit(): void {
    console.log('dsfsdfsdf', this._path);
  }

}
