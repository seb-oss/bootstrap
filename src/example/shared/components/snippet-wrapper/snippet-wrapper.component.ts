import {Component, Input} from '@angular/core';
import {Snippet} from '../../interfaces/snippet';

@Component({
  selector: 'app-snippet-wrapper',
  template: `
    <ul class="nav nav-tabs d-none d-sm-flex">
      <li class="nav-item" *ngFor="let snippet of snippets">
        <button class="btn-link nav-link" [ngClass]="{'active': snippet.name === activeSnippet.name}"
                (click)="setActiveSnippet(snippet)">{{snippet.name}}
        </button>
      </li>
    </ul>
    <select class="custom-select d-sm-none" [(ngModel)]="activeSnippet">
      <option *ngFor="let snippet of snippets" [ngValue]="snippet">{{snippet.name}}</option>
    </select>
    <app-code [snippet]="activeSnippet"></app-code>
  `,
  styleUrls: ['./snippet-wrapper.component.scss']
})
export class SnippetWrapperComponent  {
  get snippets(): Array<Snippet> {
    return this._snippets;
  }


  @Input() set snippets(value: Array<Snippet>) {
    this._snippets = value.map(snippet => {
      return {
        name: snippet.name || snippet.src.split('/').pop(),
        lang: snippet.lang,
        src: snippet.src,
      }
    });
    if(!this.activeSnippet) {
      this.setActiveSnippet(this.snippets[0]);
    }
  }

  private _snippets: Array<Snippet>;
  activeSnippet: Snippet;
  constructor() {

  }

  setActiveSnippet(snippet: Snippet) {
    this.activeSnippet = snippet;
  }


}
