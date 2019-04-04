(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/lib/package.json":
/*!*******************************!*\
  !*** ./dist/lib/package.json ***!
  \*******************************/
/*! exports provided: name, version, description, main, scripts, repository, publishConfig, author, license, bugs, homepage, dependencies, default */
/***/ (function(module) {

module.exports = {"name":"@sebgroup/bootstrap","version":"3.3.0","description":"A standalone bootstrap theme for SEB","main":"scss/bootstrap.scss","scripts":{"test":"echo \"Error: no test specified\" && exit 1"},"repository":{"type":"git","url":"git+https://github.com/sebgroup/bootstrap.git"},"publishConfig":{"registry":"https://registry.npmjs.org/","access":"public"},"author":"Robert Hjalmers","license":"Apache-2.0","bugs":{"url":"https://github.com/sebgroup/bootstrap/issues"},"homepage":"https://sebgroup.github.io/bootstrap/","dependencies":{"@sebgroup/fonts":"^1.0.0"}};

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/datepicker/datepicker-input/datepicker-input.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/datepicker/datepicker-input/datepicker-input.component.ts ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-datepicker-input',\n  templateUrl: './datepicker-input.component.html'\n})\nexport class DatepickerInputComponent {\n\n  model;\n  constructor() { }\n\n}\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.ts ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "import { Component } from '@angular/core';\nimport { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n  selector: 'app-datepicker-simple',\n  templateUrl: './datepicker-simple.component.html',\n  styles: []\n})\nexport class DatepickerSimpleComponent {\n\n  model: NgbDateStruct;\n  date: {year: number, month: number};\n  constructor(private calendar: NgbCalendar) {\n  }\n\n  selectToday() {\n    this.model = this.calendar.getToday();\n  }\n\n}\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _example_components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../example/components/buttons/buttons.component */ "./src/example/components/buttons/buttons.component.ts");
/* harmony import */ var _example_components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../example/components/alerts/alerts.component */ "./src/example/components/alerts/alerts.component.ts");
/* harmony import */ var _example_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../example/components/tabs/tabs.component */ "./src/example/components/tabs/tabs.component.ts");
/* harmony import */ var _example_components_tables_tables_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../example/components/tables/tables.component */ "./src/example/components/tables/tables.component.ts");
/* harmony import */ var _example_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../example/components/breadcrumbs/breadcrumbs.component */ "./src/example/components/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _example_components_forms_forms_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../example/components/forms/forms.component */ "./src/example/components/forms/forms.component.ts");
/* harmony import */ var _example_components_checkboxes_and_slide_toggles_checkboxes_and_slide_toggles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component */ "./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.ts");
/* harmony import */ var _example_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../example/components/icons/icons.component */ "./src/example/components/icons/icons.component.ts");
/* harmony import */ var _example_components_input_group_input_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../example/components/input-group/input-group.component */ "./src/example/components/input-group/input-group.component.ts");
/* harmony import */ var _example_components_list_group_list_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../example/components/list-group/list-group.component */ "./src/example/components/list-group/list-group.component.ts");
/* harmony import */ var _example_components_dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../example/components/dropdowns/dropdowns.component */ "./src/example/components/dropdowns/dropdowns.component.ts");
/* harmony import */ var _example_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../example/components/cards/cards.component */ "./src/example/components/cards/cards.component.ts");
/* harmony import */ var _example_components_modals_modals_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../example/components/modals/modals.component */ "./src/example/components/modals/modals.component.ts");
/* harmony import */ var _example_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../example/components/pagination/pagination.component */ "./src/example/components/pagination/pagination.component.ts");
/* harmony import */ var _example_components_tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../example/components/tooltips/tooltips.component */ "./src/example/components/tooltips/tooltips.component.ts");
/* harmony import */ var _example_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../example/components/accordion/accordion.component */ "./src/example/components/accordion/accordion.component.ts");
/* harmony import */ var _example_components_typography_typography_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../example/components/typography/typography.component */ "./src/example/components/typography/typography.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _example_components_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../example/components/skeleton-loader/skeleton-loader.component */ "./src/example/components/skeleton-loader/skeleton-loader.component.ts");
/* harmony import */ var _example_components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../example/components/datepicker/datepicker.component */ "./src/example/components/datepicker/datepicker.component.ts");
/* harmony import */ var _example_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../example/components/navbar/navbar.component */ "./src/example/components/navbar/navbar.component.ts");
/* harmony import */ var _example_components_radio_buttons_radio_buttons_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../example/components/radio-buttons/radio-buttons.component */ "./src/example/components/radio-buttons/radio-buttons.component.ts");
/* harmony import */ var _example_components_colors_colors_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../example/components/colors/colors.component */ "./src/example/components/colors/colors.component.ts");
/* harmony import */ var _example_components_toast_notifications_toast_notifications_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../example/components/toast-notifications/toast-notifications.component */ "./src/example/components/toast-notifications/toast-notifications.component.ts");
/* harmony import */ var _example_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../example/components/spinners/spinners.component */ "./src/example/components/spinners/spinners.component.ts");
/* harmony import */ var _example_components_button_group_button_group_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../example/components/button-group/button-group.component */ "./src/example/components/button-group/button-group.component.ts");





























var routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'typography', component: _example_components_typography_typography_component__WEBPACK_IMPORTED_MODULE_19__["TypographyComponent"] },
    { path: 'tables', component: _example_components_tables_tables_component__WEBPACK_IMPORTED_MODULE_6__["TablesComponent"] },
    { path: 'colors', component: _example_components_colors_colors_component__WEBPACK_IMPORTED_MODULE_25__["ColorsComponent"] },
    { path: 'modals', component: _example_components_modals_modals_component__WEBPACK_IMPORTED_MODULE_15__["ModalsComponent"] },
    { path: 'cards', component: _example_components_cards_cards_component__WEBPACK_IMPORTED_MODULE_14__["CardsComponent"] },
    { path: 'buttons', component: _example_components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"] },
    { path: 'button-group', component: _example_components_button_group_button_group_component__WEBPACK_IMPORTED_MODULE_28__["ButtonGroupComponent"] },
    { path: 'input-group', component: _example_components_input_group_input_group_component__WEBPACK_IMPORTED_MODULE_11__["InputGroupComponent"] },
    { path: 'forms', component: _example_components_forms_forms_component__WEBPACK_IMPORTED_MODULE_8__["FormsComponent"] },
    { path: 'checkboxes-and-slide-toggles', component: _example_components_checkboxes_and_slide_toggles_checkboxes_and_slide_toggles_component__WEBPACK_IMPORTED_MODULE_9__["CheckboxesAndSlideTogglesComponent"] },
    { path: 'radio-buttons', component: _example_components_radio_buttons_radio_buttons_component__WEBPACK_IMPORTED_MODULE_24__["RadioButtonsComponent"] },
    { path: 'pagination', component: _example_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__["PaginationComponent"] },
    { path: 'tabs', component: _example_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabsComponent"] },
    { path: 'alerts', component: _example_components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_4__["AlertsComponent"] },
    { path: 'breadcrumbs', component: _example_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsComponent"] },
    { path: 'tooltips', component: _example_components_tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_17__["TooltipsComponent"] },
    { path: 'toast-notifications', component: _example_components_toast_notifications_toast_notifications_component__WEBPACK_IMPORTED_MODULE_26__["ToastNotificationsComponent"] },
    //{ path: 'example-page', component: ExamplePageComponent },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_20__["AboutComponent"] },
    { path: 'dropdowns', component: _example_components_dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_13__["DropdownsComponent"] },
    { path: 'accordion', component: _example_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_18__["AccordionComponent"] },
    //{ path: 'grid', component: GridComponent },
    { path: 'icons', component: _example_components_icons_icons_component__WEBPACK_IMPORTED_MODULE_10__["IconsComponent"] },
    { path: 'list-group', component: _example_components_list_group_list_group_component__WEBPACK_IMPORTED_MODULE_12__["ListGroupComponent"] },
    { path: 'spinners', component: _example_components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_27__["SpinnersComponent"] },
    //{ path: 'wizard', component: WizardExampleComponent },
    { path: 'skeleton-loader', component: _example_components_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_21__["SkeletonLoaderComponent"] },
    { path: 'datepicker', component: _example_components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_22__["DatepickerComponent"] },
    { path: 'navbar', component: _example_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_23__["NavbarComponent"] },
    { path: '**', redirectTo: 'about' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<app-mobile-navigation></app-mobile-navigation>\n<app-side-navigation></app-side-navigation>\n<app-header></app-header>\n<div class=\"content\" (window:scroll)=\"scroll($event)\" style=\"z-index: 0;\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"mx-auto mt-5 mt-lg-0 pt-3 pt-lg-0\" style=\"max-width: 920px\">\n        <router-outlet></router-outlet>\n        <div class=\"py-3 text-center\">Version: <a href=\"{{'https://github.com/sebgroup/bootstrap/releases/' + versionLink}}\" target=\"_blank\" class=\"mr-3\">{{version}}</a>Build: {{travis_build_number}} </div>\n      </div>\n    </div>\n  </div>\n  <!--<app-sub-header [scrollPosition]=\"scrollPosition\"></app-sub-header>-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\n@media (min-width: 992px) {\n  .content {\n    margin-left: 256px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2FuaW1hdGlvbnMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc2Nzcy9ib290c3RyYXAtY29yZS9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvc2ViZ3JvdXAvYm9vdHN0cmFwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEQTs7Ozs7O0dBTUc7QUNUQztFQ3pERjtJQUNFLG1CQUFrQixFQUNuQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFuaW1hdGlvbnM6IChcbiAgc2xpZGVJbkxlZnQ6IHNsaWRlSW5MZWZ0ICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluUmlnaHQ6IHNsaWRlSW5SaWdodCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJblVwOiBzbGlkZUluVXAgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5Eb3duOiBzbGlkZUluRG93biAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgZmFkZUluOiBmYWRlSW4gJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbixcbiAgZmFkZUluVXA6IGZhZGVJblVwICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24sXG4pO1xuXG5AbWl4aW4gYW5pbWF0aW9ucygpIHtcbiAgQGlmICRlbmFibGUtdHJhbnNpdGlvbnMge1xuICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDMwcHgsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEFkZCBvbmUgb3IgbW9yZSB0cmFuc2l0aW9uc1xuICpcbiAqIEBleGFtcGxlXG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbignc2xpZGVJblVwJyk7XG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbigoJ3NsaWRlSW5VcCcsJ2ZhZGVJbicpKVxuICovXG5AbWl4aW4gYWRkLXRyYW5zaXRpb24oJGxpc3QpIHtcbiAgJGNvbWJpbmVkOiAnJztcbiAgQGlmIHR5cGUtb2YoJGxpc3QpID09ICdzdHJpbmcnIHtcbiAgICBhbmltYXRpb246IG1hcF9nZXQoJGFuaW1hdGlvbnMsICRsaXN0KTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCRsaXN0KSA9PSAnbGlzdCcge1xuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRsaXN0KSB7XG4gICAgICAkYW5pbTogbWFwX2dldCgkYW5pbWF0aW9ucywgbnRoKCRsaXN0LCAkaSkpO1xuICAgICAgQGlmICRhbmltID09IG51bGwge1xuICAgICAgICBAd2FybiBudGgoJGxpc3QsICRpKSB1bnF1b3RlKCdub3QgZm91bmQsIHBsZWFzZSB1c2Ugb25lIG9mIHRoZSBmb2xsb3dpbmcgYW5pbWF0aW9uczonKSB0by1saXN0KCRhbmltYXRpb25zLCAna2V5cycpO1xuICAgICAgfVxuXG4gICAgICBAaWYgJGkgPT0gbGVuZ3RoKCRsaXN0KSB7XG4gICAgICAgICRjb21iaW5lZDogJGNvbWJpbmVkICsgJGFuaW07XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgICRjb21iaW5lZDogJGNvbWJpbmVkICsgJGFuaW0gKyAnLCc7XG4gICAgICB9XG4gICAgfVxuICAgIGFuaW1hdGlvbjogdW5xdW90ZSgkY29tYmluZWQpO1xuICB9XG59XG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uL3Njc3MvbWl4aW5zL21peGluc1wiO1xuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xuICAuY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1NnB4O1xuICB9XG59XG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.travis_build_number = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].travis_build_number;
        this.version = (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version === '0.0.0-semantically-released' || _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version === 'n/a') ? 'unreleased dev version' : _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version;
        this.versionLink = (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version === '0.0.0-semantically-released' || _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version === 'n/a') ? 'latest' : 'tag/v' + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].version;
    }
    AppComponent.prototype.scroll = function ($event) {
        this.scrollPosition = $event.target.scrollingElement.scrollTop;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _example_example_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../example/example.module */ "./src/example/example.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/side-navigation/side-navigation.component */ "./src/app/components/side-navigation/side-navigation.component.ts");
/* harmony import */ var _components_mobile_navigation_mobile_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mobile-navigation/mobile-navigation.component */ "./src/app/components/mobile-navigation/mobile-navigation.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_6__["SideNavigationComponent"],
                _components_mobile_navigation_mobile_navigation_component__WEBPACK_IMPORTED_MODULE_7__["MobileNavigationComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
                    timeOut: 10000,
                    closeButton: true,
                    disableTimeOut: false,
                    progressBar: true,
                    positionClass: 'toast-bottom-right',
                    enableHtml: true
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastContainerModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _example_example_module__WEBPACK_IMPORTED_MODULE_4__["ExampleModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"px-3 px-md-0 my-3\">About</h1>\n<div class=\"card mb-5\">\n  <div class=\"card-body\">\n    <h3 class=\"card-title\">What is sebgroup/bootstrap?</h3>\n    <p class=\"lead mb-0\">sebgroup/bootstrap is a standalone theme built on <a href=\"https://sebgroup.github.io/bootstrap/\" target=\"_blank\">Bootstrap 4</a>, note that there's no dependencies to bootstrap other than the requirement to follow their markup.</p>\n  </div>\n  <div class=\"card-body pt-0\">\n    <h4 class=\"card-title\">Bootstrap markup</h4>\n    <p>sebgroup/bootstrap has no external dependency to bootstrap but since the project is built on top off bootstrap, all markup examples on their website will work for sebgroup/bootstrap too. Please note that not all components have been styled for SEB yet and this library doesn't include any Javascript either.</p>\n    <p>The later is by design as the goal and purpose of this project is to hold <strong>common styles for standard web components</strong> and not control how they work or behave as that would require additional Javascript and that is something most frameworks take care of ie. React, Angular, Vue etc. This is also the reason as to why some of the components like pagination, accordion etc. on the <a href=\"https://sebgroup.github.io/bootstrap/\" target=\"_blank\">demo page</a> doesn't do anything when you try to use them.</p>\n  </div>\n  <div class=\"card-body pt-0\">\n    <h4 class=\"card-title\">Getting started</h4>\n    <p>Read about how to get started in the <a href=\"https://github.com/sebgroup/bootstrap/wiki\" target=\"_blank\">wiki</a>.</p>\n  </div>\n  <div class=\"card-body pt-0\">\n    <h4 class=\"card-title\">Having issues?</h4>\n    <p>Feel free to ask questions and create issues on <a href=\"https://github.com/sebgroup/bootstrap/issues\" target=\"_blank\">github</a>.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"col-12 d-lg-none bg-white\">\n  <div class=\"row justify-content-between justify-content-lg-end h-100\">\n    <div class=\"col col-md-auto d-none d-md-flex brand\">\n      <div class=\"row mobile-header\">\n        <div class=\"col-auto px-0\">\n          <svg class=\"seb-logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\">\n            <path d=\"M0 0h800v800H0z\" fill=\"#60cd18\"/>\n            <path d=\"M290.55 348.35l-25.87 19.32c-12.22-10.51-28-12.57-36.65-12.57s-18 2.51-19.37 8.82c-1.38 6.12 4.31 10.88 14.08 13.53 11.14 3 21.29 5.66 36.92 10.12 23.24 6.63 39.13 16.69 39.13 40 0 32.14-28.53 48.8-66.75 48.8s-64.26-19.91-72-29.2l27.35-20.45c19.21 16.75 32.57 19.11 43.74 19.11 12.81 0 24.79-2.75 26.33-10 1.25-5.82-3.58-10.45-14.49-13-12.35-2.85-22.77-5.14-34.4-8.2-31.52-8.27-40.41-26.6-40.41-43.06 0-22.67 21.1-45.95 59.69-45.95 39.57 0 62.74 22.67 62.74 22.67m164.9-20.4H340.12V472.1h117.45v-33.24h-76.94v-23.22h53v-31.8h-53v-23h74.83zM310.27 505.37h9V294.63h-9zm162.45 0h9V294.63h-9zm29.8-33.27h92.64c24.77 0 44.84-14.93 44.84-38.84 0-18.65-12.21-31-29.32-36.47a9.6 9.6 0 0 0-1.66-.21 10.36 10.36 0 0 0 1.66-.29c9.8-3.88 20.66-14.21 20.66-31.8 0-22.31-19.74-36.54-44.1-36.54h-84.72zm40.7-114.17h32.36c7.45 0 13.48 5.88 13.48 12.64s-6 12.66-13.48 12.66h-32.36zm39.58 82.13h-39.58v-26.29h39.58a13.15 13.15 0 0 1 0 26.28z\" fill=\"#fff\"/>\n          </svg>\n        </div>\n        <div class=\"col-auto align-self-center text-center px-3\" (click)=\"toggleMenu()\">\n          <i class=\"fal fa-bars fa-1x d-block\"></i>\n          <div>Menu</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col d-md-none px-0\" *ngIf=\"activeTab\">\n      <div class=\"row mobile-header h-100 align-items-center text-center no-gutters\">\n        <div class=\"col\" ngClass=\"{{activeTab === 'start' ? 'active':''}}\" (click)=\"showMenu('start')\"><i class=\"fal fa-home fa-1x d-block\"></i>Start</div>\n        <div class=\"col\" ngClass=\"{{activeTab === 'base' ? 'active':''}}\" (click)=\"showMenu('base')\"><i class=\"fal fa-font fa-1x d-block\"></i>Base</div>\n        <div class=\"col\" ngClass=\"{{activeTab === 'components' ? 'active':''}}\" (click)=\"showMenu('components')\"><i class=\"fal fa-bookmark fa-1x d-block\"></i>Components</div>\n      </div>\n    </div>\n    <div class=\"col align-self-center pl-3 d-none d-sm-flex\">\n      <h3 class=\"mb-0\">Bootstrap</h3>\n    </div>\n    <div class=\"col d-none d-md-flex bg-white border-bottom sticky-header\" [@scrollAnimation]=\"stickyHeader\">\n      <div class=\"row align-items-center h-100\">\n        <div class=\"col\">\n          <h5 class=\"mb-0\">Section header</h5>\n          <ol class=\"breadcrumb mb-0 pl-0 py-0\">\n            <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n            <li class=\"breadcrumb-item active\">Section header</li>\n          </ol>\n        </div>\n        <div class=\"col-auto\">\n          <div class=\"card-menu-control\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\nheader {\n  height: 56px;\n  position: fixed;\n  z-index: 1020;\n  left: 0; }\n.brand, .profile, .mobile-header {\n  background: #333;\n  color: #fff;\n  height: 56px; }\n.seb-logo {\n  height: 56px;\n  width: 56px; }\n@media (min-width: 576px) {\n  header {\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15); } }\n@media (min-width: 992px) {\n  header {\n    width: calc(100% - 256px);\n    left: 256px; } }\n.mobile-header .col {\n  padding-top: .65rem;\n  padding-bottom: .35rem; }\n.mobile-header .active {\n  background: #60cd18; }\n.dropdown-toggle {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  cursor: pointer; }\n.dropdown-toggle::after {\n  display: none; }\n.dropdown.show {\n  background: #41B0EE; }\n.dropdown-item-link {\n  padding: 0.5rem 1.5rem; }\n.breadcrumb-container {\n  height: 56px; }\n.dropdown-header {\n  color: #343434;\n  background: #dedede; }\n.dropdown-menu .dropdown-header:first-child {\n  border-radius: 4px 4px 0 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2FuaW1hdGlvbnMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvc2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3NlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcC1jb3JlL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErREE7Ozs7OztHQU1HO0FDbkVIO0VBQ0UsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsY0NnV3NDO0VEL1Z0QyxRQUFPLEVBRVI7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsYUFBVyxFQUNaO0FBRUQ7RUFDRSxhQUFXO0VBQ1gsWUFBVyxFQUNaO0FFMENHO0VGeENGO0lBRUUsMkNBQXVDLEVBQ3hDLEVBQUE7QUVxQ0M7RUZsQ0Y7SUFHRSwwQkFBd0I7SUFDeEIsWUFBVyxFQUNaLEVBQUE7QUFHSDtFQUVJLG9CQUFtQjtFQUNuQix1QkFBc0IsRUFFdkI7QUFMSDtFQU9JLG9CQ00yQixFREw1QjtBQUVIO0VBQ0UscUJBQW9CO0VBQ3BCLHdCQUF1QjtFQUN2QixnQkFBZSxFQUNoQjtBQUVEO0VBQ0UsY0FBYSxFQUNkO0FBRUQ7RUFDRSxvQkNMNkIsRURNOUI7QUFFRDtFQUNFLHVCQUFzQixFQUN2QjtBQUVEO0VBQ0UsYUFBWSxFQUNiO0FBRUQ7RUFDRSxlQ2pEZ0I7RURrRGhCLG9CQ3ZEZ0IsRUR3RGpCO0FBRUQ7RUFDRSwyQkFBd0QsRUFDekQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYW5pbWF0aW9uczogKFxuICBzbGlkZUluTGVmdDogc2xpZGVJbkxlZnQgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5SaWdodDogc2xpZGVJblJpZ2h0ICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluVXA6IHNsaWRlSW5VcCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJbkRvd246IHNsaWRlSW5Eb3duICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBmYWRlSW46IGZhZGVJbiAkdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uLFxuICBmYWRlSW5VcDogZmFkZUluVXAgJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbixcbik7XG5cbkBtaXhpbiBhbmltYXRpb25zKCkge1xuICBAaWYgJGVuYWJsZS10cmFuc2l0aW9ucyB7XG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgZmFkZUluVXAge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMzBweCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluTGVmdCB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluVXAge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluRG93biB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQWRkIG9uZSBvciBtb3JlIHRyYW5zaXRpb25zXG4gKlxuICogQGV4YW1wbGVcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCdzbGlkZUluVXAnKTtcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCgnc2xpZGVJblVwJywnZmFkZUluJykpXG4gKi9cbkBtaXhpbiBhZGQtdHJhbnNpdGlvbigkbGlzdCkge1xuICAkY29tYmluZWQ6ICcnO1xuICBAaWYgdHlwZS1vZigkbGlzdCkgPT0gJ3N0cmluZycge1xuICAgIGFuaW1hdGlvbjogbWFwX2dldCgkYW5pbWF0aW9ucywgJGxpc3QpO1xuICB9IEBlbHNlIGlmIHR5cGUtb2YoJGxpc3QpID09ICdsaXN0JyB7XG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGxpc3QpIHtcbiAgICAgICRhbmltOiBtYXBfZ2V0KCRhbmltYXRpb25zLCBudGgoJGxpc3QsICRpKSk7XG4gICAgICBAaWYgJGFuaW0gPT0gbnVsbCB7XG4gICAgICAgIEB3YXJuIG50aCgkbGlzdCwgJGkpIHVucXVvdGUoJ25vdCBmb3VuZCwgcGxlYXNlIHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBhbmltYXRpb25zOicpIHRvLWxpc3QoJGFuaW1hdGlvbnMsICdrZXlzJyk7XG4gICAgICB9XG5cbiAgICAgIEBpZiAkaSA9PSBsZW5ndGgoJGxpc3QpIHtcbiAgICAgICAgJGNvbWJpbmVkOiAkY29tYmluZWQgKyAkYW5pbTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgJGNvbWJpbmVkOiAkY29tYmluZWQgKyAkYW5pbSArICcsJztcbiAgICAgIH1cbiAgICB9XG4gICAgYW5pbWF0aW9uOiB1bnF1b3RlKCRjb21iaW5lZCk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvbWl4aW5zL21peGluc1wiO1xuaGVhZGVyIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6ICR6aW5kZXgtc3RpY2t5O1xuICBsZWZ0OiAwO1xuICAvL3BhZGRpbmctbGVmdDogMDtcbn1cbi5icmFuZCwgLnByb2ZpbGUsIC5tb2JpbGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDo1NnB4O1xufVxuXG4uc2ViLWxvZ28ge1xuICBoZWlnaHQ6NTZweDtcbiAgd2lkdGg6IDU2cHg7XG59XG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XG4gIGhlYWRlciB7XG4gICAgLy93aWR0aDpjYWxjKDEwMHZ3IC0gMTdweCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsMCwwLDAuMTUpO1xuICB9XG59XG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XG4gIGhlYWRlciB7XG4gICAgLy93aWR0aDpjYWxjKDEwMHZ3IC0gMjU2cHggLSAxN3B4KTtcbiAgICAvL3dpZHRoOmNhbGMoMTAwdncgLSAyNTZweCk7XG4gICAgd2lkdGg6Y2FsYygxMDAlIC0gMjU2cHgpO1xuICAgIGxlZnQ6IDI1NnB4O1xuICB9XG59XG5cbi5tb2JpbGUtaGVhZGVyIHtcbiAgLmNvbCB7XG4gICAgcGFkZGluZy10b3A6IC42NXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjM1cmVtO1xuICAgIC8vcGFkZGluZzogLjM3NWVtIDA7XG4gIH1cbiAgLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogJGdyZWVuO1xuICB9XG59XG4uZHJvcGRvd24tdG9nZ2xlIHtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRyb3Bkb3duLnNob3cge1xuICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbn1cblxuLmRyb3Bkb3duLWl0ZW0tbGluayB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG59XG5cbi5icmVhZGNydW1iLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTZweDtcbn1cblxuLmRyb3Bkb3duLWhlYWRlciB7XG4gIGNvbG9yOiRkYXJrO1xuICBiYWNrZ3JvdW5kOiAkZ3JheS0zMDA7XG59XG5cbi5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1oZWFkZXI6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmFkaXVzOiAkYnRuLWJvcmRlci1yYWRpdXMgJGJ0bi1ib3JkZXItcmFkaXVzIDAgMDtcbn1cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOGY4ICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllOWU5ICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVkZWRlICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VjZWNlICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRhZGFkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjODY4Njg2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk0OTQ5ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzNDM0ICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyMTIxICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGdyYXlzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgICAgXCIyMDBcIjogJGdyYXktMjAwLFxuICAgICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgICAgXCI1MDBcIjogJGdyYXktNTAwLFxuICAgICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgICAgXCI4MDBcIjogJGdyYXktODAwLFxuICAgICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICAgKSxcbiAgICAkZ3JheXNcbik7XG5cblxuJHJlZDogICAgICAgICAgICAgICAgICAgI0YwMzUyOTtcbiRyZWQtZGFyazogICAgICAgICAgICAgICNEODFBMUE7IC8vIFNFQiBzcGVjaWZpY1xuJHJlZC1kYXJrZXI6ICAgICAgICAgICAgI0JCMDAwQzsgLy8gU0VCIHNwZWNpZmljXG4keWVsbG93LWRhcmtlcjogICAgICAgICAjRjhBMDAwOyAvLyBTRUIgc3BlY2lmaWNcbiR5ZWxsb3ctZGFyazogICAgICAgICAgICNGRkI0MDA7IC8vIFNFQiBzcGVjaWZpY1xuJHllbGxvdzogICAgICAgICAgICAgICAgI0ZGQzUwMDtcbiRncmVlbjogICAgICAgICAgICAgICAgICM2MGNkMTg7XG4kZ3JlZW4tZGFyazogICAgICAgICAgICAjNDVCNDAwOyAvLyBTRUIgc3BlY2lmaWNcbiRncmVlbi1kYXJrZXI6ICAgICAgICAgICMzNzlEMDA7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWU6ICAgICAgICAgICAgICAgICAgIzQxQjBFRTtcbiRibHVlLWRhcms6ICAgICAgICAgICAgICMwMDkyRTE7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWUtZGFya2VyOiAgICAgICAgICAgIzAwN0FDNzsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlOiAgICAgICAgICAgICAgICAjNjczQUI2O1xuJHB1cnBsZS1kYXJrOiAgICAgICAgICAgIzRGMkM5OTsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlLWRhcmtlcjogICAgICAgICAjM0YyNTg3OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkcHVycGxlICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gICAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXG4gICAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gICAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcbiAgICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbiAgICApLFxuICAgICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByaW50LXN0eWxlczogICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemVzOiAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdmFsaWRhdGlvbi1pY29uczogICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1ndXR0ZXJzOiAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1idXR0b24tdmFyaWF0aW9uczogICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLW5nLWJvb3RzdHJhcDogICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtYW5ndWxhci1nZW5lcmljLXRhYmxlOiAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1uZ3gtdG9hc3RyOiAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLWRlcHJlY2F0aW9uLW1lc3NhZ2VzOiAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgICAoXG4gICAgICAwOiAwLFxuICAgICAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAgICAgMjogKCRzcGFjZXIgKiAuNSksXG4gICAgICAzOiAkc3BhY2VyLFxuICAgICAgNDogKCRzcGFjZXIgKiAyKSxcbiAgICAgIDU6ICgkc3BhY2VyICogMylcbiAgICApLFxuICAgICRzcGFjZXJzXG4pO1xuXG4vLyBUaGlzIHZhcmlhYmxlIGFmZmVjdHMgdGhlIGAuaC0qYCBhbmQgYC53LSpgIGNsYXNzZXMuXG4kc2l6ZXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzaXplczogbWFwLW1lcmdlKFxuICAgIChcbiAgICAgIDI1OiAyNSUsXG4gICAgICA1MDogNTAlLFxuICAgICAgNzU6IDc1JSxcbiAgICAgIDEwMDogMTAwJSxcbiAgICAgIGF1dG86IGF1dG9cbiAgICApLFxuICAgICRzaXplc1xuKTtcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cblxuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICM0NDQgIWRlZmF1bHQ7XG5cblxuLy8gUGFyYWdyYXBoc1xuLy9cbi8vIFN0eWxlIHAgZWxlbWVudC5cblxuLy8gR3JpZCBicmVha3BvaW50c1xuXG4vLyBHcmlkIGNvbnRhaW5lcnNcblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWd1dHRlci13aWR0aDogbWFwLWdldCgkc3BhY2VycywgMykqMiAhZGVmYXVsdDtcblxuLy8gU0VCIHNwZWNpZmljIG92ZXJyaWRlIHdoZW4gcmVzcG9uc2l2ZSBndXR0ZXJzIGFyZSBlbmFibGVkXG5AaWYgKCRlbmFibGUtcmVzcG9uc2l2ZS1ndXR0ZXJzKSB7XG4gICRncmlkLWd1dHRlci13aWR0aDogbWFwLWdldCgkc3BhY2VycywgMik7XG59XG5cbi8vIFNFQiBzcGVjaWZpY1xuJHJlc3BvbnNpdmUtZ3V0dGVyczogKFxuICBzbTptYXAtZ2V0KCRzcGFjZXJzLCAyKSoyLFxuICBsZzptYXAtZ2V0KCRzcGFjZXJzLCAyKSoyLFxuICB4bDptYXAtZ2V0KCRzcGFjZXJzLCAzKSoyXG4pICFkZWZhdWx0O1xuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uOi40cyBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uOiAgICAuMTVzIGxpbmVhciAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5ICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBGb250c1xuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRzZWItZm9udC1wYXRoOiAgICAgICAgICAgICAgIFwifkBzZWJncm91cC9mb250cy9mb250c1wiICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiU0VCU2Fuc1NlcmlmXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiVHJlYnVjaGV0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAuODc1KSAhZGVmYXVsdDtcbiRmb250LXNpemUteHM6ICAgKCRmb250LXNpemUtYmFzZSAqIC42ODc1KSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cblxuJGZvbnQtd2VpZ2h0LW1lZGl1bTogICAgICAgICAgNTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAzICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDAuODc1ICFkZWZhdWx0O1xuXG4kaDEtbWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGgyLW1kLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMy1tZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kaDEtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMi1zbS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDMtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgICMyMjIgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGJsdWUtZGFya2VyICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpbmstd2VpZ2h0OiAgICAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kZXh0ZXJuYWwtbGluay1pY29uLWNvbG9yOiAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbi1jb2xvcjogICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRleHRlcm5hbC1saW5rLWljb246ICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIGFyaWEtaGlkZGVuPSd0cnVlJyBkYXRhLXByZWZpeD0nZmFsJyBkYXRhLWljb249J2V4dGVybmFsLWxpbmstc3F1YXJlJyBjbGFzcz0nc3ZnLWlubGluZS0tZmEgZmEtZXh0ZXJuYWwtbGluay1zcXVhcmUgZmEtdy0xNCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGZpbGw9JyN7JGV4dGVybmFsLWxpbmstaWNvbi1jb2xvcn0nIGQ9J000MDAgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwdjM1MmMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDM1MmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjgwYzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6bTE2IDQwMGMwIDguODIyLTcuMTc4IDE2LTE2IDE2SDQ4Yy04LjgyMiAwLTE2LTcuMTc4LTE2LTE2VjgwYzAtOC44MjIgNy4xNzgtMTYgMTYtMTZoMzUyYzguODIyIDAgMTYgNy4xNzggMTYgMTZ2MzUyek05OS41MTUgMzc0LjgyOGMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDE5NS4xNS0xOTUuMTUtLjcwNy0uNzA3LTg5Ljk1OC4zNDJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTkuOTk5YzAtNi42MjggNS4zNzItMTIgMTItMTJMMzQwIDEyOGM2LjYyNyAwIDEyIDUuMzcyIDEyIDEybC0uMzQzIDEzNmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC05Ljk5OWMtNi42MjcgMC0xMi01LjM3My0xMi0xMmwuMzQyLTg5Ljk1OC0uNzA3LS43MDctMTk1LjE1IDE5NS4xNWMtNC42ODYgNC42ODYtMTIuMjg0IDQuNjg2LTE2Ljk3MSAwbC01LjY1Ny01LjY1N3onLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZXh0ZXJuYWwtbGluay1ob3Zlci1pY29uOiAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBhcmlhLWhpZGRlbj0ndHJ1ZScgZGF0YS1wcmVmaXg9J2ZhbCcgZGF0YS1pY29uPSdleHRlcm5hbC1saW5rLXNxdWFyZScgY2xhc3M9J3N2Zy1pbmxpbmUtLWZhIGZhLWV4dGVybmFsLWxpbmstc3F1YXJlIGZhLXctMTQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBmaWxsPScjeyRleHRlcm5hbC1saW5rLWhvdmVyLWljb24tY29sb3J9JyBkPSdNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0xNiA0MDBjMCA4LjgyMi03LjE3OCAxNi0xNiAxNkg0OGMtOC44MjIgMC0xNi03LjE3OC0xNi0xNlY4MGMwLTguODIyIDcuMTc4LTE2IDE2LTE2aDM1MmM4LjgyMiAwIDE2IDcuMTc4IDE2IDE2djM1MnpNOTkuNTE1IDM3NC44MjhjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWwxOTUuMTUtMTk1LjE1LS43MDctLjcwNy04OS45NTguMzQyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi05Ljk5OWMwLTYuNjI4IDUuMzcyLTEyIDEyLTEyTDM0MCAxMjhjNi42MjcgMCAxMiA1LjM3MiAxMiAxMmwtLjM0MyAxMzZjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtOS45OTljLTYuNjI3IDAtMTItNS4zNzMtMTItMTJsLjM0Mi04OS45NTgtLjcwNy0uNzA3LTE5NS4xNSAxOTUuMTVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NzEgMGwtNS42NTctNS42NTd6Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBHcmlkIGJyZWFrcG9pbnRzXG4vL1xuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXG5cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gICAgICAgIHhzOiAwLFxuICAgICAgICBzbTogNTc2cHgsXG4gICAgICAgIG1kOiA3NjhweCxcbiAgICAgICAgbGc6IDk5MnB4LFxuICAgICAgICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcbi8vXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbiR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgIC42MjVyZW0gLjc1cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjI3NXJlbSAuM3JlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmx1ZSwgLjA3NSkgIWRlZmF1bHQ7XG5cbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWV4cGFuZC1iZzogICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuNTYyNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4yODEyNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgIC43NXJlbSAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAxICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGJ0bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA2NSUgNjUlICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM0UlM0NjaXJjbGUgcj0nMy41JyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZ30nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjdXN0b20tc2xpZGUtdG9nZ2xlLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM0UlM0NjaXJjbGUgcj0nMy41JyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZ30nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogICAgICRibHVlO1xuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogICAgICAgICAgICAgMTZweCAxNnB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTQ0My41IDE2Mi42bC03LjEtNy4xYy00LjctNC43LTEyLjMtNC43LTE3IDBMMjI0IDM1MSAyOC41IDE1NS41Yy00LjctNC43LTEyLjMtNC43LTE3IDBsLTcuMSA3LjFjLTQuNyA0LjctNC43IDEyLjMgMCAxN2wyMTEgMjExLjFjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIxMS0yMTEuMWM0LjgtNC43IDQuOC0xMi4zLjEtMTd6Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICA0cHggIWRlZmF1bHQ7XG5cblxuJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgZW46IFwiQnJvd3NlXCJcbikgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGQ9J000MTMuNTA1IDkxLjk1MUwxMzMuNDkgMzcxLjk2NmwtOTguOTk1LTk4Ljk5NWMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwTDYuMjExIDI4NC4yODRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWwxMTguNzk0IDExOC43OTRjNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MSAwbDI5OS44MTMtMjk5LjgxM2M0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFsLTExLjMxNC0xMS4zMTRjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NyAweicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMiclM0UlM0NwYXRoIGQ9J001NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU0LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTIgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6bS0yNy42NTggMTUuOTkxbC0yNDAtNDE2Yy02LjE2LTEwLjY3OC0yMS41ODMtMTAuNjM0LTI3LjcxOCAwbC0yNDAgNDE2QzI3Ljk4MyA0NjYuNjc4IDM1LjczMSA0ODAgNDggNDgwaDQ4MGMxMi4zMjMgMCAxOS45OS0xMy4zNjkgMTMuODU5LTIzLjk5NnpNMjg4IDM3MmMtMTUuNDY0IDAtMjggMTIuNTM2LTI4IDI4czEyLjUzNiAyOCAyOCAyOCAyOC0xMi41MzYgMjgtMjgtMTIuNTM2LTI4LTI4LTI4em0tMTEuNDktMjEyaDIyLjk3OWM2LjgyMyAwIDEyLjI3NCA1LjY4MiAxMS45OSAxMi41bC03IDE2OGMtLjI2OCA2LjQyOC01LjU1NiAxMS41LTExLjk5IDExLjVoLTguOTc5Yy02LjQzMyAwLTExLjcyMi01LjA3My0xMS45OS0xMS41bC03LTE2OGMtLjI4My02LjgxOCA1LjE2Ny0xMi41IDExLjk5LTEyLjV6TTI4OCAzNzJjLTE1LjQ2NCAwLTI4IDEyLjUzNi0yOCAyOHMxMi41MzYgMjggMjggMjggMjgtMTIuNTM2IDI4LTI4LTEyLjUzNi0yOC0yOC0yOHonIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stbGluZS10aGlja25lc3M6ICAgICAgMnB4ICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cblxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0O1xuXG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgIC42MjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tY2hldnJvbi1jb2xvcjogICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZHJvcGRvd24tY2hldnJvbi1hY3RpdmUtY29sb3I6ICAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG5cblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duLWJhY2tkcm9wOiAgICAgICAgICA5OTAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcblxuLy8gTmF2c1xuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjU2MjVyZW0gIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRuYXYtdGFicy1saW5rLWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJG5hdi10YWJzLWxpbmstZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBOYXZiYXJcbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgIC40Mzc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXdlaWdodDogICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAkYmx1ZSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG5cblxuXG4vLyBKdW1ib3Ryb25cblxuLy8gQ2FyZHNcblxuLy8gVG9vbHRpcHNcblxuLy8gUG9wb3ZlcnNcblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cblxuLy8gTW9kYWxzXG5cbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAwICFkZWZhdWx0O1xuXG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAwICFkZWZhdWx0O1xuJG1vZGFsLWFzaWRlLXdpZHRoOiAgICAgICAgICAgICAgICAgMzIwcHggIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJG1vZGFsLWFzaWRlLWxnLXdpZHRoOiAgICAgICAgICAgICAgbWFwX2dldCgkZ3JpZC1icmVha3BvaW50cywgJ21kJyk7IC8vIDgwMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0OyAvLzUwMFxuJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRhbGVydC1pY29uLXdpZHRoOiAgICAgICAgICAgICAgICAgIDEuMTI1cmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRhbGVydC1pY29uLWhlaWdodDogICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4vLyBUb2FzdCBub3RpZmljYXRpb25zXG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYWxlcnQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtcGFkZGluZzogICAgICAgICAgICAgICAgICAgICAkYWxlcnQtcGFkZGluZy14ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgIDAgMCAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4vLyBMaXN0IGdyb3VwXG4kbGlzdC1ncm91cC1idWxsZXQtaWNvbjogc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxIDEnJTNFJTNDcmVjdCB3aWR0aD0nMScgaGVpZ2h0PScxJyBzdHlsZT0nZmlsbDojeyRkYXJrfTsnIC8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGxpc3QtZ3JvdXAtY2hlY2staWNvbjogc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJyUzRSUzQ3BhdGggZmlsbD0nI3skZ3JlZW59JyBkPSdNNDEzLjUwNSA5MS45NTFMMTMzLjQ5IDM3MS45NjZsLTk4Ljk5NS05OC45OTVjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMEw2LjIxMSAyODQuMjg0Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFsMTE4Ljc5NCAxMTguNzk0YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMGwyOTkuODEzLTI5OS44MTNjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxbC0xMS4zMTQtMTEuMzE0Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMHonIGNsYXNzPSdzdDAnLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kbGlzdC1ncm91cC1tYXJnaW4tYm90dG9tOiAxcmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWJnOiAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbi8vIEZpZ3VyZXNcblxuLy8gQnJlYWRjcnVtYnNcbiRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1mb250LXdlaWdodDogICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRicmVhZGNydW1iLWRpdmlkZXItY29sb3J9JyB2aWV3Qm94PScwIDAgMjU2IDUxMiclM0UlM0NwYXRoIGQ9J00xNy41MjUgMzYuNDY1bC03LjA3MSA3LjA3Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDQ1MS40OTRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWw3LjA3MSA3LjA3YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NyAwbDIxMS4wNTEtMjExLjA1YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwzNC40OTUgMzYuNDY1Yy00LjY4Ni00LjY4Ny0xMi4yODQtNC42ODctMTYuOTcgMHonLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYnJlYWRjcnVtYi1iYWNrLWljb246ICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yfScgdmlld0JveD0nMCAwIDI1NiA1MTInJTNFJTNDcGF0aCBkPSdNMjM4LjQ3NSA0NzUuNTM1bDcuMDcxLTcuMDdjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDUwLjA1MyAyNTYgMjQ1LjU0NiA2MC41MDZjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMEwxMC40NTQgMjQ3LjUxNWMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxbDIxMS4wNTEgMjExLjA1YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45Ny0uMDAxeicvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRicmVhZGNydW1iLWRpdmlkZXItd2lkdGg6ICAgICAgICAgIDE1cHggIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG5cbi8vIENsb3NlXG5cbi8vIENvZGVcblxuLy8gUHJpbnRpbmdcblxuQGltcG9ydCBcImJvb3RzdHJhcC1jb3JlL2Z1bmN0aW9uc1wiO1xuQGltcG9ydCBcImJvb3RzdHJhcC1jb3JlL3ZhcmlhYmxlc1wiO1xuXG4vLyBTY3JvbGxiYXJcbiRzY3JvbGxiYXItdHJhY2stYmc6ICAkZ3JheS0xMDA7XG4kc2Nyb2xsYmFyLXRodW1iLWJnOiAgJGdyYXktNDAwO1xuJHNjcm9sbGJhci10cmFjay1kYXJrLWJnOiAgJGRhcms7XG4kc2Nyb2xsYmFyLXRodW1iLWRhcmstYmc6ICAkZ3JheS05MDA7XG4kc2Nyb2xsYmFyLXRodW1iLWFjdGl2ZS1iZzogJGJsdWU7XG4kc2Nyb2xsYmFyLXRoaWNrbmVzczogICAgIDEwcHg7XG5cbi8vIEFjY29yZGlvblxuXG4kYWNjb3JkaW9uLWJvcmRlci1jb2xvcjogICAgJHRhYmxlLWJvcmRlci1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvcmRlci13aWR0aDogICAgJHRhYmxlLWJvcmRlci13aWR0aCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWhlYWRlci1wYWRkaW5nOiAgMCAuNzVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib2R5LXBhZGRpbmc6ICAgICR0YWJsZS1jZWxsLXBhZGRpbmcgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1pdGVtLXBhZGRpbmcteTogIC41NjI1cmVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24taXRlbS1wYWRkaW5nLXg6ICAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYm9keS1iZzogICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLXNpemU6ICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/nav.service */ "./src/app/services/nav.service.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(menuService, navService) {
        this.menuService = menuService;
        this.navService = navService;
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
        this.$isActive = this.navService.getState();
    };
    HeaderComponent.prototype.getMenu = function () {
    };
    HeaderComponent.prototype.showMenu = function (tab) {
        this.menuService.switchTab(tab);
        this.activeTab = tab;
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.navService.toggleState();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], HeaderComponent.prototype, "scrollPosition", null);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('scrollAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 1,
                        transform: 'translateY(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 0,
                        transform: 'translateY(-100px)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('700ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('700ms ease-in'))
                ])
            ],
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"], _services_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"]])
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

