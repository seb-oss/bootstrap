import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  scrollPosition: number;

  scroll($event) {
    this.scrollPosition = $event.target.scrollingElement.scrollTop;
  }
}
