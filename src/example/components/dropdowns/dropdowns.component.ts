import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styles: []
})
export class DropdownsComponent implements OnInit {

  constructor() { }

    options: Array<string> = ['First', 'Second', 'Third', 'Forth']; // available options, used by dropdown and multi-select example
    selected: string; // selected option for dropdown example
    selectedMulti: Array<string> = []; // selected options for multi-select example

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

    ngOnInit() {
    }

}
