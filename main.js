(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/lib/package.json":
/*!*******************************!*\
  !*** ./dist/lib/package.json ***!
  \*******************************/
/*! exports provided: name, version, description, main, scripts, repository, publishConfig, author, license, bugs, homepage, dependencies, default */
/***/ (function(module) {

module.exports = {"name":"@sebgroup/bootstrap","version":"0.0.0-semantically-released","description":"A standalone bootstrap theme for SEB","main":"scss/bootstrap.scss","scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"repository":{"type":"git","url":"git+https://github.com/sebgroup/bootstrap.git"},"publishConfig":{"registry":"https://registry.npmjs.org/","access":"public"},"author":"Robert Hjalmers","license":"Apache-2.0","bugs":{"url":"https://github.com/sebgroup/bootstrap/issues"},"homepage":"https://sebgroup.github.io/bootstrap/","dependencies":{"@sebgroup/fonts":"^1.0.0"}};

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/alerts/alerts.component.ts":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/alerts/alerts.component.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-alerts',\n  templateUrl: './alerts.component.html',\n  styles: []\n})\nexport class AlertsComponent implements OnInit {\n\n  active = true;\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/breadcrumbs/breadcrumbs.component.ts":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/breadcrumbs/breadcrumbs.component.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-breadcrumbs',\n  templateUrl: './breadcrumbs.component.html',\n  styles: []\n})\nexport class BreadcrumbsComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/buttons/buttons-main/buttons-main.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/buttons/buttons-main/buttons-main.component.ts ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-buttons-main',\n  templateUrl: './buttons-main.component.html',\n  styles: []\n})\nexport class ButtonsMainComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/buttons/buttons-main/index.md":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/buttons/buttons-main/index.md ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/buttons/buttons-sizes/buttons-sizes.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/buttons/buttons-sizes/buttons-sizes.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/buttons/buttons-sizes/buttons-sizes.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/buttons/buttons-sizes/buttons-sizes.component.ts ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-buttons-sizes',\n  templateUrl: './buttons-sizes.component.html',\n  styleUrls: ['./buttons-sizes.component.scss']\n})\nexport class ButtonsSizesComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/buttons/buttons.component.scss":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/buttons/buttons.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/buttons/buttons.component.ts":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/buttons/buttons.component.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\nimport * as testHtml from '!raw-loader!./test.html';\nimport { of } from 'rxjs';\n\n@Component({\n  selector: 'app-buttons',\n  templateUrl: './buttons.component.html',\n  styleUrls: ['./buttons.component.scss']\n})\nexport class ButtonsComponent implements OnInit {\n\n  SNIPPETS = {\n    main: [\n      {\n        name: 'markup',\n        lang: 'markup',\n        src: 'buttons/buttons-main/buttons-main.component.html'\n      },{\n        lang: 'typescript',\n        src: 'buttons/buttons-main/buttons-main.component.ts'\n      },\n      {\n        lang: 'typescript',\n        src: 'https://raw.githubusercontent.com/ng-bootstrap/ng-bootstrap/master/demo/src/app/components/buttons/demos/checkbox/buttons-checkbox.ts'\n      }\n    ],\n    sizes: [\n      {\n        name: 'markup',\n        lang: 'markup',\n        src: 'buttons/buttons-sizes/buttons-sizes.component.html'\n      }\n    ]\n  };\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.ts ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-checkboxes-and-slide-toggles',\n  templateUrl: './checkboxes-and-slide-toggles.component.html'\n})\nexport class CheckboxesAndSlideTogglesComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/forms/forms.component.ts":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/forms/forms.component.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import {Component, OnInit} from '@angular/core';\n\n@Component({\n  selector: 'app-forms',\n  templateUrl: './forms.component.html',\n  styles: []\n})\nexport class FormsComponent {\n\n  constructor() { }\n\n    fileToUpload: File = null;\n    fileName = 'Choose file';\n\n    options: Array<string> = ['First', 'Second', 'Third', 'Forth']; // available options, used by dropdown and multi-select example\n    selected: string; // selected option for dropdown example\n\n    personalIdentityNumber = '';\n    password = '';\n    Math: Math = Math;\n    passwordStrength = 'Enter desired password';\n    // password.length <= 3 ? 'Weak' : password.length <= 6 ? 'Okay': password.length <= 9 'Strong':''\n\n\n\n    handleFileInput(files: FileList) {\n        this.fileToUpload = files.item(0);\n        this.fileName = this.fileToUpload.name;\n    }\n    onValueChange() {\n        this.personalIdentityNumber = this.personalIdentityNumber.replace(/\\D+/g, '').slice(0, 12);\n    }\n\n    onKeyDownPreventNonDigits(event: any) {\n        const inputChar = event.key;\n        const pattern = /\\D+/g;\n        const allowedKeyCodes = [8, 37, 39, 46];\n\n        const selectedChars = event.currentTarget.valueOf().selectionEnd - event.currentTarget.selectionStart;\n        if ((allowedKeyCodes.indexOf(event.keyCode) < 0 && !event.ctrlKey && pattern.test(inputChar) && selectedChars === 0)\n            || (this.personalIdentityNumber && this.personalIdentityNumber.length > 11 && !event.ctrlKey && selectedChars === 0 && allowedKeyCodes.indexOf(event.keyCode) < 0)) {\n            event.preventDefault();\n        }\n    }\n\n}\n\nimport { Pipe, PipeTransform } from '@angular/core';\n\n@Pipe({\n    name: 'validationMessage'\n})\nexport class ValidationMessagePipe implements PipeTransform {\n\n    transform(errors: Object): string {\n        const ERROR = Object.keys(errors)[0];\n        if (ERROR === 'required') {\n            return 'Required, please enter your personal id.'\n        } else if (ERROR === 'toShort') {\n            return 'To short, please enter complete personal id with 12 digits.'\n        } else if(ERROR === 'incorrect') {\n            return 'Incorrect personal identity number.'\n        }\n        return ERROR\n    }\n\n}\n\nimport {Directive} from '@angular/core';\nimport {AbstractControl, ValidatorFn, NG_VALIDATORS, Validator, Validators} from '@angular/forms';\nimport * as sweValidation from 'swe-validation';\n\n/** Check that the entered personal identity number is valid */\nexport function personalIdentityNumberValidator(): ValidatorFn {\n    return (control: AbstractControl): {[key: string]: any} => {\n        const personalIdentityNumber = control.value;\n\n        // don't check if personal id is omitted\n        if (!personalIdentityNumber) {\n            return null;\n        }\n\n        // make sure id when entered is at least 12 digits long\n        if (personalIdentityNumber.toString().length < 12) {\n            return {'toShort': {personalIdentityNumber}};\n        }\n\n        // check if personal id entered is valid using luhn algorithm (https://sv.wikipedia.org/wiki/luhn-algoritmen)\n        const personalId = sweValidation.ssn(personalIdentityNumber);\n        return !personalId.isValid ? {'incorrect': {personalIdentityNumber}} : null;\n    };\n}\n\n@Directive({\n    selector: '[personalIdentityNumberCheck]',\n    providers: [{provide: NG_VALIDATORS, useExisting: PersonalIdentityNumberDirective, multi: true}]\n})\nexport class PersonalIdentityNumberDirective implements OnInit, Validator {\n    private valFn = Validators.nullValidator;\n\n    ngOnInit() {\n        this.valFn = personalIdentityNumberValidator();\n    }\n    validate(control: AbstractControl): {[key: string]: any} {\n        return this.valFn(control);\n    }\n}"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/icons/icons.component.ts":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/icons/icons.component.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\nimport { faArrowAltRight } from '@fortawesome/pro-light-svg-icons';\n\n@Component({\n  selector: 'app-icons',\n  templateUrl: './icons.component.html',\n  styles: []\n})\nexport class IconsComponent implements OnInit {\n\n    iconSearchString = '';\n    icons: Array<string> = [\n        'archive',\n        'lock-alt',\n        'unlock-alt',\n        'cog',\n        'print',\n        'calendar-alt',\n        'phone',\n        'mobile',\n        'tablet',\n        'desktop-alt',\n        'envelope',\n        'share-alt',\n        'user-alt',\n        'comment-alt',\n        'comments',\n        'link',\n        'external-link-square',\n        'credit-card',\n        'balance-scale',\n        'bookmark',\n        'book',\n        'arrow-left',\n        'arrow-right',\n        'arrow-up',\n        'arrow-down',\n        'arrow-to-bottom',\n        'long-arrow-left',\n        'long-arrow-right',\n        'long-arrow-up',\n        'long-arrow-down',\n        'chevron-left',\n        'chevron-right',\n        'chevron-up',\n        'chevron-down',\n        'sync',\n        'at',\n        'percent',\n        'star',\n        'heart',\n        'plus',\n        'minus',\n        'exclamation-triangle',\n        'copy',\n        'upload',\n        'calculator',\n        'home',\n        'clock',\n        'filter',\n        'search',\n        'edit',\n        'sign-in',\n        'sign-out',\n        'sliders-h',\n        'sliders-v',\n        'bell',\n        'undo',\n        'info-circle',\n        'reply',\n        'reply-all',\n        'trash-alt',\n        'times'\n    ];\n    filteredIcons: Array<string> = this.icons;\n    faArrowAltRight = faArrowAltRight;\n\n\n    filterIcons(search: string) {\n        this.filteredIcons = this.icons.filter(icon => icon.indexOf(search) !== -1);\n    }\n  constructor() { }\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/icons/icons.md":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/icons/icons.md ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "In order to install the pro version of Font Awesome which includes the light theme that we want to use, you need to configure the @fortawesome scope to use their Pro NPM registry.\n```\nnpm config set \"@fortawesome:registry\" https://npm.fontawesome.com/\nnpm config set \"//npm.fontawesome.com/:_authToken\" TOKEN\n```\n\nOnce the configuration is updated you can proceed and install Font Awesome\n```\nnpm install @fortawesome/angular-fontawesome --save\nnpm install @fortawesome/pro-light-svg-icons --save\nnpm install @fortawesome/fontawesome-svg-core --save\nnpm install @fortawesome/fontawesome-pro --save-dev\n```\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/input-group/input-group.component.ts":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/input-group/input-group.component.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-input-group',\n  templateUrl: './input-group.component.html'\n})\nexport class InputGroupComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/list-group/list-group.component.ts":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/list-group/list-group.component.ts ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-list-group',\n  templateUrl: './list-group.component.html',\n  styles: []\n})\nexport class ListGroupComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/loaders/loaders.component.ts":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/loaders/loaders.component.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-loaders',\n  templateUrl: './loaders.component.html',\n  styles: []\n})\nexport class LoadersComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/tables/table-bordered/table-bordered.component.ts":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/tables/table-bordered/table-bordered.component.ts ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-table-bordered',\n  templateUrl: './table-bordered.component.html',\n  styles: []\n})\nexport class TableBorderedComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/tables/table-hoverable/table-hoverable.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/tables/table-hoverable/table-hoverable.component.ts ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-table-hoverable',\n  templateUrl: './table-hoverable.component.html',\n  styles: []\n})\nexport class TableHoverableComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/tables/table-small/table-small.component.ts":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/tables/table-small/table-small.component.ts ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-table-small',\n  templateUrl: './table-small.component.html',\n  styles: []\n})\nexport class TableSmallComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/tables/table-standard/table-standard.component.ts":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/tables/table-standard/table-standard.component.ts ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-table-standard',\n  templateUrl: './table-standard.component.html',\n  styles: []\n})\nexport class TableStandardComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/tables/table-striped/table-striped.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/tables/table-striped/table-striped.component.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-table-striped',\n  templateUrl: './table-striped.component.html',\n  styles: []\n})\nexport class TableStripedComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/tables/tables.component.ts":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/tables/tables.component.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-tables',\n  templateUrl: './tables.component.html'\n})\nexport class TablesComponent implements OnInit {\n    SNIPPETS = {\n        standard: [\n            {\n                name: 'markup',\n                lang: 'markup',\n                src: 'tables/table-standard/table-standard.component.html'\n            }\n        ],\n        striped: [{\n            name: 'markup',\n            lang: 'markup',\n            src: 'tables/table-striped/table-striped.component.html'\n        }],\n        bordered: [{\n            name: 'markup',\n            lang: 'markup',\n            src: 'tables/table-bordered/table-bordered.component.html'\n        }],\n        hoverable: [{\n            name: 'markup',\n            lang: 'markup',\n            src: 'tables/table-hoverable/table-hoverable.component.html'\n        }],\n        small: [{\n            name: 'markup',\n            lang: 'markup',\n            src: 'tables/table-small/table-small.component.html'\n        }]\n    };\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/tabs/tabs.component.ts":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/tabs/tabs.component.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'app-tabs',\n  templateUrl: './tabs.component.html',\n  styles: []\n})\nexport class TabsComponent implements OnInit {\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _example_components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../example/components/buttons/buttons.component */ "./src/example/components/buttons/buttons.component.ts");
/* harmony import */ var _example_components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../example/components/alerts/alerts.component */ "./src/example/components/alerts/alerts.component.ts");
/* harmony import */ var _example_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../example/components/tabs/tabs.component */ "./src/example/components/tabs/tabs.component.ts");
/* harmony import */ var _example_components_tables_tables_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../example/components/tables/tables.component */ "./src/example/components/tables/tables.component.ts");
/* harmony import */ var _example_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../example/components/breadcrumbs/breadcrumbs.component */ "./src/example/components/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _example_components_forms_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../example/components/forms/forms.component */ "./src/example/components/forms/forms.component.ts");
/* harmony import */ var _example_components_checkboxes_and_slide_toggles_checkboxes_and_slide_toggles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component */ "./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.ts");
/* harmony import */ var _example_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../example/components/icons/icons.component */ "./src/example/components/icons/icons.component.ts");
/* harmony import */ var _example_components_input_group_input_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../example/components/input-group/input-group.component */ "./src/example/components/input-group/input-group.component.ts");
/* harmony import */ var _example_components_list_group_list_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../example/components/list-group/list-group.component */ "./src/example/components/list-group/list-group.component.ts");
/* harmony import */ var _example_components_loaders_loaders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../example/components/loaders/loaders.component */ "./src/example/components/loaders/loaders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    //{ path: 'typography', component: TypographyComponent },
    { path: 'tables', component: _example_components_tables_tables_component__WEBPACK_IMPORTED_MODULE_5__["TablesComponent"] },
    //{ path: 'colors', component: ColorsComponent },
    //{ path: 'modals', component: ModalsComponent },
    //{ path: 'cards', component: CardsComponent },
    { path: 'buttons', component: _example_components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__["ButtonsComponent"] },
    { path: 'input-group', component: _example_components_input_group_input_group_component__WEBPACK_IMPORTED_MODULE_10__["InputGroupComponent"] },
    { path: 'forms', component: _example_components_forms_forms_component__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"] },
    { path: 'checkboxes-and-slide-toggles', component: _example_components_checkboxes_and_slide_toggles_checkboxes_and_slide_toggles_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxesAndSlideTogglesComponent"] },
    //{ path: 'pagination', component: PaginationComponent },
    { path: 'tabs', component: _example_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_4__["TabsComponent"] },
    { path: 'alerts', component: _example_components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_3__["AlertsComponent"] },
    { path: 'breadcrumbs', component: _example_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsComponent"] },
    //{ path: 'tooltips', component: TooltipsComponent },
    //{ path: 'example-page', component: ExamplePageComponent },
    //{ path: 'about', component: AboutComponent },
    //{ path: 'dropdowns', component: DropdownsComponent },
    //{ path: 'accordion', component: AccordionComponent },
    //{ path: 'grid', component: GridComponent },
    { path: 'icons', component: _example_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_9__["IconsComponent"] },
    { path: 'list-group', component: _example_components_list_group_list_group_component__WEBPACK_IMPORTED_MODULE_11__["ListGroupComponent"] },
    { path: 'loaders', component: _example_components_loaders_loaders_component__WEBPACK_IMPORTED_MODULE_12__["LoadersComponent"] },
    //{ path: 'wizard', component: WizardExampleComponent },
    { path: '**', redirectTo: 'about' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mobile-navigation></app-mobile-navigation>\n<app-side-navigation></app-side-navigation>\n<app-header></app-header>\n<div class=\"content\" (window:scroll)=\"scroll($event)\">\n  <!--<app-sub-header [scrollPosition]=\"scrollPosition\"></app-sub-header>-->\n  <div class=\"row\">\n    <div class=\"col mx-auto mt-5 mt-lg-0 pt-3 pt-lg-0\" style=\"max-width: 920px\">\n      <router-outlet></router-outlet>\n      <div class=\"py-3 text-center\">Version: <a href=\"{{'https://github.com/sebgroup/bootstrap/releases/tag/v' + version}}\" target=\"_blank\" class=\"mr-3\">{{version}}</a>Build: {{travis_build_number}} </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 992px) {\n  .content {\n    margin-left: 256px; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.travis_build_number = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].travis_build_number;
        this.version = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].version;
    }
    AppComponent.prototype.scroll = function ($event) {
        this.scrollPosition = $event.target.scrollingElement.scrollTop;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _example_example_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../example/example.module */ "./src/example/example.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/side-navigation/side-navigation.component */ "./src/app/components/side-navigation/side-navigation.component.ts");
/* harmony import */ var _components_mobile_navigation_mobile_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mobile-navigation/mobile-navigation.component */ "./src/app/components/mobile-navigation/mobile-navigation.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_5__["SideNavigationComponent"],
                _components_mobile_navigation_mobile_navigation_component__WEBPACK_IMPORTED_MODULE_6__["MobileNavigationComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _example_example_module__WEBPACK_IMPORTED_MODULE_3__["ExampleModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"col-12 col-md-auto d-lg-none\">\n  <div class=\"row justify-content-between justify-content-lg-end h-100\">\n  <div class=\"col col-md-auto d-none d-md-flex brand\">\n    <div class=\"row mobile-header\">\n      <div class=\"col align-self-center text-center\">\n        <i class=\"fal fa-home fa-1x d-block\"></i>\n        <div>Menu</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col d-md-none px-0\" *ngIf=\"activeTab\">\n    <div class=\"row mobile-header h-100 align-items-center text-center no-gutters\">\n      <div class=\"col\" ngClass=\"{{activeTab === 'start' ? 'active':''}}\" (click)=\"showMenu('start')\"><i class=\"fal fa-home fa-1x d-block\"></i>Start</div>\n      <div class=\"col\" ngClass=\"{{activeTab === 'components' ? 'active':''}}\" (click)=\"showMenu('components')\"><i class=\"fal fa-bookmark fa-1x d-block\"></i>Components</div>\n    </div>\n  </div>\n    <div class=\"col d-none d-md-flex bg-white border-bottom sticky-header\" [@scrollAnimation]=\"stickyHeader\">\n      <div class=\"row align-items-center h-100\">\n        <div class=\"col\">\n          <h5 class=\"mb-0\">Section header</h5>\n          <ol class=\"breadcrumb mb-0 pl-0 py-0\">\n            <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n            <li class=\"breadcrumb-item active\">Section header</li>\n          </ol>\n        </div>\n        <div class=\"col-auto\">\n          <div class=\"card-menu-control\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  height: 56px;\n  position: fixed;\n  z-index: 2;\n  left: 0; }\n\n.brand, .profile, .mobile-header {\n  background: #333;\n  color: #fff;\n  height: 56px; }\n\n.seb-logo {\n  height: 56px;\n  width: 56px; }\n\n@media (min-width: 992px) {\n  header {\n    width: calc(100% - 256px);\n    left: 256px; } }\n\n.mobile-header .col {\n  padding-top: .65rem;\n  padding-bottom: .35rem; }\n\n.mobile-header .active {\n  background: #60cd18; }\n\n.dropdown-toggle {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  cursor: pointer; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n.dropdown.show {\n  background: #41B0EE; }\n\n.dropdown-item-link {\n  padding: 0.5rem 1.5rem; }\n\n.breadcrumb-container {\n  height: 56px; }\n\n.dropdown-header {\n  color: #343434;\n  background: #dedede; }\n\n.dropdown-menu .dropdown-header:first-child {\n  border-radius: 4px 4px 0 0; }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(menuService) {
        this.menuService = menuService;
        this.activeTab = 'components';
        this._scrollPosition = 0;
        this.stickyHeader = 'hide';
    }
    Object.defineProperty(HeaderComponent.prototype, "scrollPosition", {
        get: function () {
            return this._scrollPosition;
        },
        set: function (value) {
            this._scrollPosition = value;
            if (this.scrollPosition >= 100) {
                this.stickyHeader = 'show';
            }
            else {
                this.stickyHeader = 'hide';
            }
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.getMenu = function () {
    };
    HeaderComponent.prototype.showMenu = function (tab) {
        this.menuService.switchTab(tab);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], HeaderComponent.prototype, "scrollPosition", null);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('scrollAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1,
                        transform: 'translateY(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: 'translateY(-100px)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/mobile-navigation/mobile-navigation.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/mobile-navigation/mobile-navigation.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mobile-nav bg-light w-100\" *ngIf=\"($activeTab | async) && $activeState | async as mobileMenu\">\n  <div class=\"col d-md-none px-0\" *ngIf=\"$activeTab | async as activeTab\">\n    <!--<div [@slideOut]=\"menuState\" *ngIf=\"menuState === 'show'\" class=\"row no-gutters\" >\n      <div class=\"col\" ngClass=\"{{activeTab === 'overview' ? 'active':''}}\" (click)=\"showMenu('overview')\"><i class=\"fal fa-home fa-1x d-block\"></i>Overview</div>\n      <div class=\"col\" ngClass=\"{{activeTab === 'shortcuts' ? 'active':''}}\" (click)=\"showMenu('shortcuts')\"><i class=\"fal fa-bookmark fa-1x d-block\"></i>Shortcuts</div>\n      <div class=\"col\" ngClass=\"{{activeTab === 'actions' ? 'active':''}}\" (click)=\"showMenu('actions')\"><i class=\"fal fa-plus fa-1x d-block\"></i>Actions</div>\n      <div class=\"col\" ngClass=\"{{activeTab === 'browse' ? 'active':''}}\" (click)=\"showMenu('browse')\"><i class=\"fal fa-bars fa-1x d-block\"></i>Browse</div>\n      <div class=\"col\" ngClass=\"{{activeTab === 'profile' ? 'active':''}}\" (click)=\"showMenu('profile')\"><i class=\"fal fa-user fa-1x d-block\"></i>Profile</div>\n    </div>-->\n    <div class=\"mobile-breadcrumb  border-bottom\">\n      <div  class=\"d-flex align-items-center position-absolute w-100 h-100\">\n        <h5 class=\"text-center position-absolute w-100\" [@slideOut]=\"menuState\" *ngIf=\"menuState === 'show'\">{{activeTab}}</h5>\n      </div>\n      <div  class=\"d-flex align-items-center position-absolute w-100 h-100\">\n        <div class=\"pl-3 position-absolute\" style=\"z-index: 1;\" [@fadeIn]=\"menu2State\" *ngIf=\"menu2State === 'show'\" ><button class=\"btn btn-link\" (click)=\"menu2State = 'hide';menuState = 'show';\"><i class=\"fal fa-chevron-left mr-2\"></i>Back</button></div>\n        <h5 class=\"text-center position-absolute w-100\" [@slideIn]=\"menu2State\" *ngIf=\"menu2State === 'show'\" ><!--{{($nextState | async)?.labelId}}--></h5>\n      </div>\n    </div>\n  </div>\n  <div [@slideOut]=\"menuState\" *ngIf=\"menuState === 'show'\" class=\"position-absolute w-100\">\n    <div class=\"row border-bottom px-3 align-items-center\" *ngFor=\"let menuItem of mobileMenu\">\n      <div class=\"col\">\n        <a class=\"nav-link active\" routerLink=\"{{menuItem.path}}\" (click)=\"hideMobileNav()\">{{menuItem.name}}</a>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/mobile-navigation/mobile-navigation.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/mobile-navigation/mobile-navigation.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mobile-nav {\n  position: fixed;\n  top: 56px;\n  left: 0;\n  z-index: 1;\n  height: calc(100% - 56px); }\n  .mobile-nav .nav-link {\n    color: #343434;\n    padding: 1rem; }\n  @media (min-width: 768px) {\n  .mobile-nav {\n    display: none; } }\n  .mobile-header .col {\n  padding-top: .65rem;\n  padding-bottom: .35rem; }\n  .mobile-header .active {\n  background: #60cd18; }\n  header {\n  height: 56px;\n  position: fixed;\n  z-index: 2;\n  left: 0; }\n  .mobile-header {\n  background: #333;\n  color: #fff;\n  height: 56px;\n  position: fixed;\n  z-index: 2;\n  left: 0; }\n  .mobile-breadcrumb {\n  background: #fff;\n  height: 56px; }\n"

/***/ }),

/***/ "./src/app/components/mobile-navigation/mobile-navigation.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/mobile-navigation/mobile-navigation.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MobileNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNavigationComponent", function() { return MobileNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MobileNavigationComponent = /** @class */ (function () {
    function MobileNavigationComponent(menuService) {
        this.menuService = menuService;
        this.$activeState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.$activeMobile = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.components = [];
        this.menuState = 'show';
        this.menu2State = 'hide';
    }
    MobileNavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.$activeTab = this.menuService.$activeTab;
        this.$activeTab.subscribe(function (res) { return _this.loadMenu(res); });
    };
    MobileNavigationComponent.prototype.navigate = function (nextState, currentState) {
    };
    MobileNavigationComponent.prototype.loadMenu = function (tab) {
        if (tab === 'components') {
            this.$activeState = this.menuService.$menuItems;
            //this.$activeState = this.menuService.$menuItems;
        }
    };
    MobileNavigationComponent.prototype.hideMobileNav = function () {
        this.menuService.switchTab(null);
    };
    MobileNavigationComponent.prototype.animationDone = function ($event) {
        //this.$activeState.next(state);
        //this.menuState = 'show';
        //this.menu2State = 'hide';
        console.log($event);
    };
    MobileNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mobile-navigation',
            template: __webpack_require__(/*! ./mobile-navigation.component.html */ "./src/app/components/mobile-navigation/mobile-navigation.component.html"),
            styles: [__webpack_require__(/*! ./mobile-navigation.component.scss */ "./src/app/components/mobile-navigation/mobile-navigation.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0,
                        transform: 'translateX(-100px)'
                    }))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0,
                            transform: 'translateX(-100px)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('700ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                            transform: 'translateX(0)'
                        }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('700ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0,
                        transform: 'translateX(700px)'
                    }))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0,
                            transform: 'translateX(700px)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('700ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                            transform: 'translateX(0)'
                        }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0
                    }))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1
                        }))
                    ])
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], MobileNavigationComponent);
    return MobileNavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/side-navigation/side-navigation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/side-navigation/side-navigation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-nav\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-auto\">\n      <svg class=\"seb-logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\">\n        <path d=\"M0 0h800v800H0z\" fill=\"#60cd18\"/>\n        <path d=\"M290.55 348.35l-25.87 19.32c-12.22-10.51-28-12.57-36.65-12.57s-18 2.51-19.37 8.82c-1.38 6.12 4.31 10.88 14.08 13.53 11.14 3 21.29 5.66 36.92 10.12 23.24 6.63 39.13 16.69 39.13 40 0 32.14-28.53 48.8-66.75 48.8s-64.26-19.91-72-29.2l27.35-20.45c19.21 16.75 32.57 19.11 43.74 19.11 12.81 0 24.79-2.75 26.33-10 1.25-5.82-3.58-10.45-14.49-13-12.35-2.85-22.77-5.14-34.4-8.2-31.52-8.27-40.41-26.6-40.41-43.06 0-22.67 21.1-45.95 59.69-45.95 39.57 0 62.74 22.67 62.74 22.67m164.9-20.4H340.12V472.1h117.45v-33.24h-76.94v-23.22h53v-31.8h-53v-23h74.83zM310.27 505.37h9V294.63h-9zm162.45 0h9V294.63h-9zm29.8-33.27h92.64c24.77 0 44.84-14.93 44.84-38.84 0-18.65-12.21-31-29.32-36.47a9.6 9.6 0 0 0-1.66-.21 10.36 10.36 0 0 0 1.66-.29c9.8-3.88 20.66-14.21 20.66-31.8 0-22.31-19.74-36.54-44.1-36.54h-84.72zm40.7-114.17h32.36c7.45 0 13.48 5.88 13.48 12.64s-6 12.66-13.48 12.66h-32.36zm39.58 82.13h-39.58v-26.29h39.58a13.15 13.15 0 0 1 0 26.28z\" fill=\"#fff\"/>\n      </svg>\n    </div>\n    <div class=\"col align-self-center pl-3\">\n      <h5 class=\"text-white\">Bootstrap</h5>\n    </div>\n  </div>\n  <div class=\"container-fluid nav-wrapper pb-5\">\n    <div class=\"row mt-5 mb-3 align-items-center\">\n      <div class=\"col pl-0\">\n        <h6 class=\"text-white pl-3 mb-0\"><!--<i class=\"fal fa-list mr-2\"></i>-->Start</h6>\n      </div>\n    </div>\n    <nav class=\"nav flex-column\">\n      <ng-container *ngFor=\"let menuItem of $startItems | async\">\n        <div class=\"row align-items-center menu-item\" routerLinkActive=\"active\">\n          <div class=\"col pl-0\">\n            <a *ngIf=\"menuItem.path.substr(0, 8) !== 'https://'\" class=\"nav-link\" routerLink=\"{{menuItem.path}}\" (click)=\"menuItem.active = !menuItem.active\">{{menuItem.name}}</a>\n            <a *ngIf=\"menuItem.path.substr(0, 8) === 'https://'\" class=\"nav-link\" href=\"{{menuItem.path}}\" target=\"_blank\">{{menuItem.name}}</a>\n          </div>\n        </div>\n      </ng-container>\n    </nav>\n    <div class=\"row mt-5 mb-3 align-items-center\">\n      <div class=\"col pl-0\">\n        <h6 class=\"text-white pl-3 mb-0\"><!--<i class=\"fal fa-list mr-2\"></i>-->Base</h6>\n      </div>\n    </div>\n    <nav class=\"nav flex-column\">\n      <ng-container *ngFor=\"let menuItem of $baseItems | async\">\n        <div class=\"row align-items-center menu-item\" routerLinkActive=\"active\">\n          <div class=\"col pl-0\">\n            <a class=\"nav-link\" routerLink=\"{{menuItem.path}}\" (click)=\"menuItem.active = !menuItem.active\">{{menuItem.name}}</a>\n          </div>\n        </div>\n      </ng-container>\n    </nav>\n    <div class=\"row mt-5 mb-3 align-items-center\">\n      <div class=\"col pl-0\">\n        <h6 class=\"text-white pl-3 mb-0\"><!--<i class=\"fal fa-list mr-2\"></i>-->Components</h6>\n      </div>\n    </div>\n    <nav class=\"nav flex-column\">\n      <ng-container *ngFor=\"let menuItem of $menuItems | async\">\n        <div class=\"row align-items-center menu-item\" routerLinkActive=\"active\">\n          <div class=\"col pl-0\">\n            <a class=\"nav-link\" routerLink=\"{{menuItem.path}}\" (click)=\"menuItem.active = !menuItem.active\">{{menuItem.name}}</a>\n          </div>\n        </div>\n      </ng-container>\n    </nav>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/side-navigation/side-navigation.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/side-navigation/side-navigation.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-nav {\n  display: none; }\n\n@media (min-width: 992px) {\n  .side-nav {\n    display: block;\n    width: 256px;\n    background: #333;\n    height: 100vh;\n    position: fixed;\n    z-index: 1;\n    left: 0; } }\n\n.seb-logo {\n  height: 56px;\n  width: 56px; }\n\n.nav-link {\n  color: #fff;\n  font-weight: normal; }\n\n.menu-item:hover {\n  background: rgba(96, 205, 24, 0.25);\n  /*.nav-link {\n    color: $dark;\n  }*/ }\n\n.menu-item.active {\n  background: #60cd18; }\n\n.menu-item.active .nav-link {\n    font-weight: 500; }\n\n.menu-item.active-parent .nav-link {\n  font-weight: 500; }\n\n.menu-item.active-parent .nav-link::after {\n    display: block;\n    content: \"\";\n    left: 0;\n    width: 5px;\n    background: #60cd18;\n    top: 0;\n    position: absolute;\n    height: 100%;\n    -webkit-animation: expand ease-out .2s;\n            animation: expand ease-out .2s;\n    transition: -webkit-transform .2s ease-in-out;\n    transition: transform .2s ease-in-out;\n    transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out; }\n\n.menu-item.active-match .nav-link {\n  font-weight: 500; }\n\n.nav-wrapper {\n  height: calc(100% - 56px); }\n\n.nav-wrapper:hover {\n    overflow-y: auto; }\n"

