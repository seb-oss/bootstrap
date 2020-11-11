import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';
import 'prismjs';
declare var Prism: any;

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  components: Array<ScssImport> = [{
    title: 'cards',
    fileName: 'card',
    comment: 'cards'
  }];

  css = `
@import '@sebgroup/bootstrap/scss/core';
.card-columns {
  column-count: 1;
  @include media-breakpoint-up(md) {
    column-count: 2;
  }
  @include media-breakpoint-only(xl) {
    column-count: 3;
  }
}`

  snippet = Prism.highlight(
this.css, Prism.languages.markup);
  constructor() { }

  ngOnInit(): void {
  }

}
