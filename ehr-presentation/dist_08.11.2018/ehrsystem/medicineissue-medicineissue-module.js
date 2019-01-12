(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["medicineissue-medicineissue-module"],{

/***/ "./src/app/layout/medicineissue/medicineissue-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/medicineissue/medicineissue-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: MedicineissueRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineissueRoutingModule", function() { return MedicineissueRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _medicineissue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medicineissue.component */ "./src/app/layout/medicineissue/medicineissue.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _medicineissue_component__WEBPACK_IMPORTED_MODULE_2__["MedicineissueComponent"]
    }
];
var MedicineissueRoutingModule = /** @class */ (function () {
    function MedicineissueRoutingModule() {
    }
    MedicineissueRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MedicineissueRoutingModule);
    return MedicineissueRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/medicineissue/medicineissue.component.css":
/*!******************************************************************!*\
  !*** ./src/app/layout/medicineissue/medicineissue.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".patientinfo mat-toolbar {\r\n    background: transparent !important;\r\n    font-size: 0.8rem;\r\n    letter-spacing: 1px;\r\n    /* height:auto; */\r\n    margin-top: -2%;\r\n}\r\n\r\n.toplink {\r\n    font-size: 0.7rem;\r\n    /* text-decoration: underline; */\r\n    letter-spacing: 1px;\r\n    /* background: white;*/\r\n    margin-left: 5px;\r\n    border-radius: 36px;\r\n    border: 0px solid #d0cbcb;\r\n    /*color: #827979;*/\r\n}\r\n\r\n.block_btn {\r\n    font-size: 0.7rem;\r\n    letter-spacing: 1px;\r\n    background: #126adb;\r\n    margin-left: 5px;\r\n    border-radius: 4px;\r\n    border: 0px solid #d0cbcb;\r\n    color: #fff;\r\n    margin-bottom: 5px;\r\n    padding: 0;\r\n}\r\n\r\n.patientinfo {\r\n    background: transparent;\r\n    padding: 0%;\r\n    margin-bottom: 2%;\r\n}\r\n\r\n.infocontainer {\r\n    padding: 0%;\r\n    background: transparent;\r\n    border: 0px solid #e4e7e8;\r\n    border-radius: 6px;\r\n}\r\n\r\n.mat-input-element:disabled {\r\n    /* color: rgba(0,0,0,.38); */\r\n    color: #181818;\r\n    font-size: 12px;\r\n    letter-spacing: 1px;\r\n    font-weight: 500;\r\n}\r\n\r\n.prescription {\r\n    margin-top: -1%;\r\n    background: #fdfeff;\r\n    border: 1px solid #deeaef;\r\n}\r\n\r\n.mat-tab-header,\r\n.mat-tab-nav-bar {\r\n    border-bottom: 1px solid rgba(128, 123, 123, 0.12);\r\n}\r\n\r\n.mat-tab-label-container {\r\n    background: #dfe0ea !important;\r\n}\r\n\r\n.prescription .mat-icon {\r\n    padding-right: 5px;\r\n}\r\n\r\n.mat-tab-label-content {\r\n    font-size: 1px;\r\n    letter-spacing: 1px;\r\n    color: #03030a;\r\n}\r\n\r\n.prescription_block {\r\n    margin-top: 1.2%;\r\n}\r\n\r\n.prescription_block .mat-form-field {\r\n    display: inline-block;\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 13px;\r\n    letter-spacing: 1px;\r\n    \r\n}\r\n\r\n.mat-form-field{\r\n    font-size:0.8rem;\r\n}\r\n\r\n.blockheading {\r\n    letter-spacing: 1px;\r\n    font-size: 0.8rem;\r\n    font-weight: 500;\r\n}\r\n\r\n.addicon {\r\n    padding: 0px 5px;\r\n}\r\n\r\ntd.mat-cell,\r\ntd.mat-footer-cell,\r\nth.mat-header-cell {\r\n    font-size: 12px;\r\n    letter-spacing: 1px;\r\n    color: #242424;\r\n}\r\n\r\nth.mat-header-cell {\r\n    padding: 2px 5px !important;\r\n}\r\n\r\ntr.mat-footer-row,\r\ntr.mat-row {\r\n    height: 40px;\r\n}\r\n\r\n.upld_actionbtn {\r\n    margin-bottom: 1.5%;\r\n}\r\n\r\n.mat-checkbox {\r\n    font-size: 11px;\r\n    letter-spacing: 1px;\r\n    font-weight: 500;\r\n}\r\n\r\n.mat-tab-group {\r\n    font-size: 11px;\r\n    letter-spacing: 1px;\r\n    font-weight: 500;\r\n}\r\n\r\n.phrmcybtn {\r\n    /* float: right; */\r\n    margin-left: 4%;\r\n    margin-right: 1%;\r\n    margin-top: 1%;\r\n    margin-bottom: 1%;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.mat-tab-labels {\r\n    background: #1f6fc9 !important;\r\n    font-size: 12px;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.mat-tab-label .mat-tab-label-content {\r\n    color: #FFF;\r\n    font-size: 12px;\r\n}\r\n\r\n.mat-tab-label:focus {\r\n    opacity: 1;\r\n}\r\n\r\n.mat-form-field-infix {\r\n    width: auto !important;\r\n}\r\n\r\n.mat-tab-label-active {\r\n    background-color: #085287;\r\n    opacity: 1 !important;\r\n}\r\n\r\ntd.mat-cell:first-of-type,\r\ntd.mat-footer-cell:first-of-type,\r\nth.mat-header-cell:first-of-type {\r\n    padding-left: 0px !important;\r\n}\r\n\r\n.cutomTbl tr th {\r\n   /* padding: 1px 3px;\r\n    text-align: left;\r\n    border-bottom: 1px solid #dfe0e0;\r\n    font-weight: 500;\r\n    background: transparent;*/\r\n    \r\n    padding: 3px 3px;\r\n    text-align: left;\r\n    border-bottom: 1px solid #e9e9e9;\r\n    font-weight: 500;\r\n    background: #f5f5f5;\r\n    height: 26px;\r\n    padding-right: 9px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.cutomTbl tr td {\r\n    padding: 0px 3px;\r\n    text-align: left;\r\n    border-bottom: 1px solid #dfe0e0;\r\n    color: black;\r\n}\r\n\r\n.medissuePatientInfo{\r\n    \r\n    \r\n    background: #f5f5f5;\r\n    padding: 1%;\r\n    border: 1px solid rgb(225, 225, 225);\r\n    margin-right: 1.5%;\r\n    \r\n}\r\n\r\n.mat-form-field-appearance-legacy .mat-form-field-label {\r\n\r\n    color: #474747;\r\n    opacity: 1 !important;\r\n    font-size: 14px;\r\n\r\n}\r\n\r\n.infoLabel{\r\n    font-weight: 500;\r\n    /* font-style: italic; */\r\n    color: #787878;\r\n}\r\n\r\n.bacthcLabel{\r\n    font-size: 9px;\r\n    letter-spacing: 2px;\r\n    font-weight: 500;\r\n}"

/***/ }),