/***/ }),

/***/ "./src/app/components/side-navigation/side-navigation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/side-navigation/side-navigation.component.ts ***!
  \*************************************************************************/
/*! exports provided: SideNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationComponent", function() { return SideNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/menu.service */ "./src/app/services/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideNavigationComponent = /** @class */ (function () {
    function SideNavigationComponent(router, menuService) {
        this.router = router;
        this.menuService = menuService;
    }
    SideNavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).subscribe(function (event) {
            _this.activeRoute = event['urlAfterRedirects'];
        });
        this.$menuItems = this.menuService.getComponents();
        this.$startItems = this.menuService.getStartItems();
        this.$baseItems = this.menuService.getBaseItems();
    };
    SideNavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-navigation',
            template: __webpack_require__(/*! ./side-navigation.component.html */ "./src/app/components/side-navigation/side-navigation.component.html"),
            styles: [__webpack_require__(/*! ./side-navigation.component.scss */ "./src/app/components/side-navigation/side-navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]])
    ], SideNavigationComponent);
    return SideNavigationComponent;
}());



/***/ }),

/***/ "./src/app/services/menu.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/menu.service.ts ***!
  \******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuService = /** @class */ (function () {
    function MenuService() {
        this.$activeTab = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.$menuItems = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.start = [{
                name: 'About',
                path: '/about'
            }, {
                name: 'Issues',
                path: 'https://github.com/sebgroup/bootstrap/issues'
            }, {
                name: 'Wiki',
                path: 'https://github.com/sebgroup/bootstrap/wiki'
            }];
        this.base = [{
                name: 'Fonts and typography',
                path: '/typography'
            }, {
                name: 'Icons',
                path: '/icons'
            }];
        this.components = [{
                name: 'Alerts',
                path: '/alerts'
            }, {
                name: 'Breadcrumbs',
                path: '/breadcrumbs'
            }, {
                name: 'Tabs',
                path: '/tabs'
            }, {
                name: 'Forms',
                path: '/forms'
            }, {
                name: 'Checkboxes and slide toggles',
                path: '/checkboxes-and-slide-toggles'
            }, {
                name: 'Buttons',
                path: '/buttons'
            }, {
                name: 'Input group',
                path: '/input-group'
            }, {
                name: 'List group',
                path: '/list-group'
            }, {
                name: 'Dropdowns',
                path: '/dropdowns'
            }, {
                name: 'Cards',
                path: '/cards'
            }, {
                name: 'Tables',
                path: '/tables'
            }, {
                name: 'Modals',
                path: '/modals'
            }, {
                name: 'Pagination',
                path: '/pagination'
            }, {
                name: 'Tooltips',
                path: '/tooltips'
            }, {
                name: 'Accordion',
                path: '/accordion'
            }, {
                name: 'Loaders',
                path: '/loaders'
            }];
        //this.$activeTab.next('components');
        this.updateMenu('start');
    }
    MenuService.prototype.getMenu = function () {
        return this.$menuItems.asObservable();
    };
    MenuService.prototype.getStartItems = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.start);
    };
    MenuService.prototype.getBaseItems = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.base);
    };
    MenuService.prototype.getComponents = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.components);
    };
    MenuService.prototype.getActiveTab = function () {
        return this.$activeTab.asObservable();
    };
    MenuService.prototype.switchTab = function (tab) {
        this.$activeTab.next(tab);
        this.updateMenu(tab);
    };
    MenuService.prototype.updateMenu = function (menu) {
        if (menu === 'start') {
            this.$menuItems.next(this.start);
        }
        else {
            this.$menuItems.next(this.components);
        }
    };
    MenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    version: (function () {
        var version = '';
        try {
            version = __webpack_require__(/*! ../../dist/lib/package.json */ "./dist/lib/package.json").version;
        }
        catch (e) {
            version = 'n/a';
        }
        return version;
    })(),
    travis_build_number: '45'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/example/components sync recursive ./!./node_modules/raw-loader/index.js!./ ^\\.\\/.*$":
