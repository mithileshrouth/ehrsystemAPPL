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
    CommonService.prototype.deleteRecords = function (delid, column, fromtbl) {
        var _this = this;
        var myData = JSON.stringify({ tid: delid, tc: column, from: fromtbl });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.deleteRecord_URL, myData).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    CommonService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, GlobalconstantService])
    ], CommonService);
    return CommonService;
}());
export { CommonService };
//# sourceMappingURL=common.service.js.map