import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styles: [`
        .overlay-content {
          position: absolute;
          width: calc(100% - 40px);
          z-index: 10;
          opacity: 0.5;
      }
  `]
})
export class SkeletonLoaderComponent implements OnInit {

  showOverlay: boolean = false;
  constructor() { }

  ngOnInit() {

  }

}
