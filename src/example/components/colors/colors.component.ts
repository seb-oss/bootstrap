import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-colors',
    templateUrl: './colors.component.html',
    styles: []
})
export class ColorsComponent implements OnInit {

    constructor() { }
    colors: Array<any> = [{
        name: 'primary',
        textColor: 'white'
    }, {
        name: 'secondary',
        textColor: 'dark'
    }, {
        name: 'info',
        textColor: 'dark'
    }, {
        name: 'success',
        textColor: 'white'
    }, {
        name: 'warning',
        textColor: 'dark'
    }, {
        name: 'danger',
        textColor: 'white'
    }, {
        name: 'light',
        textColor: 'dark'
    }, {
        name: 'dark',
        textColor: 'white'
    }, {
        name: 'white',
        textColor: 'dark'
    }];

    ngOnInit() {
    }

}
