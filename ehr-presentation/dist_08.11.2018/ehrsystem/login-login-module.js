(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.loginform-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 24%;\r\n    margin: 12% auto;\r\n    background: #FBFBFB;\r\n    border: 0px solid #CCC;\r\n    padding: 0% 3%;\r\n    padding-bottom: 9%;\r\n    border-radius: 8px;\r\n    box-shadow: 0px 8px 14px -2px #CCC;\r\n}\r\n\r\n.loginheading {\r\n    padding: 15% 1%;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\r\n\r\n.loginactions {\r\n    margin-top: 1%;\r\n}\r\n\r\n.loginactions {\r\n    margin-top: 18px;\r\n    text-align: right;\r\n    font-size: 13px;\r\n}\r\n\r\n.loginerr {\r\n    background: #ff4081;\r\n    padding: 5px 5px;\r\n    color: #FFF;\r\n    border-radius: 30px;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-weight: 100;\r\n}\r\n\r\n*/\r\n\r\n.logocontainer {\r\n    margin-top: 3%;\r\n    padding: 2%;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n    clear: both;\r\n}\r\n\r\n.loginformcontainer {\r\n    width: 70%;\r\n    margin: 12% auto;\r\n    padding: 2%;\r\n}\r\n\r\n.loginformcontainer>h3 {\r\n    font-weight: 200;\r\n    letter-spacing: 2px;\r\n    text-align: center;\r\n    margin-bottom: 8%;\r\n    font-size: 2rem;\r\n    font-family: Roboto;\r\n}\r\n\r\n.forgotpassword{\r\n    text-decoration: underline;\r\n    float: right;\r\n    font-size: 0.72rem;\r\n    color: #787676;\r\n    letter-spacing: 1px;\r\n    font-weight: 400;\r\n}\r\n\r\n.loginbtn{\r\n    width: 100%;\r\n    margin-top: 2%;\r\n    /* border-radius: 42px; */\r\n    padding: 1%;\r\n}\r\n\r\n.loginerr {\r\n    background: #ff4081;\r\n    padding: 5px 5px;\r\n    color: #FFF;\r\n    border-radius: 30px;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-weight: 100;\r\n    text-indent: 10px;\r\n}\r\n\r\n/*//////////////////////////////////////////////////////////////////\r\n  [ login ]*/\r\n\r\n.limiter {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n}\r\n\r\n.container-login100 {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: stretch;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.wrap-login100 {\r\n    /* width: 520px; */\r\n    width: 46%;\r\n    min-height: 100vh;\r\n    background: #fff;\r\n    border-radius: 2px;\r\n    position: relative;\r\n}\r\n\r\n/*------------------------------------------------------------------\r\n  [ Login100 more ]*/\r\n\r\n.login100-more {\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n  /*  width: calc(100% - 520px); */\r\n    width:53%;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.login100-more::before {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: #010308;\r\n    background: linear-gradient(bottom, #e8519e, #c77ff2);\r\n    opacity: 0.3;\r\n}\r\n\r\n/*==================================================================\r\n  [ Form ]*/\r\n\r\n.login100-form {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n}\r\n\r\n.login100-form-title {\r\n    display: block;\r\n    width: 100%;\r\n    font-family: Poppins-Bold;\r\n    font-size: 39px;\r\n    color: #333333;\r\n    line-height: 1.2;\r\n    text-align: left;\r\n}\r\n\r\n/*------------------------------------------------------------------\r\n  [ Input ]*/\r\n\r\n@media (max-width: 576px) {\r\n    .wrap-login100 {\r\n        padding-left: 15px;\r\n        padding-right: 15px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"loginform-container\">\n    <section class=\"loginheading mat-typography\">\n        <h2>Sign In to continue</h2>\n    </section>\n\n\n    <form [formGroup]=\"loginForm\" novalidate (ngSubmit)=\"onSubmit(loginForm.value)\">\n        <mat-form-field>\n            <input matInput placeholder=\"Employee ID\" type=\"text\" formControlName=\"username\" autocomplete=\"off\">\n            <mat-icon matSuffix>assignment_ind</mat-icon>\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Your password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" autocomplete=\"off\">\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n        </mat-form-field>\n\n\n\n        <button mat-raised-button color=\"accent\" type=\"submit\" *ngIf=\"loginButtonActive\">Login</button>\n        <mat-spinner [diameter]=\"25\" style=\"margin:0 auto;\" *ngIf=\"loaderActive\"></mat-spinner>\n\n        <div class=\"loginactions\">\n\n             <mat-checkbox class=\"example-margin\" >Remember Me</mat-checkbox>\n\n        </div>\n    </form>\n\n    <h4 class=\"loginerr\" *ngIf=\"invalidErr\">{{invalidErrMsg}}</h4>\n\n    \n       \n</div>\n-->\n\n\n\n\n\n<div class=\"limiter\">\n    <div class=\"container-login100\">\n        <div class=\"login100-more\" style=\"background-image: url('assets/loginbg.jpg');\"></div>\n\n\n\n        <div class=\"wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50\">\n            <div class=\"container logocontainer\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" fxLayoutAlign=\"center\">\n                <div fxFlex=\"50%\">\n                    <img src=\"assets/logo.png\" style=\"width: 100%;\" />\n                </div>\n                <div fxFlex=\"50%\">\n                    <img src=\"assets/logo2.png\" style=\"float: right;\" />\n                </div>\n            </div>\n           \n            <form [formGroup]=\"loginForm\" novalidate (ngSubmit)=\"onSubmit(loginForm.value)\" class=\"loginformcontainer\">\n                <h3>\n                    <span style=\"color:#34669e\"> Welcome</span>\n                    <span style=\"color:#9fb07a\"> Back </span>\n                </h3>\n\n              \n\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>User ID</mat-label>\n                    <input matInput placeholder=\"User ID\" type=\"text\" formControlName=\"username\" autocomplete=\"off\">\n                    <mat-icon matSuffix>assignment_ind</mat-icon>\n                </mat-form-field>\n\n                <mat-form-field appearance=\"outline\">\n                    <mat-label>Password</mat-label>\n                    <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" autocomplete=\"off\">\n                    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                </mat-form-field>\n\n             \n                <div class=\"loginactions\">\n                    <a  class=\"forgotpassword\" >Forgot Password ?</a>\n                    <button mat-raised-button color=\"primary\" class=\"loginbtn\" type=\"submit\" *ngIf=\"loginButtonActive\" >Login </button>\n                    <mat-spinner [diameter]=\"25\" style=\"margin:0 auto;\" *ngIf=\"loaderActive\"></mat-spinner>\n                   \n                </div>\n\n                <h4 class=\"loginerr\" *ngIf=\"invalidErr\">{{invalidErrMsg}}</h4>\n\n            </form>\n\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.hide = true;
        this.loginButtonActive = true;
        this.loaderActive = false;
        this.invalidErr = false;
        this.invalidErrMsg = "";
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (formVal) {
        var _this = this;
        if (this.isLoginFormValid(formVal)) {
            this.loginButtonActive = false;
            this.loaderActive = true;
            var response_1;
            this.authService.signInVerification(formVal).then(function (data) {
                response_1 = data;
                if (response_1.msg_status == 100) {
                    var user_data = response_1.userdata;
                    localStorage.setItem("token", response_1.token);
                    localStorage.setItem("fname", user_data.first_name);
                    localStorage.setItem("lname", user_data.last_name);
                    // this.router.navigate(['/panel/registration']);
                    console.log(user_data.user_role_code);
                    if (user_data.user_role_code == "ADMIN") {
                        _this.router.navigate(['/panel/dashboard']);
                    }
                    else if (user_data.user_role_code == "DOC") {
                        _this.router.navigate(['/panel/todaysreg']);
                    }
                    else if (user_data.user_role_code == "ASST") {
                        _this.router.navigate(['/panel/registration']);
                    }
                    else if (user_data.user_role_code == "PHRM") {
                        _this.router.navigate(['/panel/prescriptionlist']);
                    }
                    else {
                        _this.router.navigate(['/not-found']);
                    }
                }
                else {
                    _this.invalidErr = true;
                    _this.invalidErrMsg = response_1.msg_data;
                    _this.loginButtonActive = true;
                    _this.loaderActive = false;
                }
            }, function (error) {
                console.log("Error from login attempt");
            });
        }
    };
    LoginComponent.prototype.isLoginFormValid = function (formVal) {
        var isFormValidate = true;
        if (formVal.username == "" || formVal.username == null) {
            isFormValidate = false;
        }
        if (formVal.password == "" || formVal.password == null) {
            isFormValidate = false;
        }
        return isFormValidate;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map