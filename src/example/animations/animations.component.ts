import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {

  components: Array<ScssImport> = [{
    title: 'animations',
    fileName: 'animations',
    comment: 'animations'
  }];

  animations = [
    {name: 'fade in', class: 'fade-in', importName: 'fadeIn'},
    {name: 'fade in up', class: 'fade-in-up', importName: 'fadeInUp'},
    {name: 'fade in down', class: 'fade-in-down', importName: 'fadeInDown'},
    {name: 'slide in left', class: 'slide-in-left', importName: 'slideInLeft'},
    {name: 'slide in right', class: 'slide-in-right', importName: 'slideInRight'},
    {name: 'slide in down', class: 'slide-in-down', importName: 'slideInDown'},
    {name: 'slide in up', class: 'slide-in-up', importName: 'slideInUp'},
    {name: 'expand x', class: 'expand-x', importName: 'expandX'},
    {name: 'expand y', class: 'expand-y', importName: 'expandY'},
    {name: 'rotate 180', class: 'rotate-180', importName: 'rotate180'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
