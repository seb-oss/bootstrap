import { Injectable } from '@angular/core';
import * as Detect from 'mobile-detect';

@Injectable({
  providedIn: 'root'
})
export class MobileDetectService {

  constructor() { }

  _nativeWindow: Window = window;

  get nativeWindow() {
    return this._nativeWindow;
  }

  isMobile(): boolean {
    const md = new Detect(this.nativeWindow.navigator.userAgent);
    return !!md.mobile();
  }
}
