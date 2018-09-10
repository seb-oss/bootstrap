import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-modals',
    templateUrl: './modals.component.html',
    styles: [`
        #modalExample .modal {
            opacity: 1;
            display: block;
            position: initial;
        }
        .modal.active {
            display: block;
        }
    `]
})
export class ModalsComponent implements OnInit {

    modal = false;
    slideModal = false;
    takeOverModal = false;
    constructor() { }

    ngOnInit() {
    }

}