/***/ "./src/app/layout/medicineissue/medicineissue.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/medicineissue/medicineissue.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wraper-container\">\n    <div class=\"search-container\">\n        <mat-card>\n\n            <mat-card-content>\n\n                <section class=\"patientinfo\">\n                    <mat-toolbar>\n\n                        <div style=\"width:100%;float: right;text-align:right;\">\n                            <button mat-raised-button color=\"primary\" class=\"toplink\" (click)=\"gotoList()\">Back To List </button>\n                            \n                        </div>\n                    </mat-toolbar>\n                   \n\n                </section>\n\n\n\n\n                <section class=\"prescription\">\n                    <mat-tab-group>\n                        <mat-tab>\n                            <ng-template mat-tab-label>\n                                <mat-icon>assignment_turned_in </mat-icon>\n                                Medicine Issue - Prescription Wise\n                            </ng-template>\n\n                           \n                                <div class=\"container prescription_block\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" fxLayoutAlign=\"center\">\n\n\n                                    <div fxFlex=\"25%\" class=\"medissuePatientInfo\">\n                                        <form [formGroup]=\"prescriptionMedPatientInfoForm\">\n                                            <div class=\"container infocontainer\" fxLayout=\"column\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" fxLayoutAlign=\"center\">\n                                                <div fxFlex=\"20%\">\n                                                    <mat-form-field class=\"fullwidthinp\">\n                                                        <input matInput placeholder=\"Prescription No\" formControlName=\"prescriptionNo\">\n                                                        <input type=\"hidden\" formControlName=\"hdnPrescpID\">\n                                                    </mat-form-field>\n                                                </div>\n                                                <div fxFlex=\"20%\">\n                                                    <mat-form-field class=\"fullwidthinp\">\n                                                        <input matInput placeholder=\"Patient ID\" formControlName=\"patientID\">\n                                                        <input type=\"hidden\" formControlName=\"hdnPrescpID\">\n                                                    </mat-form-field>\n                                                </div>\n                                                <div fxFlex=\"20%\">\n                                                    <mat-form-field class=\"fullwidthinp\">\n                                                        <input matInput placeholder=\"Type\" formControlName=\"patientType\">\n                                                    </mat-form-field>\n                                                </div>\n                    \n                                                <div fxFlex=\"20%\">\n                                                    <mat-form-field class=\"fullwidthinp\">\n                                                        <input matInput placeholder=\"Patient Name\" formControlName=\"patientName\">\n                                                    </mat-form-field>\n                                                </div>\n                    \n                                                <div fxFlex=\"20%\">\n                                                    <mat-form-field class=\"fullwidthinp\">\n                                                        <input matInput placeholder=\"Age\" formControlName=\"patientAge\">\n                                                    </mat-form-field>\n                                                </div>\n                    \n                                            </div>\n                                        </form>\n                                            \n                    \n                                       \n                                    </div>\n\n                                    <div fxFlex=\"70%\">\n\n                                        <form [formGroup]=\"prescriptionMedForm\" (ngSubmit)=\"onSubmit(prescriptionMedForm.value)\">\n                                            <div class=\"add_medicines\">\n                                                <!--Test Table-->\n                                                <table style=\"width:100%;\" class=\"cutomTbl\" cellspacing=\"0\" cellpadding=\"0\">\n                                                    <tr>\n                                                        <th style=\"background: #f44336;color:#FFF;\">Medicine</th>\n                                                        <th style=\"background: #f44336;color:#FFF;\">Instruction</th>\n                                                        <th style=\"background: #f44336;color:#FFF;\">Stock</th>\n                                                        <th style=\"background: #f44336;color:#FFF;\">Issue</th>\n                                                        <th style=\"background: #f44336;color:#FFF;\">Batch Help</th>\n                                                    </tr>\n                                                    <tr *ngFor=\"let meddata of medicineListsDatas[0]; let i = index \">\n                                                    \n                                                        <th>\n                                                            {{meddata.medicine_name}}\n                                                            <input type=\"hidden\" placeholder=\"\" valeu=\"10\" formControlName=\"medicineHdnID\" autocomplete=\"off\" />\n                                                            \n                                                        </th>\n                                                        <th>\n                                                            <span class=\"infoLabel\">Dosage  :</span>    {{meddata.value}} <br>\n                                                            <span class=\"infoLabel\">Frequency  :</span> {{meddata.frequency_name}} <br>\n                                                            <span class=\"infoLabel\">Days       :</span> {{meddata.number_of_days_sick_leave}} \n                                                        </th>\n                                                        <th>\n                                                            <mat-form-field >\n                                                                <input matInput placeholder=\"\" formControlName=\"stock\" autocomplete=\"off\" />\n                                                            </mat-form-field>\n                                                        </th>\n                                                        <th>\n                                                            <mat-form-field >\n                                                                <input matInput placeholder=\"\" formControlName=\"issue\" autocomplete=\"off\" />\n                                                            </mat-form-field>\n                                                        </th>\n                                                        <th>\n                                                            <span class=\"bacthcLabel\">BATCH - 1</span> <br>\n                                                            <span class=\"bacthcLabel\">BATCH -2</span> \n                                                        </th>\n                                                    \n\n                                                    </tr>\n\n\n                                                </table>\n                                            </div>\n                                        </form>\n\n\n                                    </div> <!--End of left -->\n\n\n\n                                 \n\n                                    \n                                </div>\n                              \n                                <div class=\"container infocontainer\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" fxLayoutAlign=\"center\" style=\"padding-bottom: 2%;\">\n                                    \n                                    <div fxFlex=\"90%\"></div>\n                                    <div fxFlex=\"10%\">\n                                        \n                                     \n                                        <button mat-flat-button color=\"primary\" class=\"phrmcybtn\" type=\"submit\" *ngIf=\"sendPhrmcyBtnActive\" >Issue Now</button>\n                                       \n                                        <button mat-flat-button color=\"default\" class=\"phrmcybtn\" *ngIf=\"!sendPhrmcyBtnActive\" style=\"vertical-align: middle;padding: 4px 0;\" type=\"button\">\n                                            <mat-spinner [diameter]=\"25\" color=\"primary\" ></mat-spinner>\n                                          </button>\n                                    </div>\n                                </div>\n\n                         \n\n\n                    \n                        </mat-tab>\n\n                    </mat-tab-group>\n                </section>\n\n\n\n\n\n            </mat-card-content>\n        </mat-card>\n\n    </div>\n    <!--end of search container-->\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/layout/medicineissue/medicineissue.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/medicineissue/medicineissue.component.ts ***!
  \*****************************************************************/
