(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sickleaveapproval-sickleaveapproval-module"],{

/***/ "./src/app/layout/sickleaveapproval/sickleaveapproval-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/sickleaveapproval/sickleaveapproval-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: sickleaveapprovalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sickleaveapprovalRoutingModule", function() { return sickleaveapprovalRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sickleaveapproval_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sickleaveapproval.component */ "./src/app/layout/sickleaveapproval/sickleaveapproval.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { TodaysregistrationComponent } from './todaysregistration.component';
//SickleaveapprovalComponent
var routes = [
    {
        path: '', component: _sickleaveapproval_component__WEBPACK_IMPORTED_MODULE_2__["SickleaveapprovalComponent"]
    }
];
var sickleaveapprovalRoutingModule = /** @class */ (function () {
    function sickleaveapprovalRoutingModule() {
    }
    sickleaveapprovalRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], sickleaveapprovalRoutingModule);
    return sickleaveapprovalRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/sickleaveapproval/sickleaveapproval.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/layout/sickleaveapproval/sickleaveapproval.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-sickleave {\r\n    width: 100%;\r\n  }\r\n\r\n  .custm-btn{\r\n    font-size: 11px;\r\n    letter-spacing: 1px;\r\n    border-radius: 50px;\r\n    background: #03943f;\r\n  }\r\n\r\n  .custm-btn-blue{\r\n    font-size: 11px;\r\n    letter-spacing: 1px;\r\n    border-radius: 50px;\r\n    background: #1f6fc9;\r\n    }\r\n\r\n  .example-fill-remaining-space {\r\n      /* This fills the remaining space, by using flexbox. \r\n         Every toolbar row uses a flexbox row layout. */\r\n      flex: 1 1 auto;\r\n    }"

/***/ }),

/***/ "./src/app/layout/sickleaveapproval/sickleaveapproval.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/sickleaveapproval/sickleaveapproval.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wraper-container\">\r\n<div class=\"search-container\">\r\n  <mat-card></mat-card>\r\n  <mat-card style=\"padding:0;\">\r\n    <!--<h4 class=\"card_title\"> Registration</h4>-->\r\n      <mat-card-content >\r\n        <div class=\"container\"\r\n     fxLayout\r\n     fxLayout.xs=\"column\"\r\n     fxLayoutAlign=\"center\"\r\n     fxLayoutGap=\"10px\"\r\n     fxLayoutGap.xs=\"0\">\r\n  <div class=\"item item-1\" fxFlex=\"100%\">\r\n        \r\n        <mat-toolbar>\r\n               <!-- <h4></h4>\r\n\r\n               <button mat-raised-button color=\"primary\" class=\"customeBtn\" (click)=gotoSickLeaveApprovalList()>\r\n                    Sick leave approval\r\n                </button> -->\r\n                <span>Sick leave - Approval </span>\r\n\r\n                <!-- This fills the remaining space of the current row -->\r\n                <span class=\"example-fill-remaining-space\"></span>\r\n              \r\n                <span>\r\n                        <button mat-raised-button color=\"primary\" class=\"customeBtn\" (click)=goTodaysRegistration()>\r\n                                Back to Registration\r\n                        </button>\r\n                </span>\r\n\r\n\r\n        </mat-toolbar>\r\n        \r\n\r\n     \r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"mat-elevation-z8\">\r\n\r\n            <div class=\"container\"\r\n            fxLayout\r\n            fxLayout.xs=\"column\"\r\n            fxLayoutAlign=\"center\"\r\n            fxLayoutGap=\"10px\"\r\n            fxLayoutGap.xs=\"0\">\r\n            <div class=\"item item-1\" fxFlex=\"2%\"></div>   \r\n         <div class=\"item item-1\" fxFlex=\"48%\">\r\n                <mat-form-field>\r\n                        <input  matInput [matDatepicker]=\"picker\" placeholder=\"\" [formControl]=\"date\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker></mat-datepicker>\r\n                </mat-form-field>\r\n         </div>\r\n         <div class=\"item item-1\" fxFlex=\"15%\">\r\n          \r\n            <p>\r\n                \r\n                <button mat-flat-button class=\"custm-btn\"\r\n                        matBadge=\"{{sickLeaveApprovalCount}}\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\r\n                        Approved\r\n                </button>\r\n            </p>  \r\n            \r\n          </div>\r\n\r\n         <div class=\"item item-1\" fxFlex=\"15%\">\r\n            <p>\r\n                \r\n                <button mat-flat-button class=\"custm-btn-blue\"\r\n                matBadge=\"{{totalTodaysRegCount}}\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\r\n                Total appeal\r\n                </button>\r\n            </p>\r\n         </div>\r\n         <div class=\"item item-2\" fxFlex=\"20%\" fxFlexOrder=\"3\">\r\n                <mat-form-field>\r\n                        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n                </mat-form-field>\r\n         </div>\r\n         \r\n       </div>\r\n\r\n\r\n\r\n            \r\n     <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 reglisttable\" style=\"width: 100%;\" *ngIf=\"recordsFound\">\r\n    \r\n        <ng-container matColumnDef=\"action\">\r\n            <th mat-header-cell *matHeaderCellDef> Action </th>\r\n            <td mat-cell *matCellDef=\"let row\">\r\n                <a mat-raised-button color=\"accent\" (click)=\"sickApprove(row.opd_prescription_id,row.sick_leave_apprv)\" *ngIf=\"row.sick_leave_apprv=='N'\" class=\"custm-btn-blue\">\r\n                    <mat-icon>arrow_forward</mat-icon>\r\n                    Approve\r\n                </a>\r\n                <!-- <mat-spinner [diameter]=\"25\"  *ngIf=\"!isButtonActive\"></mat-spinner> -->\r\n\r\n                <a mat-raised-button color=\"accent\" (click)=\"sickApprove(row.opd_prescription_id,row.sick_leave_apprv)\" *ngIf=\"row.sick_leave_apprv=='Y'\" class=\"custm-btn\">\r\n                    <mat-icon>done</mat-icon>\r\n                    Approved\r\n                </a>\r\n\r\n\r\n\r\n            </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"patient_code\">\r\n            <th mat-header-cell *matHeaderCellDef> Patient ID </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.patient_code}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"patient_name\">\r\n            <th mat-header-cell *matHeaderCellDef> Name </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.patient_name}} </td>\r\n        </ng-container>\r\n\r\n        <!-- <ng-container matColumnDef=\"birthdate\">\r\n            <th mat-header-cell *matHeaderCellDef> DOB </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.birthdate}} </td>\r\n        </ng-container> -->\r\n\r\n        <ng-container matColumnDef=\"gender\">\r\n            <th mat-header-cell *matHeaderCellDef> Gender </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.gender}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"division_number\">\r\n            <th mat-header-cell *matHeaderCellDef> Division No </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.division_number}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"challan_number\">\r\n            <th mat-header-cell *matHeaderCellDef> Challan No</th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.challan_number}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"line_number\">\r\n            <th mat-header-cell *matHeaderCellDef> Line No </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.line_number}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"mobile_one\">\r\n            <th mat-header-cell *matHeaderCellDef> Mobile </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.mobile_one}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"no_of_days_sick\">\r\n            <th mat-header-cell *matHeaderCellDef> Sick Leave </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.no_of_days_sick}} </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n    \r\n      <mat-paginator [pageSizeOptions]=\"[100, 150, 200]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n  </div>\r\n \r\n</div>\r\n      </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/sickleaveapproval/sickleaveapproval.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/sickleaveapproval/sickleaveapproval.component.ts ***!
  \*************************************************************************/
/*! exports provided: SickleaveapprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SickleaveapprovalComponent", function() { return SickleaveapprovalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _service_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/registration.service */ "./src/app/service/registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SickleaveapprovalComponent = /** @class */ (function () {
    function SickleaveapprovalComponent(commonservice, registrationService, router) {
        this.commonservice = commonservice;
        this.registrationService = registrationService;
        this.router = router;
        this.displayedColumns = ['action',
            'patient_code',
            'patient_name',
            'gender',
            'division_number',
            'challan_number',
            'line_number',
            'mobile_one',
            'no_of_days_sick'];
        this.sickLeaveList = [];
        this.recordsFound = false;
        this.isButtonActive = true;
        this.sickLeaveApprovalCount = 0;
        this.totalTodaysRegCount = 0;
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](new Date());
    }
    SickleaveapprovalComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    SickleaveapprovalComponent.prototype.ngOnInit = function () {
        this.getSickApproveList();
        this.getSickLeaveApproveCount();
        //this.dataSource.paginator = this.paginator;
    };
    SickleaveapprovalComponent.prototype.getSickApproveList = function () {
        var _this = this;
        //sickleaveList
        this.sickLeaveList = [];
        this.recordsFound = false;
        var dataval;
        var sickLeaveData;
        this.commonservice.getSickApproveList().then(function (data) {
            dataval = data;
            sickLeaveData = dataval.sickleaveList;
            _this.sickLeaveList.push(sickLeaveData);
            var tcount = _this.sickLeaveList[0].length;
            if (tcount > 0) {
                _this.recordsFound = true;
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.sickLeaveList[0]);
        }, function (error) {
            console.log("Error in listing sick leave");
        });
    };
    SickleaveapprovalComponent.prototype.getSickLeaveApproveCount = function () {
        var _this = this;
        var sickLeaveListCount = [];
        this.totalTodaysRegCount = 0;
        this.sickLeaveApprovalCount = 0;
        var dataval;
        var countData;
        this.commonservice.getSickLeaveApproveCount().then(function (data) {
            dataval = data;
            countData = dataval.result;
            //console.log(countData);
            _this.totalTodaysRegCount = countData.totalRegister;
            _this.sickLeaveApprovalCount = countData.totalApproved;
        }, function (error) {
            console.log("Error in listing sick leave count");
        });
    };
    SickleaveapprovalComponent.prototype.sickApprove = function (opdId, status) {
        var _this = this;
        var sickLeaveApprovalStatus;
        var response;
        if (status == 'Y') {
            sickLeaveApprovalStatus = 'N';
        }
        else {
            sickLeaveApprovalStatus = 'Y';
        }
        this.registrationService.sickApprove(opdId, sickLeaveApprovalStatus).then(function (data) {
            response = data;
            if (response.result == 1) {
                _this.getSickApproveList();
                _this.getSickLeaveApproveCount();
            }
        }, function (error) {
            console.log("Error in sick approve update");
        });
    };
    SickleaveapprovalComponent.prototype.goTodaysRegistration = function () {
        this.router.navigateByUrl('panel/todaysreg');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SickleaveapprovalComponent.prototype, "paginator", void 0);
    SickleaveapprovalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sickleaveapproval',
            template: __webpack_require__(/*! ./sickleaveapproval.component.html */ "./src/app/layout/sickleaveapproval/sickleaveapproval.component.html"),
            styles: [__webpack_require__(/*! ./sickleaveapproval.component.css */ "./src/app/layout/sickleaveapproval/sickleaveapproval.component.css")]
        }),
        __metadata("design:paramtypes", [_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _service_registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SickleaveapprovalComponent);
    return SickleaveapprovalComponent;
}());