module.exports = "<div class=\"mobile-nav bg-light w-100\" *ngIf=\"($activeTab | async) && $activeState | async as mobileMenu\">\n  <div class=\"col d-md-none px-0\" *ngIf=\"$activeTab | async as activeTab\" (click)=\"hideMobileNav()\">\n    <div class=\"mobile-breadcrumb border-bottom\">\n      <div  class=\"d-flex align-items-center position-absolute w-100 h-100\">\n        <h5 class=\"text-center position-absolute w-100\" [@slideOut]=\"menuState\" *ngIf=\"menuState === 'show'\">{{activeTab}}</h5>\n      </div>\n    </div>\n  </div>\n  <div [@slideOut]=\"menuState\" *ngIf=\"menuState === 'show'\" class=\"position-absolute w-100\">\n    <div class=\"row border-bottom px-3 align-items-center\" *ngFor=\"let menuItem of mobileMenu\">\n        <ng-container *ngIf=\"menuItem.path.substr(0,4) !== 'http'\">\n          <div class=\"col\">\n            <a class=\"nav-link\" routerLink=\"{{menuItem.path}}\" (click)=\"hideMobileNav()\">{{menuItem.name}}</a>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"menuItem.path.substr(0,4) === 'http'\">\n          <div class=\"col\">\n            <a class=\"nav-link\" [href]=\"menuItem.path\" target=\"_blank\" (click)=\"hideMobileNav()\">{{menuItem.name}}</a>\n          </div>\n          <div class=\"col-auto\">\n            <i class=\"fal fa-external-link-square\"></i>\n          </div>\n        </ng-container>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/mobile-navigation/mobile-navigation.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/mobile-navigation/mobile-navigation.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\n.mobile-nav {\n  position: fixed;\n  top: 56px;\n  left: 0;\n  z-index: 1030;\n  height: calc(100% - 56px);\n  overflow-y: auto;\n  overflow-x: hidden; }\n.mobile-nav .nav-link {\n    color: #343434;\n    padding: 1rem; }\n@media (min-width: 768px) {\n  .mobile-nav {\n    display: none; } }\n.mobile-header .col {\n  padding-top: .65rem;\n  padding-bottom: .35rem; }\n.mobile-header .active {\n  background: #60cd18; }\nheader {\n  height: 56px;\n  position: fixed;\n  z-index: 2;\n  left: 0; }\n.mobile-header {\n  background: #333;\n  color: #fff;\n  height: 56px;\n  position: fixed;\n  z-index: 2;\n  left: 0; }\n.mobile-breadcrumb {\n  background: #fff;\n  height: 56px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2FuaW1hdGlvbnMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc3JjL2FwcC9jb21wb25lbnRzL21vYmlsZS1uYXZpZ2F0aW9uL21vYmlsZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3NlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc2Nzcy9ib290c3RyYXAtY29yZS9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RBOzs7Ozs7R0FNRztBQ25FSDtFQUNFLGdCQUFlO0VBQ2YsVUFBUztFQUNULFFBQU87RUFDUCxjQ2dXc0M7RUQvVnRDLDBCQUF5QjtFQUN6QixpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBS25CO0FBWkQ7SUFTSSxlQ09jO0lETmQsY0NrR1MsRURqR1Y7QUUrQ0M7RUY1Q0Y7SUFDRSxjQUFhLEVBQ2QsRUFBQTtBQUdIO0VBRUksb0JBQW1CO0VBQ25CLHVCQUFzQixFQUV2QjtBQUxIO0VBT0ksb0JDbUIyQixFRGxCNUI7QUFHSDtFQUNFLGFBQVk7RUFDWixnQkFBZTtFQUNmLFdBQVU7RUFDVixRQUFPLEVBRVI7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsYUFBVztFQUNYLGdCQUFlO0VBQ2YsV0FBVTtFQUNWLFFBQU8sRUFDUjtBQUNEO0VBQ0UsaUJDdENhO0VEdUNiLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9iaWxlLW5hdmlnYXRpb24vbW9iaWxlLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYW5pbWF0aW9uczogKFxuICBzbGlkZUluTGVmdDogc2xpZGVJbkxlZnQgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5SaWdodDogc2xpZGVJblJpZ2h0ICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluVXA6IHNsaWRlSW5VcCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJbkRvd246IHNsaWRlSW5Eb3duICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBmYWRlSW46IGZhZGVJbiAkdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uLFxuICBmYWRlSW5VcDogZmFkZUluVXAgJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbixcbik7XG5cbkBtaXhpbiBhbmltYXRpb25zKCkge1xuICBAaWYgJGVuYWJsZS10cmFuc2l0aW9ucyB7XG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgZmFkZUluVXAge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMzBweCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluTGVmdCB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluVXAge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluRG93biB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQWRkIG9uZSBvciBtb3JlIHRyYW5zaXRpb25zXG4gKlxuICogQGV4YW1wbGVcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCdzbGlkZUluVXAnKTtcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCgnc2xpZGVJblVwJywnZmFkZUluJykpXG4gKi9cbkBtaXhpbiBhZGQtdHJhbnNpdGlvbigkbGlzdCkge1xuICAkY29tYmluZWQ6ICcnO1xuICBAaWYgdHlwZS1vZigkbGlzdCkgPT0gJ3N0cmluZycge1xuICAgIGFuaW1hdGlvbjogbWFwX2dldCgkYW5pbWF0aW9ucywgJGxpc3QpO1xuICB9IEBlbHNlIGlmIHR5cGUtb2YoJGxpc3QpID09ICdsaXN0JyB7XG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGxpc3QpIHtcbiAgICAgICRhbmltOiBtYXBfZ2V0KCRhbmltYXRpb25zLCBudGgoJGxpc3QsICRpKSk7XG4gICAgICBAaWYgJGFuaW0gPT0gbnVsbCB7XG4gICAgICAgIEB3YXJuIG50aCgkbGlzdCwgJGkpIHVucXVvdGUoJ25vdCBmb3VuZCwgcGxlYXNlIHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBhbmltYXRpb25zOicpIHRvLWxpc3QoJGFuaW1hdGlvbnMsICdrZXlzJyk7XG4gICAgICB9XG5cbiAgICAgIEBpZiAkaSA9PSBsZW5ndGgoJGxpc3QpIHtcbiAgICAgICAgJGNvbWJpbmVkOiAkY29tYmluZWQgKyAkYW5pbTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgJGNvbWJpbmVkOiAkY29tYmluZWQgKyAkYW5pbSArICcsJztcbiAgICAgIH1cbiAgICB9XG4gICAgYW5pbWF0aW9uOiB1bnF1b3RlKCRjb21iaW5lZCk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvbWl4aW5zL21peGluc1wiO1xuLm1vYmlsZS1uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTZweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHppbmRleC1maXhlZDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NnB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAubmF2LWxpbmsge1xuICAgIGNvbG9yOiAkZGFyaztcbiAgICBwYWRkaW5nOiAkc3BhY2VyO1xuICB9XG59XG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XG4gIC5tb2JpbGUtbmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5tb2JpbGUtaGVhZGVyIHtcbiAgLmNvbCB7XG4gICAgcGFkZGluZy10b3A6IC42NXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjM1cmVtO1xuICAgIC8vcGFkZGluZzogLjM3NWVtIDA7XG4gIH1cbiAgLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogJGdyZWVuO1xuICB9XG59XG5cbmhlYWRlciB7XG4gIGhlaWdodDogNTZweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICBsZWZ0OiAwO1xuICAvL3BhZGRpbmctbGVmdDogMDtcbn1cbi5tb2JpbGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDo1NnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIGxlZnQ6IDA7XG59XG4ubW9iaWxlLWJyZWFkY3J1bWIge1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGhlaWdodDogNTZweDtcbn1cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOGY4ICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllOWU5ICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVkZWRlICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VjZWNlICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRhZGFkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjODY4Njg2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk0OTQ5ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzNDM0ICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyMTIxICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGdyYXlzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgICAgXCIyMDBcIjogJGdyYXktMjAwLFxuICAgICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgICAgXCI1MDBcIjogJGdyYXktNTAwLFxuICAgICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgICAgXCI4MDBcIjogJGdyYXktODAwLFxuICAgICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICAgKSxcbiAgICAkZ3JheXNcbik7XG5cblxuJHJlZDogICAgICAgICAgICAgICAgICAgI0YwMzUyOTtcbiRyZWQtZGFyazogICAgICAgICAgICAgICNEODFBMUE7IC8vIFNFQiBzcGVjaWZpY1xuJHJlZC1kYXJrZXI6ICAgICAgICAgICAgI0JCMDAwQzsgLy8gU0VCIHNwZWNpZmljXG4keWVsbG93LWRhcmtlcjogICAgICAgICAjRjhBMDAwOyAvLyBTRUIgc3BlY2lmaWNcbiR5ZWxsb3ctZGFyazogICAgICAgICAgICNGRkI0MDA7IC8vIFNFQiBzcGVjaWZpY1xuJHllbGxvdzogICAgICAgICAgICAgICAgI0ZGQzUwMDtcbiRncmVlbjogICAgICAgICAgICAgICAgICM2MGNkMTg7XG4kZ3JlZW4tZGFyazogICAgICAgICAgICAjNDVCNDAwOyAvLyBTRUIgc3BlY2lmaWNcbiRncmVlbi1kYXJrZXI6ICAgICAgICAgICMzNzlEMDA7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWU6ICAgICAgICAgICAgICAgICAgIzQxQjBFRTtcbiRibHVlLWRhcms6ICAgICAgICAgICAgICMwMDkyRTE7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWUtZGFya2VyOiAgICAgICAgICAgIzAwN0FDNzsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlOiAgICAgICAgICAgICAgICAjNjczQUI2O1xuJHB1cnBsZS1kYXJrOiAgICAgICAgICAgIzRGMkM5OTsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlLWRhcmtlcjogICAgICAgICAjM0YyNTg3OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkcHVycGxlICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gICAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXG4gICAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gICAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcbiAgICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbiAgICApLFxuICAgICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByaW50LXN0eWxlczogICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemVzOiAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdmFsaWRhdGlvbi1pY29uczogICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1ndXR0ZXJzOiAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1idXR0b24tdmFyaWF0aW9uczogICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLW5nLWJvb3RzdHJhcDogICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtYW5ndWxhci1nZW5lcmljLXRhYmxlOiAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1uZ3gtdG9hc3RyOiAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLWRlcHJlY2F0aW9uLW1lc3NhZ2VzOiAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgICAoXG4gICAgICAwOiAwLFxuICAgICAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAgICAgMjogKCRzcGFjZXIgKiAuNSksXG4gICAgICAzOiAkc3BhY2VyLFxuICAgICAgNDogKCRzcGFjZXIgKiAyKSxcbiAgICAgIDU6ICgkc3BhY2VyICogMylcbiAgICApLFxuICAgICRzcGFjZXJzXG4pO1xuXG4vLyBUaGlzIHZhcmlhYmxlIGFmZmVjdHMgdGhlIGAuaC0qYCBhbmQgYC53LSpgIGNsYXNzZXMuXG4kc2l6ZXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzaXplczogbWFwLW1lcmdlKFxuICAgIChcbiAgICAgIDI1OiAyNSUsXG4gICAgICA1MDogNTAlLFxuICAgICAgNzU6IDc1JSxcbiAgICAgIDEwMDogMTAwJSxcbiAgICAgIGF1dG86IGF1dG9cbiAgICApLFxuICAgICRzaXplc1xuKTtcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cblxuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICM0NDQgIWRlZmF1bHQ7XG5cblxuLy8gUGFyYWdyYXBoc1xuLy9cbi8vIFN0eWxlIHAgZWxlbWVudC5cblxuLy8gR3JpZCBicmVha3BvaW50c1xuXG4vLyBHcmlkIGNvbnRhaW5lcnNcblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWd1dHRlci13aWR0aDogbWFwLWdldCgkc3BhY2VycywgMykqMiAhZGVmYXVsdDtcblxuLy8gU0VCIHNwZWNpZmljIG92ZXJyaWRlIHdoZW4gcmVzcG9uc2l2ZSBndXR0ZXJzIGFyZSBlbmFibGVkXG5AaWYgKCRlbmFibGUtcmVzcG9uc2l2ZS1ndXR0ZXJzKSB7XG4gICRncmlkLWd1dHRlci13aWR0aDogbWFwLWdldCgkc3BhY2VycywgMik7XG59XG5cbi8vIFNFQiBzcGVjaWZpY1xuJHJlc3BvbnNpdmUtZ3V0dGVyczogKFxuICBzbTptYXAtZ2V0KCRzcGFjZXJzLCAyKSoyLFxuICBsZzptYXAtZ2V0KCRzcGFjZXJzLCAyKSoyLFxuICB4bDptYXAtZ2V0KCRzcGFjZXJzLCAzKSoyXG4pICFkZWZhdWx0O1xuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uOi40cyBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uOiAgICAuMTVzIGxpbmVhciAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5ICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBGb250c1xuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRzZWItZm9udC1wYXRoOiAgICAgICAgICAgICAgIFwifkBzZWJncm91cC9mb250cy9mb250c1wiICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiU0VCU2Fuc1NlcmlmXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiVHJlYnVjaGV0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAuODc1KSAhZGVmYXVsdDtcbiRmb250LXNpemUteHM6ICAgKCRmb250LXNpemUtYmFzZSAqIC42ODc1KSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cblxuJGZvbnQtd2VpZ2h0LW1lZGl1bTogICAgICAgICAgNTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAzICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDAuODc1ICFkZWZhdWx0O1xuXG4kaDEtbWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGgyLW1kLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMy1tZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kaDEtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMi1zbS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDMtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgICMyMjIgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGJsdWUtZGFya2VyICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpbmstd2VpZ2h0OiAgICAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kZXh0ZXJuYWwtbGluay1pY29uLWNvbG9yOiAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbi1jb2xvcjogICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRleHRlcm5hbC1saW5rLWljb246ICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIGFyaWEtaGlkZGVuPSd0cnVlJyBkYXRhLXByZWZpeD0nZmFsJyBkYXRhLWljb249J2V4dGVybmFsLWxpbmstc3F1YXJlJyBjbGFzcz0nc3ZnLWlubGluZS0tZmEgZmEtZXh0ZXJuYWwtbGluay1zcXVhcmUgZmEtdy0xNCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGZpbGw9JyN7JGV4dGVybmFsLWxpbmstaWNvbi1jb2xvcn0nIGQ9J000MDAgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwdjM1MmMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDM1MmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjgwYzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6bTE2IDQwMGMwIDguODIyLTcuMTc4IDE2LTE2IDE2SDQ4Yy04LjgyMiAwLTE2LTcuMTc4LTE2LTE2VjgwYzAtOC44MjIgNy4xNzgtMTYgMTYtMTZoMzUyYzguODIyIDAgMTYgNy4xNzggMTYgMTZ2MzUyek05OS41MTUgMzc0LjgyOGMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDE5NS4xNS0xOTUuMTUtLjcwNy0uNzA3LTg5Ljk1OC4zNDJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTkuOTk5YzAtNi42MjggNS4zNzItMTIgMTItMTJMMzQwIDEyOGM2LjYyNyAwIDEyIDUuMzcyIDEyIDEybC0uMzQzIDEzNmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC05Ljk5OWMtNi42MjcgMC0xMi01LjM3My0xMi0xMmwuMzQyLTg5Ljk1OC0uNzA3LS43MDctMTk1LjE1IDE5NS4xNWMtNC42ODYgNC42ODYtMTIuMjg0IDQuNjg2LTE2Ljk3MSAwbC01LjY1Ny01LjY1N3onLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZXh0ZXJuYWwtbGluay1ob3Zlci1pY29uOiAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBhcmlhLWhpZGRlbj0ndHJ1ZScgZGF0YS1wcmVmaXg9J2ZhbCcgZGF0YS1pY29uPSdleHRlcm5hbC1saW5rLXNxdWFyZScgY2xhc3M9J3N2Zy1pbmxpbmUtLWZhIGZhLWV4dGVybmFsLWxpbmstc3F1YXJlIGZhLXctMTQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBmaWxsPScjeyRleHRlcm5hbC1saW5rLWhvdmVyLWljb24tY29sb3J9JyBkPSdNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0xNiA0MDBjMCA4LjgyMi03LjE3OCAxNi0xNiAxNkg0OGMtOC44MjIgMC0xNi03LjE3OC0xNi0xNlY4MGMwLTguODIyIDcuMTc4LTE2IDE2LTE2aDM1MmM4LjgyMiAwIDE2IDcuMTc4IDE2IDE2djM1MnpNOTkuNTE1IDM3NC44MjhjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWwxOTUuMTUtMTk1LjE1LS43MDctLjcwNy04OS45NTguMzQyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi05Ljk5OWMwLTYuNjI4IDUuMzcyLTEyIDEyLTEyTDM0MCAxMjhjNi42MjcgMCAxMiA1LjM3MiAxMiAxMmwtLjM0MyAxMzZjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtOS45OTljLTYuNjI3IDAtMTItNS4zNzMtMTItMTJsLjM0Mi04OS45NTgtLjcwNy0uNzA3LTE5NS4xNSAxOTUuMTVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NzEgMGwtNS42NTctNS42NTd6Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBHcmlkIGJyZWFrcG9pbnRzXG4vL1xuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXG5cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gICAgICAgIHhzOiAwLFxuICAgICAgICBzbTogNTc2cHgsXG4gICAgICAgIG1kOiA3NjhweCxcbiAgICAgICAgbGc6IDk5MnB4LFxuICAgICAgICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcbi8vXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbiR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgIC42MjVyZW0gLjc1cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjI3NXJlbSAuM3JlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmx1ZSwgLjA3NSkgIWRlZmF1bHQ7XG5cbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWV4cGFuZC1iZzogICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuNTYyNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4yODEyNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgIC43NXJlbSAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAxICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGJ0bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA2NSUgNjUlICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM0UlM0NjaXJjbGUgcj0nMy41JyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZ30nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjdXN0b20tc2xpZGUtdG9nZ2xlLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM0UlM0NjaXJjbGUgcj0nMy41JyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZ30nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogICAgICRibHVlO1xuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogICAgICAgICAgICAgMTZweCAxNnB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTQ0My41IDE2Mi42bC03LjEtNy4xYy00LjctNC43LTEyLjMtNC43LTE3IDBMMjI0IDM1MSAyOC41IDE1NS41Yy00LjctNC43LTEyLjMtNC43LTE3IDBsLTcuMSA3LjFjLTQuNyA0LjctNC43IDEyLjMgMCAxN2wyMTEgMjExLjFjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIxMS0yMTEuMWM0LjgtNC43IDQuOC0xMi4zLjEtMTd6Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICA0cHggIWRlZmF1bHQ7XG5cblxuJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgZW46IFwiQnJvd3NlXCJcbikgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGQ9J000MTMuNTA1IDkxLjk1MUwxMzMuNDkgMzcxLjk2NmwtOTguOTk1LTk4Ljk5NWMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwTDYuMjExIDI4NC4yODRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWwxMTguNzk0IDExOC43OTRjNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MSAwbDI5OS44MTMtMjk5LjgxM2M0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFsLTExLjMxNC0xMS4zMTRjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NyAweicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMiclM0UlM0NwYXRoIGQ9J001NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU0LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTIgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6bS0yNy42NTggMTUuOTkxbC0yNDAtNDE2Yy02LjE2LTEwLjY3OC0yMS41ODMtMTAuNjM0LTI3LjcxOCAwbC0yNDAgNDE2QzI3Ljk4MyA0NjYuNjc4IDM1LjczMSA0ODAgNDggNDgwaDQ4MGMxMi4zMjMgMCAxOS45OS0xMy4zNjkgMTMuODU5LTIzLjk5NnpNMjg4IDM3MmMtMTUuNDY0IDAtMjggMTIuNTM2LTI4IDI4czEyLjUzNiAyOCAyOCAyOCAyOC0xMi41MzYgMjgtMjgtMTIuNTM2LTI4LTI4LTI4em0tMTEuNDktMjEyaDIyLjk3OWM2LjgyMyAwIDEyLjI3NCA1LjY4MiAxMS45OSAxMi41bC03IDE2OGMtLjI2OCA2LjQyOC01LjU1NiAxMS41LTExLjk5IDExLjVoLTguOTc5Yy02LjQzMyAwLTExLjcyMi01LjA3My0xMS45OS0xMS41bC03LTE2OGMtLjI4My02LjgxOCA1LjE2Ny0xMi41IDExLjk5LTEyLjV6TTI4OCAzNzJjLTE1LjQ2NCAwLTI4IDEyLjUzNi0yOCAyOHMxMi41MzYgMjggMjggMjggMjgtMTIuNTM2IDI4LTI4LTEyLjUzNi0yOC0yOC0yOHonIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stbGluZS10aGlja25lc3M6ICAgICAgMnB4ICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cblxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0O1xuXG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgIC42MjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tY2hldnJvbi1jb2xvcjogICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZHJvcGRvd24tY2hldnJvbi1hY3RpdmUtY29sb3I6ICAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG5cblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duLWJhY2tkcm9wOiAgICAgICAgICA5OTAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcblxuLy8gTmF2c1xuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjU2MjVyZW0gIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRuYXYtdGFicy1saW5rLWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJG5hdi10YWJzLWxpbmstZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBOYXZiYXJcbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgIC40Mzc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXdlaWdodDogICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAkYmx1ZSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG5cblxuXG4vLyBKdW1ib3Ryb25cblxuLy8gQ2FyZHNcblxuLy8gVG9vbHRpcHNcblxuLy8gUG9wb3ZlcnNcblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cblxuLy8gTW9kYWxzXG5cbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAwICFkZWZhdWx0O1xuXG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAwICFkZWZhdWx0O1xuJG1vZGFsLWFzaWRlLXdpZHRoOiAgICAgICAgICAgICAgICAgMzIwcHggIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJG1vZGFsLWFzaWRlLWxnLXdpZHRoOiAgICAgICAgICAgICAgbWFwX2dldCgkZ3JpZC1icmVha3BvaW50cywgJ21kJyk7IC8vIDgwMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0OyAvLzUwMFxuJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRhbGVydC1pY29uLXdpZHRoOiAgICAgICAgICAgICAgICAgIDEuMTI1cmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRhbGVydC1pY29uLWhlaWdodDogICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4vLyBUb2FzdCBub3RpZmljYXRpb25zXG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYWxlcnQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtcGFkZGluZzogICAgICAgICAgICAgICAgICAgICAkYWxlcnQtcGFkZGluZy14ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgIDAgMCAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4vLyBMaXN0IGdyb3VwXG4kbGlzdC1ncm91cC1idWxsZXQtaWNvbjogc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxIDEnJTNFJTNDcmVjdCB3aWR0aD0nMScgaGVpZ2h0PScxJyBzdHlsZT0nZmlsbDojeyRkYXJrfTsnIC8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGxpc3QtZ3JvdXAtY2hlY2staWNvbjogc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJyUzRSUzQ3BhdGggZmlsbD0nI3skZ3JlZW59JyBkPSdNNDEzLjUwNSA5MS45NTFMMTMzLjQ5IDM3MS45NjZsLTk4Ljk5NS05OC45OTVjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMEw2LjIxMSAyODQuMjg0Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFsMTE4Ljc5NCAxMTguNzk0YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMGwyOTkuODEzLTI5OS44MTNjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxbC0xMS4zMTQtMTEuMzE0Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMHonIGNsYXNzPSdzdDAnLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kbGlzdC1ncm91cC1tYXJnaW4tYm90dG9tOiAxcmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWJnOiAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbi8vIEZpZ3VyZXNcblxuLy8gQnJlYWRjcnVtYnNcbiRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1mb250LXdlaWdodDogICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRicmVhZGNydW1iLWRpdmlkZXItY29sb3J9JyB2aWV3Qm94PScwIDAgMjU2IDUxMiclM0UlM0NwYXRoIGQ9J00xNy41MjUgMzYuNDY1bC03LjA3MSA3LjA3Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDQ1MS40OTRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWw3LjA3MSA3LjA3YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NyAwbDIxMS4wNTEtMjExLjA1YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwzNC40OTUgMzYuNDY1Yy00LjY4Ni00LjY4Ny0xMi4yODQtNC42ODctMTYuOTcgMHonLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYnJlYWRjcnVtYi1iYWNrLWljb246ICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yfScgdmlld0JveD0nMCAwIDI1NiA1MTInJTNFJTNDcGF0aCBkPSdNMjM4LjQ3NSA0NzUuNTM1bDcuMDcxLTcuMDdjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDUwLjA1MyAyNTYgMjQ1LjU0NiA2MC41MDZjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMEwxMC40NTQgMjQ3LjUxNWMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxbDIxMS4wNTEgMjExLjA1YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45Ny0uMDAxeicvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRicmVhZGNydW1iLWRpdmlkZXItd2lkdGg6ICAgICAgICAgIDE1cHggIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG5cbi8vIENsb3NlXG5cbi8vIENvZGVcblxuLy8gUHJpbnRpbmdcblxuQGltcG9ydCBcImJvb3RzdHJhcC1jb3JlL2Z1bmN0aW9uc1wiO1xuQGltcG9ydCBcImJvb3RzdHJhcC1jb3JlL3ZhcmlhYmxlc1wiO1xuXG4vLyBTY3JvbGxiYXJcbiRzY3JvbGxiYXItdHJhY2stYmc6ICAkZ3JheS0xMDA7XG4kc2Nyb2xsYmFyLXRodW1iLWJnOiAgJGdyYXktNDAwO1xuJHNjcm9sbGJhci10cmFjay1kYXJrLWJnOiAgJGRhcms7XG4kc2Nyb2xsYmFyLXRodW1iLWRhcmstYmc6ICAkZ3JheS05MDA7XG4kc2Nyb2xsYmFyLXRodW1iLWFjdGl2ZS1iZzogJGJsdWU7XG4kc2Nyb2xsYmFyLXRoaWNrbmVzczogICAgIDEwcHg7XG5cbi8vIEFjY29yZGlvblxuXG4kYWNjb3JkaW9uLWJvcmRlci1jb2xvcjogICAgJHRhYmxlLWJvcmRlci1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvcmRlci13aWR0aDogICAgJHRhYmxlLWJvcmRlci13aWR0aCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWhlYWRlci1wYWRkaW5nOiAgMCAuNzVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib2R5LXBhZGRpbmc6ICAgICR0YWJsZS1jZWxsLXBhZGRpbmcgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1pdGVtLXBhZGRpbmcteTogIC41NjI1cmVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24taXRlbS1wYWRkaW5nLXg6ICAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYm9keS1iZzogICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLXNpemU6ICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var MobileNavigationComponent = /** @class */ (function () {
    function MobileNavigationComponent(menuService) {
        this.menuService = menuService;
        this.$activeState = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.components = [];
        this.menuState = 'show';
    }
    MobileNavigationComponent.prototype.ngOnInit = function () {
        this.$activeTab = this.menuService.$activeTab;
        this.$activeState = this.menuService.$menuItems;
    };
    MobileNavigationComponent.prototype.hideMobileNav = function () {
        this.menuService.switchTab(null);
    };
    MobileNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-navigation',
            template: __webpack_require__(/*! ./mobile-navigation.component.html */ "./src/app/components/mobile-navigation/mobile-navigation.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: 'translateX(-100px)'
                    }))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0,
                            transform: 'translateX(-100px)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 1,
                            transform: 'translateX(0)'
                        }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: 'translateX(700px)'
                    }))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0,
                            transform: 'translateX(700px)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 1,
                            transform: 'translateX(0)'
                        }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0
                    }))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 1
                        }))
                    ])
                ]),
            ],
            styles: [__webpack_require__(/*! ./mobile-navigation.component.scss */ "./src/app/components/mobile-navigation/mobile-navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]])
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

module.exports = "<div class=\"side-nav\" [ngClass]=\"{'active': $isActive | async}\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-auto\">\n      <svg class=\"seb-logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\">\n        <path d=\"M0 0h800v800H0z\" fill=\"#60cd18\"/>\n        <path d=\"M290.55 348.35l-25.87 19.32c-12.22-10.51-28-12.57-36.65-12.57s-18 2.51-19.37 8.82c-1.38 6.12 4.31 10.88 14.08 13.53 11.14 3 21.29 5.66 36.92 10.12 23.24 6.63 39.13 16.69 39.13 40 0 32.14-28.53 48.8-66.75 48.8s-64.26-19.91-72-29.2l27.35-20.45c19.21 16.75 32.57 19.11 43.74 19.11 12.81 0 24.79-2.75 26.33-10 1.25-5.82-3.58-10.45-14.49-13-12.35-2.85-22.77-5.14-34.4-8.2-31.52-8.27-40.41-26.6-40.41-43.06 0-22.67 21.1-45.95 59.69-45.95 39.57 0 62.74 22.67 62.74 22.67m164.9-20.4H340.12V472.1h117.45v-33.24h-76.94v-23.22h53v-31.8h-53v-23h74.83zM310.27 505.37h9V294.63h-9zm162.45 0h9V294.63h-9zm29.8-33.27h92.64c24.77 0 44.84-14.93 44.84-38.84 0-18.65-12.21-31-29.32-36.47a9.6 9.6 0 0 0-1.66-.21 10.36 10.36 0 0 0 1.66-.29c9.8-3.88 20.66-14.21 20.66-31.8 0-22.31-19.74-36.54-44.1-36.54h-84.72zm40.7-114.17h32.36c7.45 0 13.48 5.88 13.48 12.64s-6 12.66-13.48 12.66h-32.36zm39.58 82.13h-39.58v-26.29h39.58a13.15 13.15 0 0 1 0 26.28z\" fill=\"#fff\"/>\n      </svg>\n    </div>\n    <div class=\"col align-self-center pl-3\">\n      <h5 class=\"text-white mb-0\">Bootstrap</h5>\n    </div>\n    <div class=\"col-auto align-self-center px-3 d-lg-none\" (click)=\"toggleMenu()\">\n      <i class=\"fal fa-times fa-lg text-white\"></i>\n    </div>\n  </div>\n  <div class=\"container-fluid nav-wrapper pb-5 scrollbar-dark\">\n    <div class=\"row mt-5 mb-3 align-items-center\">\n      <div class=\"col pl-0\">\n        <h6 class=\"text-white pl-3 mb-0\"><!--<i class=\"fal fa-list mr-2\"></i>-->Start</h6>\n      </div>\n    </div>\n    <nav class=\"nav flex-column\">\n      <ng-container *ngFor=\"let menuItem of $startItems | async\">\n        <div class=\"row align-items-center menu-item\" routerLinkActive=\"active\">\n          <div class=\"col pl-0\">\n            <ng-container *ngIf=\"menuItem.path.substr(0,4) !== 'http'\">\n              <a class=\"nav-link\" routerLink=\"{{menuItem.path}}\" (click)=\"menuItem.active = !menuItem.active; toggleMenu();\">{{menuItem.name}}</a>\n            </ng-container>\n            <ng-container *ngIf=\"menuItem.path.substr(0,4) === 'http'\">\n              <a class=\"nav-link\" [href]=\"menuItem.path\" target=\"_blank\">{{menuItem.name}}</a>\n            </ng-container>\n          </div>\n        </div>\n      </ng-container>\n    </nav>\n    <div class=\"row mt-5 mb-3 align-items-center\">\n      <div class=\"col pl-0\">\n        <h6 class=\"text-white pl-3 mb-0\"><!--<i class=\"fal fa-list mr-2\"></i>-->Base</h6>\n      </div>\n    </div>\n    <nav class=\"nav flex-column\">\n      <ng-container *ngFor=\"let menuItem of $baseItems | async\">\n        <div class=\"row align-items-center menu-item\" routerLinkActive=\"active\">\n          <div class=\"col pl-0\">\n            <a class=\"nav-link\" routerLink=\"{{menuItem.path}}\" (click)=\"menuItem.active = !menuItem.active; toggleMenu();\">{{menuItem.name}}</a>\n          </div>\n        </div>\n      </ng-container>\n    </nav>\n    <div class=\"row mt-5 mb-3 align-items-center\">\n      <div class=\"col pl-0\">\n        <h6 class=\"text-white pl-3 mb-0\"><!--<i class=\"fal fa-list mr-2\"></i>-->Components</h6>\n      </div>\n    </div>\n    <nav class=\"nav flex-column\">\n      <ng-container *ngFor=\"let menuItem of $menuItems | async\">\n        <div class=\"row align-items-center menu-item\" routerLinkActive=\"active\">\n          <div class=\"col pl-0\">\n            <a class=\"nav-link\" routerLink=\"{{menuItem.path}}\" (click)=\"menuItem.active = !menuItem.active; toggleMenu();\">{{menuItem.name}}</a>\n          </div>\n        </div>\n      </ng-container>\n    </nav>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/side-navigation/side-navigation.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/side-navigation/side-navigation.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\n.side-nav {\n  -webkit-transform: translate3d(-256px, 0, 0);\n          transform: translate3d(-256px, 0, 0);\n  transition: -webkit-transform 400ms ease-in-out;\n  transition: transform 400ms ease-in-out;\n  transition: transform 400ms ease-in-out, -webkit-transform 400ms ease-in-out;\n  background: #333;\n  width: 256px;\n  height: 100vh;\n  position: fixed;\n  z-index: 1030;\n  left: 0; }\n.side-nav.active {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    display: block;\n    z-index: 1030; }\n@media (max-width: 767.98px) {\n  .side-nav.active {\n    display: none; } }\n@media (min-width: 992px) {\n  .side-nav {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n.seb-logo {\n  height: 56px;\n  width: 56px; }\n.nav-link {\n  color: #fff;\n  font-weight: normal; }\n.menu-item:hover {\n  background: rgba(96, 205, 24, 0.25);\n  /*.nav-link {\n    color: $dark;\n  }*/ }\n.menu-item.active {\n  background: #60cd18; }\n.menu-item.active .nav-link {\n    font-weight: 500; }\n.menu-item.active-parent .nav-link {\n  font-weight: 500; }\n.menu-item.active-parent .nav-link::after {\n    display: block;\n    content: \"\";\n    left: 0;\n    width: 5px;\n    background: #60cd18;\n    top: 0;\n    position: absolute;\n    height: 100%;\n    -webkit-animation: expand ease-out .2s;\n            animation: expand ease-out .2s;\n    transition: -webkit-transform .2s ease-in-out;\n    transition: transform .2s ease-in-out;\n    transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out; }\n.menu-item.active-match .nav-link {\n  font-weight: 500; }\n.nav-wrapper {\n  height: calc(100% - 56px);\n  overflow-y: hidden; }\n.nav-wrapper:hover {\n    overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2FuaW1hdGlvbnMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc3JjL2FwcC9jb21wb25lbnRzL3NpZGUtbmF2aWdhdGlvbi9zaWRlLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvc2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3NlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcC1jb3JlL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErREE7Ozs7OztHQU1HO0FDbEVIO0VBQ0UsNkNBQWtDO1VBQWxDLHFDQUFrQztFQUNsQyxnREFBdUM7RUFBdkMsd0NBQXVDO0VBQXZDLDZFQUF1QztFQUN2QyxpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGNBQWE7RUFDYixnQkFBZTtFQUNmLGNDNFZzQztFRDNWdEMsUUFBTyxFQU1SO0FBZEQ7SUFVSSx3Q0FBNkI7WUFBN0IsZ0NBQTZCO0lBQzdCLGVBQWM7SUFDZCxjQ3VWb0MsRUR0VnJDO0FFeURDO0VGdERGO0lBQ0UsY0FBYSxFQUNkLEVBQUE7QUV1Q0M7RUZuQ0Y7SUFDRSx3Q0FBNkI7WUFBN0IsZ0NBQTZCLEVBQzlCLEVBQUE7QUFHSDtFQUNFLGFBQVc7RUFDWCxZQUFXLEVBQ1o7QUFFRDtFQUNFLFlBQVc7RUFDWCxvQkFBbUIsRUFFcEI7QUFFRDtFQUNFLG9DQ0s2QjtFREg3Qjs7S0FFRyxFQUNKO0FBRUQ7RUFLSSxvQkNQMkIsRURRNUI7QUFOSDtJQUdNLGlCQ3NKMkIsRURySjVCO0FBSkw7RUFTTSxpQkNnSjJCLEVEbkk1QjtBQXRCTDtJQVdRLGVBQWM7SUFDZCxZQUFXO0lBQ1gsUUFBTztJQUNQLFdBQVU7SUFDVixvQkNqQnVCO0lEa0J2QixPQUFNO0lBQ04sbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWix1Q0FBOEI7WUFBOUIsK0JBQThCO0lBQzlCLDhDQUFxQztJQUFyQyxzQ0FBcUM7SUFBckMseUVBQXFDLEVBQ3RDO0FBckJQO0VBMEJNLGlCQytIMkIsRUQ5SDVCO0FBSUw7RUFDRSwwQkFBeUI7RUFDekIsbUJBQWtCLEVBSW5CO0FBTkQ7SUFJSSxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtbmF2aWdhdGlvbi9zaWRlLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYW5pbWF0aW9uczogKFxuICBzbGlkZUluTGVmdDogc2xpZGVJbkxlZnQgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5SaWdodDogc2xpZGVJblJpZ2h0ICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluVXA6IHNsaWRlSW5VcCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJbkRvd246IHNsaWRlSW5Eb3duICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBmYWRlSW46IGZhZGVJbiAkdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uLFxuICBmYWRlSW5VcDogZmFkZUluVXAgJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbixcbik7XG5cbkBtaXhpbiBhbmltYXRpb25zKCkge1xuICBAaWYgJGVuYWJsZS10cmFuc2l0aW9ucyB7XG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgZmFkZUluVXAge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMzBweCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluTGVmdCB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluVXAge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluRG93biB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQWRkIG9uZSBvciBtb3JlIHRyYW5zaXRpb25zXG4gKlxuICogQGV4YW1wbGVcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCdzbGlkZUluVXAnKTtcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCgnc2xpZGVJblVwJywnZmFkZUluJykpXG4gKi9cbkBtaXhpbiBhZGQtdHJhbnNpdGlvbigkbGlzdCkge1xuICAkY29tYmluZWQ6ICcnO1xuICBAaWYgdHlwZS1vZigkbGlzdCkgPT0gJ3N0cmluZycge1xuICAgIGFuaW1hdGlvbjogbWFwX2dldCgkYW5pbWF0aW9ucywgJGxpc3QpO1xuICB9IEBlbHNlIGlmIHR5cGUtb2YoJGxpc3QpID09ICdsaXN0JyB7XG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGxpc3QpIHtcbiAgICAgICRhbmltOiBtYXBfZ2V0KCRhbmltYXRpb25zLCBudGgoJGxpc3QsICRpKSk7XG4gICAgICBAaWYgJGFuaW0gPT0gbnVsbCB7XG4gICAgICAgIEB3YXJuIG50aCgkbGlzdCwgJGkpIHVucXVvdGUoJ25vdCBmb3VuZCwgcGxlYXNlIHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBhbmltYXRpb25zOicpIHRvLWxpc3QoJGFuaW1hdGlvbnMsICdrZXlzJyk7XG4gICAgICB9XG5cbiAgICAgIEBpZiAkaSA9PSBsZW5ndGgoJGxpc3QpIHtcbiAgICAgICAgJGNvbWJpbmVkOiAkY29tYmluZWQgKyAkYW5pbTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgJGNvbWJpbmVkOiAkY29tYmluZWQgKyAkYW5pbSArICcsJztcbiAgICAgIH1cbiAgICB9XG4gICAgYW5pbWF0aW9uOiB1bnF1b3RlKCRjb21iaW5lZCk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvbWl4aW5zL21peGluc1wiO1xuXG4uc2lkZS1uYXYge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yNTZweCwwLDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgZWFzZS1pbi1vdXQ7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIHdpZHRoOiAyNTZweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAkemluZGV4LWZpeGVkO1xuICBsZWZ0OiAwO1xuICAmLmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgei1pbmRleDogJHppbmRleC1maXhlZDtcbiAgfVxufVxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XG4gIC5zaWRlLW5hdi5hY3RpdmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xuICAuc2lkZS1uYXYge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICB9XG59XG5cbi5zZWItbG9nbyB7XG4gIGhlaWdodDo1NnB4O1xuICB3aWR0aDogNTZweDtcbn1cblxuLm5hdi1saW5rIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cbn1cblxuLm1lbnUtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGdyZWVuLC4yNSk7XG4gIC8vYmFja2dyb3VuZDogJGxpZ2h0O1xuICAvKi5uYXYtbGluayB7XG4gICAgY29sb3I6ICRkYXJrO1xuICB9Ki9cbn1cblxuLm1lbnUtaXRlbSB7XG4gICYuYWN0aXZlIHtcbiAgICAubmF2LWxpbmsge1xuICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1tZWRpdW07XG4gICAgfVxuICAgIGJhY2tncm91bmQ6ICRncmVlbjtcbiAgfVxuICAmLmFjdGl2ZS1wYXJlbnQge1xuICAgIC5uYXYtbGluayB7XG4gICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW1lZGl1bTtcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICRncmVlbjtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYW5pbWF0aW9uOiBleHBhbmQgZWFzZS1vdXQgLjJzO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLmFjdGl2ZS1tYXRjaCB7XG4gICAgLm5hdi1saW5rIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbWVkaXVtO1xuICAgIH1cbiAgfVxufVxuXG4ubmF2LXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU2cHgpO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICY6aG92ZXIge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbn1cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOGY4ICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllOWU5ICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVkZWRlICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VjZWNlICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRhZGFkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjODY4Njg2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk0OTQ5ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzNDM0ICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyMTIxICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGdyYXlzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgICAgXCIyMDBcIjogJGdyYXktMjAwLFxuICAgICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgICAgXCI1MDBcIjogJGdyYXktNTAwLFxuICAgICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgICAgXCI4MDBcIjogJGdyYXktODAwLFxuICAgICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICAgKSxcbiAgICAkZ3JheXNcbik7XG5cblxuJHJlZDogICAgICAgICAgICAgICAgICAgI0YwMzUyOTtcbiRyZWQtZGFyazogICAgICAgICAgICAgICNEODFBMUE7IC8vIFNFQiBzcGVjaWZpY1xuJHJlZC1kYXJrZXI6ICAgICAgICAgICAgI0JCMDAwQzsgLy8gU0VCIHNwZWNpZmljXG4keWVsbG93LWRhcmtlcjogICAgICAgICAjRjhBMDAwOyAvLyBTRUIgc3BlY2lmaWNcbiR5ZWxsb3ctZGFyazogICAgICAgICAgICNGRkI0MDA7IC8vIFNFQiBzcGVjaWZpY1xuJHllbGxvdzogICAgICAgICAgICAgICAgI0ZGQzUwMDtcbiRncmVlbjogICAgICAgICAgICAgICAgICM2MGNkMTg7XG4kZ3JlZW4tZGFyazogICAgICAgICAgICAjNDVCNDAwOyAvLyBTRUIgc3BlY2lmaWNcbiRncmVlbi1kYXJrZXI6ICAgICAgICAgICMzNzlEMDA7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWU6ICAgICAgICAgICAgICAgICAgIzQxQjBFRTtcbiRibHVlLWRhcms6ICAgICAgICAgICAgICMwMDkyRTE7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWUtZGFya2VyOiAgICAgICAgICAgIzAwN0FDNzsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlOiAgICAgICAgICAgICAgICAjNjczQUI2O1xuJHB1cnBsZS1kYXJrOiAgICAgICAgICAgIzRGMkM5OTsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlLWRhcmtlcjogICAgICAgICAjM0YyNTg3OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkcHVycGxlICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gICAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXG4gICAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gICAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcbiAgICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbiAgICApLFxuICAgICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyYWRpZW50czogICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByaW50LXN0eWxlczogICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemVzOiAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdmFsaWRhdGlvbi1pY29uczogICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1ndXR0ZXJzOiAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1idXR0b24tdmFyaWF0aW9uczogICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLW5nLWJvb3RzdHJhcDogICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtYW5ndWxhci1nZW5lcmljLXRhYmxlOiAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1uZ3gtdG9hc3RyOiAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLWRlcHJlY2F0aW9uLW1lc3NhZ2VzOiAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgICAoXG4gICAgICAwOiAwLFxuICAgICAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAgICAgMjogKCRzcGFjZXIgKiAuNSksXG4gICAgICAzOiAkc3BhY2VyLFxuICAgICAgNDogKCRzcGFjZXIgKiAyKSxcbiAgICAgIDU6ICgkc3BhY2VyICogMylcbiAgICApLFxuICAgICRzcGFjZXJzXG4pO1xuXG4vLyBUaGlzIHZhcmlhYmxlIGFmZmVjdHMgdGhlIGAuaC0qYCBhbmQgYC53LSpgIGNsYXNzZXMuXG4kc2l6ZXM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzaXplczogbWFwLW1lcmdlKFxuICAgIChcbiAgICAgIDI1OiAyNSUsXG4gICAgICA1MDogNTAlLFxuICAgICAgNzU6IDc1JSxcbiAgICAgIDEwMDogMTAwJSxcbiAgICAgIGF1dG86IGF1dG9cbiAgICApLFxuICAgICRzaXplc1xuKTtcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cblxuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICM0NDQgIWRlZmF1bHQ7XG5cblxuLy8gUGFyYWdyYXBoc1xuLy9cbi8vIFN0eWxlIHAgZWxlbWVudC5cblxuLy8gR3JpZCBicmVha3BvaW50c1xuXG4vLyBHcmlkIGNvbnRhaW5lcnNcblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWd1dHRlci13aWR0aDogbWFwLWdldCgkc3BhY2VycywgMykqMiAhZGVmYXVsdDtcblxuLy8gU0VCIHNwZWNpZmljIG92ZXJyaWRlIHdoZW4gcmVzcG9uc2l2ZSBndXR0ZXJzIGFyZSBlbmFibGVkXG5AaWYgKCRlbmFibGUtcmVzcG9uc2l2ZS1ndXR0ZXJzKSB7XG4gICRncmlkLWd1dHRlci13aWR0aDogbWFwLWdldCgkc3BhY2VycywgMik7XG59XG5cbi8vIFNFQiBzcGVjaWZpY1xuJHJlc3BvbnNpdmUtZ3V0dGVyczogKFxuICBzbTptYXAtZ2V0KCRzcGFjZXJzLCAyKSoyLFxuICBsZzptYXAtZ2V0KCRzcGFjZXJzLCAyKSoyLFxuICB4bDptYXAtZ2V0KCRzcGFjZXJzLCAzKSoyXG4pICFkZWZhdWx0O1xuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uOi40cyBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uOiAgICAuMTVzIGxpbmVhciAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5ICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBGb250c1xuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRzZWItZm9udC1wYXRoOiAgICAgICAgICAgICAgIFwifkBzZWJncm91cC9mb250cy9mb250c1wiICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiU0VCU2Fuc1NlcmlmXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiVHJlYnVjaGV0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAuODc1KSAhZGVmYXVsdDtcbiRmb250LXNpemUteHM6ICAgKCRmb250LXNpemUtYmFzZSAqIC42ODc1KSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cblxuJGZvbnQtd2VpZ2h0LW1lZGl1bTogICAgICAgICAgNTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAzICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDAuODc1ICFkZWZhdWx0O1xuXG4kaDEtbWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGgyLW1kLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMy1tZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kaDEtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMi1zbS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDMtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgICMyMjIgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGJsdWUtZGFya2VyICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpbmstd2VpZ2h0OiAgICAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kZXh0ZXJuYWwtbGluay1pY29uLWNvbG9yOiAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbi1jb2xvcjogICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRleHRlcm5hbC1saW5rLWljb246ICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIGFyaWEtaGlkZGVuPSd0cnVlJyBkYXRhLXByZWZpeD0nZmFsJyBkYXRhLWljb249J2V4dGVybmFsLWxpbmstc3F1YXJlJyBjbGFzcz0nc3ZnLWlubGluZS0tZmEgZmEtZXh0ZXJuYWwtbGluay1zcXVhcmUgZmEtdy0xNCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGZpbGw9JyN7JGV4dGVybmFsLWxpbmstaWNvbi1jb2xvcn0nIGQ9J000MDAgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwdjM1MmMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDM1MmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjgwYzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6bTE2IDQwMGMwIDguODIyLTcuMTc4IDE2LTE2IDE2SDQ4Yy04LjgyMiAwLTE2LTcuMTc4LTE2LTE2VjgwYzAtOC44MjIgNy4xNzgtMTYgMTYtMTZoMzUyYzguODIyIDAgMTYgNy4xNzggMTYgMTZ2MzUyek05OS41MTUgMzc0LjgyOGMtNC42ODYtNC42ODYtNC42ODYtMTIuMjg0IDAtMTYuOTcxbDE5NS4xNS0xOTUuMTUtLjcwNy0uNzA3LTg5Ljk1OC4zNDJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTkuOTk5YzAtNi42MjggNS4zNzItMTIgMTItMTJMMzQwIDEyOGM2LjYyNyAwIDEyIDUuMzcyIDEyIDEybC0uMzQzIDEzNmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC05Ljk5OWMtNi42MjcgMC0xMi01LjM3My0xMi0xMmwuMzQyLTg5Ljk1OC0uNzA3LS43MDctMTk1LjE1IDE5NS4xNWMtNC42ODYgNC42ODYtMTIuMjg0IDQuNjg2LTE2Ljk3MSAwbC01LjY1Ny01LjY1N3onLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZXh0ZXJuYWwtbGluay1ob3Zlci1pY29uOiAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBhcmlhLWhpZGRlbj0ndHJ1ZScgZGF0YS1wcmVmaXg9J2ZhbCcgZGF0YS1pY29uPSdleHRlcm5hbC1saW5rLXNxdWFyZScgY2xhc3M9J3N2Zy1pbmxpbmUtLWZhIGZhLWV4dGVybmFsLWxpbmstc3F1YXJlIGZhLXctMTQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBmaWxsPScjeyRleHRlcm5hbC1saW5rLWhvdmVyLWljb24tY29sb3J9JyBkPSdNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0xNiA0MDBjMCA4LjgyMi03LjE3OCAxNi0xNiAxNkg0OGMtOC44MjIgMC0xNi03LjE3OC0xNi0xNlY4MGMwLTguODIyIDcuMTc4LTE2IDE2LTE2aDM1MmM4LjgyMiAwIDE2IDcuMTc4IDE2IDE2djM1MnpNOTkuNTE1IDM3NC44MjhjLTQuNjg2LTQuNjg2LTQuNjg2LTEyLjI4NCAwLTE2Ljk3MWwxOTUuMTUtMTk1LjE1LS43MDctLjcwNy04OS45NTguMzQyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi05Ljk5OWMwLTYuNjI4IDUuMzcyLTEyIDEyLTEyTDM0MCAxMjhjNi42MjcgMCAxMiA1LjM3MiAxMiAxMmwtLjM0MyAxMzZjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtOS45OTljLTYuNjI3IDAtMTItNS4zNzMtMTItMTJsLjM0Mi04OS45NTgtLjcwNy0uNzA3LTE5NS4xNSAxOTUuMTVjLTQuNjg2IDQuNjg2LTEyLjI4NCA0LjY4Ni0xNi45NzEgMGwtNS42NTctNS42NTd6Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBHcmlkIGJyZWFrcG9pbnRzXG4vL1xuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXG5cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gICAgICAgIHhzOiAwLFxuICAgICAgICBzbTogNTc2cHgsXG4gICAgICAgIG1kOiA3NjhweCxcbiAgICAgICAgbGc6IDk5MnB4LFxuICAgICAgICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcbi8vXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbiR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgIC42MjVyZW0gLjc1cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjI3NXJlbSAuM3JlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmx1ZSwgLjA3NSkgIWRlZmF1bHQ7XG5cbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWV4cGFuZC1iZzogICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuNTYyNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4yODEyNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgIC43NXJlbSAhZGVmYXVsdDtcblxuXG4vLyBCdXR0b25zXG4vL1xuLy8gRm9yIGVhY2ggb2YgQm9vdHN0cmFwJ3MgYnV0dG9ucywgZGVmaW5lIHRleHQsIGJhY2tncm91bmQsIGFuZCBib3JkZXIgY29sb3IuXG5cbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAxICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGJ0bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA2NSUgNjUlICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM0UlM0NjaXJjbGUgcj0nMy41JyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZ30nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjdXN0b20tc2xpZGUtdG9nZ2xlLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM0UlM0NjaXJjbGUgcj0nMy41JyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZ30nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogICAgICRibHVlO1xuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogICAgICAgICAgICAgMTZweCAxNnB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3I6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTQ0My41IDE2Mi42bC03LjEtNy4xYy00LjctNC43LTEyLjMtNC43LTE3IDBMMjI0IDM1MSAyOC41IDE1NS41Yy00LjctNC43LTEyLjMtNC43LTE3IDBsLTcuMSA3LjFjLTQuNyA0LjctNC43IDEyLjMgMCAxN2wyMTEgMjExLjFjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIxMS0yMTEuMWM0LjgtNC43IDQuOC0xMi4zLjEtMTd6Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICA0cHggIWRlZmF1bHQ7XG5cblxuJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgZW46IFwiQnJvd3NlXCJcbikgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGQ9J000MTMuNTA1IDkxLjk1MUwxMzMuNDkgMzcxLjk2NmwtOTguOTk1LTk4Ljk5NWMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwTDYuMjExIDI4NC4yODRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWwxMTguNzk0IDExOC43OTRjNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MSAwbDI5OS44MTMtMjk5LjgxM2M0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFsLTExLjMxNC0xMS4zMTRjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NyAweicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMiclM0UlM0NwYXRoIGQ9J001NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU0LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTIgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6bS0yNy42NTggMTUuOTkxbC0yNDAtNDE2Yy02LjE2LTEwLjY3OC0yMS41ODMtMTAuNjM0LTI3LjcxOCAwbC0yNDAgNDE2QzI3Ljk4MyA0NjYuNjc4IDM1LjczMSA0ODAgNDggNDgwaDQ4MGMxMi4zMjMgMCAxOS45OS0xMy4zNjkgMTMuODU5LTIzLjk5NnpNMjg4IDM3MmMtMTUuNDY0IDAtMjggMTIuNTM2LTI4IDI4czEyLjUzNiAyOCAyOCAyOCAyOC0xMi41MzYgMjgtMjgtMTIuNTM2LTI4LTI4LTI4em0tMTEuNDktMjEyaDIyLjk3OWM2LjgyMyAwIDEyLjI3NCA1LjY4MiAxMS45OSAxMi41bC03IDE2OGMtLjI2OCA2LjQyOC01LjU1NiAxMS41LTExLjk5IDExLjVoLTguOTc5Yy02LjQzMyAwLTExLjcyMi01LjA3My0xMS45OS0xMS41bC03LTE2OGMtLjI4My02LjgxOCA1LjE2Ny0xMi41IDExLjk5LTEyLjV6TTI4OCAzNzJjLTE1LjQ2NCAwLTI4IDEyLjUzNi0yOCAyOHMxMi41MzYgMjggMjggMjggMjgtMTIuNTM2IDI4LTI4LTEyLjUzNi0yOC0yOC0yOHonIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stbGluZS10aGlja25lc3M6ICAgICAgMnB4ICFkZWZhdWx0O1xuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cblxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0O1xuXG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgIC42MjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tY2hldnJvbi1jb2xvcjogICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZHJvcGRvd24tY2hldnJvbi1hY3RpdmUtY29sb3I6ICAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG5cblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duLWJhY2tkcm9wOiAgICAgICAgICA5OTAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcblxuLy8gTmF2c1xuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjU2MjVyZW0gIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRuYXYtdGFicy1saW5rLWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJG5hdi10YWJzLWxpbmstZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBOYXZiYXJcbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgIC40Mzc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXdlaWdodDogICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAkYmx1ZSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG5cblxuXG4vLyBKdW1ib3Ryb25cblxuLy8gQ2FyZHNcblxuLy8gVG9vbHRpcHNcblxuLy8gUG9wb3ZlcnNcblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cblxuLy8gTW9kYWxzXG5cbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAwICFkZWZhdWx0O1xuXG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAwICFkZWZhdWx0O1xuJG1vZGFsLWFzaWRlLXdpZHRoOiAgICAgICAgICAgICAgICAgMzIwcHggIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJG1vZGFsLWFzaWRlLWxnLXdpZHRoOiAgICAgICAgICAgICAgbWFwX2dldCgkZ3JpZC1icmVha3BvaW50cywgJ21kJyk7IC8vIDgwMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWxlcnQtbGluay1mb250LXdlaWdodDogICAgICAgICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0OyAvLzUwMFxuJGFsZXJ0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRhbGVydC1pY29uLXdpZHRoOiAgICAgICAgICAgICAgICAgIDEuMTI1cmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRhbGVydC1pY29uLWhlaWdodDogICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4vLyBUb2FzdCBub3RpZmljYXRpb25zXG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYWxlcnQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtcGFkZGluZzogICAgICAgICAgICAgICAgICAgICAkYWxlcnQtcGFkZGluZy14ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgIDAgMCAuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4vLyBMaXN0IGdyb3VwXG4kbGlzdC1ncm91cC1idWxsZXQtaWNvbjogc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxIDEnJTNFJTNDcmVjdCB3aWR0aD0nMScgaGVpZ2h0PScxJyBzdHlsZT0nZmlsbDojeyRkYXJrfTsnIC8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGxpc3QtZ3JvdXAtY2hlY2staWNvbjogc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJyUzRSUzQ3BhdGggZmlsbD0nI3skZ3JlZW59JyBkPSdNNDEzLjUwNSA5MS45NTFMMTMzLjQ5IDM3MS45NjZsLTk4Ljk5NS05OC45OTVjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMEw2LjIxMSAyODQuMjg0Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFsMTE4Ljc5NCAxMTguNzk0YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMGwyOTkuODEzLTI5OS44MTNjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxbC0xMS4zMTQtMTEuMzE0Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMHonIGNsYXNzPSdzdDAnLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kbGlzdC1ncm91cC1tYXJnaW4tYm90dG9tOiAxcmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWJnOiAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRncmVlbiAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbi8vIEZpZ3VyZXNcblxuLy8gQnJlYWRjcnVtYnNcbiRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1mb250LXdlaWdodDogICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRicmVhZGNydW1iLWRpdmlkZXItY29sb3J9JyB2aWV3Qm94PScwIDAgMjU2IDUxMiclM0UlM0NwYXRoIGQ9J00xNy41MjUgMzYuNDY1bC03LjA3MSA3LjA3Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFMMjA1Ljk0NyAyNTYgMTAuNDU0IDQ1MS40OTRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWw3LjA3MSA3LjA3YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NyAwbDIxMS4wNTEtMjExLjA1YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwzNC40OTUgMzYuNDY1Yy00LjY4Ni00LjY4Ny0xMi4yODQtNC42ODctMTYuOTcgMHonLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYnJlYWRjcnVtYi1iYWNrLWljb246ICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yfScgdmlld0JveD0nMCAwIDI1NiA1MTInJTNFJTNDcGF0aCBkPSdNMjM4LjQ3NSA0NzUuNTM1bDcuMDcxLTcuMDdjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDUwLjA1MyAyNTYgMjQ1LjU0NiA2MC41MDZjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxbC03LjA3MS03LjA3Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMEwxMC40NTQgMjQ3LjUxNWMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxbDIxMS4wNTEgMjExLjA1YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45Ny0uMDAxeicvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRicmVhZGNydW1iLWRpdmlkZXItd2lkdGg6ICAgICAgICAgIDE1cHggIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG5cbi8vIENsb3NlXG5cbi8vIENvZGVcblxuLy8gUHJpbnRpbmdcblxuQGltcG9ydCBcImJvb3RzdHJhcC1jb3JlL2Z1bmN0aW9uc1wiO1xuQGltcG9ydCBcImJvb3RzdHJhcC1jb3JlL3ZhcmlhYmxlc1wiO1xuXG4vLyBTY3JvbGxiYXJcbiRzY3JvbGxiYXItdHJhY2stYmc6ICAkZ3JheS0xMDA7XG4kc2Nyb2xsYmFyLXRodW1iLWJnOiAgJGdyYXktNDAwO1xuJHNjcm9sbGJhci10cmFjay1kYXJrLWJnOiAgJGRhcms7XG4kc2Nyb2xsYmFyLXRodW1iLWRhcmstYmc6ICAkZ3JheS05MDA7XG4kc2Nyb2xsYmFyLXRodW1iLWFjdGl2ZS1iZzogJGJsdWU7XG4kc2Nyb2xsYmFyLXRoaWNrbmVzczogICAgIDEwcHg7XG5cbi8vIEFjY29yZGlvblxuXG4kYWNjb3JkaW9uLWJvcmRlci1jb2xvcjogICAgJHRhYmxlLWJvcmRlci1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvcmRlci13aWR0aDogICAgJHRhYmxlLWJvcmRlci13aWR0aCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWhlYWRlci1wYWRkaW5nOiAgMCAuNzVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib2R5LXBhZGRpbmc6ICAgICR0YWJsZS1jZWxsLXBhZGRpbmcgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1pdGVtLXBhZGRpbmcteTogIC41NjI1cmVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24taXRlbS1wYWRkaW5nLXg6ICAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYm9keS1iZzogICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLXNpemU6ICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/nav.service */ "./src/app/services/nav.service.ts");






var SideNavigationComponent = /** @class */ (function () {
    function SideNavigationComponent(router, menuService, navService) {
        this.router = router;
        this.menuService = menuService;
        this.navService = navService;
    }
    SideNavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })).subscribe(function (event) {
            _this.activeRoute = event['urlAfterRedirects'];
        });
        this.$menuItems = this.menuService.getComponents();
        this.$startItems = this.menuService.getStartItems();
        this.$baseItems = this.menuService.getBaseItems();
        this.$isActive = this.navService.getState();
    };
    SideNavigationComponent.prototype.toggleMenu = function () {
        this.navService.toggleState(false);
    };
    SideNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-navigation',
            template: __webpack_require__(/*! ./side-navigation.component.html */ "./src/app/components/side-navigation/side-navigation.component.html"),
            styles: [__webpack_require__(/*! ./side-navigation.component.scss */ "./src/app/components/side-navigation/side-navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"], _services_nav_service__WEBPACK_IMPORTED_MODULE_5__["NavService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var MenuService = /** @class */ (function () {
    function MenuService() {
        this.$activeTab = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.$menuItems = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
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
                name: 'Colors',
                path: '/colors'
            }, {
                name: 'Icons',
                path: '/icons'
            }];
        this.components = [{
                name: 'Alerts',
                path: '/alerts'
            }, {
                name: 'Toast notifications',
                path: '/toast-notifications'
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
                name: 'Radio buttons',
                path: '/radio-buttons'
            }, {
                name: 'Buttons',
                path: '/buttons'
            }, {
                name: 'Button group',
                path: '/button-group'
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
                name: 'Spinners',
                path: '/spinners'
            }, {
                name: 'Skeleton loaders',
                path: '/skeleton-loader'
            }, {
                name: 'Datepicker',
                path: '/datepicker'
            }, {
                name: 'Navbar',
                path: '/navbar'
            }];
        this.updateMenu('start');
    }
    MenuService.prototype.getMenu = function () {
        return this.$menuItems.asObservable();
    };
    MenuService.prototype.getStartItems = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.start);
    };
    MenuService.prototype.getBaseItems = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.base);
    };
    MenuService.prototype.getComponents = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.components);
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
        else if (menu === 'components') {
            this.$menuItems.next(this.components);
        }
        else {
            this.$menuItems.next(this.base);
        }
    };
    MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/services/nav.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/nav.service.ts ***!
  \*****************************************/
