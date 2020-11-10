import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  components: Array<ScssImport> = [{
    title: 'navbars',
    fileName: 'navbar',
    comment: 'navbars'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