/*! exports provided: MedicineissueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineissueComponent", function() { return MedicineissueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_datashare_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../service/datashare.service */ "./src/app/service/datashare.service.ts");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/patient.service */ "./src/app/service/patient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_successdialog_successdialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/successdialog/successdialog.component */ "./src/app/layout/components/successdialog/successdialog.component.ts");
/* harmony import */ var _service_phramcy_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/phramcy.service */ "./src/app/service/phramcy.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MedicineissueComponent = /** @class */ (function () {
    function MedicineissueComponent(router, commonService, datashareService, patientService, dialog, phramcyService) {
        this.router = router;
        this.commonService = commonService;
        this.datashareService = datashareService;
        this.patientService = patientService;
        this.dialog = dialog;
        this.phramcyService = phramcyService;
        this.PatientID = null;
        this.PatientName = null;
        this.PatientType = null;
        this.PatientAge = null;
        this.medicineError = "";
        this.testReportError = "";
        this.validFormErr = "";
        this.lastPresciptionID = 0;
        this.displayedColumns = ['datetd', 'medicinetd', 'dosagetd', 'unittd', 'daystd', 'actiontd'];
        this.dataSource = [];
        this.displayedColumnsReport = ['datetd', 'reportdtd', 'actiontd'];
        this.addedMeddata = [];
        this.addedInvestigations = [];
        this.sendPhrmcyBtnActive = true;
        this.localStrgPcode = "";
        this.medicineListsDatas = [];
        this.prescriptionMedForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            medicineHdnID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            instruction: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Test Instruction'),
            stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('10'),
            issue: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.prescriptionMedPatientInfoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            hdnPrescpID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            patientID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            patientType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            patientName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            patientAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true }),
            prescriptionNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: true })
        });
        this.prescriptObj = this.datashareService.getPrescriptionRowData();
        if (this.prescriptObj) {
            localStorage.setItem("prescid", this.prescriptObj.prescription_ID);
            localStorage.setItem("prescpcode", this.prescriptObj.patient_code);
            localStorage.setItem("prescpno", this.prescriptObj.prescription_No);
        }
        this.localStrgPrescpID = localStorage.getItem("prescid");
        this.localStrgPrescpPCode = localStorage.getItem("prescpcode");
        this.localStrgPrescpNo = localStorage.getItem("prescpno");
    }
    MedicineissueComponent.prototype.ngOnInit = function () {
        var _this = this;
        var response;
        var pdata;
        var symptomlist;
        var diagnosislist;
        var medicinedata;
        var reportdata;
        this.patientService.getPatientInfoByCode(this.localStrgPrescpPCode).then(function (data) {
            response = data;
            if (response.msg_status == 200) {
                pdata = response.result;
                _this.prescriptionMedPatientInfoForm.patchValue({
                    patientID: pdata.patient_code,
                    patientType: pdata.patient_type,
                    patientName: pdata.patient_name,
                    patientAge: response.age + " Yrs.",
                    prescriptionNo: _this.localStrgPrescpNo
                });
            }
            else {
            }
        }, function (error) {
            console.log("There is some error on submitting...");
        });
        this.getMedicinesByPrescription(this.localStrgPrescpID);
    };
    MedicineissueComponent.prototype.getMedicinesByPrescription = function (prescriptionID) {
        var _this = this;
        console.log("prescriptionID is - " + prescriptionID);
        var response;
        var meddata;
        this.phramcyService.getMedicinesByPrescription(prescriptionID).then(function (data) {
            response = data;
            meddata = response.result;
            if (response.msg_status == 200) {
                _this.medicineListsDatas.push(meddata);
                console.log("Medicine Prescription Wise ");
                console.log(response);
                console.log(" * * * * * * * ");
                var count3 = Object.keys(meddata).length;
                console.log(_this.medicineListsDatas);
            }
        }, function (error) {
            console.log("There is some error on submitting...");
        });
    };
    MedicineissueComponent.prototype.ngOnDestroy = function () {
    };
    MedicineissueComponent.prototype.onSubmit = function () {
        console.log("Medicine Submit Cliked");
        /*console.log(this.presciptionForm.value);
        console.log(this.addedMeddata);
        console.log(this.addedInvestigations);
        console.log(this.presciptionHealthForm.value);
         
       if(this.validatePresciptionForm()) {
   
         this.sendPhrmcyBtnActive = false;
         let response;
         this.symptomdiseaseService.insertToOPD(this.presciptionHealthForm.value,this.presciptionForm.value,this.addedMeddata,this.addedInvestigations).then(data => {
           response = data;
             this.sendPhrmcyBtnActive = true;
           if(response.msg_status == 200) {
             this.openDialog();
             localStorage.removeItem("tpcd");
             localStorage.removeItem("regid");
           }
           else{
          
           }
          },
            error => {
              console.log("There is some error on submitting...");
          });
       }
   
       */
    };
    MedicineissueComponent.prototype.gotoList = function () {
        this.router.navigateByUrl('panel/prescriptionlist');
    };
    MedicineissueComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_components_successdialog_successdialog_component__WEBPACK_IMPORTED_MODULE_7__["SuccessdialogComponent"], {
            width: '350px',
            disableClose: true,
            data: {
                msg: 'OPD Saved Successfully',
                msgicon: 'check_circle',
                iconcolor: '#1d8c3d',
                btnurl: 'panel/todaysreg'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    MedicineissueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-medicineissue',
            template: __webpack_require__(/*! ./medicineissue.component.html */ "./src/app/layout/medicineissue/medicineissue.component.html"),
            styles: [__webpack_require__(/*! ./medicineissue.component.css */ "./src/app/layout/medicineissue/medicineissue.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _service_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _service_datashare_service__WEBPACK_IMPORTED_MODULE_3__["DatashareService"],
            _service_patient_service__WEBPACK_IMPORTED_MODULE_4__["PatientService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _service_phramcy_service__WEBPACK_IMPORTED_MODULE_8__["PhramcyService"]])
    ], MedicineissueComponent);
    return MedicineissueComponent;
}());



/***/ }),

/***/ "./src/app/layout/medicineissue/medicineissue.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/medicineissue/medicineissue.module.ts ***!
  \**************************************************************/
/*! exports provided: MedicineissueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineissueModule", function() { return MedicineissueModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _medicineissue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./medicineissue.component */ "./src/app/layout/medicineissue/medicineissue.component.ts");
/* harmony import */ var _medicineissue_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medicineissue-routing.module */ "./src/app/layout/medicineissue/medicineissue-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MedicineissueModule = /** @class */ (function () {
    function MedicineissueModule() {
    }
    MedicineissueModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _medicineissue_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicineissueRoutingModule"],
                _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_2__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            declarations: [_medicineissue_component__WEBPACK_IMPORTED_MODULE_4__["MedicineissueComponent"]]
        })
    ], MedicineissueModule);
    return MedicineissueModule;
}());



/***/ })

}]);
//# sourceMappingURL=medicineissue-medicineissue-module.js.map