/*! exports provided: NavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return NavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var NavService = /** @class */ (function () {
    function NavService() {
        this.$isActive = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.$isActive.next(false);
    }
    NavService.prototype.toggleState = function (state) {
        this.$isActive.next(state || !this.$isActive.value);
    };
    NavService.prototype.getState = function () {
        return this.$isActive.asObservable();
    };
    NavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavService);
    return NavService;
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
    travis_build_number: '151'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/example/components/accordion/accordion.component.html":
/*!*******************************************************************!*\
  !*** ./src/example/components/accordion/accordion.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"accordion\"><h2 class=\"my-3\">Accordion</h2></a>\n<div class=\"alert alert-info mx-n3 mx-md-0\">\n  <strong>Framework needed!</strong> Please note that the example below is just a representation of how accordions look and the needed markup. In order to use accordion you need a framework to control when and how to toggle between active states. If you're using angular, please take a look at <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/\" target=\"_blank\">ng-bootstrap</a> and their <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/#/components/accordion\" target=\"_blank\">accordion component</a>.</div>\n\n<div class=\"card mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n      <ngb-panel id=\"static-1\" title=\"Simple\">\n        <ng-template ngbPanelContent>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel id=\"static-2\">\n        <ng-template ngbPanelTitle>\n          <strong>Custom title</strong><i class=\"fal fa-heart ml-2\"></i>\n        </ng-template>\n        <ng-template ngbPanelContent>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel id=\"static-3\" title=\"Disabled\" [disabled]=\"true\">\n        <ng-template ngbPanelContent>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n    </ngb-accordion>\n    <exemplify [selector]=\"'ngb-accordion'\" [escapeStrings]=\"[' ngbPanelContent', ' ngbPanelTitle', '[closeOthers]', ' activeIds']\"></exemplify>\n  </div>\n</div>"

/***/ }),