/*!************************************************************************!*\
  !*** ./src/example/components sync ./node_modules/raw-loader ^\.\/.*$ ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./alerts/alerts.component": "./node_modules/raw-loader/index.js!./src/example/components/alerts/alerts.component.ts",
	"./alerts/alerts.component.html": "./src/example/components/alerts/alerts.component.html",
	"./alerts/alerts.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/alerts/alerts.component.ts",
	"./breadcrumbs/breadcrumbs.component": "./node_modules/raw-loader/index.js!./src/example/components/breadcrumbs/breadcrumbs.component.ts",
	"./breadcrumbs/breadcrumbs.component.html": "./src/example/components/breadcrumbs/breadcrumbs.component.html",
	"./breadcrumbs/breadcrumbs.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/breadcrumbs/breadcrumbs.component.ts",
	"./buttons/buttons-main/buttons-main.component": "./node_modules/raw-loader/index.js!./src/example/components/buttons/buttons-main/buttons-main.component.ts",
	"./buttons/buttons-main/buttons-main.component.html": "./src/example/components/buttons/buttons-main/buttons-main.component.html",
	"./buttons/buttons-main/buttons-main.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/buttons/buttons-main/buttons-main.component.ts",
	"./buttons/buttons-main/index.md": "./node_modules/raw-loader/index.js!./src/example/components/buttons/buttons-main/index.md",
	"./buttons/buttons-sizes/buttons-sizes.component": "./node_modules/raw-loader/index.js!./src/example/components/buttons/buttons-sizes/buttons-sizes.component.ts",
	"./buttons/buttons-sizes/buttons-sizes.component.html": "./src/example/components/buttons/buttons-sizes/buttons-sizes.component.html",
	"./buttons/buttons-sizes/buttons-sizes.component.scss": "./node_modules/raw-loader/index.js!./src/example/components/buttons/buttons-sizes/buttons-sizes.component.scss",
	"./buttons/buttons-sizes/buttons-sizes.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/buttons/buttons-sizes/buttons-sizes.component.ts",
	"./buttons/buttons.component": "./node_modules/raw-loader/index.js!./src/example/components/buttons/buttons.component.ts",
	"./buttons/buttons.component.html": "./src/example/components/buttons/buttons.component.html",
	"./buttons/buttons.component.scss": "./node_modules/raw-loader/index.js!./src/example/components/buttons/buttons.component.scss",
	"./buttons/buttons.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/buttons/buttons.component.ts",
	"./checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component": "./node_modules/raw-loader/index.js!./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.ts",
	"./checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.html": "./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.html",
	"./checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.ts",
	"./forms/forms.component": "./node_modules/raw-loader/index.js!./src/example/components/forms/forms.component.ts",
	"./forms/forms.component.html": "./src/example/components/forms/forms.component.html",
	"./forms/forms.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/forms/forms.component.ts",
	"./icons/icons.component": "./node_modules/raw-loader/index.js!./src/example/components/icons/icons.component.ts",
	"./icons/icons.component.html": "./src/example/components/icons/icons.component.html",
	"./icons/icons.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/icons/icons.component.ts",
	"./icons/icons.md": "./node_modules/raw-loader/index.js!./src/example/components/icons/icons.md",
	"./input-group/input-group.component": "./node_modules/raw-loader/index.js!./src/example/components/input-group/input-group.component.ts",
	"./input-group/input-group.component.html": "./src/example/components/input-group/input-group.component.html",
	"./input-group/input-group.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/input-group/input-group.component.ts",
	"./list-group/list-group.component": "./node_modules/raw-loader/index.js!./src/example/components/list-group/list-group.component.ts",
	"./list-group/list-group.component.html": "./src/example/components/list-group/list-group.component.html",
	"./list-group/list-group.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/list-group/list-group.component.ts",
	"./loaders/loaders.component": "./node_modules/raw-loader/index.js!./src/example/components/loaders/loaders.component.ts",
	"./loaders/loaders.component.html": "./src/example/components/loaders/loaders.component.html",
	"./loaders/loaders.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/loaders/loaders.component.ts",
	"./tables/table-bordered/table-bordered.component": "./node_modules/raw-loader/index.js!./src/example/components/tables/table-bordered/table-bordered.component.ts",
	"./tables/table-bordered/table-bordered.component.html": "./src/example/components/tables/table-bordered/table-bordered.component.html",
	"./tables/table-bordered/table-bordered.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/tables/table-bordered/table-bordered.component.ts",
	"./tables/table-hoverable/table-hoverable.component": "./node_modules/raw-loader/index.js!./src/example/components/tables/table-hoverable/table-hoverable.component.ts",
	"./tables/table-hoverable/table-hoverable.component.html": "./src/example/components/tables/table-hoverable/table-hoverable.component.html",
	"./tables/table-hoverable/table-hoverable.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/tables/table-hoverable/table-hoverable.component.ts",
	"./tables/table-small/table-small.component": "./node_modules/raw-loader/index.js!./src/example/components/tables/table-small/table-small.component.ts",
	"./tables/table-small/table-small.component.html": "./src/example/components/tables/table-small/table-small.component.html",
	"./tables/table-small/table-small.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/tables/table-small/table-small.component.ts",
	"./tables/table-standard/table-standard.component": "./node_modules/raw-loader/index.js!./src/example/components/tables/table-standard/table-standard.component.ts",
	"./tables/table-standard/table-standard.component.html": "./src/example/components/tables/table-standard/table-standard.component.html",
	"./tables/table-standard/table-standard.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/tables/table-standard/table-standard.component.ts",
	"./tables/table-striped/table-striped.component": "./node_modules/raw-loader/index.js!./src/example/components/tables/table-striped/table-striped.component.ts",
	"./tables/table-striped/table-striped.component.html": "./src/example/components/tables/table-striped/table-striped.component.html",
	"./tables/table-striped/table-striped.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/tables/table-striped/table-striped.component.ts",
	"./tables/tables.component": "./node_modules/raw-loader/index.js!./src/example/components/tables/tables.component.ts",
	"./tables/tables.component.html": "./src/example/components/tables/tables.component.html",
	"./tables/tables.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/tables/tables.component.ts",
	"./tabs/tabs.component": "./node_modules/raw-loader/index.js!./src/example/components/tabs/tabs.component.ts",
	"./tabs/tabs.component.html": "./src/example/components/tabs/tabs.component.html",
	"./tabs/tabs.component.ts": "./node_modules/raw-loader/index.js!./src/example/components/tabs/tabs.component.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/example/components sync recursive ./!./node_modules/raw-loader/index.js!./ ^\\.\\/.*$";

/***/ }),

