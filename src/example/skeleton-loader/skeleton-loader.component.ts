import { Component, OnInit } from '@angular/core';
import {ScssImport} from '../../app/interfaces/scss-import';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent implements OnInit {
  showOverlay = false;

  components: Array<ScssImport> = [{
    title: 'skeleton-loader',
    fileName: 'skeleton-loader',
    comment: 'skeleton-loader'
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
