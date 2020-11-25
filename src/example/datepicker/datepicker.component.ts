import { Component, OnInit } from '@angular/core';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import {MobileDetectService} from '../services/mobile-detect.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  constructor(private mobileDetectService: MobileDetectService) { }
  options: Array<string> = ['First', 'Second', 'Third', 'Forth']; // available options, used by dropdown and multi-select example
  selected: string; // selected option for dropdown example
  selectedMulti: Array<string> = []; // selected options for multi-select example
  useContainerBody = true;

  /**
   * Select
   * @Param {string} option - option to be selected/deselected
   */
  select(option: string) {

    // get index of option in selected options
    const index = this.selectedMulti.indexOf(option);

    // if option has index i.e. exists in array...
    if (index !== -1) {

      // ...remove it from the array
      this.selectedMulti.splice(index, 1);

    } else {
      // ...if not add it to the array
      this.selectedMulti.push(option);
    }

  }

  /**
   * Select all - selects all options
   */
  selectAll() {
    this.selectedMulti = [...this.options];
  }

  /**
   * Deselect all - deselects all options
   */
  deselectAll() {
    this.selectedMulti = [];
  }

  toggleBodyLock(show: boolean, templateRef: any) {
    if (this.mobileDetectService.isMobile()) {
      if (show) {
        disableBodyScroll(templateRef);
      } else {
        enableBodyScroll(templateRef);
      }
    }
  }

  toggleContainer(value: boolean) {
    this.useContainerBody = !this.useContainerBody;
  }

  ngOnInit(): void {
  }

}