/***/ "./src/example/components/alerts/alerts.component.html":
/*!*************************************************************!*\
  !*** ./src/example/components/alerts/alerts.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"alerts\"><h2 class=\"my-3\">Alerts</h2></a>\n<div class=\"card mb-4\">\n  <div class=\"card-body\">\n    <h5>When to use alerts?</h5>\n    <p>Alerts are available for any length of text and can be used for more than traditional alerts. Ideally they should be used when we want content or information to stand out, be separated from the \"normal\" state, highlight a change, make the user aware of important information or simply to convey the response from an action.</p>\n    <h5>What context should I use?</h5>\n    <p>For proper styling, use one of the required contextual classes described below. Avoid using different contexts/colors as a means of separating categories and content of the same type as it might confuse users and make the real context less obvious.</p>\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <th>Context</th>\n        <th>Usage</th>\n        <th>Class name</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>Primary</td>\n        <td>For content that should stand out but lacks obvious meaning/context and is not a response to an action.</td>\n        <td><code>.alert-primary</code></td>\n      </tr>\n      <tr>\n        <td>Secondary</td>\n        <td>For secondary content that should stand out but lacks obvious meaning/context and is not a response to an action.</td>\n        <td><code>.alert-secondary</code></td>\n      </tr>\n      <tr>\n        <td>Info</td>\n        <td>Content that holds neutral information that we find useful for user and that we want to inform them about.</td>\n        <td><code>.alert-info</code></td>\n      </tr>\n      <tr>\n        <td>Success</td>\n        <td>Should be used as a response to an action or something that is considered to be positive or a success.</td>\n        <td><code>.alert-success</code></td>\n      </tr>\n      <tr>\n        <td>Warning</td>\n        <td>Not an error but important information for a user to consider or be aware of.</td>\n        <td><code>.alert-warning</code></td>\n      </tr>\n      <tr>\n        <td>Danger</td>\n        <td>Used for errors or when something goes wrong.</td>\n        <td><code>.alert-danger</code></td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"card mb-4\" id=\"alertOutlineExample\">\n  <h4 class=\"card-header\">Alert outlined</h4>\n  <div class=\"card-body\">\n    <p>The examples below use the <code>.alert-outline-*</code> class (replace * with context) for a more subtle message. The background is white to make it stick out when placed on grey backgrounds.</p>\n    <div class=\"alert alert-outline-primary\" role=\"alert\">\n      <strong>Primary content</strong> This message just needs to stand out.\n    </div>\n    <div class=\"alert alert-outline-secondary\" role=\"alert\">\n      <strong>Secondary content</strong> This message just needs to stand out.\n    </div>\n    <div class=\"alert alert-outline-success\" role=\"alert\">\n      <strong>Well done!</strong> You successfully read this important alert message.\n    </div>\n    <div class=\"alert alert-outline-info\" role=\"alert\">\n      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n    </div>\n    <div class=\"alert alert-outline-warning\" role=\"alert\">\n      <strong>Warning!</strong> Better check yourself, you're not looking too good.\n    </div>\n    <div class=\"alert alert-outline-danger\" role=\"alert\">\n      <strong>Oh snap!</strong> Change a few things up and try submitting again.\n    </div>\n    <exemplify [selector]=\"'#alertOutlineExample .alert'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4\" id=\"alertExample\">\n  <h4 class=\"card-header\">Alert</h4>\n  <div class=\"card-body\">\n    <p>The examples below use the traditional <code>.alert-*</code> class (replace * with context), for use cases where the message is really important and needs to stand out.</p>\n    <div class=\"alert alert-primary\" role=\"alert\">\n      <strong>Primary content</strong> This message just needs to stand out.\n    </div>\n    <div class=\"alert alert-secondary\" role=\"alert\">\n      <strong>Secondary content</strong> This message just needs to stand out.\n    </div>\n    <div class=\"alert alert-success\" role=\"alert\">\n      <strong>Well done!</strong> You successfully read this important alert message.\n    </div>\n    <div class=\"alert alert-info\" role=\"alert\">\n      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n    </div>\n    <div class=\"alert alert-warning\" role=\"alert\">\n      <strong>Warning!</strong> Better check yourself, you're not looking too good.\n    </div>\n    <div class=\"alert alert-danger\" role=\"alert\">\n      <strong>Oh snap!</strong> Change a few things up and try submitting again.\n    </div>\n    <exemplify [selector]=\"'#alertExample .alert'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4\" id=\"alertLinkExample\">\n  <h4 class=\"card-header\">Alert with link</h4>\n  <div class=\"card-body\">\n    <p>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.</p>\n    <div class=\"alert alert-success\" role=\"alert\">\n      This is a success alert with <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <div class=\"alert alert-danger\" role=\"alert\">\n      This is a danger alert with <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <div class=\"alert alert-warning\" role=\"alert\">\n      This is a warning alert with <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <div class=\"alert alert-info\" role=\"alert\">\n      This is a info alert with <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <exemplify [selector]=\"'#alertLinkExample .alert'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4\" id=\"alertAdvancedExample\">\n  <h4 class=\"card-header\">Alert that can be dismissed</h4>\n  <div class=\"card-body bg-light\">\n    <p>A more complex alert that can be dismissed (please note that JavaScript or framework is needed to dismiss alert messages!).</p>\n    <button class=\"btn btn-primary\" (click)=\"active = true\" *ngIf=\"!active\">Show alerts</button>\n    <div class=\"alert alert-danger fade\" role=\"alert\" [ngClass]=\"{'show':active}\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"active = !active\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <h4 class=\"alert-heading\">Error!</h4>\n      <p>Opps, looks like you've encountered an error with an important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n      <hr>\n      <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n    </div>\n    <div class=\"alert alert-outline-success fade\" role=\"alert\" [ngClass]=\"{'show':active}\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"active = !active\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <h4 class=\"alert-heading\">Well done!</h4>\n      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n      <hr>\n      <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n    </div>\n    <exemplify [selector]=\"'#alertAdvancedExample .alert'\"></exemplify>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/example/components/alerts/alerts.component.ts":
/*!***********************************************************!*\
  !*** ./src/example/components/alerts/alerts.component.ts ***!
  \***********************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertsComponent = /** @class */ (function () {
    function AlertsComponent() {
        this.active = true;
    }
    AlertsComponent.prototype.ngOnInit = function () {
    };
    AlertsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__(/*! ./alerts.component.html */ "./src/example/components/alerts/alerts.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "./src/example/components/breadcrumbs/breadcrumbs.component.html":
/*!***********************************************************************!*\
  !*** ./src/example/components/breadcrumbs/breadcrumbs.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"breadcrumbs\"><h2 class=\"my-3\">Breadcrumbs</h2></a>\n<div class=\"card mb-4\">\n  <div class=\"card-body\">\n    <p>Use breadcrumbs to leave a trace so that the users can find their way back when navigating the app.</p>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item active\">Home</li>\n    </ol>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n      <li class=\"breadcrumb-item active\">Library</li>\n    </ol>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n      <li class=\"breadcrumb-item\"><a href=\"#\">Library</a></li>\n      <li class=\"breadcrumb-item active\">Data</li>\n    </ol>\n    <exemplify [selector]=\"'.breadcrumb'\"></exemplify>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/example/components/breadcrumbs/breadcrumbs.component.ts":
/*!*********************************************************************!*\
  !*** ./src/example/components/breadcrumbs/breadcrumbs.component.ts ***!
  \*********************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent() {
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumbs',
            template: __webpack_require__(/*! ./breadcrumbs.component.html */ "./src/example/components/breadcrumbs/breadcrumbs.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/example/components/buttons/buttons-main/buttons-main.component.html":
/*!*********************************************************************************!*\
  !*** ./src/example/components/buttons/buttons-main/buttons-main.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-primary\">Primary</button>\n<button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\n<button type=\"button\" class=\"btn btn-link\">Link</button>\n<button type=\"button\" class=\"btn btn-outline-primary\">Primary outlined</button>\n"

/***/ }),

/***/ "./src/example/components/buttons/buttons-main/buttons-main.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/example/components/buttons/buttons-main/buttons-main.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ButtonsMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsMainComponent", function() { return ButtonsMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsMainComponent = /** @class */ (function () {
    function ButtonsMainComponent() {
    }
    ButtonsMainComponent.prototype.ngOnInit = function () {
    };
    ButtonsMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons-main',
            template: __webpack_require__(/*! ./buttons-main.component.html */ "./src/example/components/buttons/buttons-main/buttons-main.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsMainComponent);
    return ButtonsMainComponent;
}());



/***/ }),

/***/ "./src/example/components/buttons/buttons-sizes/buttons-sizes.component.html":
/*!***********************************************************************************!*\
  !*** ./src/example/components/buttons/buttons-sizes/buttons-sizes.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-sm btn-primary\">Small primary</button>\n<button type=\"button\" class=\"btn btn-sm btn-secondary\">Small secondary</button>\n<button type=\"button\" class=\"btn btn-primary\">Primary</button>\n<button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\n<button type=\"button\" class=\"btn btn-lg btn-primary\">Large primary</button>\n<button type=\"button\" class=\"btn btn-lg btn-secondary\">Large secondary</button>\n"

/***/ }),

/***/ "./src/example/components/buttons/buttons-sizes/buttons-sizes.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/example/components/buttons/buttons-sizes/buttons-sizes.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/example/components/buttons/buttons-sizes/buttons-sizes.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/example/components/buttons/buttons-sizes/buttons-sizes.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ButtonsSizesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsSizesComponent", function() { return ButtonsSizesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsSizesComponent = /** @class */ (function () {
    function ButtonsSizesComponent() {
    }
    ButtonsSizesComponent.prototype.ngOnInit = function () {
    };
    ButtonsSizesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons-sizes',
            template: __webpack_require__(/*! ./buttons-sizes.component.html */ "./src/example/components/buttons/buttons-sizes/buttons-sizes.component.html"),
            styles: [__webpack_require__(/*! ./buttons-sizes.component.scss */ "./src/example/components/buttons/buttons-sizes/buttons-sizes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsSizesComponent);
    return ButtonsSizesComponent;
}());



/***/ }),

/***/ "./src/example/components/buttons/buttons.component.html":
/*!***************************************************************!*\
  !*** ./src/example/components/buttons/buttons.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"buttons\"><h2 class=\"px-3 px-md-0 my-3\">Buttons</h2></a>\n<div class=\"card mb-3\">\n  <div class=\"card-body\">\n    <p>We have three main button classes that we use <code>.btn-primary</code>, <code>.btn-secondary</code> and <code>.btn-link</code>, use the latter to give buttons the same behavior as normal links (used for links placed outside text segments and paragraphs as well as actions similar to \"go to\" or regular links).</p>\n    <label>Standard</label>\n    <div>\n      <app-buttons-main></app-buttons-main>\n    </div>\n    <label class=\"mt-3\">Disabled</label>\n    <div>\n      <button type=\"button\" class=\"btn btn-primary disabled\">Primary</button>\n      <button type=\"button\" class=\"btn btn-secondary disabled\">Secondary</button>\n      <button type=\"button\" class=\"btn btn-link disabled\">Link</button>\n      <button type=\"button\" class=\"btn btn-outline-primary disabled\">Primary-outlined</button>\n    </div>\n    <!--<app-code [code]=\"SNIPPETS.main.markup\" [lang]=\"'markup'\"></app-code>-->\n    <app-snippet-wrapper [snippets]=\"SNIPPETS.main\"></app-snippet-wrapper>\n  </div>\n</div>\n<h3 class=\"px-3 px-md-0\">Buttons and colored backgrounds</h3>\n<div class=\"card mb-3\" #buttonsLightExample>\n  <div class=\"card-body\">\n    <p>The <code>.btn-light</code> class should only be used when buttons are placed on colored or dark backgrounds/images.</p>\n    <div class=\"row align-items-center no-gutters\">\n      <div class=\"col-6 col-md-4 col-lg bg-primary-element py-4 text-center\">\n        <button class=\"btn btn-light\">Light</button>\n      </div>\n      <div class=\"col-6 col-md-4 col-lg bg-info-element py-4 text-center\">\n        <button class=\"btn btn-light\">Light</button>\n      </div>\n      <div class=\"col-6 col-md-4 col-lg bg-success-element py-4 text-center\">\n        <button class=\"btn btn-light\">Light</button>\n      </div>\n      <div class=\"col-6 col-md-4 col-lg bg-warning-element py-4 text-center\">\n        <button class=\"btn btn-light\">Light</button>\n      </div>\n      <div class=\"col-6 col-md-4 col-lg bg-danger-element py-4 text-center\">\n        <button class=\"btn btn-light\">Light</button>\n      </div>\n      <div class=\"col-6 col-md-4 col-lg bg-image-example py-4 text-center\">\n        <button class=\"btn btn-light\">Light</button>\n      </div>\n    </div>\n  </div>\n</div>\n<h3 class=\"px-3 px-md-0\">Alternative buttons (internal use)</h3>\n<div class=\"card mb-3\" #additionalButtonsExample>\n  <div class=\"card-body\">\n    <p>Since SEB Style is a theme for Bootstrap and Bootstrap has some additional button classes to differentiate the severity or the meaning of a button like <code>.btn-danger</code> for actions like delete and remove that might require a bit more attentions, the following classes are available too. Note however that they'll still fallback to our default classes. For internal apps you can override this behaviour and get alternative buttons by setting <code>$enable-button-variations</code> variable to <code>true</code>.</p>\n    <div>\n      <button type=\"button\" class=\"btn btn-success\">Success</button>\n      <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n      <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n      <button type=\"button\" class=\"btn btn-danger\">Info</button>\n    </div>\n  </div>\n</div>\n<h3 class=\"px-3 px-md-0\">Sizing</h3>\n<div class=\"card mb-3\" #smallButtonsExample>\n  <div class=\"card-body\">\n    <p>Add <code>.btn-sm</code> for smaller buttons and <code>.btn-lg</code> for larger buttons.</p>\n    <div>\n      <app-buttons-sizes></app-buttons-sizes>\n    </div>\n    <app-snippet-wrapper [snippets]=\"SNIPPETS.sizes\"></app-snippet-wrapper>\n  </div>\n</div>\n<!--<app-code [code]=\"markup\" [lang]=\"'markup'\"></app-code>-->\n\n"

/***/ }),

/***/ "./src/example/components/buttons/buttons.component.scss":
/*!***************************************************************!*\
  !*** ./src/example/components/buttons/buttons.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/example/components/buttons/buttons.component.ts":
/*!*************************************************************!*\
  !*** ./src/example/components/buttons/buttons.component.ts ***!
  \*************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
        this.SNIPPETS = {
            main: [
                {
                    name: 'markup',
                    lang: 'markup',
                    src: 'buttons/buttons-main/buttons-main.component.html'
                }, {
                    lang: 'typescript',
                    src: 'buttons/buttons-main/buttons-main.component.ts'
                },
                {
                    lang: 'typescript',
                    src: 'https://raw.githubusercontent.com/ng-bootstrap/ng-bootstrap/master/demo/src/app/components/buttons/demos/checkbox/buttons-checkbox.ts'
                }
            ],
            sizes: [
                {
                    name: 'markup',
                    lang: 'markup',
                    src: 'buttons/buttons-sizes/buttons-sizes.component.html'
                }
            ]
        };
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/example/components/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/example/components/buttons/buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"checkboxes\"><h2 class=\"px-3 px-md-0 my-3\">Checkboxes and slide toggles</h2></a>\n<p class=\"px-3 px-md-0\">Below you'll find some examples of checkboxes and layout options using the grid (rows and columns), check the <a routerLink=\"/forms\">forms</a> section for more form elements or head over to <a href=\"https://getbootstrap.com/docs/4.0/components/forms/#overview\" target=\"_blank\">bootstrap docs</a> for more info and examples.</p>\n<div class=\"card mb-4\" id=\"checkboxExample\">\n  <h4 class=\"card-header\">Standard checkbox</h4>\n  <div class=\"card-body\">\n    <p>We use a standard input element with <code>type=\"checkbox\"</code> for checkboxes but we need to wrap it in a div to get the right style for the different states.</p>\n    <div class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck\">\n      <label class=\"custom-control-label\" for=\"customCheck\">Check this custom checkbox</label>\n    </div>\n    <div class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckDisabled\" disabled>\n      <label class=\"custom-control-label\" for=\"customCheckDisabled\">This checkbox is disabled</label>\n    </div>\n    <exemplify [selector]=\"'#checkboxExample .custom-control'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4\" id=\"checkboxLayoutExample\">\n  <h4 class=\"card-header\">Horizontal layout</h4>\n  <div class=\"card-body\">\n    <p>Use rows and columns to create a responsive layout, in the example below checkboxes will be placed inline on medium sized screens and up. On smaller screens the checkboxes will stack on top of each other, test by resizing the window. Use one of the following utility classes <code>.my-*</code>, <code>.mb-*</code> or <code>.mt-*</code> to add spacing between the different options, ie. <code>mb-2 mb-md-0</code> to get a small bottom margin on small sreens and below.</p>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-auto mb-2 mb-md-0\">\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckInline\">\n          <label class=\"custom-control-label\" for=\"customCheckInline\">Check this custom checkbox</label>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-auto mb-2 mb-md-0\">\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckInline1\">\n          <label class=\"custom-control-label\" for=\"customCheckInline1\">And this one</label>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-auto\">\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckInline2\">\n          <label class=\"custom-control-label\" for=\"customCheckInline2\">Don't forget me</label>\n        </div>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#checkboxLayoutExample .row'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4\" id=\"slideToggleExample\">\n  <h4 class=\"card-header\">Slide toggle</h4>\n  <div class=\"card-body\">\n    <p>The slide toggle works just like a normal checkbox and uses the same markup and bindings, to make it look like a slide toggle just add the class <code>custom-slide-toggle</code>.</p>\n    <div class=\"custom-control custom-slide-toggle\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSlideToggle\">\n      <label class=\"custom-control-label\" for=\"customSlideToggle\">Toggle this input</label>\n    </div>\n    <div class=\"custom-control custom-slide-toggle\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSlideToggleDisabled\" disabled>\n      <label class=\"custom-control-label\" for=\"customSlideToggleDisabled\">Toggle disabled</label>\n    </div>\n    <exemplify [selector]=\"'#slideToggleExample .custom-control'\"></exemplify>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CheckboxesAndSlideTogglesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxesAndSlideTogglesComponent", function() { return CheckboxesAndSlideTogglesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckboxesAndSlideTogglesComponent = /** @class */ (function () {
    function CheckboxesAndSlideTogglesComponent() {
    }
    CheckboxesAndSlideTogglesComponent.prototype.ngOnInit = function () {
    };
    CheckboxesAndSlideTogglesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkboxes-and-slide-toggles',
            template: __webpack_require__(/*! ./checkboxes-and-slide-toggles.component.html */ "./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CheckboxesAndSlideTogglesComponent);
    return CheckboxesAndSlideTogglesComponent;
}());



/***/ }),