/***/ }),

/***/ "./src/app/layout/sickleaveapproval/sickleaveapproval.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/sickleaveapproval/sickleaveapproval.module.ts ***!
  \**********************************************************************/
/*! exports provided: sickleaveapprovalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sickleaveapprovalModule", function() { return sickleaveapprovalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var _sickleaveapproval_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sickleaveapproval-routing.module */ "./src/app/layout/sickleaveapproval/sickleaveapproval-routing.module.ts");
/* harmony import */ var _sickleaveapproval_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sickleaveapproval.component */ "./src/app/layout/sickleaveapproval/sickleaveapproval.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var sickleaveapprovalModule = /** @class */ (function () {
    function sickleaveapprovalModule() {
    }
    sickleaveapprovalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sickleaveapproval_routing_module__WEBPACK_IMPORTED_MODULE_3__["sickleaveapprovalRoutingModule"],
                _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_2__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            declarations: [
                _sickleaveapproval_component__WEBPACK_IMPORTED_MODULE_4__["SickleaveapprovalComponent"]
            ]
        })
    ], sickleaveapprovalModule);
    return sickleaveapprovalModule;
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _globalconstant_service__WEBPACK_IMPORTED_MODULE_2__["GlobalconstantService"]])
    ], CommonService);
    return CommonService;
}());



/***/ })

}]);
//# sourceMappingURL=sickleaveapproval-sickleaveapproval-module.js.map