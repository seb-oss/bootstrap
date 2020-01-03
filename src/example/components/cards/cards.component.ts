import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ScssImport} from '../../../app/interfaces/scss-import';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent {

  components: Array<ScssImport> = [{
    title: 'cards',
    fileName: 'card',
    comment: 'cards'
  }];
  constructor() { }

}
