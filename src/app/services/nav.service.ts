import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  $isActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.$isActive.next(false);
  }

  toggleState(state?: boolean) {
    this.$isActive.next(state || !this.$isActive.value);
  }

  getState(): Observable<boolean> {
    return this.$isActive.asObservable();
  }
}
