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
var SymptomdiseaseService = /** @class */ (function () {
    function SymptomdiseaseService(http, global) {
        this.http = http;
        this.global = global;
    }
    SymptomdiseaseService.prototype.getInvestigations = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.global.investigationlist_URL).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    SymptomdiseaseService.prototype.getSymptoms = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.global.symptomlist_URL).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    SymptomdiseaseService.prototype.getDiseasesBySymptom = function (symptoms) {
        var _this = this;
        var datas = JSON.stringify({ symptom: symptoms });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.diseaselist_URL, datas).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    SymptomdiseaseService.prototype.getMedicineByDisease = function (medicine) {
        var _this = this;
        var datas = JSON.stringify({ medicine: medicine });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.medicinelist_URL, datas).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    SymptomdiseaseService.prototype.getDosageByMedicine = function (medicine) {
        var _this = this;
        var datas = JSON.stringify({ medicine: medicine });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.dosageByMedlist_URL, datas).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    SymptomdiseaseService.prototype.getFrequencyByMedicine = function (medicine) {
        var _this = this;
        var datas = JSON.stringify({ medicine: medicine });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.frequencyByMedlist_URL, datas).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    SymptomdiseaseService.prototype.insertToOPD = function (healthprofile, opdform, medicines, reports) {
        var _this = this;
        var datas = JSON.stringify({ healthprofile: healthprofile, opdform: opdform, medicines: medicines, reports: reports });
        return new Promise(function (resolve) {
            _this.http.post(_this.global.insertOPD_URL, datas).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    SymptomdiseaseService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, GlobalconstantService])
    ], SymptomdiseaseService);
    return SymptomdiseaseService;
}());
export { SymptomdiseaseService };
//# sourceMappingURL=symptomdisease.service.js.map