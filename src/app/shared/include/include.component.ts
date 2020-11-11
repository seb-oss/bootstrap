import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ScssImport } from '../../interfaces/scss-import';
import 'prismjs';
import { UtilitiesService } from '../../services/utilities.service';
declare var Prism: any;

@Component({
  selector: 'app-include',
  templateUrl: './include.component.html',
  styleUrls: ['./include.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncludeComponent implements OnInit {
  get type(): 'styles' | 'mixin' {
    return this._type;
  }

  @Input() set type(value: 'styles' | 'mixin') {
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
    if (!value) {
      return;
    }
    this._component = value[0];
    this._scssImports = value.reduce(
      (previous, current) =>
        (previous += `@import \'~@sebgroup/bootstrap/scss/styles/${current.fileName}\'; /* styles for ${current.comment} */\n`),
      `@import \'~@sebgroup/bootstrap/scss/core'; /* variables, mixins and functions (no added size) */\n`
    );
  }

  private _scssImports = '';
  private _component: ScssImport;
  private _type: 'styles' | 'mixin' = 'styles';
  public activeSnippet = 'default';
  public importContent;
  public snip: string;

  showSnippet(event: MouseEvent, snippet: string) {
    event.preventDefault();
    this.activeSnippet = snippet;
    if (snippet === 'minimal') {
      this.updateSnippet(this.scssImports);
    } else {
      this.updateSnippet();
    }
  }
  updateSnippet(snip: string = `@import '~@sebgroup/bootstrap/scss/bootstrap';`) {
    this.snip = snip;
    this.importContent = `<pre class="language-css"><code class="language-css">${Prism.highlight(
      snip.trim(),
      Prism.languages.css
    )}</code></pre>`;
  }
  constructor(private utilities: UtilitiesService) {}

  /** Copy to clipboard */
  public copyToClipboard(text: string) {
    this.utilities.copyToClipboard(text);
  }

  ngOnInit() {
    this.updateSnippet();
  }
}
