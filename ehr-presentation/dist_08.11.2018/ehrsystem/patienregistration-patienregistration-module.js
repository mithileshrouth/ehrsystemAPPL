(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patienregistration-patienregistration-module"],{

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

/***/ "./src/app/layout/components/patientadddialog/patientadddialog.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/components/patientadddialog/patientadddialog.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\r\n    font-size: 13px;\r\n}\r\n\r\nmat-focused .mat-form-field-label{ color: #ee6e73; }\r\n\r\n.mat-focused .mat-form-field-underline .mat-form-field-ripple{ background: #ee6e73; }\r\n\r\n.mat-radio-group{\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.mat-radio-outer-circle {\r\n    width:16px !important;\r\n    height:16px !important;\r\n}\r\n\r\n.mat-radio-inner-circle {\r\n    width:16px !important;\r\n    height:16px !important;\r\n}\r\n\r\n.mat-radio-label-content {\r\n    padding-right: 8px;\r\n}\r\n\r\nmat-dialog-actions{\r\n    float: right;\r\n}\r\n\r\n.mat-progress-spinner {\r\n\r\n    display: inline-block;\r\n    position: relative;\r\n    vertical-align: middle;\r\n\r\n}"

/***/ }),

/***/ "./src/app/layout/components/patientadddialog/patientadddialog.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/layout/components/patientadddialog/patientadddialog.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div style=\"float: right;cursor: pointer;\" (click)=\"onNoClick()\">\n  <mat-icon>clear</mat-icon>\n  </div>\n  \n  <h2 mat-dialog-title>Add Patient</h2>\n  \n  <form [formGroup]=\"patientAddForm\"  novalidate (ngSubmit)=\"onSubmit(patientAddForm.value)\">\n  <mat-dialog-content>\n      <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" fxLayoutAlign=\"center\">\n\n          <div fxFlex=\"30%\">\n              <mat-form-field class=\"fullwidthinp\">\n                  <input matInput placeholder=\"Patient Code\" formControlName=\"pcodeCtrl\"/>\n              </mat-form-field>\n              <mat-form-field class=\"fullwidthinp\">\n                <input matInput placeholder=\"Patient Name\" formControlName=\"pnameCtrl\"/>\n              </mat-form-field>\n            \n              <mat-form-field class=\"fullwidthinp\">\n                    <input matInput [matDatepicker]=\"picker1\" placeholder=\"Date of Birth\"  formControlName=\"dobCtrl\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker1></mat-datepicker>\n              </mat-form-field>\n\n                <div style=\"padding-bottom: 8px;\">\n                    <mat-radio-group  formControlName=\"genderCtrl\">\n                        <mat-radio-button value=\"M\" > Male&nbsp;&nbsp; </mat-radio-button>\n                        <mat-radio-button value=\"F\" > Female&nbsp;&nbsp; </mat-radio-button>\n                        <mat-radio-button value=\"O\" > Other </mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                \n                  \n              <mat-form-field class=\"fullwidthinp\">\n                    <input matInput placeholder=\"Mobile No\"  formControlName=\"mobileCtrl\" />\n                </mat-form-field>\n                <mat-form-field class=\"fullwidthinp\">\n                    <input matInput placeholder=\"Alternate Mobile No\"  formControlName=\"alternatemblCtrl\" />\n                </mat-form-field>\n          </div>\n          <mat-divider [vertical]=\"true\"></mat-divider>\n\n          <div fxFlex=\"30%\" >\n            \n          \n            <mat-form-field class=\"fullwidthinp\">\n                <input matInput placeholder=\"Aadhar No\" formControlName=\"aadharCtrl\" />\n            </mat-form-field>\n\n            <mat-form-field class=\"fullwidthinp\">\n                <mat-select placeholder=\"Blood Group\" [disableOptionCentering]=\"false\" formControlName=\"bldgrpCtrl\">\n                  <mat-option *ngFor=\"let bloodgrp of bloodGroupList[0]\" [value]=\"bloodgrp.id\">\n                    {{bloodgrp.bld_group_code}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n              \n              <div style=\"padding-bottom: 8px;\">\n                <mat-radio-group formControlName=\"patienttypeCtrl\">\n                  <mat-radio-button  *ngFor=\"let ptype of patientTypeList[0]\" [value]=\"ptype.patient_type_id\" (click)=\"enableAssociate(ptype.ask_for_relation)\">\n                        {{ptype.alias_code}}&nbsp;&nbsp;\n                      </mat-radio-button>\n\n                </mat-radio-group>\n            </div>\n\n            <mat-form-field class=\"fullwidthinp\">\n                <input matInput placeholder=\"Associate Id\" formControlName=\"associateCtrl\"/>\n            </mat-form-field>\n\n            <mat-form-field class=\"fullwidthinp\">\n                <mat-select placeholder=\"Relation\" formControlName=\"relationCtrl\">\n                  <mat-option *ngFor=\"let relations of relationsList[0]\" [value]=\"relations.id\">\n                    {{relations.relation}}\n                  </mat-option>\n                </mat-select>\n            </mat-form-field>\n           \n        </div>\n\n        <mat-divider [vertical]=\"true\"></mat-divider>\n\n        <div fxFlex=\"30%\">\n           \n            <mat-form-field class=\"fullwidthinp\">\n              <input matInput placeholder=\"Line No\" formControlName=\"linenoCtrl\" />\n            </mat-form-field>\n\n            <mat-form-field class=\"fullwidthinp\">\n              <input matInput placeholder=\"Division No\" formControlName=\"divisionCtrl\" />\n            </mat-form-field>\n\n            <mat-form-field class=\"fullwidthinp\">\n              <input matInput placeholder=\"Challan No\" formControlName=\"challannoCtrl\" />\n            </mat-form-field>\n\n            <mat-form-field class=\"fullwidthinp\">\n                <mat-select placeholder=\"Estate\" formControlName=\"estateCtrl\" >\n                  <mat-option *ngFor=\"let estate of estateList[0]\" [value]=\"estate.id\">\n                    {{estate.name}}\n                  </mat-option>\n                </mat-select>\n            </mat-form-field>\n\n        </div>\n    </div>\n    \n  </mat-dialog-content>\n  \n  <mat-dialog-actions >\n\n    <button mat-raised-button color=\"accent\" (click)=\"onNoClick()\" >Close</button>\n    <button class=\"mat-raised-button mat-primary\" type=\"submit\" *ngIf=\"registerButtonActive\">Save</button>\n    <button class=\"mat-raised-button\" *ngIf=\"loaderActive\" >\n      <mat-spinner [diameter]=\"25\" color=\"primary\" ></mat-spinner>\n    </button>\n    \n  </mat-dialog-actions>\n</form>"

/***/ }),

