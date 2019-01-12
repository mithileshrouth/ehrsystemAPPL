var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.hide = true;
        this.loginButtonActive = true;
        this.loaderActive = false;
        this.invalidErr = false;
        this.invalidErrMsg = "";
        this.loginForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
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
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [AuthService, Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map