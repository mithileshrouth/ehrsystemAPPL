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
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { CommonService } from '../service/common.service';
import * as jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(breakpointObserver, commonService, router) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.commonService = commonService;
        this.router = router;
        this.currdate = new Date();
        this.isNotAdmin = true;
        this.isAdmin = false;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map(function (result) { return result.matches; }));
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
            return jwt_decode(token);
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
        Component({
            selector: 'app-layout',
            templateUrl: './layout.component.html',
            styleUrls: ['./layout.component.scss']
        }),
        __metadata("design:paramtypes", [BreakpointObserver, CommonService, Router])
    ], LayoutComponent);
    return LayoutComponent;
}());
export { LayoutComponent };
//# sourceMappingURL=layout.component.js.map