/***/ "./src/app/layout/components/patientadddialog/patientadddialog.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/components/patientadddialog/patientadddialog.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PatientadddialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientadddialogComponent", function() { return PatientadddialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/patient.service */ "./src/app/service/patient.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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





var PatientadddialogComponent = /** @class */ (function () {
    function PatientadddialogComponent(dialogRef, commonService, patientService, data) {
        this.dialogRef = dialogRef;
        this.commonService = commonService;
        this.patientService = patientService;
        this.data = data;
        this.bloodGroupList = [];
        this.patientTypeList = [];
        this.relationsList = [];
        this.estateList = [];
        this.registerButtonActive = true;
        this.loaderActive = false;
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((new Date()).toISOString());
        this.patientAddForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            pcodeCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            pnameCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            dobCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            genderCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            mobileCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            alternatemblCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            aadharCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            bldgrpCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            patienttypeCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            associateCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            relationCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            linenoCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            divisionCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            challannoCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            estateCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    PatientadddialogComponent.prototype.ngOnInit = function () {
        this.getBloodGroup();
        this.getRelations();
        this.getEstates();
        this.getPatientType();
    };
    PatientadddialogComponent.prototype.onNoClick = function () {
        var data = {
            "from": "Close"
        };
        this.dialogRef.close();
    };
    PatientadddialogComponent.prototype.getBloodGroup = function () {
        var _this = this;
        var dataval;
        var bldgrouplist;
        this.commonService.getBloodGroup().then(function (data) {
            dataval = data;
            bldgrouplist = dataval.result;
            _this.bloodGroupList.push(bldgrouplist);
        }, function (error) {
            console.log("There is some error in Blood Group List...");
        });
    };
    PatientadddialogComponent.prototype.getPatientType = function () {
        var _this = this;
        var dataval;
        var patienttypelist;
        this.commonService.getPatientType().then(function (data) {
            dataval = data;
            patienttypelist = dataval.result;
            _this.patientTypeList.push(patienttypelist);
        }, function (error) {
            console.log("There is some error in Estate List...");
        });
    };
    PatientadddialogComponent.prototype.getRelations = function () {
        var _this = this;
        var dataval;
        var relationlist;
        this.commonService.getRelations().then(function (data) {
            dataval = data;
            relationlist = dataval.result;
            _this.relationsList.push(relationlist);
        }, function (error) {
            console.log("There is some error in Relation List...");
        });
    };
    PatientadddialogComponent.prototype.getEstates = function () {
        var _this = this;
        var dataval;
        var estatelist;
        this.commonService.getEstates().then(function (data) {
            dataval = data;
            estatelist = dataval.result;
            _this.estateList.push(estatelist);
        }, function (error) {
            console.log("There is some error in Estate List...");
        });
    };
    PatientadddialogComponent.prototype.enableAssociate = function (isrequred) {
        if (isrequred == 1) {
            this.patientAddForm.controls['associateCtrl'].enable();
        }
        else {
            this.patientAddForm.controls['associateCtrl'].disable();
            this.patientAddForm.patchValue({
                hdnPatientID: null
            });
        }
    };
    PatientadddialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.registerButtonActive = false;
        this.loaderActive = true;
        var response;
        //  console.log(this.patientAddForm.value);
        this.patientService.addNewPatient(this.patientAddForm.value).then(function (data) {
            response = data;
            if (response.msg_status == 200) {
                var data_1 = {
                    "from": "Save",
                    "patientcode": _this.patientAddForm.get("pcodeCtrl").value,
                    "patientname": _this.patientAddForm.get("pnameCtrl").value,
                    "dob": new Date(_this.patientAddForm.get("dobCtrl").value).toLocaleDateString(),
                    "gender": _this.patientAddForm.get("genderCtrl").value,
                    "division": _this.patientAddForm.get("divisionCtrl").value,
                    "challan": _this.patientAddForm.get("challannoCtrl").value,
                    "line": _this.patientAddForm.get("linenoCtrl").value,
                    "mobile": _this.patientAddForm.get("mobileCtrl").value,
                    "aadhar": _this.patientAddForm.get("aadharCtrl").value
                };
                _this.dialogRef.close(data_1);
            }
            else {
                _this.registerButtonActive = true;
                _this.loaderActive = false;
            }
        }, function (error) {
            console.log("There is some error on submitting...");
        });
    };
    PatientadddialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patientadddialog',
            template: __webpack_require__(/*! ./patientadddialog.component.html */ "./src/app/layout/components/patientadddialog/patientadddialog.component.html"),
            styles: [__webpack_require__(/*! ./patientadddialog.component.css */ "./src/app/layout/components/patientadddialog/patientadddialog.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], _service_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"], _service_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"], String])
    ], PatientadddialogComponent);
    return PatientadddialogComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/todayspatientreglist/todayspatientreglist.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/components/todayspatientreglist/todayspatientreglist.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    width: 100%;\r\n}\r\n.customeBtn{\r\n    border: 0;\r\n    background: #03925b;\r\n    padding: 6px 17px;\r\n    border-radius: 14px;\r\n    color: #FFF;\r\n}\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}"

/***/ }),

/***/ "./src/app/layout/components/todayspatientreglist/todayspatientreglist.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/components/todayspatientreglist/todayspatientreglist.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n\n\n  <tr>\n      <td><button class=\"customeBtn\">Registered</button></td>\n      <td>P0001</td>\n      <td>Amtur Rahaman</td>\n      <td>1993-02-26 13:54:04</td>\n      <td>M</td>\n      <td>D1253</td>\n      <td></td>\n      <td>L00123</td>\n      <td>2147483647</td>\n      <td>1253 1252 123</td>\n\n  </tr>\n\n\n</table>\n\n<h2 mat-dialog-title>hjgf</h2>\n\n<mat-dialog-content>\n\n  fcsdfg\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\" (click)=\"closeDialog()\">Close</button>\n  <button class=\"mat-raised-button mat-primary\" (click)=\"save()\">Save</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/layout/components/todayspatientreglist/todayspatientreglist.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/components/todayspatientreglist/todayspatientreglist.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TodayspatientreglistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayspatientreglistComponent", function() { return TodayspatientreglistComponent; });
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

var TodayspatientreglistComponent = /** @class */ (function () {
    function TodayspatientreglistComponent() {
    }
    TodayspatientreglistComponent.prototype.ngOnInit = function () {
    };
    TodayspatientreglistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todayspatientreglist',
            template: __webpack_require__(/*! ./todayspatientreglist.component.html */ "./src/app/layout/components/todayspatientreglist/todayspatientreglist.component.html"),
            styles: [__webpack_require__(/*! ./todayspatientreglist.component.css */ "./src/app/layout/components/todayspatientreglist/todayspatientreglist.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodayspatientreglistComponent);
    return TodayspatientreglistComponent;
}());



/***/ }),

