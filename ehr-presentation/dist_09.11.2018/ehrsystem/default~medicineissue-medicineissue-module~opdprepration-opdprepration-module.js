(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~medicineissue-medicineissue-module~opdprepration-opdprepration-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/catch.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_catch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/catch */ "./node_modules/rxjs-compat/_esm5/operator/catch.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.catch = _operator_catch__WEBPACK_IMPORTED_MODULE_1__["_catch"];
rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype._catch = _operator_catch__WEBPACK_IMPORTED_MODULE_1__["_catch"];
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/add/operator/map.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/operator/map.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../operator/map */ "./node_modules/rxjs-compat/_esm5/operator/map.js");


rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.map = _operator_map__WEBPACK_IMPORTED_MODULE_1__["map"];
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/catch.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/catch.js ***!
  \**********************************************************/
/*! exports provided: _catch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_catch", function() { return _catch; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function _catch(selector) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(selector)(this);
}
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operator/map.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operator/map.js ***!
  \********************************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

function map(project, thisArg) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(project, thisArg)(this);
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./src/app/layout/components/successdialog/successdialog.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/components/successdialog/successdialog.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-icon{\r\n    width:auto !important;\r\n}\r\n.dialogicon{\r\n    font-size: 5rem;\r\n}\r\n.msg{\r\n    text-align: center;\r\n    font-size: 0.9rem;\r\n    letter-spacing: 1px;\r\n    margin-top: -15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/layout/components/successdialog/successdialog.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/layout/components/successdialog/successdialog.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"text-align:center;\"><mat-icon class=\"dialogicon\" [style.color]=\"iconColor\" >{{msgIcon}}</mat-icon></p>\n<p class=\"msg\" style=\"text-align:center;\">{{msg}}</p>\n<button mat-flat-button color=\"primary\" class=\"center\" style=\"width:30%;\" (click)=\"redirectToComp()\" >Close</button>"

/***/ }),

/***/ "./src/app/layout/components/successdialog/successdialog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/components/successdialog/successdialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: SuccessdialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessdialogComponent", function() { return SuccessdialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/patient.service */ "./src/app/service/patient.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var SuccessdialogComponent = /** @class */ (function () {
    function SuccessdialogComponent(router, dialogRef, commonService, patientService, data) {
        this.router = router;
        this.dialogRef = dialogRef;
        this.commonService = commonService;
        this.patientService = patientService;
        this.data = data;
        this.msg = this.data.msg;
        this.msgIcon = this.data.msgicon;
        this.iconColor = this.data.iconcolor;
        this.redirectUrl = this.data.btnurl;
    }
    SuccessdialogComponent.prototype.ngOnInit = function () {
        //console.log(this.data);
    };
    SuccessdialogComponent.prototype.redirectToComp = function () {
        this.dialogRef.close();
        this.router.navigateByUrl(this.redirectUrl);
    };
    SuccessdialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-successdialog',
            template: __webpack_require__(/*! ./successdialog.component.html */ "./src/app/layout/components/successdialog/successdialog.component.html"),
            styles: [__webpack_require__(/*! ./successdialog.component.css */ "./src/app/layout/components/successdialog/successdialog.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], _service_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"], _service_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"], Object])
    ], SuccessdialogComponent);
    return SuccessdialogComponent;
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



/***/ }),

/***/ "./src/app/service/datashare.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/datashare.service.ts ***!
  \**********************************************/
/*! exports provided: DatashareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatashareService", function() { return DatashareService; });
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

var DatashareService = /** @class */ (function () {
    function DatashareService() {
        this.sharedData = "";
        this.sharingData = { objPatient: "" };
        this.prescriptionsingleRow = { objPresSingledata: "" };
    }
    DatashareService.prototype.saveData = function (obj) {
        this.sharingData.objPatient = obj;
    };
    DatashareService.prototype.getData = function () {
        return this.sharingData.objPatient;
    };
    DatashareService.prototype.savePrescriptionRowData = function (obj) {
        this.prescriptionsingleRow.objPresSingledata = obj;
    };
    DatashareService.prototype.getPrescriptionRowData = function () {
        return this.prescriptionsingleRow.objPresSingledata;
    };
    DatashareService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DatashareService);
    return DatashareService;
}());



/***/ }),

/***/ "./src/app/service/patient.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/patient.service.ts ***!
  \********************************************/
/*! exports provided: PatientsCls, PatientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsCls", function() { return PatientsCls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientService", function() { return PatientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalconstant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalconstant.service */ "./src/app/service/globalconstant.service.ts");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PatientsCls = /** @class */ (function () {
    function PatientsCls() {
    }
    return PatientsCls;
}());

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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _globalconstant_service__WEBPACK_IMPORTED_MODULE_2__["GlobalconstantService"]])
    ], PatientService);
    return PatientService;
}());



/***/ }),

/***/ "./src/app/service/symptomdisease.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/symptomdisease.service.ts ***!
  \***************************************************/
/*! exports provided: SymptomdiseaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymptomdiseaseService", function() { return SymptomdiseaseService; });
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _globalconstant_service__WEBPACK_IMPORTED_MODULE_2__["GlobalconstantService"]])
    ], SymptomdiseaseService);
    return SymptomdiseaseService;
}());



/***/ })

}]);
//# sourceMappingURL=default~medicineissue-medicineissue-module~opdprepration-opdprepration-module.js.map