/***/ "./src/example/components/accordion/accordion.component.ts":
/*!*****************************************************************!*\
  !*** ./src/example/components/accordion/accordion.component.ts ***!
  \*****************************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccordionComponent = /** @class */ (function () {
    function AccordionComponent() {
    }
    AccordionComponent.prototype.ngOnInit = function () {
    };
    AccordionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accordion',
            template: __webpack_require__(/*! ./accordion.component.html */ "./src/example/components/accordion/accordion.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccordionComponent);
    return AccordionComponent;
}());



/***/ }),

/***/ "./src/example/components/alerts/alerts.component.html":
/*!*************************************************************!*\
  !*** ./src/example/components/alerts/alerts.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"alerts\"><h2 class=\"my-3\">Alerts</h2></a>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <h5>When to use alerts?</h5>\n    <p>Alerts are available for any length of text and can be used for more than traditional alerts. Ideally they should be used when we want content or information to stand out, be separated from the \"normal\" state, highlight a change, make the user aware of important information or simply to convey the response from an action.</p>\n    <h5>What context should I use?</h5>\n    <p>For proper styling, use one of the required contextual classes described below. Avoid using different contexts/colors as a means of separating categories and content of the same type as it might confuse users and make the real context less obvious.</p>\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <th>Context</th>\n        <th>Usage</th>\n        <th>Class name</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>Primary</td>\n        <td>For content that should stand out but lacks obvious meaning/context and is not a response to an action.</td>\n        <td><code>.alert-primary</code></td>\n      </tr>\n      <tr>\n        <td>Secondary</td>\n        <td>For secondary content that should stand out but lacks obvious meaning/context and is not a response to an action.</td>\n        <td><code>.alert-secondary</code></td>\n      </tr>\n      <tr>\n        <td>Info</td>\n        <td>Content that holds neutral information that we find useful for user and that we want to inform them about.</td>\n        <td><code>.alert-info</code></td>\n      </tr>\n      <tr>\n        <td>Success</td>\n        <td>Should be used as a response to an action or something that is considered to be positive or a success.</td>\n        <td><code>.alert-success</code></td>\n      </tr>\n      <tr>\n        <td>Warning</td>\n        <td>Not an error but important information for a user to consider or be aware of.</td>\n        <td><code>.alert-warning</code></td>\n      </tr>\n      <tr>\n        <td>Danger</td>\n        <td>Used for errors or when something goes wrong.</td>\n        <td><code>.alert-danger</code></td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"alertOutlineExample\">\n  <h4 class=\"card-header\">Alert outlined</h4>\n  <div class=\"card-body\">\n    <p>The examples below use the <code>.alert-outline-*</code> class (replace * with context) for a more subtle message. The background is white to make it stick out when placed on grey backgrounds.</p>\n    <div class=\"alert alert-outline-primary\" role=\"alert\">\n      <strong>Primary content</strong> This message just needs to stand out.\n    </div>\n    <div class=\"alert alert-outline-secondary\" role=\"alert\">\n      <strong>Secondary content</strong> This message just needs to stand out.\n    </div>\n    <div class=\"alert alert-outline-success\" role=\"alert\">\n      <strong>Well done!</strong> You successfully read this important alert message.\n    </div>\n    <div class=\"alert alert-outline-info\" role=\"alert\">\n      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n    </div>\n    <div class=\"alert alert-outline-warning\" role=\"alert\">\n      <strong>Warning!</strong> Better check yourself, you're not looking too good.\n    </div>\n    <div class=\"alert alert-outline-danger\" role=\"alert\">\n      <strong>Oh snap!</strong> Change a few things up and try submitting again.\n    </div>\n    <exemplify [selector]=\"'#alertOutlineExample .alert'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"alertExample\">\n  <h4 class=\"card-header\">Alert</h4>\n  <div class=\"card-body\">\n    <p>The examples below use the traditional <code>.alert-*</code> class (replace * with context), for use cases where the message is really important and needs to stand out.</p>\n    <div class=\"alert alert-primary\" role=\"alert\">\n      <strong>Primary content</strong> This message just needs to stand out.\n    </div>\n    <div class=\"alert alert-secondary\" role=\"alert\">\n      <strong>Secondary content</strong> This message just needs to stand out.\n    </div>\n    <div class=\"alert alert-success\" role=\"alert\">\n      <strong>Well done!</strong> You successfully read this important alert message.\n    </div>\n    <div class=\"alert alert-info\" role=\"alert\">\n      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n    </div>\n    <div class=\"alert alert-warning\" role=\"alert\">\n      <strong>Warning!</strong> Better check yourself, you're not looking too good.\n    </div>\n    <div class=\"alert alert-danger\" role=\"alert\">\n      <strong>Oh snap!</strong> Change a few things up and try submitting again.\n    </div>\n    <exemplify [selector]=\"'#alertExample .alert'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"alertIconExample\">\n  <h4 class=\"card-header\">Alert with icons</h4>\n  <div class=\"card-body\">\n    <p>The examples below use the traditional <code>.alert-*</code> class (replace * with context), together with <code>.alert-icon</code> to add extra emphasis by displaying an icon next to the message. Note that only <code>warning</code> and <code>danger</code> alerts have icons at the moment.</p>\n    <div class=\"alert alert-primary alert-icon\" role=\"alert\">\n      <strong>Primary content</strong> This message just needs to stand out.\n    </div>\n    <div class=\"alert alert-secondary alert-icon\" role=\"alert\">\n      <strong>Secondary content</strong> This message just needs to stand out.\n    </div>\n    <div class=\"alert alert-success alert-icon\" role=\"alert\">\n      <strong>Well done!</strong> You successfully read this important alert message.\n    </div>\n    <div class=\"alert alert-info alert-icon\" role=\"alert\">\n      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n    </div>\n    <div class=\"alert alert-warning alert-icon\" role=\"alert\">\n      <strong>Warning!</strong> Better check yourself, you're not looking too good.\n    </div>\n    <div class=\"alert alert-danger alert-icon\" role=\"alert\">\n      <strong>Oh snap!</strong> Change a few things up and try submitting again. Look it works with really long texts too. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu purus in odio finibus dignissim. Pellentesque nibh tortor, lacinia a dapibus et, scelerisque quis dui.\n    </div>\n    <exemplify [selector]=\"'#alertIconExample .alert'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"alertLinkExample\">\n  <h4 class=\"card-header\">Alert with link</h4>\n  <div class=\"card-body\">\n    <p>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.</p>\n    <div class=\"alert alert-success\" role=\"alert\">\n      This is a success alert with <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <div class=\"alert alert-danger\" role=\"alert\">\n      This is a danger alert with <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <div class=\"alert alert-warning\" role=\"alert\">\n      This is a warning alert with <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <div class=\"alert alert-info\" role=\"alert\">\n      This is a info alert with <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <exemplify [selector]=\"'#alertLinkExample .alert'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"alertAdvancedExample\">\n  <h4 class=\"card-header\">Alert that can be dismissed</h4>\n  <div class=\"card-body bg-light\">\n    <p>A more complex alert that can be dismissed (please note that JavaScript or framework is needed to dismiss alert messages!).</p>\n    <button class=\"btn btn-primary\" (click)=\"active = true\" *ngIf=\"!active\">Show alerts</button>\n    <div class=\"alert alert-danger fade\" role=\"alert\" [ngClass]=\"{'show':active}\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"active = !active\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <h4 class=\"alert-heading\">Error!</h4>\n      <p>Opps, looks like you've encountered an error with an important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n      <hr>\n      <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n    </div>\n    <div class=\"alert alert-outline-success fade\" role=\"alert\" [ngClass]=\"{'show':active}\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"active = !active\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <h4 class=\"alert-heading\">Well done!</h4>\n      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n      <hr>\n      <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n    </div>\n    <exemplify [selector]=\"'#alertAdvancedExample .alert'\"></exemplify>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertsComponent = /** @class */ (function () {
    function AlertsComponent() {
        this.active = true;
    }
    AlertsComponent.prototype.ngOnInit = function () {
    };
    AlertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__(/*! ./alerts.component.html */ "./src/example/components/alerts/alerts.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<a name=\"breadcrumbs\"><h2 class=\"my-3\">Breadcrumbs</h2></a>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <p>Use breadcrumbs to leave a trace so that the users can find their way back when navigating the app. On mobile devices only the second to last item will be displayed together with a back icon, resize the browser to see it live.</p>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item active\">Home</li>\n    </ol>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n      <li class=\"breadcrumb-item active\">Library</li>\n    </ol>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n      <li class=\"breadcrumb-item\"><a href=\"#\">Library</a></li>\n      <li class=\"breadcrumb-item active\">Data</li>\n    </ol>\n    <exemplify [selector]=\"'.breadcrumb'\"></exemplify>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent() {
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-breadcrumbs',
            template: __webpack_require__(/*! ./breadcrumbs.component.html */ "./src/example/components/breadcrumbs/breadcrumbs.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());



/***/ }),

/***/ "./src/example/components/button-group/button-group.component.html":
/*!*************************************************************************!*\
  !*** ./src/example/components/button-group/button-group.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"buttonGroup\"><h2 class=\"my-3\">Button group</h2></a>\n<div class=\"card mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <p>Group buttons together using a button group, check <a href=\"https://getbootstrap.com/docs/4.2/components/button-group/\" target=\"_blank\">bootstrap docs</a> for more info and examples. Note that javascript is required to use button groups like radio buttons or checkboxes.</p>\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n        <button type=\"button\" class=\"btn btn-outline-primary\">Left</button>\n        <button type=\"button\" class=\"btn btn-outline-primary\">Middle</button>\n        <button type=\"button\" class=\"btn btn-outline-primary\">Right</button>\n      </div>\n    <exemplify [selector]=\"'.card-body > div'\"></exemplify>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/example/components/button-group/button-group.component.ts":
/*!***********************************************************************!*\
  !*** ./src/example/components/button-group/button-group.component.ts ***!
  \***********************************************************************/
/*! exports provided: ButtonGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupComponent", function() { return ButtonGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonGroupComponent = /** @class */ (function () {
    function ButtonGroupComponent() {
    }
    ButtonGroupComponent.prototype.ngOnInit = function () {
    };
    ButtonGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button-group',
            template: __webpack_require__(/*! ./button-group.component.html */ "./src/example/components/button-group/button-group.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonGroupComponent);
    return ButtonGroupComponent;
}());



/***/ }),

/***/ "./src/example/components/buttons/buttons.component.html":
/*!***************************************************************!*\
  !*** ./src/example/components/buttons/buttons.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"buttons\"><h2 class=\"my-3\">Buttons</h2></a>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"buttonsExample\">\n  <h4 class=\"card-header\">Main buttons</h4>\n  <div class=\"card-body\">\n    <p>We have three main button classes that we use <code>.btn-primary</code>, <code>.btn-secondary</code> and <code>.btn-link</code>, use the latter to give buttons the same behavior as normal links (used for links placed outside text segments and paragraphs as well as actions similar to \"go to\" or regular links).</p>\n    <label class=\"d-block\">Standard</label>\n    <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n    <button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\n    <button type=\"button\" class=\"btn btn-link\">Link</button>\n    <button type=\"button\" class=\"btn btn-outline-primary\">Primary outlined</button>\n    <label class=\"d-block mt-3\">Disabled</label>\n    <button type=\"button\" class=\"btn btn-primary disabled\">Primary</button>\n    <button type=\"button\" class=\"btn btn-secondary disabled\">Secondary</button>\n    <button type=\"button\" class=\"btn btn-link disabled\">Link</button>\n    <button type=\"button\" class=\"btn btn-outline-primary disabled\">Primary-outlined</button>\n    <exemplify [selector]=\"'#buttonsExample .btn:not(.disabled)'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"buttonsLightExample\">\n  <h4 class=\"card-header\">Buttons and colored backgrounds</h4>\n  <div class=\"card-body\">\n    <p>The <code>.btn-light</code> class should only be used when buttons are placed on colored or dark backgrounds/images.</p>\n    <div class=\"row align-items-center no-gutters\">\n      <div class=\"col-6 col-md-4 col-lg bg-primary-element py-4 text-center\">\n        <button class=\"btn btn-light\">Light</button>\n      </div>\n      <div class=\"col-6 col-md-4 col-lg bg-info-element py-4 text-center\">\n        <button class=\"btn btn-light\">Light</button>\n      </div>\n      <div class=\"col-6 col-md-4 col-lg bg-success-element py-4 text-center\">\n        <button class=\"btn btn-light\">Light</button>\n      </div>\n      <div class=\"col-6 col-md-4 col-lg bg-warning-element py-4 text-center\">\n        <button class=\"btn btn-light\">Light</button>\n      </div>\n      <div class=\"col-6 col-md-4 col-lg bg-danger-element py-4 text-center\">\n        <button class=\"btn btn-light\">Light</button>\n      </div>\n      <div class=\"col-6 col-md-4 col-lg bg-image-example py-4 text-center\">\n        <button class=\"btn btn-light\">Light</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"additionalButtonsExample\">\n  <h4 class=\"card-header\">Alternative buttons (internal use)</h4>\n  <div class=\"card-body\">\n    <p>Since SEB Style is a theme for Bootstrap and Bootstrap has some additional button classes to differentiate the severity or the meaning of a button like <code>.btn-danger</code> for actions like delete and remove that might require a bit more attentions, the following classes are available too. Note however that they'll still fallback to our default classes. For internal apps you can override this behaviour and get alternative buttons by setting <code>$enable-button-variations</code> variable to <code>true</code>.</p>\n    <button type=\"button\" class=\"btn btn-success\">Success</button>\n    <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n    <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n    <button type=\"button\" class=\"btn btn-danger\">Info</button>\n    <exemplify [selector]=\"'#additionalButtonsExample .btn:not(.disabled)'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"smallButtonsExample\">\n  <h4 class=\"card-header\">Sizing</h4>\n  <div class=\"card-body\">\n    <p>Add <code>.btn-sm</code> for smaller buttons and <code>.btn-lg</code> for larger buttons.</p>\n    <button type=\"button\" class=\"btn btn-sm btn-primary\">Small primary</button>\n    <button type=\"button\" class=\"btn btn-sm btn-secondary\">Small secondary</button>\n    <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n    <button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\n    <button type=\"button\" class=\"btn btn-lg btn-primary\">Large primary</button>\n    <button type=\"button\" class=\"btn btn-lg btn-secondary\">Large secondary</button>\n    <exemplify [selector]=\"'#smallButtonsExample .btn:not(.disabled)'\"></exemplify>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/example/components/buttons/buttons.component.scss":
/*!***************************************************************!*\
  !*** ./src/example/components/buttons/buttons.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZXhhbXBsZS9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./src/example/components/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/example/components/buttons/buttons.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/example/components/cards/cards.component.html":
/*!***********************************************************!*\
  !*** ./src/example/components/cards/cards.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"cards\"><h2 class=\"my-3\">Cards</h2></a>\n<div class=\"card mx-n3 mx-md-0\">\n  <div class=\"card-body\" id=\"cardExample\">\n    <h4 class=\"card-title\">Card with header and content</h4>\n    <p class=\"mb-3\">For more info and examples please refer to Bootstraps <a href=\"http://getbootstrap.com/docs/4.1/components/card/\" target=\"_blank\">official documentation</a>.</p>\n    <div class=\"card\">\n      <h4 class=\"card-header\">Card header</h4>\n      <div class=\"card-body\">\n        <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#cardExample > .card'\"></exemplify>\n  </div>\n</div>"

/***/ }),

