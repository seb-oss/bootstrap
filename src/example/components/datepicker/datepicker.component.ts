import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html'
})
export class DatepickerComponent {

  sources = {
    simple: [{
      name: 'datepicker.component.html',
      src: require('!raw-loader!./datepicker-simple/datepicker-simple.component.html'),
      lang: 'markup'
    }, {
      name: 'datepicker.component.ts',
      src: require('!raw-loader!./datepicker-simple/datepicker-simple.component.ts'),
      lang: 'typescript'
    }],
    input: [{
      name: 'datepicker.component.html',
      src: require('!raw-loader!./datepicker-input/datepicker-input.component.html'),
      lang: 'markup'
    }, {
      name: 'datepicker.component.ts',
      src: require('!raw-loader!./datepicker-input/datepicker-input.component.ts'),
      lang: 'typescript'
    }]
  }



}