/***/ "./src/app/layout/patienregistration/patienregistration-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/patienregistration/patienregistration-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: PatienregistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatienregistrationRoutingModule", function() { return PatienregistrationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _patienregistration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patienregistration.component */ "./src/app/layout/patienregistration/patienregistration.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _patienregistration_component__WEBPACK_IMPORTED_MODULE_2__["PatienregistrationComponent"]
    }
];
var PatienregistrationRoutingModule = /** @class */ (function () {
    function PatienregistrationRoutingModule() {
    }
    PatienregistrationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PatienregistrationRoutingModule);
    return PatienregistrationRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/patienregistration/patienregistration.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/layout/patienregistration/patienregistration.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.patientregcard{\r\n  width: 60%;\r\n  float: left;\r\n}\r\n.biometricregcard{\r\n  width: 30%;\r\n  float: left;\r\n}\r\n*/\r\n#patientRegSearch{\r\n    margin:2% 0;\r\n  }\r\n.halfwidthInput{\r\n    width:40%;\r\n    margin-right:15px;\r\n  }\r\n.crow{\r\n  margin-top:1%;\r\n  }\r\n.cfinput{\r\n  margin-right:5px; \r\n  }\r\n.mat-card-content, .mat-card-header  {\r\n    font-size: 13px;\r\n  }\r\n.mat-card-title, .mat-card-subtitle {\r\n    font-size: 1.5rem;\r\n  }\r\n.fullwidthinp{\r\n    width:100%;\r\n  }\r\ntable {\r\n    width: 100%;\r\n  }\r\n.margingap{\r\n    margin:1% 0;\r\n  }\r\n.customforminput{\r\n    width: 90%;\r\n    padding: 2.5%;\r\n    border: 1px solid #b3b3b4;\r\n    border-radius: 4px;\r\n    text-indent: 5px;\r\n  }\r\n.mat-card-actions{\r\n    text-align:center;\r\n  }\r\n.reggrid_block{\r\n    padding: 4px 1%;\r\n    background: transparent;\r\n  }\r\n.biometric_img{\r\n    width: 30%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n  }\r\n.reg_big_icon {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    width: 100%;\r\n    font-size: 5.5rem;\r\n    color:#FFF;\r\n    margin-top: 14%;\r\n  }\r\n.center-obj{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n  }\r\n.biometricregcard > mat-card-actions{\r\n    text-align: center;\r\n  }\r\n.card_title{\r\n    font-weight: 400;\r\n    letter-spacing: 2px;\r\n    font-family: Roboto;\r\n    font-size: 1.2rem;\r\n    margin:4px;\r\n  }\r\nmat-toolbar{\r\n  padding: 7px 10px !important;\r\n  font-size: 13px;\r\n  letter-spacing: 1px;\r\n  border: 1px solid #d7d7d7;\r\n  border-radius: 3px;\r\n  height:auto;\r\n  }\r\nmat-option{\r\n    font-size: 13px;\r\n    letter-spacing: 1px;\r\n  }\r\n.registration_form_block{\r\n    box-shadow: 0px 0px 15px 0px #bfbfbf;\r\n  }\r\n.fieldsearch {\r\n    background:#ececec;\r\n    padding: 2%;\r\n    border-radius: 1px;\r\n  }\r\n.biometricsearch{\r\n    background: #73940e;\r\n   /* border-radius: 10px; */\r\n  }\r\n.addmorepatient{\r\n    background: #de4040;\r\n  }\r\n.mat-card-content{\r\n    background: transparent;\r\n    border: 0px solid #ececec;\r\n  }\r\ntr.mat-header-row {\r\n   \r\n    background:#ececec;\r\n}\r\n.regblockbtn{\r\n    border-radius: 50px;\r\n    background: #FFF;\r\n    font-size: 12px;\r\n    letter-spacing: 1px;\r\n    \r\n  }\r\n.margincontent{\r\n    margin-top:1.5%;\r\n  }\r\n.mat-button.mat-small {\r\n    min-width: 1%;\r\n}\r\n.center{\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  display: block;\r\n}\r\n.mat-card:not([class*=mat-elevation-z]) {\r\n  \r\n  box-shadow: 0 0px 0px 0px rgba(0,0,0,.2), 0 0px 0px 0 rgba(0,0,0,.14), 0 0px 0px 0 rgba(0,0,0,.12); \r\n}\r\n.mat-header-cell {\r\n  color: rgb(9, 10, 12);\r\n}\r\ntd.mat-cell, td.mat-footer-cell, th.mat-header-cell {\r\n  padding: 0;\r\n  border-bottom-width: 1px;\r\n  border-bottom-style: solid;\r\n  font-size: 12px;\r\n  letter-spacing: 1px;\r\n}\r\n.reg-action > button{\r\n    \r\n    width: 18%;\r\n}\r\n.bttn-right{\r\n    float:right;\r\n}\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    width: 100%;\r\n    border: 0px solid #ddd;\r\n}\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n}\r\n#registraionTable{\r\n    width:100%;\r\n    background: #a8a8a8;\r\n   /* border:1px solid #f3f3f3;*/\r\n}\r\n.table_head{\r\n    background: #0563bf;\r\n    color:#FFF;\r\n    font-weight:500;\r\n    letter-spacing: 1px;\r\n}\r\n.customeBtn{\r\n    border: 0;\r\n    background: #0e58c8;\r\n    padding: 6px 17px;\r\n    border-radius: 14px;\r\n    color: #FFF;\r\n}\r\n.success{\r\n  background: #03943f;\r\n}\r\n.custmbtn{\r\n  font-size:11px;\r\n  letter-spacing: 1px;\r\n  border-radius:50px;\r\n}\r\n.matcustomicon{\r\n  font-size: 18px;\r\n  line-height: 22px;\r\n}\r\n#registrationTable table{\r\n  margin-top:-18px;\r\n}\r\n#registrationTable .mat-input-element {\r\n  font-size: 13px;\r\n  letter-spacing: 1px;\r\n}\r\n.btnnormal{\r\n  font-size:12px;\r\n  font-weight:500;\r\n  letter-spacing: 2px;\r\n}"

/***/ }),