/***/ "./src/example/components/cards/cards.component.ts":
/*!*********************************************************!*\
  !*** ./src/example/components/cards/cards.component.ts ***!
  \*********************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/example/components/cards/cards.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"checkboxes\"><h2 class=\"my-3\">Checkboxes and slide toggles</h2></a>\n<p class=\"lead\">Below you'll find some examples of checkboxes and layout options using the grid (rows and columns), check the <a routerLink=\"/forms\">forms</a> section for more form elements or head over to <a href=\"https://getbootstrap.com/docs/4.0/components/forms/#overview\" target=\"_blank\">bootstrap docs</a> for more info and examples.</p>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"checkboxExample\">\n  <h4 class=\"card-header\">Standard checkbox</h4>\n  <div class=\"card-body\">\n    <p>We use a standard input element with <code>type=\"checkbox\"</code> for checkboxes but we need to wrap it in a div to get the right style for the different states.</p>\n    <div class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck\">\n      <label class=\"custom-control-label\" for=\"customCheck\">Check this custom checkbox</label>\n    </div>\n    <div class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckDisabled\" disabled>\n      <label class=\"custom-control-label\" for=\"customCheckDisabled\">This checkbox is disabled</label>\n    </div>\n    <exemplify [selector]=\"'#checkboxExample .custom-control'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"checkboxLayoutExample\">\n  <h4 class=\"card-header\">Horizontal layout</h4>\n  <div class=\"card-body\">\n    <p>Use rows and columns to create a responsive layout, in the example below checkboxes will be placed inline on medium sized screens and up. On smaller screens the checkboxes will stack on top of each other, test by resizing the window. Use one of the following utility classes <code>.my-*</code>, <code>.mb-*</code> or <code>.mt-*</code> to add spacing between the different options, ie. <code>mb-2 mb-md-0</code> to get a small bottom margin on small screens and below.</p>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-auto mb-2 mb-md-0\">\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckInline\">\n          <label class=\"custom-control-label\" for=\"customCheckInline\">Check this custom checkbox</label>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-auto mb-2 mb-md-0\">\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckInline1\">\n          <label class=\"custom-control-label\" for=\"customCheckInline1\">And this one</label>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-auto\">\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckInline2\">\n          <label class=\"custom-control-label\" for=\"customCheckInline2\">Don't forget me</label>\n        </div>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#checkboxLayoutExample .row'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"slideToggleExample\">\n  <h4 class=\"card-header\">Slide toggle</h4>\n  <div class=\"card-body\">\n    <p>The slide toggle works just like a normal checkbox and uses the same markup and bindings, to make it look like a slide toggle just add the class <code>custom-slide-toggle</code>.</p>\n    <div class=\"custom-control custom-slide-toggle\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSlideToggle\">\n      <label class=\"custom-control-label\" for=\"customSlideToggle\">Toggle this input</label>\n    </div>\n    <div class=\"custom-control custom-slide-toggle\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSlideToggleDisabled\" disabled>\n      <label class=\"custom-control-label\" for=\"customSlideToggleDisabled\">Toggle disabled</label>\n    </div>\n    <exemplify [selector]=\"'#slideToggleExample .custom-control'\"></exemplify>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckboxesAndSlideTogglesComponent = /** @class */ (function () {
    function CheckboxesAndSlideTogglesComponent() {
    }
    CheckboxesAndSlideTogglesComponent.prototype.ngOnInit = function () {
    };
    CheckboxesAndSlideTogglesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkboxes-and-slide-toggles',
            template: __webpack_require__(/*! ./checkboxes-and-slide-toggles.component.html */ "./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxesAndSlideTogglesComponent);
    return CheckboxesAndSlideTogglesComponent;
}());



/***/ }),

/***/ "./src/example/components/colors/colors.component.html":
/*!*************************************************************!*\
  !*** ./src/example/components/colors/colors.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"my-3\">Colors</h2>\n<p class=\"lead px-3 px-md-0\">\n  Read more about our colors and how and when to use them in <a class=\"font-weight-normal\" href=\"http://designlibrary.sebank.se/visual-identity/colours/\" target=\"_blank\">design library</a> and in our\n  <a class=\"font-weight-normal\" href=\"https://seb.brandmanual.se/en/design-elements/colours\" target=\"_blank\">brand manual</a>.\n</p>\n<div class=\"card\">\n  <h4 class=\"card-header pb-0\">Colors in bootstrap</h4>\n  <div class=\"card-body\">\n    <p>All colors listed on the sites above are available in bootstrap too, the names might differ and bootstrap includes additional colors not mentioned in design library. For example bootstrap contains a border color which happens to be gray and a primary color which happens to be blue, just to mention a few.</p>\n    <p>The idea is to add an abstraction layer on top of our design. We rarely need to specify things like borders should be gray (tables already inherit that style etc.) if we need to, we should instead use the <code>$table-border-color</code> variable provided by our theme for bootstrap. We also want to avoid using or inventing class names like <code>.seb-green</code> and instead use contextual class names like <code>.bg-success</code> which happens to be SEB:s green color and in this case we add <code>bg-</code> to denote that we're referring to a background color.</p>\n    <p>In most cases you should avoid using the classes below as they're often inherited, see <a routerLink=\"/alerts\">alerts</a> or <a routerLink=\"/buttons\">buttons</a> as an example. It's possible to override their appearance or create new \"styles\" using these utility classes but most of the time there's already a component or class that does that for you, i.e. use <a routerLink=\"/alerts\">alerts</a> instead of adding the background color directly.</p>\n  </div>\n  <h4 class=\"card-header\">Background colors</h4>\n  <div class=\"card-body\">\n    <div class=\"row no-gutters\">\n      <div class=\"col-12 col-sm-4\" *ngFor=\"let color of colors\">\n        <div class=\"{{'bg-' + color.name + ' p-3 ' + 'text-' + color.textColor}}\">\n          <label class=\"{{'text-' + color.textColor}}\">class:</label>\n          <p>{{'bg-' + color.name}}</p></div>\n      </div>\n    </div>\n  </div>\n  <h4 class=\"card-header\">Text colors</h4>\n  <div class=\"card-body\">\n    <div class=\"row no-gutters\">\n      <div class=\"col-12 col-sm-4\" *ngFor=\"let color of colors\">\n        <div class=\"{{(color.textColor === 'dark' ? 'bg-dark ':'') + 'p-3 ' + 'text-' + color.name}}\">\n          <label class=\"{{(color.textColor === 'dark' ? 'text-white':'')}}\">class:</label>\n          <p>{{'text-' + color.name}}</p></div>\n      </div>\n    </div>\n  </div>\n  <h4 class=\"card-header pb-0\">Background elements</h4>\n  <div class=\"card-body\">\n    <p>Use the following classes to add the fifth element as a background image.</p>\n    <div class=\"bg-primary-element text-white\">\n      <div class=\"p-3 mb-0\"><label class=\"text-white\">class:</label>\n      <p>bg-primary-element</p></div>\n      <p class=\"display-1 p-3\">Primary Element</p>\n    </div>\n    <div class=\"bg-secondary-element\">\n      <div class=\"p-3 mb-0\"><label>class:</label>\n      <p>bg-secondary-element</p></div>\n      <p class=\"display-1 p-3\">Secondary Element</p>\n    </div>\n    <div class=\"bg-success-element text-white\">\n      <div class=\"p-3 mb-0\"><label class=\"text-white\">class:</label>\n      <p>bg-success-element</p></div>\n      <p class=\"display-1 p-3\">Success Element</p>\n    </div>\n    <div class=\"bg-info-element text-white\">\n      <div class=\"p-3 mb-0\"><label class=\"text-white\">class:</label>\n      <p>bg-info-element</p></div>\n      <p class=\"display-1 p-3\">Info Element</p>\n    </div>\n    <div class=\"bg-warning-element\">\n      <div class=\"p-3 mb-0\"><label>class:</label>\n      <p>bg-warning-element</p></div>\n      <p class=\"display-1 p-3\">Warning Element</p>\n    </div>\n    <div class=\"bg-danger-element text-white\">\n      <div class=\"p-3 mb-0\"><label class=\"text-white\">class:</label>\n      <p>bg-danger-element</p></div>\n      <p class=\"display-1 p-3\">Danger Element</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/example/components/colors/colors.component.ts":
/*!***********************************************************!*\
  !*** ./src/example/components/colors/colors.component.ts ***!
  \***********************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColorsComponent = /** @class */ (function () {
    function ColorsComponent() {
        this.colors = [{
                name: 'primary',
                textColor: 'white'
            }, {
                name: 'secondary',
                textColor: 'dark'
            }, {
                name: 'info',
                textColor: 'white'
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
    }
    ColorsComponent.prototype.ngOnInit = function () {
    };
    ColorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-colors',
            template: __webpack_require__(/*! ./colors.component.html */ "./src/example/components/colors/colors.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/example/components/datepicker/datepicker-input/datepicker-input.component.html":
/*!********************************************************************************************!*\
  !*** ./src/example/components/datepicker/datepicker-input/datepicker-input.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\">\n  <div class=\"form-group\">\n    <div class=\"input-group\" [ngClass]=\"{'active':d.isOpen()}\">\n      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n             name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (focus)=\"d.toggle()\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-outline-secondary fal fa-calendar-alt\" (click)=\"d.toggle()\" type=\"button\"></button>\n      </div>\n    </div>\n  </div>\n</form>\n<hr/>\n<pre>Model: {{ model | json }}</pre>\n"

/***/ }),

/***/ "./src/example/components/datepicker/datepicker-input/datepicker-input.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/example/components/datepicker/datepicker-input/datepicker-input.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DatepickerInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerInputComponent", function() { return DatepickerInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DatepickerInputComponent = /** @class */ (function () {
    function DatepickerInputComponent() {
    }
    DatepickerInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datepicker-input',
            template: __webpack_require__(/*! ./datepicker-input.component.html */ "./src/example/components/datepicker/datepicker-input/datepicker-input.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DatepickerInputComponent);
    return DatepickerInputComponent;
}());



/***/ }),

/***/ "./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\" [showWeekNumbers]=\"true\"></ngb-datepicker>\n<hr/>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"selectToday()\">Select Today</button>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo()\">To current month</button>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb 2013</button>\n<hr/>\n<pre>Month: {{ date.month }}.{{ date.year }}</pre>\n<pre>Model: {{ model | json }}</pre>\n"

/***/ }),

/***/ "./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DatepickerSimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerSimpleComponent", function() { return DatepickerSimpleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var DatepickerSimpleComponent = /** @class */ (function () {
    function DatepickerSimpleComponent(calendar) {
        this.calendar = calendar;
    }
    DatepickerSimpleComponent.prototype.selectToday = function () {
        this.model = this.calendar.getToday();
    };
    DatepickerSimpleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datepicker-simple',
            template: __webpack_require__(/*! ./datepicker-simple.component.html */ "./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"]])
    ], DatepickerSimpleComponent);
    return DatepickerSimpleComponent;
}());



/***/ }),

