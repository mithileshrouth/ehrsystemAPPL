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
var PhramcyService = /** @class */ (function () {
    function PhramcyService(http, global) {
        this.http = http;
        this.global = global;
    }
    PhramcyService.prototype.getPrescriptionsListForPharmcy = function (date) {
        var _this = this;
        var myData = JSON.stringify({ searchdt: date });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.todaysPrescriptionPharmcy_URL, myData).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PhramcyService.prototype.getMedicinesByPrescription = function (prescriptionID) {
        var _this = this;
        var myData = JSON.stringify({ prescID: prescriptionID });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.medicineByprescriptionID_URL, myData).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PhramcyService.prototype.insertToMedicineIssue = function (patientinfo, medicineinfo) {
        var _this = this;
        var datas = JSON.stringify({ patientinfo: patientinfo, medicineinfo: medicineinfo });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.insertMedicineIssue_URL, datas).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PhramcyService.prototype.getMedicineBatchInfo = function (medid, reqqty) {
        var _this = this;
        var datas = JSON.stringify({ medid: medid, issue: reqqty });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.medicineBatchInfo_URL, datas).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PhramcyService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, GlobalconstantService])
    ], PhramcyService);
    return PhramcyService;
}());
export { PhramcyService };
//# sourceMappingURL=phramcy.service.js.map