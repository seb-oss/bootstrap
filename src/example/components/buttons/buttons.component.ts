import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ScssImport} from '../../../app/interfaces/scss-import';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonsComponent {

  components: Array<ScssImport> = [{
    title: 'buttons',
    fileName: 'button',
    comment: 'buttons'
  }, {
    title: 'close button',
    fileName: 'close',
    comment: 'close button'
  }];
  constructor() { }


}