/***/ "./src/example/components/datepicker/datepicker.component.html":
/*!*********************************************************************!*\
  !*** ./src/example/components/datepicker/datepicker.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"datepicker\"><h2 class=\"my-3\">Datepicker</h2></a>\n<div class=\"card mx-n3 mx-md-0\">\n  <div class=\"card-body\" id=\"datepickerExample\">\n    <div class=\"alert alert-info\"><strong>Framework needed!</strong> Please note that you need to install <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/\" target=\"_blank\">ng-bootstrap</a> and their <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/#/components/datepicker\" target=\"_blank\">datepicker component</a> in order to use the datepickers in this example.</div>\n    <h4 class=\"card-title\">Simple datepicker with week number</h4>\n    <p class=\"mb-3\">For more info and examples please refer to ng-bootstrap <a href=\"https://ng-bootstrap.github.io/#/components/datepicker/overview\" target=\"_blank\">official documentation</a>.</p>\n    <app-datepicker-simple></app-datepicker-simple>\n    <exemplify [sources]=\"sources.simple\"></exemplify>\n  </div>\n  <div class=\"card-body\" id=\"datepickerInputExample\">\n    <h4 class=\"card-title\">Datepicker with input</h4>\n    <p class=\"mb-3\">For more info and examples please refer to ng-bootstrap <a href=\"https://ng-bootstrap.github.io/#/components/datepicker/overview\" target=\"_blank\">official documentation</a>.</p>\n    <app-datepicker-input></app-datepicker-input>\n    <exemplify [sources]=\"sources.input\"></exemplify>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/example/components/datepicker/datepicker.component.ts":
/*!*******************************************************************!*\
  !*** ./src/example/components/datepicker/datepicker.component.ts ***!
  \*******************************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent() {
        this.sources = {
            simple: [{
                    name: 'datepicker.component.html',
                    src: __webpack_require__(/*! raw-loader!./datepicker-simple/datepicker-simple.component.html */ "./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.html"),
                    lang: 'markup'
                }, {
                    name: 'datepicker.component.ts',
                    src: __webpack_require__(/*! raw-loader!./datepicker-simple/datepicker-simple.component.ts */ "./node_modules/raw-loader/index.js!./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.ts"),
                    lang: 'typescript'
                }],
            input: [{
                    name: 'datepicker.component.html',
                    src: __webpack_require__(/*! raw-loader!./datepicker-input/datepicker-input.component.html */ "./src/example/components/datepicker/datepicker-input/datepicker-input.component.html"),
                    lang: 'markup'
                }, {
                    name: 'datepicker.component.ts',
                    src: __webpack_require__(/*! raw-loader!./datepicker-input/datepicker-input.component.ts */ "./node_modules/raw-loader/index.js!./src/example/components/datepicker/datepicker-input/datepicker-input.component.ts"),
                    lang: 'typescript'
                }]
        };
    }
    DatepickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datepicker',
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/example/components/datepicker/datepicker.component.html")
        })
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/example/components/dropdowns/dropdowns.component.html":
/*!*******************************************************************!*\
  !*** ./src/example/components/dropdowns/dropdowns.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"tabs\"><h2 class=\"my-3\">Selects and dropdowns</h2></a>\n<p class=\"lead\">The native html select element looks and behaves a bit differently depending on the browser and the device a user is on but it will always work and iOS and Android devices will use their own native components in it's place.</p>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"selectExample\">\n  <h4 class=\"card-header\">\n    Native html select\n  </h4>\n  <div class=\"card-body\">\n    <form>\n      <div class=\"row\">\n        <div class=\"col-12 col-sm-auto\">\n          <label for=\"native_select\">Example select</label>\n          <select class=\"custom-select\" id=\"native_select\">\n            <option>First</option>\n            <option>Second</option>\n            <option>Third</option>\n            <option>Forth</option>\n          </select>\n        </div>\n      </div>\n    </form>\n    <exemplify [selector]=\"'#selectExample .col-12 > *'\"></exemplify>\n  </div>\n</div>\n<div class=\"alert alert-info mt-5\">\n  <strong>Framework needed!</strong> Please note that the examples below uses a framework for Angular called <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/\" target=\"_blank\">ng-bootstrap</a> and their <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/#/components/dropdown/\" target=\"_blank\">dropdown component</a>, so in order to use the components below you need to add ng-bootstrap to your project.\n</div>\n<div class=\"alert alert-warning mx-n3 mx-md-0\">\n  <strong>Mobile development!</strong> To make the experience extra crisp on mobile devices and more specifically to avoid the issue with scrolling content behind the dropdown on mobile devices, you should consider adding <a class=\"alert-link\" href=\"https://github.com/willmcpo/body-scroll-lock\" target=\"_blank\">body scroll lock</a> to your project when implementing dropdowns. An example implementation for angular can also be found on <a class=\"alert-link\" href=\"https://stackblitz.com/edit/seb-dropdown-body-scroll-lock\" target=\"_blank\">stack blitz</a>.\n  <br><br><strong>Dropdown cut off?</strong> If the dropdown is placed inside a container with overflow set to auto or hidden you should consider adding container=\"body\" to add the dropdown to the body element instead, this to avoid cutting off the dropdown menu.\n  <div class=\"custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckInline\" [checked]=\"useContainerBody\" (change)=\"toggleContainer(useContainerBody)\">\n    <label class=\"custom-control-label\" for=\"customCheckInline\">Use container='body'</label>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"dropdownExample\">\n  <h4 class=\"card-header\">\n    Angular dropdown select\n  </h4>\n  <div class=\"card-body\">\n    <form>\n      <div class=\"row\">\n        <div class=\"col-12 col-sm-auto\">\n          <label for=\"ngb_dropdown\">Example dropdown select</label>\n          <div ngbDropdown [container]=\"useContainerBody ? 'body' : 'null'\" (openChange)=\"toggleBodyLock($event, dropdownMenu)\">\n            <button class=\"btn btn-outline-primary w-100\" id=\"ngb_dropdown\" ngbDropdownToggle>{{selected ? selected:'select...'}}</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownExample\" class=\"w-100 mb-3\" #dropdownMenu>\n              <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"selected = option\" [ngClass]=\"{'active':selected === option}\">{{option}}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n    <code>\n      <p class=\"mt-3 mb-0\">Selected: {{selected | json}}</p>\n    </code>\n    <exemplify [selector]=\"'#dropdownExample .col-12 > *'\" [escapeStrings]=\"[' ngbDropdownToggle', ' ngbDropdownMenu',' ngbDropdown', '[ngClass]']\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"multiselectExample\">\n  <h4 class=\"card-header\">\n    Angular multi-select\n  </h4>\n  <div class=\"card-body\">\n    <form>\n      <div class=\"row\">\n        <div class=\"col-12 col-sm-auto\">\n          <label for=\"ngb_multiselect\">Example multi-select</label>\n          <div ngbDropdown #multiSelect=\"ngbDropdown\" [container]=\"useContainerBody ? 'body' : 'null'\">\n            <button ngClass=\"{{classes ? classes:'btn btn-secondary w-100'}}\" id=\"ngb_multiselect\" ngbDropdownToggle>{{selectedMulti.length === 0 ? 'select...': selectedMulti.length === 1 ? selectedMulti[0]: selectedMulti.length + ' selected'}}</button>\n            <div ngbDropdownMenu aria-labelledby=\"ngb_multiselect\" class=\"w-100 mb-3\">\n              <div class=\"dropdown-control\">\n                <div class=\"row mb-2 d-sm-none\">\n                  <div class=\"col text-right\">\n                    <span>Close</span><i class=\"fal fa-times ml-2\"></i>\n                  </div>\n                </div>\n                <div class=\"btn-group w-100\">\n                  <button class=\"btn btn-sm btn-secondary w-100\" (click)=\"$event.stopPropagation();deselectAll()\">None</button>\n                  <button class=\"btn btn-sm btn-secondary w-100\" (click)=\"$event.stopPropagation();selectAll()\">All</button>\n                </div>\n                <div class=\"dropdown-divider\"></div>\n              </div>\n              <div class=\"dropdown-multi-select-options\">\n                <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"$event.stopPropagation();select(option)\" [ngClass]=\"{'active':selectedMulti.indexOf(option) !== -1}\">{{option}}</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n    <code>\n      <p class=\"mt-3 mb-0\">Selected: {{selectedMulti | json}}</p>\n    </code>\n    <exemplify [selector]=\"'#multiselectExample .col-12 > *'\" [escapeStrings]=\"[' ngbDropdownToggle', ' ngbDropdownMenu',' ngbDropdown', '[ngClass]']\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"dropdownSizeExample\">\n  <h4 class=\"card-header\">\n    Angular dropdown select sizing\n  </h4>\n  <div class=\"card-body\">\n    <form>\n      <div class=\"row\">\n        <div class=\"col-12 col-sm-auto\">\n          <label for=\"dropdownSmall\">Small dropdown select</label>\n          <div ngbDropdown [container]=\"useContainerBody ? 'body' : 'null'\">\n            <button class=\"btn btn-secondary btn-sm w-100\" id=\"dropdownSmall\" ngbDropdownToggle>{{selected ? selected:'select...'}}</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownSmall\" class=\"w-100 mb-3\">\n              <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"selected = option\" [ngClass]=\"{'active':selected === option}\">{{option}}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 col-sm-auto\">\n          <label for=\"dropdownNormal\">Normal dropdown select</label>\n          <div ngbDropdown [container]=\"useContainerBody ? 'body' : 'null'\">\n            <button class=\"btn btn-secondary w-100\" id=\"dropdownNormal\" ngbDropdownToggle>{{selected ? selected:'select...'}}</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownNormal\" class=\"w-100 mb-3\">\n              <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"selected = option\" [ngClass]=\"{'active':selected === option}\">{{option}}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 col-sm-auto\">\n          <label for=\"dropdownLarge\">Large dropdown select</label>\n          <div ngbDropdown [container]=\"useContainerBody ? 'body' : 'null'\">\n            <button class=\"btn btn-secondary btn-lg w-100\" id=\"dropdownLarge\" ngbDropdownToggle>{{selected ? selected:'select...'}}</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownLarge\" class=\"w-100 mb-3\">\n              <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"selected = option\" [ngClass]=\"{'active':selected === option}\">{{option}}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n    <code>\n      <p class=\"mt-3 mb-0\">Selected: {{selected | json}}</p>\n    </code>\n    <exemplify [selector]=\"'#dropdownSizeExample .col-12 > *'\" [escapeStrings]=\"[' ngbDropdownToggle', ' ngbDropdownMenu',' ngbDropdown', '[ngClass]']\"></exemplify>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/example/components/dropdowns/dropdowns.component.ts":
/*!*****************************************************************!*\
  !*** ./src/example/components/dropdowns/dropdowns.component.ts ***!
  \*****************************************************************/
/*! exports provided: DropdownsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownsComponent", function() { return DropdownsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_mobile_detect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/mobile-detect.service */ "./src/example/services/mobile-detect.service.ts");




var DropdownsComponent = /** @class */ (function () {
    function DropdownsComponent(mobileDetectService) {
        this.mobileDetectService = mobileDetectService;
        this.options = ['First', 'Second', 'Third', 'Forth']; // available options, used by dropdown and multi-select example
        this.selectedMulti = []; // selected options for multi-select example
        this.useContainerBody = true;
    }
    /**
     * Select
     * @Param {string} option - option to be selected/deselected
     */
    DropdownsComponent.prototype.select = function (option) {
        // get index of option in selected options
        var index = this.selectedMulti.indexOf(option);
        // if option has index i.e. exists in array...
        if (index !== -1) {
            // ...remove it from the array
            this.selectedMulti.splice(index, 1);
        }
        else {
            // ...if not add it to the array
            this.selectedMulti.push(option);
        }
    };
    /**
     * Select all - selects all options
     */
    DropdownsComponent.prototype.selectAll = function () {
        this.selectedMulti = this.options.slice();
    };
    /**
     * Deselect all - deselects all options
     */
    DropdownsComponent.prototype.deselectAll = function () {
        this.selectedMulti = [];
    };
    DropdownsComponent.prototype.toggleBodyLock = function (show, templateRef) {
        if (this.mobileDetectService.isMobile()) {
            if (show) {
                Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__["disableBodyScroll"])(templateRef);
            }
            else {
                Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__["enableBodyScroll"])(templateRef);
            }
        }
    };
    DropdownsComponent.prototype.toggleContainer = function (value) {
        this.useContainerBody = !this.useContainerBody;
    };
    DropdownsComponent.prototype.ngOnInit = function () {
    };
    DropdownsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dropdowns',
            template: __webpack_require__(/*! ./dropdowns.component.html */ "./src/example/components/dropdowns/dropdowns.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_mobile_detect_service__WEBPACK_IMPORTED_MODULE_3__["MobileDetectService"]])
    ], DropdownsComponent);
    return DropdownsComponent;
}());



/***/ }),

/***/ "./src/example/components/forms/forms.component.html":
/*!***********************************************************!*\
  !*** ./src/example/components/forms/forms.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"forms\"><h2 class=\"my-3\">Forms</h2></a>\n<p class=\"lead\">Below you'll find some examples of forms and different form elements, check <a href=\"https://getbootstrap.com/docs/4.0/components/forms/#overview\" target=\"_blank\">bootstrap docs</a> for more info and examples.</p>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"formExample\">\n  <div class=\"card-body\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlSelect1\">Example select</label>\n        <select class=\"custom-select\" id=\"exampleFormControlSelect1\">\n          <option>1</option>\n          <option>2</option>\n          <option>3</option>\n          <option>4</option>\n          <option>5</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlSelect2\">Example multiple select</label>\n        <select multiple class=\"custom-select\" id=\"exampleFormControlSelect2\">\n          <option>1</option>\n          <option>2</option>\n          <option>3</option>\n          <option>4</option>\n          <option>5</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlTextarea1\">Example textarea</label>\n        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleTextarea\">Example textarea</label>\n        <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"customFile\">File input</label>\n        <div class=\"custom-file\">\n          <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"handleFileInput($event.target.files)\">\n          <label class=\"custom-file-label\" for=\"customFile\" aria-describedby=\"customFileHelp\">{{fileName}}</label>\n          <small id=\"customFileHelp\" class=\"form-text text-muted\">Please note that this example requires additional javascript for the file name to appear.</small>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputFile\">File input</label>\n        <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\">\n        <small id=\"fileHelp\" class=\"form-text text-muted\">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n    <exemplify [selector]=\"'#formExample form'\"></exemplify>\n  </div>\n</div>\n<h2>Form layouts</h2>\n<p class=\"lead\">Since Bootstrap applies <code>display: block</code> and <code>width: 100%</code> to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.\n</p>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"formExampleGroups\">\n  <h4 class=\"card-header\">Form groups</h4>\n  <div class=\"card-body\">\n    <p>The <code>.form-group</code> class is the easiest way to add some structure to forms. Its only purpose is to provide <code>margin-bottom</code> around a label and control pairing. As a bonus, since it’s a class you can use it with <code>&lt;fieldset&gt;</code>s, <code>&lt;div&gt;</code>s, or nearly any other element.</p>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"formGroupExampleInput\">Example label</label>\n        <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Example input\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formGroupExampleInput2\">Another label</label>\n        <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"Another input\">\n      </div>\n    </form>\n    <exemplify [selector]=\"'#formExampleGroups form'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"formExampleGridSimple\">\n  <h4 class=\"card-header\">Form grid</h4>\n  <div class=\"card-body\">\n    <p>More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.</p>\n    <form>\n      <div class=\"row\">\n        <div class=\"col\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\n        </div>\n        <div class=\"col\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\n        </div>\n      </div>\n    </form>\n    <exemplify [selector]=\"'#formExampleGridSimple form'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"formExampleRowSimple\">\n  <h4 class=\"card-header\">Form row</h4>\n  <div class=\"card-body\">\n    <p>You may also swap <code>.row</code> for <code>.form-row</code>, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.</p>\n    <form>\n      <div class=\"form-row\">\n        <div class=\"col\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\n        </div>\n        <div class=\"col\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\n        </div>\n      </div>\n    </form>\n    <exemplify [selector]=\"'#formExampleRowSimple form'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"formExampleGridAdvanced\">\n  <h4 class=\"card-header\">Using the grid system</h4>\n  <div class=\"card-body\">\n    <p>More complex layouts can also be created with the grid system.</p>\n    <form>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputEmail4\">Email</label>\n          <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputPassword4\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputAddress\">Address</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputAddress2\">Address 2</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\">\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputCity\">City</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputCity\">\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label for=\"inputState\">State</label>\n          <select id=\"inputState\" class=\"custom-select\">\n            <option selected>Choose...</option>\n            <option>...</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"inputZip\">Zip</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputZip\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"custom-control custom-checkbox\">\n          <input class=\"custom-control-input\" type=\"checkbox\" id=\"gridCheck\">\n          <label class=\"custom-control-label\" for=\"gridCheck\">\n            Check me out\n          </label>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n    </form>\n    <exemplify [selector]=\"'#formExampleGridAdvanced form'\"></exemplify>\n  </div>\n</div>\n<h2 class=\"mb-3\">Custom forms</h2>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"formExampleCustomCheckbox\">\n  <h4 class=\"card-header\">Checkboxes</h4>\n  <div class=\"card-body\">\n    <p>For even more customization and cross browser consistency, use custom form elements to replace the browser defaults. They’re built on top of semantic and accessible markup, so they’re solid replacements for any default form control.</p>\n    <form>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n        <label class=\"custom-control-label\" for=\"customCheck1\">Check this custom checkbox</label>\n      </div>\n    </form>\n    <exemplify [selector]=\"'#formExampleCustomCheckbox .custom-control'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"formExampleCustomRadio\">\n  <h4 class=\"card-header\">Radios</h4>\n  <div class=\"card-body\">\n    <form>\n      <div class=\"custom-control custom-radio\">\n        <input type=\"radio\" id=\"customRadio1\" name=\"customRadio\" class=\"custom-control-input\">\n        <label class=\"custom-control-label\" for=\"customRadio1\">Toggle this custom radio</label>\n      </div>\n      <div class=\"custom-control custom-radio\">\n        <input type=\"radio\" id=\"customRadio2\" name=\"customRadio\" class=\"custom-control-input\">\n        <label class=\"custom-control-label\" for=\"customRadio2\">Or toggle this other custom radio</label>\n      </div>\n    </form>\n    <exemplify [selector]=\"'#formExampleCustomRadio .custom-control'\"></exemplify>\n  </div>\n</div>\n<h2 class=\"px-3 px-md-0 mb-3\">Control sizing</h2>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"formExampleSizing\">\n  <div class=\"card-body\">\n    <p>Set heights using classes like <code>.form-control-lg</code>, and set widths using grid column classes like <code>.col-lg-*</code>.</p>\n    <h4 class=\"mt-3\">Inputs</h4>\n    <input class=\"form-control form-control-lg mb-2\" type=\"text\" placeholder=\".form-control-lg\">\n      <input class=\"form-control mb-2\" type=\"text\" placeholder=\"Default input\">\n      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\".form-control-sm\">\n    <exemplify [selector]=\"'#formExampleSizing input'\"></exemplify>\n    <h4 class=\"mt-3\">Selects</h4>\n      <select class=\"custom-select custom-select-lg mb-2\">\n        <option>Large select</option>\n      </select>\n      <select class=\"custom-select mb-2\">\n        <option>Default select</option>\n      </select>\n      <select class=\"custom-select custom-select-sm\">\n        <option>Small select</option>\n      </select>\n      <exemplify [selector]=\"'#formExampleSizing select'\"></exemplify>\n  </div>\n</div>\n<h2 class=\"mb-3\">Validation</h2>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <p>The example below is just a static example of different validation errors. In short bootstrap uses native <code>:invalid</code> and <code>:valid</code> form states together with <code>.was-validated</code> (usually applied to form) to apply the styles and it's also possible to use <code>.is-invalid</code>, <code>.is-valid</code> and <code>.invalid-feedback</code> when validated on the sever. More examples will be added in the future and in most cases validation will be enhanced through a framework like Angular or React which also complicates things a bit,, but we'll try to add real examples soon.</p>\n    <form>\n      <div class=\"form-row\">\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"validationServer01\">First name</label>\n          <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer01\" placeholder=\"First name\" value=\"Mark\" required>\n          <div class=\"valid-feedback\">\n            Looks good!\n          </div>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"validationServer02\">Last name</label>\n          <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer02\" placeholder=\"Last name\" value=\"Otto\" required>\n          <div class=\"valid-feedback\">\n            Looks good!\n          </div>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"validationServerUsername\">Username</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend is-invalid\">\n              <span class=\"input-group-text\" id=\"inputGroupPrepend3\">@</span>\n            </div>\n            <input type=\"text\" class=\"form-control is-invalid input-border-right\" id=\"validationServerUsername\" placeholder=\"Username\" aria-describedby=\"inputGroupPrepend3\" required>\n            <div class=\"invalid-feedback\">\n              Please choose a username.\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col-md-6 mb-3\">\n          <label for=\"validationServer03\">City</label>\n          <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer03\" placeholder=\"City\" required>\n          <div class=\"invalid-feedback\">\n            Please provide a valid city.\n          </div>\n        </div>\n        <div class=\"col-md-3 mb-3\">\n          <label for=\"validationServer04\">State</label>\n          <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer04\" placeholder=\"State\" required>\n          <div class=\"invalid-feedback\">\n            Please provide a valid state.\n          </div>\n        </div>\n        <div class=\"col-md-3 mb-3\">\n          <label for=\"validationServer05\">Zip</label>\n          <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer05\" placeholder=\"Zip\" required>\n          <div class=\"invalid-feedback\">\n            Please provide a valid zip.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col-md-6 mb-3\">\n          <label for=\"validationServer06\">Other</label>\n          <textarea class=\"form-control is-invalid\" rows=\"3\" id=\"validationServer06\" placeholder=\"Text\" required></textarea>\n          <div class=\"invalid-feedback\">\n            Please add a comment.\n          </div>\n        </div>\n        <div class=\"col-md-3 mb-3\">\n          <label for=\"validationServer07\">Select</label>\n          <select class=\"custom-select is-invalid\" id=\"validationServer07\"><option>Invalid dropdown</option></select>\n          <div class=\"invalid-feedback\">\n            Please choose something.\n          </div>\n        </div>\n        <div class=\"col-md-3 mb-3\">\n          <label for=\"validationServer07\">Dropdown</label>\n          <div ngbDropdown class=\"is-invalid\">\n            <button class=\"btn btn-outline-primary w-100\" id=\"dropdownExample\" ngbDropdownToggle>{{selected ? selected:'select...'}}</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownExample\" class=\"w-100 mb-3\">\n              <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"selected = option\" [ngClass]=\"{'active':selected === option}\">{{option}}</button>\n            </div>\n          </div>\n          <div class=\"invalid-feedback\">\n            Please choose something.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-12 col-md-auto\">\n          <div class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input is-invalid\" id=\"invalidCheck3\">\n            <label class=\"custom-control-label\" for=\"invalidCheck3\">Agree to terms and conditions</label>\n            <div class=\"invalid-feedback\">\n              You must agree before submitting.\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-12 col-md-auto\">\n          <div class=\"custom-control custom-radio\">\n            <input type=\"radio\" class=\"custom-control-input is-invalid\" id=\"customControlValidation2\" name=\"radio-stacked\" required>\n            <label class=\"custom-control-label\" for=\"customControlValidation2\">Toggle this custom radio</label>\n          </div>\n          <div class=\"custom-control custom-radio mb-3\">\n            <input type=\"radio\" class=\"custom-control-input is-invalid\" id=\"customControlValidation3\" name=\"radio-stacked\" required>\n            <label class=\"custom-control-label\" for=\"customControlValidation3\">Or toggle this other custom radio</label>\n            <div class=\"invalid-feedback\">Please choose one.</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-auto\">\n          <div class=\"alert alert-outline-danger\">\n            <h5 class=\"alert-heading\">Make sure you've entered the correct information</h5>\n            Here's a perfect place to explain what's wrong!\n          </div>\n        </div>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\">Submit form</button>\n    </form>\n  </div>\n</div>\n<h2 class=\"mb-3\">Advanced validation with progress</h2>\n<div class=\"card mb-4 angular-validation mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <p>Basic validation rules like <code>required</code>, <code>minlength</code> and <code>pattern</code> etc. provided by HTML and browsers natively for inputs are awesome for validation but they're not that user friendly or intuitive. Using a framework like Angular we can enhance the native behavior and extend it with our on validation rules. In the following example we've made it a bit more clever just showing one error at a time and we've also added custom validation for personal identity number.</p>\n    <p>Validation progress can be shown by applying one of the following classes to the feedback element: <code>progress-0</code> for 0%, <code>progress-10</code> for 10%, <code>progress-20</code> for 20% and so on up till 100%. There's also another type of feedback besides <code>invalid-feedback</code> and <code>valid-feedback</code> called <code>progress-feedback</code> that will change color depending on the p value provided.</p>\n    <div class=\"alert alert-info\"><strong>Framework needed!</strong> Please note that the examples below uses angular but similar behavior can be achieved using other frameworks as well.</div>\n    <form #loginForm=\"ngForm\" novalidate autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-12 col-sm-4 col-md-auto col-lg-3\">\n          <label for=\"personalIdInput\">Personal Identity number</label>\n          <input type=\"tel\" [(ngModel)]=\"personalIdentityNumber\"\n                 [ngClass]=\"{'is-invalid':!personalIdentityNumberInput.valid && personalIdentityNumberInput.lostFocus, 'is-valid': personalIdentityNumberInput.valid}\"\n                 name=\"personalIdentityNumber\"\n                 autocomplete=\"new-password\"\n                 class=\"form-control\"\n                 id=\"personalIdInput\"\n                 aria-describedby=\"personalIdHelp\"\n                 #personalIdentityNumberInput=\"ngModel\"\n                 personalIdentityNumberCheck\n                 placeholder=\"YYYYMMDDXXXX\" required\n                 (keydown)=\"onKeyDownPreventNonDigits($event)\"\n                 (keyup)=\"onValueChange()\"\n                 (change)=\"onValueChange()\"\n                 (focusout)=\"personalIdentityNumberInput.lostFocus = true\">\n          <div *ngIf=\"!personalIdentityNumberInput.lostFocus && !personalIdentityNumberInput.valid\" class=\"{{'progress-feedback progress-success text-muted progress-' + Math.floor((personalIdentityNumber.length/1.2)) + (Math.floor((personalIdentityNumber.length/1.2)) === 0 ? '':'0')}}\" id=\"personalIdHelp\">Enter personal id, 10 digits</div>\n          <div class=\"{{personalIdentityNumberInput.valid ? 'valid-feedback ' : 'invalid-feedback ' + 'progress-' + Math.floor((personalIdentityNumber.length/1.2)) + (Math.floor((personalIdentityNumber.length/1.2)) === 0 ? '':'0')}}\">\n            {{personalIdentityNumberInput.valid ? 'Looks good!' : (personalIdentityNumberInput.errors | validationMessage)}}\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-12 col-sm-4 col-md-auto col-lg-3\">\n          <label for=\"passwordId\">Create password</label>\n          <input type=\"password\" [(ngModel)]=\"password\"\n                 [ngClass]=\"{'is-invalid':!passwordInput.valid && passwordInput.lostFocus}\"\n                 autocomplete=\"new-password\"\n                 name=\"password\"\n                 class=\"form-control\"\n                 id=\"passwordId\"\n                 aria-describedby=\"passwordHelp\"\n                 #passwordInput=\"ngModel\" required\n                 maxlength=\"10\"\n                 minlength=\"4\"\n                 (focusout)=\"passwordInput.lostFocus = true\">\n          <div class=\"{{(password.length <= 3 && passwordInput.lostFocus ? 'invalid':'progress') + '-feedback progress-' + (password.length === 0 ? '0': password.length <= 4 ? '10': (password.length <= 6 ? '30': (password.length <= 8 ? '60': (password.length < 10 ? '100': '100'))))}}\" id=\"passwordHelp\">{{password.length === 0 ? 'Enter desired password': (password.length <= 3 ? 'To short': (password.length <= 6 ? 'Weak password': (password.length <= 8 ? 'Okay password': (password.length <= 10 ? 'Strong password': ''))))}}</div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var swe_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swe-validation */ "./node_modules/swe-validation/index.js");
/* harmony import */ var swe_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swe_validation__WEBPACK_IMPORTED_MODULE_3__);


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
    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/example/components/forms/forms.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
    ValidationMessagePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
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
        var personalId = swe_validation__WEBPACK_IMPORTED_MODULE_3__["ssn"](personalIdentityNumber);
        return !personalId.isValid ? { 'incorrect': { personalIdentityNumber: personalIdentityNumber } } : null;
    };
}
var PersonalIdentityNumberDirective = /** @class */ (function () {
    function PersonalIdentityNumberDirective() {
        this.valFn = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator;
    }
    PersonalIdentityNumberDirective_1 = PersonalIdentityNumberDirective;
    PersonalIdentityNumberDirective.prototype.ngOnInit = function () {
        this.valFn = personalIdentityNumberValidator();
    };
    PersonalIdentityNumberDirective.prototype.validate = function (control) {
        return this.valFn(control);
    };
    var PersonalIdentityNumberDirective_1;
    PersonalIdentityNumberDirective = PersonalIdentityNumberDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[personalIdentityNumberCheck]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: PersonalIdentityNumberDirective_1, multi: true }]
        })
    ], PersonalIdentityNumberDirective);
    return PersonalIdentityNumberDirective;
}());



/***/ }),

