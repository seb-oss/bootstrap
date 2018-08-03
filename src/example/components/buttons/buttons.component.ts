import { Component, OnInit } from '@angular/core';
import * as testHtml from '!raw-loader!./test.html';
import { of } from 'rxjs';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  SNIPPETS = {
    main: [
      {
        name: 'markup',
        lang: 'markup',
        src: 'buttons/buttons-main/buttons-main.component.html'
      },{
        lang: 'typescript',
        src: 'buttons/buttons-main/buttons-main.component.ts'
      },
      {
        lang: 'typescript',
        src: 'https://raw.githubusercontent.com/ng-bootstrap/ng-bootstrap/master/demo/src/app/components/buttons/demos/checkbox/buttons-checkbox.ts'
      }
    ],
    sizes: [
      {
        name: 'markup',
        lang: 'markup',
        src: 'buttons/buttons-sizes/buttons-sizes.component.html'
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }


}
