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
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
var PatientsCls = /** @class */ (function () {
    function PatientsCls() {
    }
    return PatientsCls;
}());
export { PatientsCls };
var PatientService = /** @class */ (function () {
    function PatientService(http, global) {
        this.http = http;
        this.global = global;
    }
    PatientService.prototype.GetPatientListAll = function () {
        return this.http.get(this.global.ListPatient);
    };
    PatientService.prototype.getPatientList = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.global.ListPatient).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PatientService.prototype.getPatientLists = function (hospitalid) {
        var _this = this;
        var myData = JSON.stringify({ hospital_id: hospitalid });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.ListPatient, myData).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PatientService.prototype.getPatientDetailById = function (patientid) {
        var _this = this;
        var hospitalid = 1; // will come from global file // need to change
        var myData = JSON.stringify({ hospital_id: hospitalid, patient_id: patientid });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.patientdetail_URL, myData).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PatientService.prototype.getPatientByCode = function (pcode) {
        var _this = this;
        var myData = JSON.stringify({ pcode: pcode });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.patientPrescInfoBycode_URL, myData).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PatientService.prototype.registerPatient = function (formValue) {
        var _this = this;
        var hospitalid = 1; // will come from global file // need to change
        var myData = JSON.stringify({ hospital_id: hospitalid, values: formValue });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.registerPatient_URL, myData).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PatientService.prototype.addNewPatient = function (formValue) {
        var _this = this;
        var myData = JSON.stringify({ values: formValue });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.addnewPatient_URL, myData).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PatientService.prototype.searchPatient = function (formValue, serachtype) {
        var _this = this;
        var hospitalid = 1; // will come from global file // need to change
        var myData = JSON.stringify({ hospital_id: hospitalid, values: formValue, stype: serachtype });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.searchPatient_URL, myData).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PatientService.prototype.checkIsRegisteredToday = function (formValue, serachtype) {
        var _this = this;
        var myData = JSON.stringify({ values: formValue, stype: serachtype });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.isregisterdToday_URL, myData).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PatientService.prototype.getPatientInfoByCode = function (pcode) {
        var _this = this;
        var myData = JSON.stringify({ pcode: pcode });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.patientInfoBycode_URL, myData).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    PatientService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, GlobalconstantService])
    ], PatientService);
    return PatientService;
}());
export { PatientService };
//# sourceMappingURL=patient.service.js.map