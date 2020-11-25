import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ScssImport} from '../../../app/interfaces/scss-import';

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
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonLoaderComponent {

  showOverlay = false;
  components: Array<ScssImport> = [{
    title: 'skeleton loaders',
    fileName: 'skeleton-loader',
    comment: 'skeleton loaders'
  }];

}
