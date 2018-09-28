import { Component } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-simple',
  templateUrl: './datepicker-simple.component.html',
  styles: []
})
export class DatepickerSimpleComponent {

  model: NgbDateStruct;
  date: {year: number, month: number};
  constructor(private calendar: NgbCalendar) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