/***/ "./src/app/layout/patienregistration/patienregistration.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/patienregistration/patienregistration.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"wraper-container\">\n      <div class=\"search-container\">\n          <mat-card style=\"padding:0;\">\n            <!--<h4 class=\"card_title\"> Registration</h4>-->\n              <mat-card-content >\n                   \n                  <div class=\"container reggrid_block\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.5%\" fxLayoutAlign=\"center\">\n                        \n                      <div class=\"fieldsearch\" fxFlex=\"60%\" >\n                            <form [formGroup]=\"IDsearchForm\" >\n                          <div class=\"ID-search\">\n                              <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" >\n                                \n                                   <div fxFlex=\"40%\">\n                                       <!--\n                                        <mat-form-field class=\"fullwidthinp\">\n                                            <input matInput placeholder=\"Enter Patient ID\" formControlName=\"patientID\" autocomplete=\"off\" />\n                                        </mat-form-field> -->\n\n                                    <mat-form-field class=\"fullwidthinp\">\n                                        <mat-select formControlName=\"patientID\" placeholder=\"Search By Patient ID\" disableOptionCentering #singleSelect>\n                                            <ngx-mat-select-search  formControlName=\"pcodeFilterCtrl\"\n                                            [placeholderLabel]=\"'Search'\" \n                                            [noEntriesFoundLabel]=\"'no records found'\"\n                                            ></ngx-mat-select-search>\n                                            <mat-option [value] =\"resetSelect\">Select</mat-option>\n                                            <mat-option *ngFor=\"let pcode of filteredPatientCode | async\" [value]=\"pcode\">\n                                                  {{pcode.code}}\n                                            </mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n\n                                    </div>\n                                    <div fxFlex=\"5%\">\n                                        <h2>OR</h2>\n                                    </div>\n\n                                    <div fxFlex=\"40%\">\n                                        <mat-form-field class=\"fullwidthinp\">\n                                            <mat-select formControlName=\"patientAadhar\" placeholder=\"Search By Aadhar No\" disableOptionCentering #singleSelect >\n                                                <ngx-mat-select-search  formControlName=\"aadharFilterCtrl\"\n                                                [placeholderLabel]=\"'Search'\" \n                                                [noEntriesFoundLabel]=\"'no records found'\"\n                                                ></ngx-mat-select-search>\n                                                <mat-option [value] =\"resetSelect\">Select</mat-option>\n                                                <mat-option *ngFor=\"let paadhar of filteredPatientAadhar | async\" [value]=\"paadhar\">\n                                                      {{paadhar.aadhar}}\n                                                </mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n\n                              </div>\n                          </div>\n                        </form>\n                          <mat-checkbox (change)=\"enableAdvanceSearch($event)\" >Enable Advance Search</mat-checkbox>\n                          <form [formGroup]=\"FieldsearchForm\" >\n                          <div class=\"Field-search margincontent\" *ngIf=\"enableAdvancesearch\">\n                              <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" >\n                                 \n                                     <div fxFlex=\"30%\">\n                                        <mat-form-field class=\"fullwidthinp\">\n                                            <!--<input matInput placeholder=\"Enter Patient Name\" formControlName=\"patientNameCtrl\" autocomplete=\"off\" />-->\n\n                                            <mat-select formControlName=\"patientNameCtrl\" placeholder=\"Search Patient Name\" disableOptionCentering #singleSelect >\n                                                <ngx-mat-select-search  formControlName=\"patientNameFilterCtrl\"\n                                                [placeholderLabel]=\"'Search'\" \n                                                [noEntriesFoundLabel]=\"'no records found'\"\n                                                ></ngx-mat-select-search>\n                                                <mat-option *ngFor=\"let pname of filteredPatientName | async\" [value]=\"pname.name\">\n                                                      {{pname.name}}\n                                                </mat-option>\n                                            </mat-select>\n                                        \n                                        </mat-form-field>\n                                    </div>\n                                    <div fxFlex=\"30%\">\n                                            <mat-form-field class=\"fullwidthinp\">\n                                                <input matInput [matDatepicker]=\"picker1\" placeholder=\"Date of Birth\" formControlName=\"patientDOBCtrl\" autocomplete=\"off\" />\n                                                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                                <mat-datepicker #picker1></mat-datepicker>\n                                            </mat-form-field>\n\n                                           \n                                    </div>\n\n                                    <div fxFlex=\"30%\">\n                                        <mat-form-field class=\"fullwidthinp\">\n                                            <input matInput placeholder=\"Mobile Number\" formControlName=\"patientMobileCtrl\" autocomplete=\"off\" >\n                                        </mat-form-field>\n                                    </div>\n\n                              </div>\n                          </div>\n                          </form>\n                          \n                        <div class=\"reg-action margincontent\" >\n                            <button mat-flat-button class=\"regblockbtn center-obj\" style=\"background: #09446d;\"  (click)=\"searchPatient()\" *ngIf=\"!searchLoader\">\n                                <mat-icon>search</mat-icon> Search\n                            </button>\n\n                            <mat-spinner [diameter]=\"40\" *ngIf=\"searchLoader\" class=\"center-obj\"></mat-spinner>\n                        </div>\n\n\n                        <div id=\"err_block\">\n                            <p class=\"error_cls\" *ngIf=\"isRegAlreadyDone_Err\" style=\"margin:10px auto;margin-bottom:0px\">This Patient is already registered for today.\n                                <button mat-icon-button (click)=\"removeError()\" >\n                                   <mat-icon>clear</mat-icon>\n                                </button>\n                            </p>\n                            <p class=\"error_cls\" *ngIf=\"basicSearchValidErr\" style=\"margin:10px auto;margin-bottom:0px\">Select atleast one search option\n                                <button mat-icon-button (click)=\"removeError()\" >\n                                   <mat-icon>clear</mat-icon>\n                                </button>\n                            </p>\n                            <p class=\"error_cls\" *ngIf=\"advSearchValidErr\" style=\"margin:10px auto;margin-bottom:0px\">Patient Name,DOB,Mobile No is required\n                                <button mat-icon-button (click)=\"removeError()\" >\n                                   <mat-icon>clear</mat-icon>\n                                </button>\n                            </p>\n                        </div>\n                          \n                      </div><!--end of fieldsearch-->\n\n                    \n        \n                      <div class=\"biometricsearch\" fxFlex=\"20%\">\n                          <mat-icon class=\"reg_big_icon\">fingerprint</mat-icon>\n                          <button  mat-flat-button class=\"center-obj regblockbtn\" style=\"color:#73940e;\">Biometric Scan </button>\n                      </div><!--end of biometric search-->\n                      <div class=\"addmorepatient\" fxFlex=\"20%\">\n                        <mat-icon class=\"reg_big_icon\">add_circle</mat-icon>\n                        <button  mat-flat-button class=\"center-obj regblockbtn\" style=\"color:#de4040;\" (click)=\"openDialog()\">Add New Patient </button>\n                    </div><!--end of biometric search-->\n                  </div>\n         \n                </mat-card-content>\n          </mat-card>\n        </div><!--end of search container-->\n    </div>\n\n    \n    <section style=\"margin-top:2%;\">\n\n           \n                <div  style=\"width: 98%;margin:0 auto;\" class=\"mat-elevation-z8\">\n\n                        <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" >\n                                <div fxFlex=\"80%\">\n                                    \n                                </div>\n                                <div fxFlex=\"20%\">\n                                    <mat-form-field class=\"fullwidthinp\">\n                                        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                                    </mat-form-field>\n                                </div>\n                        </div>\n\n                    <table mat-table [dataSource]=\"dataSource\" matSort  >\n                \n                      \n                        <ng-container matColumnDef=\"reg-action\" >\n                             <th mat-header-cell *matHeaderCellDef>\n                                    <button mat-flat-button color=\"primary\" (click)=\"registerPtc()\" class=\"custmbtn\" *ngIf=\"registerBtnEnable\">\n                                            <mat-icon class=\"matcustomicon\">donut_large</mat-icon> Register &nbsp;&nbsp;\n                                    </button>\n\n                                    <mat-spinner [diameter]=\"25\" style=\"margin-left:25%;\" *ngIf=\"!registerBtnEnable\"></mat-spinner>\n                                <!--\n                                <button mat-flat-button color=\"primary\" (click)=\"registerPtc()\" class=\"custmbtn\" *ngIf=\"registerButtonActive\">\n                                   <mat-icon class=\"matcustomicon\">donut_large</mat-icon> Register &nbsp;&nbsp;\n                                </button>\n\n                               <mat-spinner [diameter]=\"25\" style=\"margin-left:25%;\" *ngIf=\"!registerButtonActive\"></mat-spinner>-->\n                            </th>\n                        </ng-container>\n                       \n                        <ng-container matColumnDef=\"reg-patientid\" >\n                            <th mat-header-cell *matHeaderCellDef> {{tblPatientID}}\n                                <form [formGroup]=\"patientTblRegForm\">\n                                    <input type=\"hidden\" formControlName=\"regpcodeCtrl\">\n                                </form>\n                            </th>\n                        </ng-container>\n                      \n                        <ng-container matColumnDef=\"reg-patientname\" >\n                            <th mat-header-cell *matHeaderCellDef> {{tblPatientName}} </th>\n                        </ng-container>\n                      \n                        <ng-container matColumnDef=\"reg-patientdob\" >\n                            <th mat-header-cell *matHeaderCellDef> {{tblPatientDOB}} </th>\n                        </ng-container>\n                        \n                         <ng-container matColumnDef=\"reg-patientgender\" >\n                             <th mat-header-cell *matHeaderCellDef> {{tblPatientGender}} </th>\n                         </ng-container>\n                        \n                         <ng-container matColumnDef=\"reg-patientdivision\" >\n                            <th mat-header-cell *matHeaderCellDef> {{tblPatientDivision}} </th>\n                        </ng-container>\n                       \n                         <ng-container matColumnDef=\"reg-patientchallan\" >\n                            <th mat-header-cell *matHeaderCellDef> {{tblPatientChallan}} </th>\n                        </ng-container>\n                        \n                         <ng-container matColumnDef=\"reg-patientline\" >\n                            <th mat-header-cell *matHeaderCellDef> {{tblPatientLine}} </th>\n                        </ng-container>\n                        \n                         <ng-container matColumnDef=\"reg-patientmobile\">\n                            <th mat-header-cell *matHeaderCellDef> {{tblPatientMbl}} </th>\n                        </ng-container>\n                       \n                        <ng-container matColumnDef=\"reg-patientaadhar\" >\n                            <th mat-header-cell *matHeaderCellDef> {{tblPatientAadhar}} </th>\n                        </ng-container>\n                         \n\n                       \n                        <ng-container matColumnDef=\"action\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\n                            <td mat-cell *matCellDef=\"let row\"> \n                                    <button mat-flat-button class=\"success custmbtn\"><mat-icon class=\"matcustomicon\">done</mat-icon>Registered</button>\n                                </td>\n                        </ng-container>\n                \n                       \n                        <ng-container matColumnDef=\"patient_code\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Patient ID </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.patient_code}} </td>\n                        </ng-container>\n                \n                       \n                        <ng-container matColumnDef=\"patient_name\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.patient_name}} </td>\n                        </ng-container>\n\n                       \n                         <ng-container matColumnDef=\"birthdate\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> DOB </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.birthdate}} </td>\n                        </ng-container>\n                \n                \n                        \n                      \n                        <ng-container matColumnDef=\"gender\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Gender </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.gender}} </td>\n                        </ng-container>\n\n                         \n                          <ng-container matColumnDef=\"division_number\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Division </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.division_number}} </td>\n                        </ng-container>\n\n                        \n                       \n                        <ng-container matColumnDef=\"challan_number\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Challan </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.challan_number}} </td>\n                        </ng-container>\n\n                       \n                        <ng-container matColumnDef=\"line_number\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Line </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.line_number}} </td>\n                        </ng-container>\n\n                     \n                \n                    \n                        <ng-container matColumnDef=\"mobile_one\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Mobile </th>\n                            <td mat-cell *matCellDef=\"let row\"> {{row.mobile_one}} </td>\n                        </ng-container>\n                \n                       \n                        <ng-container matColumnDef=\"adhar\">\n                            <th mat-header-cell *matHeaderCellDef mat-sort-header> Aadhar </th>\n                            <td mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.adhar}} </td>\n                        </ng-container>\n                \n                        <tr mat-header-row *matHeaderRowDef=\"todaysRegTblColumn\"></tr>\n                \n                \n                        <tr mat-header-row *matHeaderRowDef=\"displayedColSecond\" [style.display]=\"displayp\"></tr>\n                \n                \n                \n                        <tr mat-row *matRowDef=\"let row; columns: todaysRegTblColumn;\">\n                        </tr>\n                    </table>\n                \n                \n                \n                    <mat-paginator [pageSizeOptions]=\"[50, 100, 200]\" showFirstLastButtons></mat-paginator>\n                </div>\n\n     </section>\n    \n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/layout/patienregistration/patienregistration.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/patienregistration/patienregistration.component.ts ***!
  \***************************************************************************/
