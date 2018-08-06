import { Component } from '@angular/core';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  scrollPosition: number;
  travis_build_number: string = environment.travis_build_number;
  version: string = environment.version;

  scroll($event) {
    this.scrollPosition = $event.target.scrollingElement.scrollTop;
  }
}
