(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./dist/lib/package.json": 
        /*!*******************************!*\
          !*** ./dist/lib/package.json ***!
          \*******************************/
        /*! exports provided: name, version, description, main, scripts, repository, publishConfig, author, license, bugs, homepage, dependencies, default */
        /***/ (function (module) {
            module.exports = JSON.parse("{\"name\":\"@sebgroup/bootstrap\",\"version\":\"5.0.0\",\"description\":\"A standalone bootstrap theme for SEB\",\"main\":\"scss/bootstrap.scss\",\"scripts\":{\"test\":\"echo \\\"Error: no test specified\\\" && exit 1\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/sebgroup/bootstrap.git\"},\"publishConfig\":{\"registry\":\"https://registry.npmjs.org/\",\"access\":\"public\"},\"author\":\"Robert Hjalmers\",\"license\":\"Apache-2.0\",\"bugs\":{\"url\":\"https://github.com/sebgroup/bootstrap/issues\"},\"homepage\":\"https://sebgroup.github.io/bootstrap/\",\"dependencies\":{\"@sebgroup/fonts\":\"^1.0.0\"}}");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html": 
        /*!**************************************************************!*\
          !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
          \**************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<app-mobile-navigation></app-mobile-navigation>\n<app-side-navigation></app-side-navigation>\n<app-header></app-header>\n<div class=\"content\" (window:scroll)=\"scroll($event)\" style=\"z-index: 0;\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"mx-auto mt-5 mt-lg-0 pt-3 pt-lg-0\" style=\"max-width: 920px\">\n        <router-outlet></router-outlet>\n        <div class=\"py-3 text-center\">Version: <a href=\"{{'https://github.com/sebgroup/bootstrap/releases/' + versionLink}}\" target=\"_blank\" class=\"mr-3\">{{version}}</a>Build: {{travis_build_number}} </div>\n      </div>\n    </div>\n  </div>\n  <!--<app-sub-header [scrollPosition]=\"scrollPosition\"></app-sub-header>-->\n\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html": 
        /*!*********************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/app/components/about/about.component.html ***!
          \*********************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<h1 class=\"px-3 px-md-0 my-3\">About</h1>\n<div class=\"card mb-5\">\n  <div class=\"card-body\">\n    <h3 class=\"card-title\">What is sebgroup/bootstrap?</h3>\n    <p class=\"lead mb-0\">sebgroup/bootstrap is a standalone theme built on <a href=\"https://sebgroup.github.io/bootstrap/\" target=\"_blank\">Bootstrap 4</a>, note that there's no dependencies to bootstrap other than the requirement to follow their markup.</p>\n  </div>\n  <div class=\"card-body pt-0\">\n    <h4 class=\"card-title\">Bootstrap markup</h4>\n    <p>sebgroup/bootstrap has no external dependency to bootstrap but since the project is built on top off bootstrap, all markup examples on their website will work for sebgroup/bootstrap too. Please note that not all components have been styled for SEB yet and this library doesn't include any Javascript either.</p>\n    <p>The later is by design as the goal and purpose of this project is to hold <strong>common styles for standard web components</strong> and not control how they work or behave as that would require additional Javascript and that is something most frameworks take care of ie. React, Angular, Vue etc. This is also the reason as to why some of the components like pagination, accordion etc. on the <a href=\"https://sebgroup.github.io/bootstrap/\" target=\"_blank\">demo page</a> doesn't do anything when you try to use them.</p>\n  </div>\n  <div class=\"card-body pt-0\">\n    <h4 class=\"card-title\">Getting started</h4>\n    <p>Read about how to get started in the <a href=\"https://github.com/sebgroup/bootstrap/wiki\" target=\"_blank\">wiki</a>.</p>\n  </div>\n  <div class=\"card-body pt-0\">\n    <h4 class=\"card-title\">Having issues?</h4>\n    <p>Feel free to ask questions and create issues on <a href=\"https://github.com/sebgroup/bootstrap/issues\" target=\"_blank\">github</a>.</p>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html": 
        /*!***********************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
          \***********************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<header class=\"col-12 d-lg-none bg-white\">\n  <div class=\"row justify-content-between justify-content-lg-end h-100\">\n    <div class=\"col col-md-auto d-none d-md-flex brand\">\n      <div class=\"row mobile-header\">\n        <div class=\"col-auto px-0\">\n          <svg class=\"seb-logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\">\n            <path d=\"M0 0h800v800H0z\" fill=\"#60cd18\"/>\n            <path d=\"M290.55 348.35l-25.87 19.32c-12.22-10.51-28-12.57-36.65-12.57s-18 2.51-19.37 8.82c-1.38 6.12 4.31 10.88 14.08 13.53 11.14 3 21.29 5.66 36.92 10.12 23.24 6.63 39.13 16.69 39.13 40 0 32.14-28.53 48.8-66.75 48.8s-64.26-19.91-72-29.2l27.35-20.45c19.21 16.75 32.57 19.11 43.74 19.11 12.81 0 24.79-2.75 26.33-10 1.25-5.82-3.58-10.45-14.49-13-12.35-2.85-22.77-5.14-34.4-8.2-31.52-8.27-40.41-26.6-40.41-43.06 0-22.67 21.1-45.95 59.69-45.95 39.57 0 62.74 22.67 62.74 22.67m164.9-20.4H340.12V472.1h117.45v-33.24h-76.94v-23.22h53v-31.8h-53v-23h74.83zM310.27 505.37h9V294.63h-9zm162.45 0h9V294.63h-9zm29.8-33.27h92.64c24.77 0 44.84-14.93 44.84-38.84 0-18.65-12.21-31-29.32-36.47a9.6 9.6 0 0 0-1.66-.21 10.36 10.36 0 0 0 1.66-.29c9.8-3.88 20.66-14.21 20.66-31.8 0-22.31-19.74-36.54-44.1-36.54h-84.72zm40.7-114.17h32.36c7.45 0 13.48 5.88 13.48 12.64s-6 12.66-13.48 12.66h-32.36zm39.58 82.13h-39.58v-26.29h39.58a13.15 13.15 0 0 1 0 26.28z\" fill=\"#fff\"/>\n          </svg>\n        </div>\n        <div class=\"col-auto align-self-center text-center px-3\" (click)=\"toggleMenu()\">\n          <i class=\"far fa-bars fa-1x d-block\"></i>\n          <div>Menu</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col d-md-none px-0\" *ngIf=\"activeTab\">\n      <div class=\"row mobile-header h-100 align-items-center text-center no-gutters\">\n        <div class=\"col\" ngClass=\"{{activeTab === 'start' ? 'active':''}}\" (click)=\"showMenu('start')\"><i class=\"far fa-home fa-1x d-block\"></i>Start</div>\n        <div class=\"col\" ngClass=\"{{activeTab === 'base' ? 'active':''}}\" (click)=\"showMenu('base')\"><i class=\"far fa-font fa-1x d-block\"></i>Base</div>\n        <div class=\"col\" ngClass=\"{{activeTab === 'components' ? 'active':''}}\" (click)=\"showMenu('components')\"><i class=\"far fa-bookmark fa-1x d-block\"></i>Components</div>\n      </div>\n    </div>\n    <div class=\"col align-self-center pl-3 d-none d-sm-flex\">\n      <h3 class=\"mb-0\">Bootstrap</h3>\n    </div>\n    <div class=\"col d-none d-md-flex bg-white border-bottom sticky-header\" [@scrollAnimation]=\"stickyHeader\">\n      <div class=\"row align-items-center h-100\">\n        <div class=\"col\">\n          <h5 class=\"mb-0\">Section header</h5>\n          <ol class=\"breadcrumb mb-0 pl-0 py-0\">\n            <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n            <li class=\"breadcrumb-item active\">Section header</li>\n          </ol>\n        </div>\n        <div class=\"col-auto\">\n          <div class=\"card-menu-control\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/app/components/mobile-navigation/mobile-navigation.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/app/components/mobile-navigation/mobile-navigation.component.html ***!
          \*********************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<div class=\"mobile-nav bg-light w-100\" *ngIf=\"($activeTab | async) && $activeState | async as mobileMenu\">\n  <div class=\"col d-md-none px-0\" *ngIf=\"$activeTab | async as activeTab\" (click)=\"hideMobileNav()\">\n    <div class=\"mobile-breadcrumb border-bottom\">\n      <div  class=\"d-flex align-items-center position-absolute w-100 h-100\">\n        <h5 class=\"text-center position-absolute w-100\" [@slideOut]=\"menuState\" *ngIf=\"menuState === 'show'\">{{activeTab}}</h5>\n      </div>\n    </div>\n  </div>\n  <div [@slideOut]=\"menuState\" *ngIf=\"menuState === 'show'\" class=\"position-absolute w-100\">\n    <div class=\"row border-bottom px-3 align-items-center\" *ngFor=\"let menuItem of mobileMenu\">\n        <ng-container *ngIf=\"menuItem.path.substr(0,4) !== 'http'\">\n          <div class=\"col\">\n            <a class=\"nav-link\" routerLink=\"{{menuItem.path}}\" (click)=\"hideMobileNav()\">{{menuItem.name}}</a>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"menuItem.path.substr(0,4) === 'http'\">\n          <div class=\"col\">\n            <a class=\"nav-link\" [href]=\"menuItem.path\" target=\"_blank\" (click)=\"hideMobileNav()\">{{menuItem.name}}</a>\n          </div>\n          <div class=\"col-auto\">\n            <i class=\"far fa-external-link-square\"></i>\n          </div>\n        </ng-container>\n    </div>\n  </div>\n\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/app/components/side-navigation/side-navigation.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/app/components/side-navigation/side-navigation.component.html ***!
          \*****************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<div class=\"side-nav\" [ngClass]=\"{'active': $isActive | async}\">\n  <div class=\"row no-gutters\">\n    <div class=\"col-auto\">\n      <svg class=\"seb-logo\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\">\n        <path d=\"M0 0h800v800H0z\" fill=\"#60cd18\"/>\n        <path d=\"M290.55 348.35l-25.87 19.32c-12.22-10.51-28-12.57-36.65-12.57s-18 2.51-19.37 8.82c-1.38 6.12 4.31 10.88 14.08 13.53 11.14 3 21.29 5.66 36.92 10.12 23.24 6.63 39.13 16.69 39.13 40 0 32.14-28.53 48.8-66.75 48.8s-64.26-19.91-72-29.2l27.35-20.45c19.21 16.75 32.57 19.11 43.74 19.11 12.81 0 24.79-2.75 26.33-10 1.25-5.82-3.58-10.45-14.49-13-12.35-2.85-22.77-5.14-34.4-8.2-31.52-8.27-40.41-26.6-40.41-43.06 0-22.67 21.1-45.95 59.69-45.95 39.57 0 62.74 22.67 62.74 22.67m164.9-20.4H340.12V472.1h117.45v-33.24h-76.94v-23.22h53v-31.8h-53v-23h74.83zM310.27 505.37h9V294.63h-9zm162.45 0h9V294.63h-9zm29.8-33.27h92.64c24.77 0 44.84-14.93 44.84-38.84 0-18.65-12.21-31-29.32-36.47a9.6 9.6 0 0 0-1.66-.21 10.36 10.36 0 0 0 1.66-.29c9.8-3.88 20.66-14.21 20.66-31.8 0-22.31-19.74-36.54-44.1-36.54h-84.72zm40.7-114.17h32.36c7.45 0 13.48 5.88 13.48 12.64s-6 12.66-13.48 12.66h-32.36zm39.58 82.13h-39.58v-26.29h39.58a13.15 13.15 0 0 1 0 26.28z\" fill=\"#fff\"/>\n      </svg>\n    </div>\n    <div class=\"col align-self-center pl-3\">\n      <h5 class=\"text-white mb-0\">Bootstrap</h5>\n    </div>\n    <div class=\"col-auto align-self-center px-3 d-lg-none\" (click)=\"toggleMenu()\">\n      <i class=\"far fa-times fa-lg text-white\"></i>\n    </div>\n  </div>\n  <div class=\"container-fluid nav-wrapper pb-5 scrollbar-dark\">\n    <div class=\"row mt-5 mb-3 align-items-center\">\n      <div class=\"col pl-0\">\n        <h6 class=\"text-white pl-3 mb-0 font-weight-medium\"><!--<i class=\"far fa-list mr-2\"></i>-->Start</h6>\n      </div>\n    </div>\n    <nav class=\"nav flex-column\">\n      <ng-container *ngFor=\"let menuItem of $startItems | async\">\n        <div class=\"row align-items-center menu-item\" routerLinkActive=\"active\">\n          <div class=\"col pl-0\">\n            <ng-container *ngIf=\"menuItem.path.substr(0,4) !== 'http'\">\n              <a class=\"nav-link\" routerLink=\"{{menuItem.path}}\" (click)=\"menuItem.active = !menuItem.active; toggleMenu();\">{{menuItem.name}}</a>\n            </ng-container>\n            <ng-container *ngIf=\"menuItem.path.substr(0,4) === 'http'\">\n              <a class=\"nav-link\" [href]=\"menuItem.path\" target=\"_blank\">{{menuItem.name}}</a>\n            </ng-container>\n          </div>\n        </div>\n      </ng-container>\n    </nav>\n    <div class=\"row mt-5 mb-3 align-items-center\">\n      <div class=\"col pl-0\">\n        <h6 class=\"text-white pl-3 mb-0 font-weight-medium\"><!--<i class=\"far fa-list mr-2\"></i>-->Base</h6>\n      </div>\n    </div>\n    <nav class=\"nav flex-column\">\n      <ng-container *ngFor=\"let menuItem of $baseItems | async\">\n        <div class=\"row align-items-center menu-item\" routerLinkActive=\"active\">\n          <div class=\"col pl-0\">\n            <a class=\"nav-link\" routerLink=\"{{menuItem.path}}\" (click)=\"menuItem.active = !menuItem.active; toggleMenu();\">{{menuItem.name}}</a>\n          </div>\n        </div>\n      </ng-container>\n    </nav>\n    <div class=\"row mt-5 mb-3 align-items-center\">\n      <div class=\"col pl-0\">\n        <h6 class=\"text-white pl-3 mb-0 font-weight-medium\"><!--<i class=\"far fa-list mr-2\"></i>-->Components</h6>\n      </div>\n    </div>\n    <nav class=\"nav flex-column\">\n      <ng-container *ngFor=\"let menuItem of $menuItems | async\">\n        <div class=\"row align-items-center menu-item\" routerLinkActive=\"active\">\n          <div class=\"col pl-0\">\n            <a class=\"nav-link\" routerLink=\"{{menuItem.path}}\" (click)=\"menuItem.active = !menuItem.active; toggleMenu();\">{{menuItem.name}}</a>\n          </div>\n        </div>\n      </ng-container>\n    </nav>\n  </div>\n</div>\n\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/accordion/accordion.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/accordion/accordion.component.html ***!
          \*********************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"accordion\"><h2 class=\"my-3\">Accordion</h2></a>\n<div class=\"alert alert-warning alert-icon mx-n3 mx-md-0\">\n  <strong>Framework needed!</strong> Please note that the example below is just a representation of how accordions look and the needed markup. In order to use accordion you need a framework to control when and how to toggle between active states. If you're using angular, please take a look at <a class=\"alert-link\" href=\"https://sebgroup.github.io/ng-bootstrap/\" target=\"_blank\">@sebgroup/ng-bootstrap</a> which is a theme for <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/\" target=\"_blank\">ng-bootstrap</a>.</div>\n\n<div class=\"card mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n      <ngb-panel id=\"static-1\" title=\"Simple\">\n        <ng-template ngbPanelContent>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel id=\"static-2\">\n        <ng-template ngbPanelTitle>\n          <span class=\"text-info\">Custom title<i class=\"far fa-heart ml-2\"></i></span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n          <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n            labore sustainable VHS.</p>\n          <div class=\"form-row justify-content-end\">\n            <div class=\"col-6 col-sm-auto\">\n              <button class=\"btn btn-outline-primary w-100\">Secondary</button>\n            </div>\n            <div class=\"col-6 col-sm-auto\">\n              <button class=\"btn btn-primary w-100\">Primary</button>\n            </div>\n          </div>\n\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel id=\"static-3\" title=\"Disabled\" [disabled]=\"true\">\n        <ng-template ngbPanelContent>\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\n          labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n    </ngb-accordion>\n    <exemplify [selector]=\"'ngb-accordion'\" [escapeStrings]=\"[' ngbPanelContent', ' ngbPanelTitle', '[closeOthers]', ' activeIds']\"></exemplify>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/alerts/alerts.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/alerts/alerts.component.html ***!
          \***************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"alerts\"><h2 class=\"my-3\">Alerts</h2></a>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <h5>When to use alerts?</h5>\n    <p>Alerts are available for any length of text and can be used for more than traditional alerts. Ideally they should be used when we want content or information to stand out, be separated from the \"normal\" state, highlight a change, make the user aware of important information or simply to convey the response from an action.</p>\n    <h5>What context should I use?</h5>\n    <p>For proper styling, use one of the required contextual classes described below. Avoid using different contexts/colors as a means of separating categories and content of the same type as it might confuse users and make the real context less obvious.</p>\n    <h5>Why have primary, secondary and info when they all look the same?</h5>\n    <p>The appearance might be the same but the semantic meaning is different. This theme is built on bootstrap which has alerts for different semantic contexts, i.e secondary content is not the same as information content, secondary content could be more information or details about a specific service or function while info should be treated as more temporary and is typically added dynamically to a page based on some event or a trigger, ex. information about cookies. Our design however has the same style for these alerts but you should still think about which one is more appropriate for you based on the context and semantic meaning. </p>\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <th>Context</th>\n        <th>Usage</th>\n        <th>Class name</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>Primary</td>\n        <td>For content that should stand out but lacks obvious meaning/context and is not a response to an action. <strong>Note:</strong> most of the time you don't want to use this class instead use <code>alert-secondary</code> when you just want the content to stick out from main content and <code>alert-info</code> when you want to inform the user about something neutral.</td>\n        <td><code>.alert-primary</code></td>\n      </tr>\n      <tr>\n        <td>Secondary</td>\n        <td>For secondary content that should stand out but lacks obvious meaning/context and is not a response to an action.</td>\n        <td><code>.alert-secondary</code></td>\n      </tr>\n      <tr>\n        <td>Info</td>\n        <td>Content that holds neutral information that we find useful for users and that we want to inform them about.</td>\n        <td><code>.alert-info</code></td>\n      </tr>\n      <tr>\n        <td>Success</td>\n        <td>Should be used as a response to an action or something that is considered to be positive or a success.</td>\n        <td><code>.alert-success</code></td>\n      </tr>\n      <tr>\n        <td>Warning</td>\n        <td>Not an error but important information for a user to consider or be aware of.</td>\n        <td><code>.alert-warning</code></td>\n      </tr>\n      <tr>\n        <td>Danger</td>\n        <td>Used for errors or when something goes wrong.</td>\n        <td><code>.alert-danger</code></td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"alertExample\">\n  <h4 class=\"card-header\">Alert</h4>\n  <div class=\"card-body\">\n    <p>The examples below use the traditional <code>.alert-*</code> class (replace * with context), for use cases where the message is really important and needs to stand out.</p>\n    <div class=\"alert alert-primary\" role=\"alert\">\n      <strong>Primary content</strong> This message just needs to stand out.\n    </div>\n    <div class=\"alert alert-secondary\" role=\"alert\">\n      <strong>Secondary content</strong> This message just needs to stand out.\n    </div>\n    <div class=\"alert alert-info\" role=\"alert\">\n      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n    </div>\n    <div class=\"alert alert-success\" role=\"alert\">\n      <strong>Well done!</strong> You successfully read this important alert message.\n    </div>\n    <div class=\"alert alert-warning\" role=\"alert\">\n      <strong>Warning!</strong> Better check yourself, you're not looking too good.\n    </div>\n    <div class=\"alert alert-danger\" role=\"alert\">\n      <strong>Oh snap!</strong> Change a few things up and try submitting again.\n    </div>\n    <exemplify [selector]=\"'#alertExample .alert'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"alertIconExample\">\n  <h4 class=\"card-header\">Alert with icons</h4>\n  <div class=\"card-body\">\n    <p>The examples below use the traditional <code>.alert-*</code> class (replace * with context), together with <code>.alert-icon</code> to add extra emphasis by displaying an icon next to the message. Note that only <code>info</code>, <code>warning</code> and <code>danger</code> alerts have icons at the moment.</p>\n    <div class=\"alert alert-primary alert-icon\" role=\"alert\">\n      <strong>Primary content</strong> This message just needs to stand out.\n    </div>\n    <div class=\"alert alert-secondary alert-icon\" role=\"alert\">\n      <strong>Secondary content</strong> This message just needs to stand out.\n    </div>\n    <div class=\"alert alert-info alert-icon\" role=\"alert\">\n      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n    </div>\n    <div class=\"alert alert-success alert-icon\" role=\"alert\">\n      <strong>Well done!</strong> You successfully read this important alert message.\n    </div>\n    <div class=\"alert alert-warning alert-icon\" role=\"alert\">\n      <strong>Warning!</strong> Better check yourself, you're not looking too good.\n    </div>\n    <div class=\"alert alert-danger alert-icon\" role=\"alert\">\n      <strong>Oh snap!</strong> Change a few things up and try submitting again. Look it works with really long texts too. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu purus in odio finibus dignissim. Pellentesque nibh tortor, lacinia a dapibus et, scelerisque quis dui.\n    </div>\n    <exemplify [selector]=\"'#alertIconExample .alert'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"alertLinkExample\">\n  <h4 class=\"card-header\">Alert with link</h4>\n  <div class=\"card-body\">\n    <p>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.</p>\n    <div class=\"alert alert-info\" role=\"alert\">\n      This is a info alert with <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <div class=\"alert alert-success\" role=\"alert\">\n      This is a success alert with <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <div class=\"alert alert-warning\" role=\"alert\">\n      This is a warning alert with <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <div class=\"alert alert-danger\" role=\"alert\">\n      This is a danger alert with <a href=\"#\" class=\"alert-link\">an example link</a>. Give it a click if you like.\n    </div>\n    <exemplify [selector]=\"'#alertLinkExample .alert'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"alertButtonExample\">\n  <h4 class=\"card-header\">Responsive alerts with buttons in grid</h4>\n  <div class=\"card-body\">\n    <p>Use a grid to create responsive alert layouts, note that <code>.btn-light</code> and <code>.btn-dark</code> should be used for buttons in alerts. Try and resize the page to see how they behave.</p>\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-auto\">\n        <div class=\"alert alert-info alert-icon w-100\" role=\"alert\">\n          <div class=\"row no-gutters\">\n            <div class=\"col\">\n              <p class=\"mb-0 \"><strong>Heads up!</strong> This is a info alert with two small buttons.</p>\n            </div>\n            <div class=\"col-12 col-sm-auto pl-sm-3 mt-2 mt-sm-0\">\n              <div class=\"form-row\">\n                <div class=\"col\">\n                  <button class=\"btn btn-sm btn-dark w-100\">Dark button</button>\n                </div>\n                <div class=\"col\">\n                  <button class=\"btn btn-sm btn-dark w-100\">Dark button</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-auto\">\n        <div class=\"alert alert-success alert-icon w-100\" role=\"alert\">\n          <div class=\"row no-gutters\">\n            <div class=\"col\">\n              <p class=\"mb-0 \"><strong>Well done!</strong> This is a success alert with a small button.</p>\n            </div>\n            <div class=\"col-12 col-sm-auto pl-sm-3 mt-2 mt-sm-0\">\n              <button class=\"btn btn-sm btn-light w-100\">Light button</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-auto\">\n        <div class=\"alert alert-warning alert-icon w-100\" role=\"alert\">\n          <div class=\"row no-gutters\">\n            <div class=\"col\">\n              <p class=\"mb-0 \"><strong>Warning!</strong> This is a warning alert with two small buttons.</p>\n            </div>\n            <div class=\"col-12 col-sm-auto pl-sm-3 mt-2 mt-sm-0\">\n              <div class=\"form-row\">\n                <div class=\"col\">\n                  <button class=\"btn btn-sm btn-dark w-100\">Dark button</button>\n                </div>\n                <div class=\"col\">\n                  <button class=\"btn btn-sm btn-dark w-100\">Dark button</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-auto\">\n        <div class=\"alert alert-danger alert-icon w-100\" role=\"alert\">\n          <div class=\"row no-gutters\">\n            <div class=\"col\">\n              <p class=\"mb-0 \"><strong>Oh snap!</strong> This is a danger alert with a small button.</p>\n            </div>\n            <div class=\"col-12 col-sm-auto pl-sm-3 mt-2 mt-sm-0\">\n              <button class=\"btn btn-sm btn-light w-100\">Light button</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#alertButtonExample .card-body > .row'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"alertAdvancedExample\">\n  <h4 class=\"card-header\">Alert that can be dismissed</h4>\n  <div class=\"card-body\">\n    <p>A more complex alert that can be dismissed (please note that JavaScript or framework is needed to dismiss alert messages!).</p>\n    <button class=\"btn btn-primary\" (click)=\"active = true\" *ngIf=\"!active\">Show alerts</button>\n    <div class=\"alert alert-danger fade\" role=\"alert\" [ngClass]=\"{'show':active}\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"active = !active\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <h4 class=\"alert-heading\">Error!</h4>\n      <p>Opps, looks like you've encountered an error with an important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n      <hr>\n      <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n    </div>\n    <div class=\"alert alert-success fade\" role=\"alert\" [ngClass]=\"{'show':active}\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"active = !active\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <h4 class=\"alert-heading\">Well done!</h4>\n      <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n      <hr>\n      <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n    </div>\n    <exemplify [selector]=\"'#alertAdvancedExample .alert'\"></exemplify>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/breadcrumbs/breadcrumbs.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/breadcrumbs/breadcrumbs.component.html ***!
          \*************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"breadcrumbs\"><h2 class=\"my-3\">Breadcrumbs</h2></a>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <p>Use breadcrumbs to leave a trace so that the users can find their way back when navigating the app. On mobile devices only the second to last item will be displayed together with a back icon, resize the browser to see it live.</p>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item active\">Home</li>\n    </ol>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n      <li class=\"breadcrumb-item active\">Library</li>\n    </ol>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n      <li class=\"breadcrumb-item\"><a href=\"#\">Library</a></li>\n      <li class=\"breadcrumb-item active\">Data</li>\n    </ol>\n    <exemplify [selector]=\"'.breadcrumb'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <h4 class=\"card-header\">Breadcrumbs on dark or colored backgrounds</h4>\n  <div class=\"card-body\">\n    <p>For better contrast against dark and colored backgrounds add the <code>.breadcrumbs-light</code> class to the breadcrumb element.</p>\n    <div class=\"alert bg-info-element\">\n      <ol class=\"breadcrumb breadcrumb-light\">\n        <li class=\"breadcrumb-item active\">Home</li>\n      </ol>\n      <ol class=\"breadcrumb breadcrumb-light\">\n        <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n        <li class=\"breadcrumb-item active\">Library</li>\n      </ol>\n      <ol class=\"breadcrumb breadcrumb-light\">\n        <li class=\"breadcrumb-item\"><a href=\"#\">Home</a></li>\n        <li class=\"breadcrumb-item\"><a href=\"#\">Library</a></li>\n        <li class=\"breadcrumb-item active\">Data</li>\n      </ol>\n    </div>\n    <exemplify [selector]=\"'.breadcrumb'\"></exemplify>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/button-group/button-group.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/button-group/button-group.component.html ***!
          \***************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"buttonGroup\"><h2 class=\"my-3\">Button group</h2></a>\n<div class=\"card mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <p>Group buttons together using a button group, check <a href=\"https://getbootstrap.com/docs/4.2/components/button-group/\" target=\"_blank\">bootstrap docs</a> for more info and examples. Note that javascript is required to use button groups like radio buttons or checkboxes.</p>\n      <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n        <button type=\"button\" class=\"btn btn-outline-primary\">Left</button>\n        <button type=\"button\" class=\"btn btn-outline-primary\">Middle</button>\n        <button type=\"button\" class=\"btn btn-outline-primary\">Right</button>\n      </div>\n    <exemplify [selector]=\"'.card-body > div'\"></exemplify>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/buttons/buttons.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/buttons/buttons.component.html ***!
          \*****************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"buttons\"><h2 class=\"my-3\">Buttons</h2></a>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"buttonsExample\">\n  <h4 class=\"card-header\">Button styles and modifiers</h4>\n  <div class=\"card-body\">\n    <p>Bootstrap have a few different modifiers that can be used with buttons, we primarily use <code>.btn-primary</code>, <code>.btn-secondary</code> and <code>.btn-link</code>, use the latter to give buttons the same behavior as normal links (used for links placed outside text segments and paragraphs as well as actions similar to \"go to\" or regular links). You can also use the outline version if you want an \"inverted\" button with border. Note that we only support <code>.btn-primary</code>,<code>.btn-secondary</code>,<code>.btn-light</code>,<code>.btn-danger</code> and <code>.btn-dark</code> from bootstrap, if you use any of the others they will fall back to the primary style.</p>\n    <label class=\"d-block\">Standard</label>\n    <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n    <button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\n    <button type=\"button\" class=\"btn btn-link\">Link</button>\n    <button type=\"button\" class=\"btn btn-outline-primary\">Primary outlined</button>\n    <button type=\"button\" class=\"btn btn-danger\">Danger (delete)</button>\n    <button type=\"button\" class=\"btn btn-outline-danger\">Danger outlined</button>\n    <button type=\"button\" class=\"btn btn-outline-danger border-transparent\">Danger no border</button>\n    <label class=\"d-block mt-3\">Disabled</label>\n    <button type=\"button\" class=\"btn btn-primary disabled\">Primary</button>\n    <button type=\"button\" class=\"btn btn-secondary disabled\">Secondary</button>\n    <button type=\"button\" class=\"btn btn-link disabled\">Link</button>\n    <button type=\"button\" class=\"btn btn-outline-primary disabled\">Primary-outlined</button>\n    <exemplify [selector]=\"'#buttonsExample .btn:not(.disabled)'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"buttonsLightExample\">\n  <h4 class=\"card-header\">Buttons and colored backgrounds</h4>\n  <div class=\"card-body\">\n    <p>The <code>.btn-light</code> and <code>.btn-dark</code> classes should only be used when buttons are placed on colored or dark backgrounds/images.</p>\n    <div class=\"row align-items-center no-gutters\">\n      <div class=\"col-6 col-md-4 col-lg bg-primary-element py-4 text-center\">\n        <button class=\"btn btn-light\">Light</button>\n      </div>\n      <div class=\"col-6 col-md-4 col-lg bg-info-element py-4 text-center\">\n        <button class=\"btn btn-light\">Light</button>\n      </div>\n      <div class=\"col-6 col-md-4 col-lg bg-success-element py-4 text-center\">\n        <button class=\"btn btn-light\">Light</button>\n      </div>\n      <div class=\"col-6 col-md-4 col-lg bg-warning-element py-4 text-center\">\n        <button class=\"btn btn-dark\">Dark</button>\n      </div>\n      <div class=\"col-6 col-md-4 col-lg bg-danger-element py-4 text-center\">\n        <button class=\"btn btn-light\">Light</button>\n      </div>\n      <div class=\"col-6 col-md-4 col-lg bg-secondary-element py-4 text-center\">\n        <button class=\"btn btn-dark\">Dark</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"buttonsGridExample\">\n  <h4 class=\"card-header\">Responsive design and buttons</h4>\n  <div class=\"card-body\">\n    <p>If you look at the example above on smaller screen you'll notice that the buttons won't stack nicely. To have full control and to create a good experience on mobile devices and tablets consider placing buttons in a grid.</p>\n    <div class=\"row no-gutters\">\n      <div class=\"col-12 col-sm-4 col-md-auto mb-3 mb-md-0 pr-sm-2 pr-md-0\">\n        <button type=\"button\" class=\"btn btn-primary w-100\"><span class=\"d-sm-none\">100% (col-12)</span><span class=\"d-none d-sm-block d-md-none\">1/3 (col-sm-4)</span><span class=\"d-none d-md-block\">col-md-auto</span></button>\n      </div>\n      <div class=\"col-6 col-sm-4 col-md-auto mb-3 mb-md-0 pr-2 px-sm-2 px-md-3\">\n        <button type=\"button\" class=\"btn btn-primary w-100\"><span class=\"d-sm-none\">50% (col-6)</span><span class=\"d-none d-sm-block d-md-none\">1/3 (col-sm-4)</span><span class=\"d-none d-md-block\">col-md-auto</span></button>\n      </div>\n      <div class=\"col-6 col-sm-4 col-md-auto mb-3 mb-md-0 pl-2 pl-md-0\">\n        <button type=\"button\" class=\"btn btn-primary w-100\"><span class=\"d-sm-none\">50% (col-6)</span><span class=\"d-none d-sm-block d-md-none\">1/3 (col-sm-4)</span><span class=\"d-none d-md-block\">col-md-auto</span></button>\n      </div>\n      <div class=\"col col-sm-4 col-md-auto mb-3 mb-md-0 pr-2 px-md-3\">\n        <button type=\"button\" class=\"btn btn-primary w-100\"><span class=\"d-sm-none\">1/3 (col)</span><span class=\"d-none d-sm-block d-md-none\">1/3 (col-sm-4)</span><span class=\"d-none d-md-block\">col-md-auto</span></button>\n      </div>\n      <div class=\"col col-sm-4 col-md-auto mb-3 mb-md-0 px-2 pl-md-0\">\n        <button type=\"button\" class=\"btn btn-primary w-100\"><span class=\"d-sm-none\">1/3 (col)</span><span class=\"d-none d-sm-block d-md-none\">1/3 (col-sm-4)</span><span class=\"d-none d-md-block\">col-md-auto</span></button>\n      </div>\n      <div class=\"col col-sm-4 col-md-auto mb-3 mb-md-0 pl-2\">\n        <button type=\"button\" class=\"btn btn-primary w-100\"><span class=\"d-sm-none\">1/3 (col)</span><span class=\"d-none d-sm-block d-md-none\">1/3 (col-sm-4)</span><span class=\"d-none d-md-block\">col-md-auto</span></button>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#buttonsGridExample .card-body > .row'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"buttonsIconExample\">\n  <h4 class=\"card-header\">Icons in buttons</h4>\n  <div class=\"card-body\">\n    <p>Example with icon, note the alignment on mobile devices (smaller screens) using a grid.</p>\n    <div class=\"row no-gutters\">\n      <div class=\"col-12 col-sm-auto\">\n        <button type=\"button\" class=\"btn btn-primary w-100\">\n          <div class=\"row no-gutters\">\n            <div class=\"col text-left\">Go to next page</div>\n            <div class=\"col-auto ml-sm-2\"><i class=\"far fa-arrow-right\"></i></div>\n          </div>\n        </button>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#buttonsIconExample .card-body > .row'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"additionalButtonsExample\">\n  <h4 class=\"card-header\">Alternative buttons</h4>\n  <div class=\"card-body\">\n    <p>Since SEB Style is a theme for Bootstrap and Bootstrap has some additional button classes to differentiate the severity or the meaning of a button like <code>.btn-success</code> please note that they'll fallback to the default style.</p>\n    <button type=\"button\" class=\"btn btn-success\">Success</button>\n    <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n    <button type=\"button\" class=\"btn btn-info\">Info</button>\n    <exemplify [selector]=\"'#additionalButtonsExample .btn:not(.disabled)'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"smallButtonsExample\">\n  <h4 class=\"card-header\">Sizing</h4>\n  <div class=\"card-body\">\n    <p>Add <code>.btn-sm</code> for smaller buttons and <code>.btn-lg</code> for larger buttons.</p>\n    <button type=\"button\" class=\"btn btn-sm btn-primary\">Small primary</button>\n    <button type=\"button\" class=\"btn btn-sm btn-secondary\">Small secondary</button>\n    <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n    <button type=\"button\" class=\"btn btn-secondary\">Secondary</button>\n    <button type=\"button\" class=\"btn btn-lg btn-primary\">Large primary</button>\n    <button type=\"button\" class=\"btn btn-lg btn-secondary\">Large secondary</button>\n    <exemplify [selector]=\"'#smallButtonsExample .btn:not(.disabled)'\"></exemplify>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/cards/cards.component.html": 
        /*!*************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/cards/cards.component.html ***!
          \*************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"cards\"><h2 class=\"my-3\">Cards</h2></a>\n<div class=\"card mx-n3 mx-md-0\">\n  <div class=\"card-body\" id=\"cardExample\">\n    <h4 class=\"card-title\">Card with header and content</h4>\n    <p class=\"mb-3\">For more info and examples please refer to Bootstraps <a href=\"http://getbootstrap.com/docs/4.1/components/card/\" target=\"_blank\">official documentation</a>.</p>\n    <div class=\"bg-light p-5\">\n      <div class=\"card\">\n        <h4 class=\"card-header\">Card header</h4>\n        <div class=\"card-body\">\n          <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n          <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n        </div>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#cardExample .card'\"></exemplify>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.html": 
        /*!***********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.html ***!
          \***********************************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"checkboxes\"><h2 class=\"my-3\">Checkboxes and slide toggles</h2></a>\n<p class=\"lead\">Below you'll find some examples of checkboxes and layout options using the grid (rows and columns), check the <a routerLink=\"/forms\">forms</a> section for more form elements or head over to <a href=\"https://getbootstrap.com/docs/4.0/components/forms/#overview\" target=\"_blank\">bootstrap docs</a> for more info and examples.</p>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"checkboxExample\">\n  <h4 class=\"card-header\">Standard checkbox</h4>\n  <div class=\"card-body\">\n    <p>We use a standard input element with <code>type=\"checkbox\"</code> for checkboxes but we need to wrap it in a div to get the right style for the different states.</p>\n    <div class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck\">\n      <label class=\"custom-control-label\" for=\"customCheck\">Check this custom checkbox</label>\n    </div>\n    <div class=\"custom-control custom-checkbox\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckDisabled\" disabled>\n      <label class=\"custom-control-label\" for=\"customCheckDisabled\">This checkbox is disabled</label>\n    </div>\n    <exemplify [selector]=\"'#checkboxExample .custom-control'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"checkboxLayoutExample\">\n  <h4 class=\"card-header\">Horizontal layout</h4>\n  <div class=\"card-body\">\n    <p>Use rows and columns to create a responsive layout, in the example below checkboxes will be placed inline on medium sized screens and up. On smaller screens the checkboxes will stack on top of each other, test by resizing the window. Use one of the following utility classes <code>.my-*</code>, <code>.mb-*</code> or <code>.mt-*</code> to add spacing between the different options, ie. <code>mb-2 mb-md-0</code> to get a small bottom margin on small screens and below.</p>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-auto mb-2 mb-md-0\">\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckInline\">\n          <label class=\"custom-control-label\" for=\"customCheckInline\">Check this custom checkbox</label>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-auto mb-2 mb-md-0\">\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckInline1\">\n          <label class=\"custom-control-label\" for=\"customCheckInline1\">And this one</label>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-auto\">\n        <div class=\"custom-control custom-checkbox\">\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckInline2\">\n          <label class=\"custom-control-label\" for=\"customCheckInline2\">Don't forget me</label>\n        </div>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#checkboxLayoutExample .row'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"slideToggleExample\">\n  <h4 class=\"card-header\">Slide toggle</h4>\n  <div class=\"card-body\">\n    <p>The slide toggle works just like a normal checkbox and uses the same markup and bindings, to make it look like a slide toggle just add the class <code>custom-slide-toggle</code>.</p>\n    <div class=\"custom-control custom-slide-toggle\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSlideToggle\">\n      <label class=\"custom-control-label\" for=\"customSlideToggle\">Toggle this input</label>\n    </div>\n    <div class=\"custom-control custom-slide-toggle\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"customSlideToggleDisabled\" disabled>\n      <label class=\"custom-control-label\" for=\"customSlideToggleDisabled\">Toggle disabled</label>\n    </div>\n    <exemplify [selector]=\"'#slideToggleExample .custom-control'\"></exemplify>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/colors/colors.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/colors/colors.component.html ***!
          \***************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<h2 class=\"my-3\">Colors</h2>\n<p class=\"lead px-3 px-md-0\">\n  Read more about our colors and how and when to use them in <a class=\"font-weight-normal\" href=\"http://designlibrary.sebank.se/visual-identity/colours/\" target=\"_blank\">design library</a> and in our\n  <a class=\"font-weight-normal\" href=\"https://seb.brandmanual.se/en/design-elements/colours\" target=\"_blank\">brand manual</a>.\n</p>\n<div class=\"card\">\n  <h4 class=\"card-header pb-0\">Colors in bootstrap</h4>\n  <div class=\"card-body\">\n    <p>All colors listed on the sites above are available in bootstrap too, the names might differ and bootstrap includes additional colors not mentioned in design library. For example bootstrap contains a border color which happens to be gray and a primary color which happens to be blue, just to mention a few.</p>\n    <p>The idea is to add an abstraction layer on top of our design. We rarely need to specify things like borders should be gray (tables already inherit that style etc.) if we need to, we should instead use the <code>$table-border-color</code> variable provided by our theme for bootstrap. We also want to avoid using or inventing class names like <code>.seb-green</code> and instead use contextual class names like <code>.bg-success</code> which happens to be SEB:s green color and in this case we add <code>bg-</code> to denote that we're referring to a background color.</p>\n    <p>In most cases you should avoid using the classes below as they're often inherited, see <a routerLink=\"/alerts\">alerts</a> or <a routerLink=\"/buttons\">buttons</a> as an example. It's possible to override their appearance or create new \"styles\" using these utility classes but most of the time there's already a component or class that does that for you, i.e. use <a routerLink=\"/alerts\">alerts</a> instead of adding the background color directly.</p>\n  </div>\n  <h4 class=\"card-header\">Background colors</h4>\n  <div class=\"card-body\">\n    <div class=\"row no-gutters\">\n      <div class=\"col-12 col-sm-4\" *ngFor=\"let color of colors\">\n        <div class=\"{{'bg-' + color.name + ' p-3 ' + 'text-' + color.textColor}}\">\n          <label class=\"{{'text-' + color.textColor}}\">class:</label>\n          <p>{{'bg-' + color.name}}</p></div>\n      </div>\n    </div>\n  </div>\n  <h4 class=\"card-header\">Text colors</h4>\n  <div class=\"card-body\">\n    <div class=\"row no-gutters\">\n      <div class=\"col-12 col-sm-4\" *ngFor=\"let color of colors\">\n        <div class=\"{{(color.textColor === 'dark' ? 'bg-dark ':'') + 'p-3 ' + 'text-' + color.name}}\">\n          <label class=\"{{(color.textColor === 'dark' ? 'text-white':'')}}\">class:</label>\n          <p>{{'text-' + color.name}}</p></div>\n      </div>\n    </div>\n  </div>\n  <h4 class=\"card-header pb-0\">Background elements</h4>\n  <div class=\"card-body\">\n    <p>Use the following classes to add the fifth element as a background image.</p>\n    <div class=\"bg-primary-element text-white\">\n      <div class=\"p-3 mb-0\"><label class=\"text-white\">class:</label>\n      <p>bg-primary-element</p></div>\n      <p class=\"display-1 p-3\">Primary Element</p>\n    </div>\n    <div class=\"bg-secondary-element\">\n      <div class=\"p-3 mb-0\"><label>class:</label>\n      <p>bg-secondary-element</p></div>\n      <p class=\"display-1 p-3\">Secondary Element</p>\n    </div>\n    <div class=\"bg-success-element text-white\">\n      <div class=\"p-3 mb-0\"><label class=\"text-white\">class:</label>\n      <p>bg-success-element</p></div>\n      <p class=\"display-1 p-3\">Success Element</p>\n    </div>\n    <div class=\"bg-info-element text-white\">\n      <div class=\"p-3 mb-0\"><label class=\"text-white\">class:</label>\n      <p>bg-info-element</p></div>\n      <p class=\"display-1 p-3\">Info Element</p>\n    </div>\n    <div class=\"bg-warning-element\">\n      <div class=\"p-3 mb-0\"><label>class:</label>\n      <p>bg-warning-element</p></div>\n      <p class=\"display-1 p-3\">Warning Element</p>\n    </div>\n    <div class=\"bg-danger-element text-white\">\n      <div class=\"p-3 mb-0\"><label class=\"text-white\">class:</label>\n      <p>bg-danger-element</p></div>\n      <p class=\"display-1 p-3\">Danger Element</p>\n    </div>\n  </div>\n</div>";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/datepicker/datepicker-input/datepicker-input.component.html": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/datepicker/datepicker-input/datepicker-input.component.html ***!
          \**********************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<form class=\"form-inline\">\n  <div class=\"form-group\">\n    <div class=\"input-group\" [ngClass]=\"{'active':d.isOpen()}\" (click)=\"d.toggle()\">\n      <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n             name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (keyup)=\"d.open()\" autoClose=\"true\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-outline-secondary far fa-calendar-alt\" type=\"button\"></button>\n      </div>\n    </div>\n  </div>\n</form>\n<hr/>\n<pre>Model: {{ model | json }}</pre>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/datepicker/datepicker-input/datepicker-input.component.ts": 
        /*!********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/datepicker/datepicker-input/datepicker-input.component.ts ***!
          \********************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-datepicker-input',\n  templateUrl: './datepicker-input.component.html'\n})\nexport class DatepickerInputComponent {\n\n  model;\n  constructor() { }\n\n}\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.html": 
        /*!************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.html ***!
          \************************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\" [showWeekNumbers]=\"true\"></ngb-datepicker>\n<hr/>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"selectToday()\">Select Today</button>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo()\">To current month</button>\n<button class=\"btn btn-sm btn-outline-primary mr-2\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb 2013</button>\n<hr/>\n<pre>Month: {{ date.month }}.{{ date.year }}</pre>\n<pre>Model: {{ model | json }}</pre>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.ts": 
        /*!**********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.ts ***!
          \**********************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "import { Component } from '@angular/core';\nimport { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n  selector: 'app-datepicker-simple',\n  templateUrl: './datepicker-simple.component.html',\n  styles: []\n})\nexport class DatepickerSimpleComponent {\n\n  model: NgbDateStruct;\n  date: {year: number, month: number};\n  constructor(private calendar: NgbCalendar) {\n  }\n\n  selectToday() {\n    this.model = this.calendar.getToday();\n  }\n\n}\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/datepicker/datepicker.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/datepicker/datepicker.component.html ***!
          \***********************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"datepicker\"><h2 class=\"my-3\">Datepicker</h2></a>\n<div class=\"card mx-n3 mx-md-0\">\n  <div class=\"card-body\" id=\"datepickerExample\">\n    <div class=\"alert alert-warning alert-icon\"><strong>Framework needed!</strong> Please note that you need to install <a class=\"alert-link\" href=\"https://sebgroup.github.io/ng-bootstrap/\" target=\"_blank\">@sebgroup/ng-bootstrap</a> which is a theme for <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/\" target=\"_blank\">ng-bootstrap</a> in order to use the datepickers in this example.</div>\n    <h4 class=\"card-title\">Simple datepicker with week number</h4>\n    <p class=\"mb-3\">For more info and examples please refer to ng-bootstrap <a href=\"https://ng-bootstrap.github.io/#/components/datepicker/overview\" target=\"_blank\">official documentation</a>.</p>\n    <app-datepicker-simple></app-datepicker-simple>\n    <exemplify [sources]=\"sources.simple\"></exemplify>\n  </div>\n  <div class=\"card-body\" id=\"datepickerInputExample\">\n    <h4 class=\"card-title\">Datepicker with input</h4>\n    <p class=\"mb-3\">For more info and examples please refer to ng-bootstrap <a href=\"https://ng-bootstrap.github.io/#/components/datepicker/overview\" target=\"_blank\">official documentation</a>.</p>\n    <app-datepicker-input></app-datepicker-input>\n    <exemplify [sources]=\"sources.input\"></exemplify>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/dropdowns/dropdowns.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/dropdowns/dropdowns.component.html ***!
          \*********************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"tabs\"><h2 class=\"my-3\">Selects and dropdowns</h2></a>\n<p class=\"lead\">The native html select element looks and behaves a bit differently depending on the browser and the device a user is on but it will always work and iOS and Android devices will use their own native components in it's place.</p>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"selectExample\">\n  <h4 class=\"card-header\">\n    Native html select\n  </h4>\n  <div class=\"card-body\">\n    <form>\n      <div class=\"row\">\n        <div class=\"col-12 col-sm-auto\">\n          <label for=\"native_select\">Example select</label>\n          <select class=\"custom-select\" id=\"native_select\">\n            <option>First</option>\n            <option>Second</option>\n            <option>Third</option>\n            <option>Forth</option>\n          </select>\n        </div>\n      </div>\n    </form>\n    <exemplify [selector]=\"'#selectExample .col-12 > *'\"></exemplify>\n  </div>\n</div>\n<div class=\"alert alert-warning alert-icon mt-5\">\n  <strong>Framework needed!</strong> Please note that the examples below uses a framework for Angular called ng-boostrap, if you'd like to use it please check out <a class=\"alert-link\" href=\"https://sebgroup.github.io/ng-bootstrap/\" target=\"_blank\">@sebgroup/ng-bootstrap</a> which is a theme for <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/\" target=\"_blank\">ng-bootstrap</a>.\n</div>\n<div class=\"alert alert-warning alert-icon mx-n3 mx-md-0\">\n  <strong>Mobile development!</strong> To make the experience extra crisp on mobile devices and more specifically to avoid the issue with scrolling content behind the dropdown on mobile devices, you should consider adding <a class=\"alert-link\" href=\"https://github.com/willmcpo/body-scroll-lock\" target=\"_blank\">body scroll lock</a> to your project when implementing dropdowns. An example implementation for angular can also be found on <a class=\"alert-link\" href=\"https://stackblitz.com/edit/seb-dropdown-body-scroll-lock\" target=\"_blank\">stack blitz</a>.\n  <br><br><strong>Dropdown cut off?</strong> If the dropdown is placed inside a container with overflow set to auto or hidden you should consider adding container=\"body\" to add the dropdown to the body element instead, this to avoid cutting off the dropdown menu.\n  <div class=\"custom-control custom-checkbox\">\n    <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheckInline\" [checked]=\"useContainerBody\" (change)=\"toggleContainer(useContainerBody)\">\n    <label class=\"custom-control-label\" for=\"customCheckInline\">Use container='body'</label>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"dropdownExample\">\n  <h4 class=\"card-header\">\n    Angular dropdown select\n  </h4>\n  <div class=\"card-body\">\n    <form>\n      <div class=\"row\">\n        <div class=\"col-12 col-sm-auto\">\n          <label for=\"ngb_dropdown\">Example dropdown select</label>\n          <div ngbDropdown [container]=\"useContainerBody ? 'body' : 'null'\" (openChange)=\"toggleBodyLock($event, dropdownMenu)\">\n            <button class=\"btn btn-outline-primary w-100\" id=\"ngb_dropdown\" ngbDropdownToggle>{{selected ? selected:'select...'}}</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownExample\" class=\"w-100 mb-3\" #dropdownMenu>\n              <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"selected = option\" [ngClass]=\"{'active':selected === option}\">{{option}}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n    <code>\n      <p class=\"mt-3 mb-0\">Selected: {{selected | json}}</p>\n    </code>\n    <exemplify [selector]=\"'#dropdownExample .col-12 > *'\" [escapeStrings]=\"[' ngbDropdownToggle', ' ngbDropdownMenu',' ngbDropdown', '[ngClass]']\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"multiselectExample\">\n  <h4 class=\"card-header\">\n    Angular multi-select\n  </h4>\n  <div class=\"card-body\">\n    <form>\n      <div class=\"row\">\n        <div class=\"col-12 col-sm-auto\">\n          <label for=\"ngb_multiselect\">Example multi-select</label>\n          <div ngbDropdown #multiSelect=\"ngbDropdown\" [container]=\"useContainerBody ? 'body' : 'null'\">\n            <button ngClass=\"{{classes ? classes:'btn btn-secondary w-100'}}\" id=\"ngb_multiselect\" ngbDropdownToggle>{{selectedMulti.length === 0 ? 'select...': selectedMulti.length === 1 ? selectedMulti[0]: selectedMulti.length + ' selected'}}</button>\n            <div ngbDropdownMenu aria-labelledby=\"ngb_multiselect\" class=\"w-100 mb-3\">\n              <div class=\"dropdown-control\">\n                <div class=\"row mb-2 d-sm-none\">\n                  <div class=\"col text-right\">\n                    <span>Close</span><i class=\"far fa-times ml-2\"></i>\n                  </div>\n                </div>\n                <div class=\"btn-group w-100\">\n                  <button class=\"btn btn-sm btn-secondary w-100\" (click)=\"$event.stopPropagation();deselectAll()\">None</button>\n                  <button class=\"btn btn-sm btn-secondary w-100\" (click)=\"$event.stopPropagation();selectAll()\">All</button>\n                </div>\n                <div class=\"dropdown-divider\"></div>\n              </div>\n              <div class=\"dropdown-multi-select-options\">\n                <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"$event.stopPropagation();select(option)\" [ngClass]=\"{'active':selectedMulti.indexOf(option) !== -1}\">{{option}}</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n    <code>\n      <p class=\"mt-3 mb-0\">Selected: {{selectedMulti | json}}</p>\n    </code>\n    <exemplify [selector]=\"'#multiselectExample .col-12 > *'\" [escapeStrings]=\"[' ngbDropdownToggle', ' ngbDropdownMenu',' ngbDropdown', '[ngClass]']\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"dropdownSizeExample\">\n  <h4 class=\"card-header\">\n    Angular dropdown select sizing\n  </h4>\n  <div class=\"card-body\">\n    <form>\n      <div class=\"row\">\n        <div class=\"col-12 col-sm-auto\">\n          <label for=\"dropdownSmall\">Small dropdown select</label>\n          <div ngbDropdown [container]=\"useContainerBody ? 'body' : 'null'\">\n            <button class=\"btn btn-secondary btn-sm w-100\" id=\"dropdownSmall\" ngbDropdownToggle>{{selected ? selected:'select...'}}</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownSmall\" class=\"w-100 mb-3\">\n              <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"selected = option\" [ngClass]=\"{'active':selected === option}\">{{option}}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 col-sm-auto\">\n          <label for=\"dropdownNormal\">Normal dropdown select</label>\n          <div ngbDropdown [container]=\"useContainerBody ? 'body' : 'null'\">\n            <button class=\"btn btn-secondary w-100\" id=\"dropdownNormal\" ngbDropdownToggle>{{selected ? selected:'select...'}}</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownNormal\" class=\"w-100 mb-3\">\n              <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"selected = option\" [ngClass]=\"{'active':selected === option}\">{{option}}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 col-sm-auto\">\n          <label for=\"dropdownLarge\">Large dropdown select</label>\n          <div ngbDropdown [container]=\"useContainerBody ? 'body' : 'null'\">\n            <button class=\"btn btn-secondary btn-lg w-100\" id=\"dropdownLarge\" ngbDropdownToggle>{{selected ? selected:'select...'}}</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownLarge\" class=\"w-100 mb-3\">\n              <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"selected = option\" [ngClass]=\"{'active':selected === option}\">{{option}}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n    <code>\n      <p class=\"mt-3 mb-0\">Selected: {{selected | json}}</p>\n    </code>\n    <exemplify [selector]=\"'#dropdownSizeExample .col-12 > *'\" [escapeStrings]=\"[' ngbDropdownToggle', ' ngbDropdownMenu',' ngbDropdown', '[ngClass]']\"></exemplify>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/forms/forms.component.html": 
        /*!*************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/forms/forms.component.html ***!
          \*************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"forms\"><h2 class=\"my-3\">Forms</h2></a>\n<p class=\"lead\">Below you'll find some examples of forms and different form elements, check <a href=\"https://getbootstrap.com/docs/4.0/components/forms/#overview\" target=\"_blank\">bootstrap docs</a> for more info and examples.</p>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"formExample\">\n  <div class=\"card-body\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlSelect1\">Example select</label>\n        <select class=\"custom-select\" id=\"exampleFormControlSelect1\">\n          <option>1</option>\n          <option>2</option>\n          <option>3</option>\n          <option>4</option>\n          <option>5</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlSelect2\">Example multiple select</label>\n        <select multiple class=\"custom-select\" id=\"exampleFormControlSelect2\">\n          <option>1</option>\n          <option>2</option>\n          <option>3</option>\n          <option>4</option>\n          <option>5</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlTextarea1\">Example textarea</label>\n        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleTextarea\">Example textarea</label>\n        <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"customFile\">File input</label>\n        <div class=\"custom-file\">\n          <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"handleFileInput($event.target.files)\">\n          <label class=\"custom-file-label\" for=\"customFile\" aria-describedby=\"customFileHelp\">{{fileName}}</label>\n          <small id=\"customFileHelp\" class=\"form-text text-muted\">Please note that this example requires additional javascript for the file name to appear.</small>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputFile\">File input</label>\n        <input type=\"file\" class=\"form-control-file\" id=\"exampleInputFile\" aria-describedby=\"fileHelp\">\n        <small id=\"fileHelp\" class=\"form-text text-muted\">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    </form>\n    <exemplify [selector]=\"'#formExample form'\"></exemplify>\n  </div>\n</div>\n<h2>Form layouts</h2>\n<p class=\"lead\">Since Bootstrap applies <code>display: block</code> and <code>width: 100%</code> to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.\n</p>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"formExampleGroups\">\n  <h4 class=\"card-header\">Form groups</h4>\n  <div class=\"card-body\">\n    <p>The <code>.form-group</code> class is the easiest way to add some structure to forms. Its only purpose is to provide <code>margin-bottom</code> around a label and control pairing. As a bonus, since it’s a class you can use it with <code>&lt;fieldset&gt;</code>s, <code>&lt;div&gt;</code>s, or nearly any other element.</p>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"formGroupExampleInput\">Example label</label>\n        <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"Example input\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formGroupExampleInput2\">Another label</label>\n        <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\" placeholder=\"Another input\">\n      </div>\n    </form>\n    <exemplify [selector]=\"'#formExampleGroups form'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"formExampleGridSimple\">\n  <h4 class=\"card-header\">Form grid</h4>\n  <div class=\"card-body\">\n    <p>More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.</p>\n    <form>\n      <div class=\"row\">\n        <div class=\"col\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\n        </div>\n        <div class=\"col\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\n        </div>\n      </div>\n    </form>\n    <exemplify [selector]=\"'#formExampleGridSimple form'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"formExampleRowSimple\">\n  <h4 class=\"card-header\">Form row</h4>\n  <div class=\"card-body\">\n    <p>You may also swap <code>.row</code> for <code>.form-row</code>, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.</p>\n    <form>\n      <div class=\"form-row\">\n        <div class=\"col\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\n        </div>\n        <div class=\"col\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\n        </div>\n      </div>\n    </form>\n    <exemplify [selector]=\"'#formExampleRowSimple form'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"formExampleGridAdvanced\">\n  <h4 class=\"card-header\">Using the grid system</h4>\n  <div class=\"card-body\">\n    <p>More complex layouts can also be created with the grid system.</p>\n    <form>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputEmail4\">Email</label>\n          <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\n        </div>\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputPassword4\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputAddress\">Address</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputAddress2\">Address 2</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\">\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-6\">\n          <label for=\"inputCity\">City</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputCity\">\n        </div>\n        <div class=\"form-group col-md-4\">\n          <label for=\"inputState\">State</label>\n          <select id=\"inputState\" class=\"custom-select\">\n            <option selected>Choose...</option>\n            <option>...</option>\n          </select>\n        </div>\n        <div class=\"form-group col-md-2\">\n          <label for=\"inputZip\">Zip</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputZip\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"custom-control custom-checkbox\">\n          <input class=\"custom-control-input\" type=\"checkbox\" id=\"gridCheck\">\n          <label class=\"custom-control-label\" for=\"gridCheck\">\n            Check me out\n          </label>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n    </form>\n    <exemplify [selector]=\"'#formExampleGridAdvanced form'\"></exemplify>\n  </div>\n</div>\n<h2 class=\"mb-3\">Custom forms</h2>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"formExampleCustomCheckbox\">\n  <h4 class=\"card-header\">Checkboxes</h4>\n  <div class=\"card-body\">\n    <p>For even more customization and cross browser consistency, use custom form elements to replace the browser defaults. They’re built on top of semantic and accessible markup, so they’re solid replacements for any default form control.</p>\n    <form>\n      <div class=\"custom-control custom-checkbox\">\n        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n        <label class=\"custom-control-label\" for=\"customCheck1\">Check this custom checkbox</label>\n      </div>\n    </form>\n    <exemplify [selector]=\"'#formExampleCustomCheckbox .custom-control'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"formExampleCustomRadio\">\n  <h4 class=\"card-header\">Radios</h4>\n  <div class=\"card-body\">\n    <form>\n      <div class=\"custom-control custom-radio\">\n        <input type=\"radio\" id=\"customRadio1\" name=\"customRadio\" class=\"custom-control-input\">\n        <label class=\"custom-control-label\" for=\"customRadio1\">Toggle this custom radio</label>\n      </div>\n      <div class=\"custom-control custom-radio\">\n        <input type=\"radio\" id=\"customRadio2\" name=\"customRadio\" class=\"custom-control-input\">\n        <label class=\"custom-control-label\" for=\"customRadio2\">Or toggle this other custom radio</label>\n      </div>\n    </form>\n    <exemplify [selector]=\"'#formExampleCustomRadio .custom-control'\"></exemplify>\n  </div>\n</div>\n<h2 class=\"px-3 px-md-0 mb-3\">Control sizing</h2>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"formExampleSizing\">\n  <div class=\"card-body\">\n    <p>Set heights using classes like <code>.form-control-lg</code>, and set widths using grid column classes like <code>.col-lg-*</code>.</p>\n    <h4 class=\"mt-3\">Inputs</h4>\n    <input class=\"form-control form-control-lg mb-2\" type=\"text\" placeholder=\".form-control-lg\">\n      <input class=\"form-control mb-2\" type=\"text\" placeholder=\"Default input\">\n      <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\".form-control-sm\">\n    <exemplify [selector]=\"'#formExampleSizing input'\"></exemplify>\n    <h4 class=\"mt-3\">Selects</h4>\n      <select class=\"custom-select custom-select-lg mb-2\">\n        <option>Large select</option>\n      </select>\n      <select class=\"custom-select mb-2\">\n        <option>Default select</option>\n      </select>\n      <select class=\"custom-select custom-select-sm\">\n        <option>Small select</option>\n      </select>\n      <exemplify [selector]=\"'#formExampleSizing select'\"></exemplify>\n  </div>\n</div>\n<h2 class=\"mb-3\">Validation</h2>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <p>The example below is just a static example of different validation errors. In short bootstrap uses native <code>:invalid</code> and <code>:valid</code> form states together with <code>.was-validated</code> (usually applied to form) to apply the styles and it's also possible to use <code>.is-invalid</code>, <code>.is-valid</code> and <code>.invalid-feedback</code> when validated on the sever. More examples will be added in the future and in most cases validation will be enhanced through a framework like Angular or React which also complicates things a bit,, but we'll try to add real examples soon.</p>\n    <form>\n      <div class=\"form-row\">\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"validationServer01\">First name</label>\n          <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer01\" placeholder=\"First name\" value=\"Mark\" required>\n          <div class=\"valid-feedback\">\n            Looks good!\n          </div>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"validationServer02\">Last name</label>\n          <input type=\"text\" class=\"form-control is-valid\" id=\"validationServer02\" placeholder=\"Last name\" value=\"Otto\" required>\n          <div class=\"valid-feedback\">\n            Looks good!\n          </div>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <label for=\"validationServerUsername\">Username</label>\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend is-invalid\">\n              <span class=\"input-group-text\" id=\"inputGroupPrepend3\">@</span>\n            </div>\n            <input type=\"text\" class=\"form-control is-invalid input-border-right\" id=\"validationServerUsername\" placeholder=\"Username\" aria-describedby=\"inputGroupPrepend3\" required>\n            <div class=\"invalid-feedback\">\n              Please choose a username.\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col-md-6 mb-3\">\n          <label for=\"validationServer03\">City</label>\n          <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer03\" placeholder=\"City\" required>\n          <div class=\"invalid-feedback\">\n            Please provide a valid city.\n          </div>\n        </div>\n        <div class=\"col-md-3 mb-3\">\n          <label for=\"validationServer04\">State</label>\n          <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer04\" placeholder=\"State\" required>\n          <div class=\"invalid-feedback\">\n            Please provide a valid state.\n          </div>\n        </div>\n        <div class=\"col-md-3 mb-3\">\n          <label for=\"validationServer05\">Zip</label>\n          <input type=\"text\" class=\"form-control is-invalid\" id=\"validationServer05\" placeholder=\"Zip\" required>\n          <div class=\"invalid-feedback\">\n            Please provide a valid zip.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"col-md-6 mb-3\">\n          <label for=\"validationServer06\">Other</label>\n          <textarea class=\"form-control is-invalid\" rows=\"3\" id=\"validationServer06\" placeholder=\"Text\" required></textarea>\n          <div class=\"invalid-feedback\">\n            Please add a comment.\n          </div>\n        </div>\n        <div class=\"col-md-3 mb-3\">\n          <label for=\"validationServer07\">Select</label>\n          <select class=\"custom-select is-invalid\" id=\"validationServer07\"><option>Invalid dropdown</option></select>\n          <div class=\"invalid-feedback\">\n            Please choose something.\n          </div>\n        </div>\n        <div class=\"col-md-3 mb-3\">\n          <label for=\"validationServer07\">Dropdown</label>\n          <div ngbDropdown class=\"is-invalid\">\n            <button class=\"btn btn-outline-primary w-100\" id=\"dropdownExample\" ngbDropdownToggle>{{selected ? selected:'select...'}}</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownExample\" class=\"w-100 mb-3\">\n              <button *ngFor=\"let option of options\" class=\"dropdown-item\" (click)=\"selected = option\" [ngClass]=\"{'active':selected === option}\">{{option}}</button>\n            </div>\n          </div>\n          <div class=\"invalid-feedback\">\n            Please choose something.\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-12 col-md-auto\">\n          <div class=\"custom-control custom-checkbox\">\n            <input type=\"checkbox\" class=\"custom-control-input is-invalid\" id=\"invalidCheck3\">\n            <label class=\"custom-control-label\" for=\"invalidCheck3\">Agree to terms and conditions</label>\n            <div class=\"invalid-feedback\">\n              You must agree before submitting.\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-12 col-md-auto\">\n          <div class=\"custom-control custom-radio\">\n            <input type=\"radio\" class=\"custom-control-input is-invalid\" id=\"customControlValidation2\" name=\"radio-stacked\" required>\n            <label class=\"custom-control-label\" for=\"customControlValidation2\">Toggle this custom radio</label>\n          </div>\n          <div class=\"custom-control custom-radio mb-3\">\n            <input type=\"radio\" class=\"custom-control-input is-invalid\" id=\"customControlValidation3\" name=\"radio-stacked\" required>\n            <label class=\"custom-control-label\" for=\"customControlValidation3\">Or toggle this other custom radio</label>\n            <div class=\"invalid-feedback\">Please choose one.</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-auto\">\n          <div class=\"alert alert-danger alert-icon\">\n            <h5 class=\"alert-heading\">Make sure you've entered the correct information</h5>\n            Here's a perfect place to explain what's wrong!\n          </div>\n        </div>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\">Submit form</button>\n    </form>\n  </div>\n</div>\n<h2 class=\"mb-3\">Advanced validation with progress</h2>\n<div class=\"card mb-4 angular-validation mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <p>Basic validation rules like <code>required</code>, <code>minlength</code> and <code>pattern</code> etc. provided by HTML and browsers natively for inputs are awesome for validation but they're not that user friendly or intuitive. Using a framework like Angular we can enhance the native behavior and extend it with our on validation rules. In the following example we've made it a bit more clever just showing one error at a time and we've also added custom validation for personal identity number.</p>\n    <p>Validation progress can be shown by applying one of the following classes to the feedback element: <code>progress-0</code> for 0%, <code>progress-10</code> for 10%, <code>progress-20</code> for 20% and so on up till 100%. There's also another type of feedback besides <code>invalid-feedback</code> and <code>valid-feedback</code> called <code>progress-feedback</code> that will change color depending on the p value provided.</p>\n    <div class=\"alert alert-warning alert-icon\"><strong>Framework needed!</strong> Please note that the examples below uses angular but similar behavior can be achieved using other frameworks as well.</div>\n    <form #loginForm=\"ngForm\" novalidate autocomplete=\"off\">\n      <div class=\"form-row\">\n        <div class=\"form-group col-12 col-sm-4 col-md-auto col-lg-3\">\n          <label for=\"personalIdInput\">Personal Identity number</label>\n          <input type=\"tel\" [(ngModel)]=\"personalIdentityNumber\"\n                 [ngClass]=\"{'is-invalid':!personalIdentityNumberInput.valid && personalIdentityNumberInput.lostFocus, 'is-valid': personalIdentityNumberInput.valid}\"\n                 name=\"personalIdentityNumber\"\n                 autocomplete=\"new-password\"\n                 class=\"form-control\"\n                 id=\"personalIdInput\"\n                 aria-describedby=\"personalIdHelp\"\n                 #personalIdentityNumberInput=\"ngModel\"\n                 personalIdentityNumberCheck\n                 placeholder=\"YYYYMMDDXXXX\" required\n                 (keydown)=\"onKeyDownPreventNonDigits($event)\"\n                 (keyup)=\"onValueChange()\"\n                 (change)=\"onValueChange()\"\n                 (focusout)=\"personalIdentityNumberInput.lostFocus = true\">\n          <div *ngIf=\"!personalIdentityNumberInput.lostFocus && !personalIdentityNumberInput.valid\" class=\"{{'progress-feedback progress-success text-muted progress-' + Math.floor((personalIdentityNumber.length/1.2)) + (Math.floor((personalIdentityNumber.length/1.2)) === 0 ? '':'0')}}\" id=\"personalIdHelp\">Enter personal id, 10 digits</div>\n          <div class=\"{{personalIdentityNumberInput.valid ? 'valid-feedback ' : 'invalid-feedback ' + 'progress-' + Math.floor((personalIdentityNumber.length/1.2)) + (Math.floor((personalIdentityNumber.length/1.2)) === 0 ? '':'0')}}\">\n            {{personalIdentityNumberInput.valid ? 'Looks good!' : (personalIdentityNumberInput.errors | validationMessage)}}\n          </div>\n        </div>\n      </div>\n      <div class=\"form-row\">\n        <div class=\"form-group col-12 col-sm-4 col-md-auto col-lg-3\">\n          <label for=\"passwordId\">Create password</label>\n          <input type=\"password\" [(ngModel)]=\"password\"\n                 [ngClass]=\"{'is-invalid':!passwordInput.valid && passwordInput.lostFocus}\"\n                 autocomplete=\"new-password\"\n                 name=\"password\"\n                 class=\"form-control\"\n                 id=\"passwordId\"\n                 aria-describedby=\"passwordHelp\"\n                 #passwordInput=\"ngModel\" required\n                 maxlength=\"10\"\n                 minlength=\"4\"\n                 (focusout)=\"passwordInput.lostFocus = true\">\n          <div class=\"{{(password.length <= 3 && passwordInput.lostFocus ? 'invalid':'progress') + '-feedback progress-' + (password.length === 0 ? '0': password.length <= 4 ? '10': (password.length <= 6 ? '30': (password.length <= 8 ? '60': (password.length < 10 ? '100': '100'))))}}\" id=\"passwordHelp\">{{password.length === 0 ? 'Enter desired password': (password.length <= 3 ? 'To short': (password.length <= 6 ? 'Weak password': (password.length <= 8 ? 'Okay password': (password.length <= 10 ? 'Strong password': ''))))}}</div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/icons/icons.component.html": 
        /*!*************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/icons/icons.component.html ***!
          \*************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<h2 class=\"my-3\">Icons</h2>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"alert alert-warning alert-icon\">\n      <strong>Framework needed!</strong> This library doesn't include any icons so you need to install Font Awesome 5, which is the icon framework we're using, separately. We're using the regular version (previously we use the light version), if you're on SEB:s network you can read more about our license <a class=\"alert-link external\" href=\"https://github.sebank.se/seb-common/licenses/blob/master/font-awesome.md\" target=\"_blank\">here</a> otherwise contact <a class=\"alert-link\" href=\"mailto:robert.hjalmers@seb.se\">Robert Hjalmers</a> for more info.\n    </div>\n    <div class=\"alert alert-info alert-icon\">\n      <strong>Using angular?</strong> Great! Then you should follow <a class=\"alert-link external\" href=\"https://github.sebank.se/seb-common/licenses/wiki/Install-and-use-with-Angular\" target=\"_blank\">these instructions</a> (if you're on SEB:s network) on how to use Font Awesome's Angular lib. If you don't have access to SEB:s network you can read more about how to get started with the Font Awesome framework for Angular <a class=\"alert-link external\" href=\"https://github.com/FortAwesome/angular-fontawesome\" target=\"_blank\">here</a>.\n    </div>\n    <p>In order to try out Font Awesome 5 you need to install the icon framework. Once you've added the framework, you'll be able to use the icons with the following markup: <code>&lt;i class=&quot;far fa-print&quot;&gt;&lt;/i&gt;</code> and change <code>print</code> to the name of the icon you'd like to use (see some of the available icons below).</p>\n    <h4>Icons</h4>\n    <div class=\"form-group row\">\n      <div class=\"col-12 col-md-auto\">\n        <label for=\"search_icon_input\">Search</label>\n        <input id=\"search_icon_input\" name=\"iconSearchString\" [(ngModel)]=\"iconSearchString\" (ngModelChange)=\"filterIcons($event)\" class=\"form-control\" type=\"text\" placeholder=\"Type to filter icons\">\n      </div>\n    </div>\n    <div class=\"row icon-list\">\n      <div class=\"col-6 col-md-4\" *ngFor=\"let icon of filteredIcons\">\n        <i class=\"{{'far fa-' + icon}}\"></i> <span class=\"ml-2\">{{icon}}</span>\n      </div>\n    </div>\n    <h5 class=\"mt-4\">Sizing</h5>\n    <p>Icons are available in 4 different sizes, add <code>fa-xx</code>(replace with one of the classes below) to adjust icon size. Even though bigger sizes are available we should avoid using them and consider using pictograms instead.</p>\n    <div class=\"sizes\">\n      <div><i class=\"far fa-heart fa-xs\"></i><span>fa-xs </span><small class=\"text-muted\">(extra small, 12 px)</small></div>\n      <div><i class=\"far fa-heart\"></i><small class=\"text-muted\">(normal, 16 px)</small></div>\n      <div><i class=\"far fa-heart fa-lg\"></i><span>fa-lg </span><small class=\"text-muted\">(large, 24 px)</small></div>\n      <div><i class=\"far fa-heart fa-2x\"></i><span>fa-2x </span><small class=\"text-muted\">(2x, 32 px)</small></div>\n    </div>\n    <h5 class=\"mt-4\">Do's and don'ts</h5>\n    <label>Do</label>\n    <ul>\n      <li>Use icons when they add value</li>\n      <li>Use Font Awesome 5 for generic system icons up to 32 px (fa-2x)</li>\n    </ul>\n    <label>Don't</label>\n    <ul>\n      <li>Use Font Awesome for larger icons (bigger than 32 px), use pictograms (coming soon!)</li>\n      <li>Stack icons on top of each other</li>\n      <li>Add colors to icons other than <span class=\"text-success\">text-success</span>, <span class=\"text-warning\">text-warning</span> or <span class=\"text-danger\">text-danger</span> when applicable</li>\n    </ul>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/input-group/input-group.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/input-group/input-group.component.html ***!
          \*************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"inputGroup\"><h2 class=\"my-3\">Input group</h2></a>\n<div class=\"card mx-n3 mx-md-0\" #inputGroupExample>\n  <div class=\"card-body\">\n    <p>Place one add-on or button on either side of an input. You may also place one on both sides of an input. Use <code>.input-group-prepend</code> and/or <code>.input-group-append</code> inside an input group (<code>.input-group</code>), to group controls with an input field.</p>\n    <div>\n      <label for=\"prependBtn\">Prepend button</label>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <button class=\"btn btn-secondary\" type=\"button\">Button</button>\n        </div>\n        <input id=\"prependBtn\" type=\"text\" class=\"form-control\" placeholder=\"\" aria-label=\"\" aria-describedby=\"basic-addon1\">\n      </div>\n      <label for=\"appendBtn\">Append button</label>\n      <div class=\"input-group mb-3\">\n        <input id=\"appendBtn\" type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-secondary\" type=\"button\">Clear</button>\n          <button class=\"btn btn-primary\" type=\"button\">Ok</button>\n        </div>\n      </div>\n      <label for=\"appendStatic\">Append text/static content</label>\n      <div class=\"input-group mb-3\">\n        <input id=\"appendStatic\" type=\"text\" class=\"form-control\" aria-label=\"Card number\" placeholder=\"____ ____ ____ ____\" maxlength=\"16\">\n        <div class=\"input-group-append\">\n          <span class=\"input-group-text\">\n            <i class=\"far fa-credit-card\"></i>\n          </span>\n        </div>\n      </div>\n      <label for=\"appendPrependStatic\">Append and prepend text/static content</label>\n      <div class=\"input-group mb-3\">\n        <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">\n            <i class=\"far fa-dollar-sign\"></i>\n          </span>\n        </div>\n        <input id=\"appendPrependStatic\" type=\"number\" class=\"form-control text-right\" aria-label=\"Amount\">\n        <div class=\"input-group-append\">\n          <span class=\"input-group-text\">.00</span>\n        </div>\n      </div>\n      <label for=\"appendBtnIcon\">Append button icon</label>\n      <div class=\"input-group mb-3\">\n        <input id=\"appendBtnIcon\" type=\"text\" class=\"form-control\" aria-label=\"Date\" placeholder=\"yyyy-mm-dd\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-secondary\" type=\"button\">\n            <i class=\"far fa-calendar-alt\"></i>\n          </button>\n        </div>\n      </div>\n        <div style=\"max-width: 140px;\">\n            <label for=\"appendPrependBtnIcon\">Stepper</label>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"step = step - 1\">\n                  <i class=\"far fa-minus\"></i>\n                </button>\n              </div>\n            <input id=\"appendPrependBtnIcon\" type=\"tel\" class=\"form-control text-center\" [value]=\"step\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"step = step + 1\">\n                <i class=\"far fa-plus\"></i>\n              </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <exemplify [selector]=\"'.card-body > div'\"></exemplify>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/list-group/list-group.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/list-group/list-group.component.html ***!
          \***********************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"listGroup\"><h2 class=\"my-3\">List group</h2></a>\n<div class=\"card mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">List (flush)</h4>\n    <p>To get a list group with flush or table style, just add the class <code>list-group-flush</code> to a normal list-group.</p>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item bg-light font-weight-medium\">Lorem ipsum</li>\n      <li class=\"list-group-item\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales, nulla sed lobortis maximus, nisl massa vestibulum lectus, in tincidunt tellus elit vel neque. Vivamus ullamcorper auctor dignissim. Maecenas placerat, odio nec vestibulum pulvinar, tortor tellus cursus quam, sit amet vulputate est diam in justo.</p></li>\n      <li class=\"list-group-item\">Dolar sit amet</li>\n    </ul>\n    <exemplify [selector]=\"'ul.list-group-flush'\"></exemplify>\n  </div>\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Bullet list</h4>\n    <p>To get a list group with bullets, just add the class <code>list-group-bullet</code> to a normal list-group.</p>\n    <ul class=\"list-group list-group-bullet\">\n      <li class=\"list-group-item\">Lorem ipsum</li>\n      <li class=\"list-group-item\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales, nulla sed lobortis maximus, nisl massa vestibulum lectus, in tincidunt tellus elit vel neque. Vivamus ullamcorper auctor dignissim. Maecenas placerat, odio nec vestibulum pulvinar, tortor tellus cursus quam, sit amet vulputate est diam in justo.</p></li>\n      <li class=\"list-group-item\">Dolar sit amet</li>\n      <li class=\"list-group-item\"><strong class=\"mb-1 d-block\">Lorem ipsum</strong><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales, nulla sed lobortis maximus, nisl massa vestibulum lectus.</p></li>\n      <li class=\"list-group-item\"><strong class=\"mb-1 d-block\">Dolar sit amet</strong><p class=\"text-muted small\">Vivamus ullamcorper auctor dignissim. Maecenas placerat, odio nec vestibulum pulvinar, tortor tellus cursus quam, sit amet vulputate est diam in justo.</p></li>\n    </ul>\n    <exemplify [selector]=\"'ul.list-group-bullet'\"></exemplify>\n  </div>\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">Check list</h4>\n    <p>To get a list group with check icons, just add the class <code>list-group-check</code> to a normal list-group.</p>\n    <ul class=\"list-group list-group-check\">\n      <li class=\"list-group-item\">Lorem ipsum</li>\n      <li class=\"list-group-item\"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales, nulla sed lobortis maximus, nisl massa vestibulum lectus, in tincidunt tellus elit vel neque. Vivamus ullamcorper auctor dignissim. Maecenas placerat, odio nec vestibulum pulvinar, tortor tellus cursus quam, sit amet vulputate est diam in justo.</p></li>\n      <li class=\"list-group-item\">Dolar sit amet</li>\n      <li class=\"list-group-item\"><strong class=\"mb-1 d-block\">Lorem ipsum</strong><p class=\"text-muted small\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales, nulla sed lobortis maximus, nisl massa vestibulum lectus.</p></li>\n      <li class=\"list-group-item\"><strong class=\"mb-1 d-block\">Dolar sit amet</strong><p class=\"text-muted small\">Vivamus ullamcorper auctor dignissim. Maecenas placerat, odio nec vestibulum pulvinar, tortor tellus cursus quam, sit amet vulputate est diam in justo.</p></li>\n    </ul>\n    <exemplify [selector]=\"'ul.list-group-check'\"></exemplify>\n  </div>\n  <div class=\"card-body\" id=\"itemList\">\n    <h4 class=\"card-title\">Ordered list</h4>\n    <p>To get a ordered list, just add the class <code>list-group-ordered</code> to a normal list-group.</p>\n    <ol class=\"list-group list-group-ordered\">\n      <li class=\"list-group-item\">Lorem ipsum</li>\n      <li class=\"list-group-item\">Dolar sit amet <a href=\"#\">do something</a></li>\n      <li class=\"list-group-item active\"><strong class=\"mb-1 d-block\">This item is active</strong><p class=\"text-muted small\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales, nulla sed lobortis maximus, nisl massa vestibulum lectus, in tincidunt tellus elit vel neque. Vivamus ullamcorper auctor dignissim. Maecenas placerat, odio nec vestibulum pulvinar, tortor tellus cursus quam, sit amet vulputate est diam in justo.</p></li>\n      <li class=\"list-group-item disabled\">Disabled list item </li>\n    </ol>\n    <exemplify [selector]=\"'#itemList ol.list-group-ordered'\"></exemplify>\n  </div>\n  <div class=\"card-body\" id=\"itemListStates\">\n    <h4 class=\"card-title\">States for ordered list</h4>\n    <p>To set a state for a list item, just add one of the following classes to the list group item <code>list-group-item-success</code>, <code>list-group-item-warning</code> or <code>list-group-item-danger</code>.</p>\n    <ol class=\"list-group list-group-ordered\">\n      <li class=\"list-group-item list-group-item-success\">This is something successful or completed perhaps</li>\n      <li class=\"list-group-item list-group-item-warning\">This is something that's pending or incomplete</li>\n      <li class=\"list-group-item list-group-item-danger\">Here we have an error</li>\n    </ol>\n    <exemplify [selector]=\"'#itemListStates ol.list-group-ordered'\"></exemplify>\n  </div>\n  <div class=\"card-body\" id=\"actionList\">\n    <h4 class=\"card-title\">Ordered action list</h4>\n    <p>To get a ordered action list group, just add the class <code>list-group-ordered</code> to a normal list-group and replace <code>list-group-item</code> with <code>list-group-item-action</code>.</p>\n    <ol class=\"list-group list-group-ordered\">\n      <li class=\"list-group-item-action list-group-item-success\" tabindex=\"1\">Lorem ipsum</li>\n      <li class=\"list-group-item-action list-group-item-success\" tabindex=\"2\">Dolar sit amet <a href=\"#\">do something</a></li>\n      <li class=\"list-group-item-action active\" tabindex=\"3\"><strong class=\"mb-1 d-block\">This item is active</strong><p class=\"text-muted small\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales, nulla sed lobortis maximus, nisl massa vestibulum lectus, in tincidunt tellus elit vel neque. Vivamus ullamcorper auctor dignissim. Maecenas placerat, odio nec vestibulum pulvinar, tortor tellus cursus quam, sit amet vulputate est diam in justo.</p></li>\n      <li class=\"list-group-item-action disabled\">Disabled list item action</li>\n    </ol>\n    <exemplify [selector]=\"'#actionList ol.list-group-ordered'\"></exemplify>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/modals/modals.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/modals/modals.component.html ***!
          \***************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"modals\"><h2 class=\"my-3\">Modals</h2></a>\n<div class=\"alert alert-warning alert-icon mx-n3 mx-md-0\"><strong>Framework needed!</strong> Please note that the examples below is just a representation of how modals look and the needed markup. In order to use modals you need a framework to control when and how to show them. If you're using angular, please take a look at <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/\" target=\"_blank\">ng-bootstrap</a> and their <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/#/components/modal\" target=\"_blank\">modal component</a>.</div>\n<div class=\"alert alert-warning alert-icon mx-n3 mx-md-0\"><strong>Mobile development!</strong> To make the experience extra crisp on mobile devices and more specifically to avoid the issue with <a class=\"alert-link\" href=\"https://www.google.com/search?q=content+scrolling+behind+modal\" target=\"_blank\">scrolling content behind the modal</a>, you should consider adding <a class=\"alert-link\" href=\"https://github.com/willmcpo/body-scroll-lock\" target=\"_blank\">body scroll lock</a> to your project when implementing modals. An example implementation for angular can also be found on <a class=\"alert-link\" href=\"https://stackblitz.com/edit/seb-modal-body-scroll-lock\" target=\"_blank\">stack blitz</a>.</div>\n<div class=\"card mx-n3 mx-md-0\" id=\"modalExample\">\n  <h4 class=\"card-header\">Standard modal</h4>\n  <div class=\"card-body bg-secondary px-0\">\n    <div class=\"modal\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Modal title</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>Modal body text goes here.</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body pt-0\">\n    <exemplify [selector]=\"'#modalExample .modal'\"></exemplify>\n  </div>\n</div>\n<div class=\"card my-3 mx-n3 mx-md-0\">\n  <h4 class=\"card-header\">Modal with backdrop</h4>\n  <div class=\"card-body\"><p>Below is a example of a standard modal opened with a backdrop.</p>\n    <div class=\"row\">\n      <div class=\"col-12 col-sm col-md-auto\"><button class=\"btn btn-primary w-100\" (click)=\"open(content)\">Open modal</button></div>\n      <div class=\"col-12 col-sm col-md-auto mt-3 mt-sm-0\"><button class=\"btn btn-primary w-100\" (click)=\"open(content, {size:'lg'})\">Open large modal</button></div>\n    </div>\n  </div>\n</div>\n<div class=\"card my-3 mx-n3 mx-md-0\">\n  <h4 class=\"card-header\">Aside modal</h4>\n  <div class=\"card-body\">\n    <p>Add <code>modal-aside</code> class to the modal element together with either <code>modal-aside-right</code> or <code>modal-aside-left</code> to get a modal that will slide in from the side.<br>Ex. <code>&lt;div  class=&quot;modal modal-aside modal-aside-right&quot;&gt;...&lt;/div&gt;</code></p>\n    <div class=\"row\">\n      <div class=\"col-12 col-sm col-md-auto\"><button class=\"btn btn-primary w-100\" (click)=\"open(content, {windowClass:'modal-aside modal-aside-right'})\">Open aside modal</button></div>\n      <div class=\"col-12 col-sm col-md-auto mt-3 mt-sm-0\"><button class=\"btn btn-primary w-100\" (click)=\"open(content, {windowClass:'modal-aside modal-aside-left'})\">Open left aside modal</button></div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <h5>Large aside modal</h5>\n    <p>Add <code>modal-lg</code> class to the modal dialogue together with the above classes to get a larger modal that will slide in from the side.</p>\n    <div class=\"row\">\n      <div class=\"col-12 col-sm col-md-auto\"><button class=\"btn btn-primary w-100\" (click)=\"open(largeContent, {windowClass:'modal-aside modal-aside-right', size:'lg'})\">Open aside modal</button></div>\n      <div class=\"col-12 col-sm col-md-auto mt-3 mt-sm-0\"><button class=\"btn btn-primary w-100\" (click)=\"open(largeContent, {windowClass:'modal-aside modal-aside-left', size:'lg'})\">Open left aside modal</button></div>\n    </div>\n  </div>\n</div>\n<div class=\"card my-3 mx-n3 mx-md-0\">\n  <h4 class=\"card-header\">Fullscreen modal aka take-over</h4>\n  <div class=\"card-body\">\n    <p>Add <code>modal-fullscreen</code> class to the modal element to get a fullscreen modal.<br>Ex. <code>&lt;div  class=&quot;modal modal-fullscreen&quot;&gt;...&lt;/div&gt;</code></p>\n    <button class=\"btn btn-primary\" (click)=\"open(content, {windowClass:'modal-fullscreen'})\">Open fullscreen modal</button>\n  </div>\n</div>\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n  </div>\n  <div class=\"modal-body\">\n    <p>Modal body text goes here.</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modal.dismiss('Cross click')\">Close</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('Save click')\">Save changes</button>\n  </div>\n</ng-template>\n<ng-template #largeContent let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n  </div>\n  <div class=\"modal-body\">\n    <p>Modal body text goes here.</p>\n    <div class=\"bg-primary-element text-white align-self-center p-3\" style=\"width: 600px; height: 600px;\">\n      <p class=\"lead font-weight-normal\">The large aside modal will adjust it's width to the width of the content.<br/>\n      Max width = 768px<br/>\n      Min width = 320px\n      </p>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"modal.dismiss('Cross click')\">Close</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('Save click')\">Save changes</button>\n  </div>\n</ng-template>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/navbar/navbar.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/navbar/navbar.component.html ***!
          \***************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"navbar\"><h2 class=\"my-3\">Navbar</h2></a>\n<p class=\"lead px-3 px-md-0 mb-4\">Most applications won't need the navbar as the navbar will be provided by the application shell, however there might be cases where you need a standalone navbar/header for your app. For more examples please visit <a href=\"http://getbootstrap.com/docs/4.1/components/navbar/\" target=\"_blank\">official bootstrap docs</a>.</p>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"navbarThemeExample\">\n  <h4 class=\"card-header\">Color themes</h4>\n  <div class=\"card-body\">\n    <nav class=\"navbar navbar-dark bg-dark\">\n      <span class=\"navbar-brand\" href=\"#\">\n        Bootstrap\n      </span>\n      <span class=\"navbar-text\">\n          Navbar text with an inline element\n        </span>\n    </nav>\n    <exemplify [selector]=\"'#navbarThemeExample .navbar.navbar-dark.bg-dark'\"></exemplify>\n  </div>\n  <div class=\"card-body\">\n    <nav class=\"navbar navbar-light bg-white\">\n      <span class=\"navbar-brand\" href=\"#\">\n        Bootstrap\n      </span>\n      <span class=\"navbar-text\">\n          Navbar text with an inline element\n        </span>\n    </nav>\n    <exemplify [selector]=\"'#navbarThemeExample .navbar.navbar-light.bg-white'\"></exemplify>\n  </div>\n  <div class=\"card-body\">\n    <nav class=\"navbar navbar-light bg-light\">\n      <span class=\"navbar-brand\" href=\"#\">\n        Bootstrap\n      </span>\n      <span class=\"navbar-text\">\n          Navbar text with an inline element\n        </span>\n    </nav>\n    <exemplify [selector]=\"'#navbarThemeExample .navbar.navbar-light.bg-light'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"navbarFormsExample\">\n  <h4 class=\"card-header\">Forms</h4>\n  <div class=\"card-body\">\n    <nav class=\"navbar navbar-dark bg-dark\">\n      <span class=\"navbar-brand\" href=\"#\">\n        Bootstrap\n      </span>\n      <form class=\"form-row\">\n        <div class=\"col\">\n          <input class=\"form-control form-control-sm\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        </div>\n        <div class=\"col-auto\">\n          <button class=\"btn btn-sm btn-light\" type=\"submit\">Search</button>\n        </div>\n      </form>\n    </nav>\n    <exemplify [selector]=\"'#navbarFormsExample .navbar.navbar-dark.bg-dark'\"></exemplify>\n  </div>\n</div>";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/pagination/pagination.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/pagination/pagination.component.html ***!
          \***********************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"pagination\"><h2 class=\"my-3\">Pagination</h2></a>\n<div class=\"alert alert-warning alert-icon mx-n3 mx-md-0\"><strong>Framework needed!</strong> Please note that the example below is just a representation of how the pagination looks and the needed markup for it. In order to use pagination you need a framework to control when and how to show different pages. If you're using angular, please take a look at <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/\" target=\"_blank\">ng-bootstrap</a> and their <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/#/components/pagination\" target=\"_blank\">pagination component</a>.</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" #paginationExample id=\"paginationExample\">\n  <h4 class=\"card-header\">Basic example</h4>\n  <div class=\"card-body\">\n    <nav aria-label=\"...\">\n      <ul class=\"pagination\">\n        <li class=\"page-item disabled\">\n          <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-label=\"First\">\n            <i class=\"far fa-arrow-to-left\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"page-item disabled\">\n          <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-label=\"Previous\">\n            <i class=\"far fa-arrow-left\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n        </li>\n        <li class=\"page-item active\">\n          <a class=\"page-link\" href=\"#\">1 <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">5</a></li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n            <i class=\"far fa-arrow-right\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\" aria-label=\"Last\">\n            <i class=\"far fa-arrow-to-right\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <exemplify [selector]=\"'#paginationExample nav'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" #paginationSelectExample id=\"paginationSelectExample\">\n  <h4 class=\"card-header\">Responsive form example</h4>\n  <div class=\"card-body\">\n    <div class=\"row justify-content-end align-items-center\">\n      <div class=\"col-12 col-sm-auto mb-3 mb-sm-0\">\n        <form class=\"form-inline\">\n          <div class=\"form-group w-100\">\n            <label for=\"exampleFormControlSelect\" class=\"mr-sm-2\">Number of rows</label>\n            <select class=\"custom-select\" id=\"exampleFormControlSelect\">\n              <option>10</option>\n              <option>20</option>\n              <option>30</option>\n              <option>40</option>\n              <option>50</option>\n            </select>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-12 col-sm-auto\">\n        <nav aria-label=\"...\">\n          <ul class=\"pagination w-100 mb-sm-0\">\n            <li class=\"page-item disabled\">\n              <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-label=\"First\">\n                <i class=\"far fa-arrow-to-left\" aria-hidden=\"true\"></i>\n                <span class=\"sr-only\">First</span>\n              </a>\n            </li>\n            <li class=\"page-item disabled\">\n              <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-label=\"Previous\">\n                <i class=\"far fa-arrow-left\" aria-hidden=\"true\"></i>\n                <span class=\"sr-only\">Previous</span>\n              </a>\n            </li>\n            <li class=\"page-item active\">\n              <a class=\"page-link\" href=\"#\">1 <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n            <li class=\"page-item\"><a class=\"page-link\" href=\"#\">5</a></li>\n            <li class=\"page-item\">\n              <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n                <i class=\"far fa-arrow-right\" aria-hidden=\"true\"></i>\n                <span class=\"sr-only\">Next</span>\n              </a>\n            </li>\n            <li class=\"page-item\">\n              <a class=\"page-link\" href=\"#\" aria-label=\"Last\">\n                <i class=\"far fa-arrow-to-right\" aria-hidden=\"true\"></i>\n                <span class=\"sr-only\">Last</span>\n              </a>\n            </li>\n          </ul>\n        </nav>\n      </div>\n      <div class=\"col-12 col-sm-auto\">\n        <div class=\"small text-muted text-center text-sm-left w-100\">Showing record 1 to 10 out of 500.</div>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#paginationSelectExample nav'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" #paginationSizeExample id=\"paginationSizeExample\">\n  <h4 class=\"card-header\">Pagination sizes</h4>\n  <div class=\"card-body\">\n    <nav aria-label=\"...\">\n      <ul class=\"pagination pagination-sm\">\n        <li class=\"page-item disabled\">\n          <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-label=\"First\">\n            <i class=\"far fa-arrow-to-left\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"page-item disabled\">\n          <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-label=\"Previous\">\n            <i class=\"far fa-arrow-left\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n        </li>\n        <li class=\"page-item active\">\n          <a class=\"page-link\" href=\"#\">1 <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">5</a></li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n            <i class=\"far fa-arrow-right\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\" aria-label=\"Last\">\n            <i class=\"far fa-arrow-to-right\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <nav aria-label=\"...\">\n      <ul class=\"pagination\">\n        <li class=\"page-item disabled\">\n          <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-label=\"First\">\n            <i class=\"far fa-arrow-to-left\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"page-item disabled\">\n          <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-label=\"Previous\">\n            <i class=\"far fa-arrow-left\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n        </li>\n        <li class=\"page-item active\">\n          <a class=\"page-link\" href=\"#\">1 <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">5</a></li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n            <i class=\"far fa-arrow-right\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\" aria-label=\"Last\">\n            <i class=\"far fa-arrow-to-right\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <nav aria-label=\"...\">\n      <ul class=\"pagination pagination-lg\">\n        <li class=\"page-item disabled\">\n          <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-label=\"First\">\n            <i class=\"far fa-arrow-to-left\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"page-item disabled\">\n          <a class=\"page-link\" href=\"#\" tabindex=\"-1\" aria-label=\"Previous\">\n            <i class=\"far fa-arrow-left\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n        </li>\n        <li class=\"page-item active\">\n          <a class=\"page-link\" href=\"#\">1 <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n        <li class=\"page-item\"><a class=\"page-link\" href=\"#\">5</a></li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\n            <i class=\"far fa-arrow-right\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        <li class=\"page-item\">\n          <a class=\"page-link\" href=\"#\" aria-label=\"Last\">\n            <i class=\"far fa-arrow-to-right\" aria-hidden=\"true\"></i>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <exemplify [selector]=\"'#paginationSizeExample nav'\"></exemplify>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/radio-buttons/radio-buttons.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/radio-buttons/radio-buttons.component.html ***!
          \*****************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"radiobuttons\"><h2 class=\"my-3\">Radio buttons</h2></a>\n<p class=\"lead\">Below you'll find some examples of radio buttons and layout options using the grid (rows and columns), check the <a routerLink=\"/forms\">forms</a> section for more form elements or head over to <a href=\"https://getbootstrap.com/docs/4.0/components/forms/#overview\" target=\"_blank\">bootstrap docs</a> for more info and examples.</p>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"checkboxExample\">\n  <h4 class=\"card-header\">Standard radio button</h4>\n  <div class=\"card-body\">\n    <p>We use a standard input element with <code>type=\"radio\"</code> for radio buttons but we need to wrap it in a div to get the right style for the different states.</p>\n    <div class=\"custom-control custom-radio\">\n      <input type=\"radio\" class=\"custom-control-input\" name=\"radio\" id=\"customRadio1\">\n      <label class=\"custom-control-label\" for=\"customRadio1\">Select this custom radio button</label>\n    </div>\n    <div class=\"custom-control custom-radio\">\n      <input type=\"radio\" class=\"custom-control-input\" name=\"radio\" id=\"customRadio2\">\n      <label class=\"custom-control-label\" for=\"customRadio2\">Another option</label>\n    </div>\n    <div class=\"custom-control custom-radio\">\n      <input type=\"radio\" class=\"custom-control-input\" name=\"radio\" id=\"customRadioDisabled\" disabled>\n      <label class=\"custom-control-label\" for=\"customRadioDisabled\">This option is disabled</label>\n    </div>\n    <exemplify [selector]=\"'#checkboxExample .custom-control'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"checkboxLayoutExample\">\n  <h4 class=\"card-header\">Horizontal layout</h4>\n  <div class=\"card-body\">\n    <p>Use rows and columns to create a responsive layout, in the example below radio buttons will be placed inline on medium sized screens and up. On smaller screens the radio buttons will stack on top of each other, test by resizing the window. Use one of the following utility classes <code>.my-*</code>, <code>.mb-*</code> or <code>.mt-*</code> to add spacing between the different options, ie. <code>mb-2 mb-md-0</code> to get a small bottom margin on small screens and below.</p>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-auto mb-2 mb-md-0\">\n        <div class=\"custom-control custom-radio\">\n          <input type=\"radio\" name=\"radioGrid\" class=\"custom-control-input\" id=\"customRadioInline\">\n          <label class=\"custom-control-label\" for=\"customRadioInline\">Select this custom radio button</label>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-auto mb-2 mb-md-0\">\n        <div class=\"custom-control custom-radio\">\n          <input type=\"radio\" name=\"radioGrid\" class=\"custom-control-input\" id=\"customRadioInline1\">\n          <label class=\"custom-control-label\" for=\"customRadioInline1\">And this one</label>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-auto\">\n        <div class=\"custom-control custom-radio\">\n          <input type=\"radio\" name=\"radioGrid\" class=\"custom-control-input\" id=\"customRadioInline2\">\n          <label class=\"custom-control-label\" for=\"customRadioInline2\">Don't forget me</label>\n        </div>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#checkboxLayoutExample .row'\"></exemplify>\n  </div>\n</div>";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/skeleton-loader/skeleton-loader.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/skeleton-loader/skeleton-loader.component.html ***!
          \*********************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<h2 class=\"my-3\">Skeleton loader</h2>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <h4 class=\"card-header\">When and how to use them?</h4>\n  <div class=\"card-body\">\n    <p>Skeleton loaders are great placeholders for content that haven't finished loading yet, i.e. when you're waiting for the data to load, instead of just showing a blank page or a spinner, consider showing a skeleton (empty placeholder for content).</p>\n    <h5>We currently have templates for the following:</h5>\n    <ul class=\"list-group list-group-bullet\">\n      <li class=\"list-group-item\">Content (default)</li>\n      <li class=\"list-group-item\">Single field</li>\n      <li class=\"list-group-item\">Table</li>\n    </ul>\n    <p>Want another template? Please create an issue <a href=\"https://github.com/sebgroup/bootstrap/issues\" target=\"_blank\">here</a></p>\n    <h4>Include skeleton loaders in your project</h4>\n    <p>The skeleton loader styles are included by default if you import <code>'~@sebgroup/bootstrap/scss/bootstrap'</code> in your project (import to styles.scss if you're using angular-cli), to optimize your app you should however only import the parts you need (see import with minimal dependencies below).</p>\n    <exemplify [sources]=\"[{\n        'name':'default import',\n        'src':'@import \\'~@sebgroup/bootstrap/scss/bootstrap\\';\\n','lang':'css'\n        },{\n        'name':'import with minimal dependencies',\n        'src':'/* functions, variables and mixins don\\'t add css/size to project */\\n' +\n        '@import \\'~@sebgroup/bootstrap/scss/styles/functions\\';\\n'+\n        '@import \\'~@sebgroup/bootstrap/scss/variables\\';\\n'+\n        '@import \\'~@sebgroup/bootstrap/scss/mixins/mixins\\';\\n'+\n        '@import \\'~@sebgroup/bootstrap/scss/styles/skeleton-loader\\'; /* <-- ADD THIS */\\n'\n        ,'lang':'css'\n        }]\"></exemplify>\n  </div>\n</div>\n<h3 class=\"mb-3\">Examples</h3>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <h4 class=\"card-header\">Skeleton for content (default)</h4>\n  <div class=\"card-body\" id=\"skeletonLoader\">\n    <p>The skeleton loader for content will use the full width of its container, however the mask will never be wider than 768px (content should in general not be too wide otherwise it will be hard to read).</p>\n    <div class=\"skeleton-loader\"></div>\n    <exemplify [selector]=\"'#skeletonLoader .skeleton-loader'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <h4 class=\"card-header\">Skeleton fill</h4>\n  <div class=\"card-body\">\n    <p>If you have a single field, label or small content that you want to use a skeleton loader for, the <code>skeleton-loader-fill</code> class is what you're looking for. It's available in three different versions that all use the full width of the container but the height reflects the size for input fields, labels and buttons.</p>\n    <div id=\"skeletonLoaderFieldsSm\">\n      <h5>Small</h5>\n      <p>Perfect for labels and as a placeholder for content inside tables etc.</p>\n      <div class=\"skeleton-loader skeleton-loader-fill-sm\"></div>\n      <div style=\"width: 300px;\" class=\"my-3\">\n        <div class=\"skeleton-loader skeleton-loader-fill-sm\"></div>\n      </div>\n      <div class=\"skeleton-loader skeleton-loader-fill-sm\" style=\"width: 210px;\"></div>\n      <exemplify [selector]=\"'#skeletonLoaderFieldsSm > div'\" class=\"mb-4\"></exemplify>\n    </div>\n    <div id=\"skeletonLoaderFields\">\n      <h5>Standard (default)</h5>\n      <p>Perfect for input fields and buttons.</p>\n      <div class=\"skeleton-loader skeleton-loader-fill\"></div>\n      <exemplify [selector]=\"'#skeletonLoaderFields .skeleton-loader-fill'\" class=\"mb-4\"></exemplify>\n    </div>\n    <div id=\"skeletonLoaderFieldsFull\">\n      <h5>Full</h5>\n      <p>Perfect when you want to mask something bigger like a chart or diagram, you can also combine it with utility classes like <code>rounded-circle</code> to create more creative skeletons, and maybe use it as a placeholder for a pie chart or a profile picture?</p>\n      <div style=\"width: 100px; height: 100px;\">\n        <div class=\"skeleton-loader skeleton-loader-fill-full\"></div>\n      </div>\n      <div style=\"width:4.5rem; height: 4.5rem;\" class=\"mt-3\">\n        <div class=\"skeleton-loader skeleton-loader-fill-full rounded-circle\"></div>\n      </div>\n      <exemplify [selector]=\"'#skeletonLoaderFieldsFull > div'\"></exemplify>\n    </div>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <h4 class=\"card-header\">Skeleton for table</h4>\n  <div class=\"card-body\" id=\"skeletonLoaderTable\">\n    <p>Use <code>skeleton-loader-table</code> if you're loading or waiting for table data. The template uses the full width of it's container and the height will by default adjust it self according to the screen width unless you set a fixed height.</p>\n    <h5 class=\"mt-4\">Default</h5>\n    <div class=\"skeleton-loader skeleton-loader-table\"></div>\n    <h5 class=\"mt-4\">Match size of container</h5>\n    <p>If you want to define a custom size by putting the skeleton loader in an element with a fixed height and/or width try to stick to even numbers of 45 px for the height and add 1 px for the top border, i.e. <code>46</code>, <code>91</code>, <code>136</code> and so on.</p>\n    <div style=\"height: 136px; width: 320px;\">\n      <div class=\"skeleton-loader skeleton-loader-table\"></div>\n    </div>\n    <exemplify [selector]=\"'#skeletonLoaderTable .skeleton-loader'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <h4 class=\"card-header\">Delay animation</h4>\n  <div class=\"card-body\" id=\"delayExample\">\n    <p>If you're using multiple skeleton loaders on a page and they're spread across the screen horizontally you might want to consider adding a delay to the animation to get that smooth transition. There are three delay classes that can be added <code>delay-1</code>, <code>delay-2</code> and <code>delay-3</code>.</p>\n    <h5>Without delay (default)</h5>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"skeleton-loader skeleton-loader-fill-sm\"></div>\n      </div>\n      <div class=\"col\">\n        <div class=\"skeleton-loader skeleton-loader-fill-sm\"></div>\n      </div>\n      <div class=\"col\">\n        <div class=\"skeleton-loader skeleton-loader-fill-sm\"></div>\n      </div>\n      <div class=\"col\">\n        <div class=\"skeleton-loader skeleton-loader-fill-sm\"></div>\n      </div>\n    </div>\n    <h5 class=\"mt-4\">With delay</h5>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"skeleton-loader skeleton-loader-fill-sm\"></div>\n      </div>\n      <div class=\"col\">\n        <div class=\"skeleton-loader skeleton-loader-fill-sm delay-1\"></div>\n      </div>\n      <div class=\"col\">\n        <div class=\"skeleton-loader skeleton-loader-fill-sm delay-2\"></div>\n      </div>\n      <div class=\"col\">\n        <div class=\"skeleton-loader skeleton-loader-fill-sm delay-3\"></div>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#delayExample > .row'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <h4 class=\"card-header\">More examples</h4>\n  <div class=\"card-body\" id=\"tableExample\">\n    <h5>Table with header and partial data for totals.</h5>\n    <div class=\"custom-control custom-checkbox mb-3\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"showOverlayTable\" [(ngModel)]=\"showOverlay\" name=\"showOverlay\">\n      <label class=\"custom-control-label\" for=\"showOverlayTable\">Show real content overlay</label>\n    </div>\n    <table class=\"table table-hover mb-0\">\n      <thead>\n        <tr>\n          <th>Account</th>\n          <th>Currency</th>\n          <th>Balance</th>\n          <th class=\"text-right\">Actions</th>\n        </tr>\n        <tr class=\"bg-light\">\n          <th>n/a</th>\n          <th>n/a</th>\n          <th><div class=\"skeleton-loader skeleton-loader-fill-sm delay-1\"></div></th>\n          <th><div class=\"skeleton-loader skeleton-loader-fill-sm delay-3 float-right\" style=\"width: 110px;\"></div></th>\n        </tr>\n      </thead>\n    </table>\n    <table class=\"table table-hover mb-0 overlay-content\" *ngIf=\"showOverlay\">\n      <tbody>\n        <tr>\n          <td>5123456789</td>\n          <td>SEK</td>\n          <td>123 231,00</td>\n          <td class=\"text-right\"><button class=\"btn btn-outline-primary btn-sm mt-n2 mb-n1\">Transfer</button></td>\n        </tr>\n        <tr>\n          <td>5345345455</td>\n          <td>USD</td>\n          <td>291,00</td>\n          <td class=\"text-right\"><button class=\"btn btn-outline-primary btn-sm mt-n2 mb-n1\">Transfer</button></td>\n        </tr>\n        <tr>\n          <td>5123457642</td>\n          <td>GBP</td>\n          <td>3 251,23</td>\n          <td class=\"text-right\"><button class=\"btn btn-outline-primary btn-sm mt-n2 mb-n1\">Transfer</button></td>\n        </tr>\n        <tr>\n          <td>5978465466</td>\n          <td>EUR</td>\n          <td>141,57</td>\n          <td class=\"text-right\"><button class=\"btn btn-outline-primary btn-sm mt-n2 mb-n1\">Transfer</button></td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"skeleton-loader skeleton-loader-table\" style=\"height: 181px;\"></div>\n    <exemplify [selector]=\"'#tableExample > *:not(h5):not(exemplify)'\"></exemplify>\n  </div>\n  <div class=\"card-body\" id=\"formExample\">\n    <h5>Form with fields and button</h5>\n    <div class=\"custom-control custom-checkbox mb-3\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"showOverlayForm\" [(ngModel)]=\"showOverlay\" name=\"showOverlay\">\n      <label class=\"custom-control-label\" for=\"showOverlayForm\">Show real content overlay</label>\n    </div>\n    <form class=\"overlay-content\" *ngIf=\"showOverlay\">\n      <div class=\"row\">\n        <div class=\"form-group col-12 col-md-6\">\n          <label for=\"inputEmail4\">Email</label>\n          <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\n        </div>\n        <div class=\"form-group col-12 col-md-6\">\n          <label for=\"inputPassword4\">Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"inputAddress\">Address</label>\n        <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\">\n      </div>\n      <button class=\"btn btn-primary\">Save profile</button>\n    </form>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-6\">\n        <div class=\"skeleton-loader skeleton-loader-fill-sm mb-1 rounded\" style=\"max-width: 100px;\"></div>\n        <div class=\"skeleton-loader skeleton-loader-fill rounded\"></div>\n      </div>\n      <div class=\"col-12 col-md-6\">\n        <div class=\"skeleton-loader skeleton-loader-fill-sm mb-1 rounded delay-2\" style=\"max-width: 100px;\"></div>\n        <div class=\"skeleton-loader skeleton-loader-fill rounded delay-2\"></div>\n      </div>\n      <div class=\"col-12 mt-3\">\n        <div class=\"skeleton-loader skeleton-loader-fill-sm mb-1 rounded\" style=\"max-width: 140px;\"></div>\n        <div class=\"skeleton-loader skeleton-loader-fill rounded\"></div>\n      </div>\n      <div class=\"col-12 col-sm-auto\">\n        <div class=\"skeleton-loader skeleton-loader-fill rounded mt-3 w-100\" style=\"min-width: 120px;\"></div>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#formExample > .row'\"></exemplify>\n  </div>\n</div>\n<h3 class=\"mb-3\">Example with cards</h3>\n<div class=\"row mt-3 mt-xl-4\">\n    <div class=\"col-12 col-sm\">\n        <div class=\"card mx-n3 mx-md-0\">\n            <div class=\"card-body\">\n                <div class=\"skeleton-loader\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm mt-3 mt-sm-0\">\n        <div class=\"card mx-n3 mx-md-0\">\n            <div class=\"card-body\">\n                <div class=\"skeleton-loader\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row mt-3 mt-xl-4\">\n    <div class=\"col-12 col-sm\">\n        <div class=\"card mx-n3 mx-md-0\">\n            <div class=\"card-body\">\n                <div class=\"skeleton-loader\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm mt-3 mt-sm-0\">\n        <div class=\"card mx-n3 mx-md-0\">\n            <div class=\"card-body\">\n                <div class=\"skeleton-loader\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 col-sm mt-3 mt-sm-0\">\n        <div class=\"card mx-n3 mx-md-0\">\n            <div class=\"card-body\">\n                <div class=\"skeleton-loader\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/spinners/spinners.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/spinners/spinners.component.html ***!
          \*******************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<h2 class=\"my-3\">Spinners</h2>\n<div class=\"card mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <p>Some experimental spinners</p>\n    <div class=\"row\" id=\"loaders\">\n      <div class=\"col-auto\">\n        <div class=\"spinner spinner-sm\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner spinner-md\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner spinner-lg\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <!--<div class=\"col-auto\">\n        <div class=\"spinner-sq spinner-sm\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner-sq\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner-sq spinner-md\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner-sq spinner-lg\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>-->\n    </div>\n    <exemplify [selector]=\"'#loaders .col-auto > *'\"></exemplify>\n    <div class=\"row mt-5\" id=\"loadersButton\">\n      <div class=\"col-auto\">\n        <button class=\"btn btn-primary disabled\"><span class=\"mr-2\">Waiting</span>\n          <div class=\"spinner\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </button>\n      </div>\n      <!--<div class=\"col-auto\">\n        <button class=\"btn btn-primary disabled\"><span class=\"mr-2\">Waiting</span>\n          <div class=\"spinner-sq\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </button>\n      </div>-->\n      <div class=\"col-auto\">\n        <button class=\"btn btn-outline-primary disabled\"><span class=\"mr-2\">Waiting</span>\n          <div class=\"spinner\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </button>\n      </div>\n      <!--<div class=\"col-auto\">\n        <button class=\"btn btn-outline-primary disabled\"><span class=\"mr-2\">Waiting</span>\n          <div class=\"spinner-sq\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </button>\n      </div>-->\n      <div class=\"col-auto\">\n        <button class=\"btn btn-secondary disabled\"><span class=\"mr-2\">Waiting</span>\n          <div class=\"spinner\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </button>\n      </div>\n      <!--<div class=\"col-auto\">\n        <button class=\"btn btn-secondary disabled\"><span class=\"mr-2\">Waiting</span>\n          <div class=\"spinner-sq\" role=\"status\">\n            <span class=\"sr-only\">Loading...</span>\n          </div>\n        </button>\n      </div>-->\n    </div>\n    <exemplify [selector]=\"'#loadersButton .btn'\"></exemplify>\n  </div>\n</div>\n<h3 class=\"my-3\">Spinners on light grey background</h3>\n<div class=\"card mx-n3 mx-md-0\">\n  <div class=\"card-body bg-light\">\n    <p>Add class <code>light</code> to spinner element when placed against light background.</p>\n    <div class=\"row\" id=\"loadersLight\">\n      <div class=\"col-auto\">\n        <div class=\"spinner spinner-sm light\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner spinner-lg light\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <!--<div class=\"col-auto\">\n        <div class=\"spinner-sq spinner-sm\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <div class=\"spinner-sq spinner-lg\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>-->\n    </div>\n    <exemplify [selector]=\"'#loadersLight .col-auto > *'\"></exemplify>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/tables/tables.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/tables/tables.component.html ***!
          \***************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"tables\"><h2 class=\"my-3\">Tables</h2></a>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <h4 class=\"card-header\">Include styles in your project</h4>\n  <div class=\"card-body\">\n    <p>The styles are included by default if you import <code>'~@sebgroup/bootstrap/scss/bootstrap'</code> in your project (import to styles.scss if you're using angular-cli), to optimize your app you should however only import the parts you need (see import with minimal dependencies below).</p>\n    <exemplify [sources]=\"[{\n        'name':'default import',\n        'src':'@import \\'~@sebgroup/bootstrap/scss/bootstrap\\';\\n','lang':'css'\n        },{\n        'name':'import with minimal dependencies',\n        'src':'/* functions, variables and mixins don\\'t add css/size to project */\\n' +\n        '@import \\'~@sebgroup/bootstrap/scss/styles/functions\\';\\n'+\n        '@import \\'~@sebgroup/bootstrap/scss/variables\\';\\n'+\n        '@import \\'~@sebgroup/bootstrap/scss/mixins/mixins\\';\\n'+\n        '@import \\'~@sebgroup/bootstrap/scss/styles/tables\\'; /* <-- ADD THIS */\\n'\n        ,'lang':'css'\n        }]\"></exemplify>\n  </div>\n</div>\n<div class=\"alert alert-info alert-icon mx-n3 mx-md-0\"><strong>Want more table features?</strong> The examples below shows the markup and classes needed when using standard html tables, if you're using angular and want support for sorting, filtering, search, export to CSV etc. please check out <a class=\"alert-link\" href=\"https://hjalmers.github.io/angular-generic-table/\" target=\"_blank\">Angular Generic Table</a>.</div>\n<div class=\"row\">\n  <div class=\"col-md-6 mb-4\">\n    <h4>\n      Standard table\n    </h4>\n    <div class=\"card mx-n3 mx-md-0\" id=\"tableExample\">\n      <div class=\"card-body\">\n        <table class=\"table\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n        <exemplify [sources]=\"[{name:'markup', src: '<table class=&quot;table&quot;>...</table>', lang:'markup'}]\"></exemplify>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 mb-4\">\n    <h4>\n      Striped rows\n    </h4>\n    <div class=\"card mx-n3 mx-md-0\" id=\"tableExampleStriped\">\n      <div class=\"card-body\">\n        <table class=\"table table-striped\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n        <exemplify [sources]=\"[{name:'markup', src: '<table class=&quot;table table-striped&quot;>...</table>', lang:'markup'}]\"></exemplify>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 mb-4\">\n    <h4>Bordered table</h4>\n    <div class=\"card mx-n3 mx-md-0\" id=\"tableExampleBordered\">\n      <div class=\"card-body\">\n        <table class=\"table table-bordered\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@TwBootstrap</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">4</th>\n            <td colspan=\"2\">Larry the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n        <exemplify [sources]=\"[{name:'markup', src: '<table class=&quot;table table-bordered&quot;>...</table>', lang:'markup'}]\"></exemplify>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 mb-4\">\n    <h4>Hoverable rows</h4>\n    <div class=\"card mx-n3 mx-md-0\" id=\"tableExampleHover\">\n      <div class=\"card-body\">\n        <table class=\"table table-hover\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>The bird</td>\n            <td>@twitter</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td colspan=\"2\">Larry the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n        <exemplify [sources]=\"[{name:'markup', src: '<table class=&quot;table table-hover&quot;>...</table>', lang:'markup'}]\"></exemplify>\n      </div>\n    </div>\n  </div>\n  <div class=\"clearfix hidden-sm-down\"></div>\n  <div class=\"col-md-6 mb-4\">\n    <h4>Small table</h4>\n    <div class=\"card mx-n3 mx-md-0\" id=\"tableExampleSmall\">\n      <div class=\"card-body\">\n        <table class=\"table table-sm\">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <th scope=\"row\">1</th>\n            <td>Mark</td>\n            <td>Otto</td>\n            <td>@mdo</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Jacob</td>\n            <td>Thornton</td>\n            <td>@fat</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td>Larry</td>\n            <td>The bird</td>\n            <td>@twitter</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">3</th>\n            <td colspan=\"2\">Larry the Bird</td>\n            <td>@twitter</td>\n          </tr>\n          </tbody>\n        </table>\n        <exemplify [sources]=\"[{name:'markup', src: '<table class=&quot;table table-sm&quot;>...</table>', lang:'markup'}]\"></exemplify>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 mb-4\">\n    <h4>Expanded row</h4>\n    <div class=\"card mx-n3 mx-md-0\" id=\"tableExampleExpand\">\n      <div class=\"card-body\">\n        <table class=\"table table-sm table-expandable\">\n        <thead>\n        <tr>\n          <th>First Name</th>\n          <th>Last Name</th>\n          <th>Username</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr>\n          <td>Mark</td>\n          <td>Otto</td>\n          <td>@mdo</td>\n        </tr>\n        <tr class=\"row-open\">\n          <td>Jacob</td>\n          <td>Thornton</td>\n          <td>@fat</td>\n        </tr>\n        <tr class=\"row-expanded\">\n          <td colspan=\"3\">This row is expanded</td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">Larry the Bird</td>\n          <td>@twitter</td>\n        </tr>\n        </tbody>\n      </table>\n        <exemplify [sources]=\"[{name:'markup', src: '<table class=&quot;table table-expandable&quot;>...</table>', lang:'markup'}]\"></exemplify>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card mx-n3 mx-md-0\" id=\"sortIcons\">\n  <h4 class=\"card-header\">Table sorting</h4>\n  <div class=\"card-body\">\n    <p>You can add icons in two different ways:</p>\n    <ul class=\"list-group list-group-bullet mb-4\">\n      <li class=\"list-group-item\">Using predefined classes</li>\n      <li class=\"list-group-item\">Custom class names with table-sort mixin</li>\n    </ul>\n    <h5>Using sort class</h5>\n    <p>To let the user know that a column is sortable you can add <code>sort</code> to the column header (<code>&lt;th&gt;</code> element) together with <code>sort-asc</code> or <code>sort-desc</code> to indicate how it's sorted. If sorting for some reason is disabled you can also add <code>disabled</code> to the column header.</p>\n    <div class=\"alert alert-info alert-icon\">Please note that the table below is not really sortable (it's just plain html) and that it's just an example with the classes you need to add to get the icons.</div>\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <th class=\"sort\">Sort enabled</th>\n        <th class=\"sort sort-asc\">Sort ascending</th>\n        <th class=\"sort sort-desc\">Sort descending</th>\n        <th class=\"sort disabled\">Sort disabled</th>\n        <th>Default</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>Not sorted</td>\n        <td>Anthon</td>\n        <td>30</td>\n        <td>disabled</td>\n        <td>Normal column</td>\n      </tr>\n      <tr>\n        <td>Sort me</td>\n        <td>Bruno</td>\n        <td>20</td>\n        <td>not sortable right now</td>\n        <td>Not sortable</td>\n      </tr>\n      <tr>\n        <td>I'm sortable</td>\n        <td>Caesar</td>\n        <td>10</td>\n        <td>I'm disabled</td>\n        <td>Fixed order</td>\n      </tr>\n      </tbody>\n    </table>\n    <exemplify [selector]=\"'#sortIcons .table thead tr'\"></exemplify>\n  </div>\n  <div class=\"card-body\">\n    <h5>Using mixin and custom class names</h5>\n    <p>Perhaps you're using something else than boostrap or the table component you're using has a different markup. Then you can make use of our mixin.</p>\n    <exemplify [sources]=\"[{\n        'name':'mixin usage',\n        'src':'/* functions, variables and mixins don\\'t add css/size to project */\\n' +\n        '@import \\'~@sebgroup/bootstrap/scss/styles/functions\\';\\n'+\n        '@import \\'~@sebgroup/bootstrap/scss/variables\\';\\n'+\n        '@import \\'~@sebgroup/bootstrap/scss/mixins/mixins\\';\\n'+\n        '\\n'+\n        '/* class to wrap table sort (i.e. table class name) */\\n' +\n        '.custom-table-class {\\n' +\n        '/* include mixin\\n@include table-sort(\\n  $selector: \\'.sort\\',\\n  $asc-selector: \\'.sort-asc\\',\\n  $desc-selector: \\'.sort-desc\\',\\n  $disabled-selector: \\'.disabled\\'\\n) */\\n' +\n        '  @include table-sort(\\'.sort-class\\', \\'.sort-asc-class\\', \\'.sort-desc-class\\',\\'.sort-disabled-class\\');\\n' +\n        '}'\n        ,'lang':'css'\n        }]\"></exemplify>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/tabs/tabs.component.html": 
        /*!***********************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/tabs/tabs.component.html ***!
          \***********************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"tabs\"><h2 class=\"my-3\">Tabs</h2></a>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <div class=\"card-body\">\n    <p>Use tabs to enable easy switching between different content without navigating away. Tabs can be used on small screens like mobile devices too but consider switching to <a routerLink=\"/dropdowns\">dropdowns</a> or a regular <a routerLink=\"/dropdowns\">select</a> instead when tabs are displayed on mobiles.</p>\n    <div class=\"alert alert-warning alert-icon\"><strong>Framework needed!</strong> Please note that the example below is just a representation of how tabs look and the needed markup. In order to use tabs you need a framework to control when and how to show them. If you're using angular, please take a look at <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/\" target=\"_blank\">ng-bootstrap</a> and their <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/#/components/tabs\" target=\"_blank\">tabs component</a> or use <code>*ngFor</code> to loop through the items and render them as tabs.</div>\n    <ul class=\"nav nav-tabs\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"#\">Active</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <exemplify [selector]=\"'.nav'\"></exemplify>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/toast-notifications/toast-notifications.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/toast-notifications/toast-notifications.component.html ***!
          \*****************************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<h2 class=\"my-3\">Toast notifications</h2>\n<div class=\"card my-3 mx-n3 mx-md-0\">\n  <h4 class=\"card-header pb-o\">Basic usage</h4>\n  <div class=\"card-body\">\n    <p>Bootstrap provides classes for toasts i.e. you can just add <code>.toast</code> to an element get the basic appearance of a toast, however SEB:s take on toast notifications and their design is a bit simplified and inherits the style from alerts so the <a href=\"https://getbootstrap.com/docs/4.3/components/toasts/\" target=\"_blank\">bootstrap toast examples</a> need to be altered a bit. Just add <code>.toast</code> together with one of the following contextual classes.</p>\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <th>Context</th>\n        <th>Usage</th>\n        <th>Class name</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>Info</td>\n        <td>Content that holds neutral information that we find useful for users and that we want to inform them about.</td>\n        <td><code>.toast-info</code></td>\n      </tr>\n      <tr>\n        <td>Success</td>\n        <td>Should be used as a response to an action or something that is considered to be positive or a success.</td>\n        <td><code>.toast-success</code></td>\n      </tr>\n      <tr>\n        <td>Warning</td>\n        <td>Not an error but important information for a user to consider or be aware of.</td>\n        <td><code>.toast-warning</code></td>\n      </tr>\n      <tr>\n        <td>Danger</td>\n        <td>Used for errors or when something goes wrong.</td>\n        <td><code>.toast-danger</code></td>\n      </tr>\n      </tbody>\n    </table>\n    <h4 class=\"mb-3 mt-4\">Examples</h4>\n    <div class=\"toast toast-info show\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n      A neutral toast message.\n    </div>\n    <div class=\"toast toast-success show\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n      A success toast.\n    </div>\n    <div class=\"toast toast-warning show\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n      A warning message.\n    </div>\n    <div class=\"toast toast-danger show\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\">\n      A toast for when something went wrong.\n    </div>\n    <exemplify [selector]=\"'.toast'\"></exemplify>\n  </div>\n</div>\n<div class=\"alert alert-warning alert-icon mx-n3 mx-md-0\"><strong>Framework needed!</strong> Please note that the examples above are just used to illustrate the appearance of toast notifications, and the markup could be reused with any framework or toast component as long as they use the toast class. Toast notifications use the same style and appearance as alerts but you need a framework to control when and how to show them. The examples below uses a third-party library for angular called ngx-toastr, if you're using angular, please take a look at <a class=\"alert-link\" href=\"https://sebgroup.github.io/ngx-toastr/\" target=\"_blank\">@sebgroup/ngx-toastr</a> for more info on installation and usage.</div>\n<div class=\"card my-3 mx-n3 mx-md-0\">\n  <h4 class=\"card-header pb-0\">Standard toast notifications</h4>\n  <div class=\"card-body\" id=\"standard\"><p>By default toast notifications are positioned bottom right on desktop to avoid overlaying the navigation to the left. On tablets and smaller screens where the menu is hidden, they appear bottom left and on small screens (mobile devices) they use full width.</p>\n    <div class=\"row\">\n      <div class=\"col-6 col-md-auto mb-3 mb-md-0\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('info', true)\">Show info</button>\n      </div>\n      <div class=\"col-6 col-md-auto mb-3 mb-md-0\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('success', true)\">Show success</button>\n      </div>\n      <div class=\"col-6 col-md-auto\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('warning', true)\">Show warning</button>\n      </div>\n      <div class=\"col-6 col-md-auto\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('error', true)\">Show error</button>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#standard > *:not(exemplify)'\"></exemplify>\n  </div>\n</div>\n<div class=\"card my-3 mx-n3 mx-md-0\">\n  <h4 class=\"card-header pb-0\">Toast notifications with timeout</h4>\n  <div class=\"card-body\" id=\"timeout\"><p>These toasts will disappear after a set time.</p>\n    <div class=\"row\">\n      <div class=\"col-6 col-md-auto mb-3 mb-md-0\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('info')\">Show info</button>\n      </div>\n      <div class=\"col-6 col-md-auto mb-3 mb-md-0\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('success')\">Show success</button>\n      </div>\n      <div class=\"col-6 col-md-auto\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('warning')\">Show warning</button>\n      </div>\n      <div class=\"col-6 col-md-auto\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('error')\">Show error</button>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#timeout > *:not(exemplify)'\"></exemplify>\n  </div>\n</div>\n<!--<div class=\"card my-3 mx-n3 mx-md-0\">\n  <h4 class=\"card-header pb-0\">Inline Toast notifications</h4>\n  <div class=\"card-body\" id=\"inline\"><p>These toasts will be added inline.</p>\n    <div toastContainer class=\"mb-3\"></div>\n    <div class=\"row\">\n      <div class=\"col-6 col-md-auto mb-3 mb-md-0\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('info', true, true)\">Show info</button>\n      </div>\n      <div class=\"col-6 col-md-auto mb-3 mb-md-0\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('success', true, true)\">Show success</button>\n      </div>\n      <div class=\"col-6 col-md-auto\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('warning', true, true)\">Show warning</button>\n      </div>\n      <div class=\"col-6 col-md-auto\">\n        <button class=\"btn btn-primary w-100\" (click)=\"showToast('error', true, true)\">Show error</button>\n      </div>\n    </div>\n    <exemplify [selector]=\"'#inline > *:not(exemplify)'\"></exemplify>\n  </div>\n</div>-->\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/tooltips/tooltips.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/tooltips/tooltips.component.html ***!
          \*******************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"tooltips\"><h2 class=\"my-3\">Tooltips</h2></a>\n<div class=\"alert alert-warning alert-icon mx-n3 mx-md-0\"><strong>Framework needed!</strong> Please note that the example below is just a representation of how the tooltips look and the needed markup. In order to use tooltips you need a framework to control when and how to show tooltips. If you're using angular, please take a look at <a class=\"alert-link\" href=\"https://sebgroup.github.io/ng-bootstrap/\" target=\"_blank\">@sebgroup/ng-bootstrap</a> which is a theme for <a class=\"alert-link\" href=\"https://ng-bootstrap.github.io/\" target=\"_blank\">ng-bootstrap</a>.</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"tooltipsExample\">\n  <div class=\"card-body bg-secondary\">\n      <div class=\"tooltip bs-tooltip-top\" role=\"tooltip\">\n        <div class=\"arrow\"></div>\n        <div class=\"tooltip-inner\">\n          Tooltip on the top\n        </div>\n      </div>\n      <div class=\"tooltip bs-tooltip-right\" role=\"tooltip\">\n        <div class=\"arrow\"></div>\n        <div class=\"tooltip-inner\">\n          Tooltip on the right\n        </div>\n      </div>\n      <div class=\"tooltip bs-tooltip-bottom\" role=\"tooltip\">\n        <div class=\"arrow\"></div>\n        <div class=\"tooltip-inner\">\n          Tooltip on the bottom\n        </div>\n      </div>\n      <div class=\"tooltip bs-tooltip-left\" role=\"tooltip\">\n        <div class=\"arrow\"></div>\n        <div class=\"tooltip-inner\">\n          Tooltip on the left\n        </div>\n      </div>\n  </div>\n  <div class=\"card-body pt-0\">\n    <exemplify [selector]=\"'#tooltipsExample .card-body > .tooltip'\"></exemplify>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\">\n  <h4 class=\"card-header\">Usage and highlighting</h4>\n  <div class=\"card-body\">\n    <p>Use the traditional <code>&lt;abbr&gt;</code>-tag or the <code>.text-help</code> class to underline single words where you want to provide additional information inside a tooltip. In forms use <code>&lt;i class=\"far fa-question-square\"&gt;&lt;/i&gt;</code> to display an <i class=\"far fa-question-square text-primary\"></i>-icon.</p>\n  </div>\n</div>\n<div class=\"card mb-4 mx-n3 mx-md-0\" id=\"tooltipExample\">\n  <h4 class=\"card-header\">Angular tooltip usage</h4>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Tooltip within text</h5>\n    <p>\n      Lorem ipsum dolor sit amet, <abbr placement=\"top\" ngbTooltip=\"Consectētur, third-person singular present active subjunctive of consector.\" container=\"body\">consectetur</abbr> adipiscing elit. Mauris in justo id eros mattis aliquet non vel orci. Cras a pulvinar enim, congue pretium velit. Donec ut bibendum felis, vel ultricies metus. Suspendisse <span class=\"text-help\" placement=\"top\" ngbTooltip=\"This time we've used the class 'text-help' to dash underline condimentum.\" container=\"body\">condimentum</span> magna vitae orci facilisis, nec lacinia elit semper.\n    </p>\n    <exemplify [selector]=\"'#tooltipExample > .card-body > p'\" [escapeStrings]=\"[' ngbTooltip',' ngClass', '[ngClass]']\"></exemplify>\n  </div>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Tooltip inside table</h5>\n    <table class=\"table\">\n      <thead>\n      <tr>\n        <th>#</th>\n        <th><span class=\"text-help\" ngbTooltip=\"This column shows first names.\" container=\"body\">First Name</span></th>\n        <th>Last Name</th>\n        <th>Username</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <th scope=\"row\">1</th>\n        <td><span class=\"text-help\" ngbTooltip=\"The name is Mark.\" container=\"body\">Mark</span></td>\n        <td>Otto</td>\n        <td>@mdo</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">2</th>\n        <td><span class=\"text-help\" ngbTooltip=\"The name is Jacob.\" container=\"body\">Jacob</span></td>\n        <td>Thornton</td>\n        <td>@fat</td>\n      </tr>\n      <tr>\n        <th scope=\"row\">3</th>\n        <td><span class=\"text-help\" ngbTooltip=\"The name is Larry.\" container=\"body\">Larry</span></td>\n        <td>the Bird</td>\n        <td>@twitter</td>\n      </tr>\n      </tbody>\n    </table>\n    <exemplify [selector]=\"'#tooltipExample .card-body .table'\" [escapeStrings]=\"[' ngbTooltip',' ngClass', '[ngClass]']\"></exemplify>\n  </div>\n</div>\n";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/index.js!./src/example/components/typography/typography.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader!./src/example/components/typography/typography.component.html ***!
          \***********************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "<a name=\"typography\"><h2 class=\"my-3\">Fonts and typography</h2></a>\n<div class=\"card\">\n  <div class=\"card-body\" id=\"headings\">\n    <h4 class=\"card-title\">Headings</h4>\n    <p>Note that the font sizes for <code>h1</code>, <code>h2</code> and <code>h3</code> adjust according to viewport size.</p>\n    <h1>Heading h1</h1>\n    <h2>Heading h2</h2>\n    <h3>Heading h3</h3>\n    <h4>Heading h4</h4>\n    <h5>Heading h5</h5>\n    <h6>Heading h6</h6>\n    <exemplify [selector]=\"'#headings > *:not(exemplify):not(.card-title)'\"></exemplify>\n  </div>\n  <div class=\"card-body\" id=\"lead\">\n    <h4 class=\"card-title\">Lead</h4>\n    <p class=\"lead\">Sed sit amet mauris ut ligula vulputate gravida sit amet ac nisi. Sed iaculis magna massa, ut lacinia ante congue vitae.</p>\n    <exemplify [selector]=\"'#lead > .lead'\"></exemplify>\n  </div>\n  <div class=\"card-body\" id=\"paragraph\">\n    <h4 class=\"card-title\">Paragraph</h4>\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec ornare turpis. Sed sit amet mauris ut ligula vulputate gravida sit amet ac nisi. Sed iaculis magna massa, ut lacinia ante congue vitae. Fusce ac tempus leo. Sed nec nisl volutpat augue scelerisque luctus eu a augue. Donec ut pretium justo. Sed at sapien sed libero elementum volutpat. Suspendisse eget condimentum diam, maximus suscipit est. Ut vestibulum vitae nulla luctus dapibus. Nullam semper mi a varius pharetra. Nulla quis nisi suscipit, lacinia ante vitae, commodo magna.</p>\n    <exemplify [selector]=\"'#paragraph > p'\"></exemplify>\n  </div>\n  <div class=\"card-body\" id=\"weights\">\n    <h4 class=\"card-title\">Weights</h4>\n    <p class=\"font-weight-light\">Light AaBbCc 0123456789</p>\n    <p class=\"font-weight-normal\">Regular AaBbCc 0123456789</p>\n    <p class=\"font-weight-medium\">Medium AaBbCc 0123456789</p>\n    <p class=\"font-weight-bold\">Bold AaBbCc 0123456789</p>\n    <exemplify [selector]=\"'#weights > p'\"></exemplify>\n  </div>\n  <div class=\"card-body\" id=\"italic\">\n    <h4 class=\"card-title\">Italic</h4>\n    <p class=\"font-weight-light font-italic\">Light Italic AaBbCc 0123456789</p>\n    <p class=\"font-weight-normal font-italic\">Regular Italic AaBbCc 0123456789</p>\n    <p class=\"font-weight-medium font-italic\">Medium Italic AaBbCc 0123456789</p>\n    <p class=\"font-weight-bold font-italic\">Bold Italic AaBbCc 0123456789</p>\n    <exemplify [selector]=\"'#italic > p'\"></exemplify>\n  </div>\n</div>\n<hr>\n\n<hr>\n\n";
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/$$_lazy_route_resource lazy recursive": 
        /*!**********************************************************!*\
          !*** ./src/$$_lazy_route_resource lazy namespace object ***!
          \**********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\n@media (min-width: 992px) {\n  .content {\n    margin-left: 256px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2FuaW1hdGlvbnMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc2Nzcy9ib290c3RyYXAtY29yZS9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvc2ViZ3JvdXAvYm9vdHN0cmFwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEQTs7Ozs7O0dBTUc7QUNUQztFQ3pERjtJQUNFLG1CQUFrQixFQUNuQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFuaW1hdGlvbnM6IChcbiAgc2xpZGVJbkxlZnQ6IHNsaWRlSW5MZWZ0ICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluUmlnaHQ6IHNsaWRlSW5SaWdodCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJblVwOiBzbGlkZUluVXAgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5Eb3duOiBzbGlkZUluRG93biAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgZmFkZUluOiBmYWRlSW4gJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbixcbiAgZmFkZUluVXA6IGZhZGVJblVwICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24sXG4pO1xuXG5AbWl4aW4gYW5pbWF0aW9ucygpIHtcbiAgQGlmICRlbmFibGUtdHJhbnNpdGlvbnMge1xuICAgIEBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDMwcHgsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgc2xpZGVJbkRvd24ge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEFkZCBvbmUgb3IgbW9yZSB0cmFuc2l0aW9uc1xuICpcbiAqIEBleGFtcGxlXG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbignc2xpZGVJblVwJyk7XG4gKiBAaW5jbHVkZSBhZGQtdHJhbnNpdGlvbigoJ3NsaWRlSW5VcCcsJ2ZhZGVJbicpKVxuICovXG5AbWl4aW4gYWRkLXRyYW5zaXRpb24oJGxpc3QpIHtcbiAgJGNvbWJpbmVkOiAnJztcbiAgQGlmIHR5cGUtb2YoJGxpc3QpID09ICdzdHJpbmcnIHtcbiAgICBhbmltYXRpb246IG1hcF9nZXQoJGFuaW1hdGlvbnMsICRsaXN0KTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCRsaXN0KSA9PSAnbGlzdCcge1xuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRsaXN0KSB7XG4gICAgICAkYW5pbTogbWFwX2dldCgkYW5pbWF0aW9ucywgbnRoKCRsaXN0LCAkaSkpO1xuICAgICAgQGlmICRhbmltID09IG51bGwge1xuICAgICAgICBAd2FybiBudGgoJGxpc3QsICRpKSB1bnF1b3RlKCdub3QgZm91bmQsIHBsZWFzZSB1c2Ugb25lIG9mIHRoZSBmb2xsb3dpbmcgYW5pbWF0aW9uczonKSB0by1saXN0KCRhbmltYXRpb25zLCAna2V5cycpO1xuICAgICAgfVxuXG4gICAgICBAaWYgJGkgPT0gbGVuZ3RoKCRsaXN0KSB7XG4gICAgICAgICRjb21iaW5lZDogJGNvbWJpbmVkICsgJGFuaW07XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgICRjb21iaW5lZDogJGNvbWJpbmVkICsgJGFuaW0gKyAnLCc7XG4gICAgICB9XG4gICAgfVxuICAgIGFuaW1hdGlvbjogdW5xdW90ZSgkY29tYmluZWQpO1xuICB9XG59XG4iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uL3Njc3MvbWl4aW5zL21peGluc1wiO1xuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xuICAuY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1NnB4O1xuICB9XG59XG4iXX0= */";
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _example_example_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../example/example.module */ "./src/example/example.module.ts");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _components_side_navigation_side_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/side-navigation/side-navigation.component */ "./src/app/components/side-navigation/side-navigation.component.ts");
            /* harmony import */ var _components_mobile_navigation_mobile_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mobile-navigation/mobile-navigation.component */ "./src/app/components/mobile-navigation/mobile-navigation.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
            /* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
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
                            toastClass: 'toast',
                            positionClass: 'toast-bottom-right',
                            enableHtml: true
                        }),
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                        _example_example_module__WEBPACK_IMPORTED_MODULE_4__["ExampleModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/about/about.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/about/about.component.ts ***!
          \*****************************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/components/header/header.component.scss ***!
          \*********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\nheader {\n  height: 56px;\n  position: fixed;\n  z-index: 1020;\n  left: 0; }\n.brand, .profile, .mobile-header {\n  background: #333;\n  color: #fff;\n  height: 56px; }\n.seb-logo {\n  height: 56px;\n  width: 56px; }\n@media (min-width: 576px) {\n  header {\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15); } }\n@media (min-width: 992px) {\n  header {\n    width: calc(100% - 256px);\n    left: 256px; } }\n.mobile-header .col {\n  padding-top: .65rem;\n  padding-bottom: .35rem; }\n.mobile-header .active {\n  background: #60cd18; }\n.dropdown-toggle {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n  cursor: pointer; }\n.dropdown-toggle::after {\n  display: none; }\n.dropdown.show {\n  background: #41B0EE; }\n.dropdown-item-link {\n  padding: 0.5rem 1.5rem; }\n.breadcrumb-container {\n  height: 56px; }\n.dropdown-header {\n  color: #343434;\n  background: #dedede; }\n.dropdown-menu .dropdown-header:first-child {\n  border-radius: 4px 4px 0 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2FuaW1hdGlvbnMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvc2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3NlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcC1jb3JlL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErREE7Ozs7OztHQU1HO0FDbkVIO0VBQ0UsYUFBWTtFQUNaLGdCQUFlO0VBQ2YsY0NvWXNDO0VEbll0QyxRQUFPLEVBRVI7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsYUFBVyxFQUNaO0FBRUQ7RUFDRSxhQUFXO0VBQ1gsWUFBVyxFQUNaO0FFMENHO0VGeENGO0lBRUUsMkNBQXVDLEVBQ3hDLEVBQUE7QUVxQ0M7RUZsQ0Y7SUFHRSwwQkFBd0I7SUFDeEIsWUFBVyxFQUNaLEVBQUE7QUFHSDtFQUVJLG9CQUFtQjtFQUNuQix1QkFBc0IsRUFFdkI7QUFMSDtFQU9JLG9CQ00yQixFREw1QjtBQUVIO0VBQ0UscUJBQW9CO0VBQ3BCLHdCQUF1QjtFQUN2QixnQkFBZSxFQUNoQjtBQUVEO0VBQ0UsY0FBYSxFQUNkO0FBRUQ7RUFDRSxvQkNMNkIsRURNOUI7QUFFRDtFQUNFLHVCQUFzQixFQUN2QjtBQUVEO0VBQ0UsYUFBWSxFQUNiO0FBRUQ7RUFDRSxlQ2pEZ0I7RURrRGhCLG9CQ3ZEZ0IsRUR3RGpCO0FBRUQ7RUFDRSwyQkFBd0QsRUFDekQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYW5pbWF0aW9uczogKFxuICBzbGlkZUluTGVmdDogc2xpZGVJbkxlZnQgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5SaWdodDogc2xpZGVJblJpZ2h0ICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluVXA6IHNsaWRlSW5VcCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJbkRvd246IHNsaWRlSW5Eb3duICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBmYWRlSW46IGZhZGVJbiAkdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uLFxuICBmYWRlSW5VcDogZmFkZUluVXAgJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbixcbik7XG5cbkBtaXhpbiBhbmltYXRpb25zKCkge1xuICBAaWYgJGVuYWJsZS10cmFuc2l0aW9ucyB7XG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgZmFkZUluVXAge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMzBweCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluTGVmdCB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluVXAge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluRG93biB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQWRkIG9uZSBvciBtb3JlIHRyYW5zaXRpb25zXG4gKlxuICogQGV4YW1wbGVcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCdzbGlkZUluVXAnKTtcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCgnc2xpZGVJblVwJywnZmFkZUluJykpXG4gKi9cbkBtaXhpbiBhZGQtdHJhbnNpdGlvbigkbGlzdCkge1xuICAkY29tYmluZWQ6ICcnO1xuICBAaWYgdHlwZS1vZigkbGlzdCkgPT0gJ3N0cmluZycge1xuICAgIGFuaW1hdGlvbjogbWFwX2dldCgkYW5pbWF0aW9ucywgJGxpc3QpO1xuICB9IEBlbHNlIGlmIHR5cGUtb2YoJGxpc3QpID09ICdsaXN0JyB7XG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGxpc3QpIHtcbiAgICAgICRhbmltOiBtYXBfZ2V0KCRhbmltYXRpb25zLCBudGgoJGxpc3QsICRpKSk7XG4gICAgICBAaWYgJGFuaW0gPT0gbnVsbCB7XG4gICAgICAgIEB3YXJuIG50aCgkbGlzdCwgJGkpIHVucXVvdGUoJ25vdCBmb3VuZCwgcGxlYXNlIHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBhbmltYXRpb25zOicpIHRvLWxpc3QoJGFuaW1hdGlvbnMsICdrZXlzJyk7XG4gICAgICB9XG5cbiAgICAgIEBpZiAkaSA9PSBsZW5ndGgoJGxpc3QpIHtcbiAgICAgICAgJGNvbWJpbmVkOiAkY29tYmluZWQgKyAkYW5pbTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgJGNvbWJpbmVkOiAkY29tYmluZWQgKyAkYW5pbSArICcsJztcbiAgICAgIH1cbiAgICB9XG4gICAgYW5pbWF0aW9uOiB1bnF1b3RlKCRjb21iaW5lZCk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvbWl4aW5zL21peGluc1wiO1xuaGVhZGVyIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6ICR6aW5kZXgtc3RpY2t5O1xuICBsZWZ0OiAwO1xuICAvL3BhZGRpbmctbGVmdDogMDtcbn1cbi5icmFuZCwgLnByb2ZpbGUsIC5tb2JpbGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDo1NnB4O1xufVxuXG4uc2ViLWxvZ28ge1xuICBoZWlnaHQ6NTZweDtcbiAgd2lkdGg6IDU2cHg7XG59XG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XG4gIGhlYWRlciB7XG4gICAgLy93aWR0aDpjYWxjKDEwMHZ3IC0gMTdweCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsMCwwLDAuMTUpO1xuICB9XG59XG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XG4gIGhlYWRlciB7XG4gICAgLy93aWR0aDpjYWxjKDEwMHZ3IC0gMjU2cHggLSAxN3B4KTtcbiAgICAvL3dpZHRoOmNhbGMoMTAwdncgLSAyNTZweCk7XG4gICAgd2lkdGg6Y2FsYygxMDAlIC0gMjU2cHgpO1xuICAgIGxlZnQ6IDI1NnB4O1xuICB9XG59XG5cbi5tb2JpbGUtaGVhZGVyIHtcbiAgLmNvbCB7XG4gICAgcGFkZGluZy10b3A6IC42NXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjM1cmVtO1xuICAgIC8vcGFkZGluZzogLjM3NWVtIDA7XG4gIH1cbiAgLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogJGdyZWVuO1xuICB9XG59XG4uZHJvcGRvd24tdG9nZ2xlIHtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRyb3Bkb3duLnNob3cge1xuICBiYWNrZ3JvdW5kOiAkYmx1ZTtcbn1cblxuLmRyb3Bkb3duLWl0ZW0tbGluayB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG59XG5cbi5icmVhZGNydW1iLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNTZweDtcbn1cblxuLmRyb3Bkb3duLWhlYWRlciB7XG4gIGNvbG9yOiRkYXJrO1xuICBiYWNrZ3JvdW5kOiAkZ3JheS0zMDA7XG59XG5cbi5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1oZWFkZXI6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmFkaXVzOiAkYnRuLWJvcmRlci1yYWRpdXMgJGJ0bi1ib3JkZXItcmFkaXVzIDAgMDtcbn1cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOGY4ICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllOWU5ICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVkZWRlICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VjZWNlICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRhZGFkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjODY4Njg2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk0OTQ5ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzNDM0ICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyMTIxICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGdyYXlzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgICAgXCIyMDBcIjogJGdyYXktMjAwLFxuICAgICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgICAgXCI1MDBcIjogJGdyYXktNTAwLFxuICAgICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgICAgXCI4MDBcIjogJGdyYXktODAwLFxuICAgICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICAgKSxcbiAgICAkZ3JheXNcbik7XG5cblxuJHJlZDogICAgICAgICAgICAgICAgICAgI0YwMzUyOTtcbiRyZWQtZGFyazogICAgICAgICAgICAgICNEODFBMUE7IC8vIFNFQiBzcGVjaWZpY1xuJHJlZC1kYXJrZXI6ICAgICAgICAgICAgI0JCMDAwQzsgLy8gU0VCIHNwZWNpZmljXG4keWVsbG93LWRhcmtlcjogICAgICAgICAjRjhBMDAwOyAvLyBTRUIgc3BlY2lmaWNcbiR5ZWxsb3ctZGFyazogICAgICAgICAgICNGRkI0MDA7IC8vIFNFQiBzcGVjaWZpY1xuJHllbGxvdzogICAgICAgICAgICAgICAgI0ZGQzUwMDtcbiRncmVlbjogICAgICAgICAgICAgICAgICM2MGNkMTg7XG4kZ3JlZW4tZGFyazogICAgICAgICAgICAjNDVCNDAwOyAvLyBTRUIgc3BlY2lmaWNcbiRncmVlbi1kYXJrZXI6ICAgICAgICAgICMzNzlEMDA7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWU6ICAgICAgICAgICAgICAgICAgIzQxQjBFRTtcbiRibHVlLWRhcms6ICAgICAgICAgICAgICMwMDkyRTE7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWUtZGFya2VyOiAgICAgICAgICAgIzAwN0FDNzsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlOiAgICAgICAgICAgICAgICAjNjczQUI2O1xuJHB1cnBsZS1kYXJrOiAgICAgICAgICAgIzRGMkM5OTsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlLWRhcmtlcjogICAgICAgICAjM0YyNTg3OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbi1kYXJrZXIgIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJHB1cnBsZSAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQtZGFyayAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gICAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXG4gICAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gICAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcbiAgICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbiAgICApLFxuICAgICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIHRoZW1lIGljb25zIC8vIFNFQiBzcGVjaWZpY1xuJGljb24tZmlsbC1jb2xvcjogJGJsYWNrO1xuJHRoZW1lLWljb25zOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtaWNvbnM6IG1hcC1tZXJnZShcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyUzRSUzQ3BhdGggZD0nTTQzNS44NDggODMuNDY2TDE3Mi44MDQgMzQ2LjUxbC05Ni42NTItOTYuNjUyYy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcxIDBsLTI4LjI4NCAyOC4yODRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWwxMzMuNDIxIDEzMy40MjFjNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MSAwbDI5OS44MTMtMjk5LjgxM2M0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFsLTI4LjI4NC0yOC4yODRjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NyAweicgZmlsbD0nI3skaWNvbi1maWxsLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmZvXCI6ICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGQ9J000NDggODB2MzUyYzAgMjYuNTEtMjEuNDkgNDgtNDggNDhINDhjLTI2LjUxIDAtNDgtMjEuNDktNDgtNDhWODBjMC0yNi41MSAyMS40OS00OCA0OC00OGgzNTJjMjYuNTEgMCA0OCAyMS40OSA0OCA0OHptLTQ4IDM0NlY4NmE2IDYgMCAwIDAtNi02SDU0YTYgNiAwIDAgMC02IDZ2MzQwYTYgNiAwIDAgMCA2IDZoMzQwYTYgNiAwIDAgMCA2LTZ6TTIyNCAxMThjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHonIGZpbGw9JyN7JGljb24tZmlsbC1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2FybmluZ1wiOiAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInJTNFJTNDcGF0aCBkPSdNMjQ4Ljc0NyAyMDQuNzA1bDYuNTg4IDExMmMuMzczIDYuMzQzIDUuNjI2IDExLjI5NSAxMS45NzkgMTEuMjk1aDQxLjM3YTEyIDEyIDAgMCAwIDExLjk3OS0xMS4yOTVsNi41ODgtMTEyYy40MDUtNi44OTMtNS4wNzUtMTIuNzA1LTExLjk3OS0xMi43MDVoLTU0LjU0N2MtNi45MDMgMC0xMi4zODMgNS44MTItMTEuOTc4IDEyLjcwNXpNMzMwIDM4NGMwIDIzLjE5Ni0xOC44MDQgNDItNDIgNDJzLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDIgNDIgMTguODA0IDQyIDQyem0tLjQyMy0zNjAuMDE1Yy0xOC40MzMtMzEuOTUxLTY0LjY4Ny0zMi4wMDktODMuMTU0IDBMNi40NzcgNDQwLjAxM0MtMTEuOTQ1IDQ3MS45NDYgMTEuMTE4IDUxMiA0OC4wNTQgNTEySDUyNy45NGMzNi44NjUgMCA2MC4wMzUtMzkuOTkzIDQxLjU3Ny03MS45ODdMMzI5LjU3NyAyMy45ODV6TTUzLjE5MSA0NTUuMDAyTDI4Mi44MDMgNTcuMDA4YzIuMzA5LTQuMDAyIDguMDg1LTQuMDAyIDEwLjM5NCAwbDIyOS42MTIgMzk3Ljk5M2MyLjMwOCA0LS41NzkgOC45OTgtNS4xOTcgOC45OThINTguMzg4Yy00LjYxNy4wMDEtNy41MDQtNC45OTctNS4xOTctOC45OTd6JyBmaWxsPScjeyRpY29uLWZpbGwtY29sb3J9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhbmdlclwiOiAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyUzRSUzQ3BhdGggZD0nTTI0OC43NDcgMjA0LjcwNWw2LjU4OCAxMTJjLjM3MyA2LjM0MyA1LjYyNiAxMS4yOTUgMTEuOTc5IDExLjI5NWg0MS4zN2ExMiAxMiAwIDAgMCAxMS45NzktMTEuMjk1bDYuNTg4LTExMmMuNDA1LTYuODkzLTUuMDc1LTEyLjcwNS0xMS45NzktMTIuNzA1aC01NC41NDdjLTYuOTAzIDAtMTIuMzgzIDUuODEyLTExLjk3OCAxMi43MDV6TTMzMCAzODRjMCAyMy4xOTYtMTguODA0IDQyLTQyIDQycy00Mi0xOC44MDQtNDItNDIgMTguODA0LTQyIDQyLTQyIDQyIDE4LjgwNCA0MiA0MnptLS40MjMtMzYwLjAxNWMtMTguNDMzLTMxLjk1MS02NC42ODctMzIuMDA5LTgzLjE1NCAwTDYuNDc3IDQ0MC4wMTNDLTExLjk0NSA0NzEuOTQ2IDExLjExOCA1MTIgNDguMDU0IDUxMkg1MjcuOTRjMzYuODY1IDAgNjAuMDM1LTM5Ljk5MyA0MS41NzctNzEuOTg3TDMyOS41NzcgMjMuOTg1ek01My4xOTEgNDU1LjAwMkwyODIuODAzIDU3LjAwOGMyLjMwOS00LjAwMiA4LjA4NS00LjAwMiAxMC4zOTQgMGwyMjkuNjEyIDM5Ny45OTNjMi4zMDggNC0uNTc5IDguOTk4LTUuMTk3IDguOTk4SDU4LjM4OGMtNC42MTcuMDAxLTcuNTA0LTQuOTk3LTUuMTk3LTguOTk3eicgZmlsbD0nI3skaWNvbi1maWxsLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAkdGhlbWUtaWNvbnNcbik7XG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JhZGllbnRzOiAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdHJhbnNpdGlvbnM6ICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmlkLWNsYXNzZXM6ICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXBvaW50ZXItY3Vyc29yLWZvci1idXR0b25zOiAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJpbnQtc3R5bGVzOiAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yZXNwb25zaXZlLWZvbnQtc2l6ZXM6ICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS12YWxpZGF0aW9uLWljb25zOiAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1yZXNwb25zaXZlLWd1dHRlcnM6ICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLWJ1dHRvbi12YXJpYXRpb25zOiAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtbmctYm9vdHN0cmFwOiAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1hbmd1bGFyLWdlbmVyaWMtdGFibGU6ICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLW5neC10b2FzdHI6ICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtZGVwcmVjYXRpb24tbWVzc2FnZXM6ICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuXG4vLyBTcGFjaW5nXG4vL1xuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cblxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc3BhY2VyczogbWFwLW1lcmdlKFxuICAgIChcbiAgICAgIDA6IDAsXG4gICAgICAxOiAoJHNwYWNlciAqIC4yNSksXG4gICAgICAyOiAoJHNwYWNlciAqIC41KSxcbiAgICAgIDM6ICRzcGFjZXIsXG4gICAgICA0OiAoJHNwYWNlciAqIDIpLFxuICAgICAgNTogKCRzcGFjZXIgKiAzKVxuICAgICksXG4gICAgJHNwYWNlcnNcbik7XG5cbi8vIFRoaXMgdmFyaWFibGUgYWZmZWN0cyB0aGUgYC5oLSpgIGFuZCBgLnctKmAgY2xhc3Nlcy5cbiRzaXplczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNpemVzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgMjU6IDI1JSxcbiAgICAgIDUwOiA1MCUsXG4gICAgICA3NTogNzUlLFxuICAgICAgMTAwOiAxMDAlLFxuICAgICAgYXV0bzogYXV0b1xuICAgICksXG4gICAgJHNpemVzXG4pO1xuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuXG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgIzQ0NCAhZGVmYXVsdDtcblxuXG4vLyBQYXJhZ3JhcGhzXG4vL1xuLy8gU3R5bGUgcCBlbGVtZW50LlxuXG4vLyBHcmlkIGJyZWFrcG9pbnRzXG5cbi8vIEdyaWQgY29udGFpbmVyc1xuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtZ3V0dGVyLXdpZHRoOiBtYXAtZ2V0KCRzcGFjZXJzLCAzKSoyICFkZWZhdWx0O1xuXG4vLyBTRUIgc3BlY2lmaWMgb3ZlcnJpZGUgd2hlbiByZXNwb25zaXZlIGd1dHRlcnMgYXJlIGVuYWJsZWRcbkBpZiAoJGVuYWJsZS1yZXNwb25zaXZlLWd1dHRlcnMpIHtcbiAgJGdyaWQtZ3V0dGVyLXdpZHRoOiBtYXAtZ2V0KCRzcGFjZXJzLCAyKTtcbn1cblxuLy8gU0VCIHNwZWNpZmljXG4kcmVzcG9uc2l2ZS1ndXR0ZXJzOiAoXG4gIHNtOm1hcC1nZXQoJHNwYWNlcnMsIDIpKjIsXG4gIGxnOm1hcC1nZXQoJHNwYWNlcnMsIDIpKjIsXG4gIHhsOm1hcC1nZXQoJHNwYWNlcnMsIDMpKjJcbikgIWRlZmF1bHQ7XG5cbi8vIENvbXBvbmVudHNcbi8vXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXG5cbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXV0aWxpdHk6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRib3JkZXItcmFkaXVzLXV0aWxpdHktbGc6ICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJvcmRlci1yYWRpdXMtdXRpbGl0eS1zbTogICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbiR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uOi40cyBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uOiAgICAuMTVzIGxpbmVhciAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5ICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBGb250c1xuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRzZWItZm9udC1wYXRoOiAgICAgICAgICAgICAgIFwifkBzZWJncm91cC9mb250cy9mb250c1wiICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiU0VCU2Fuc1NlcmlmXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiVHJlYnVjaGV0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAuODc1KSAhZGVmYXVsdDtcbiRmb250LXNpemUteHM6ICAgKCRmb250LXNpemUtYmFzZSAqIC42ODc1KSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cblxuJGZvbnQtd2VpZ2h0LW1lZGl1bTogICAgICAgICAgNTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAzICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDAuODc1ICFkZWZhdWx0O1xuXG4kaDEtbWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGgyLW1kLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMy1tZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kaDEtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMi1zbS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDMtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgICMyMjIgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGJsdWUtZGFya2VyICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpbmstd2VpZ2h0OiAgICAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kZXh0ZXJuYWwtbGluay1pY29uLWNvbG9yOiAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbi1jb2xvcjogICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRleHRlcm5hbC1saW5rLWljb246ICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBkPSdNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0tNiA0MDBINTRhNiA2IDAgMCAxLTYtNlY4NmE2IDYgMCAwIDEgNi02aDM0MGE2IDYgMCAwIDEgNiA2djM0MGE2IDYgMCAwIDEtNiA2em0tNTQtMzA0bC0xMzYgLjE0NWMtNi42MjcgMC0xMiA1LjM3My0xMiAxMlYxNjcuOWMwIDYuNzIyIDUuNTIyIDEyLjEzMyAxMi4yNDMgMTEuOTk4bDU4LjAwMS0yLjE0MUw5OS41MTUgMzQwLjQ4NWMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxbDIzLjAzIDIzLjAyOWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcgMGwxNjIuNzI5LTE2Mi43MjktMi4xNDEgNTguMDAxYy0uMTM2IDYuNzIxIDUuMjc1IDEyLjI0MiAxMS45OTggMTIuMjQyaDI3Ljc1NWM2LjYyOCAwIDEyLTUuMzczIDEyLTEyTDM1MiAxNDBjMC02LjYyNy01LjM3My0xMi0xMi0xMnonIGZpbGw9JyN7JGV4dGVybmFsLWxpbmstaWNvbi1jb2xvcn0nIC8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbjogICAgICAgIHN0ci1yZXBsYWNlKCRleHRlcm5hbC1saW5rLWljb24sIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRleHRlcm5hbC1saW5rLWljb24tY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbi1jb2xvciArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpKTtcblxuLy8gR3JpZCBicmVha3BvaW50c1xuLy9cbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICAgICAgICB4czogMCxcbiAgICAgICAgc206IDU3NnB4LFxuICAgICAgICBtZDogNzY4cHgsXG4gICAgICAgIGxnOiA5OTJweCxcbiAgICAgICAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNjI1cmVtIC43NXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgICAgIC4yNzVyZW0gLjNyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsdWUsIC4wNzUpICFkZWZhdWx0O1xuXG4kdGFibGUtaGVhZC1jb2xvcjogICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1leHBhbmQtYmc6ICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4kdGFibGUtc29ydC1hY3RpdmUtY29sb3I6ICRibHVlLWRhcmsgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRhYmxlLXNvcnQtYWN0aXZlLWhvdmVyLWNvbG9yOiAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdGFibGUtc29ydC1ob3Zlci1jb2xvcjogJGdyYXktNDAwICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0YWJsZS1zb3J0LWRpc2FibGVkLWNvbG9yOiAkZ3JheS0zMDAgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRhYmxlLXNvcnQtY29sb3I6ICRncmF5LTUwMCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuNTYyNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogICAgICAuMjgxMjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbi8vIEJ1dHRvbnNcbi8vXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cblxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDtcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogICAgICAgIDEgIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kYnRuLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIDAgMCAwICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogICAgICAgMCAwIDAgMCAhZGVmYXVsdDtcblxuXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICA0cHggIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICAgICAgICA0cHggIWRlZmF1bHQ7XG5cbi8vIEZvcm1zXG4kaW5wdXQtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgMCAwIDAgMCAhZGVmYXVsdDtcblxuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cblxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0O1xuXG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgIC42MjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24taWNvbjogICAgICAgICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBkPSdNNDQxLjkgMTY3LjNsLTE5LjgtMTkuOGMtNC43LTQuNy0xMi4zLTQuNy0xNyAwTDIyNCAzMjguMiA0Mi45IDE0Ny41Yy00LjctNC43LTEyLjMtNC43LTE3IDBMNi4xIDE2Ny4zYy00LjcgNC43LTQuNyAxMi4zIDAgMTdsMjA5LjQgMjA5LjRjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIwOS40LTIwOS40YzQuNy00LjcgNC43LTEyLjMgMC0xN3onIGZpbGw9JyN7JGJsdWV9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kZHJvcGRvd24taWNvbi1hY3RpdmU6ICAgICAgICAgICAgICBzdHItcmVwbGFjZSgkZHJvcGRvd24taWNvbiwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGJsdWUgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJHdoaXRlICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIikpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGRyb3Bkb3duLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbi8vIEZvcm1zXG5cbiRsYWJlbC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA2NSUgNjUlICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM0UlM0NjaXJjbGUgcj0nMy41JyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZ30nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjdXN0b20tc2xpZGUtdG9nZ2xlLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzRSUzQ2NpcmNsZSByPSczLjUnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAgICAgJGJsdWU7XG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAgICAgICAgICAgICAxNnB4IDE2cHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogICAgICAgICAgIHN0ci1yZXBsYWNlKCRkcm9wZG93bi1pY29uLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkYmx1ZSArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogICAgICAgNHB4ICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1ib3gtc2hhZG93OiAgICAgICAgICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgZW46IFwiQnJvd3NlXCJcbikgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHN0ci1yZXBsYWNlKG1hcC1nZXQoJHRoZW1lLWljb25zLCAnc3VjY2VzcycpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkaWNvbi1maWxsLWNvbG9yICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIiksIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgc3RyLXJlcGxhY2UobWFwLWdldCgkdGhlbWUtaWNvbnMsICdkYW5nZXInKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGljb24tZmlsbC1jb2xvciArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1saW5lLXRoaWNrbmVzczogICAgICAycHggIWRlZmF1bHQ7XG5cblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duLWJhY2tkcm9wOiAgICAgICAgICA5OTAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcblxuLy8gTmF2c1xuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjU2MjVyZW0gIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRuYXYtdGFicy1saW5rLWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJG5hdi10YWJzLWxpbmstZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBOYXZiYXJcbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgIC40Mzc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXdlaWdodDogICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbi8vIFBhZ2luYXRpb25cbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0Oy8vIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206ICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDsvLy4yNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7Ly8uNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAkYmx1ZSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDRweCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG5cblxuLy8gSnVtYm90cm9uXG5cbi8vIENhcmRzXG4kY2FyZC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAwIDFweCAycHggMCByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbi8vIFRvb2x0aXBzXG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbi8vIFBvcG92ZXJzXG5cbi8vIEJhZGdlc1xuXG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuXG5cbi8vIE1vZGFsc1xuXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcblxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgMCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogICAgICAgIDAgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogICAgICAgICAxcHggIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAwICFkZWZhdWx0O1xuXG5cblxuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgMCAhZGVmYXVsdDtcbiRtb2RhbC1hc2lkZS13aWR0aDogICAgICAgICAgICAgICAgIDMyMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRtb2RhbC1hc2lkZS1sZy13aWR0aDogICAgICAgICAgICAgIG1hcF9nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdtZCcpOyAvLyA4MDBweCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6ICAgICAgIDAgMCAwIDAgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vNTAwXG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGFsZXJ0LWljb24td2lkdGg6ICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kYWxlcnQtaWNvbi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRhbGVydC1pY29uLXBhZGRpbmc6ICRhbGVydC1pY29uLXdpZHRoICsgKCRhbGVydC1wYWRkaW5nLXgqMik7IC8vIFNFQiBTcGVjaWZpY1xuXG4vLyBUb2FzdCBub3RpZmljYXRpb25zXG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYWxlcnQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtcGFkZGluZzogICAgICAgICAgICAgICAgICAgICAkYWxlcnQtcGFkZGluZy14ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgIDAgMCAuNXJlbSByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJHRvYXN0LXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbi8vIExpc3QgZ3JvdXBcbiRsaXN0LWdyb3VwLWJ1bGxldC1pY29uOiBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEgMSclM0UlM0NyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIHN0eWxlPSdmaWxsOiN7JGRhcmt9OycgLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kbGlzdC1ncm91cC1jaGVjay1pY29uOiBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInJTNFJTNDcGF0aCBkPSdNNDM1Ljg0OCA4My40NjZMMTcyLjgwNCAzNDYuNTFsLTk2LjY1Mi05Ni42NTJjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMGwtMjguMjg0IDI4LjI4NGMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxbDEzMy40MjEgMTMzLjQyMWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcxIDBsMjk5LjgxMy0yOTkuODEzYzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MWwtMjguMjg0LTI4LjI4NGMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3IDB6JyBmaWxsPScjeyRncmVlbn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kbGlzdC1ncm91cC1tYXJnaW4tYm90dG9tOiAxcmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWJnOiAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRkYXJrICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIEltYWdlIHRodW1ibmFpbHNcblxuLy8gRmlndXJlc1xuXG4vLyBCcmVhZGNydW1ic1xuJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvci1saWdodDogICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvci1saWdodDogICAgICR3aGl0ZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kYnJlYWRjcnVtYi1hY3RpdmUtZm9udC13ZWlnaHQ6ICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI1NiA1MTInJTNFJTNDcGF0aCBkPSdNMjQuNzA3IDM4LjEwMUw0LjkwOCA1Ny44OTljLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MUwxODUuNjA3IDI1NiA0LjkwOCA0MzcuMTNjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MUwyNC43MDcgNDczLjljNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MSAwbDIwOS40MTQtMjA5LjQxNGM0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFMNDEuNjc4IDM4LjEwMWMtNC42ODctNC42ODctMTIuMjg1LTQuNjg3LTE2Ljk3MSAweicgZmlsbD0nI3skYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRicmVhZGNydW1iLWJhY2staWNvbjogICAgICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjU2IDUxMiclM0UlM0NwYXRoIGQ9J00yMzEuMjkzIDQ3My44OTlsMTkuNzk5LTE5Ljc5OWM0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFMNzAuMzkzIDI1NiAyNTEuMDkyIDc0Ljg3YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwyMzEuMjkzIDM4LjFjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMEw0LjkwOCAyNDcuNTE1Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFMMjE0LjMyMiA0NzMuOWM0LjY4NyA0LjY4NiAxMi4yODUgNC42ODYgMTYuOTcxLS4wMDF6JyBmaWxsPScjeyRicmVhZGNydW1iLWRpdmlkZXItY29sb3J9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGJyZWFkY3J1bWItZGl2aWRlci13aWR0aDogICAgICAgICAgMTVweCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kYnJlYWRjcnVtYi1kaXZpZGVyLWhlaWdodDogICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG5cbi8vIENsb3NlXG5cbi8vIENvZGVcblxuLy8gUHJpbnRpbmdcblxuQGltcG9ydCBcImJvb3RzdHJhcC1jb3JlL2Z1bmN0aW9uc1wiO1xuQGltcG9ydCBcImJvb3RzdHJhcC1jb3JlL3ZhcmlhYmxlc1wiO1xuXG4vLyBTY3JvbGxiYXJcbiRzY3JvbGxiYXItdHJhY2stYmc6ICAkZ3JheS0xMDA7XG4kc2Nyb2xsYmFyLXRodW1iLWJnOiAgJGdyYXktNDAwO1xuJHNjcm9sbGJhci10cmFjay1kYXJrLWJnOiAgJGRhcms7XG4kc2Nyb2xsYmFyLXRodW1iLWRhcmstYmc6ICAkZ3JheS05MDA7XG4kc2Nyb2xsYmFyLXRodW1iLWFjdGl2ZS1iZzogJGJsdWU7XG4kc2Nyb2xsYmFyLXRoaWNrbmVzczogICAgIDEwcHg7XG5cbi8vIEFjY29yZGlvblxuXG4kYWNjb3JkaW9uLWljb246ICAgICAgICAgICAgJGRyb3Bkb3duLWljb24gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1pY29uLWRpc2FibGVkOiAgIHN0ci1yZXBsYWNlKCRhY2NvcmRpb24taWNvbiwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGJsdWUgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGdyYXktNDAwICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIikpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYmctaG92ZXI6ICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib3JkZXItY29sb3I6ICAgICR0YWJsZS1ib3JkZXItY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib3JkZXItd2lkdGg6ICAgICR0YWJsZS1ib3JkZXItd2lkdGggIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1oZWFkZXItcGFkZGluZzogIDAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib2R5LXBhZGRpbmc6ICAgIDAgMXJlbSAxcmVtIDIuNXJlbSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWl0ZW0tcGFkZGluZy15OiAgLjVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1pdGVtLXBhZGRpbmcteDogIDFyZW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib2R5LWJnOiAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYm9keS1iZy1hY3RpdmU6ICAkYWNjb3JkaW9uLWJnLWhvdmVyICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tc2l6ZTogICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */";
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/header/header.component.ts ***!
          \*******************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/menu.service */ "./src/app/services/menu.service.ts");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
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
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
                { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
            ], HeaderComponent.prototype, "scrollPosition", null);
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html")).default,
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
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"], _services_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"]])
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/mobile-navigation/mobile-navigation.component.scss": 
        /*!*******************************************************************************!*\
          !*** ./src/app/components/mobile-navigation/mobile-navigation.component.scss ***!
          \*******************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\n.mobile-nav {\n  position: fixed;\n  top: 56px;\n  left: 0;\n  z-index: 1030;\n  height: calc(100% - 56px);\n  overflow-y: auto;\n  overflow-x: hidden; }\n.mobile-nav .nav-link {\n    color: #343434;\n    padding: 1rem; }\n@media (min-width: 768px) {\n  .mobile-nav {\n    display: none; } }\n.mobile-header .col {\n  padding-top: .65rem;\n  padding-bottom: .35rem; }\n.mobile-header .active {\n  background: #60cd18; }\nheader {\n  height: 56px;\n  position: fixed;\n  z-index: 2;\n  left: 0; }\n.mobile-header {\n  background: #333;\n  color: #fff;\n  height: 56px;\n  position: fixed;\n  z-index: 2;\n  left: 0; }\n.mobile-breadcrumb {\n  background: #fff;\n  height: 56px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2FuaW1hdGlvbnMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc3JjL2FwcC9jb21wb25lbnRzL21vYmlsZS1uYXZpZ2F0aW9uL21vYmlsZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3NlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL192YXJpYWJsZXMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc2Nzcy9ib290c3RyYXAtY29yZS9taXhpbnMvX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0RBOzs7Ozs7R0FNRztBQ25FSDtFQUNFLGdCQUFlO0VBQ2YsVUFBUztFQUNULFFBQU87RUFDUCxjQ29Zc0M7RURuWXRDLDBCQUF5QjtFQUN6QixpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBS25CO0FBWkQ7SUFTSSxlQ09jO0lETmQsY0NnSFMsRUQvR1Y7QUUrQ0M7RUY1Q0Y7SUFDRSxjQUFhLEVBQ2QsRUFBQTtBQUdIO0VBRUksb0JBQW1CO0VBQ25CLHVCQUFzQixFQUV2QjtBQUxIO0VBT0ksb0JDbUIyQixFRGxCNUI7QUFHSDtFQUNFLGFBQVk7RUFDWixnQkFBZTtFQUNmLFdBQVU7RUFDVixRQUFPLEVBRVI7QUFDRDtFQUNFLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsYUFBVztFQUNYLGdCQUFlO0VBQ2YsV0FBVTtFQUNWLFFBQU8sRUFDUjtBQUNEO0VBQ0UsaUJDdENhO0VEdUNiLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9iaWxlLW5hdmlnYXRpb24vbW9iaWxlLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYW5pbWF0aW9uczogKFxuICBzbGlkZUluTGVmdDogc2xpZGVJbkxlZnQgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5SaWdodDogc2xpZGVJblJpZ2h0ICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluVXA6IHNsaWRlSW5VcCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJbkRvd246IHNsaWRlSW5Eb3duICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBmYWRlSW46IGZhZGVJbiAkdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uLFxuICBmYWRlSW5VcDogZmFkZUluVXAgJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbixcbik7XG5cbkBtaXhpbiBhbmltYXRpb25zKCkge1xuICBAaWYgJGVuYWJsZS10cmFuc2l0aW9ucyB7XG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgZmFkZUluVXAge1xuICAgICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMzBweCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluUmlnaHQge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluTGVmdCB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluVXAge1xuICAgICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBzbGlkZUluRG93biB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTtcbiAgICAgIH1cbiAgICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogQWRkIG9uZSBvciBtb3JlIHRyYW5zaXRpb25zXG4gKlxuICogQGV4YW1wbGVcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCdzbGlkZUluVXAnKTtcbiAqIEBpbmNsdWRlIGFkZC10cmFuc2l0aW9uKCgnc2xpZGVJblVwJywnZmFkZUluJykpXG4gKi9cbkBtaXhpbiBhZGQtdHJhbnNpdGlvbigkbGlzdCkge1xuICAkY29tYmluZWQ6ICcnO1xuICBAaWYgdHlwZS1vZigkbGlzdCkgPT0gJ3N0cmluZycge1xuICAgIGFuaW1hdGlvbjogbWFwX2dldCgkYW5pbWF0aW9ucywgJGxpc3QpO1xuICB9IEBlbHNlIGlmIHR5cGUtb2YoJGxpc3QpID09ICdsaXN0JyB7XG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBsZW5ndGgoJGxpc3QpIHtcbiAgICAgICRhbmltOiBtYXBfZ2V0KCRhbmltYXRpb25zLCBudGgoJGxpc3QsICRpKSk7XG4gICAgICBAaWYgJGFuaW0gPT0gbnVsbCB7XG4gICAgICAgIEB3YXJuIG50aCgkbGlzdCwgJGkpIHVucXVvdGUoJ25vdCBmb3VuZCwgcGxlYXNlIHVzZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBhbmltYXRpb25zOicpIHRvLWxpc3QoJGFuaW1hdGlvbnMsICdrZXlzJyk7XG4gICAgICB9XG5cbiAgICAgIEBpZiAkaSA9PSBsZW5ndGgoJGxpc3QpIHtcbiAgICAgICAgJGNvbWJpbmVkOiAkY29tYmluZWQgKyAkYW5pbTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgJGNvbWJpbmVkOiAkY29tYmluZWQgKyAkYW5pbSArICcsJztcbiAgICAgIH1cbiAgICB9XG4gICAgYW5pbWF0aW9uOiB1bnF1b3RlKCRjb21iaW5lZCk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvbWl4aW5zL21peGluc1wiO1xuLm1vYmlsZS1uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTZweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHppbmRleC1maXhlZDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NnB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAubmF2LWxpbmsge1xuICAgIGNvbG9yOiAkZGFyaztcbiAgICBwYWRkaW5nOiAkc3BhY2VyO1xuICB9XG59XG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XG4gIC5tb2JpbGUtbmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5tb2JpbGUtaGVhZGVyIHtcbiAgLmNvbCB7XG4gICAgcGFkZGluZy10b3A6IC42NXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjM1cmVtO1xuICAgIC8vcGFkZGluZzogLjM3NWVtIDA7XG4gIH1cbiAgLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogJGdyZWVuO1xuICB9XG59XG5cbmhlYWRlciB7XG4gIGhlaWdodDogNTZweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICBsZWZ0OiAwO1xuICAvL3BhZGRpbmctbGVmdDogMDtcbn1cbi5tb2JpbGUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDo1NnB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIGxlZnQ6IDA7XG59XG4ubW9iaWxlLWJyZWFkY3J1bWIge1xuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gIGhlaWdodDogNTZweDtcbn1cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuJHdoaXRlOiAgICAjZmZmICFkZWZhdWx0O1xuJGdyYXktMTAwOiAjZjhmOGY4ICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllOWU5ICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVkZWRlICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VjZWNlICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRhZGFkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjODY4Njg2ICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk0OTQ5ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzNDM0ICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyMTIxICFkZWZhdWx0O1xuJGJsYWNrOiAgICAjMDAwICFkZWZhdWx0O1xuXG5cbiRncmF5czogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGdyYXlzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCIxMDBcIjogJGdyYXktMTAwLFxuICAgICAgXCIyMDBcIjogJGdyYXktMjAwLFxuICAgICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgICAgXCI0MDBcIjogJGdyYXktNDAwLFxuICAgICAgXCI1MDBcIjogJGdyYXktNTAwLFxuICAgICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgICAgXCI3MDBcIjogJGdyYXktNzAwLFxuICAgICAgXCI4MDBcIjogJGdyYXktODAwLFxuICAgICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICAgKSxcbiAgICAkZ3JheXNcbik7XG5cblxuJHJlZDogICAgICAgICAgICAgICAgICAgI0YwMzUyOTtcbiRyZWQtZGFyazogICAgICAgICAgICAgICNEODFBMUE7IC8vIFNFQiBzcGVjaWZpY1xuJHJlZC1kYXJrZXI6ICAgICAgICAgICAgI0JCMDAwQzsgLy8gU0VCIHNwZWNpZmljXG4keWVsbG93LWRhcmtlcjogICAgICAgICAjRjhBMDAwOyAvLyBTRUIgc3BlY2lmaWNcbiR5ZWxsb3ctZGFyazogICAgICAgICAgICNGRkI0MDA7IC8vIFNFQiBzcGVjaWZpY1xuJHllbGxvdzogICAgICAgICAgICAgICAgI0ZGQzUwMDtcbiRncmVlbjogICAgICAgICAgICAgICAgICM2MGNkMTg7XG4kZ3JlZW4tZGFyazogICAgICAgICAgICAjNDVCNDAwOyAvLyBTRUIgc3BlY2lmaWNcbiRncmVlbi1kYXJrZXI6ICAgICAgICAgICMzNzlEMDA7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWU6ICAgICAgICAgICAgICAgICAgIzQxQjBFRTtcbiRibHVlLWRhcms6ICAgICAgICAgICAgICMwMDkyRTE7IC8vIFNFQiBzcGVjaWZpY1xuJGJsdWUtZGFya2VyOiAgICAgICAgICAgIzAwN0FDNzsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlOiAgICAgICAgICAgICAgICAjNjczQUI2O1xuJHB1cnBsZS1kYXJrOiAgICAgICAgICAgIzRGMkM5OTsgLy8gU0VCIHNwZWNpZmljXG4kcHVycGxlLWRhcmtlcjogICAgICAgICAjM0YyNTg3OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kcHJpbWFyeTogICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICRncmVlbi1kYXJrZXIgIWRlZmF1bHQ7XG4kaW5mbzogICAgICAgICAgJHB1cnBsZSAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAkeWVsbG93ICFkZWZhdWx0O1xuJGRhbmdlcjogICAgICAgICRyZWQtZGFyayAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICAgICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gICAgICBcInN1Y2Nlc3NcIjogICAgJHN1Y2Nlc3MsXG4gICAgICBcImluZm9cIjogICAgICAgJGluZm8sXG4gICAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gICAgICBcImRhbmdlclwiOiAgICAgJGRhbmdlcixcbiAgICAgIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gICAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbiAgICApLFxuICAgICR0aGVtZS1jb2xvcnNcbik7XG5cbi8vIHRoZW1lIGljb25zIC8vIFNFQiBzcGVjaWZpY1xuJGljb24tZmlsbC1jb2xvcjogJGJsYWNrO1xuJHRoZW1lLWljb25zOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtaWNvbnM6IG1hcC1tZXJnZShcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN1Y2Nlc3NcIjogICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyUzRSUzQ3BhdGggZD0nTTQzNS44NDggODMuNDY2TDE3Mi44MDQgMzQ2LjUxbC05Ni42NTItOTYuNjUyYy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcxIDBsLTI4LjI4NCAyOC4yODRjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MWwxMzMuNDIxIDEzMy40MjFjNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MSAwbDI5OS44MTMtMjk5LjgxM2M0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFsLTI4LjI4NC0yOC4yODRjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NyAweicgZmlsbD0nI3skaWNvbi1maWxsLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmZvXCI6ICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGQ9J000NDggODB2MzUyYzAgMjYuNTEtMjEuNDkgNDgtNDggNDhINDhjLTI2LjUxIDAtNDgtMjEuNDktNDgtNDhWODBjMC0yNi41MSAyMS40OS00OCA0OC00OGgzNTJjMjYuNTEgMCA0OCAyMS40OSA0OCA0OHptLTQ4IDM0NlY4NmE2IDYgMCAwIDAtNi02SDU0YTYgNiAwIDAgMC02IDZ2MzQwYTYgNiAwIDAgMCA2IDZoMzQwYTYgNiAwIDAgMCA2LTZ6TTIyNCAxMThjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHonIGZpbGw9JyN7JGljb24tZmlsbC1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2FybmluZ1wiOiAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInJTNFJTNDcGF0aCBkPSdNMjQ4Ljc0NyAyMDQuNzA1bDYuNTg4IDExMmMuMzczIDYuMzQzIDUuNjI2IDExLjI5NSAxMS45NzkgMTEuMjk1aDQxLjM3YTEyIDEyIDAgMCAwIDExLjk3OS0xMS4yOTVsNi41ODgtMTEyYy40MDUtNi44OTMtNS4wNzUtMTIuNzA1LTExLjk3OS0xMi43MDVoLTU0LjU0N2MtNi45MDMgMC0xMi4zODMgNS44MTItMTEuOTc4IDEyLjcwNXpNMzMwIDM4NGMwIDIzLjE5Ni0xOC44MDQgNDItNDIgNDJzLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDIgNDIgMTguODA0IDQyIDQyem0tLjQyMy0zNjAuMDE1Yy0xOC40MzMtMzEuOTUxLTY0LjY4Ny0zMi4wMDktODMuMTU0IDBMNi40NzcgNDQwLjAxM0MtMTEuOTQ1IDQ3MS45NDYgMTEuMTE4IDUxMiA0OC4wNTQgNTEySDUyNy45NGMzNi44NjUgMCA2MC4wMzUtMzkuOTkzIDQxLjU3Ny03MS45ODdMMzI5LjU3NyAyMy45ODV6TTUzLjE5MSA0NTUuMDAyTDI4Mi44MDMgNTcuMDA4YzIuMzA5LTQuMDAyIDguMDg1LTQuMDAyIDEwLjM5NCAwbDIyOS42MTIgMzk3Ljk5M2MyLjMwOCA0LS41NzkgOC45OTgtNS4xOTcgOC45OThINTguMzg4Yy00LjYxNy4wMDEtNy41MDQtNC45OTctNS4xOTctOC45OTd6JyBmaWxsPScjeyRpY29uLWZpbGwtY29sb3J9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhbmdlclwiOiAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyUzRSUzQ3BhdGggZD0nTTI0OC43NDcgMjA0LjcwNWw2LjU4OCAxMTJjLjM3MyA2LjM0MyA1LjYyNiAxMS4yOTUgMTEuOTc5IDExLjI5NWg0MS4zN2ExMiAxMiAwIDAgMCAxMS45NzktMTEuMjk1bDYuNTg4LTExMmMuNDA1LTYuODkzLTUuMDc1LTEyLjcwNS0xMS45NzktMTIuNzA1aC01NC41NDdjLTYuOTAzIDAtMTIuMzgzIDUuODEyLTExLjk3OCAxMi43MDV6TTMzMCAzODRjMCAyMy4xOTYtMTguODA0IDQyLTQyIDQycy00Mi0xOC44MDQtNDItNDIgMTguODA0LTQyIDQyLTQyIDQyIDE4LjgwNCA0MiA0MnptLS40MjMtMzYwLjAxNWMtMTguNDMzLTMxLjk1MS02NC42ODctMzIuMDA5LTgzLjE1NCAwTDYuNDc3IDQ0MC4wMTNDLTExLjk0NSA0NzEuOTQ2IDExLjExOCA1MTIgNDguMDU0IDUxMkg1MjcuOTRjMzYuODY1IDAgNjAuMDM1LTM5Ljk5MyA0MS41NzctNzEuOTg3TDMyOS41NzcgMjMuOTg1ek01My4xOTEgNDU1LjAwMkwyODIuODAzIDU3LjAwOGMyLjMwOS00LjAwMiA4LjA4NS00LjAwMiAxMC4zOTQgMGwyMjkuNjEyIDM5Ny45OTNjMi4zMDggNC0uNTc5IDguOTk4LTUuMTk3IDguOTk4SDU4LjM4OGMtNC42MTcuMDAxLTcuNTA0LTQuOTk3LTUuMTk3LTguOTk3eicgZmlsbD0nI3skaWNvbi1maWxsLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAkdGhlbWUtaWNvbnNcbik7XG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtY2FyZXQ6ICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXNoYWRvd3M6ICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JhZGllbnRzOiAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdHJhbnNpdGlvbnM6ICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmlkLWNsYXNzZXM6ICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXBvaW50ZXItY3Vyc29yLWZvci1idXR0b25zOiAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcHJpbnQtc3R5bGVzOiAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yZXNwb25zaXZlLWZvbnQtc2l6ZXM6ICAgICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS12YWxpZGF0aW9uLWljb25zOiAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1yZXNwb25zaXZlLWd1dHRlcnM6ICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLWJ1dHRvbi12YXJpYXRpb25zOiAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtbmctYm9vdHN0cmFwOiAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1hbmd1bGFyLWdlbmVyaWMtdGFibGU6ICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLW5neC10b2FzdHI6ICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtZGVwcmVjYXRpb24tbWVzc2FnZXM6ICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuXG4vLyBTcGFjaW5nXG4vL1xuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxuLy8gdmFyaWFibGVzLiBNb3N0bHkgZm9jdXNlZCBvbiBzcGFjaW5nLlxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cblxuJHNwYWNlcjogMXJlbSAhZGVmYXVsdDtcbiRzcGFjZXJzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc3BhY2VyczogbWFwLW1lcmdlKFxuICAgIChcbiAgICAgIDA6IDAsXG4gICAgICAxOiAoJHNwYWNlciAqIC4yNSksXG4gICAgICAyOiAoJHNwYWNlciAqIC41KSxcbiAgICAgIDM6ICRzcGFjZXIsXG4gICAgICA0OiAoJHNwYWNlciAqIDIpLFxuICAgICAgNTogKCRzcGFjZXIgKiAzKVxuICAgICksXG4gICAgJHNwYWNlcnNcbik7XG5cbi8vIFRoaXMgdmFyaWFibGUgYWZmZWN0cyB0aGUgYC5oLSpgIGFuZCBgLnctKmAgY2xhc3Nlcy5cbiRzaXplczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNpemVzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgMjU6IDI1JSxcbiAgICAgIDUwOiA1MCUsXG4gICAgICA3NTogNzUlLFxuICAgICAgMTAwOiAxMDAlLFxuICAgICAgYXV0bzogYXV0b1xuICAgICksXG4gICAgJHNpemVzXG4pO1xuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuXG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgIzQ0NCAhZGVmYXVsdDtcblxuXG4vLyBQYXJhZ3JhcGhzXG4vL1xuLy8gU3R5bGUgcCBlbGVtZW50LlxuXG4vLyBHcmlkIGJyZWFrcG9pbnRzXG5cbi8vIEdyaWQgY29udGFpbmVyc1xuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtZ3V0dGVyLXdpZHRoOiBtYXAtZ2V0KCRzcGFjZXJzLCAzKSoyICFkZWZhdWx0O1xuXG4vLyBTRUIgc3BlY2lmaWMgb3ZlcnJpZGUgd2hlbiByZXNwb25zaXZlIGd1dHRlcnMgYXJlIGVuYWJsZWRcbkBpZiAoJGVuYWJsZS1yZXNwb25zaXZlLWd1dHRlcnMpIHtcbiAgJGdyaWQtZ3V0dGVyLXdpZHRoOiBtYXAtZ2V0KCRzcGFjZXJzLCAyKTtcbn1cblxuLy8gU0VCIHNwZWNpZmljXG4kcmVzcG9uc2l2ZS1ndXR0ZXJzOiAoXG4gIHNtOm1hcC1nZXQoJHNwYWNlcnMsIDIpKjIsXG4gIGxnOm1hcC1nZXQoJHNwYWNlcnMsIDIpKjIsXG4gIHhsOm1hcC1nZXQoJHNwYWNlcnMsIDMpKjJcbikgIWRlZmF1bHQ7XG5cbi8vIENvbXBvbmVudHNcbi8vXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXG5cbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXV0aWxpdHk6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRib3JkZXItcmFkaXVzLXV0aWxpdHktbGc6ICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJvcmRlci1yYWRpdXMtdXRpbGl0eS1zbTogICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbiR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uOi40cyBlYXNlLWluLW91dCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uOiAgICAuMTVzIGxpbmVhciAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdHJhbnNpdGlvbi1mYWRlOiAgICAgICAgICAgICBvcGFjaXR5ICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBGb250c1xuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcbiRzZWItZm9udC1wYXRoOiAgICAgICAgICAgICAgIFwifkBzZWJncm91cC9mb250cy9mb250c1wiICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgIFwiU0VCU2Fuc1NlcmlmXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiVHJlYnVjaGV0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICAgICAgIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2UgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBBc3N1bWVzIHRoZSBicm93c2VyIGRlZmF1bHQsIHR5cGljYWxseSBgMTZweGBcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAxLjI1KSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICAgICAgICAgICAgICAgICgkZm9udC1zaXplLWJhc2UgKiAuODc1KSAhZGVmYXVsdDtcbiRmb250LXNpemUteHM6ICAgKCRmb250LXNpemUtYmFzZSAqIC42ODc1KSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cblxuJGZvbnQtd2VpZ2h0LW1lZGl1bTogICAgICAgICAgNTAwICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAzICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0O1xuJGg0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRoNi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDAuODc1ICFkZWZhdWx0O1xuXG4kaDEtbWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGgyLW1kLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMy1tZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kaDEtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMi1zbS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDMtc20tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgICMyMjIgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG5cbi8vIExpbmtzXG4vL1xuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxuXG4kbGluay1jb2xvcjogICAgICAgICAgICAgICAgJGJsdWUtZGFya2VyICFkZWZhdWx0O1xuJGxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpbmstd2VpZ2h0OiAgICAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kZXh0ZXJuYWwtbGluay1pY29uLWNvbG9yOiAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbi1jb2xvcjogICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRleHRlcm5hbC1saW5rLWljb246ICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBkPSdNNDAwIDMySDQ4QzIxLjQ5IDMyIDAgNTMuNDkgMCA4MHYzNTJjMCAyNi41MSAyMS40OSA0OCA0OCA0OGgzNTJjMjYuNTEgMCA0OC0yMS40OSA0OC00OFY4MGMwLTI2LjUxLTIxLjQ5LTQ4LTQ4LTQ4em0tNiA0MDBINTRhNiA2IDAgMCAxLTYtNlY4NmE2IDYgMCAwIDEgNi02aDM0MGE2IDYgMCAwIDEgNiA2djM0MGE2IDYgMCAwIDEtNiA2em0tNTQtMzA0bC0xMzYgLjE0NWMtNi42MjcgMC0xMiA1LjM3My0xMiAxMlYxNjcuOWMwIDYuNzIyIDUuNTIyIDEyLjEzMyAxMi4yNDMgMTEuOTk4bDU4LjAwMS0yLjE0MUw5OS41MTUgMzQwLjQ4NWMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxbDIzLjAzIDIzLjAyOWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcgMGwxNjIuNzI5LTE2Mi43MjktMi4xNDEgNTguMDAxYy0uMTM2IDYuNzIxIDUuMjc1IDEyLjI0MiAxMS45OTggMTIuMjQyaDI3Ljc1NWM2LjYyOCAwIDEyLTUuMzczIDEyLTEyTDM1MiAxNDBjMC02LjYyNy01LjM3My0xMi0xMi0xMnonIGZpbGw9JyN7JGV4dGVybmFsLWxpbmstaWNvbi1jb2xvcn0nIC8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbjogICAgICAgIHN0ci1yZXBsYWNlKCRleHRlcm5hbC1saW5rLWljb24sIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRleHRlcm5hbC1saW5rLWljb24tY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGV4dGVybmFsLWxpbmstaG92ZXItaWNvbi1jb2xvciArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpKTtcblxuLy8gR3JpZCBicmVha3BvaW50c1xuLy9cbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuXG4kZ3JpZC1icmVha3BvaW50czogKFxuICAgICAgICB4czogMCxcbiAgICAgICAgc206IDU3NnB4LFxuICAgICAgICBtZDogNzY4cHgsXG4gICAgICAgIGxnOiA5OTJweCxcbiAgICAgICAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAuNjI1cmVtIC43NXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1jZWxsLXBhZGRpbmctc206ICAgICAgIC4yNzVyZW0gLjNyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsdWUsIC4wNzUpICFkZWZhdWx0O1xuXG4kdGFibGUtaGVhZC1jb2xvcjogICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG5cbiR0YWJsZS1leHBhbmQtYmc6ICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4kdGFibGUtc29ydC1hY3RpdmUtY29sb3I6ICRibHVlLWRhcmsgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRhYmxlLXNvcnQtYWN0aXZlLWhvdmVyLWNvbG9yOiAkbGluay1ob3Zlci1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdGFibGUtc29ydC1ob3Zlci1jb2xvcjogJGdyYXktNDAwICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0YWJsZS1zb3J0LWRpc2FibGVkLWNvbG9yOiAkZ3JheS0zMDAgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRhYmxlLXNvcnQtY29sb3I6ICRncmF5LTUwMCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuNTYyNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14OiAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogICAgICAuMjgxMjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteC1zbTogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgIDFyZW0gIWRlZmF1bHQ7XG5cbi8vIEJ1dHRvbnNcbi8vXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cblxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDtcbiRidG4tZGlzYWJsZWQtb3BhY2l0eTogICAgICAgIDEgIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kYnRuLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIDAgMCAwICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogICAgICAgMCAwIDAgMCAhZGVmYXVsdDtcblxuXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICA0cHggIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICAgICAgICA0cHggIWRlZmF1bHQ7XG5cbi8vIEZvcm1zXG4kaW5wdXQtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgMCAwIDAgMCAhZGVmYXVsdDtcblxuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cblxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0O1xuXG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgIC42MjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24taWNvbjogICAgICAgICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQ0OCA1MTInJTNFJTNDcGF0aCBkPSdNNDQxLjkgMTY3LjNsLTE5LjgtMTkuOGMtNC43LTQuNy0xMi4zLTQuNy0xNyAwTDIyNCAzMjguMiA0Mi45IDE0Ny41Yy00LjctNC43LTEyLjMtNC43LTE3IDBMNi4xIDE2Ny4zYy00LjcgNC43LTQuNyAxMi4zIDAgMTdsMjA5LjQgMjA5LjRjNC43IDQuNyAxMi4zIDQuNyAxNyAwbDIwOS40LTIwOS40YzQuNy00LjcgNC43LTEyLjMgMC0xN3onIGZpbGw9JyN7JGJsdWV9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7XG4kZHJvcGRvd24taWNvbi1hY3RpdmU6ICAgICAgICAgICAgICBzdHItcmVwbGFjZSgkZHJvcGRvd24taWNvbiwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGJsdWUgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJHdoaXRlICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIikpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJGRyb3Bkb3duLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbi8vIEZvcm1zXG5cbiRsYWJlbC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA2NSUgNjUlICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCclM0UlM0NjaXJjbGUgcj0nMy41JyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZ30nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRjdXN0b20tc2xpZGUtdG9nZ2xlLWluZGljYXRvci1pY29uLWNoZWNrZWQ6ICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzRSUzQ2NpcmNsZSByPSczLjUnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAgICAgJGJsdWU7XG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAgICAgICAgICAgICAxNnB4IDE2cHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogICAgICAgICAgIHN0ci1yZXBsYWNlKCRkcm9wZG93bi1pY29uLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkYmx1ZSArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogICAgICAgNHB4ICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1ib3gtc2hhZG93OiAgICAgICAgICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGN1c3RvbS1maWxlLXRleHQ6IChcbiAgZW46IFwiQnJvd3NlXCJcbikgIWRlZmF1bHQ7XG5cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yOiAgICAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6ICAgICAgICAgIHN0ci1yZXBsYWNlKG1hcC1nZXQoJHRoZW1lLWljb25zLCAnc3VjY2VzcycpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkaWNvbi1maWxsLWNvbG9yICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIiksIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgc3RyLXJlcGxhY2UobWFwLWdldCgkdGhlbWUtaWNvbnMsICdkYW5nZXInKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGljb24tZmlsbC1jb2xvciArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1saW5lLXRoaWNrbmVzczogICAgICAycHggIWRlZmF1bHQ7XG5cblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LWRyb3Bkb3duLWJhY2tkcm9wOiAgICAgICAgICA5OTAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtc3RpY2t5OiAgICAgICAgICAgICAgICAgICAgIDEwMjAgIWRlZmF1bHQ7XG4kemluZGV4LWZpeGVkOiAgICAgICAgICAgICAgICAgICAgICAxMDMwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA0MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTAgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDYwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA3MCAhZGVmYXVsdDtcblxuLy8gTmF2c1xuJG5hdi1saW5rLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjU2MjVyZW0gIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRuYXYtdGFicy1saW5rLWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRuYXYtdGFicy1saW5rLWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJG5hdi10YWJzLWxpbmstZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4vLyBOYXZiYXJcbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgIC40Mzc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1mb250LXdlaWdodDogICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbi8vIFBhZ2luYXRpb25cbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15ICFkZWZhdWx0Oy8vIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206ICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDsvLy4yNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7Ly8uNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAkYmx1ZSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDRweCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG5cblxuLy8gSnVtYm90cm9uXG5cbi8vIENhcmRzXG4kY2FyZC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAwIDFweCAycHggMCByZ2JhKCRibGFjaywgLjA1KSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbi8vIFRvb2x0aXBzXG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cbi8vIFBvcG92ZXJzXG5cbi8vIEJhZGdlc1xuXG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuXG5cbi8vIE1vZGFsc1xuXG4vLyBQYWRkaW5nIGFwcGxpZWQgdG8gdGhlIG1vZGFsIGJvZHlcblxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgMCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogICAgICAgIDAgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogICAgICAgICAxcHggIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAwICFkZWZhdWx0O1xuXG5cblxuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgMCAhZGVmYXVsdDtcbiRtb2RhbC1hc2lkZS13aWR0aDogICAgICAgICAgICAgICAgIDMyMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRtb2RhbC1hc2lkZS1sZy13aWR0aDogICAgICAgICAgICAgIG1hcF9nZXQoJGdyaWQtYnJlYWtwb2ludHMsICdtZCcpOyAvLyA4MDBweCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6ICAgICAgIDAgMCAwIDAgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vNTAwXG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGFsZXJ0LWljb24td2lkdGg6ICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kYWxlcnQtaWNvbi1oZWlnaHQ6ICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRhbGVydC1pY29uLXBhZGRpbmc6ICRhbGVydC1pY29uLXdpZHRoICsgKCRhbGVydC1wYWRkaW5nLXgqMik7IC8vIFNFQiBTcGVjaWZpY1xuXG4vLyBUb2FzdCBub3RpZmljYXRpb25zXG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYWxlcnQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdG9hc3QtcGFkZGluZzogICAgICAgICAgICAgICAgICAgICAkYWxlcnQtcGFkZGluZy14ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC13aWR0aDogICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgIDAgMCAuNXJlbSByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuJHRvYXN0LXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuXG4vLyBQcm9ncmVzcyBiYXJzXG5cbi8vIExpc3QgZ3JvdXBcbiRsaXN0LWdyb3VwLWJ1bGxldC1pY29uOiBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDEgMSclM0UlM0NyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIHN0eWxlPSdmaWxsOiN7JGRhcmt9OycgLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kbGlzdC1ncm91cC1jaGVjay1pY29uOiBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInJTNFJTNDcGF0aCBkPSdNNDM1Ljg0OCA4My40NjZMMTcyLjgwNCAzNDYuNTFsLTk2LjY1Mi05Ni42NTJjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMGwtMjguMjg0IDI4LjI4NGMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxbDEzMy40MjEgMTMzLjQyMWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcxIDBsMjk5LjgxMy0yOTkuODEzYzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MWwtMjguMjg0LTI4LjI4NGMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3IDB6JyBmaWxsPScjeyRncmVlbn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kbGlzdC1ncm91cC1tYXJnaW4tYm90dG9tOiAxcmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRsaXN0LWdyb3VwLWJnOiAgICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRibHVlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWJnOiAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRkYXJrICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIEltYWdlIHRodW1ibmFpbHNcblxuLy8gRmlndXJlc1xuXG4vLyBCcmVhZGNydW1ic1xuJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy14OiAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWJnOiAgICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvci1saWdodDogICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvci1saWdodDogICAgICR3aGl0ZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kYnJlYWRjcnVtYi1hY3RpdmUtZm9udC13ZWlnaHQ6ICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI1NiA1MTInJTNFJTNDcGF0aCBkPSdNMjQuNzA3IDM4LjEwMUw0LjkwOCA1Ny44OTljLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MUwxODUuNjA3IDI1NiA0LjkwOCA0MzcuMTNjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MUwyNC43MDcgNDczLjljNC42ODYgNC42ODYgMTIuMjg0IDQuNjg2IDE2Ljk3MSAwbDIwOS40MTQtMjA5LjQxNGM0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFMNDEuNjc4IDM4LjEwMWMtNC42ODctNC42ODctMTIuMjg1LTQuNjg3LTE2Ljk3MSAweicgZmlsbD0nI3skYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRicmVhZGNydW1iLWJhY2staWNvbjogICAgICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjU2IDUxMiclM0UlM0NwYXRoIGQ9J00yMzEuMjkzIDQ3My44OTlsMTkuNzk5LTE5Ljc5OWM0LjY4Ni00LjY4NiA0LjY4Ni0xMi4yODQgMC0xNi45NzFMNzAuMzkzIDI1NiAyNTEuMDkyIDc0Ljg3YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUwyMzEuMjkzIDM4LjFjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMEw0LjkwOCAyNDcuNTE1Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFMMjE0LjMyMiA0NzMuOWM0LjY4NyA0LjY4NiAxMi4yODUgNC42ODYgMTYuOTcxLS4wMDF6JyBmaWxsPScjeyRicmVhZGNydW1iLWRpdmlkZXItY29sb3J9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGJyZWFkY3J1bWItZGl2aWRlci13aWR0aDogICAgICAgICAgMTVweCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kYnJlYWRjcnVtYi1kaXZpZGVyLWhlaWdodDogICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG5cbi8vIENsb3NlXG5cbi8vIENvZGVcblxuLy8gUHJpbnRpbmdcblxuQGltcG9ydCBcImJvb3RzdHJhcC1jb3JlL2Z1bmN0aW9uc1wiO1xuQGltcG9ydCBcImJvb3RzdHJhcC1jb3JlL3ZhcmlhYmxlc1wiO1xuXG4vLyBTY3JvbGxiYXJcbiRzY3JvbGxiYXItdHJhY2stYmc6ICAkZ3JheS0xMDA7XG4kc2Nyb2xsYmFyLXRodW1iLWJnOiAgJGdyYXktNDAwO1xuJHNjcm9sbGJhci10cmFjay1kYXJrLWJnOiAgJGRhcms7XG4kc2Nyb2xsYmFyLXRodW1iLWRhcmstYmc6ICAkZ3JheS05MDA7XG4kc2Nyb2xsYmFyLXRodW1iLWFjdGl2ZS1iZzogJGJsdWU7XG4kc2Nyb2xsYmFyLXRoaWNrbmVzczogICAgIDEwcHg7XG5cbi8vIEFjY29yZGlvblxuXG4kYWNjb3JkaW9uLWljb246ICAgICAgICAgICAgJGRyb3Bkb3duLWljb24gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1pY29uLWRpc2FibGVkOiAgIHN0ci1yZXBsYWNlKCRhY2NvcmRpb24taWNvbiwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGJsdWUgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGdyYXktNDAwICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIikpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYmctaG92ZXI6ICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib3JkZXItY29sb3I6ICAgICR0YWJsZS1ib3JkZXItY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib3JkZXItd2lkdGg6ICAgICR0YWJsZS1ib3JkZXItd2lkdGggIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1oZWFkZXItcGFkZGluZzogIDAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib2R5LXBhZGRpbmc6ICAgIDAgMXJlbSAxcmVtIDIuNXJlbSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWl0ZW0tcGFkZGluZy15OiAgLjVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1pdGVtLXBhZGRpbmcteDogIDFyZW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib2R5LWJnOiAgICAgICAgIHRyYW5zcGFyZW50ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tYm9keS1iZy1hY3RpdmU6ICAkYWNjb3JkaW9uLWJnLWhvdmVyICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24tc2l6ZTogICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */";
            /***/ 
        }),
        /***/ "./src/app/components/mobile-navigation/mobile-navigation.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/mobile-navigation/mobile-navigation.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: MobileNavigationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNavigationComponent", function () { return MobileNavigationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            /* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/menu.service */ "./src/app/services/menu.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
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
                return MobileNavigationComponent;
            }());
            MobileNavigationComponent.ctorParameters = function () { return [
                { type: _services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] }
            ]; };
            MobileNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-mobile-navigation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mobile-navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/mobile-navigation/mobile-navigation.component.html")).default,
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
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mobile-navigation.component.scss */ "./src/app/components/mobile-navigation/mobile-navigation.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]])
            ], MobileNavigationComponent);
            /***/ 
        }),
        /***/ "./src/app/components/side-navigation/side-navigation.component.scss": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/side-navigation/side-navigation.component.scss ***!
          \***************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = "/**\n * Add one or more transitions\n *\n * @example\n * @include add-transition('slideInUp');\n * @include add-transition(('slideInUp','fadeIn'))\n */\n.side-nav {\n  transform: translate3d(-256px, 0, 0);\n  transition: transform 400ms ease-in-out;\n  background: #333;\n  width: 256px;\n  height: 100vh;\n  position: fixed;\n  z-index: 1030;\n  left: 0; }\n.side-nav.active {\n    transform: translate3d(0, 0, 0);\n    display: block;\n    z-index: 1030; }\n@media (max-width: 767.98px) {\n  .side-nav.active {\n    display: none; } }\n@media (min-width: 992px) {\n  .side-nav {\n    transform: translate3d(0, 0, 0); } }\n.seb-logo {\n  height: 56px;\n  width: 56px; }\n.nav-link {\n  color: #fff;\n  font-weight: normal; }\n.menu-item:hover {\n  background: rgba(96, 205, 24, 0.25);\n  /*.nav-link {\n    color: $dark;\n  }*/ }\n.menu-item.active {\n  background: #60cd18; }\n.menu-item.active .nav-link {\n    font-weight: 500; }\n.menu-item.active-parent .nav-link {\n  font-weight: 500; }\n.menu-item.active-parent .nav-link::after {\n    display: block;\n    content: \"\";\n    left: 0;\n    width: 5px;\n    background: #60cd18;\n    top: 0;\n    position: absolute;\n    height: 100%;\n    -webkit-animation: expand ease-out .2s;\n            animation: expand ease-out .2s;\n    transition: transform .2s ease-in-out; }\n.menu-item.active-match .nav-link {\n  font-weight: 500; }\n.nav-wrapper {\n  height: calc(100% - 56px);\n  overflow-y: hidden; }\n.nav-wrapper:hover {\n    overflow-y: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2FuaW1hdGlvbnMuc2NzcyIsIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc3JjL2FwcC9jb21wb25lbnRzL3NpZGUtbmF2aWdhdGlvbi9zaWRlLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCIvaG9tZS90cmF2aXMvYnVpbGQvc2ViZ3JvdXAvYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL2hvbWUvdHJhdmlzL2J1aWxkL3NlYmdyb3VwL2Jvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcC1jb3JlL21peGlucy9fYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErREE7Ozs7OztHQU1HO0FDbEVIO0VBQ0UscUNBQWtDO0VBQ2xDLHdDQUF1QztFQUN2QyxpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLGNBQWE7RUFDYixnQkFBZTtFQUNmLGNDZ1lzQztFRC9YdEMsUUFBTyxFQU1SO0FBZEQ7SUFVSSxnQ0FBNkI7SUFDN0IsZUFBYztJQUNkLGNDMlhvQyxFRDFYckM7QUV5REM7RUZ0REY7SUFDRSxjQUFhLEVBQ2QsRUFBQTtBRXVDQztFRm5DRjtJQUNFLGdDQUE2QixFQUM5QixFQUFBO0FBR0g7RUFDRSxhQUFXO0VBQ1gsWUFBVyxFQUNaO0FBRUQ7RUFDRSxZQUFXO0VBQ1gsb0JBQW1CLEVBRXBCO0FBRUQ7RUFDRSxvQ0NLNkI7RURIN0I7O0tBRUcsRUFDSjtBQUVEO0VBS0ksb0JDUDJCLEVEUTVCO0FBTkg7SUFHTSxpQkN1SzJCLEVEdEs1QjtBQUpMO0VBU00saUJDaUsyQixFRHBKNUI7QUF0Qkw7SUFXUSxlQUFjO0lBQ2QsWUFBVztJQUNYLFFBQU87SUFDUCxXQUFVO0lBQ1Ysb0JDakJ1QjtJRGtCdkIsT0FBTTtJQUNOLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osdUNBQThCO1lBQTlCLCtCQUE4QjtJQUM5QixzQ0FBcUMsRUFDdEM7QUFyQlA7RUEwQk0saUJDZ0oyQixFRC9JNUI7QUFJTDtFQUNFLDBCQUF5QjtFQUN6QixtQkFBa0IsRUFJbkI7QUFORDtJQUlJLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZS1uYXZpZ2F0aW9uL3NpZGUtbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRhbmltYXRpb25zOiAoXG4gIHNsaWRlSW5MZWZ0OiBzbGlkZUluTGVmdCAkdHJhbnNpdGlvbi1zbGlkZS1pbi1kdXJhdGlvbixcbiAgc2xpZGVJblJpZ2h0OiBzbGlkZUluUmlnaHQgJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIHNsaWRlSW5VcDogc2xpZGVJblVwICR0cmFuc2l0aW9uLXNsaWRlLWluLWR1cmF0aW9uLFxuICBzbGlkZUluRG93bjogc2xpZGVJbkRvd24gJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb24sXG4gIGZhZGVJbjogZmFkZUluICR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb24sXG4gIGZhZGVJblVwOiBmYWRlSW5VcCAkdHJhbnNpdGlvbi1mYWRlLWR1cmF0aW9uLFxuKTtcblxuQG1peGluIGFuaW1hdGlvbnMoKSB7XG4gIEBpZiAkZW5hYmxlLXRyYW5zaXRpb25zIHtcbiAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG4gICAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyBmYWRlSW5VcCB7XG4gICAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwzMHB4LDApO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwwLDApO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHNsaWRlSW5MZWZ0IHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwwLDApO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHNsaWRlSW5VcCB7XG4gICAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwxMDAlLDApO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHNsaWRlSW5Eb3duIHtcbiAgICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC0xMDAlLDApO1xuICAgICAgfVxuICAgICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBBZGQgb25lIG9yIG1vcmUgdHJhbnNpdGlvbnNcbiAqXG4gKiBAZXhhbXBsZVxuICogQGluY2x1ZGUgYWRkLXRyYW5zaXRpb24oJ3NsaWRlSW5VcCcpO1xuICogQGluY2x1ZGUgYWRkLXRyYW5zaXRpb24oKCdzbGlkZUluVXAnLCdmYWRlSW4nKSlcbiAqL1xuQG1peGluIGFkZC10cmFuc2l0aW9uKCRsaXN0KSB7XG4gICRjb21iaW5lZDogJyc7XG4gIEBpZiB0eXBlLW9mKCRsaXN0KSA9PSAnc3RyaW5nJyB7XG4gICAgYW5pbWF0aW9uOiBtYXBfZ2V0KCRhbmltYXRpb25zLCAkbGlzdCk7XG4gIH0gQGVsc2UgaWYgdHlwZS1vZigkbGlzdCkgPT0gJ2xpc3QnIHtcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkbGlzdCkge1xuICAgICAgJGFuaW06IG1hcF9nZXQoJGFuaW1hdGlvbnMsIG50aCgkbGlzdCwgJGkpKTtcbiAgICAgIEBpZiAkYW5pbSA9PSBudWxsIHtcbiAgICAgICAgQHdhcm4gbnRoKCRsaXN0LCAkaSkgdW5xdW90ZSgnbm90IGZvdW5kLCBwbGVhc2UgdXNlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGFuaW1hdGlvbnM6JykgdG8tbGlzdCgkYW5pbWF0aW9ucywgJ2tleXMnKTtcbiAgICAgIH1cblxuICAgICAgQGlmICRpID09IGxlbmd0aCgkbGlzdCkge1xuICAgICAgICAkY29tYmluZWQ6ICRjb21iaW5lZCArICRhbmltO1xuICAgICAgfVxuICAgICAgQGVsc2Uge1xuICAgICAgICAkY29tYmluZWQ6ICRjb21iaW5lZCArICRhbmltICsgJywnO1xuICAgICAgfVxuICAgIH1cbiAgICBhbmltYXRpb246IHVucXVvdGUoJGNvbWJpbmVkKTtcbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vc2Nzcy9taXhpbnMvbWl4aW5zXCI7XG5cbi5zaWRlLW5hdiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1NnB4LDAsMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgd2lkdGg6IDI1NnB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6ICR6aW5kZXgtZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gICYuYWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB6LWluZGV4OiAkemluZGV4LWZpeGVkO1xuICB9XG59XG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcbiAgLnNpZGUtbmF2LmFjdGl2ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XG4gIC5zaWRlLW5hdiB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gIH1cbn1cblxuLnNlYi1sb2dvIHtcbiAgaGVpZ2h0OjU2cHg7XG4gIHdpZHRoOiA1NnB4O1xufVxuXG4ubmF2LWxpbmsge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcblxufVxuXG4ubWVudS1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgkZ3JlZW4sLjI1KTtcbiAgLy9iYWNrZ3JvdW5kOiAkbGlnaHQ7XG4gIC8qLm5hdi1saW5rIHtcbiAgICBjb2xvcjogJGRhcms7XG4gIH0qL1xufVxuXG4ubWVudS1pdGVtIHtcbiAgJi5hY3RpdmUge1xuICAgIC5uYXYtbGluayB7XG4gICAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW1lZGl1bTtcbiAgICB9XG4gICAgYmFja2dyb3VuZDogJGdyZWVuO1xuICB9XG4gICYuYWN0aXZlLXBhcmVudCB7XG4gICAgLm5hdi1saW5rIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbWVkaXVtO1xuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogJGdyZWVuO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBhbmltYXRpb246IGV4cGFuZCBlYXNlLW91dCAuMnM7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICYuYWN0aXZlLW1hdGNoIHtcbiAgICAubmF2LWxpbmsge1xuICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1tZWRpdW07XG4gICAgfVxuICB9XG59XG5cbi5uYXYtd3JhcHBlciB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTZweCk7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgJjpob3ZlciB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxufVxuIiwiLy8gVmFyaWFibGVzXG4vL1xuLy8gVmFyaWFibGVzIHNob3VsZCBmb2xsb3cgdGhlIGAkY29tcG9uZW50LXN0YXRlLXByb3BlcnR5LXNpemVgIGZvcm11bGEgZm9yXG4vLyBjb25zaXN0ZW50IG5hbWluZy4gRXg6ICRuYXYtbGluay1kaXNhYmxlZC1jb2xvciBhbmQgJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14cy5cblxuXG4vL1xuLy8gQ29sb3Igc3lzdGVtXG4vL1xuXG4kd2hpdGU6ICAgICNmZmYgIWRlZmF1bHQ7XG4kZ3JheS0xMDA6ICNmOGY4ZjggIWRlZmF1bHQ7XG4kZ3JheS0yMDA6ICNlOWU5ZTkgIWRlZmF1bHQ7XG4kZ3JheS0zMDA6ICNkZWRlZGUgIWRlZmF1bHQ7XG4kZ3JheS00MDA6ICNjZWNlY2UgIWRlZmF1bHQ7XG4kZ3JheS01MDA6ICNhZGFkYWQgIWRlZmF1bHQ7XG4kZ3JheS02MDA6ICM4Njg2ODYgIWRlZmF1bHQ7XG4kZ3JheS03MDA6ICM0OTQ5NDkgIWRlZmF1bHQ7XG4kZ3JheS04MDA6ICMzNDM0MzQgIWRlZmF1bHQ7XG4kZ3JheS05MDA6ICMyMTIxMjEgIWRlZmF1bHQ7XG4kYmxhY2s6ICAgICMwMDAgIWRlZmF1bHQ7XG5cblxuJGdyYXlzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kZ3JheXM6IG1hcC1tZXJnZShcbiAgICAoXG4gICAgICBcIjEwMFwiOiAkZ3JheS0xMDAsXG4gICAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXG4gICAgICBcIjMwMFwiOiAkZ3JheS0zMDAsXG4gICAgICBcIjQwMFwiOiAkZ3JheS00MDAsXG4gICAgICBcIjUwMFwiOiAkZ3JheS01MDAsXG4gICAgICBcIjYwMFwiOiAkZ3JheS02MDAsXG4gICAgICBcIjcwMFwiOiAkZ3JheS03MDAsXG4gICAgICBcIjgwMFwiOiAkZ3JheS04MDAsXG4gICAgICBcIjkwMFwiOiAkZ3JheS05MDBcbiAgICApLFxuICAgICRncmF5c1xuKTtcblxuXG4kcmVkOiAgICAgICAgICAgICAgICAgICAjRjAzNTI5O1xuJHJlZC1kYXJrOiAgICAgICAgICAgICAgI0Q4MUExQTsgLy8gU0VCIHNwZWNpZmljXG4kcmVkLWRhcmtlcjogICAgICAgICAgICAjQkIwMDBDOyAvLyBTRUIgc3BlY2lmaWNcbiR5ZWxsb3ctZGFya2VyOiAgICAgICAgICNGOEEwMDA7IC8vIFNFQiBzcGVjaWZpY1xuJHllbGxvdy1kYXJrOiAgICAgICAgICAgI0ZGQjQwMDsgLy8gU0VCIHNwZWNpZmljXG4keWVsbG93OiAgICAgICAgICAgICAgICAjRkZDNTAwO1xuJGdyZWVuOiAgICAgICAgICAgICAgICAgIzYwY2QxODtcbiRncmVlbi1kYXJrOiAgICAgICAgICAgICM0NUI0MDA7IC8vIFNFQiBzcGVjaWZpY1xuJGdyZWVuLWRhcmtlcjogICAgICAgICAgIzM3OUQwMDsgLy8gU0VCIHNwZWNpZmljXG4kYmx1ZTogICAgICAgICAgICAgICAgICAjNDFCMEVFO1xuJGJsdWUtZGFyazogICAgICAgICAgICAgIzAwOTJFMTsgLy8gU0VCIHNwZWNpZmljXG4kYmx1ZS1kYXJrZXI6ICAgICAgICAgICAjMDA3QUM3OyAvLyBTRUIgc3BlY2lmaWNcbiRwdXJwbGU6ICAgICAgICAgICAgICAgICM2NzNBQjY7XG4kcHVycGxlLWRhcms6ICAgICAgICAgICAjNEYyQzk5OyAvLyBTRUIgc3BlY2lmaWNcbiRwdXJwbGUtZGFya2VyOiAgICAgICAgICMzRjI1ODc7IC8vIFNFQiBzcGVjaWZpY1xuXG5cbiRwcmltYXJ5OiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgICAgJGdyZWVuLWRhcmtlciAhZGVmYXVsdDtcbiRpbmZvOiAgICAgICAgICAkcHVycGxlICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJHJlZC1kYXJrICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRkYXJrOiAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG5cbiR0aGVtZS1jb2xvcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiR0aGVtZS1jb2xvcnM6IG1hcC1tZXJnZShcbiAgICAoXG4gICAgICBcInByaW1hcnlcIjogICAgJHByaW1hcnksXG4gICAgICBcInNlY29uZGFyeVwiOiAgJHNlY29uZGFyeSxcbiAgICAgIFwic3VjY2Vzc1wiOiAgICAkc3VjY2VzcyxcbiAgICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcbiAgICAgIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcbiAgICAgIFwiZGFuZ2VyXCI6ICAgICAkZGFuZ2VyLFxuICAgICAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcbiAgICAgIFwiZGFya1wiOiAgICAgICAkZGFya1xuICAgICksXG4gICAgJHRoZW1lLWNvbG9yc1xuKTtcblxuLy8gdGhlbWUgaWNvbnMgLy8gU0VCIHNwZWNpZmljXG4kaWNvbi1maWxsLWNvbG9yOiAkYmxhY2s7XG4kdGhlbWUtaWNvbnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiR0aGVtZS1pY29uczogbWFwLW1lcmdlKFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiOiAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInJTNFJTNDcGF0aCBkPSdNNDM1Ljg0OCA4My40NjZMMTcyLjgwNCAzNDYuNTFsLTk2LjY1Mi05Ni42NTJjLTQuNjg2LTQuNjg2LTEyLjI4NC00LjY4Ni0xNi45NzEgMGwtMjguMjg0IDI4LjI4NGMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxbDEzMy40MjEgMTMzLjQyMWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcxIDBsMjk5LjgxMy0yOTkuODEzYzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MWwtMjguMjg0LTI4LjI4NGMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3IDB6JyBmaWxsPScjeyRpY29uLWZpbGwtY29sb3J9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImluZm9cIjogICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0NDggNTEyJyUzRSUzQ3BhdGggZD0nTTQ0OCA4MHYzNTJjMCAyNi41MS0yMS40OSA0OC00OCA0OEg0OGMtMjYuNTEgMC00OC0yMS40OS00OC00OFY4MGMwLTI2LjUxIDIxLjQ5LTQ4IDQ4LTQ4aDM1MmMyNi41MSAwIDQ4IDIxLjQ5IDQ4IDQ4em0tNDggMzQ2Vjg2YTYgNiAwIDAgMC02LTZINTRhNiA2IDAgMCAwLTYgNnYzNDBhNiA2IDAgMCAwIDYgNmgzNDBhNiA2IDAgMCAwIDYtNnpNMjI0IDExOGMyMy4xOTYgMCA0MiAxOC44MDQgNDIgNDJzLTE4LjgwNCA0Mi00MiA0Mi00Mi0xOC44MDQtNDItNDIgMTguODA0LTQyIDQyLTQyem01NiAyNTRjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtODhjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoMTJ2LTY0aC0xMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg2NGM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjEwMGgxMmM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjI0eicgZmlsbD0nI3skaWNvbi1maWxsLWNvbG9yfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3YXJuaW5nXCI6ICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMiclM0UlM0NwYXRoIGQ9J00yNDguNzQ3IDIwNC43MDVsNi41ODggMTEyYy4zNzMgNi4zNDMgNS42MjYgMTEuMjk1IDExLjk3OSAxMS4yOTVoNDEuMzdhMTIgMTIgMCAwIDAgMTEuOTc5LTExLjI5NWw2LjU4OC0xMTJjLjQwNS02Ljg5My01LjA3NS0xMi43MDUtMTEuOTc5LTEyLjcwNWgtNTQuNTQ3Yy02LjkwMyAwLTEyLjM4MyA1LjgxMi0xMS45NzggMTIuNzA1ek0zMzAgMzg0YzAgMjMuMTk2LTE4LjgwNCA0Mi00MiA0MnMtNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MiA0MiAxOC44MDQgNDIgNDJ6bS0uNDIzLTM2MC4wMTVjLTE4LjQzMy0zMS45NTEtNjQuNjg3LTMyLjAwOS04My4xNTQgMEw2LjQ3NyA0NDAuMDEzQy0xMS45NDUgNDcxLjk0NiAxMS4xMTggNTEyIDQ4LjA1NCA1MTJINTI3Ljk0YzM2Ljg2NSAwIDYwLjAzNS0zOS45OTMgNDEuNTc3LTcxLjk4N0wzMjkuNTc3IDIzLjk4NXpNNTMuMTkxIDQ1NS4wMDJMMjgyLjgwMyA1Ny4wMDhjMi4zMDktNC4wMDIgOC4wODUtNC4wMDIgMTAuMzk0IDBsMjI5LjYxMiAzOTcuOTkzYzIuMzA4IDQtLjU3OSA4Ljk5OC01LjE5NyA4Ljk5OEg1OC4zODhjLTQuNjE3LjAwMS03LjUwNC00Ljk5Ny01LjE5Ny04Ljk5N3onIGZpbGw9JyN7JGljb24tZmlsbC1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGFuZ2VyXCI6ICAgICBzdHItcmVwbGFjZSh1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInJTNFJTNDcGF0aCBkPSdNMjQ4Ljc0NyAyMDQuNzA1bDYuNTg4IDExMmMuMzczIDYuMzQzIDUuNjI2IDExLjI5NSAxMS45NzkgMTEuMjk1aDQxLjM3YTEyIDEyIDAgMCAwIDExLjk3OS0xMS4yOTVsNi41ODgtMTEyYy40MDUtNi44OTMtNS4wNzUtMTIuNzA1LTExLjk3OS0xMi43MDVoLTU0LjU0N2MtNi45MDMgMC0xMi4zODMgNS44MTItMTEuOTc4IDEyLjcwNXpNMzMwIDM4NGMwIDIzLjE5Ni0xOC44MDQgNDItNDIgNDJzLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDIgNDIgMTguODA0IDQyIDQyem0tLjQyMy0zNjAuMDE1Yy0xOC40MzMtMzEuOTUxLTY0LjY4Ny0zMi4wMDktODMuMTU0IDBMNi40NzcgNDQwLjAxM0MtMTEuOTQ1IDQ3MS45NDYgMTEuMTE4IDUxMiA0OC4wNTQgNTEySDUyNy45NGMzNi44NjUgMCA2MC4wMzUtMzkuOTkzIDQxLjU3Ny03MS45ODdMMzI5LjU3NyAyMy45ODV6TTUzLjE5MSA0NTUuMDAyTDI4Mi44MDMgNTcuMDA4YzIuMzA5LTQuMDAyIDguMDg1LTQuMDAyIDEwLjM5NCAwbDIyOS42MTIgMzk3Ljk5M2MyLjMwOCA0LS41NzkgOC45OTgtNS4xOTcgOC45OThINTguMzg4Yy00LjYxNy4wMDEtNy41MDQtNC45OTctNS4xOTctOC45OTd6JyBmaWxsPScjeyRpY29uLWZpbGwtY29sb3J9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIilcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICR0aGVtZS1pY29uc1xuKTtcblxuLy8gT3B0aW9uc1xuLy9cbi8vIFF1aWNrbHkgbW9kaWZ5IGdsb2JhbCBzdHlsaW5nIGJ5IGVuYWJsaW5nIG9yIGRpc2FibGluZyBvcHRpb25hbCBmZWF0dXJlcy5cblxuJGVuYWJsZS1jYXJldDogICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJvdW5kZWQ6ICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc2hhZG93czogICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmFkaWVudHM6ICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS10cmFuc2l0aW9uczogICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyaWQtY2xhc3NlczogICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6ICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmludC1zdHlsZXM6ICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplczogICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXZhbGlkYXRpb24taWNvbnM6ICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZ3V0dGVyczogICAgIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtYnV0dG9uLXZhcmlhdGlvbnM6ICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1uZy1ib290c3RyYXA6ICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kZW5hYmxlLWFuZ3VsYXItZ2VuZXJpYy10YWJsZTogIGZhbHNlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRlbmFibGUtbmd4LXRvYXN0cjogICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGVuYWJsZS1kZXByZWNhdGlvbi1tZXNzYWdlczogICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG5cbi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXG4gICAgKFxuICAgICAgMDogMCxcbiAgICAgIDE6ICgkc3BhY2VyICogLjI1KSxcbiAgICAgIDI6ICgkc3BhY2VyICogLjUpLFxuICAgICAgMzogJHNwYWNlcixcbiAgICAgIDQ6ICgkc3BhY2VyICogMiksXG4gICAgICA1OiAoJHNwYWNlciAqIDMpXG4gICAgKSxcbiAgICAkc3BhY2Vyc1xuKTtcblxuLy8gVGhpcyB2YXJpYWJsZSBhZmZlY3RzIHRoZSBgLmgtKmAgYW5kIGAudy0qYCBjbGFzc2VzLlxuJHNpemVzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kc2l6ZXM6IG1hcC1tZXJnZShcbiAgICAoXG4gICAgICAyNTogMjUlLFxuICAgICAgNTA6IDUwJSxcbiAgICAgIDc1OiA3NSUsXG4gICAgICAxMDA6IDEwMCUsXG4gICAgICBhdXRvOiBhdXRvXG4gICAgKSxcbiAgICAkc2l6ZXNcbik7XG5cbi8vIEJvZHlcbi8vXG4vLyBTZXR0aW5ncyBmb3IgdGhlIGA8Ym9keT5gIGVsZW1lbnQuXG5cbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAjNDQ0ICFkZWZhdWx0O1xuXG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcblxuLy8gR3JpZCBjb250YWluZXJzXG5cbi8vIEdyaWQgY29sdW1uc1xuLy9cbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxuXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IG1hcC1nZXQoJHNwYWNlcnMsIDMpKjIgIWRlZmF1bHQ7XG5cbi8vIFNFQiBzcGVjaWZpYyBvdmVycmlkZSB3aGVuIHJlc3BvbnNpdmUgZ3V0dGVycyBhcmUgZW5hYmxlZFxuQGlmICgkZW5hYmxlLXJlc3BvbnNpdmUtZ3V0dGVycykge1xuICAkZ3JpZC1ndXR0ZXItd2lkdGg6IG1hcC1nZXQoJHNwYWNlcnMsIDIpO1xufVxuXG4vLyBTRUIgc3BlY2lmaWNcbiRyZXNwb25zaXZlLWd1dHRlcnM6IChcbiAgc206bWFwLWdldCgkc3BhY2VycywgMikqMixcbiAgbGc6bWFwLWdldCgkc3BhY2VycywgMikqMixcbiAgeGw6bWFwLWdldCgkc3BhY2VycywgMykqMlxuKSAhZGVmYXVsdDtcblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtdXRpbGl0eTogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJvcmRlci1yYWRpdXMtdXRpbGl0eS1sZzogICAgICAgICAgICAuM3JlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kYm9yZGVyLXJhZGl1cy11dGlsaXR5LXNtOiAgICAgICAgICAgIC4ycmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuJHRyYW5zaXRpb24tc2xpZGUtaW4tZHVyYXRpb246LjRzIGVhc2UtaW4tb3V0ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0cmFuc2l0aW9uLWZhZGUtZHVyYXRpb246ICAgIC4xNXMgbGluZWFyICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0cmFuc2l0aW9uLWZhZGU6ICAgICAgICAgICAgIG9wYWNpdHkgJHRyYW5zaXRpb24tZmFkZS1kdXJhdGlvbiAhZGVmYXVsdDtcblxuXG5cbi8vIEZvbnRzXG4vL1xuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJHNlYi1mb250LXBhdGg6ICAgICAgICAgICAgICAgXCJ+QHNlYmdyb3VwL2ZvbnRzL2ZvbnRzXCIgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgXCJTRUJTYW5zU2VyaWZcIiwgXCJUcmVidWNoZXQgTVNcIiwgXCJUcmVidWNoZXRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICAgICAgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgKCRmb250LXNpemUtYmFzZSAqIDEuMjUpICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgKCRmb250LXNpemUtYmFzZSAqIC44NzUpICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS14czogICAoJGZvbnQtc2l6ZS1iYXNlICogLjY4NzUpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuXG4kZm9udC13ZWlnaHQtbWVkaXVtOiAgICAgICAgICA1MDAgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG5cbiRoMS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDMgIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGg1LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMC44NzUgIWRlZmF1bHQ7XG5cbiRoMS1tZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIuNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kaDItbWQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGgzLW1kLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRoMS1zbS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGgyLXNtLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS41ICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRoMy1zbS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICAgICAgIzIyMiAhZGVmYXVsdDtcblxuJHNtYWxsLWZvbnQtc2l6ZTogICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcblxuLy8gTGlua3Ncbi8vXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXG5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAkYmx1ZS1kYXJrZXIgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kbGluay13ZWlnaHQ6ICAgICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRleHRlcm5hbC1saW5rLWljb24tY29sb3I6ICAgICAgICAkbGluay1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZXh0ZXJuYWwtbGluay1ob3Zlci1pY29uLWNvbG9yOiAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGV4dGVybmFsLWxpbmstaWNvbjogICAgICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGQ9J000MDAgMzJINDhDMjEuNDkgMzIgMCA1My40OSAwIDgwdjM1MmMwIDI2LjUxIDIxLjQ5IDQ4IDQ4IDQ4aDM1MmMyNi41MSAwIDQ4LTIxLjQ5IDQ4LTQ4VjgwYzAtMjYuNTEtMjEuNDktNDgtNDgtNDh6bS02IDQwMEg1NGE2IDYgMCAwIDEtNi02Vjg2YTYgNiAwIDAgMSA2LTZoMzQwYTYgNiAwIDAgMSA2IDZ2MzQwYTYgNiAwIDAgMS02IDZ6bS01NC0zMDRsLTEzNiAuMTQ1Yy02LjYyNyAwLTEyIDUuMzczLTEyIDEyVjE2Ny45YzAgNi43MjIgNS41MjIgMTIuMTMzIDEyLjI0MyAxMS45OThsNTguMDAxLTIuMTQxTDk5LjUxNSAzNDAuNDg1Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFsMjMuMDMgMjMuMDI5YzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NyAwbDE2Mi43MjktMTYyLjcyOS0yLjE0MSA1OC4wMDFjLS4xMzYgNi43MjEgNS4yNzUgMTIuMjQyIDExLjk5OCAxMi4yNDJoMjcuNzU1YzYuNjI4IDAgMTItNS4zNzMgMTItMTJMMzUyIDE0MGMwLTYuNjI3LTUuMzczLTEyLTEyLTEyeicgZmlsbD0nI3skZXh0ZXJuYWwtbGluay1pY29uLWNvbG9yfScgLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kZXh0ZXJuYWwtbGluay1ob3Zlci1pY29uOiAgICAgICAgc3RyLXJlcGxhY2UoJGV4dGVybmFsLWxpbmstaWNvbiwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGV4dGVybmFsLWxpbmstaWNvbi1jb2xvciArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkZXh0ZXJuYWwtbGluay1ob3Zlci1pY29uLWNvbG9yICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIikpO1xuXG4vLyBHcmlkIGJyZWFrcG9pbnRzXG4vL1xuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXG5cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gICAgICAgIHhzOiAwLFxuICAgICAgICBzbTogNTc2cHgsXG4gICAgICAgIG1kOiA3NjhweCxcbiAgICAgICAgbGc6IDk5MnB4LFxuICAgICAgICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG4vLyBUYWJsZXNcbi8vXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbiR0YWJsZS1jZWxsLXBhZGRpbmc6ICAgICAgICAgIC42MjVyZW0gLjc1cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjI3NXJlbSAuM3JlbSAhZGVmYXVsdDtcblxuJHRhYmxlLWFjY2VudC1iZzogICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmx1ZSwgLjA3NSkgIWRlZmF1bHQ7XG5cbiR0YWJsZS1oZWFkLWNvbG9yOiAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWV4cGFuZC1iZzogICAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbiR0YWJsZS1zb3J0LWFjdGl2ZS1jb2xvcjogJGJsdWUtZGFyayAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdGFibGUtc29ydC1hY3RpdmUtaG92ZXItY29sb3I6ICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0YWJsZS1zb3J0LWhvdmVyLWNvbG9yOiAkZ3JheS00MDAgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRhYmxlLXNvcnQtZGlzYWJsZWQtY29sb3I6ICRncmF5LTMwMCAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG4kdGFibGUtc29ydC1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgIC41NjI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAgICAgIC4yODEyNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAgICAgIC41cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc6ICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgMXJlbSAhZGVmYXVsdDtcblxuLy8gQnV0dG9uc1xuLy9cbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4kYnRuLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgMSAhZGVmYXVsdDtcbiRidG4tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbiRidG4tYm94LXNoYWRvdzogICAgICAgICAgICAgIDAgMCAwIDAgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiAgICAgICAwIDAgMCAwICFkZWZhdWx0O1xuXG5cbiRidG4tYm9yZGVyLXJhZGl1czogICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgIDRweCAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgIDRweCAhZGVmYXVsdDtcblxuLy8gRm9ybXNcbiRpbnB1dC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAwIDAgMCAwICFkZWZhdWx0O1xuXG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuXG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7XG5cblxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAgICAgICAgICAgLjYyNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1pY29uOiAgICAgICAgICAgICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNDQ4IDUxMiclM0UlM0NwYXRoIGQ9J000NDEuOSAxNjcuM2wtMTkuOC0xOS44Yy00LjctNC43LTEyLjMtNC43LTE3IDBMMjI0IDMyOC4yIDQyLjkgMTQ3LjVjLTQuNy00LjctMTIuMy00LjctMTcgMEw2LjEgMTY3LjNjLTQuNyA0LjctNC43IDEyLjMgMCAxN2wyMDkuNCAyMDkuNGM0LjcgNC43IDEyLjMgNC43IDE3IDBsMjA5LjQtMjA5LjRjNC43LTQuNyA0LjctMTIuMyAwLTE3eicgZmlsbD0nI3skYmx1ZX0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDtcbiRkcm9wZG93bi1pY29uLWFjdGl2ZTogICAgICAgICAgICAgIHN0ci1yZXBsYWNlKCRkcm9wZG93bi1pY29uLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkYmx1ZSArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkd2hpdGUgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuXG4kZHJvcGRvd24tYm94LXNoYWRvdzogICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuLy8gRm9ybXNcblxuJGxhYmVsLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cbiRpbnB1dC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICAgNHB4ICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICA0cHggIWRlZmF1bHQ7XG5cbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcblxuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1iZy1zaXplOiAgICAgIDY1JSA2NSUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc6ICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcblxuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS00MDAgIWRlZmF1bHQ7XG5cbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzRSUzQ2NpcmNsZSByPSczLjUnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnfScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0O1xuJGN1c3RvbS1zbGlkZS10b2dnbGUtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnJTNFJTNDY2lyY2xlIHI9JzMuNScgZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmd9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICAgICAkYmx1ZTtcbiRjdXN0b20tc2VsZWN0LWJnLXNpemU6ICAgICAgICAgICAgIDE2cHggMTZweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiAgICAgICAgICAgc3RyLXJlcGxhY2UoJGRyb3Bkb3duLWljb24sIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRibHVlICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIiksIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvciArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICA0cHggIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWJveC1zaGFkb3c6ICAgICAgICAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZpbGUtdGV4dDogKFxuICBlbjogXCJCcm93c2VcIlxuKSAhZGVmYXVsdDtcblxuXG4vLyBGb3JtIHZhbGlkYXRpb25cbiRmb3JtLWZlZWRiYWNrLWZvbnQtc2l6ZTogICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogICAgICAgICB0aGVtZS1jb2xvcihcInN1Y2Nlc3NcIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiAgICAgICB0aGVtZS1jb2xvcihcImRhbmdlclwiKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3I6ICAgICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZDogICAgICAgICAgc3RyLXJlcGxhY2UobWFwLWdldCgkdGhlbWUtaWNvbnMsICdzdWNjZXNzJyksIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRpY29uLWZpbGwtY29sb3IgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSwgc3RyLXJlcGxhY2UoI3snZmlsbD1cXCcnICsgJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvciArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcjogICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQ6ICAgICAgICBzdHItcmVwbGFjZShtYXAtZ2V0KCR0aGVtZS1pY29ucywgJ2RhbmdlcicpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkaWNvbi1maWxsLWNvbG9yICsgJ1xcJyd9LCBcIiNcIiwgXCIlMjNcIiksIHN0ci1yZXBsYWNlKCN7J2ZpbGw9XFwnJyArICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvciArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpKSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWxpbmUtdGhpY2tuZXNzOiAgICAgIDJweCAhZGVmYXVsdDtcblxuXG4vLyBaLWluZGV4IG1hc3RlciBsaXN0XG4vL1xuLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XG4vLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXG5cbiR6aW5kZXgtZHJvcGRvd24tYmFja2Ryb3A6ICAgICAgICAgIDk5MCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kemluZGV4LWRyb3Bkb3duOiAgICAgICAgICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1zdGlja3k6ICAgICAgICAgICAgICAgICAgICAgMTAyMCAhZGVmYXVsdDtcbiR6aW5kZXgtZml4ZWQ6ICAgICAgICAgICAgICAgICAgICAgIDEwMzAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsLWJhY2tkcm9wOiAgICAgICAgICAgICAxMDQwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XG4kemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuXG4vLyBOYXZzXG4kbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNTYyNXJlbSAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJG5hdi10YWJzLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICRibHVlICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuJG5hdi10YWJzLWxpbmstZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICRibHVlLWRhcmsgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJG5hdi10YWJzLWxpbmstZm9jdXMtY29sb3I6ICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kbmF2LXRhYnMtbGluay1mb2N1cy1iZzogICAgICAgICAgICAgICAgICAgICAgJGJsdWUtZGFyayAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG5cbi8vIE5hdmJhclxuJG5hdmJhci1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgLjQzNzVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLWZvbnQtd2VpZ2h0OiAgICAgICAgICAkZm9udC13ZWlnaHQtbWVkaXVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuLy8gUGFnaW5hdGlvblxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7Ly8gLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0Oy8vLjI1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAhZGVmYXVsdDsvLy43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgICRibHVlICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJGJsdWUtZGFyayAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYm9yZGVyLXJhZGl1czogICAgICAgICAgNHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cblxuXG4vLyBKdW1ib3Ryb25cblxuLy8gQ2FyZHNcbiRjYXJkLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgIDAgMXB4IDJweCAwIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcblxuLy8gVG9vbHRpcHNcbiR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcblxuLy8gUG9wb3ZlcnNcblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cblxuLy8gTW9kYWxzXG5cbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAwICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAgICAgICAgMCAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoOiAgICAgICAgIDFweCAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgIDAgIWRlZmF1bHQ7XG5cblxuXG4kbW9kYWwtZm9vdGVyLWJvcmRlci13aWR0aDogICAgICAgICAwICFkZWZhdWx0O1xuJG1vZGFsLWFzaWRlLXdpZHRoOiAgICAgICAgICAgICAgICAgMzIwcHggIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJG1vZGFsLWFzaWRlLWxnLXdpZHRoOiAgICAgICAgICAgICAgbWFwX2dldCgkZ3JpZC1icmVha3BvaW50cywgJ21kJyk7IC8vIDgwMHB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcblxuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogICAgICAgMCAwIDAgMCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6ICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW1lZGl1bSAhZGVmYXVsdDsgLy81MDBcbiRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYWxlcnQtaWNvbi13aWR0aDogICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRhbGVydC1pY29uLWhlaWdodDogICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGFsZXJ0LWljb24tcGFkZGluZzogJGFsZXJ0LWljb24td2lkdGggKyAoJGFsZXJ0LXBhZGRpbmcteCoyKTsgLy8gU0VCIFNwZWNpZmljXG5cbi8vIFRvYXN0IG5vdGlmaWNhdGlvbnNcbiR0b2FzdC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRhbGVydC1ib3JkZXItcmFkaXVzICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiR0b2FzdC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgICAgICRhbGVydC1wYWRkaW5nLXggIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRvYXN0LXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJHRvYXN0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAwIC41cmVtIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kdG9hc3QtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuXG5cbi8vIFByb2dyZXNzIGJhcnNcblxuLy8gTGlzdCBncm91cFxuJGxpc3QtZ3JvdXAtYnVsbGV0LWljb246IHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMSAxJyUzRSUzQ3JlY3Qgd2lkdGg9JzEnIGhlaWdodD0nMScgc3R5bGU9J2ZpbGw6I3skZGFya307JyAvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRsaXN0LWdyb3VwLWNoZWNrLWljb246IHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMiclM0UlM0NwYXRoIGQ9J000MzUuODQ4IDgzLjQ2NkwxNzIuODA0IDM0Ni41MWwtOTYuNjUyLTk2LjY1MmMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwbC0yOC4yODQgMjguMjg0Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODQgMCAxNi45NzFsMTMzLjQyMSAxMzMuNDIxYzQuNjg2IDQuNjg2IDEyLjI4NCA0LjY4NiAxNi45NzEgMGwyOTkuODEzLTI5OS44MTNjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxbC0yOC4yODQtMjguMjg0Yy00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMHonIGZpbGw9JyN7JGdyZWVufScvJTNFJTNDL3N2ZyUzRVwiKSwgXCIjXCIsIFwiJTIzXCIpICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRsaXN0LWdyb3VwLW1hcmdpbi1ib3R0b206IDFyZW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGJsdWUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24taG92ZXItYmc6ICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkYmx1ZS1kYXJrICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGRhcmsgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4vLyBGaWd1cmVzXG5cbi8vIEJyZWFkY3J1bWJzXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyLWNvbG9yLWxpZ2h0OiAgICAkd2hpdGUgIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yLWxpZ2h0OiAgICAgJHdoaXRlICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRicmVhZGNydW1iLWFjdGl2ZS1mb250LXdlaWdodDogICAgICRmb250LXdlaWdodC1tZWRpdW0gIWRlZmF1bHQ7IC8vIFNFQiBTcGVjaWZpY1xuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHN0ci1yZXBsYWNlKHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjU2IDUxMiclM0UlM0NwYXRoIGQ9J00yNC43MDcgMzguMTAxTDQuOTA4IDU3Ljg5OWMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxTDE4NS42MDcgMjU2IDQuOTA4IDQzNy4xM2MtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTcxTDI0LjcwNyA0NzMuOWM0LjY4NiA0LjY4NiAxMi4yODQgNC42ODYgMTYuOTcxIDBsMjA5LjQxNC0yMDkuNDE0YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUw0MS42NzggMzguMTAxYy00LjY4Ny00LjY4Ny0xMi4yODUtNC42ODctMTYuOTcxIDB6JyBmaWxsPScjeyRicmVhZGNydW1iLWRpdmlkZXItY29sb3J9Jy8lM0UlM0Mvc3ZnJTNFXCIpLCBcIiNcIiwgXCIlMjNcIikgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGJyZWFkY3J1bWItYmFjay1pY29uOiAgICAgICAgICAgICAgc3RyLXJlcGxhY2UodXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNTYgNTEyJyUzRSUzQ3BhdGggZD0nTTIzMS4yOTMgNDczLjg5OWwxOS43OTktMTkuNzk5YzQuNjg2LTQuNjg2IDQuNjg2LTEyLjI4NCAwLTE2Ljk3MUw3MC4zOTMgMjU2IDI1MS4wOTIgNzQuODdjNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTcxTDIzMS4yOTMgMzguMWMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3MSAwTDQuOTA4IDI0Ny41MTVjLTQuNjg2IDQuNjg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3MUwyMTQuMzIyIDQ3My45YzQuNjg3IDQuNjg2IDEyLjI4NSA0LjY4NiAxNi45NzEtLjAwMXonIGZpbGw9JyN7JGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcn0nLyUzRSUzQy9zdmclM0VcIiksIFwiI1wiLCBcIiUyM1wiKSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYnJlYWRjcnVtYi1kaXZpZGVyLXdpZHRoOiAgICAgICAgICAxNXB4ICFkZWZhdWx0OyAvLyBTRUIgU3BlY2lmaWNcbiRicmVhZGNydW1iLWRpdmlkZXItaGVpZ2h0OiAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDsgLy8gU0VCIFNwZWNpZmljXG5cblxuLy8gQ2xvc2VcblxuLy8gQ29kZVxuXG4vLyBQcmludGluZ1xuXG5AaW1wb3J0IFwiYm9vdHN0cmFwLWNvcmUvZnVuY3Rpb25zXCI7XG5AaW1wb3J0IFwiYm9vdHN0cmFwLWNvcmUvdmFyaWFibGVzXCI7XG5cbi8vIFNjcm9sbGJhclxuJHNjcm9sbGJhci10cmFjay1iZzogICRncmF5LTEwMDtcbiRzY3JvbGxiYXItdGh1bWItYmc6ICAkZ3JheS00MDA7XG4kc2Nyb2xsYmFyLXRyYWNrLWRhcmstYmc6ICAkZGFyaztcbiRzY3JvbGxiYXItdGh1bWItZGFyay1iZzogICRncmF5LTkwMDtcbiRzY3JvbGxiYXItdGh1bWItYWN0aXZlLWJnOiAkYmx1ZTtcbiRzY3JvbGxiYXItdGhpY2tuZXNzOiAgICAgMTBweDtcblxuLy8gQWNjb3JkaW9uXG5cbiRhY2NvcmRpb24taWNvbjogICAgICAgICAgICAkZHJvcGRvd24taWNvbiAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWljb24tZGlzYWJsZWQ6ICAgc3RyLXJlcGxhY2UoJGFjY29yZGlvbi1pY29uLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkYmx1ZSArICdcXCcnfSwgXCIjXCIsIFwiJTIzXCIpLCBzdHItcmVwbGFjZSgjeydmaWxsPVxcJycgKyAkZ3JheS00MDAgKyAnXFwnJ30sIFwiI1wiLCBcIiUyM1wiKSkgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1iZy1ob3ZlcjogICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvcmRlci1jb2xvcjogICAgJHRhYmxlLWJvcmRlci1jb2xvciAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvcmRlci13aWR0aDogICAgJHRhYmxlLWJvcmRlci13aWR0aCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWhlYWRlci1wYWRkaW5nOiAgMCAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvZHktcGFkZGluZzogICAgMCAxcmVtIDFyZW0gMi41cmVtICFkZWZhdWx0OyAvLyBTRUIgc3BlY2lmaWNcbiRhY2NvcmRpb24taXRlbS1wYWRkaW5nLXk6ICAuNXJlbSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWl0ZW0tcGFkZGluZy14OiAgMXJlbSAhZGVmYXVsdDsgLy8gU0VCIHNwZWNpZmljXG4kYWNjb3JkaW9uLWJvZHktYmc6ICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1ib2R5LWJnLWFjdGl2ZTogICRhY2NvcmRpb24tYmctaG92ZXIgIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuJGFjY29yZGlvbi1zaXplOiAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7IC8vIFNFQiBzcGVjaWZpY1xuIiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */";
            /***/ 
        }),
        /***/ "./src/app/components/side-navigation/side-navigation.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/side-navigation/side-navigation.component.ts ***!
          \*************************************************************************/
        /*! exports provided: SideNavigationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavigationComponent", function () { return SideNavigationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
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
                return SideNavigationComponent;
            }());
            SideNavigationComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"] },
                { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_5__["NavService"] }
            ]; };
            SideNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-side-navigation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/side-navigation/side-navigation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-navigation.component.scss */ "./src/app/components/side-navigation/side-navigation.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"], _services_nav_service__WEBPACK_IMPORTED_MODULE_5__["NavService"]])
            ], SideNavigationComponent);
            /***/ 
        }),
        /***/ "./src/app/services/menu.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/menu.service.ts ***!
          \******************************************/
        /*! exports provided: MenuService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function () { return MenuService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var compare = function (a, b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            };
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
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.start)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.sort(compare); }));
                };
                MenuService.prototype.getBaseItems = function () {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.base)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.sort(compare); }));
                };
                MenuService.prototype.getComponents = function () {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.components)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.sort(compare); }));
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
                return MenuService;
            }());
            MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], MenuService);
            /***/ 
        }),
        /***/ "./src/app/services/nav.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/services/nav.service.ts ***!
          \*****************************************/
        /*! exports provided: NavService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function () { return NavService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
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
                return NavService;
            }());
            NavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], NavService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
                travis_build_number: '194'
            };
            /*
             * In development mode, to ignore zone related error stack frames such as
             * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
             * import the following file, but please comment it out in production mode
             * because it will have performance impact when throw error
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/example/components/accordion/accordion.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/example/components/accordion/accordion.component.ts ***!
          \*****************************************************************/
        /*! exports provided: AccordionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function () { return AccordionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AccordionComponent = /** @class */ (function () {
                function AccordionComponent() {
                }
                AccordionComponent.prototype.ngOnInit = function () {
                };
                return AccordionComponent;
            }());
            AccordionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-accordion',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./accordion.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/accordion/accordion.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], AccordionComponent);
            /***/ 
        }),
        /***/ "./src/example/components/alerts/alerts.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/example/components/alerts/alerts.component.ts ***!
          \***********************************************************/
        /*! exports provided: AlertsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function () { return AlertsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AlertsComponent = /** @class */ (function () {
                function AlertsComponent() {
                    this.active = true;
                }
                AlertsComponent.prototype.ngOnInit = function () {
                };
                return AlertsComponent;
            }());
            AlertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-alerts',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alerts.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/alerts/alerts.component.html")).default,
                    styles: ["\n      code {\n        white-space: nowrap;\n      }\n  "]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], AlertsComponent);
            /***/ 
        }),
        /***/ "./src/example/components/breadcrumbs/breadcrumbs.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/example/components/breadcrumbs/breadcrumbs.component.ts ***!
          \*********************************************************************/
        /*! exports provided: BreadcrumbsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function () { return BreadcrumbsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BreadcrumbsComponent = /** @class */ (function () {
                function BreadcrumbsComponent() {
                }
                BreadcrumbsComponent.prototype.ngOnInit = function () {
                };
                return BreadcrumbsComponent;
            }());
            BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-breadcrumbs',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./breadcrumbs.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/breadcrumbs/breadcrumbs.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], BreadcrumbsComponent);
            /***/ 
        }),
        /***/ "./src/example/components/button-group/button-group.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/example/components/button-group/button-group.component.ts ***!
          \***********************************************************************/
        /*! exports provided: ButtonGroupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroupComponent", function () { return ButtonGroupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ButtonGroupComponent = /** @class */ (function () {
                function ButtonGroupComponent() {
                }
                ButtonGroupComponent.prototype.ngOnInit = function () {
                };
                return ButtonGroupComponent;
            }());
            ButtonGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-button-group',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./button-group.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/button-group/button-group.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], ButtonGroupComponent);
            /***/ 
        }),
        /***/ "./src/example/components/buttons/buttons.component.scss": 
        /*!***************************************************************!*\
          !*** ./src/example/components/buttons/buttons.component.scss ***!
          \***************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            module.exports = ".btn + .btn {\n  margin-left: .5rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9zZWJncm91cC9ib290c3RyYXAvc3JjL2V4YW1wbGUvY29tcG9uZW50cy9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2V4YW1wbGUvY29tcG9uZW50cy9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuICsgLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbn0iXX0= */";
            /***/ 
        }),
        /***/ "./src/example/components/buttons/buttons.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/example/components/buttons/buttons.component.ts ***!
          \*************************************************************/
        /*! exports provided: ButtonsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function () { return ButtonsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ButtonsComponent = /** @class */ (function () {
                function ButtonsComponent() {
                }
                ButtonsComponent.prototype.ngOnInit = function () {
                };
                return ButtonsComponent;
            }());
            ButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-buttons',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buttons.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/buttons/buttons.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buttons.component.scss */ "./src/example/components/buttons/buttons.component.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], ButtonsComponent);
            /***/ 
        }),
        /***/ "./src/example/components/cards/cards.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/example/components/cards/cards.component.ts ***!
          \*********************************************************/
        /*! exports provided: CardsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function () { return CardsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CardsComponent = /** @class */ (function () {
                function CardsComponent() {
                }
                CardsComponent.prototype.ngOnInit = function () {
                };
                return CardsComponent;
            }());
            CardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cards',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cards.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/cards/cards.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], CardsComponent);
            /***/ 
        }),
        /***/ "./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.ts": 
        /*!*******************************************************************************************************!*\
          !*** ./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.ts ***!
          \*******************************************************************************************************/
        /*! exports provided: CheckboxesAndSlideTogglesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxesAndSlideTogglesComponent", function () { return CheckboxesAndSlideTogglesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CheckboxesAndSlideTogglesComponent = /** @class */ (function () {
                function CheckboxesAndSlideTogglesComponent() {
                }
                CheckboxesAndSlideTogglesComponent.prototype.ngOnInit = function () {
                };
                return CheckboxesAndSlideTogglesComponent;
            }());
            CheckboxesAndSlideTogglesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-checkboxes-and-slide-toggles',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkboxes-and-slide-toggles.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], CheckboxesAndSlideTogglesComponent);
            /***/ 
        }),
        /***/ "./src/example/components/colors/colors.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/example/components/colors/colors.component.ts ***!
          \***********************************************************/
        /*! exports provided: ColorsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function () { return ColorsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
                return ColorsComponent;
            }());
            ColorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-colors',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./colors.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/colors/colors.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], ColorsComponent);
            /***/ 
        }),
        /***/ "./src/example/components/datepicker/datepicker-input/datepicker-input.component.ts": 
        /*!******************************************************************************************!*\
          !*** ./src/example/components/datepicker/datepicker-input/datepicker-input.component.ts ***!
          \******************************************************************************************/
        /*! exports provided: DatepickerInputComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerInputComponent", function () { return DatepickerInputComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DatepickerInputComponent = /** @class */ (function () {
                function DatepickerInputComponent() {
                }
                return DatepickerInputComponent;
            }());
            DatepickerInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-datepicker-input',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./datepicker-input.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/datepicker/datepicker-input/datepicker-input.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], DatepickerInputComponent);
            /***/ 
        }),
        /***/ "./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.ts": 
        /*!********************************************************************************************!*\
          !*** ./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.ts ***!
          \********************************************************************************************/
        /*! exports provided: DatepickerSimpleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerSimpleComponent", function () { return DatepickerSimpleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            var DatepickerSimpleComponent = /** @class */ (function () {
                function DatepickerSimpleComponent(calendar) {
                    this.calendar = calendar;
                }
                DatepickerSimpleComponent.prototype.selectToday = function () {
                    this.model = this.calendar.getToday();
                };
                return DatepickerSimpleComponent;
            }());
            DatepickerSimpleComponent.ctorParameters = function () { return [
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"] }
            ]; };
            DatepickerSimpleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-datepicker-simple',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./datepicker-simple.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCalendar"]])
            ], DatepickerSimpleComponent);
            /***/ 
        }),
        /***/ "./src/example/components/datepicker/datepicker.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/example/components/datepicker/datepicker.component.ts ***!
          \*******************************************************************/
        /*! exports provided: DatepickerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function () { return DatepickerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DatepickerComponent = /** @class */ (function () {
                function DatepickerComponent() {
                    this.sources = {
                        simple: [{
                                name: 'datepicker.component.html',
                                src: __webpack_require__(/*! raw-loader!./datepicker-simple/datepicker-simple.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.html"),
                                lang: 'markup'
                            }, {
                                name: 'datepicker.component.ts',
                                src: __webpack_require__(/*! raw-loader!./datepicker-simple/datepicker-simple.component.ts */ "./node_modules/raw-loader/index.js!./src/example/components/datepicker/datepicker-simple/datepicker-simple.component.ts"),
                                lang: 'typescript'
                            }],
                        input: [{
                                name: 'datepicker.component.html',
                                src: __webpack_require__(/*! raw-loader!./datepicker-input/datepicker-input.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/datepicker/datepicker-input/datepicker-input.component.html"),
                                lang: 'markup'
                            }, {
                                name: 'datepicker.component.ts',
                                src: __webpack_require__(/*! raw-loader!./datepicker-input/datepicker-input.component.ts */ "./node_modules/raw-loader/index.js!./src/example/components/datepicker/datepicker-input/datepicker-input.component.ts"),
                                lang: 'typescript'
                            }]
                    };
                }
                return DatepickerComponent;
            }());
            DatepickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-datepicker',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./datepicker.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/datepicker/datepicker.component.html")).default
                })
            ], DatepickerComponent);
            /***/ 
        }),
        /***/ "./src/example/components/dropdowns/dropdowns.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/example/components/dropdowns/dropdowns.component.ts ***!
          \*****************************************************************/
        /*! exports provided: DropdownsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownsComponent", function () { return DropdownsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js");
            /* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_2__);
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
                return DropdownsComponent;
            }());
            DropdownsComponent.ctorParameters = function () { return [
                { type: _services_mobile_detect_service__WEBPACK_IMPORTED_MODULE_3__["MobileDetectService"] }
            ]; };
            DropdownsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dropdowns',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dropdowns.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/dropdowns/dropdowns.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_mobile_detect_service__WEBPACK_IMPORTED_MODULE_3__["MobileDetectService"]])
            ], DropdownsComponent);
            /***/ 
        }),
        /***/ "./src/example/components/forms/forms.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/example/components/forms/forms.component.ts ***!
          \*********************************************************/
        /*! exports provided: FormsComponent, ValidationMessagePipe, personalIdentityNumberValidator, PersonalIdentityNumberDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function () { return FormsComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationMessagePipe", function () { return ValidationMessagePipe; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personalIdentityNumberValidator", function () { return personalIdentityNumberValidator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalIdentityNumberDirective", function () { return PersonalIdentityNumberDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var swe_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swe-validation */ "./node_modules/swe-validation/index.js");
            /* harmony import */ var swe_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(swe_validation__WEBPACK_IMPORTED_MODULE_3__);
            var PersonalIdentityNumberDirective_1;
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
                return FormsComponent;
            }());
            FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-forms',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/forms/forms.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], FormsComponent);
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
                return ValidationMessagePipe;
            }());
            ValidationMessagePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'validationMessage'
                })
            ], ValidationMessagePipe);
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
            var PersonalIdentityNumberDirective = PersonalIdentityNumberDirective_1 = /** @class */ (function () {
                function PersonalIdentityNumberDirective() {
                    this.valFn = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator;
                }
                PersonalIdentityNumberDirective.prototype.ngOnInit = function () {
                    this.valFn = personalIdentityNumberValidator();
                };
                PersonalIdentityNumberDirective.prototype.validate = function (control) {
                    return this.valFn(control);
                };
                return PersonalIdentityNumberDirective;
            }());
            PersonalIdentityNumberDirective = PersonalIdentityNumberDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    selector: '[personalIdentityNumberCheck]',
                    providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: PersonalIdentityNumberDirective_1, multi: true }]
                })
            ], PersonalIdentityNumberDirective);
            /***/ 
        }),
        /***/ "./src/example/components/icons/icons.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/example/components/icons/icons.component.ts ***!
          \*********************************************************/
        /*! exports provided: IconsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function () { return IconsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
                }
                IconsComponent.prototype.filterIcons = function (search) {
                    this.filteredIcons = this.icons.filter(function (icon) { return icon.indexOf(search) !== -1; });
                };
                IconsComponent.prototype.ngOnInit = function () {
                };
                return IconsComponent;
            }());
            IconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-icons',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./icons.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/icons/icons.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], IconsComponent);
            /***/ 
        }),
        /***/ "./src/example/components/input-group/input-group.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/example/components/input-group/input-group.component.ts ***!
          \*********************************************************************/
        /*! exports provided: InputGroupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupComponent", function () { return InputGroupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var InputGroupComponent = /** @class */ (function () {
                function InputGroupComponent() {
                    this.step = 0;
                }
                InputGroupComponent.prototype.ngOnInit = function () {
                };
                return InputGroupComponent;
            }());
            InputGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-input-group',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input-group.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/input-group/input-group.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], InputGroupComponent);
            /***/ 
        }),
        /***/ "./src/example/components/list-group/list-group.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/example/components/list-group/list-group.component.ts ***!
          \*******************************************************************/
        /*! exports provided: ListGroupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroupComponent", function () { return ListGroupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ListGroupComponent = /** @class */ (function () {
                function ListGroupComponent() {
                }
                ListGroupComponent.prototype.ngOnInit = function () {
                };
                return ListGroupComponent;
            }());
            ListGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-list-group',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-group.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/list-group/list-group.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], ListGroupComponent);
            /***/ 
        }),
        /***/ "./src/example/components/modals/modals.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/example/components/modals/modals.component.ts ***!
          \***********************************************************/
        /*! exports provided: ModalsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsComponent", function () { return ModalsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js");
            /* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(body_scroll_lock__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
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
                    var modalRef = this.modalService.open(content, Object.assign({}, options, { ariaLabelledBy: 'modal-basic-title' }));
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
                return ModalsComponent;
            }());
            ModalsComponent.ctorParameters = function () { return [
                { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
            ]; };
            ModalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-modals',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modals.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/modals/modals.component.html")).default,
                    styles: ["\n        #modalExample .modal {\n            opacity: 1;\n            display: block;\n            position: initial;\n        }\n        .modal.active {\n            display: block;\n        }\n    "]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document,
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
            ], ModalsComponent);
            /***/ 
        }),
        /***/ "./src/example/components/navbar/navbar.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/example/components/navbar/navbar.component.ts ***!
          \***********************************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent() {
                }
                NavbarComponent.prototype.ngOnInit = function () {
                };
                return NavbarComponent;
            }());
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/navbar/navbar.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/example/components/pagination/pagination.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/example/components/pagination/pagination.component.ts ***!
          \*******************************************************************/
        /*! exports provided: PaginationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () { return PaginationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PaginationComponent = /** @class */ (function () {
                function PaginationComponent() {
                }
                PaginationComponent.prototype.ngOnInit = function () {
                };
                return PaginationComponent;
            }());
            PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-pagination',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/pagination/pagination.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], PaginationComponent);
            /***/ 
        }),
        /***/ "./src/example/components/radio-buttons/radio-buttons.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/example/components/radio-buttons/radio-buttons.component.ts ***!
          \*************************************************************************/
        /*! exports provided: RadioButtonsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonsComponent", function () { return RadioButtonsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var RadioButtonsComponent = /** @class */ (function () {
                function RadioButtonsComponent() {
                }
                RadioButtonsComponent.prototype.ngOnInit = function () {
                };
                return RadioButtonsComponent;
            }());
            RadioButtonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-radio-buttons',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./radio-buttons.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/radio-buttons/radio-buttons.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], RadioButtonsComponent);
            /***/ 
        }),
        /***/ "./src/example/components/skeleton-loader/skeleton-loader.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/example/components/skeleton-loader/skeleton-loader.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: SkeletonLoaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonLoaderComponent", function () { return SkeletonLoaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SkeletonLoaderComponent = /** @class */ (function () {
                function SkeletonLoaderComponent() {
                    this.showOverlay = false;
                }
                SkeletonLoaderComponent.prototype.ngOnInit = function () {
                };
                return SkeletonLoaderComponent;
            }());
            SkeletonLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-skeleton-loader',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./skeleton-loader.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/skeleton-loader/skeleton-loader.component.html")).default,
                    styles: ["\n        .overlay-content {\n          position: absolute;\n          width: calc(100% - 40px);\n          z-index: 10;\n          opacity: 0.5;\n      }\n  "]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], SkeletonLoaderComponent);
            /***/ 
        }),
        /***/ "./src/example/components/spinners/spinners.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/example/components/spinners/spinners.component.ts ***!
          \***************************************************************/
        /*! exports provided: SpinnersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnersComponent", function () { return SpinnersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SpinnersComponent = /** @class */ (function () {
                function SpinnersComponent() {
                }
                SpinnersComponent.prototype.ngOnInit = function () {
                };
                return SpinnersComponent;
            }());
            SpinnersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-spinners',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spinners.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/spinners/spinners.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], SpinnersComponent);
            /***/ 
        }),
        /***/ "./src/example/components/tables/tables.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/example/components/tables/tables.component.ts ***!
          \***********************************************************/
        /*! exports provided: TablesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function () { return TablesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
                return TablesComponent;
            }());
            TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tables',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tables.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/tables/tables.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], TablesComponent);
            /***/ 
        }),
        /***/ "./src/example/components/tabs/tabs.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/example/components/tabs/tabs.component.ts ***!
          \*******************************************************/
        /*! exports provided: TabsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function () { return TabsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TabsComponent = /** @class */ (function () {
                function TabsComponent() {
                }
                TabsComponent.prototype.ngOnInit = function () {
                };
                return TabsComponent;
            }());
            TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tabs',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/tabs/tabs.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], TabsComponent);
            /***/ 
        }),
        /***/ "./src/example/components/toast-notifications/toast-notifications.component.ts": 
        /*!*************************************************************************************!*\
          !*** ./src/example/components/toast-notifications/toast-notifications.component.ts ***!
          \*************************************************************************************/
        /*! exports provided: ToastNotificationsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastNotificationsComponent", function () { return ToastNotificationsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
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
                // generate random toast content
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
                // show toast
                ToastNotificationsComponent.prototype.showToast = function (type, disableTimeOut, inline) {
                    if (disableTimeOut === void 0) { disableTimeOut = false; }
                    if (inline === void 0) { inline = false; }
                    var config = {};
                    if (disableTimeOut) {
                        config = Object.assign({}, config, { disableTimeOut: true });
                    }
                    if (inline) {
                        this.toastr.overlayContainer = this.inlineContainers.toArray()[0];
                        config = Object.assign({}, config, { positionClass: 'inline' });
                    }
                    var toast = this.getToast();
                    this.toastr[type](toast.message, toast.title, config);
                };
                return ToastNotificationsComponent;
            }());
            ToastNotificationsComponent.ctorParameters = function () { return [
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastContainerDirective"]),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
            ], ToastNotificationsComponent.prototype, "inlineContainers", void 0);
            ToastNotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-toast-notifications',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toast-notifications.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/toast-notifications/toast-notifications.component.html")).default,
                    styles: ["\n        code {\n          white-space: nowrap;\n        }\n    "]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
            ], ToastNotificationsComponent);
            /***/ 
        }),
        /***/ "./src/example/components/tooltips/tooltips.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/example/components/tooltips/tooltips.component.ts ***!
          \***************************************************************/
        /*! exports provided: TooltipsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipsComponent", function () { return TooltipsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TooltipsComponent = /** @class */ (function () {
                function TooltipsComponent() {
                }
                TooltipsComponent.prototype.ngOnInit = function () {
                };
                return TooltipsComponent;
            }());
            TooltipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-tooltips',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tooltips.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/tooltips/tooltips.component.html")).default,
                    styles: ["\n      .tooltip {\n          position: relative;\n          display: inline-block;\n          margin: 10px 20px;\n          opacity: 1;\n      }\n      .bs-tooltip-right .arrow, .bs-tooltip-left .arrow {\n          top: calc(50% - 0.4rem);\n      }\n      .bs-tooltip-top .arrow, .bs-tooltip-bottom .arrow {\n          right: calc(50% - 0.4rem);\n      }\n  "]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], TooltipsComponent);
            /***/ 
        }),
        /***/ "./src/example/components/typography/typography.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/example/components/typography/typography.component.ts ***!
          \*******************************************************************/
        /*! exports provided: TypographyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function () { return TypographyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TypographyComponent = /** @class */ (function () {
                function TypographyComponent() {
                }
                TypographyComponent.prototype.ngOnInit = function () {
                };
                return TypographyComponent;
            }());
            TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-typography',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/index.js!./src/example/components/typography/typography.component.html")).default
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], TypographyComponent);
            /***/ 
        }),
        /***/ "./src/example/example.module.ts": 
        /*!***************************************!*\
          !*** ./src/example/example.module.ts ***!
          \***************************************/
        /*! exports provided: ExampleModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleModule", function () { return ExampleModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _components_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/buttons/buttons.component */ "./src/example/components/buttons/buttons.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _components_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/alerts/alerts.component */ "./src/example/components/alerts/alerts.component.ts");
            /* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tabs/tabs.component */ "./src/example/components/tabs/tabs.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _components_tables_tables_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/tables/tables.component */ "./src/example/components/tables/tables.component.ts");
            /* harmony import */ var angular_exemplify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-exemplify */ "./node_modules/angular-exemplify/fesm2015/angular-exemplify.js");
            /* harmony import */ var _components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/breadcrumbs/breadcrumbs.component */ "./src/example/components/breadcrumbs/breadcrumbs.component.ts");
            /* harmony import */ var _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/forms/forms.component */ "./src/example/components/forms/forms.component.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _components_checkboxes_and_slide_toggles_checkboxes_and_slide_toggles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component */ "./src/example/components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_icons_icons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/icons/icons.component */ "./src/example/components/icons/icons.component.ts");
            /* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
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
                return ExampleModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/example/services/mobile-detect.service.ts": 
        /*!*******************************************************!*\
          !*** ./src/example/services/mobile-detect.service.ts ***!
          \*******************************************************/
        /*! exports provided: MobileDetectService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileDetectService", function () { return MobileDetectService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobile-detect */ "./node_modules/mobile-detect/mobile-detect.js");
            /* harmony import */ var mobile_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(mobile_detect__WEBPACK_IMPORTED_MODULE_2__);
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
                return MobileDetectService;
            }());
            MobileDetectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], MobileDetectService);
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.log(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/travis/build/sebgroup/bootstrap/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map