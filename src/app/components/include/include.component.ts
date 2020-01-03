import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ScssImport} from '../../interfaces/scss-import';

@Component({
  selector: 'app-include',
  templateUrl: './include.component.html',
  styleUrls: ['./include.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncludeComponent {
  get component(): ScssImport {
    return this._component;
  }

  set component(value: ScssImport) {
    this._component = value;
  }

  get scssImports(): string {
    return this._scssImports;
  }

  @Input() set components(value: Array<ScssImport>) {
    if(!value) {
      return
    }
    this._component = value[0];
    this._scssImports = value
      .reduce((previous, current) => (previous += '@import \'~@sebgroup/bootstrap/scss/styles/' + current.fileName +'\'; /* styles for ' + current.comment +' */\n'), '');
  }

  private _scssImports: string = '';
  private _component: ScssImport;
  constructor() { }

}
