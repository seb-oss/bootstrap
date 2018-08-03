import {
  Component,
  Input
} from '@angular/core';
import {CodeHighlightService} from '../../services/code-highlight.service';
import {Snippet} from '../../interfaces/snippet';
import {of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs/operators';
import {WindowRef} from '../../services/window-ref.service';

@Component({
  selector: 'app-code',
  template: `
    <button class="btn btn-link btn-copy" (click)="copyToClipboard(code)" *ngIf="code">Copy</button>
    <pre class="pb-3 m-0 language-{{snippet?.lang}}">
      <code class="language-{{snippet?.lang}}" [innerHTML]="parsedSnippet"></code>
    </pre>`,
  styleUrls: ['./code.component.scss']
})
export class CodeComponent {
  get snippet(): Snippet {
    return this._snippet;
  }

  @Input() set snippet(snippet: Snippet) {
    this._snippet = {
      ...snippet,
      code: snippet.src.indexOf('http') !== -1 ? this.getSourceCode(snippet.src) : of(require('!raw-loader!../../../components/'+snippet.src))
    };
    this.snippet.code
      .pipe(
        take(1)
      )
      .subscribe(code => {
        this.highlight(code, this.snippet.lang);
        this.code = code;
      }
    )
  }

  private _snippet:Snippet;
  public code: string;
  public parsedSnippet: string;
  private window: Window;

  constructor(private _codeHighlight: CodeHighlightService,
              private http: HttpClient,
              private windowRef: WindowRef) {
    this.window = this.windowRef.nativeWindow;
  }

  highlight(code: string, lang: string) {
    this.parsedSnippet = this._codeHighlight.highlight(
      code,
      lang
    );
  }

  getSourceCode(url:string) {
    return this.http.get(url, {responseType: 'text'});
  }

  /**
   * Copy to clipboard
   * @param {string} text - text to be copied to clipboard.
   */
  public copyToClipboard = function(text: string) {
      if (this.window.clipboardData && this.window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return this.window.clipboardData.setData("Text", text);

      } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        let textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
          return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
          console.warn("Copy to clipboard failed.", ex);
          return false;
        } finally {
          document.body.removeChild(textarea);
        }
      }
  };
}
