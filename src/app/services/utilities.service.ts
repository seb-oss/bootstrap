import { Injectable } from '@angular/core';
import { WindowRef } from './window-ref.service';
import { ToastrService } from 'ngx-toastr';
export const compareName = (a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
};

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  private window: Window;

  constructor(private windowRef: WindowRef, private toastr: ToastrService) {
    this.window = this.windowRef.nativeWindow;
  }

  /** Copy to clipboard */
  public copyToClipboard(text: string) {
    // @ts-ignore
    if (this.window.clipboardData && this.window.clipboardData.setData) {
      // IE specific code path to prevent textarea being shown while dialog is visible.
      // @ts-ignore
      return this.window.clipboardData.setData('Text', text);
    } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
      const textarea = document.createElement('textarea');
      textarea.textContent = text;
      textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in MS Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        const copy = document.execCommand('copy'); // Security exception may be thrown by some browsers.
        this.toastr.success('Snippet successfully copied!', null, { timeOut: 3000 });
        return copy;
      } catch (ex) {
        console.warn('Copy to clipboard failed.', ex);
        this.toastr.error('Failed to copy snippet!', null, { timeOut: 3000 });

        return false;
      } finally {
        document.body.removeChild(textarea);
        // setTimeout(() => this.showCopyNotice = false);
      }
    }
  }
}
