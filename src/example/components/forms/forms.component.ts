import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: []
})
export class FormsComponent {

  constructor() { }

    fileToUpload: File = null;
    fileName = 'Choose file';

    options: Array<string> = ['First', 'Second', 'Third', 'Forth']; // available options, used by dropdown and multi-select example
    selected: string; // selected option for dropdown example

    personalIdentityNumber = '';
    password = '';
    Math: Math = Math;
    passwordStrength = 'Enter desired password';
    // password.length <= 3 ? 'Weak' : password.length <= 6 ? 'Okay': password.length <= 9 'Strong':''



    handleFileInput(files: FileList) {
        this.fileToUpload = files.item(0);
        this.fileName = this.fileToUpload.name;
    }
    onValueChange() {
        this.personalIdentityNumber = this.personalIdentityNumber.replace(/\D+/g, '').slice(0, 12);
    }

    onKeyDownPreventNonDigits(event: any) {
        const inputChar = event.key;
        const pattern = /\D+/g;
        const allowedKeyCodes = [8, 37, 39, 46];

        const selectedChars = event.currentTarget.valueOf().selectionEnd - event.currentTarget.selectionStart;
        if ((allowedKeyCodes.indexOf(event.keyCode) < 0 && !event.ctrlKey && pattern.test(inputChar) && selectedChars === 0)
            || (this.personalIdentityNumber && this.personalIdentityNumber.length > 11 && !event.ctrlKey && selectedChars === 0 && allowedKeyCodes.indexOf(event.keyCode) < 0)) {
            event.preventDefault();
        }
    }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'validationMessage'
})
export class ValidationMessagePipe implements PipeTransform {

    transform(errors: Object): string {
        const ERROR = Object.keys(errors)[0];
        if (ERROR === 'required') {
            return 'Required, please enter your personal id.'
        } else if (ERROR === 'toShort') {
            return 'To short, please enter complete personal id with 12 digits.'
        } else if (ERROR === 'incorrect') {
            return 'Incorrect personal identity number.'
        }
        return ERROR
    }

}

import {Directive} from '@angular/core';
import {AbstractControl, ValidatorFn, NG_VALIDATORS, Validator, Validators} from '@angular/forms';
import * as sweValidation from 'swe-validation';

/** Check that the entered personal identity number is valid */
export function personalIdentityNumberValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const personalIdentityNumber = control.value;

        // don't check if personal id is omitted
        if (!personalIdentityNumber) {
            return null;
        }

        // make sure id when entered is at least 12 digits long
        if (personalIdentityNumber.toString().length < 12) {
            return {toShort: {personalIdentityNumber}};
        }

        // check if personal id entered is valid using luhn algorithm (https://sv.wikipedia.org/wiki/luhn-algoritmen)
        const personalId = sweValidation.ssn(personalIdentityNumber);
        return !personalId.isValid ? {incorrect: {personalIdentityNumber}} : null;
    };
}

@Directive({
    selector: '[personalIdentityNumberCheck]',
    providers: [{provide: NG_VALIDATORS, useExisting: PersonalIdentityNumberDirective, multi: true}]
})
export class PersonalIdentityNumberDirective implements OnInit, Validator {
    private valFn = Validators.nullValidator;

    ngOnInit() {
        this.valFn = personalIdentityNumberValidator();
    }
    validate(control: AbstractControl): {[key: string]: any} {
        return this.valFn(control);
    }
}