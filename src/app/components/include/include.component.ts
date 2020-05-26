import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ScssImport} from '../../interfaces/scss-import';

@Component({
  selector: 'app-include',
  templateUrl: './include.component.html',
  styleUrls: ['./include.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncludeComponent {
  get type(): "styles" | "mixin" {
    return this._type;
  }

  @Input() set type(value: "styles" | "mixin") {
    this._type = value;
  }
  get component(): ScssImport {
    return this._component;
  }

  set component(value: ScssImport) {
    this._component = value;
  }

  get scssImports(): string {
    return this.type === 'styles' ? this._scssImports : '';
  }

  @Input() set components(value: Array<ScssImport>) {
    if(!value) {
      return
    }
    this._component = value[0];
    this._scssImports = value
      .reduce((previous, current) => (previous += `@import \'~@sebgroup/bootstrap/scss/styles/${current.fileName}\'; /* styles for ${current.comment} */\n`), '');
  }

  private _scssImports: string = '';
  private _component: ScssImport;
  private _type: 'styles' | 'mixin' = 'styles';
  constructor() { }

}