/***/ "./src/example/components/icons/icons.component.html":
/*!***********************************************************!*\
  !*** ./src/example/components/icons/icons.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"my-3\">Icons</h2>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"alert alert-info\">\n      <strong>Framework needed!</strong> This library doesn't include any icons so you need to install Font Awesome 5, which is the icon framework we're using, separately. We're using the light version which requires a pro version, if you're on SEB:s network you can read more about our license <a class=\"alert-link\" href=\"https://github.sebank.se/seb-common/licenses/blob/master/font-awesome.md\" target=\"_blank\">here</a> otherwise contact <a class=\"alert-link\" href=\"mailto:robert.hjalmers@seb.se\">Robert Hjalmers</a> for more info.\n    </div>\n    <p>In order to try out Font Awesome 5 you need to install the icon framework . Once you've added the framework, you'll be able to use the icons with the following markup: <code>&lt;i class=&quot;fal fa-print&quot;&gt;&lt;/i&gt;</code> and change <code>print</code> to the name of the icon you'd like to use (see some of the available icons below).</p>\n    <h5>Icons</h5>\n    <div class=\"form-group row\">\n      <div class=\"col-12 col-md-auto\">\n        <label for=\"search_icon_input\">Search</label>\n        <input id=\"search_icon_input\" name=\"iconSearchString\" [(ngModel)]=\"iconSearchString\" (ngModelChange)=\"filterIcons($event)\" class=\"form-control\" type=\"text\" placeholder=\"Type to filter icons\">\n      </div>\n    </div>\n    <div class=\"row icon-list\">\n      <div class=\"col-6 col-md-4\" *ngFor=\"let icon of filteredIcons\">\n        <i class=\"{{'fal fa-' + icon}}\"></i> <span class=\"ml-2\">{{icon}}</span>\n      </div>\n    </div>\n    <h5 class=\"mt-4\">Sizing</h5>\n    <p>Icons are available in 4 different sizes, add <code>fa-xx</code>(replace with one of the classes below) to adjust icon size. Even though bigger sizes are available we should avoid using them and consider using pictograms instead.</p>\n    <div class=\"sizes\">\n      <div><i class=\"fal fa-heart fa-xs\"></i><span>fa-xs </span><small class=\"text-muted\">(extra small, 12 px)</small></div>\n      <div><i class=\"fal fa-heart\"></i><small class=\"text-muted\">(normal, 16 px)</small></div>\n      <div><i class=\"fal fa-heart fa-lg\"></i><span>fa-lg </span><small class=\"text-muted\">(large, 24 px)</small></div>\n      <div><i class=\"fal fa-heart fa-2x\"></i><span>fa-2x </span><small class=\"text-muted\">(2x, 32 px)</small></div>\n    </div>\n    <h5 class=\"mt-4\">Do's and don'ts</h5>\n    <label>Do</label>\n    <ul>\n      <li>Use icons when they add value</li>\n      <li>Use Font Awesome 5 for generic system icons up to 32 px (fa-2x)</li>\n    </ul>\n    <label>Don't</label>\n    <ul>\n      <li>Use Font Awesome for larger icons (bigger than 32 px), use pictograms (coming soon!)</li>\n      <li>Stack icons on top of each other</li>\n      <li>Add colors to icons other than <span class=\"text-success\">text-success</span>, <span class=\"text-warning\">text-warning</span> or <span class=\"text-danger\">text-danger</span> when applicable</li>\n    </ul>\n  </div>\n</div>\n<div style=\"text-align:center\">\n  <fa-icon [icon]=\"faArrowAltRight\"></fa-icon>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "./node_modules/@fortawesome/pro-light-svg-icons/index.es.js");



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
        this.faArrowAltRight = _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowAltRight"];
    }
    IconsComponent.prototype.filterIcons = function (search) {
        this.filteredIcons = this.icons.filter(function (icon) { return icon.indexOf(search) !== -1; });
    };
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-icons',
            template: __webpack_require__(/*! ./icons.component.html */ "./src/example/components/icons/icons.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<a name=\"inputGroup\"><h2 class=\"my-3\">Input group</h2></a>\n<div class=\"card mx-n3 mx-md-0\" #inputGroupExample>\n  <div class=\"card-body\">\n    <p>Place one add-on or button on either side of an input. You may also place one on both sides of an input. Use <code>.input-group-prepend</code> and/or <code>.input-group-append</code> inside an input group (<code>.input-group</code>), to group controls with an input field.</p>\n    <div>\n      <label for=\"prependBtn\">Prepend button</label>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <button class=\"btn btn-secondary\" type=\"button\">Button</button>\n        </div>\n        <input id=\"prependBtn\" type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\" aria-describedby=\"basic-addon1\">\n      </div>\n      <label for=\"appendBtn\">Append button</label>\n      <div class=\"input-group mb-3\">\n        <input id=\"appendBtn\" type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-secondary\" type=\"button\">Clear</button>\n          <button class=\"btn btn-primary\" type=\"button\">Ok</button>\n        </div>\n      </div>\n      <label for=\"appendStatic\">Append text/static content</label>\n      <div class=\"input-group mb-3\">\n        <input id=\"appendStatic\" type=\"text\" class=\"form-control\" aria-label=\"Card number\" placeholder=\"____ ____ ____ ____\" maxlength=\"16\">\n        <div class=\"input-group-append\">\n          <span class=\"input-group-text\">\n            <i class=\"fal fa-credit-card\"></i>\n          </span>\n        </div>\n      </div>\n      <label for=\"appendPrependStatic\">Append and prepend text/static content</label>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">\n            <i class=\"fal fa-dollar-sign\"></i>\n          </span>\n        </div>\n        <input id=\"appendPrependStatic\" type=\"number\" class=\"form-control text-right\" aria-label=\"Amount\">\n        <div class=\"input-group-append\">\n          <span class=\"input-group-text\">.00</span>\n        </div>\n      </div>\n      <label for=\"appendBtnIcon\">Append button icon</label>\n      <div class=\"input-group mb-3\">\n        <input id=\"appendBtnIcon\" type=\"text\" class=\"form-control\" aria-label=\"Date\" placeholder=\"yyyy-mm-dd\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-secondary\" type=\"button\">\n            <i class=\"fal fa-calendar-alt\"></i>\n          </button>\n        </div>\n      </div>\n        <div style=\"max-width: 140px;\">\n            <label for=\"appendPrependBtnIcon\">Stepper</label>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"step = step - 1\">\n                  <i class=\"fal fa-minus\"></i>\n                </button>\n              </div>\n            <input id=\"appendPrependBtnIcon\" type=\"tel\" class=\"form-control text-center\" [value]=\"step\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"step = step + 1\">\n                <i class=\"fal fa-plus\"></i>\n              </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <exemplify [selector]=\"'.card-body > div'\"></exemplify>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputGroupComponent = /** @class */ (function () {
    function InputGroupComponent() {
        this.step = 0;
    }
    InputGroupComponent.prototype.ngOnInit = function () {
    };
    InputGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-group',
            template: __webpack_require__(/*! ./input-group.component.html */ "./src/example/components/input-group/input-group.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<a name=\"listGroup\"><h2 class=\"my-3\">List group</h2></a>\n<div class=\"card mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">List (flush)</h4>\n    <p>To get a list group with flush or table style, just add the class <code>list-group-flush</code> to a normal list-group.</p>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item bg-light font-weight-medium\">Lorem ipsum</li>\n      <li class=\"list-group-item\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales, nulla sed lobortis maximus, nisl massa vestibulum lectus, in tincidunt tellus elit vel neque. Vivamus ullamcorper auctor dignissim. Maecenas placerat, odio nec vestibulum pulvinar, tortor tellus cursus quam, sit amet vulputate est diam in justo.</p></li>\n      <li class=\"list-group-item\">Dolar sit amet</li>\n    </ul>\n    <exemplify [selector]=\"'ul.list-group-flush'\"></exemplify>\n  </div>\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Bullet list</h4>\n    <p>To get a list group with bullets, just add the class <code>list-group-bullet</code> to a normal list-group.</p>\n    <ul class=\"list-group list-group-bullet\">\n      <li class=\"list-group-item\">Lorem ipsum</li>\n      <li class=\"list-group-item\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales, nulla sed lobortis maximus, nisl massa vestibulum lectus, in tincidunt tellus elit vel neque. Vivamus ullamcorper auctor dignissim. Maecenas placerat, odio nec vestibulum pulvinar, tortor tellus cursus quam, sit amet vulputate est diam in justo.</p></li>\n      <li class=\"list-group-item\">Dolar sit amet</li>\n      <li class=\"list-group-item\"><strong class=\"mb-1 d-block\">Lorem ipsum</strong><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales, nulla sed lobortis maximus, nisl massa vestibulum lectus.</p></li>\n      <li class=\"list-group-item\"><strong class=\"mb-1 d-block\">Dolar sit amet</strong><p class=\"text-muted small\">Vivamus ullamcorper auctor dignissim. Maecenas placerat, odio nec vestibulum pulvinar, tortor tellus cursus quam, sit amet vulputate est diam in justo.</p></li>\n    </ul>\n    <exemplify [selector]=\"'ul.list-group-bullet'\"></exemplify>\n  </div>\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Check list</h4>\n    <p>To get a list group with check icons, just add the class <code>list-group-check</code> to a normal list-group.</p>\n    <ul class=\"list-group list-group-check\">\n      <li class=\"list-group-item\">Lorem ipsum</li>\n      <li class=\"list-group-item\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales, nulla sed lobortis maximus, nisl massa vestibulum lectus, in tincidunt tellus elit vel neque. Vivamus ullamcorper auctor dignissim. Maecenas placerat, odio nec vestibulum pulvinar, tortor tellus cursus quam, sit amet vulputate est diam in justo.</p></li>\n      <li class=\"list-group-item\">Dolar sit amet</li>\n      <li class=\"list-group-item\"><strong class=\"mb-1 d-block\">Lorem ipsum</strong><p class=\"text-muted small\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales, nulla sed lobortis maximus, nisl massa vestibulum lectus.</p></li>\n      <li class=\"list-group-item\"><strong class=\"mb-1 d-block\">Dolar sit amet</strong><p class=\"text-muted small\">Vivamus ullamcorper auctor dignissim. Maecenas placerat, odio nec vestibulum pulvinar, tortor tellus cursus quam, sit amet vulputate est diam in justo.</p></li>\n    </ul>\n    <exemplify [selector]=\"'ul.list-group-check'\"></exemplify>\n  </div>\n  <div class=\"card-body\" id=\"itemList\">\n    <h4 class=\"card-title\">Ordered list</h4>\n    <p>To get a ordered list, just add the class <code>list-group-ordered</code> to a normal list-group.</p>\n    <ol class=\"list-group list-group-ordered\">\n      <li class=\"list-group-item\">Lorem ipsum</li>\n      <li class=\"list-group-item\">Dolar sit amet <a href=\"#\">do something</a></li>\n      <li class=\"list-group-item active\"><strong class=\"mb-1 d-block\">This item is active</strong><p class=\"text-muted small\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales, nulla sed lobortis maximus, nisl massa vestibulum lectus, in tincidunt tellus elit vel neque. Vivamus ullamcorper auctor dignissim. Maecenas placerat, odio nec vestibulum pulvinar, tortor tellus cursus quam, sit amet vulputate est diam in justo.</p></li>\n      <li class=\"list-group-item disabled\">Disabled list item </li>\n    </ol>\n    <exemplify [selector]=\"'#itemList ol.list-group-ordered'\"></exemplify>\n  </div>\n  <div class=\"card-body\" id=\"actionList\">\n    <h4 class=\"card-title\">Ordered action list</h4>\n    <p>To get a ordered action list group, just add the class <code>list-group-ordered</code> to a normal list-group and replace <code>list-group-item</code> with <code>list-group-item-action</code>.</p>\n    <ol class=\"list-group list-group-ordered\">\n      <li class=\"list-group-item-action\">Lorem ipsum</li>\n      <li class=\"list-group-item-action\">Dolar sit amet <a href=\"#\">do something</a></li>\n      <li class=\"list-group-item-action active\"><strong class=\"mb-1 d-block\">This item is active</strong><p class=\"text-muted small\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales, nulla sed lobortis maximus, nisl massa vestibulum lectus, in tincidunt tellus elit vel neque. Vivamus ullamcorper auctor dignissim. Maecenas placerat, odio nec vestibulum pulvinar, tortor tellus cursus quam, sit amet vulputate est diam in justo.</p></li>\n      <li class=\"list-group-item-action disabled\">Disabled list item action</li>\n    </ol>\n    <exemplify [selector]=\"'#actionList ol.list-group-ordered'\"></exemplify>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListGroupComponent = /** @class */ (function () {
    function ListGroupComponent() {
    }
    ListGroupComponent.prototype.ngOnInit = function () {
    };
    ListGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-group',
            template: __webpack_require__(/*! ./list-group.component.html */ "./src/example/components/list-group/list-group.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListGroupComponent);
    return ListGroupComponent;
}());



/***/ }),

/***/ "./src/example/components/modals/modals.component.html":
/*!*************************************************************!*\
  !*** ./src/example/components/modals/modals.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"modals\"><h2 class=\"my-3\">Modals</h2></a>\n<div class=\"alert alert-info mx-n3 mx-md-0\"><strong>Framework needed!</strong> Please note that the examples below is just a representation of how modals look and the needed markup. In order to use modals you need a framework to control when and how to show them. If you're using angular, please take a look at <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/\" target=\"_blank\">ng-bootstrap</a> and their <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/#/components/modal\" target=\"_blank\">modal component</a>.</div>\n<div class=\"alert alert-warning mx-n3 mx-md-0\"><strong>Mobile development!</strong> To make the experience extra crisp on mobile devices and more specifically to avoid the issue with <a class=\"alert-link\" href=\"https://www.google.com/search?q=content+scrolling+behind+modal\" target=\"_blank\">scrolling content behind the modal</a>, you should consider adding <a class=\"alert-link\" href=\"https://github.com/willmcpo/body-scroll-lock\" target=\"_blank\">body scroll lock</a> to your project when implementing modals. An example implementation for angular can also be found on <a class=\"alert-link\" href=\"https://stackblitz.com/edit/seb-modal-body-scroll-lock\" target=\"_blank\">stack blitz</a>.</div>\n<div class=\"card mx-n3 mx-md-0\" id=\"modalExample\">\n  <h4 class=\"card-header\">Standard modal</h4>\n  <div class=\"card-body bg-secondary px-0\">\n    <div class=\"modal\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Modal title</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>Modal body text goes here.</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body pt-0\">\n    <exemplify [selector]=\"'#modalExample .modal'\"></exemplify>\n  </div>\n</div>\n<div class=\"card my-3 mx-n3 mx-md-0\">\n  <h4 class=\"card-header\">Modal with backdrop</h4>\n  <div class=\"card-body\"><p>Below is a example of a standard modal opened with a backdrop.</p>\n    <div class=\"row\">\n      <div class=\"col-12 col-sm col-md-auto\"><button class=\"btn btn-primary w-100\" (click)=\"open(content)\">Open modal</button></div>\n      <div class=\"col-12 col-sm col-md-auto mt-3 mt-sm-0\"><button class=\"btn btn-primary w-100\" (click)=\"open(content, {size:'lg'})\">Open large modal</button></div>\n    </div>\n  </div>\n</div>\n<div class=\"card my-3 mx-n3 mx-md-0\">\n  <h4 class=\"card-header\">Aside modal</h4>\n  <div class=\"card-body\">\n    <p>Add <code>modal-aside</code> class to the modal element together with either <code>modal-aside-right</code> or <code>modal-aside-left</code> to get a modal that will slide in from the side.<br>Ex. <code>&lt;div  class=&quot;modal modal-aside modal-aside-right&quot;&gt;...&lt;/div&gt;</code></p>\n    <div class=\"row\">\n      <div class=\"col-12 col-sm col-md-auto\"><button class=\"btn btn-primary w-100\" (click)=\"open(content, {windowClass:'modal-aside modal-aside-right'})\">Open aside modal</button></div>\n      <div class=\"col-12 col-sm col-md-auto mt-3 mt-sm-0\"><button class=\"btn btn-primary w-100\" (click)=\"open(content, {windowClass:'modal-aside modal-aside-left'})\">Open left aside modal</button></div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <h5>Large aside modal</h5>\n    <p>Add <code>modal-lg</code> class to the modal dialogue together with the above classes to get a larger modal that will slide in from the side.</p>\n    <div class=\"row\">\n      <div class=\"col-12 col-sm col-md-auto\"><button class=\"btn btn-primary w-100\" (click)=\"open(largeContent, {windowClass:'modal-aside modal-aside-right', size:'lg'})\">Open aside modal</button></div>\n      <div class=\"col-12 col-sm col-md-auto mt-3 mt-sm-0\"><button class=\"btn btn-primary w-100\" (click)=\"open(largeContent, {windowClass:'modal-aside modal-aside-left', size:'lg'})\">Open left aside modal</button></div>\n    </div>\n  </div>\n</div>\n<div class=\"card my-3 mx-n3 mx-md-0\">\n  <h4 class=\"card-header\">Fullscreen modal aka take-over</h4>\n  <div class=\"card-body\">\n    <p>Add <code>modal-fullscreen</code> class to the modal element to get a fullscreen modal.<br>Ex. <code>&lt;div  class=&quot;modal modal-fullscreen&quot;&gt;...&lt;/div&gt;</code></p>\n    <button class=\"btn btn-primary\" (click)=\"open(content, {windowClass:'modal-fullscreen'})\">Open fullscreen modal</button>\n  </div>\n</div>\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n  </div>\n  <div class=\"modal-body\">\n    <p>Modal body text goes here.</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modal.dismiss('Cross click')\">Close</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('Save click')\">Save changes</button>\n  </div>\n</ng-template>\n<ng-template #largeContent let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n  </div>\n  <div class=\"modal-body\">\n    <p>Modal body text goes here.</p>\n    <div class=\"bg-primary-element text-white align-self-center p-3\" style=\"width: 600px; height: 600px;\">\n      <p class=\"lead font-weight-normal\">The large aside modal will adjust it's width to the width of the content.<br/>\n      Max width = 768px<br/>\n      Min width = 320px\n      </p>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modal.dismiss('Cross click')\">Close</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('Save click')\">Save changes</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/example/components/modals/modals.component.ts":
/*!***********************************************************!*\
  !*** ./src/example/components/modals/modals.component.ts ***!
  \***********************************************************/
/*! exports provided: ModalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsComponent", function() { return ModalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var ModalsComponent = /** @class */ (function () {
    function ModalsComponent(document, modalService) {
        this.document = document;
        this.modalService = modalService;
        this.modal = false;
        this.slideModal = false;
        this.takeOverModal = false;
    }
    ModalsComponent.prototype.open = function (content, options) {
        var _this = this;
        var modalRef = this.modalService.open(content, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, options, { ariaLabelledBy: 'modal-basic-title' }));
        // workaround for iOS scroll that allows scroll in modal body
        var contentBody = document.getElementsByTagName('ngb-modal-window')[0];
        modalRef.result.then(function (result) {
            Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__["clearAllBodyScrollLocks"])();
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__["clearAllBodyScrollLocks"])();
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
        Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__["disableBodyScroll"])(contentBody);
    };
    ModalsComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ModalsComponent.prototype.ngOnInit = function () {
    };
    ModalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modals',
            template: __webpack_require__(/*! ./modals.component.html */ "./src/example/components/modals/modals.component.html"),
            styles: ["\n        #modalExample .modal {\n            opacity: 1;\n            display: block;\n            position: initial;\n        }\n        .modal.active {\n            display: block;\n        }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ModalsComponent);
    return ModalsComponent;
}());



/***/ }),

/***/ "./src/example/components/navbar/navbar.component.html":
/*!*************************************************************!*\
  !*** ./src/example/components/navbar/navbar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"navbar\"><h2 class=\"my-3\">Navbar</h2></a>\n<p class=\"lead px-3 px-md-0 mb-4\">Most applications won't need the navbar as the navbar will be provided by the application shell, however there might be cases where you need a standalone navbar/header for your app. For more examples please visit <a href=\"http://getbootstrap.com/docs/4.1/components/navbar/\" target=\"_blank\">official bootstrap docs</a>.</p>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"navbarThemeExample\">\n  <h4 class=\"card-header\">Color themes</h4>\n  <div class=\"card-body\">\n    <nav class=\"navbar navbar-dark bg-dark\">\n      <span class=\"navbar-brand\" href=\"#\">\n        Bootstrap\n      </span>\n      <span class=\"navbar-text\">\n          Navbar text with an inline element\n        </span>\n    </nav>\n    <exemplify [selector]=\"'#navbarThemeExample .navbar.navbar-dark.bg-dark'\"></exemplify>\n  </div>\n  <div class=\"card-body\">\n    <nav class=\"navbar navbar-light bg-white\">\n      <span class=\"navbar-brand\" href=\"#\">\n        Bootstrap\n      </span>\n      <span class=\"navbar-text\">\n          Navbar text with an inline element\n        </span>\n    </nav>\n    <exemplify [selector]=\"'#navbarThemeExample .navbar.navbar-light.bg-white'\"></exemplify>\n  </div>\n  <div class=\"card-body\">\n    <nav class=\"navbar navbar-light bg-light\">\n      <span class=\"navbar-brand\" href=\"#\">\n        Bootstrap\n      </span>\n      <span class=\"navbar-text\">\n          Navbar text with an inline element\n        </span>\n    </nav>\n    <exemplify [selector]=\"'#navbarThemeExample .navbar.navbar-light.bg-light'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"navbarFormsExample\">\n  <h4 class=\"card-header\">Forms</h4>\n  <div class=\"card-body\">\n    <nav class=\"navbar navbar-dark bg-dark\">\n      <span class=\"navbar-brand\" href=\"#\">\n        Bootstrap\n      </span>\n      <form class=\"form-row\">\n        <div class=\"col\">\n          <input class=\"form-control form-control-sm\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        </div>\n        <div class=\"col-auto\">\n          <button class=\"btn btn-sm btn-light\" type=\"submit\">Search</button>\n        </div>\n      </form>\n    </nav>\n    <exemplify [selector]=\"'#navbarFormsExample .navbar.navbar-dark.bg-dark'\"></exemplify>\n  </div>\n</div>"

/***/ }),

/***/ "./src/example/components/navbar/navbar.component.ts":
/*!***********************************************************!*\
  !*** ./src/example/components/navbar/navbar.component.ts ***!
  \***********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/example/components/navbar/navbar.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/example/components/pagination/pagination.component.html":
/*!*********************************************************************!*\
  !*** ./src/example/components/pagination/pagination.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"pagination\"><h2 class=\"my-3\">Pagination</h2></a>\n<div class=\"alert alert-info mx-n3 mx-md-0\"><strong>Framework needed!</strong> Please note that the example below is just a representation of how the pagination looks and the needed markup for it. In order to use pagination you need a framework to control when and how to show different pages. If you're using angular, please take a look at <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/\" target=\"_blank\">ng-bootstrap</a> and their <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/#/components/pagination\" target=\"_blank\">pagination component</a>.</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" #paginationExample>\n  <div class=\"card-body\">\n    <nav aria-label=\"...\">\n      <ul class=\"pagination\">\n        <li class=\"page-item disabled\">\n          <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-label=\"Previous\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n        </li>\n        <li class=\"page-item active\">\n          <a class=\"page-link\" href=\"#\">1 <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">5</a></li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <exemplify [selector]=\"'nav'\"></exemplify>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/example/components/pagination/pagination.component.ts":
/*!*******************************************************************!*\
  !*** ./src/example/components/pagination/pagination.component.ts ***!
  \*******************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/example/components/pagination/pagination.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/example/components/radio-buttons/radio-buttons.component.html":
/*!***************************************************************************!*\
  !*** ./src/example/components/radio-buttons/radio-buttons.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"radiobuttons\"><h2 class=\"my-3\">Radio buttons</h2></a>\n<p class=\"lead\">Below you'll find some examples of radio buttons and layout options using the grid (rows and columns), check the <a routerLink=\"/forms\">forms</a> section for more form elements or head over to <a href=\"https://getbootstrap.com/docs/4.0/components/forms/#overview\" target=\"_blank\">bootstrap docs</a> for more info and examples.</p>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"checkboxExample\">\n  <h4 class=\"card-header\">Standard radio button</h4>\n  <div class=\"card-body\">\n    <p>We use a standard input element with <code>type=\"radio\"</code> for radio buttons but we need to wrap it in a div to get the right style for the different states.</p>\n    <div class=\"custom-control custom-radio\">\n      <input type=\"radio\" class=\"custom-control-input\" name=\"radio\" id=\"customRadio1\">\n      <label class=\"custom-control-label\" for=\"customRadio1\">Select this custom radio button</label>\n    </div>\n    <div class=\"custom-control custom-radio\">\n      <input type=\"radio\" class=\"custom-control-input\" name=\"radio\" id=\"customRadio2\">\n      <label class=\"custom-control-label\" for=\"customRadio2\">Another option</label>\n    </div>\n    <div class=\"custom-control custom-radio\">\n      <input type=\"radio\" class=\"custom-control-input\" name=\"radio\" id=\"customRadioDisabled\" disabled>\n      <label class=\"custom-control-label\" for=\"customRadioDisabled\">This option is disabled</label>\n    </div>\n    <exemplify [selector]=\"'#checkboxExample .custom-control'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"checkboxLayoutExample\">\n  <h4 class=\"card-header\">Horizontal layout</h4>\n  <div class=\"card-body\">\n    <p>Use rows and columns to create a responsive layout, in the example below radio buttons will be placed inline on medium sized screens and up. On smaller screens the radio buttons will stack on top of each other, test by resizing the window. Use one of the following utility classes <code>.my-*</code>, <code>.mb-*</code> or <code>.mt-*</code> to add spacing between the different options, ie. <code>mb-2 mb-md-0</code> to get a small bottom margin on small screens and below.</p>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-auto mb-2 mb-md-0\">\n        <div class=\"custom-control custom-radio\">\n          <input type=\"radio\" name=\"radioGrid\" class=\"custom-control-input\" id=\"customRadioInline\">\n          <label class=\"custom-control-label\" for=\"customRadioInline\">Select this custom radio button</label>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-auto mb-2 mb-md-0\">\n        <div class=\"custom-control custom-radio\">\n          <input type=\"radio\" name=\"radioGrid\" class=\"custom-control-input\" id=\"customRadioInline1\">\n          <label class=\"custom-control-label\" for=\"customRadioInline1\">And this one</label>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-auto\">\n        <div class=\"custom-control custom-radio\">\n          <input type=\"radio\" name=\"radioGrid\" class=\"custom-control-input\" id=\"customRadioInline2\">\n          <label class=\"custom-control-label\" for=\"customRadioInline2\">Don't forget me</label>\n        </div>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#checkboxLayoutExample .row'\"></exemplify>\n  </div>\n</div>"

/***/ }),

/***/ "./src/example/components/radio-buttons/radio-buttons.component.ts":
/*!*************************************************************************!*\
  !*** ./src/example/components/radio-buttons/radio-buttons.component.ts ***!
  \*************************************************************************/
/*! exports provided: RadioButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonsComponent", function() { return RadioButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RadioButtonsComponent = /** @class */ (function () {
    function RadioButtonsComponent() {
    }
    RadioButtonsComponent.prototype.ngOnInit = function () {
    };
    RadioButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radio-buttons',
            template: __webpack_require__(/*! ./radio-buttons.component.html */ "./src/example/components/radio-buttons/radio-buttons.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RadioButtonsComponent);
    return RadioButtonsComponent;
}());



/***/ }),

/***/ "./src/example/components/skeleton-loader/skeleton-loader.component.html":
/*!*******************************************************************************!*\
  !*** ./src/example/components/skeleton-loader/skeleton-loader.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"my-3\">Skeleton loader</h2>\n<div class=\"card mx-n3 mx-md-0\">\n  <div class=\"card-body\" id=\"skeletonLoader\">\n    <div class=\"skeleton-loader\"></div>\n    <exemplify [selector]=\"'#skeletonLoader .skeleton-loader'\"></exemplify>\n  </div>\n  <div class=\"card-body\" id=\"skeletonLoaderTable\">\n    <div class=\"skeleton-loader skeleton-loader-table\"></div>\n    <exemplify [selector]=\"'#skeletonLoaderTable .skeleton-loader-table'\"></exemplify>\n  </div>\n</div>\n<div class=\"row mt-3 mt-xl-4\">\n    <div class=\"col-12 col-sm\">\n        <div class=\"card mx-n3 mx-md-0\">\n            <div class=\"card-body\">\n                <div class=\"skeleton-loader\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm mt-3 mt-sm-0\">\n        <div class=\"card mx-n3 mx-md-0\">\n            <div class=\"card-body\">\n                <div class=\"skeleton-loader\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row mt-3 mt-xl-4\">\n    <div class=\"col-12 col-sm\">\n        <div class=\"card mx-n3 mx-md-0\">\n            <div class=\"card-body\">\n                <div class=\"skeleton-loader\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm mt-3 mt-sm-0\">\n        <div class=\"card mx-n3 mx-md-0\">\n            <div class=\"card-body\">\n                <div class=\"skeleton-loader\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm mt-3 mt-sm-0\">\n        <div class=\"card mx-n3 mx-md-0\">\n            <div class=\"card-body\">\n                <div class=\"skeleton-loader\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/example/components/skeleton-loader/skeleton-loader.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/example/components/skeleton-loader/skeleton-loader.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SkeletonLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonLoaderComponent", function() { return SkeletonLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkeletonLoaderComponent = /** @class */ (function () {
    function SkeletonLoaderComponent() {
    }
    SkeletonLoaderComponent.prototype.ngOnInit = function () {
    };
    SkeletonLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skeleton-loader',
            template: __webpack_require__(/*! ./skeleton-loader.component.html */ "./src/example/components/skeleton-loader/skeleton-loader.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkeletonLoaderComponent);
    return SkeletonLoaderComponent;
}());



/***/ }),

