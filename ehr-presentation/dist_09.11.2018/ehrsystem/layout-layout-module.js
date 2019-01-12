(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/components/dialog/okdialog/okdialog.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/layout/components/dialog/okdialog/okdialog.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/components/dialog/okdialog/okdialog.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/components/dialog/okdialog/okdialog.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  okdialog works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/components/dialog/okdialog/okdialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/components/dialog/okdialog/okdialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: OkdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OkdialogComponent", function() { return OkdialogComponent; });
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

var OkdialogComponent = /** @class */ (function () {
    function OkdialogComponent() {
    }
    OkdialogComponent.prototype.ngOnInit = function () {
    };
    OkdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-okdialog',
            template: __webpack_require__(/*! ./okdialog.component.html */ "./src/app/layout/components/dialog/okdialog/okdialog.component.html"),
            styles: [__webpack_require__(/*! ./okdialog.component.css */ "./src/app/layout/components/dialog/okdialog/okdialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OkdialogComponent);
    return OkdialogComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  \r\n    <mat-sidenav-content>\r\n      <mat-toolbar color=\"primary\">\r\n       \r\n        <span class=\"fill-remaining-space\">\r\n           \r\n          <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"true\">\r\n            <button mat-menu-item>\r\n              <mat-icon>home</mat-icon>\r\n              <span>Home</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <mat-icon>people_outline</mat-icon>\r\n              <span>Connecting</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <mat-icon>videocam</mat-icon>\r\n              <span>Let's talk</span>\r\n            </button>\r\n            <button mat-menu-item>\r\n              <mat-icon>exit_to_app</mat-icon>\r\n              <span>Logout</span>\r\n            </button>\r\n          </mat-menu>\r\n        </span>\r\n        <span class=\"fill-remaining-space\">Application Title</span>\r\n      \r\n         <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n      </mat-toolbar>\r\n     \r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n  "

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  background-color: #222; }\n  :host .navbar .navbar-brand {\n    color: #fff; }\n  :host .navbar .nav-item > a {\n    color: #999; }\n  :host .navbar .nav-item > a:hover {\n      color: #fff; }\n  :host .messages {\n  width: 300px; }\n  :host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n  :host .messages .media:last-child {\n      border-bottom: none; }\n  :host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  :host .messages .media-body .small {\n    margin: 0; }\n  :host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n    <mat-sidenav\r\n      #drawer\r\n      class=\"sidenav\"\r\n      fixedInViewport=\"true\"\r\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\r\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n      [opened]=\"!(isHandset$ | async)\">\r\n      <mat-toolbar color=\"primary\">Menu</mat-toolbar>\r\n      <mat-nav-list>\r\n        <a mat-list-item routerLink='/dashboard'>Link 1</a>\r\n        <a mat-list-item routerLink=\"/opdreg\">Link 2</a>\r\n        <a mat-list-item href=\"#\">Link 3</a>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <mat-toolbar color=\"primary\">\r\n        <button\r\n          type=\"button\"\r\n          aria-label=\"Toggle sidenav\"\r\n          mat-icon-button\r\n          (click)=\"drawer.toggle()\"\r\n          *ngIf=\"isHandset$ | async\">\r\n          <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n        </button>\r\n        <span>ehrsystem</span>\r\n      </mat-toolbar>\r\n     \r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n  "

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 200px; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, breakpointObserver) {
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'reg', loadChildren: './patientreg/patientreg.module#PatientregModule' },
            { path: 'registration', loadChildren: './patienregistration/patienregistration.module#PatienregistrationModule' },
            { path: 'todaysreg', loadChildren: './todaysregistration/todaysregistration.module#TodaysregistrationModule' },
            { path: 'opd', loadChildren: './opdprepration/opdprepration.module#OpdpreprationModule' },
            { path: 'sickapproval', loadChildren: './sickleaveapproval/sickleaveapproval.module#sickleaveapprovalModule' },
            { path: 'prescriptionlist', loadChildren: './pharmacymedicinelist/pharmacymedicinelist.module#PharmacymedicinelistModule' },
            { path: 'medicineissue', loadChildren: './medicineissue/medicineissue.module#MedicineissueModule' }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-header></app-header>\n<app-sidebar (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar>\n<section class=\"main-container\" [ngClass]=\"{collapsed: collapedSideBar}\">\n    <router-outlet></router-outlet>\n</section>-->\n\n\n<mat-sidenav-container class=\"sidenav-container\" *ngIf=\"isAdmin\">\n    \n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar class=\"primarycolor\" >Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink='/panel/dashboard'><mat-icon>dashboard</mat-icon> Dashboard</a>\n      <a mat-list-item routerLink=\"/panel/forms\"><mat-icon>queue</mat-icon> Registration</a>\n      <a mat-list-item routerLink=\"/panel/forms\"><mat-icon>playlist_add_check</mat-icon> Todays List</a>\n      <a mat-list-item routerLink=\"/panel/forms\"><mat-icon>new_releases</mat-icon> Medicine</a>\n      <a mat-list-item routerLink=\"/panel/forms\"><mat-icon>link</mat-icon> Import Medicine</a>\n      <mat-divider></mat-divider>\n      <a mat-list-item routerLink=\"/panel/forms\"><mat-icon>notification_important</mat-icon> Doctors Visit</a>\n      <a mat-list-item routerLink=\"/panel/forms\"><mat-icon>memory</mat-icon> Todays Report</a>\n      <a mat-list-item routerLink=\"/panel/forms\"><mat-icon>compare</mat-icon> Stock Report</a>\n      <a mat-list-item routerLink=\"/panel/forms\"><mat-icon>notification_important</mat-icon> Other Report</a>\n      <a mat-list-item routerLink=\"/panel/forms\"><mat-icon>domain</mat-icon> Help</a>\n      \n    </mat-nav-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <mat-toolbar class=\"primarycolor\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      \n\n      <span class=\"fill-remaining-space\">\n         \n        <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\n          <button mat-menu-item>\n            <mat-icon>home</mat-icon>\n            <span>Home</span>\n          </button>\n         \n         \n          <button mat-menu-item>\n            <mat-icon>exit_to_app</mat-icon>\n            <span>Logout</span>\n          </button>\n        </mat-menu>\n      </span>\n      <span class=\"fill-remaining-space\">Application Title</span>\n    \n       <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n          <mat-icon>dashboard</mat-icon>\n        </button>\n\n\n\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n\n\n<mat-sidenav-container class=\"sidenav-container\" *ngIf=\"isNotAdmin\">\n  \n     \n      <mat-sidenav-content>\n        <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" fxLayoutAlign=\"center\">\n          <mat-toolbar class=\"top_header\">\n              \n                <div fxFlex=\"50%\">\n                  <img src=\"assets/logo.png\" />\n                </div>\n                <div fxFlex=\"50%\" class=\"datetime\">\n                  \n                  <h3 class=\"time\">{{ time | date:'hh:mm:ss aa'}}</h3>\n                  <h3 class=\"date\">{{ time | date:'dd MMM, yyyy'}}</h3>\n                </div>\n              \n          </mat-toolbar>\n        </div>\n\n\n        <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" fxLayoutAlign=\"center\">\n            <mat-toolbar class=\"primarycolor\" >\n                <mat-icon>home</mat-icon>\n                <div fxFlex=\"50%\">\n                   \n                    <p class=\"welcome_title\">Welcome {{username}} </p>\n                   \n\n                    <span class=\"fill-remaining-space\">\n                        <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\n                          <button mat-menu-item>\n                            <mat-icon>home</mat-icon>\n                            <span>Home</span>\n                          </button>\n                         <button mat-menu-item (click)=\"Logout()\">\n                            <mat-icon>exit_to_app</mat-icon>\n                            <span>Logout</span>\n                          </button>\n                        </mat-menu>\n                      </span>\n\n                   \n                </div>\n                <div fxFlex=\"50%\" >\n                    <span class=\"estate_title\">Powai </span>\n                    <button mat-icon-button [matMenuTriggerFor]=\"menu\" style=\"float: right;\" >\n                        <mat-icon>person_pin</mat-icon>\n                      </button>\n                </div>\n                \n            </mat-toolbar>\n        </div>\n      \n\n\n        <router-outlet></router-outlet>\n      </mat-sidenav-content>\n    </mat-sidenav-container>\n  \n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 200px; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n\n.mat-drawer {\n  background-color: #f3f3f3;\n  color: #000000e6; }\n\n.mat-toolbar.mat-primary {\n  color: #fff;\n  z-index: 9; }\n\n.mat-drawer[_ngcontent-c1] {\n  background: #f7f9fc;\n  color: #fff; }\n\n.mat-nav-list .mat-list-item {\n  height: 36px;\n  letter-spacing: 1px;\n  font-size: 12px; }\n\n.mat-nav-list .mat-list-item .mat-icon {\n    font-size: 16px;\n    height: 15px;\n    width: 24px; }\n\n.mat-list-item-content {\n  padding: 0 7px; }\n\n.top_header {\n  background: #FFF;\n  padding: 1% 0; }\n\n.top_header img {\n    width: 31%;\n    margin-top: 2%;\n    margin-left: 2%; }\n\n.top_header .datetime {\n    padding-right: 2%;\n    text-align: right; }\n\n.top_header h3 {\n    letter-spacing: 5px;\n    font-weight: 400;\n    font-size: 0.9rem;\n    color: #3f6c8d; }\n\n.top_header .time {\n    font-weight: 500;\n    color: #f31919; }\n\n.top_header .date {\n    margin-top: -13px;\n    letter-spacing: 5px;\n    font-size: 12px; }\n\n.welcome_title {\n  font-size: 0.85rem;\n  letter-spacing: 1px;\n  text-indent: 5px; }\n\n.estate_title {\n  font-size: 1.5rem;\n  letter-spacing: 1px;\n  text-indent: 5px; }\n\n.mat-menu-content:not(:empty) {\n  padding-top: 0px;\n  padding-bottom: 0px; }\n\n.mat-menu-item {\n  font-size: 0.8rem; }\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(breakpointObserver, commonService, router) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.commonService = commonService;
        this.router = router;
        this.currdate = new Date();
        this.isNotAdmin = true;
        this.isAdmin = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
        setInterval(function () {
            _this.currdate = new Date(_this.currdate.setSeconds(_this.currdate.getSeconds() + 1));
            _this.time = _this.currdate;
        }, 1000);
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var token = this.getDecodedAccessToken(localStorage.getItem("token"));
        this.username = localStorage.getItem('fname') + " " + localStorage.getItem('lname');
    };
    LayoutComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    LayoutComponent.prototype.getDecodedAccessToken = function (token) {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token);
        }
        catch (Error) {
            return null;
        }
    };
    LayoutComponent.prototype.Logout = function () {
        localStorage.clear();
        this.router.navigate(['/']);
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"], _service_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var _components_dialog_okdialog_okdialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dialog/okdialog/okdialog.component */ "./src/app/layout/components/dialog/okdialog/okdialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"],
                _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_7__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_dialog_okdialog_okdialog_component__WEBPACK_IMPORTED_MODULE_8__["OkdialogComponent"]],
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/service/common.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/common.service.ts ***!
  \*******************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalconstant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalconstant.service */ "./src/app/service/globalconstant.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommonService = /** @class */ (function () {
    function CommonService(http, global) {
        this.http = http;
        this.global = global;
    }
    CommonService.prototype.getBloodGroup = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.global.bloodgrpList_URL).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    CommonService.prototype.getPatientType = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.global.patienttypeList_URL).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    CommonService.prototype.getRelations = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.global.relationList_URL).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    CommonService.prototype.getEstates = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.global.estateList_URL).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    CommonService.prototype.getHospitals = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.global.hospitalList_URL).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    CommonService.prototype.getSickApproveList = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.global.sickApprovalList_URL).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    CommonService.prototype.getSickLeaveApproveCount = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.global.sickApprovalCount_URL).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _globalconstant_service__WEBPACK_IMPORTED_MODULE_2__["GlobalconstantService"]])
    ], CommonService);
    return CommonService;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map