/***/ "./src/example/components/forms/forms.component.html":
/*!***********************************************************!*\
  !*** ./src/example/components/forms/forms.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"forms\"><h2 class=\"px-3 px-md-0 my-3\">Forms</h2></a>\n<p class=\"px-3 px-md-0\">Below you'll find some examples of forms and different form elements, check <a href=\"https://getbootstrap.com/docs/4.0/components/forms/#overview\" target=\"_blank\">bootstrap docs</a> for more info and examples.</p>\n<div class=\"card mb-4\" id=\"formExample\">\n  <div class=\"card-body\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlSelect1\">Example select</label>\n        <select class=\"custom-select\" id=\"exampleFormControlSelect1\">\n          <option>1</option>\n          <option>2</option>\n          <option>3</option>\n          <option>4</option>\n          <option>5</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlSelect2\">Example multiple select</label>\n        <select multiple class=\"custom-select\" id=\"exampleFormControlSelect2\">\n          <option>1</option>\n          <option>2</option>\n          <option>3</option>\n          <option>4</option>\n          <option>5</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlTextarea1\">Example textarea</label>\n        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleTextarea\">Example textarea</label>\n        <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"customFile\">File input</label>\n        <div class=\"custom-file\">\n          <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"handleFileInput($event.target.files)\">\n          <label class=\"custom-file-label\" for=\"customFile\" aria-describedby=\"customFileHelp\">{{fileName}}</label>\n          <small id=\"customFileHelp\" class=\"form-text text-muted\">Please note that this example requires additional javascript for the file name to appear.</small>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputFile\">File input</label>\n        <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\">\n        <small id=\"fileHelp\" class=\"form-text text-muted\">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n    <exemplify [selector]=\"'#formExample form'\"></exemplify>\n  </div>\n</div>\n<h2 class=\"px-3 px-md-0\">Form layouts</h2>\n<p class=\"px-3 px-md-0\">Since Bootstrap applies <code>display: block</code> and <code>width: 100%</code> to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.\n</p>\n<div class=\"card mb-4\" id=\"formExampleGroups\">\n  <h4 class=\"card-header\">Form groups</h4>\n  <div class=\"card-body\">\n    <p>The <code>.form-group</code> class is the easiest way to add some structure to forms. Its only purpose is to provide <code>margin-bottom</code> around a label and control pairing. As a bonus, since it’s a class you can use it with <code>&lt;fieldset&gt;</code>s, <code>&lt;div&gt;</code>s, or nearly any other element.</p>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"formGroupExampleInput\">Example label</label>\n        <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Example input\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formGroupExampleInput2\">Another label</label>\n        <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"Another input\">\n      </div>\n    </form>\n    <exemplify [selector]=\"'#formExampleGroups form'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4\" id=\"formExampleGridSimple\">\n  <h4 class=\"card-header\">Form grid</h4>\n  <div class=\"card-body\">\n    <p>More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.</p>\n    <form>\n      <div class=\"row\">\n        <div class=\"col\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\n        </div>\n        <div class=\"col\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\n        </div>\n      </div>\n    </form>\n    <exemplify [selector]=\"'#formExampleGridSimple form'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4\" id=\"formExampleRowSimple\">\n  <h4 class=\"card-header\">Form row</h4>\n  <div class=\"card-body\">\n    <p>You may also swap <code>.row</code> for <code>.form-row</code>, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.</p>\n    <form>\n      <div class=\"form-row\">\n        <div class=\"col\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\n        </div>\n        <div class=\"col\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\n        </div>\n      </div>\n    </form>\n    <exemplify [selector]=\"'#formExampleRowSimple form'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4\" id=\"formExampleGridAdvanced\">\n  <h4 class=\"card-header\">Using the grid system</h4>\n  <div class=\"card-body\">\n    <p>More complex layouts can also be created with the grid system.</p>\n    <form>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputEmail4\">Email</label>\n          <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputPassword4\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputAddress\">Address</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputAddress2\">Address 2</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\">\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputCity\">City</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputCity\">\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label for=\"inputState\">State</label>\n          <select id=\"inputState\" class=\"custom-select\">\n            <option selected>Choose...</option>\n            <option>...</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"inputZip\">Zip</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputZip\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"custom-control custom-checkbox\">\n          <input class=\"custom-control-input\" type=\"checkbox\" id=\"gridCheck\">\n          <label class=\"custom-control-label\" for=\"gridCheck\">\n            Check me out\n          </label>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n    </form>\n    <exemplify [selector]=\"'#formExampleGridAdvanced form'\"></exemplify>\n  </div>\n</div>\n<h2 class=\"px-3 px-md-0 mb-3\">Custom forms</h2>\n<div class=\"card mb-4\" id=\"formExampleCustomCheckbox\">\n  <h4 class=\"card-header\">Checkboxes</h4>\n  <div class=\"card-body\">\n    <p>For even more customization and cross browser consistency, use custom form elements to replace the browser defaults. They’re built on top of semantic and accessible markup, so they’re solid replacements for any default form control.</p>\n    <form>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n        <label class=\"custom-control-label\" for=\"customCheck1\">Check this custom checkbox</label>\n      </div>\n    </form>\n    <exemplify [selector]=\"'#formExampleCustomCheckbox .custom-control'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4\" id=\"formExampleCustomRadio\">\n  <h4 class=\"card-header\">Radios</h4>\n  <div class=\"card-body\">\n    <form>\n      <div class=\"custom-control custom-radio\">\n        <input type=\"radio\" id=\"customRadio1\" name=\"customRadio\" class=\"custom-control-input\">\n        <label class=\"custom-control-label\" for=\"customRadio1\">Toggle this custom radio</label>\n      </div>\n      <div class=\"custom-control custom-radio\">\n        <input type=\"radio\" id=\"customRadio2\" name=\"customRadio\" class=\"custom-control-input\">\n        <label class=\"custom-control-label\" for=\"customRadio2\">Or toggle this other custom radio</label>\n      </div>\n    </form>\n    <exemplify [selector]=\"'#formExampleCustomRadio .custom-control'\"></exemplify>\n  </div>\n</div>\n<h2 class=\"px-3 px-md-0 mb-3\">Control sizing</h2>\n<div class=\"card mb-4\" id=\"formExampleSizing\">\n  <div class=\"card-body\">\n    <p>Set heights using classes like <code>.form-control-lg</code>, and set widths using grid column classes like <code>.col-lg-*</code>.</p>\n    <h4 class=\"mt-3\">Inputs</h4>\n    <input class=\"form-control form-control-lg mb-2\" type=\"text\" placeholder=\".form-control-lg\">\n      <input class=\"form-control mb-2\" type=\"text\" placeholder=\"Default input\">\n      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\".form-control-sm\">\n    <exemplify [selector]=\"'#formExampleSizing input'\"></exemplify>\n    <h4 class=\"mt-3\">Selects</h4>\n      <select class=\"custom-select custom-select-lg mb-2\">\n        <option>Large select</option>\n      </select>\n      <select class=\"custom-select mb-2\">\n        <option>Default select</option>\n      </select>\n      <select class=\"custom-select custom-select-sm\">\n        <option>Small select</option>\n      </select>\n      <exemplify [selector]=\"'#formExampleSizing select'\"></exemplify>\n  </div>\n</div>\n<h2 class=\"px-3 px-md-0 mb-3\">Validation</h2>\n<div class=\"card mb-4\">\n  <div class=\"card-body\">\n    <p>The example below is just a static example of different validation errors. In short bootstrap uses native <code>:invalid</code> and <code>:valid</code> form states together with <code>.was-validated</code> (usually applied to form) to apply the styles and it's also possible to use <code>.is-invalid</code>, <code>.is-valid</code> and <code>.invalid-feedback</code> when validated on the sever. More examples will be added in the future and in most cases validation will be enhanced through a framework like Angular or React which also complicates things a bit,, but we'll try to add real examples soon.</p>\n    <form>\n      <div class=\"form-row\">\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"validationServer01\">First name</label>\n          <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer01\" placeholder=\"First name\" value=\"Mark\" required>\n          <div class=\"valid-feedback\">\n            Looks good!\n          </div>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"validationServer02\">Last name</label>\n          <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer02\" placeholder=\"Last name\" value=\"Otto\" required>\n          <div class=\"valid-feedback\">\n            Looks good!\n          </div>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"validationServerUsername\">Username</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend is-invalid\">\n              <span class=\"input-group-text\" id=\"inputGroupPrepend3\">@</span>\n            </div>\n            <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServerUsername\" placeholder=\"Username\" aria-describedby=\"inputGroupPrepend3\" required>\n            <div class=\"invalid-feedback\">\n              Please choose a username.\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col-md-6 mb-3\">\n          <label for=\"validationServer03\">City</label>\n          <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer03\" placeholder=\"City\" required>\n          <div class=\"invalid-feedback\">\n            Please provide a valid city.\n          </div>\n        </div>\n        <div class=\"col-md-3 mb-3\">\n          <label for=\"validationServer04\">State</label>\n          <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer04\" placeholder=\"State\" required>\n          <div class=\"invalid-feedback\">\n            Please provide a valid state.\n          </div>\n        </div>\n        <div class=\"col-md-3 mb-3\">\n          <label for=\"validationServer05\">Zip</label>\n          <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer05\" placeholder=\"Zip\" required>\n          <div class=\"invalid-feedback\">\n            Please provide a valid zip.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col-md-6 mb-3\">\n          <label for=\"validationServer06\">Other</label>\n          <textarea class=\"form-control is-invalid\" rows=\"3\" id=\"validationServer06\" placeholder=\"Text\" required></textarea>\n          <div class=\"invalid-feedback\">\n            Please add a comment.\n          </div>\n        </div>\n        <div class=\"col-md-3 mb-3\">\n          <label for=\"validationServer07\">Select</label>\n          <select class=\"form-control is-invalid\" id=\"validationServer07\"><option>Invalid dropdown</option></select>\n          <div class=\"invalid-feedback\">\n            Please choose something.\n          </div>\n        </div>\n        <div class=\"col-md-3 mb-3\">\n          <label for=\"validationServer07\">Dropdown</label>\n          <div ngbDropdown class=\"is-invalid\">\n            <button class=\"btn btn-outline-primary w-100\" id=\"dropdownExample\" ngbDropdownToggle>{{selected ? selected:'select...'}}</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownExample\" class=\"w-100 mb-3\">\n              <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"selected = option\" [ngClass]=\"{'active':selected === option}\">{{option}}</button>\n            </div>\n          </div>\n          <div class=\"invalid-feedback\">\n            Please choose something.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-12 col-md-auto\">\n          <div class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input is-invalid\" id=\"invalidCheck3\">\n            <label class=\"custom-control-label\" for=\"invalidCheck3\">Agree to terms and conditions</label>\n            <div class=\"invalid-feedback\">\n              You must agree before submitting.\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-12 col-md-auto\">\n          <div class=\"custom-control custom-radio\">\n            <input type=\"radio\" class=\"custom-control-input is-invalid\" id=\"customControlValidation2\" name=\"radio-stacked\" required>\n            <label class=\"custom-control-label\" for=\"customControlValidation2\">Toggle this custom radio</label>\n          </div>\n          <div class=\"custom-control custom-radio mb-3\">\n            <input type=\"radio\" class=\"custom-control-input is-invalid\" id=\"customControlValidation3\" name=\"radio-stacked\" required>\n            <label class=\"custom-control-label\" for=\"customControlValidation3\">Or toggle this other custom radio</label>\n            <div class=\"invalid-feedback\">Please choose one.</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-auto\">\n          <div class=\"alert alert-outline-danger\">\n            <h5 class=\"alert-heading\">Make sure you've entered the correct information</h5>\n            Here's a perfect place to explain what's wrong!\n          </div>\n        </div>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\">Submit form</button>\n    </form>\n  </div>\n</div>\n<h2 class=\"px-3 px-md-0 mb-3\">Advanced validation with progress</h2>\n<div class=\"card mb-4 angular-validation\">\n  <div class=\"card-body\">\n    <p>Basic validation rules like <code>required</code>, <code>minlength</code> and <code>pattern</code> etc. provided by HTML and browsers natively for inputs are awesome for validation but they're not that user friendly or intuitive. Using a framework like Angular we can enhance the native behavior and extend it with our on validation rules. In the following example we've made it a bit more clever just showing one error at a time and we've also added custom validation for personal identity number.</p>\n    <p>Validation progress can be shown by applying one of the following classes to the feedback element: <code>p-0</code> for 0%, <code>p-10</code> for 10%, <code>p-20</code> for 20% and so on up till 100%. There's also another type of feedback besides <code>invalid-feedback</code> and <code>valid-feedback</code> called <code>progress-feedback</code> that will change color depending on the p value provided.</p>\n    <div class=\"alert alert-info\"><strong>Framework needed!</strong> Please note that the examples below uses angular but similar behavior can be achieved using other frameworks as well.</div>\n    <form #loginForm=\"ngForm\" novalidate>\n      <div class=\"form-row\">\n        <div class=\"form-group col-12 col-sm-10 col-md-auto\">\n          <label for=\"personalIdInput\">Personal Identity number</label>\n          <input type=\"tel\" [(ngModel)]=\"personalIdentityNumber\"\n                 [ngClass]=\"{'is-invalid':!personalIdentityNumberInput.valid && personalIdentityNumberInput.lostFocus, 'is-valid': personalIdentityNumberInput.valid}\"\n                 name=\"personalIdentityNumber\"\n                 class=\"form-control\"\n                 id=\"personalIdInput\"\n                 aria-describedby=\"personalIdHelp\"\n                 #personalIdentityNumberInput=\"ngModel\"\n                 personalIdentityNumberCheck\n                 placeholder=\"YYYYMMDDXXXX\" required\n                 (keydown)=\"onKeyDownPreventNonDigits($event)\"\n                 (keyup)=\"onValueChange()\"\n                 (change)=\"onValueChange()\"\n                 (focusout)=\"personalIdentityNumberInput.lostFocus = true\">\n          <div *ngIf=\"!personalIdentityNumberInput.lostFocus && !personalIdentityNumberInput.valid\" class=\"{{'progress-feedback progress-success text-muted p-' + Math.floor((personalIdentityNumber.length/1.2)) + (Math.floor((personalIdentityNumber.length/1.2)) === 0 ? '':'0')}}\" id=\"personalIdHelp\">Enter personal id, 10 digits</div>\n          <div class=\"{{personalIdentityNumberInput.valid ? 'valid-feedback ' : 'invalid-feedback ' + 'p-' + Math.floor((personalIdentityNumber.length/1.2)) + (Math.floor((personalIdentityNumber.length/1.2)) === 0 ? '':'0')}}\">\n            {{personalIdentityNumberInput.valid ? 'Looks good!' : (personalIdentityNumberInput.errors | validationMessage)}}\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-12 col-sm-10 col-md-auto\">\n          <label for=\"passwordId\">Create password</label>\n          <input type=\"password\" [(ngModel)]=\"password\"\n                 [ngClass]=\"{'is-invalid':!passwordInput.valid && passwordInput.lostFocus}\"\n                 name=\"password\"\n                 class=\"form-control\"\n                 id=\"passwordId\"\n                 aria-describedby=\"passwordHelp\"\n                 #passwordInput=\"ngModel\" required\n                 maxlength=\"10\"\n                 minlength=\"4\"\n                 (focusout)=\"passwordInput.lostFocus = true\">\n          <div class=\"{{(password.length <= 3 && passwordInput.lostFocus ? 'invalid':'progress') + '-feedback p-' + (password.length === 0 ? '0': password.length <= 4 ? '10': (password.length <= 6 ? '30': (password.length <= 8 ? '60': (password.length < 10 ? '100': '100'))))}}\" id=\"passwordHelp\">{{password.length === 0 ? 'Enter desired password': (password.length <= 3 ? 'To short': (password.length <= 6 ? 'Weak password': (password.length <= 8 ? 'Okay password': (password.length <= 10 ? 'Strong password': ''))))}}</div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/example/components/forms/forms.component.ts":
/*!*********************************************************!*\
  !*** ./src/example/components/forms/forms.component.ts ***!
  \*********************************************************/