/***/ "./src/example/components/spinners/spinners.component.html":
/*!*****************************************************************!*\
  !*** ./src/example/components/spinners/spinners.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"my-3\">Spinners</h2>\n<div class=\"card mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <p>Some experimental spinners</p>\n    <div class=\"row\" id=\"loaders\">\n      <div class=\"col-auto\">\n        <div class=\"spinner spinner-sm\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner spinner-md\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner spinner-lg\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner-sq spinner-sm\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner-sq\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner-sq spinner-md\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner-sq spinner-lg\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#loaders .col-auto > *'\"></exemplify>\n    <div class=\"row mt-5\" id=\"loadersButton\">\n      <div class=\"col-auto\">\n        <button class=\"btn btn-primary disabled\"><span class=\"mr-2\">Waiting</span>\n          <div class=\"spinner\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </button>\n      </div>\n      <div class=\"col-auto\">\n        <button class=\"btn btn-primary disabled\"><span class=\"mr-2\">Waiting</span>\n          <div class=\"spinner-sq\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </button>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#loadersButton .btn'\"></exemplify>\n  </div>\n</div>\n<h3 class=\"my-3\">Spinners on light grey background</h3>\n<div class=\"card mx-n3 mx-md-0\">\n  <div class=\"card-body bg-light\">\n    <p>Add class <code>light</code> to spinner element when placed against light background.</p>\n    <div class=\"row\" id=\"loadersLight\">\n      <div class=\"col-auto\">\n        <div class=\"spinner spinner-sm light\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner spinner-lg light\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner-sq spinner-sm\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner-sq spinner-lg\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#loadersLight .col-auto > *'\"></exemplify>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/example/components/spinners/spinners.component.ts":
/*!***************************************************************!*\
  !*** ./src/example/components/spinners/spinners.component.ts ***!
  \***************************************************************/
/*! exports provided: SpinnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnersComponent", function() { return SpinnersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnersComponent = /** @class */ (function () {
    function SpinnersComponent() {
    }
    SpinnersComponent.prototype.ngOnInit = function () {
    };
    SpinnersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinners',
            template: __webpack_require__(/*! ./spinners.component.html */ "./src/example/components/spinners/spinners.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnersComponent);
    return SpinnersComponent;
}());



/***/ }),

/***/ "./src/example/components/tables/tables.component.html":
/*!*************************************************************!*\
  !*** ./src/example/components/tables/tables.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"tables\"><h2 class=\"my-3\">Tables</h2></a>\n<div class=\"alert alert-info mx-n3 mx-md-0\"><strong>Want more table features?</strong> The examples below shows the markup and classes needed when using standard html tables, if you're using angular and want support for sorting, filtering, search, export to CSV etc. please check out <a class=\"alert-link\" href=\"https://hjalmers.github.io/angular-generic-table/\" target=\"_blank\">Angular Generic Table</a>.</div>\n<div class=\"row\">\n  <div class=\"col-md-6 mb-4\">\n    <h4>\n      Standard table\n    </h4>\n    <div class=\"card mx-n3 mx-md-0\" id=\"tableExample\">\n      <div class=\"card-body\">\n        <table class=\"table\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n        <exemplify [sources]=\"[{name:'markup', src: '<table class=&quot;table&quot;>...</table>', lang:'markup'}]\"></exemplify>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 mb-4\">\n    <h4>\n      Striped rows\n    </h4>\n    <div class=\"card mx-n3 mx-md-0\" id=\"tableExampleStriped\">\n      <div class=\"card-body\">\n        <table class=\"table table-striped\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n        <exemplify [sources]=\"[{name:'markup', src: '<table class=&quot;table table-striped&quot;>...</table>', lang:'markup'}]\"></exemplify>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 mb-4\">\n    <h4>Bordered table</h4>\n    <div class=\"card mx-n3 mx-md-0\" id=\"tableExampleBordered\">\n      <div class=\"card-body\">\n        <table class=\"table table-bordered\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@TwBootstrap</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">4</th>\n            <td colspan=\"2\">Larry the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n        <exemplify [sources]=\"[{name:'markup', src: '<table class=&quot;table table-bordered&quot;>...</table>', lang:'markup'}]\"></exemplify>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 mb-4\">\n    <h4>Hoverable rows</h4>\n    <div class=\"card mx-n3 mx-md-0\" id=\"tableExampleHover\">\n      <div class=\"card-body\">\n        <table class=\"table table-hover\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>The bird</td>\n            <td>@twitter</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td colspan=\"2\">Larry the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n        <exemplify [sources]=\"[{name:'markup', src: '<table class=&quot;table table-hover&quot;>...</table>', lang:'markup'}]\"></exemplify>\n      </div>\n    </div>\n  </div>\n  <div class=\"clearfix hidden-sm-down\"></div>\n  <div class=\"col-md-6 mb-4\">\n    <h4>Small table</h4>\n    <div class=\"card mx-n3 mx-md-0\" id=\"tableExampleSmall\">\n      <div class=\"card-body\">\n        <table class=\"table table-sm\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>The bird</td>\n            <td>@twitter</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td colspan=\"2\">Larry the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n        <exemplify [sources]=\"[{name:'markup', src: '<table class=&quot;table table-sm&quot;>...</table>', lang:'markup'}]\"></exemplify>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 mb-4\">\n    <h4>Expanded row</h4>\n    <div class=\"card mx-n3 mx-md-0\" id=\"tableExampleExpand\">\n      <div class=\"card-body\">\n        <table class=\"table table-sm table-expandable\">\n        <thead>\n        <tr>\n          <th>First Name</th>\n          <th>Last Name</th>\n          <th>Username</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>Mark</td>\n          <td>Otto</td>\n          <td>@mdo</td>\n        </tr>\n        <tr class=\"row-open\">\n          <td>Jacob</td>\n          <td>Thornton</td>\n          <td>@fat</td>\n        </tr>\n        <tr class=\"row-expanded\">\n          <td colspan=\"3\">This row is expanded</td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">Larry the Bird</td>\n          <td>@twitter</td>\n        </tr>\n        </tbody>\n      </table>\n        <exemplify [sources]=\"[{name:'markup', src: '<table class=&quot;table table-expandable&quot;>...</table>', lang:'markup'}]\"></exemplify>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
    TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! ./tables.component.html */ "./src/example/components/tables/tables.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<a name=\"tabs\"><h2 class=\"my-3\">Tabs</h2></a>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <p>Use tabs to enable easy switching between different content without navigating away. Tabs can be used on small screens like mobile devices too but consider switching to <a routerLink=\"/dropdowns\">dropdowns</a> or a regular <a routerLink=\"/dropdowns\">select</a> instead when tabs are displayed on mobiles.</p>\n    <div class=\"alert alert-info\"><strong>Framework needed!</strong> Please note that the example below is just a representation of how tabs look and the needed markup. In order to use tabs you need a framework to control when and how to show them. If you're using angular, please take a look at <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/\" target=\"_blank\">ng-bootstrap</a> and their <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/#/components/tabs\" target=\"_blank\">tabs component</a> or use <code>*ngFor</code> to loop through the items and render them as tabs.</div>\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"#\">Active</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <exemplify [selector]=\"'.nav'\"></exemplify>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/example/components/tabs/tabs.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/example/components/toast-notifications/toast-notifications.component.html":
/*!***************************************************************************************!*\
  !*** ./src/example/components/toast-notifications/toast-notifications.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"modals\"><h2 class=\"my-3\">Toast notifications BETA!</h2></a>\n<div class=\"alert alert-info mx-n3 mx-md-0\"><strong>Framework needed!</strong> Please note that the examples below uses a third-party library. Toast notifications use the same style and appearance as alerts but you need a framework to control when and how to show them. If you're using angular, please take a look at <a class=\"alert-link\" href=\"https://scttcper.github.io/ngx-toastr/\" target=\"_blank\">ngx-toastr</a> for more info.</div>\n<div class=\"card my-3 mx-n3 mx-md-0\">\n  <h4 class=\"card-header pb-0\">Standard toast notifications</h4>\n  <div class=\"card-body\"><p>By default toast notifications are positioned bottom right on desktop to avoid overlaying the navigation to the left. On tablets and smaller screens where the menu is hidden, they appear bottom left and on small screens (mobile devices) they use full width.</p>\n    <div class=\"row\">\n      <div class=\"col-6 col-md-auto mb-3 mb-md-0\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('info', true)\">Show info</button>\n      </div>\n      <div class=\"col-6 col-md-auto mb-3 mb-md-0\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('success', true)\">Show success</button>\n      </div>\n      <div class=\"col-6 col-md-auto\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('warning', true)\">Show warning</button>\n      </div>\n      <div class=\"col-6 col-md-auto\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('error', true)\">Show error</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card my-3 mx-n3 mx-md-0\">\n  <h4 class=\"card-header pb-0\">Toast notifications with timeout</h4>\n  <div class=\"card-body\"><p>These toasts will disappear after a set time.</p>\n    <div class=\"row\">\n      <div class=\"col-6 col-md-auto mb-3 mb-md-0\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('info')\">Show info</button>\n      </div>\n      <div class=\"col-6 col-md-auto mb-3 mb-md-0\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('success')\">Show success</button>\n      </div>\n      <div class=\"col-6 col-md-auto\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('warning')\">Show warning</button>\n      </div>\n      <div class=\"col-6 col-md-auto\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('error')\">Show error</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--\n<div class=\"card my-3\">\n  <h4 class=\"card-header\">Inline toast notifications</h4>\n  <div class=\"card-body\"><p>Below is a example of a standard modal opened with a backdrop.</p>\n    <div class=\"row\">\n      <div class=\"col-6 col-md-auto mb-3 mb-md-0\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('info', true, true)\">Show info</button>\n      </div>\n      <div class=\"col-6 col-md-auto mb-3 mb-md-0\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('success', true, true)\">Show success</button>\n      </div>\n      <div class=\"col-6 col-md-auto\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('warning', true, true)\">Show warning</button>\n      </div>\n      <div class=\"col-6 col-md-auto\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('error', true, true)\">Show error</button>\n      </div>\n      <div toastContainer></div>\n    </div>\n  </div>\n</div>-->"

/***/ }),

/***/ "./src/example/components/toast-notifications/toast-notifications.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/example/components/toast-notifications/toast-notifications.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ToastNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastNotificationsComponent", function() { return ToastNotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var toasts = [
    {
        title: 'Title',
        message: 'Message',
    },
    {
        message: 'Toast without title'
    },
    {
        title: 'Toast without message'
    },
    {
        title: 'Some title',
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        Duis at est ut augue sodales laoreet.\n        Suspendisse tincidunt ultricies metus vel bibendum.",
    },
];
var ToastNotificationsComponent = /** @class */ (function () {
    function ToastNotificationsComponent(toastr) {
        this.toastr = toastr;
        this.title = '';
        this.message = '';
    }
    ToastNotificationsComponent.prototype.ngOnInit = function () { };
    ToastNotificationsComponent.prototype.getToast = function () {
        var m = this.message;
        var t = this.title;
        if (!this.title.length && !this.message.length) {
            var randomMessage = toasts[Math.floor(Math.random() * Math.floor(toasts.length))];
            m = randomMessage.message;
            t = randomMessage.title;
        }
        return {
            message: m,
            title: t,
        };
    };
    ToastNotificationsComponent.prototype.showToast = function (type, disableTimeOut, inline) {
        if (disableTimeOut === void 0) { disableTimeOut = false; }
        if (inline === void 0) { inline = false; }
        var config = {};
        if (disableTimeOut) {
            config = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, config, { disableTimeOut: true });
        }
        if (inline) {
            config = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, config, { positionClass: 'inline' });
        }
        var toast = this.getToast();
        this.toastr[type](toast.message, toast.title, config);
        // this.toastr.show('test', type, {}, 'toast-' + type);
    };
    ToastNotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toast-notifications',
            template: __webpack_require__(/*! ./toast-notifications.component.html */ "./src/example/components/toast-notifications/toast-notifications.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ToastNotificationsComponent);
    return ToastNotificationsComponent;
}());



/***/ }),

/***/ "./src/example/components/tooltips/tooltips.component.html":
/*!*****************************************************************!*\
  !*** ./src/example/components/tooltips/tooltips.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"tooltips\"><h2 class=\"my-3\">Tooltips</h2></a>\n<div class=\"alert alert-info mx-n3 mx-md-0\"><strong>Framework needed!</strong> Please note that the example below is just a representation of how the tooltips look and the needed markup. In order to use tooltips you need a framework to control when and how to show tooltips. If you're using angular, please take a look at <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/\" target=\"_blank\">ng-bootstrap</a> and their <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/#/components/tooltip\" target=\"_blank\">tooltip component</a>.</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"tooltipsExample\">\n  <div class=\"card-body bg-secondary\">\n      <div class=\"tooltip bs-tooltip-top\" role=\"tooltip\">\n        <div class=\"arrow\"></div>\n        <div class=\"tooltip-inner\">\n          Tooltip on the top\n        </div>\n      </div>\n      <div class=\"tooltip bs-tooltip-right\" role=\"tooltip\">\n        <div class=\"arrow\"></div>\n        <div class=\"tooltip-inner\">\n          Tooltip on the right\n        </div>\n      </div>\n      <div class=\"tooltip bs-tooltip-bottom\" role=\"tooltip\">\n        <div class=\"arrow\"></div>\n        <div class=\"tooltip-inner\">\n          Tooltip on the bottom\n        </div>\n      </div>\n      <div class=\"tooltip bs-tooltip-left\" role=\"tooltip\">\n        <div class=\"arrow\"></div>\n        <div class=\"tooltip-inner\">\n          Tooltip on the left\n        </div>\n      </div>\n  </div>\n  <div class=\"card-body pt-0\">\n    <exemplify [selector]=\"'#tooltipsExample .card-body > .tooltip'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <h4 class=\"card-header\">Usage and highlighting</h4>\n  <div class=\"card-body\">\n    <p>Use the traditional <code>&lt;abbr&gt;</code>-tag or the <code>.text-help</code> class to underline single words where you want to provide additional information inside a tooltip. In forms use <code>&lt;i class=\"fal fa-question-square\"&gt;&lt;/i&gt;</code> to display an <i class=\"fal fa-question-square text-primary\"></i>-icon.</p>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"tooltipExample\">\n  <h4 class=\"card-header\">Angular tooltip usage</h4>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Tooltip within text</h5>\n    <p>\n      Lorem ipsum dolor sit amet, <abbr placement=\"top\" ngbTooltip=\"Consectētur, third-person singular present active subjunctive of consector.\" container=\"body\">consectetur</abbr> adipiscing elit. Mauris in justo id eros mattis aliquet non vel orci. Cras a pulvinar enim, congue pretium velit. Donec ut bibendum felis, vel ultricies metus. Suspendisse <span class=\"text-help\" placement=\"top\" ngbTooltip=\"This time we've used the class 'text-help' to dash underline condimentum.\" container=\"body\">condimentum</span> magna vitae orci facilisis, nec lacinia elit semper.\n    </p>\n    <exemplify [selector]=\"'#tooltipExample > .card-body > p'\" [escapeStrings]=\"[' ngbTooltip',' ngClass', '[ngClass]']\"></exemplify>\n  </div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Tooltip inside table</h5>\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <th>#</th>\n        <th><span class=\"text-help\" ngbTooltip=\"This column shows first names.\" container=\"body\">First Name</span></th>\n        <th>Last Name</th>\n        <th>Username</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <th scope=\"row\">1</th>\n        <td><span class=\"text-help\" ngbTooltip=\"The name is Mark.\" container=\"body\">Mark</span></td>\n        <td>Otto</td>\n        <td>@mdo</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">2</th>\n        <td><span class=\"text-help\" ngbTooltip=\"The name is Jacob.\" container=\"body\">Jacob</span></td>\n        <td>Thornton</td>\n        <td>@fat</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">3</th>\n        <td><span class=\"text-help\" ngbTooltip=\"The name is Larry.\" container=\"body\">Larry</span></td>\n        <td>the Bird</td>\n        <td>@twitter</td>\n      </tr>\n      </tbody>\n    </table>\n    <exemplify [selector]=\"'#tooltipExample .card-body .table'\" [escapeStrings]=\"[' ngbTooltip',' ngClass', '[ngClass]']\"></exemplify>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/example/components/tooltips/tooltips.component.ts":
/*!***************************************************************!*\
  !*** ./src/example/components/tooltips/tooltips.component.ts ***!
  \***************************************************************/
/*! exports provided: TooltipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsComponent", function() { return TooltipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TooltipsComponent = /** @class */ (function () {
    function TooltipsComponent() {
    }
    TooltipsComponent.prototype.ngOnInit = function () {
    };
    TooltipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tooltips',
            template: __webpack_require__(/*! ./tooltips.component.html */ "./src/example/components/tooltips/tooltips.component.html"),
            styles: ["\n      .tooltip {\n          position: relative;\n          display: inline-block;\n          margin: 10px 20px;\n          opacity: 1;\n      }\n      .bs-tooltip-right .arrow, .bs-tooltip-left .arrow {\n          top: calc(50% - 0.4rem);\n      }\n      .bs-tooltip-top .arrow, .bs-tooltip-bottom .arrow {\n          right: calc(50% - 0.4rem);\n      }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TooltipsComponent);
    return TooltipsComponent;
}());



/***/ }),

/***/ "./src/example/components/typography/typography.component.html":
/*!*********************************************************************!*\
  !*** ./src/example/components/typography/typography.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a name=\"typography\"><h2 class=\"my-3\">Fonts and typography</h2></a>\n<div class=\"card\">\n  <div class=\"card-body\" id=\"headings\">\n    <h4 class=\"card-title\">Headings</h4>\n    <p>Note that the font sizes for <code>h1</code>, <code>h2</code> and <code>h3</code> adjust according to viewport size.</p>\n    <h1>Heading h1</h1>\n    <h2>Heading h2</h2>\n    <h3>Heading h3</h3>\n    <h4>Heading h4</h4>\n    <h5>Heading h5</h5>\n    <h6>Heading h6</h6>\n    <exemplify [selector]=\"'#headings > *:not(exemplify):not(.card-title)'\"></exemplify>\n  </div>\n  <div class=\"card-body\" id=\"lead\">\n    <h4 class=\"card-title\">Lead</h4>\n    <p class=\"lead\">Sed sit amet mauris ut ligula vulputate gravida sit amet ac nisi. Sed iaculis magna massa, ut lacinia ante congue vitae.</p>\n    <exemplify [selector]=\"'#lead > .lead'\"></exemplify>\n  </div>\n  <div class=\"card-body\" id=\"paragraph\">\n    <h4 class=\"card-title\">Paragraph</h4>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ornare turpis. Sed sit amet mauris ut ligula vulputate gravida sit amet ac nisi. Sed iaculis magna massa, ut lacinia ante congue vitae. Fusce ac tempus leo. Sed nec nisl volutpat augue scelerisque luctus eu a augue. Donec ut pretium justo. Sed at sapien sed libero elementum volutpat. Suspendisse eget condimentum diam, maximus suscipit est. Ut vestibulum vitae nulla luctus dapibus. Nullam semper mi a varius pharetra. Nulla quis nisi suscipit, lacinia ante vitae, commodo magna.</p>\n    <exemplify [selector]=\"'#paragraph > p'\"></exemplify>\n  </div>\n  <div class=\"card-body\" id=\"weights\">\n    <h4 class=\"card-title\">Weights</h4>\n    <p class=\"font-weight-light\">Light AaBbCc 0123456789</p>\n    <p class=\"font-weight-normal\">Regular AaBbCc 0123456789</p>\n    <p class=\"font-weight-medium\">Medium AaBbCc 0123456789</p>\n    <p class=\"font-weight-bold\">Bold AaBbCc 0123456789</p>\n    <exemplify [selector]=\"'#weights > p'\"></exemplify>\n  </div>\n  <div class=\"card-body\" id=\"italic\">\n    <h4 class=\"card-title\">Italic</h4>\n    <p class=\"font-weight-light font-italic\">Light Italic AaBbCc 0123456789</p>\n    <p class=\"font-weight-normal font-italic\">Regular Italic AaBbCc 0123456789</p>\n    <p class=\"font-weight-medium font-italic\">Medium Italic AaBbCc 0123456789</p>\n    <p class=\"font-weight-bold font-italic\">Bold Italic AaBbCc 0123456789</p>\n    <exemplify [selector]=\"'#italic > p'\"></exemplify>\n  </div>\n</div>\n<hr>\n\n<hr>\n\n"

/***/ }),

/***/ "./src/example/components/typography/typography.component.ts":
/*!*******************************************************************!*\
  !*** ./src/example/components/typography/typography.component.ts ***!
  \*******************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/example/components/typography/typography.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/buttons/buttons.component */ "./src/example/components/buttons/buttons.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/alerts/alerts.component */ "./src/example/components/alerts/alerts.component.ts");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tabs/tabs.component */ "./src/example/components/tabs/tabs.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tables/tables.component */ "./src/example/components/tables/tables.component.ts");
/* harmony import */ var angular_exemplify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-exemplify */ "./node_modules/angular-exemplify/fesm5/angular-exemplify.js");
/* harmony import */ var _components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/breadcrumbs/breadcrumbs.component */ "./src/example/components/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/forms/forms.component */ "./src/example/components/forms/forms.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_checkboxes_and_slide_toggles_checkboxes_and_slide_toggles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component */ "./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_icons_icons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/icons/icons.component */ "./src/example/components/icons/icons.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/pro-light-svg-icons */ "./node_modules/@fortawesome/pro-light-svg-icons/index.es.js");
/* harmony import */ var _components_input_group_input_group_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/input-group/input-group.component */ "./src/example/components/input-group/input-group.component.ts");
/* harmony import */ var _components_list_group_list_group_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/list-group/list-group.component */ "./src/example/components/list-group/list-group.component.ts");
/* harmony import */ var _components_dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/dropdowns/dropdowns.component */ "./src/example/components/dropdowns/dropdowns.component.ts");
/* harmony import */ var _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/cards/cards.component */ "./src/example/components/cards/cards.component.ts");
/* harmony import */ var _components_modals_modals_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/modals/modals.component */ "./src/example/components/modals/modals.component.ts");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pagination/pagination.component */ "./src/example/components/pagination/pagination.component.ts");
/* harmony import */ var _components_tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/tooltips/tooltips.component */ "./src/example/components/tooltips/tooltips.component.ts");
/* harmony import */ var _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/accordion/accordion.component */ "./src/example/components/accordion/accordion.component.ts");
/* harmony import */ var _components_typography_typography_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/typography/typography.component */ "./src/example/components/typography/typography.component.ts");
/* harmony import */ var _components_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/skeleton-loader/skeleton-loader.component */ "./src/example/components/skeleton-loader/skeleton-loader.component.ts");
/* harmony import */ var _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/datepicker/datepicker.component */ "./src/example/components/datepicker/datepicker.component.ts");
/* harmony import */ var _components_datepicker_datepicker_simple_datepicker_simple_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/datepicker/datepicker-simple/datepicker-simple.component */ "./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.ts");
/* harmony import */ var _components_datepicker_datepicker_input_datepicker_input_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/datepicker/datepicker-input/datepicker-input.component */ "./src/example/components/datepicker/datepicker-input/datepicker-input.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/example/components/navbar/navbar.component.ts");
/* harmony import */ var _components_radio_buttons_radio_buttons_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/radio-buttons/radio-buttons.component */ "./src/example/components/radio-buttons/radio-buttons.component.ts");
/* harmony import */ var _components_colors_colors_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/colors/colors.component */ "./src/example/components/colors/colors.component.ts");
/* harmony import */ var _components_toast_notifications_toast_notifications_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/toast-notifications/toast-notifications.component */ "./src/example/components/toast-notifications/toast-notifications.component.ts");
/* harmony import */ var _components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/spinners/spinners.component */ "./src/example/components/spinners/spinners.component.ts");
/* harmony import */ var _components_button_group_button_group_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/button-group/button-group.component */ "./src/example/components/button-group/button-group.component.ts");






































_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_17__["library"].add(_fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_18__["faArrowAltRight"]);
var ExampleModule = /** @class */ (function () {
    function ExampleModule() {
    }
    ExampleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular_exemplify__WEBPACK_IMPORTED_MODULE_9__["ExemplifyModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"]
            ],
            declarations: [
                _components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"],
                _components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_5__["AlertsComponent"],
                _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__["TabsComponent"],
                _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_8__["TablesComponent"],
                _components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbsComponent"],
                _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_11__["FormsComponent"],
                _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_11__["PersonalIdentityNumberDirective"],
                _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_11__["ValidationMessagePipe"],
                _components_checkboxes_and_slide_toggles_checkboxes_and_slide_toggles_component__WEBPACK_IMPORTED_MODULE_13__["CheckboxesAndSlideTogglesComponent"],
                _components_icons_icons_component__WEBPACK_IMPORTED_MODULE_15__["IconsComponent"],
                _components_input_group_input_group_component__WEBPACK_IMPORTED_MODULE_19__["InputGroupComponent"],
                _components_list_group_list_group_component__WEBPACK_IMPORTED_MODULE_20__["ListGroupComponent"],
                _components_spinners_spinners_component__WEBPACK_IMPORTED_MODULE_36__["SpinnersComponent"],
                _components_dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_21__["DropdownsComponent"],
                _components_cards_cards_component__WEBPACK_IMPORTED_MODULE_22__["CardsComponent"],
                _components_modals_modals_component__WEBPACK_IMPORTED_MODULE_23__["ModalsComponent"],
                _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_24__["PaginationComponent"],
                _components_tooltips_tooltips_component__WEBPACK_IMPORTED_MODULE_25__["TooltipsComponent"],
                _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_26__["AccordionComponent"],
                _components_typography_typography_component__WEBPACK_IMPORTED_MODULE_27__["TypographyComponent"],
                _components_skeleton_loader_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_28__["SkeletonLoaderComponent"],
                _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_29__["DatepickerComponent"],
                _components_datepicker_datepicker_simple_datepicker_simple_component__WEBPACK_IMPORTED_MODULE_30__["DatepickerSimpleComponent"],
                _components_datepicker_datepicker_input_datepicker_input_component__WEBPACK_IMPORTED_MODULE_31__["DatepickerInputComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_32__["NavbarComponent"],
                _components_radio_buttons_radio_buttons_component__WEBPACK_IMPORTED_MODULE_33__["RadioButtonsComponent"],
                _components_colors_colors_component__WEBPACK_IMPORTED_MODULE_34__["ColorsComponent"],
                _components_toast_notifications_toast_notifications_component__WEBPACK_IMPORTED_MODULE_35__["ToastNotificationsComponent"],
                _components_button_group_button_group_component__WEBPACK_IMPORTED_MODULE_37__["ButtonGroupComponent"]
            ],
            exports: [_components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"]]
        })
    ], ExampleModule);
    return ExampleModule;
}());



/***/ }),

/***/ "./src/example/services/mobile-detect.service.ts":
/*!*******************************************************!*\
  !*** ./src/example/services/mobile-detect.service.ts ***!
  \*******************************************************/
/*! exports provided: MobileDetectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileDetectService", function() { return MobileDetectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobile-detect */ "./node_modules/mobile-detect/mobile-detect.js");
/* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mobile_detect__WEBPACK_IMPORTED_MODULE_2__);



var MobileDetectService = /** @class */ (function () {
    function MobileDetectService() {
        this._nativeWindow = window;
    }
    Object.defineProperty(MobileDetectService.prototype, "nativeWindow", {
        get: function () {
            return this._nativeWindow;
        },
        enumerable: true,
        configurable: true
    });
    MobileDetectService.prototype.isMobile = function () {
        var md = new mobile_detect__WEBPACK_IMPORTED_MODULE_2__(this.nativeWindow.navigator.userAgent);
        return !!md.mobile();
    };
    MobileDetectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MobileDetectService);
    return MobileDetectService;
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