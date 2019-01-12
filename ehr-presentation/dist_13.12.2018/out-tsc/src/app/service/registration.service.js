var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalconstantService } from './globalconstant.service';
var RegistrationService = /** @class */ (function () {
    function RegistrationService(http, global) {
        this.http = http;
        this.global = global;
    }
    RegistrationService.prototype.getTodaysRegistration = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.global.todaysReg_URL).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RegistrationService.prototype.registerPatient = function (pcode) {
        var _this = this;
        var myData = JSON.stringify({ values: pcode });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.registerPatient_URL, myData).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RegistrationService.prototype.getTodaysRegForDoc = function (type, serve) {
        var _this = this;
        var myData = JSON.stringify({ type: type, serve: serve });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.todaysRegDoct_URL, myData).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RegistrationService.prototype.sickApprove = function (opdid, status) {
        var _this = this;
        var myData = JSON.stringify({ opd_prescription_id: opdid, sick_leave_apprv: status });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.sickApprovalUpdate_URL, myData).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RegistrationService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, GlobalconstantService])
    ], RegistrationService);
    return RegistrationService;
}());
export { RegistrationService };
//# sourceMappingURL=registration.service.js.map