/*! exports provided: FormsComponent, ValidationMessagePipe, personalIdentityNumberValidator, PersonalIdentityNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationMessagePipe", function() { return ValidationMessagePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personalIdentityNumberValidator", function() { return personalIdentityNumberValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalIdentityNumberDirective", function() { return PersonalIdentityNumberDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var swe_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swe-validation */ "./node_modules/swe-validation/index.js");
/* harmony import */ var swe_validation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swe_validation__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
        this.fileToUpload = null;
        this.fileName = 'Choose file';
        this.options = ['First', 'Second', 'Third', 'Forth']; // available options, used by dropdown and multi-select example
        this.personalIdentityNumber = '';
        this.password = '';
        this.Math = Math;
        this.passwordStrength = 'Enter desired password';
    }
    // password.length <= 3 ? 'Weak' : password.length <= 6 ? 'Okay': password.length <= 9 'Strong':''
    FormsComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        this.fileName = this.fileToUpload.name;
    };
    FormsComponent.prototype.onValueChange = function () {
        this.personalIdentityNumber = this.personalIdentityNumber.replace(/\D+/g, '').slice(0, 12);
    };
    FormsComponent.prototype.onKeyDownPreventNonDigits = function (event) {
        var inputChar = event.key;
        var pattern = /\D+/g;
        var allowedKeyCodes = [8, 37, 39, 46];
        var selectedChars = event.currentTarget.valueOf().selectionEnd - event.currentTarget.selectionStart;
        if ((allowedKeyCodes.indexOf(event.keyCode) < 0 && !event.ctrlKey && pattern.test(inputChar) && selectedChars === 0)
            || (this.personalIdentityNumber && this.personalIdentityNumber.length > 11 && !event.ctrlKey && selectedChars === 0 && allowedKeyCodes.indexOf(event.keyCode) < 0)) {
            event.preventDefault();
        }
    };
    FormsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/example/components/forms/forms.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());


var ValidationMessagePipe = /** @class */ (function () {
    function ValidationMessagePipe() {
    }
    ValidationMessagePipe.prototype.transform = function (errors) {
        var ERROR = Object.keys(errors)[0];
        if (ERROR === 'required') {
            return 'Required, please enter your personal id.';
        }
        else if (ERROR === 'toShort') {
            return 'To short, please enter complete personal id with 12 digits.';
        }
        else if (ERROR === 'incorrect') {
            return 'Incorrect personal identity number.';
        }
        return ERROR;
    };
    ValidationMessagePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'validationMessage'
        })
    ], ValidationMessagePipe);
    return ValidationMessagePipe;
}());




/** Check that the entered personal identity number is valid */
function personalIdentityNumberValidator() {
    return function (control) {
        var personalIdentityNumber = control.value;
        // don't check if personal id is omitted
        if (!personalIdentityNumber) {
            return null;
        }
        // make sure id when entered is at least 12 digits long
        if (personalIdentityNumber.toString().length < 12) {
            return { 'toShort': { personalIdentityNumber: personalIdentityNumber } };
        }
        // check if personal id entered is valid using luhn algorithm (https://sv.wikipedia.org/wiki/luhn-algoritmen)
        var personalId = swe_validation__WEBPACK_IMPORTED_MODULE_2__["ssn"](personalIdentityNumber);
        return !personalId.isValid ? { 'incorrect': { personalIdentityNumber: personalIdentityNumber } } : null;
    };
}
var PersonalIdentityNumberDirective = /** @class */ (function () {
    function PersonalIdentityNumberDirective() {
        this.valFn = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator;
    }
    PersonalIdentityNumberDirective_1 = PersonalIdentityNumberDirective;
    PersonalIdentityNumberDirective.prototype.ngOnInit = function () {
        this.valFn = personalIdentityNumberValidator();
    };
    PersonalIdentityNumberDirective.prototype.validate = function (control) {
        return this.valFn(control);
    };
    PersonalIdentityNumberDirective = PersonalIdentityNumberDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[personalIdentityNumberCheck]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: PersonalIdentityNumberDirective_1, multi: true }]
        })
    ], PersonalIdentityNumberDirective);
    return PersonalIdentityNumberDirective;
    var PersonalIdentityNumberDirective_1;
}());



/***/ }),

/***/ "./src/example/components/icons/icons.component.html":
/*!***********************************************************!*\
  !*** ./src/example/components/icons/icons.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"px-3 px-md-0\">Icons</h2>\n<p class=\"lead px-3 px-md-0\">\n  Font Aweseome 5 is the icon framework we're using.\n</p>\n<div class=\"card\">\n  <h5 class=\"card-header pb-0\">Usage</h5>\n  <div class=\"card-body\">\n    <p>In order to try out Font Awesome 5 you need to install the icon framework (contact <a href=\"mailto:robert.hjalmers@seb.se\">Robert Hjalmers</a> to get access). Once you've added the framework, you'll be able to use the icons with the following markup: <code>&lt;i class=&quot;fal fa-print&quot;&gt;&lt;/i&gt;</code> and change <code>print</code> to the name of the icon you'd like to use (see some of the available icons below).</p>\n    <h5>Icons</h5>\n    <div class=\"form-group row\">\n      <div class=\"col-12 col-md-auto\">\n        <label for=\"search_icon_input\">Search</label>\n        <input id=\"search_icon_input\" name=\"iconSearchString\" [(ngModel)]=\"iconSearchString\" (ngModelChange)=\"filterIcons($event)\" class=\"form-control\" type=\"text\" placeholder=\"Type to filter icons\">\n      </div>\n    </div>\n    <div class=\"row icon-list\">\n      <div class=\"col-6 col-md-4\" *ngFor=\"let icon of filteredIcons\">\n        <i class=\"{{'fal fa-' + icon}}\"></i> <span class=\"ml-2\">{{icon}}</span>\n      </div>\n    </div>\n    <h5 class=\"mt-4\">Sizing</h5>\n    <p>Icons are available in 4 different sizes, add <code>fa-xx</code>(replace with one of the classes below) to adjust icon size. Even though bigger sizes are available we should avoid using them and consider using pictograms instead.</p>\n    <div class=\"sizes\">\n      <div><i class=\"fal fa-heart fa-xs\"></i><span>fa-xs </span><small class=\"text-muted\">(extra small, 12 px)</small></div>\n      <div><i class=\"fal fa-heart\"></i><small class=\"text-muted\">(normal, 16 px)</small></div>\n      <div><i class=\"fal fa-heart fa-lg\"></i><span>fa-lg </span><small class=\"text-muted\">(large, 24 px)</small></div>\n      <div><i class=\"fal fa-heart fa-2x\"></i><span>fa-2x </span><small class=\"text-muted\">(2x, 32 px)</small></div>\n    </div>\n    <h5 class=\"mt-4\">Do's and don'ts</h5>\n    <label>Do</label>\n    <ul>\n      <li>Use icons when they add value</li>\n      <li>Use Font Awesome 5 for generic system icons up to 32 px (fa-2x)</li>\n    </ul>\n    <label>Don't</label>\n    <ul>\n      <li>Use Font Awesome for larger icons (bigger than 32 px), use pictograms (coming soon!)</li>\n      <li>Stack icons on top of each other</li>\n      <li>Add colors to icons other than <span class=\"text-success\">text-success</span>, <span class=\"text-warning\">text-warning</span> or <span class=\"text-danger\">text-danger</span> when applicable</li>\n    </ul>\n  </div>\n</div>\n<div style=\"text-align:center\">\n  <fa-icon [icon]=\"faArrowAltRight\"></fa-icon>\n</div>\n"

/***/ }),

/***/ "./src/example/components/icons/icons.component.ts":
/*!*********************************************************!*\
  !*** ./src/example/components/icons/icons.component.ts ***!
  \*********************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "./node_modules/@fortawesome/pro-light-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
        this.iconSearchString = '';
        this.icons = [
            'archive',
            'lock-alt',
            'unlock-alt',
            'cog',
            'print',
            'calendar-alt',
            'phone',
            'mobile',
            'tablet',
            'desktop-alt',
            'envelope',
            'share-alt',
            'user-alt',
            'comment-alt',
            'comments',
            'link',
            'external-link-square',
            'credit-card',
            'balance-scale',
            'bookmark',
            'book',
            'arrow-left',
            'arrow-right',
            'arrow-up',
            'arrow-down',
            'arrow-to-bottom',
            'long-arrow-left',
            'long-arrow-right',
            'long-arrow-up',
            'long-arrow-down',
            'chevron-left',
            'chevron-right',
            'chevron-up',
            'chevron-down',
            'sync',
            'at',
            'percent',
            'star',
            'heart',
            'plus',
            'minus',
            'exclamation-triangle',
            'copy',
            'upload',
            'calculator',
            'home',
            'clock',
            'filter',
            'search',
            'edit',
            'sign-in',
            'sign-out',
            'sliders-h',
            'sliders-v',
            'bell',
            'undo',
            'info-circle',
            'reply',
            'reply-all',
            'trash-alt',
            'times'
        ];
        this.filteredIcons = this.icons;
        this.faArrowAltRight = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowAltRight"];
    }
    IconsComponent.prototype.filterIcons = function (search) {
        this.filteredIcons = this.icons.filter(function (icon) { return icon.indexOf(search) !== -1; });
    };
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icons',
            template: __webpack_require__(/*! ./icons.component.html */ "./src/example/components/icons/icons.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/example/components/input-group/input-group.component.html":
/*!***********************************************************************!*\
  !*** ./src/example/components/input-group/input-group.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"inputGroup\"><h2 class=\"px-3 px-md-0 my-3\">Input group</h2></a>\n<div class=\"card\" #inputGroupExample>\n  <div class=\"card-body\">\n    <p>Place one add-on or button on either side of an input. You may also place one on both sides of an input. Use <code>.input-group-prepend</code> and/or <code>.input-group-append</code> inside an input group (<code>.input-group</code>), to group controls with an input field.</p>\n    <div>\n      <label for=\"prependBtn\">Prepend button</label>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <button class=\"btn btn-secondary\" type=\"button\">Button</button>\n        </div>\n        <input id=\"prependBtn\" type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\" aria-describedby=\"basic-addon1\">\n      </div>\n      <label for=\"appendBtn\">Append button</label>\n      <div class=\"input-group mb-3\">\n        <input id=\"appendBtn\" type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-secondary\" type=\"button\">Clear</button>\n          <button class=\"btn btn-primary\" type=\"button\">Ok</button>\n        </div>\n      </div>\n      <label for=\"appendStatic\">Append text/static content</label>\n      <div class=\"input-group mb-3\">\n        <input id=\"appendStatic\" type=\"text\" class=\"form-control\" aria-label=\"Card number\" placeholder=\"____ ____ ____ ____\" maxlength=\"16\">\n        <div class=\"input-group-append\">\n          <span class=\"input-group-text\">\n            <i class=\"fal fa-credit-card\"></i>\n          </span>\n        </div>\n      </div>\n      <label for=\"appendPrependStatic\">Append and prepend text/static content</label>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">\n            <i class=\"fal fa-dollar-sign\"></i>\n          </span>\n        </div>\n        <input id=\"appendPrependStatic\" type=\"number\" class=\"form-control text-right\" aria-label=\"Amount\">\n        <div class=\"input-group-append\">\n          <span class=\"input-group-text\">.00</span>\n        </div>\n      </div>\n      <label for=\"appendBtnIcon\">Append button icon</label>\n      <div class=\"input-group mb-3\">\n        <input id=\"appendBtnIcon\" type=\"text\" class=\"form-control\" aria-label=\"Date\" placeholder=\"yyyy-mm-dd\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-secondary\" type=\"button\">\n            <i class=\"fal fa-calendar-alt\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n    <exemplify [selector]=\"'.card-body > div'\"></exemplify>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/example/components/input-group/input-group.component.ts":
/*!*********************************************************************!*\
  !*** ./src/example/components/input-group/input-group.component.ts ***!
  \*********************************************************************/
/*! exports provided: InputGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupComponent", function() { return InputGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputGroupComponent = /** @class */ (function () {
    function InputGroupComponent() {
    }
    InputGroupComponent.prototype.ngOnInit = function () {
    };
    InputGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-group',
            template: __webpack_require__(/*! ./input-group.component.html */ "./src/example/components/input-group/input-group.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], InputGroupComponent);
    return InputGroupComponent;
}());



/***/ }),

/***/ "./src/example/components/list-group/list-group.component.html":
/*!*********************************************************************!*\
  !*** ./src/example/components/list-group/list-group.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"listGroupCheck\"><h2 class=\"px-3 px-md-0 my-3\">List group</h2></a>\n<div class=\"card\" #listGroupCheckExample>\n  <div class=\"card-body\">\n    <p>To get a list group with check icons, just add the class <code>list-group-check</code> to a normal list-group.</p>\n    <ul class=\"list-group list-group-check\">\n      <li class=\"list-group-item\">Lorem ipsum</li>\n      <li class=\"list-group-item\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales, nulla sed lobortis maximus, nisl massa vestibulum lectus, in tincidunt tellus elit vel neque. Vivamus ullamcorper auctor dignissim. Maecenas placerat, odio nec vestibulum pulvinar, tortor tellus cursus quam, sit amet vulputate est diam in justo.</p></li>\n      <li class=\"list-group-item\">Dolar sit amet</li>\n      <li class=\"list-group-item\"><strong class=\"mb-1 d-block\">Lorem ipsum</strong><p class=\"text-muted small\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales, nulla sed lobortis maximus, nisl massa vestibulum lectus.</p></li>\n      <li class=\"list-group-item\"><strong class=\"mb-1 d-block\">Dolar sit amet</strong><p class=\"text-muted small\">Vivamus ullamcorper auctor dignissim. Maecenas placerat, odio nec vestibulum pulvinar, tortor tellus cursus quam, sit amet vulputate est diam in justo.</p></li>\n    </ul>\n    <exemplify [selector]=\"'ul.list-group'\"></exemplify>\n  </div>\n</div>"

/***/ }),