/*! exports provided: PatienregistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatienregistrationComponent", function() { return PatienregistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/patient.service */ "./src/app/service/patient.service.ts");
/* harmony import */ var _service_globalconstant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/globalconstant.service */ "./src/app/service/globalconstant.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_registration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/registration.service */ "./src/app/service/registration.service.ts");
/* harmony import */ var _components_patientadddialog_patientadddialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/patientadddialog/patientadddialog.component */ "./src/app/layout/components/patientadddialog/patientadddialog.component.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var PatienregistrationComponent = /** @class */ (function () {
    function PatienregistrationComponent(zone, patientService, _global, dialog, registerService) {
        this.zone = zone;
        this.patientService = patientService;
        this._global = _global;
        this.dialog = dialog;
        this.registerService = registerService;
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_1__["VERSION"];
        // error Initialization
        this.isRegAlreadyDone_Err = false;
        this.validation_Err = false;
        this.isRegAlreadyDone = false;
        this.basicSearchValidErr = false;
        this.advSearchValidErr = false;
        //registerButtonActive:boolean = true;
        this.loaderActive = false;
        this.searchLoader = false;
        this.registerBtnEnable = true;
        this.isCheked = false;
        this.enableAdvancesearch = false;
        this.disableInputField = false;
        this.enableregister = false;
        this.displayp = 'none';
        this.resetSelect = "";
        this.resetSelect2 = "";
        this.patientlst = [];
        this.displayedColSecond = [];
        this.todaysRegTblColumn = [
            'action',
            'patient_code',
            'patient_name',
            'birthdate',
            'gender',
            'division_number',
            'challan_number',
            'line_number',
            'mobile_one',
            'adhar'
        ];
        // patient detail info initilization
        this.patientName = "";
        this.patientGender = "";
        this.patientBloodGrp = "";
        this.patientType = "";
        this.patientRelation = "";
        this.patientLineNo = "";
        this.patientDivisionNo = "";
        this.patientChallanNo = "";
        this.patientEstate = "";
        this.tblPatientID = "";
        this.tblPatientName = "";
        this.tblPatientGender = "";
        this.tblPatientDivision = "";
        this.tblPatientChallan = "";
        this.tblPatientLine = "";
        this.tblPatientMbl = "";
        this.tblPatientAadhar = "";
        this.date = new Date();
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]((new Date()).toISOString());
        this.patientCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.listofPatient = [];
        this.todaysregistrationList = [];
        this.selected = null;
        this.patientcodes = [];
        this.filteredPatientCode = new rxjs__WEBPACK_IMPORTED_MODULE_8__["ReplaySubject"](1);
        this.aadharnumbers = [];
        this.filteredPatientAadhar = new rxjs__WEBPACK_IMPORTED_MODULE_8__["ReplaySubject"](1);
        this.filteredPatientName = new rxjs__WEBPACK_IMPORTED_MODULE_8__["ReplaySubject"](1);
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.patientRegForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            searchpatientCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            hdnPatientID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            regdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            patienname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            patientmobileno: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            patientid: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            patientName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            patientGender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            patientDOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            patientBloodGrp: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            patientType: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            patientRelation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            patientLineNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            patientDivisionNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            patientChallanNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            patientEstate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.IDsearchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            patientID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            pcodeFilterCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            patientAadhar: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            aadharFilterCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.FieldsearchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            patientNameCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            patientDOBCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date()),
            patientMobileCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            patientNameFilterCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.patientTblRegForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            regpcodeCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
    }
    /*
       private _filterStates(value: string): Patient[] {
        const filterValue = value.toLowerCase();
    
        return this.patients.filter(patient => patient.name.toLowerCase().indexOf(filterValue) === 0);
      }
    */
    PatienregistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTodaysRegistration();
        this.getPatientCode();
        /*
        this.IDsearchForm.get('patientAadhar').valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.IDsearchForm.patchValue({
            patientID: this.resetSelect
          });
      
        });
        */
        this.IDsearchForm.get('patientID').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.IDsearchForm.patchValue({
                patientAadhar: _this.resetSelect
            });
        });
    };
    PatienregistrationComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    PatienregistrationComponent.prototype.enableAdvanceSearch = function (event) {
        this.isCheked = !this.isCheked;
        if (this.isCheked == true) {
            this.enableAdvancesearch = true;
            this.disableInputField = true;
            this.IDsearchForm.controls['patientID'].disable();
            this.IDsearchForm.controls['patientAadhar'].disable();
            this.IDsearchForm.patchValue({
                patientID: this.resetSelect,
                patientAadhar: this.resetSelect
            });
        }
        else {
            this.enableAdvancesearch = false;
            this.IDsearchForm.controls['patientID'].enable();
            this.IDsearchForm.controls['patientAadhar'].enable();
        }
    };
    PatienregistrationComponent.prototype.getPatientDetail = function (patient) {
        this.patientRegForm.patchValue({
            hdnPatientID: patient.patient_id,
            patientName: patient.patient_name,
            patientGender: patient.gender,
            // patientDOB: new FormControl(''),
            patientBloodGrp: patient.blood_group,
            patientType: patient.patient_type,
            // patientRelation: new FormControl(''),
            patientLineNo: patient.line_number,
            patientDivisionNo: patient.division_number,
            patientChallanNo: patient.challan_number,
            patientEstate: patient.Estate
        });
    };
    PatienregistrationComponent.prototype.getDecodedAccessToken = function (token) {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_7__(token);
        }
        catch (Error) {
            return null;
        }
    };
    PatienregistrationComponent.prototype.getTodaysRegistration = function () {
        var _this = this;
        var dataval;
        var regdata;
        this.registerService.getTodaysRegistration().then(function (data) {
            dataval = data;
            regdata = dataval.todaysreg_data;
            _this.todaysregistrationList.push(regdata);
            _this.todaysRegTblColumn = [
                'action',
                'patient_code',
                'patient_name',
                'birthdate',
                'gender',
                'division_number',
                'challan_number',
                'line_number',
                'mobile_one',
                'adhar'
            ];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.todaysregistrationList[0]);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log("error in todays registration list");
        });
    };
    /*
      onSubmit(){
    
        this.registerButtonActive = false;
        this.loaderActive = true;
    
        let response;
        console.log(this.patientRegForm.value);
        this.patientService.registerPatient(this.patientRegForm.value).then(data => {
          response = data;
          if(response.msg_status==200){
            
          }
          else{
            this.registerButtonActive = true;
            this.loaderActive = false;
          }
         },
           error => {
             console.log("There is some error on submitting...");
         });
    
      }
    */
    PatienregistrationComponent.prototype.searchPatient = function () {
        var _this = this;
        var response;
        var isExist = false;
        var searchData;
        var searchType;
        if (this.enableAdvancesearch) {
            this.validateAdvanceSearch();
            searchData = this.FieldsearchForm.value;
            searchType = 'ADV';
        }
        else {
            this.validateBasicSearch();
            searchData = this.IDsearchForm.value;
            searchType = 'BASIC';
        }
        this.patientService.checkIsRegisteredToday(searchData, searchType).then(function (data) {
            response = data;
            isExist = response.isexist;
            if (!isExist) {
                _this.isRegAlreadyDone_Err = false;
                _this.searchLoader = true;
                _this.displayp = 'none';
                var response_1;
                var pdata_1;
                _this.patientService.searchPatient(searchData, searchType).then(function (data) {
                    response_1 = data;
                    _this.searchLoader = false;
                    if (response_1.msg_status === 200 && response_1.patient != "") {
                        //this.registerButtonActive = true;
                        //this.enableregister = true;
                        _this.displayp = 'table-row';
                        _this.displayedColSecond = [
                            'reg-action',
                            'reg-patientid',
                            'reg-patientname',
                            'reg-patientdob',
                            'reg-patientgender',
                            'reg-patientdivision',
                            'reg-patientchallan',
                            'reg-patientline',
                            'reg-patientmobile',
                            'reg-patientaadhar'
                        ];
                        _this.tblPatientID = null;
                        _this.tblPatientName = null;
                        _this.tblPatientDOB = null;
                        _this.tblPatientGender = null;
                        _this.tblPatientDivision = null;
                        _this.tblPatientChallan = null;
                        _this.tblPatientLine = null;
                        _this.tblPatientMbl = null;
                        _this.tblPatientAadhar = null;
                        _this.zone.run(function () {
                            pdata_1 = response_1.patient;
                            _this.tblPatientID = pdata_1.patient_code;
                            _this.tblPatientName = pdata_1.patient_name;
                            _this.tblPatientDOB = pdata_1.pdob;
                            _this.tblPatientGender = pdata_1.gender;
                            _this.tblPatientDivision = pdata_1.division_number;
                            _this.tblPatientChallan = pdata_1.challan_number;
                            _this.tblPatientLine = pdata_1.line_number;
                            _this.tblPatientMbl = pdata_1.mobile_one;
                            _this.tblPatientAadhar = pdata_1.adhar;
                            _this.patientTblRegForm.patchValue({
                                regpcodeCtrl: pdata_1.patient_code
                            });
                            _this.enableregister = true;
                        });
                    }
                    else { }
                }, function (error) {
                    console.log('There is some error on submitting...');
                });
            }
            else {
                _this.displayp = 'none';
                _this.isRegAlreadyDone_Err = true;
            }
        }, function (error) {
            console.log('There is some error on submitting...');
        });
    };
    PatienregistrationComponent.prototype.validateBasicSearch = function () {
        this.basicSearchValidErr = false;
        this.advSearchValidErr = false;
        if (!this.IDsearchForm.get("patientID").value && !this.IDsearchForm.get("patientAadhar").value) {
            this.basicSearchValidErr = true;
            return false;
        }
        return true;
    };
    PatienregistrationComponent.prototype.validateAdvanceSearch = function () {
        this.basicSearchValidErr = false;
        this.advSearchValidErr = false;
        if (!this.FieldsearchForm.get("patientNameCtrl").value || !this.FieldsearchForm.get("patientDOBCtrl").value || !this.FieldsearchForm.get("patientMobileCtrl").value) {
            this.advSearchValidErr = true;
            return false;
        }
        return true;
    };
    /*
     searchPatient() {
   
       this.searchLoader = true;
      // this.registerButtonActive = true;
       this.displayp = 'none';
   
      
       
      // this.loaderActive = false;
       console.log(this.IDsearchForm.value);
   
       let searchData;
       let searchType;
       if ( this.enableAdvancesearch ) {
          searchData = this.FieldsearchForm.value;
          searchType = 'ADV';
       } else {
         console.log(this.IDsearchForm.value);
         searchData = this.IDsearchForm.value;
         searchType = 'BASIC';
       }
   
       console.log("Exist " + this.isRegAlreadyDone);
   
       let response;
       let pdata;
     
       this.patientService.searchPatient(searchData, searchType).then(data => {
         response = data;
         this.searchLoader = false;
         
         if (response.msg_status === 200 && pdata!="") {
           
           //this.registerButtonActive = true;
           //this.enableregister = true;
           this.displayp = 'table-row';
   
           this.displayedColSecond = [
             'reg-action' ,
             'reg-patientid' ,
             'reg-patientname' ,
             'reg-patientdob' ,
             'reg-patientgender' ,
             'reg-patientdivision' ,
             'reg-patientchallan' ,
             'reg-patientline' ,
             'reg-patientmobile' ,
             'reg-patientaadhar'
             ];
   
             this.tblPatientID = null;
             this.tblPatientName = null;
             this.tblPatientDOB = null;
             this.tblPatientGender = null;
             this.tblPatientDivision = null;
             this.tblPatientChallan = null;
             this.tblPatientLine = null;
             this.tblPatientMbl = null;
             this.tblPatientAadhar = null;
           this.zone.run(() => { // <== added
             pdata = response.patient;
   
           this.tblPatientID = pdata.patient_code;
           this.tblPatientName = pdata.patient_name;
           this.tblPatientDOB = pdata.birthdate;
           this.tblPatientGender = pdata.gender;
           this.tblPatientDivision = pdata.division_number;
           this.tblPatientChallan = pdata.challan_number;
           this.tblPatientLine = pdata.line_number;
           this.tblPatientMbl = pdata.mobile_one;
           this.tblPatientAadhar = pdata.adhar;
   
           console.log("PID1 "+this.tblPatientID);
           console.log("PID2 "+this.tblPatientName);
           console.log("PID3 "+this.tblPatientDOB);
           console.log("PID4 "+this.tblPatientGender);
           console.log("PID5 "+this.tblPatientDivision);
           console.log("PID6 "+this.tblPatientChallan);
           console.log("PID7 "+this.tblPatientLine);
           console.log("PID8 "+this.tblPatientMbl);
           console.log("PID9 "+this.tblPatientAadhar);
   
           this.patientTblRegForm.patchValue({
             regpcodeCtrl: pdata.patient_code
            
           });
           
           this.enableregister = true;
         });
          
         } else {
         //  this.enableregister = false;
         //  this.registerButtonActive = true;
          // this.loaderActive = false;
         }
        },
          error => {
            console.log('There is some error on submitting...');
        });
     }
   */
    PatienregistrationComponent.prototype.registerPtc = function () {
        var _this = this;
        //this.registerButtonActive = false;
        //this.loaderActive = true;
        this.registerBtnEnable = false;
        var pcode = this.patientTblRegForm.get("regpcodeCtrl").value;
        var response;
        this.registerService.registerPatient(pcode).then(function (data) {
            response = data;
            _this.registerBtnEnable = true;
            if (response.msg_status == 200) {
                // location.reload();
                //this.getTodaysRegistration();
                _this.todaysregistrationList = [];
                _this.getTodaysRegistration();
                //this.registerButtonActive = true;
                // this.loaderActive = false;
                _this.enableregister = false;
                _this.tblPatientID = null;
                _this.tblPatientName = null;
                _this.tblPatientDOB = null;
                _this.tblPatientGender = null;
                _this.tblPatientDivision = null;
                _this.tblPatientChallan = null;
                _this.tblPatientLine = null;
                _this.tblPatientMbl = null;
                _this.tblPatientAadhar = null;
                _this.displayp = 'none';
            }
            else {
                //  this.registerButtonActive = true;
                _this.loaderActive = false;
            }
        }, function (error) {
            console.log("There is some error on submitting...");
        });
    };
    PatienregistrationComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_components_patientadddialog_patientadddialog_component__WEBPACK_IMPORTED_MODULE_6__["PatientadddialogComponent"], {
            width: '900px',
            data: ''
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.from == "Save") {
                _this.displayedColSecond = [
                    'reg-action',
                    'reg-patientid',
                    'reg-patientname',
                    'reg-patientdob',
                    'reg-patientgender',
                    'reg-patientdivision',
                    'reg-patientchallan',
                    'reg-patientline',
                    'reg-patientmobile',
                    'reg-patientaadhar'
                ];
                _this.enableregister = true;
                _this.displayp = 'table-row';
                _this.tblPatientID = result.patientcode;
                _this.tblPatientName = result.patientname;
                _this.tblPatientDOB = result.dob;
                _this.tblPatientGender = result.gender;
                _this.tblPatientDivision = result.division;
                _this.tblPatientChallan = result.challan;
                _this.tblPatientLine = result.line;
                _this.tblPatientMbl = result.mobile;
                _this.tblPatientAadhar = result.aadhar;
                _this.patientTblRegForm.patchValue({
                    regpcodeCtrl: result.patientcode
                });
            }
        });
    };
    PatienregistrationComponent.prototype.getPatientCode = function () {
        var _this = this;
        var dataval;
        var patientlist;
        this.patientService.getPatientList().then(function (data) {
            dataval = data;
            patientlist = dataval.patient;
            var count = Object.keys(dataval.patient).length;
            var resultObj;
            var aadharObj;
            for (var i = 0; i < count; i++) {
                resultObj = {
                    'code': dataval.patient[i].patient_code,
                    'id': dataval.patient[i].patient_id
                };
                aadharObj = {
                    'aadhar': dataval.patient[i].adhar,
                    'id': dataval.patient[i].patient_id,
                    'name': dataval.patient[i].patient_name
                };
                _this.patientcodes.push(resultObj);
                _this.aadharnumbers.push(aadharObj);
            }
            _this.filteredPatientCode.next(_this.patientcodes.slice());
            _this.filteredPatientAadhar.next(_this.aadharnumbers.slice());
            _this.filteredPatientName.next(_this.aadharnumbers.slice());
            _this.IDsearchForm.get('pcodeFilterCtrl').valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(_this._onDestroy))
                .subscribe(function () {
                _this.filterPatientCode();
            });
            _this.IDsearchForm.get('aadharFilterCtrl').valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(_this._onDestroy))
                .subscribe(function () {
                _this.filterPatientAadhar();
            });
            _this.FieldsearchForm.get('patientNameFilterCtrl').valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(_this._onDestroy))
                .subscribe(function () {
                _this.filterPatientName();
            });
        }, function (error) {
            console.log("There is some error in Relation List...");
        });
    };
    PatienregistrationComponent.prototype.filterPatientCode = function () {
        if (!this.patientcodes) {
            return;
        }
        // get the search keyword
        var search = this.IDsearchForm.get('pcodeFilterCtrl').value;
        if (!search) {
            this.filteredPatientCode.next(this.patientcodes.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredPatientCode.next(this.patientcodes.filter(function (patientcd) { return patientcd.code.toLowerCase().indexOf(search) > -1; }));
    };
    PatienregistrationComponent.prototype.filterPatientAadhar = function () {
        if (!this.aadharnumbers) {
            return;
        }
        // get the search keyword
        var search = this.IDsearchForm.get('aadharFilterCtrl').value;
        if (!search) {
            this.filteredPatientAadhar.next(this.aadharnumbers.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredPatientAadhar.next(this.aadharnumbers.filter(function (aadharmno) { return aadharmno.aadhar.toLowerCase().indexOf(search) > -1; }));
    };
    PatienregistrationComponent.prototype.filterPatientName = function () {
        if (!this.aadharnumbers) {
            return;
        }
        // get the search keyword
        var search = this.FieldsearchForm.get('patientNameFilterCtrl').value;
        if (!search) {
            this.filteredPatientName.next(this.aadharnumbers.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredPatientName.next(this.aadharnumbers.filter(function (aadharmno) { return aadharmno.name.toLowerCase().indexOf(search) > -1; }));
    };
    PatienregistrationComponent.prototype.removeError = function () {
        this.isRegAlreadyDone_Err = false;
        this.validation_Err = false;
        this.basicSearchValidErr = false;
        this.advSearchValidErr = false;
    };
    PatienregistrationComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], PatienregistrationComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], PatienregistrationComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('singleSelect'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelect"])
    ], PatienregistrationComponent.prototype, "singleSelect", void 0);
    PatienregistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patienregistration',
            template: __webpack_require__(/*! ./patienregistration.component.html */ "./src/app/layout/patienregistration/patienregistration.component.html"),
            styles: [__webpack_require__(/*! ./patienregistration.component.css */ "./src/app/layout/patienregistration/patienregistration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _service_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"], _service_globalconstant_service__WEBPACK_IMPORTED_MODULE_3__["GlobalconstantService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _service_registration_service__WEBPACK_IMPORTED_MODULE_5__["RegistrationService"]])
    ], PatienregistrationComponent);
    return PatienregistrationComponent;
}());



/***/ }),