/***/ "./src/example/components/list-group/list-group.component.ts":
/*!*******************************************************************!*\
  !*** ./src/example/components/list-group/list-group.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroupComponent", function() { return ListGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListGroupComponent = /** @class */ (function () {
    function ListGroupComponent() {
    }
    ListGroupComponent.prototype.ngOnInit = function () {
    };
    ListGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-group',
            template: __webpack_require__(/*! ./list-group.component.html */ "./src/example/components/list-group/list-group.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ListGroupComponent);
    return ListGroupComponent;
}());



/***/ }),

/***/ "./src/example/components/loaders/loaders.component.html":
/*!***************************************************************!*\
  !*** ./src/example/components/loaders/loaders.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"px-3 px-md-0 my-3\">Loaders</h2>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <p>Some experimental loaders</p>\n    <div class=\"row\" id=\"loaders\">\n      <div class=\"col-auto\">\n        <div class=\"spinner spinner-sm\"></div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner\"></div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner spinner-md\"></div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner spinner-lg\"></div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner-sq spinner-sm\"></div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner-sq\"></div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner-sq spinner-md\"></div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner-sq spinner-lg\"></div>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#loaders .col-auto > *'\"></exemplify>\n    <div class=\"row mt-5\" id=\"loadersButton\">\n      <div class=\"col-auto\">\n        <button class=\"btn btn-primary disabled\"><span class=\"mr-2\">Waiting</span>\n          <div class=\"spinner\"></div>\n        </button>\n      </div>\n      <div class=\"col-auto\">\n        <button class=\"btn btn-primary disabled\"><span class=\"mr-2\">Waiting</span>\n          <div class=\"spinner-sq\"></div>\n        </button>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#loadersButton .btn'\"></exemplify>\n  </div>\n</div>\n<h3 class=\"px-3 px-md-0 my-3\">Loaders on light grey background</h3>\n<div class=\"card\">\n  <div class=\"card-body bg-light\">\n    <p>Add class <code>light</code> to spinner element when placed against light background.</p>\n    <div class=\"row\" id=\"loadersLight\">\n      <div class=\"col-auto\">\n        <div class=\"spinner spinner-sm light\"></div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner spinner-lg light\"></div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner-sq spinner-sm\"></div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner-sq spinner-lg\"></div>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#loadersLight .col-auto > *'\"></exemplify>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/example/components/loaders/loaders.component.ts":
/*!*************************************************************!*\
  !*** ./src/example/components/loaders/loaders.component.ts ***!
  \*************************************************************/
/*! exports provided: LoadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadersComponent", function() { return LoadersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadersComponent = /** @class */ (function () {
    function LoadersComponent() {
    }
    LoadersComponent.prototype.ngOnInit = function () {
    };
    LoadersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loaders',
            template: __webpack_require__(/*! ./loaders.component.html */ "./src/example/components/loaders/loaders.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], LoadersComponent);
    return LoadersComponent;
}());



/***/ }),

/***/ "./src/example/components/tables/table-bordered/table-bordered.component.html":
/*!************************************************************************************!*\
  !*** ./src/example/components/tables/table-bordered/table-bordered.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered\">\n  <thead>\n  <tr>\n    <th>#</th>\n    <th>First Name</th>\n    <th>Last Name</th>\n    <th>Username</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <th scope=\"row\">1</th>\n    <td>Mark</td>\n    <td>Otto</td>\n    <td>@mdo</td>\n  </tr>\n  <tr>\n    <th scope=\"row\">2</th>\n    <td>Mark</td>\n    <td>Otto</td>\n    <td>@TwBootstrap</td>\n  </tr>\n  <tr>\n    <th scope=\"row\">3</th>\n    <td>Jacob</td>\n    <td>Thornton</td>\n    <td>@fat</td>\n  </tr>\n  <tr>\n    <th scope=\"row\">4</th>\n    <td colspan=\"2\">Larry the Bird</td>\n    <td>@twitter</td>\n  </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/example/components/tables/table-bordered/table-bordered.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/example/components/tables/table-bordered/table-bordered.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TableBorderedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBorderedComponent", function() { return TableBorderedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableBorderedComponent = /** @class */ (function () {
    function TableBorderedComponent() {
    }
    TableBorderedComponent.prototype.ngOnInit = function () {
    };
    TableBorderedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-bordered',
            template: __webpack_require__(/*! ./table-bordered.component.html */ "./src/example/components/tables/table-bordered/table-bordered.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], TableBorderedComponent);
    return TableBorderedComponent;
}());



/***/ }),

/***/ "./src/example/components/tables/table-hoverable/table-hoverable.component.html":
/*!**************************************************************************************!*\
  !*** ./src/example/components/tables/table-hoverable/table-hoverable.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n  <thead>\n  <tr>\n    <th>#</th>\n    <th>First Name</th>\n    <th>Last Name</th>\n    <th>Username</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <th scope=\"row\">1</th>\n    <td>Mark</td>\n    <td>Otto</td>\n    <td>@mdo</td>\n  </tr>\n  <tr>\n    <th scope=\"row\">2</th>\n    <td>Jacob</td>\n    <td>Thornton</td>\n    <td>@fat</td>\n  </tr>\n  <tr>\n    <th scope=\"row\">3</th>\n    <td>Larry</td>\n    <td>The bird</td>\n    <td>@twitter</td>\n  </tr>\n  <tr>\n    <th scope=\"row\">3</th>\n    <td colspan=\"2\">Larry the Bird</td>\n    <td>@twitter</td>\n  </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/example/components/tables/table-hoverable/table-hoverable.component.ts":
/*!************************************************************************************!*\
  !*** ./src/example/components/tables/table-hoverable/table-hoverable.component.ts ***!
  \************************************************************************************/
/*! exports provided: TableHoverableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHoverableComponent", function() { return TableHoverableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableHoverableComponent = /** @class */ (function () {
    function TableHoverableComponent() {
    }
    TableHoverableComponent.prototype.ngOnInit = function () {
    };
    TableHoverableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-hoverable',
            template: __webpack_require__(/*! ./table-hoverable.component.html */ "./src/example/components/tables/table-hoverable/table-hoverable.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], TableHoverableComponent);
    return TableHoverableComponent;
}());



/***/ }),

/***/ "./src/example/components/tables/table-small/table-small.component.html":
/*!******************************************************************************!*\
  !*** ./src/example/components/tables/table-small/table-small.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-sm\">\n  <thead>\n  <tr>\n    <th>#</th>\n    <th>First Name</th>\n    <th>Last Name</th>\n    <th>Username</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <th scope=\"row\">1</th>\n    <td>Mark</td>\n    <td>Otto</td>\n    <td>@mdo</td>\n  </tr>\n  <tr>\n    <th scope=\"row\">2</th>\n    <td>Jacob</td>\n    <td>Thornton</td>\n    <td>@fat</td>\n  </tr>\n  <tr>\n    <th scope=\"row\">3</th>\n    <td>Larry</td>\n    <td>The bird</td>\n    <td>@twitter</td>\n  </tr>\n  <tr>\n    <th scope=\"row\">3</th>\n    <td colspan=\"2\">Larry the Bird</td>\n    <td>@twitter</td>\n  </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/example/components/tables/table-small/table-small.component.ts":
/*!****************************************************************************!*\
  !*** ./src/example/components/tables/table-small/table-small.component.ts ***!
  \****************************************************************************/
/*! exports provided: TableSmallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSmallComponent", function() { return TableSmallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableSmallComponent = /** @class */ (function () {
    function TableSmallComponent() {
    }
    TableSmallComponent.prototype.ngOnInit = function () {
    };
    TableSmallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-small',
            template: __webpack_require__(/*! ./table-small.component.html */ "./src/example/components/tables/table-small/table-small.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], TableSmallComponent);
    return TableSmallComponent;
}());



/***/ }),

/***/ "./src/example/components/tables/table-standard/table-standard.component.html":
/*!************************************************************************************!*\
  !*** ./src/example/components/tables/table-standard/table-standard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n  <tr>\n    <th>#</th>\n    <th>First Name</th>\n    <th>Last Name</th>\n    <th>Username</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <th scope=\"row\">1</th>\n    <td>Mark</td>\n    <td>Otto</td>\n    <td>@mdo</td>\n  </tr>\n  <tr>\n    <th scope=\"row\">2</th>\n    <td>Jacob</td>\n    <td>Thornton</td>\n    <td>@fat</td>\n  </tr>\n  <tr>\n    <th scope=\"row\">3</th>\n    <td>Larry</td>\n    <td>the Bird</td>\n    <td>@twitter</td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/example/components/tables/table-standard/table-standard.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/example/components/tables/table-standard/table-standard.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TableStandardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableStandardComponent", function() { return TableStandardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableStandardComponent = /** @class */ (function () {
    function TableStandardComponent() {
    }
    TableStandardComponent.prototype.ngOnInit = function () {
    };
    TableStandardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-standard',
            template: __webpack_require__(/*! ./table-standard.component.html */ "./src/example/components/tables/table-standard/table-standard.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], TableStandardComponent);
    return TableStandardComponent;
}());



/***/ }),

/***/ "./src/example/components/tables/table-striped/table-striped.component.html":
/*!**********************************************************************************!*\
  !*** ./src/example/components/tables/table-striped/table-striped.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\n  <thead>\n  <tr>\n    <th>#</th>\n    <th>First Name</th>\n    <th>Last Name</th>\n    <th>Username</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr>\n    <th scope=\"row\">1</th>\n    <td>Mark</td>\n    <td>Otto</td>\n    <td>@mdo</td>\n  </tr>\n  <tr>\n    <th scope=\"row\">2</th>\n    <td>Jacob</td>\n    <td>Thornton</td>\n    <td>@fat</td>\n  </tr>\n  <tr>\n    <th scope=\"row\">3</th>\n    <td>Larry</td>\n    <td>the Bird</td>\n    <td>@twitter</td>\n  </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/example/components/tables/table-striped/table-striped.component.ts":
/*!********************************************************************************!*\
  !*** ./src/example/components/tables/table-striped/table-striped.component.ts ***!
  \********************************************************************************/
/*! exports provided: TableStripedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableStripedComponent", function() { return TableStripedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableStripedComponent = /** @class */ (function () {
    function TableStripedComponent() {
    }
    TableStripedComponent.prototype.ngOnInit = function () {
    };
    TableStripedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-striped',
            template: __webpack_require__(/*! ./table-striped.component.html */ "./src/example/components/tables/table-striped/table-striped.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], TableStripedComponent);
    return TableStripedComponent;
}());



/***/ }),

/***/ "./src/example/components/tables/tables.component.html":
/*!*************************************************************!*\
  !*** ./src/example/components/tables/tables.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"tables\"><h2 class=\"px-3 px-md-0\">Tables</h2></a>\n<div class=\"alert alert-info\"><strong>Want more table features?</strong> The examples below shows the markup and classes needed when using standard html tables, if you're using angular and want support for sorting, filtering, search, export to CSV etc. please check out <a class=\"alert-link\" href=\"https://hjalmers.github.io/angular-generic-table/\" target=\"_blank\">Angular Generic Table</a>.</div>\n<div class=\"row\">\n  <div class=\"col-md-6 mb-4\">\n    <h4 class=\"px-3 px-md-0\">\n      Standard table\n    </h4>\n    <div class=\"card\" #tableExample>\n      <div class=\"card-body\">\n        <app-table-standard></app-table-standard>\n        <app-snippet-wrapper [snippets]=\"SNIPPETS.standard\"></app-snippet-wrapper>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 mb-4\">\n    <h4 class=\"px-3 px-md-0\">\n      Striped rows\n    </h4>\n    <div class=\"card\" #tableExampleStriped>\n      <div class=\"card-body\">\n        <app-table-striped></app-table-striped>\n        <app-snippet-wrapper [snippets]=\"SNIPPETS.striped\"></app-snippet-wrapper>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 mb-4\">\n    <h4 class=\"px-3 px-md-0\">Bordered table</h4>\n    <div class=\"card\" #tableExampleBordered>\n      <div class=\"card-body\">\n        <app-table-bordered></app-table-bordered>\n        <app-snippet-wrapper [snippets]=\"SNIPPETS.bordered\"></app-snippet-wrapper>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 mb-4\">\n    <h4 class=\"px-3 px-md-0\">Hoverable rows</h4>\n    <div class=\"card\" #tableExampleHover>\n      <div class=\"card-body\">\n        <app-table-hoverable></app-table-hoverable>\n        <app-snippet-wrapper [snippets]=\"SNIPPETS.bordered\"></app-snippet-wrapper>\n      </div>\n    </div>\n  </div>\n  <div class=\"clearfix hidden-sm-down\"></div>\n  <div class=\"col-md-6 mb-4\">\n    <h4 class=\"px-3 px-md-0\">Small table</h4>\n    <div class=\"card\" #tableExampleSmall>\n      <div class=\"card-body\">\n        <app-table-small></app-table-small>\n        <app-snippet-wrapper [snippets]=\"SNIPPETS.bordered\"></app-snippet-wrapper>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 mb-4\">\n    <h4 class=\"px-3 px-md-0\">Expanded row</h4>\n    <div class=\"card\" #tableExampleExpand>\n      <div class=\"card-body\"><table class=\"table table-sm table-expandable\">\n        <thead>\n        <tr>\n          <th>First Name</th>\n          <th>Last Name</th>\n          <th>Username</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>Mark</td>\n          <td>Otto</td>\n          <td>@mdo</td>\n        </tr>\n        <tr class=\"row-open\">\n          <td>Jacob</td>\n          <td>Thornton</td>\n          <td>@fat</td>\n        </tr>\n        <tr class=\"row-expanded\">\n          <td colspan=\"3\">This row is expanded</td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">Larry the Bird</td>\n          <td>@twitter</td>\n        </tr>\n        </tbody>\n      </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/example/components/tables/tables.component.ts":
/*!***********************************************************!*\
  !*** ./src/example/components/tables/tables.component.ts ***!
  \***********************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
        this.SNIPPETS = {
            standard: [
                {
                    name: 'markup',
                    lang: 'markup',
                    src: 'tables/table-standard/table-standard.component.html'
                }
            ],
            striped: [{
                    name: 'markup',
                    lang: 'markup',
                    src: 'tables/table-striped/table-striped.component.html'
                }],
            bordered: [{
                    name: 'markup',
                    lang: 'markup',
                    src: 'tables/table-bordered/table-bordered.component.html'
                }],
            hoverable: [{
                    name: 'markup',
                    lang: 'markup',
                    src: 'tables/table-hoverable/table-hoverable.component.html'
                }],
            small: [{
                    name: 'markup',
                    lang: 'markup',
                    src: 'tables/table-small/table-small.component.html'
                }]
        };
    }
    TablesComponent.prototype.ngOnInit = function () {
    };
    TablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! ./tables.component.html */ "./src/example/components/tables/tables.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/example/components/tabs/tabs.component.html":
/*!*********************************************************!*\
  !*** ./src/example/components/tabs/tabs.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"tabs\"><h2 class=\"my-3\">Tabs</h2></a>\n<div class=\"card mb-4\">\n  <div class=\"card-body\">\n    <p>Use tabs to enable easy switching between different content without navigating away. Tabs can be used on small screens like mobile devices too but consider switching to <a routerLink=\"/dropdowns\">dropdowns</a> or a regular <a routerLink=\"/dropdowns\">select</a> instead when tabs are displayed on mobiles.</p>\n    <div class=\"alert alert-info\"><strong>Framework needed!</strong> Please note that the example below is just a representation of how tabs look and the needed markup. In order to use tabs you need a framework to control when and how to show them. If you're using angular, please take a look at <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/\" target=\"_blank\">ng-bootstrap</a> and their <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/#/components/tabs\" target=\"_blank\">tabs component</a> or use <code>*ngFor</code> to loop through the items and render them as tabs.</div>\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"#\">Active</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <exemplify [selector]=\"'.nav'\"></exemplify>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/example/components/tabs/tabs.component.ts":
/*!*******************************************************!*\
  !*** ./src/example/components/tabs/tabs.component.ts ***!
  \*******************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/example/components/tabs/tabs.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/example/example.module.ts":
/*!***************************************!*\
  !*** ./src/example/example.module.ts ***!
  \***************************************/
/*! exports provided: ExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleModule", function() { return ExampleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/buttons/buttons.component */ "./src/example/components/buttons/buttons.component.ts");
/* harmony import */ var _shared_components_code_code_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/code/code.component */ "./src/example/shared/components/code/code.component.ts");
/* harmony import */ var _components_buttons_buttons_main_buttons_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/buttons/buttons-main/buttons-main.component */ "./src/example/components/buttons/buttons-main/buttons-main.component.ts");
/* harmony import */ var _shared_components_snippet_wrapper_snippet_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/snippet-wrapper/snippet-wrapper.component */ "./src/example/shared/components/snippet-wrapper/snippet-wrapper.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_buttons_buttons_sizes_buttons_sizes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/buttons/buttons-sizes/buttons-sizes.component */ "./src/example/components/buttons/buttons-sizes/buttons-sizes.component.ts");
/* harmony import */ var _components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/alerts/alerts.component */ "./src/example/components/alerts/alerts.component.ts");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tabs/tabs.component */ "./src/example/components/tabs/tabs.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/tables/tables.component */ "./src/example/components/tables/tables.component.ts");
/* harmony import */ var _components_tables_table_standard_table_standard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tables/table-standard/table-standard.component */ "./src/example/components/tables/table-standard/table-standard.component.ts");
/* harmony import */ var _components_tables_table_striped_table_striped_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tables/table-striped/table-striped.component */ "./src/example/components/tables/table-striped/table-striped.component.ts");
/* harmony import */ var _components_tables_table_bordered_table_bordered_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/tables/table-bordered/table-bordered.component */ "./src/example/components/tables/table-bordered/table-bordered.component.ts");
/* harmony import */ var _components_tables_table_hoverable_table_hoverable_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tables/table-hoverable/table-hoverable.component */ "./src/example/components/tables/table-hoverable/table-hoverable.component.ts");
/* harmony import */ var _components_tables_table_small_table_small_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tables/table-small/table-small.component */ "./src/example/components/tables/table-small/table-small.component.ts");
/* harmony import */ var angular_exemplify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-exemplify */ "./node_modules/angular-exemplify/fesm5/angular-exemplify.js");
/* harmony import */ var _components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/breadcrumbs/breadcrumbs.component */ "./src/example/components/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/forms/forms.component */ "./src/example/components/forms/forms.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_checkboxes_and_slide_toggles_checkboxes_and_slide_toggles_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component */ "./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_icons_icons_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/icons/icons.component */ "./src/example/components/icons/icons.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "./node_modules/@fortawesome/pro-light-svg-icons/index.es.js");
/* harmony import */ var _components_input_group_input_group_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/input-group/input-group.component */ "./src/example/components/input-group/input-group.component.ts");
/* harmony import */ var _components_list_group_list_group_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/list-group/list-group.component */ "./src/example/components/list-group/list-group.component.ts");
/* harmony import */ var _components_loaders_loaders_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/loaders/loaders.component */ "./src/example/components/loaders/loaders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_25__["library"].add(_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_26__["faArrowAltRight"]);
var ExampleModule = /** @class */ (function () {
    function ExampleModule() {
    }
    ExampleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                angular_exemplify__WEBPACK_IMPORTED_MODULE_17__["ExemplifyModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_24__["FontAwesomeModule"]
            ],
            declarations: [
                _components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__["ButtonsComponent"],
                _shared_components_code_code_component__WEBPACK_IMPORTED_MODULE_3__["CodeComponent"],
                _components_buttons_buttons_main_buttons_main_component__WEBPACK_IMPORTED_MODULE_4__["ButtonsMainComponent"],
                _shared_components_snippet_wrapper_snippet_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["SnippetWrapperComponent"],
                _components_buttons_buttons_sizes_buttons_sizes_component__WEBPACK_IMPORTED_MODULE_7__["ButtonsSizesComponent"],
                _components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_8__["AlertsComponent"],
                _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__["TabsComponent"],
                _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_11__["TablesComponent"],
                _components_tables_table_standard_table_standard_component__WEBPACK_IMPORTED_MODULE_12__["TableStandardComponent"],
                _components_tables_table_striped_table_striped_component__WEBPACK_IMPORTED_MODULE_13__["TableStripedComponent"],
                _components_tables_table_bordered_table_bordered_component__WEBPACK_IMPORTED_MODULE_14__["TableBorderedComponent"],
                _components_tables_table_hoverable_table_hoverable_component__WEBPACK_IMPORTED_MODULE_15__["TableHoverableComponent"],
                _components_tables_table_small_table_small_component__WEBPACK_IMPORTED_MODULE_16__["TableSmallComponent"],
                _components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbsComponent"],
                _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_19__["FormsComponent"],
                _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_19__["PersonalIdentityNumberDirective"],
                _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_19__["ValidationMessagePipe"],
                _components_checkboxes_and_slide_toggles_checkboxes_and_slide_toggles_component__WEBPACK_IMPORTED_MODULE_21__["CheckboxesAndSlideTogglesComponent"],
                _components_icons_icons_component__WEBPACK_IMPORTED_MODULE_23__["IconsComponent"],
                _components_input_group_input_group_component__WEBPACK_IMPORTED_MODULE_27__["InputGroupComponent"],
                _components_list_group_list_group_component__WEBPACK_IMPORTED_MODULE_28__["ListGroupComponent"],
                _components_loaders_loaders_component__WEBPACK_IMPORTED_MODULE_29__["LoadersComponent"]
            ],
            exports: [_components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_2__["ButtonsComponent"], _shared_components_code_code_component__WEBPACK_IMPORTED_MODULE_3__["CodeComponent"]]
        })
    ], ExampleModule);
    return ExampleModule;
}());



/***/ }),

/***/ "./src/example/shared/components/code/code.component.scss":
/*!****************************************************************!*\
  !*** ./src/example/shared/components/code/code.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "pre {\n  padding-top: .5rem;\n  border-left: 10px solid #41B0EE;\n  padding-bottom: .5rem !important; }\n\npre code {\n  box-shadow: none;\n  border-left: none;\n  background-image: linear-gradient(transparent 50%, rgba(233, 233, 233, 0.5) 50%); }\n\n::ng-deep .token.selector, ::ng-deep .token.attr-name, ::ng-deep .token.string, ::ng-deep .token.char, ::ng-deep .token.function, ::ng-deep .token.builtin, ::ng-deep .token.inserted {\n  color: #379D00; }\n\n::ng-deep .token.property, ::ng-deep .token.tag, ::ng-deep .token.boolean, ::ng-deep .token.number, ::ng-deep .token.function-name, ::ng-deep .token.constant, ::ng-deep .token.symbol, ::ng-deep .token.deleted {\n  color: #673AB6; }\n\n::ng-deep .token.atrule, ::ng-deep .token.attr-value, ::ng-deep .token.keyword, ::ng-deep .token.class-name {\n  color: #0092E1; }\n\n::ng-deep pre[class*=\"language-\"]:before, ::ng-deep pre[class*=\"language-\"]:after {\n  display: none; }\n\n@media (min-width: 576px) {\n  .btn-copy {\n    position: absolute;\n    top: 0;\n    right: 0;\n    opacity: 0;\n    transition: opacity 400ms ease-in-out; } }\n\n@media (max-width: 575.98px) {\n  .btn-copy {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 70px; } }\n"

/***/ }),

/***/ "./src/example/shared/components/code/code.component.ts":
/*!**************************************************************!*\
  !*** ./src/example/shared/components/code/code.component.ts ***!
  \**************************************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_code_highlight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/code-highlight.service */ "./src/example/shared/services/code-highlight.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_window_ref_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/window-ref.service */ "./src/example/shared/services/window-ref.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CodeComponent = /** @class */ (function () {
    function CodeComponent(_codeHighlight, http, windowRef) {
        this._codeHighlight = _codeHighlight;
        this.http = http;
        this.windowRef = windowRef;
        /**
         * Copy to clipboard
         * @param {string} text - text to be copied to clipboard.
         */
        this.copyToClipboard = function (text) {
            if (this.window.clipboardData && this.window.clipboardData.setData) {
                // IE specific code path to prevent textarea being shown while dialog is visible.
                return this.window.clipboardData.setData("Text", text);
            }
            else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
                var textarea = document.createElement("textarea");
                textarea.textContent = text;
                textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    return document.execCommand("copy"); // Security exception may be thrown by some browsers.
                }
                catch (ex) {
                    console.warn("Copy to clipboard failed.", ex);
                    return false;
                }
                finally {
                    document.body.removeChild(textarea);
                }
            }
        };
        this.window = this.windowRef.nativeWindow;
    }
    Object.defineProperty(CodeComponent.prototype, "snippet", {
        get: function () {
            return this._snippet;
        },
        set: function (snippet) {
            var _this = this;
            this._snippet = __assign({}, snippet, { code: snippet.src.indexOf('http') !== -1 ? this.getSourceCode(snippet.src) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(__webpack_require__("./src/example/components sync recursive ./!./node_modules/raw-loader/index.js!./ ^\\.\\/.*$")("./" + snippet.src)) });
            this.snippet.code
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
                .subscribe(function (code) {
                _this.highlight(code, _this.snippet.lang);
                _this.code = code;
            });
        },
        enumerable: true,
        configurable: true
    });
    CodeComponent.prototype.highlight = function (code, lang) {
        this.parsedSnippet = this._codeHighlight.highlight(code, lang);
    };
    CodeComponent.prototype.getSourceCode = function (url) {
        return this.http.get(url, { responseType: 'text' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], CodeComponent.prototype, "snippet", null);
    CodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-code',
            template: "\n    <button class=\"btn btn-link btn-copy\" (click)=\"copyToClipboard(code)\" *ngIf=\"code\">Copy</button>\n    <pre class=\"pb-3 m-0 language-{{snippet?.lang}}\">\n      <code class=\"language-{{snippet?.lang}}\" [innerHTML]=\"parsedSnippet\"></code>\n    </pre>",
            styles: [__webpack_require__(/*! ./code.component.scss */ "./src/example/shared/components/code/code.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_code_highlight_service__WEBPACK_IMPORTED_MODULE_1__["CodeHighlightService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_window_ref_service__WEBPACK_IMPORTED_MODULE_5__["WindowRef"]])
    ], CodeComponent);
    return CodeComponent;
}());



/***/ }),

/***/ "./src/example/shared/components/snippet-wrapper/snippet-wrapper.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/example/shared/components/snippet-wrapper/snippet-wrapper.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: relative;\n  margin-top: 1rem; }\n  :host:hover ::ng-deep.btn-copy {\n    opacity: 1; }\n  @media (max-width: 575.98px) {\n  .custom-select {\n    padding-right: 90px;\n    background-position-x: calc(100% - 65px); } }\n"

/***/ }),

/***/ "./src/example/shared/components/snippet-wrapper/snippet-wrapper.component.ts":
/*!************************************************************************************!*\
  !*** ./src/example/shared/components/snippet-wrapper/snippet-wrapper.component.ts ***!
  \************************************************************************************/
/*! exports provided: SnippetWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnippetWrapperComponent", function() { return SnippetWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SnippetWrapperComponent = /** @class */ (function () {
    function SnippetWrapperComponent() {
    }
    Object.defineProperty(SnippetWrapperComponent.prototype, "snippets", {
        get: function () {
            return this._snippets;
        },
        set: function (value) {
            this._snippets = value.map(function (snippet) {
                return {
                    name: snippet.name || snippet.src.split('/').pop(),
                    lang: snippet.lang,
                    src: snippet.src,
                };
            });
            if (!this.activeSnippet) {
                this.setActiveSnippet(this.snippets[0]);
            }
        },
        enumerable: true,
        configurable: true
    });
    SnippetWrapperComponent.prototype.setActiveSnippet = function (snippet) {
        this.activeSnippet = snippet;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], SnippetWrapperComponent.prototype, "snippets", null);
    SnippetWrapperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snippet-wrapper',
            template: "\n    <ul class=\"nav nav-tabs d-none d-sm-flex\">\n      <li class=\"nav-item\" *ngFor=\"let snippet of snippets\">\n        <button class=\"btn-link nav-link\" [ngClass]=\"{'active': snippet.name === activeSnippet.name}\"\n                (click)=\"setActiveSnippet(snippet)\">{{snippet.name}}\n        </button>\n      </li>\n    </ul>\n    <select class=\"custom-select d-sm-none\" [(ngModel)]=\"activeSnippet\">\n      <option *ngFor=\"let snippet of snippets\" [ngValue]=\"snippet\">{{snippet.name}}</option>\n    </select>\n    <app-code [snippet]=\"activeSnippet\"></app-code>\n  ",
            styles: [__webpack_require__(/*! ./snippet-wrapper.component.scss */ "./src/example/shared/components/snippet-wrapper/snippet-wrapper.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SnippetWrapperComponent);
    return SnippetWrapperComponent;
}());



/***/ }),

/***/ "./src/example/shared/services/code-highlight.service.ts":
/*!***************************************************************!*\
  !*** ./src/example/shared/services/code-highlight.service.ts ***!
  \***************************************************************/
/*! exports provided: CodeHighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeHighlightService", function() { return CodeHighlightService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "./node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/components/prism-bash */ "./node_modules/prismjs/components/prism-bash.js");
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Prism tries to highlight the whole document on DOMContentLoad.
// Unfortunately with webpack the only way of disabling it
// is by simply forcing it to highlight no elements -> []
prismjs__WEBPACK_IMPORTED_MODULE_1__["hooks"].add('before-highlightall', function (env) {
    env['elements'] = [];
});
var CodeHighlightService = /** @class */ (function () {
    function CodeHighlightService() {
    }
    CodeHighlightService.prototype.highlight = function (code, lang) {
        try {
            return prismjs__WEBPACK_IMPORTED_MODULE_1__["highlight"](code.trim(), prismjs__WEBPACK_IMPORTED_MODULE_1__["languages"][lang]);
        }
        catch (error) {
            console.log(error);
        }
    };
    CodeHighlightService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], CodeHighlightService);
    return CodeHighlightService;
}());



/***/ }),

/***/ "./src/example/shared/services/window-ref.service.ts":
/*!***********************************************************!*\
  !*** ./src/example/shared/services/window-ref.service.ts ***!
  \***********************************************************/
/*! exports provided: WindowRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WindowRef);
    return WindowRef;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/sebgroup/bootstrap/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map