/***/ "./src/app/layout/patienregistration/patienregistration.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/patienregistration/patienregistration.module.ts ***!
  \************************************************************************/
/*! exports provided: PatienregistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatienregistrationModule", function() { return PatienregistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _patienregistration_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patienregistration-routing.module */ "./src/app/layout/patienregistration/patienregistration-routing.module.ts");
/* harmony import */ var _patienregistration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patienregistration.component */ "./src/app/layout/patienregistration/patienregistration.component.ts");
/* harmony import */ var _components_todayspatientreglist_todayspatientreglist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/todayspatientreglist/todayspatientreglist.component */ "./src/app/layout/components/todayspatientreglist/todayspatientreglist.component.ts");
/* harmony import */ var _components_patientadddialog_patientadddialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/patientadddialog/patientadddialog.component */ "./src/app/layout/components/patientadddialog/patientadddialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PatienregistrationModule = /** @class */ (function () {
    function PatienregistrationModule() {
    }
    PatienregistrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _patienregistration_routing_module__WEBPACK_IMPORTED_MODULE_4__["PatienregistrationRoutingModule"],
                _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_2__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            declarations: [_patienregistration_component__WEBPACK_IMPORTED_MODULE_5__["PatienregistrationComponent"], _components_todayspatientreglist_todayspatientreglist_component__WEBPACK_IMPORTED_MODULE_6__["TodayspatientreglistComponent"], _components_patientadddialog_patientadddialog_component__WEBPACK_IMPORTED_MODULE_7__["PatientadddialogComponent"]],
            entryComponents: [_components_todayspatientreglist_todayspatientreglist_component__WEBPACK_IMPORTED_MODULE_6__["TodayspatientreglistComponent"], _components_patientadddialog_patientadddialog_component__WEBPACK_IMPORTED_MODULE_7__["PatientadddialogComponent"]]
        })
    ], PatienregistrationModule);
    return PatienregistrationModule;
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



/***/ })

}]);
//# sourceMappingURL=patienregistration-patienregistration-module.js.map