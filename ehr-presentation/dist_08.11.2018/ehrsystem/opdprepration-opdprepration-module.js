(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["opdprepration-opdprepration-module"],{

/***/ "./src/app/layout/opdprepration/opdprepration-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/opdprepration/opdprepration-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: OpdpreprationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpdpreprationRoutingModule", function() { return OpdpreprationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _opdprepration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opdprepration.component */ "./src/app/layout/opdprepration/opdprepration.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _opdprepration_component__WEBPACK_IMPORTED_MODULE_2__["OpdpreprationComponent"]
    }
];
var OpdpreprationRoutingModule = /** @class */ (function () {
    function OpdpreprationRoutingModule() {
    }
    OpdpreprationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OpdpreprationRoutingModule);
    return OpdpreprationRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/opdprepration/opdprepration.component.css":
/*!******************************************************************!*\
  !*** ./src/app/layout/opdprepration/opdprepration.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".patientinfo mat-toolbar {\r\n    background: transparent !important;\r\n    font-size: 0.8rem;\r\n    letter-spacing: 1px;\r\n    /* height:auto; */\r\n    margin-top: -2%;\r\n}\r\n\r\n.toplink {\r\n    font-size: 0.7rem;\r\n    /* text-decoration: underline; */\r\n    letter-spacing: 1px;\r\n    /* background: white;*/\r\n    margin-left: 5px;\r\n    border-radius: 36px;\r\n    border: 0px solid #d0cbcb;\r\n    /*color: #827979;*/\r\n}\r\n\r\n.block_btn {\r\n    font-size: 0.7rem;\r\n    letter-spacing: 1px;\r\n    background: #126adb;\r\n    margin-left: 5px;\r\n    border-radius: 4px;\r\n    border: 0px solid #d0cbcb;\r\n    color: #fff;\r\n    margin-bottom: 5px;\r\n    padding: 0;\r\n}\r\n\r\n.patientinfo {\r\n    background: transparent;\r\n    padding: 0%;\r\n    margin-bottom: 2%;\r\n}\r\n\r\n.infocontainer {\r\n    padding: 0%;\r\n    background: transparent;\r\n    border: 0px solid #e4e7e8;\r\n    border-radius: 6px;\r\n}\r\n\r\n.mat-input-element:disabled {\r\n    /* color: rgba(0,0,0,.38); */\r\n    color: #181818;\r\n    font-size: 12px;\r\n    letter-spacing: 1px;\r\n    font-weight: 500;\r\n}\r\n\r\n.prescription {\r\n    margin-top: -1%;\r\n    background: #fdfeff;\r\n    border: 1px solid #deeaef;\r\n}\r\n\r\n.mat-tab-header,\r\n.mat-tab-nav-bar {\r\n    border-bottom: 1px solid rgba(128, 123, 123, 0.12);\r\n}\r\n\r\n.mat-tab-label-container {\r\n    background: #dfe0ea !important;\r\n}\r\n\r\n.prescription .mat-icon {\r\n    padding-right: 5px;\r\n}\r\n\r\n.mat-tab-label-content {\r\n    font-size: 1px;\r\n    letter-spacing: 1px;\r\n    color: #03030a;\r\n}\r\n\r\n.prescription_block {\r\n    margin-top: 1.2%;\r\n}\r\n\r\n.prescription_block .mat-form-field {\r\n    display: inline-block;\r\n    position: relative;\r\n    text-align: left;\r\n    font-size: 13px;\r\n    letter-spacing: 1px;\r\n    \r\n}\r\n\r\n.mat-form-field{\r\n    font-size:0.8rem;\r\n}\r\n\r\n.blockheading {\r\n    letter-spacing: 1px;\r\n    font-size: 0.8rem;\r\n    font-weight: 500;\r\n}\r\n\r\n.addicon {\r\n    padding: 0px 5px;\r\n}\r\n\r\ntd.mat-cell,\r\ntd.mat-footer-cell,\r\nth.mat-header-cell {\r\n    font-size: 12px;\r\n    letter-spacing: 1px;\r\n    color: #242424;\r\n}\r\n\r\nth.mat-header-cell {\r\n    padding: 2px 5px !important;\r\n}\r\n\r\ntr.mat-footer-row,\r\ntr.mat-row {\r\n    height: 40px;\r\n}\r\n\r\n.upld_actionbtn {\r\n    margin-bottom: 1.5%;\r\n}\r\n\r\n.mat-checkbox {\r\n    font-size: 11px;\r\n    letter-spacing: 1px;\r\n    font-weight: 500;\r\n}\r\n\r\n.mat-tab-group {\r\n    font-size: 11px;\r\n    letter-spacing: 1px;\r\n    font-weight: 500;\r\n}\r\n\r\n.phrmcybtn {\r\n    /* float: right; */\r\n    margin-left: 4%;\r\n    margin-right: 1%;\r\n    margin-top: 1%;\r\n    margin-bottom: 1%;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.mat-tab-labels {\r\n    background: #1f6fc9 !important;\r\n    font-size: 12px;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.mat-tab-label .mat-tab-label-content {\r\n    color: #FFF;\r\n    font-size: 12px;\r\n}\r\n\r\n.mat-tab-label:focus {\r\n    opacity: 1;\r\n}\r\n\r\n.mat-form-field-infix {\r\n    width: auto !important;\r\n}\r\n\r\n.mat-tab-label-active {\r\n    background-color: #085287;\r\n    opacity: 1 !important;\r\n}\r\n\r\ntd.mat-cell:first-of-type,\r\ntd.mat-footer-cell:first-of-type,\r\nth.mat-header-cell:first-of-type {\r\n    padding-left: 0px !important;\r\n}\r\n\r\n.cutomTbl tr th {\r\n   /* padding: 1px 3px;\r\n    text-align: left;\r\n    border-bottom: 1px solid #dfe0e0;\r\n    font-weight: 500;\r\n    background: transparent;*/\r\n    \r\n    padding: 3px 3px;\r\n    text-align: left;\r\n    border-bottom: 1px solid #a2b9d7;\r\n    font-weight: 500;\r\n    background: #dcebff;\r\n    height: 26px;\r\n    padding-right: 9px;\r\n    padding-left: 5px;\r\n}\r\n\r\n.cutomTbl tr td {\r\n    padding: 0px 3px;\r\n    text-align: left;\r\n    border-bottom: 1px solid #dfe0e0;\r\n    color: black;\r\n}\r\n\r\n.mat-form-field-appearance-legacy .mat-form-field-label {\r\n\r\n    color: #474747;\r\n    opacity: 1 !important;\r\n    font-size: 14px;\r\n\r\n}"

/***/ }),

/***/ "./src/app/layout/opdprepration/opdprepration.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/opdprepration/opdprepration.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wraper-container\">\n    <div class=\"search-container\">\n        <mat-card>\n\n            <mat-card-content>\n\n                <section class=\"patientinfo\">\n                    <mat-toolbar>\n\n                        <div style=\"width:100%;float: right;text-align:right;\">\n                            <button mat-raised-button color=\"primary\" class=\"toplink\" (click)=\"gotoList()\">Back To List </button>\n                            <button mat-raised-button color=\"warn\" class=\"toplink\">Prescription History</button>\n                        </div>\n                    </mat-toolbar>\n                    <form [formGroup]=\"presciptionHealthForm\">\n                        <div class=\"container infocontainer\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" fxLayoutAlign=\"center\">\n                            <div fxFlex=\"20%\">\n                                <mat-form-field class=\"fullwidthinp\">\n                                    <input matInput placeholder=\"Patient ID\" formControlName=\"patientID\">\n                                    <input type=\"hidden\" formControlName=\"hdnpatientID\">\n                                    <input type=\"hidden\" formControlName=\"hdnregistrationID\">\n                                    <input type=\"hidden\" formControlName=\"hdnpresciptionID\">\n                                </mat-form-field>\n                            </div>\n\n                            <div fxFlex=\"20%\">\n                                <mat-form-field class=\"fullwidthinp\">\n                                    <input matInput placeholder=\"Pres ID\" formControlName=\"prescpID\">\n                                </mat-form-field>\n                            </div>\n\n                            <div fxFlex=\"20%\">\n                                <mat-form-field class=\"fullwidthinp\">\n                                    <input matInput placeholder=\"Type\" formControlName=\"patientType\">\n                                </mat-form-field>\n                            </div>\n\n                            <div fxFlex=\"20%\">\n                                <mat-form-field class=\"fullwidthinp\">\n                                    <input matInput placeholder=\"Patient Name\" formControlName=\"patientName\">\n                                </mat-form-field>\n                            </div>\n\n                            <div fxFlex=\"20%\">\n                                <mat-form-field class=\"fullwidthinp\">\n                                    <input matInput placeholder=\"Age\" formControlName=\"patientAge\">\n                                </mat-form-field>\n                            </div>\n\n                        </div>\n                        <div class=\"container infocontainer\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" fxLayoutAlign=\"center\">\n                            <div fxFlex=\"15%\">\n                                <mat-form-field class=\"fullwidthinp\">\n                                    <input matInput placeholder=\"Pulse\" formControlName=\"pulse\">\n                                </mat-form-field>\n                            </div>\n\n                            <div fxFlex=\"15%\">\n                                <mat-form-field class=\"fullwidthinp\">\n                                    <input matInput placeholder=\"Temp (F)\" formControlName=\"tempratute\">\n                                </mat-form-field>\n                            </div>\n\n                            <div fxFlex=\"15%\">\n                                <mat-form-field class=\"fullwidthinp\">\n                                    <input matInput placeholder=\"Anaemia\" formControlName=\"anaemia\">\n                                </mat-form-field>\n                            </div>\n\n                            <div fxFlex=\"15%\">\n                                <mat-form-field class=\"fullwidthinp\">\n                                    <input matInput placeholder=\"BP\" formControlName=\"bp\">\n                                </mat-form-field>\n                            </div>\n\n                            <div fxFlex=\"15%\">\n                                <mat-form-field class=\"fullwidthinp\">\n                                    <input matInput placeholder=\"Jaundice\" formControlName=\"jaundice\">\n                                </mat-form-field>\n                            </div>\n\n                            <div fxFlex=\"15%\">\n                                <mat-form-field class=\"fullwidthinp\">\n                                    <input matInput placeholder=\"Odema\" formControlName=\"odema\">\n                                </mat-form-field>\n                            </div>\n\n                            <div fxFlex=\"15%\">\n                                <mat-form-field class=\"fullwidthinp\">\n                                    <input matInput placeholder=\"Height\" formControlName=\"height\">\n                                </mat-form-field>\n                            </div>\n                            <div fxFlex=\"15%\">\n                                <mat-form-field class=\"fullwidthinp\">\n                                    <input matInput placeholder=\"Weight (Kgs.)\" formControlName=\"weight\">\n                                </mat-form-field>\n                            </div>\n\n                        </div>\n\n                    </form>\n\n                </section>\n\n\n\n\n                <section class=\"prescription\">\n                    <mat-tab-group>\n                        <mat-tab>\n                            <ng-template mat-tab-label>\n                                <mat-icon>assignment_turned_in </mat-icon>\n                                General Consultation\n                            </ng-template>\n\n                            <form [formGroup]=\"presciptionForm\" (ngSubmit)=\"onSubmit(presciptionForm.value)\">\n                                <div class=\"container prescription_block\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" fxLayoutAlign=\"center\">\n                                    <div fxFlex=\"55%\">\n\n\n                                        <mat-form-field class=\"fullwidthinp\">\n                                           <mat-select formControlName=\"symptomsMultiCtrl\" placeholder=\"Signs And Symptoms\" [multiple]=\"true\" #multiSelect (selectionChange)=\"getDiseaseList($event)\">\n                                                <ngx-mat-select-search formControlName=\"symptomsMultiFilterCtrl\" [placeholderLabel]=\"'Search'\" [noEntriesFoundLabel]=\"'no records found'\"></ngx-mat-select-search>\n                                                <mat-option *ngFor=\"let symptom of filteredSymptomMulti | async\" [value]=\"symptom\" >\n                                                    {{symptom.name}}\n                                                </mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n\n                                        <mat-form-field class=\"fullwidthinp\">\n                                            <mat-select formControlName=\"diagnosisMultiCtrl\" placeholder=\"Diagnosis List\" [multiple]=\"true\" #multiSelect (selectionChange)=\"getMedicine($event)\">\n                                                <ngx-mat-select-search formControlName=\"diagnosisMultiFilterCtrl\" [placeholderLabel]=\"'Search'\" [noEntriesFoundLabel]=\"'no records found'\"></ngx-mat-select-search>\n                                                <mat-option *ngFor=\"let diagnosis of filteredDiagnosisMulti | async\" [value]=\"diagnosis\">\n                                                    {{diagnosis.name}}\n                                                </mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n\n\n                                        <!--<ul *ngFor=\"let bank of bankMultiCtrl?.value\">\n                                  <li>{{bank.name}}</li>\n                                </ul>-->\n\n                                        <h4 class=\"blockheading\">Add Medicines</h4>\n                                        <p style=\"color:#F00;text-align: right;\">{{medicineError}}</p>\n\n                                        <div class=\"add_medicines\">\n                                            <!--\n                                            <table mat-table [dataSource]=\"dataSource\" style=\"width:100%;\">\n                                                <ng-container matColumnDef=\"date\">\n                                                    <th mat-header-cell *matHeaderCellDef>\n                                                        <mat-form-field style=\"width: 90px;\">\n                                                            <input matInput [matDatepicker]=\"picker1\" placeholder=\"Date\" formControlName=\"date\">\n                                                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                                            <mat-datepicker #picker1></mat-datepicker>\n                                                        </mat-form-field>\n                                                    </th>\n                                                </ng-container>\n\n                                             \n                                                <ng-container matColumnDef=\"medicine\">\n                                                    <th mat-header-cell *matHeaderCellDef>\n\n\n                                                        <mat-select formControlName=\"medicineCtrl\" placeholder=\"Medicine\" #singleSelect style=\"width: 155px;\" (selectionChange)=\"getOtherDependent($event)\">\n                                                            <ngx-mat-select-search formControlName=\"medicineFilterCtrl\"></ngx-mat-select-search>\n                                                            <mat-option *ngFor=\"let medicine of filteredMedicines | async\" [value]=\"medicine\">\n                                                                {{medicine.name}}\n                                                            </mat-option>\n                                                        </mat-select>\n\n                                                    </th>\n                                                </ng-container>\n\n                                                <ng-container matColumnDef=\"dosage\">\n                                                    <th mat-header-cell *matHeaderCellDef>\n\n                                                   \n\n                                                        <mat-select formControlName=\"dosageCtrl\" placeholder=\"Dosage\" #singleSelect style=\"width: 155px;\">\n                                                            <ngx-mat-select-search formControlName=\"dosageFilterCtrl\" [placeholderLabel]=\"'Search'\" [noEntriesFoundLabel]=\"'no records found'\"></ngx-mat-select-search>\n                                                            <mat-option *ngFor=\"let dosage of filteredDosages | async\" [value]=\"dosage\">\n                                                                {{dosage.value}}\n                                                            </mat-option>\n                                                        </mat-select>\n\n                                                    </th>\n                                                </ng-container>\n\n\n                                                <ng-container matColumnDef=\"unit\">\n                                                    <th mat-header-cell *matHeaderCellDef>\n\n                                                        <mat-select formControlName=\"instructionCtrl\" placeholder=\"Frequncy\" #singleSelect style=\"width: 155px;\">\n                                                            <ngx-mat-select-search formControlName=\"instructionFilterCtrl\" [placeholderLabel]=\"'Search'\" [noEntriesFoundLabel]=\"'no records found'\"></ngx-mat-select-search>\n                                                            <mat-option *ngFor=\"let frequency of filteredInstruction | async\" [value]=\"frequency\">\n                                                                {{frequency.frequency}}\n                                                            </mat-option>\n                                                        </mat-select>\n\n                                                    </th>\n                                                </ng-container>\n\n                                               \n                                                <ng-container matColumnDef=\"days\">\n                                                    <th mat-header-cell *matHeaderCellDef>\n                                                        <mat-form-field style=\"width:70%;\">\n                                                            <input matInput placeholder=\"Days\" formControlName=\"daysCtrl\" />\n                                                        </mat-form-field>\n                                                    </th>\n                                                </ng-container>\n\n\n                                              \n                                                <ng-container matColumnDef=\"action\">\n                                                    <th mat-header-cell *matHeaderCellDef>\n                                                        <button mat-mini-fab color=\"primary\" (click)=\"addMedicine()\"><mat-icon class=\"addicon\">add_circle</mat-icon></button>\n                                                    </th>\n                                                </ng-container>\n\n\n\n\n                                          \n                                                <ng-container matColumnDef=\"datetd\">\n                                                    <th mat-header-cell *matHeaderCellDef> Date </th>\n                                                    <td mat-cell *matCellDef=\"let datas\">{{datas.datetd}}</td>\n\n                                                </ng-container>\n\n                                    \n                                                <ng-container matColumnDef=\"medicinetd\">\n                                                    <th mat-header-cell *matHeaderCellDef> Medicine </th>\n                                                    <td mat-cell *matCellDef=\"let datas\"> {{datas.medicinetd}} </td>\n\n                                                </ng-container>\n\n\n                                              \n                                                <ng-container matColumnDef=\"dosagetd\">\n                                                    <th mat-header-cell *matHeaderCellDef> Dosage </th>\n                                                    <td mat-cell *matCellDef=\"let datas\"> {{datas.dosagetd}} </td>\n                                                </ng-container>\n\n                                                <ng-container matColumnDef=\"unittd\">\n                                                    <th mat-header-cell *matHeaderCellDef> Frequency </th>\n                                                    <td mat-cell *matCellDef=\"let datas\"> {{datas.unittd}} </td>\n\n                                                </ng-container>\n\n                                                <ng-container matColumnDef=\"daystd\">\n                                                    <th mat-header-cell *matHeaderCellDef> Days </th>\n                                                    <td mat-cell *matCellDef=\"let datas\"> {{datas.daystd}} </td>\n                                                </ng-container>\n\n                                                <ng-container matColumnDef=\"actiontd\">\n                                                    <th mat-header-cell *matHeaderCellDef> Action </th>\n                                                    <td mat-cell *matCellDef=\"let datas\"> {{datas.actiontd}} </td>\n\n                                                </ng-container>\n\n\n                                           \n                                                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"example-first-header-row\">\n                                                </tr>\n                                                <tr mat-header-row *matHeaderRowDef=\"[ 'date', 'medicine', 'dosage', 'unit', 'days','action']\" class=\"example-second-header-row\">\n                                                </tr>\n\n                                                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                                            </table> -->\n\n\n\n\n                                            <!--Test Table-->\n                                            <table style=\"width:100%;\" class=\"cutomTbl\" cellspacing=\"0\" cellpadding=\"0\">\n                                                <tr>\n                                                    <!--<th>Date</th>-->\n                                                    <th>Medicine</th>\n                                                    <th>Dosage</th>\n                                                    <th>Frequency</th>\n                                                    <th>Days</th>\n                                                    <th>Action</th>\n\n                                                </tr>\n                                                <tr>\n                                                    <!--\n                                                    <th>\n                                                        <mat-form-field style=\"width: 90px;\">\n                                                            <input matInput [matDatepicker]=\"picker1\" placeholder=\"\" formControlName=\"date\">\n                                                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                                            <mat-datepicker #picker1></mat-datepicker>\n                                                        </mat-form-field>\n                                                    </th>-->\n                                                    <th>\n                                                        <mat-select formControlName=\"medicineCtrl\" placeholder=\"Medicine\" #singleSelect style=\"width: 155px;\" (selectionChange)=\"getOtherDependent($event)\">\n                                                            <ngx-mat-select-search formControlName=\"medicineFilterCtrl\" [placeholderLabel]=\"'Search'\" [noEntriesFoundLabel]=\"'no records found'\"></ngx-mat-select-search>\n                                                            <mat-option *ngFor=\"let medicine of filteredMedicines | async\" [value]=\"medicine\">\n                                                                {{medicine.name}}\n                                                            </mat-option>\n                                                        </mat-select>\n                                                    </th>\n                                                    <th>\n                                                        <mat-select formControlName=\"dosageCtrl\" placeholder=\"Dosage\" #singleSelect style=\"width: 155px;\">\n                                                            <ngx-mat-select-search formControlName=\"dosageFilterCtrl\" [placeholderLabel]=\"'Search'\" [noEntriesFoundLabel]=\"'no records found'\"></ngx-mat-select-search>\n                                                            <mat-option *ngFor=\"let dosage of filteredDosages | async\" [value]=\"dosage\">\n                                                                {{dosage.value}}\n                                                            </mat-option>\n                                                        </mat-select>\n\n                                                    </th>\n                                                    <th>\n                                                        <mat-select formControlName=\"instructionCtrl\" placeholder=\"Frequncy\" #singleSelect style=\"width: 155px;\">\n                                                            <ngx-mat-select-search formControlName=\"instructionFilterCtrl\" [placeholderLabel]=\"'Search'\" [noEntriesFoundLabel]=\"'no records found'\"></ngx-mat-select-search>\n                                                            <mat-option *ngFor=\"let frequency of filteredInstruction | async\" [value]=\"frequency\">\n                                                                {{frequency.frequency}}\n                                                            </mat-option>\n                                                        </mat-select>\n                                                    </th>\n                                                    <th>\n                                                        <mat-form-field style=\"width:70%;\">\n                                                            <input matInput placeholder=\"\" formControlName=\"daysCtrl\" autocomplete=\"off\" />\n                                                        </mat-form-field>\n                                                    </th>\n                                                    <th>\n                                                        <button type=\"button\" mat-mini-fab color=\"primary\" (click)=\"addMedicine()\"><mat-icon class=\"addicon\">add_circle</mat-icon></button>\n                                                    </th>\n\n                                                </tr>\n\n\n                                                <tr *ngFor=\"let addedmed of addedMeddata; let i = index \">\n                                                    <!--<td>{{addedmed.datetd | date:'dd/MM/yyyy'}}</td>-->\n                                                    <td>{{addedmed.medicinetd.name}}</td>\n                                                    <td>{{addedmed.dosagetd.value}}</td>\n                                                    <td>{{addedmed.unittd.frequency}}</td>\n                                                    <td>{{addedmed.daystd}}</td>\n                                                    <td>\n                                                        <button mat-icon-button (click)=\"removeData(i)\" color=\"warn\" type=\"button\">\n                                                                <mat-icon >clear</mat-icon>\n                                                        </button>\n                                                    </td>\n\n                                                </tr>\n                                            </table>\n\n\n                                        </div>\n\n\n                                    </div>\n\n                                    <mat-divider [vertical]=\"true\"></mat-divider>\n\n                                    <div fxFlex=\"40%\">\n                                        <h4 class=\"blockheading\">Add Investigations/Tests</h4>\n                                        <p style=\"color:#F00;text-align: right;\">{{testReportError}}</p>\n                                        <div class=\"patient_investigation\">\n\n                                            <!--\n                                            <table mat-table [dataSource]=\"transactions\" style=\"width:100%;\">\n                                                <ng-container matColumnDef=\"date\">\n                                                    <th mat-header-cell *matHeaderCellDef>\n                                                        <mat-form-field>\n                                                            <input matInput [matDatepicker]=\"picker1\" placeholder=\"Date\" formControlName=\"date\">\n                                                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                                            <mat-datepicker #picker1></mat-datepicker>\n                                                        </mat-form-field>\n                                                    </th>\n                                                </ng-container>\n\n                                                <ng-container matColumnDef=\"reporthead\">\n                                                    <th mat-header-cell *matHeaderCellDef>\n                                                        <mat-select formControlName=\"reportsCtrl\" placeholder=\"Reports\" #singleSelect style=\"width: 155px;\">\n                                                            <ngx-mat-select-search formControlName=\"reportsFilterCtrl\" [placeholderLabel]=\"'Search'\" [noEntriesFoundLabel]=\"'no records found'\"></ngx-mat-select-search>\n                                                            <mat-option *ngFor=\"let bank of filteredReports | async\" [value]=\"bank\">\n                                                                {{bank.name}}\n                                                            </mat-option>\n                                                        </mat-select>\n                                                    </th>\n                                                </ng-container>\n\n                                                <ng-container matColumnDef=\"action\">\n                                                    <th mat-header-cell *matHeaderCellDef>\n                                                        <button mat-mini-fab color=\"primary\"><mat-icon class=\"addicon\" >add_circle</mat-icon></button>\n                                                    </th>\n                                                </ng-container>\n                                                \n                                                <ng-container matColumnDef=\"datetd\">\n                                                    <th mat-header-cell *matHeaderCellDef> Date </th>\n                                                    <td mat-cell *matCellDef=\"let transaction\"> 08-10-2018</td>\n\n                                                </ng-container>\n\n                                               \n                                                <ng-container matColumnDef=\"reportdtd\">\n                                                    <th mat-header-cell *matHeaderCellDef> Report </th>\n                                                    <td mat-cell *matCellDef=\"let transaction\"> Calpol </td>\n\n                                                </ng-container>\n\n                                                <ng-container matColumnDef=\"actiontd\">\n                                                    <th mat-header-cell *matHeaderCellDef> Action </th>\n                                                    <td mat-cell *matCellDef=\"let transaction\"> </td>\n\n                                                </ng-container>\n                                                \n                                                <tr mat-header-row *matHeaderRowDef=\"displayedColumnsReport\" class=\"example-first-header-row\">\n                                                </tr>\n                                                <tr mat-header-row *matHeaderRowDef=\"[ 'date', 'reporthead' , 'action']\" class=\"example-second-header-row\">\n                                                </tr>\n\n                                                <tr mat-row *matRowDef=\"let row; columns: displayedColumnsReport;\"></tr>\n                                            </table> -->\n\n\n                                            <table style=\"width:100%;\" class=\"cutomTbl\" cellspacing=\"0\" cellpadding=\"0\">\n                                                <tr>\n                                                    <th>Date</th>\n                                                    <th>Report</th>\n                                                    <th>Action</th>\n                                                </tr>\n\n                                                <tr>\n                                                    <th style=\"width: 30%;\">\n                                                        <mat-form-field>\n                                                            <input matInput [matDatepicker]=\"picker2\" placeholder=\"\" formControlName=\"investigationDt\">\n                                                            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                                                            <mat-datepicker #picker2></mat-datepicker>\n                                                        </mat-form-field>\n                                                    </th>\n\n                                                    <th style=\"width: 60%;\">\n                                                        <mat-select formControlName=\"reportsCtrl\" placeholder=\"Reports\" #singleSelect (selectionChange)=\"clearTestError($event)\">\n                                                            <ngx-mat-select-search formControlName=\"reportsFilterCtrl\" [placeholderLabel]=\"'Search'\" [noEntriesFoundLabel]=\"'no records found'\"></ngx-mat-select-search>\n                                                            <mat-option *ngFor=\"let reports of filteredReports | async\" [value]=\"reports\">\n                                                                {{reports.name}}\n                                                            </mat-option>\n                                                        </mat-select>\n                                                    </th>\n\n                                                    <th style=\"width: 10%;\">\n                                                        <button type=\"button\" mat-mini-fab color=\"primary\" (click)=\"addInvestigation()\"><mat-icon class=\"addicon\" >add_circle</mat-icon></button>\n                                                    </th>\n\n                                                </tr>\n\n                                                <tr *ngFor=\"let addedinv of addedInvestigations;\">\n                                                    <td>{{addedinv.invdate | date:'dd/MM/yyyy' }}</td>\n                                                    <td>{{addedinv.reports.name}}</td>\n\n                                                    <td>\n                                                        <button mat-icon-button color=\"warn\" type=\"button\" (click)=\"removeMedReports(i)\"><mat-icon >clear</mat-icon></button>\n                                                    </td>\n\n                                                </tr>\n\n\n\n                                            </table>\n\n                                        </div>\n\n\n                                        <h4 class=\"blockheading\">Report Upload</h4>\n\n                                        <div class=\"upld_actionbtn\">\n                                            <button mat-stroked-button color=\"primary\" style=\"margin-right:1%;\">\n                                      <mat-icon>attachment</mat-icon> Upload Files \n                                    </button>\n                                            <button mat-stroked-button color=\"warn\">View Report</button>\n                                        </div>\n\n\n                                        <mat-form-field class=\"fullwidthinp\">\n                                            <textarea matInput placeholder=\"Final Summary\" formControlName=\"finalsummryCtrl\"></textarea>\n                                        </mat-form-field>\n\n\n\n\n\n                                        <div class=\"container infocontainer\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" fxLayoutAlign=\"center\">\n                                            <div fxFlex=\"30%\">\n                                                <mat-checkbox formControlName=\"sickCtrl\" (change)=\"enableSickDay($event)\" >Sick</mat-checkbox>\n                                            </div>\n                                            <div fxFlex=\"70%\">\n                                                <mat-form-field>\n                                                    <input matInput placeholder=\"Days\" formControlName=\"sickdaysCtrl\" (input)=\"clearFormValidErr($event)\"/>\n                                                </mat-form-field>\n                                            </div>\n                                        </div>\n\n\n                                        <div class=\"container infocontainer\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" fxLayoutAlign=\"center\" style=\"margin-top:1%;\">\n                                            <div fxFlex=\"30%\">\n                                                <mat-checkbox formControlName=\"approvalCtrl\">Accident Approval </mat-checkbox>\n                                            </div>\n                                            <div fxFlex=\"70%\">\n                                                <!--\n                                                <mat-radio-group formControlName=\"admobservCtrl\">\n                                                    <mat-radio-button value=\"ADMIT\"> Admit&nbsp;&nbsp; </mat-radio-button>\n                                                    <mat-radio-button value=\"OBSERVATION\"> Observation&nbsp;&nbsp; </mat-radio-button>\n                                                </mat-radio-group>-->\n\n                                                <mat-checkbox formControlName=\"admitCtrl\" (change)=\"validateRecomChkBox($event,'ADMIT')\" >Admit&nbsp;&nbsp;</mat-checkbox>\n                                                <mat-checkbox formControlName=\"observCtrl\" (change)=\"validateRecomChkBox($event,'OBSERVATION')\" >Observation</mat-checkbox>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"container infocontainer\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" fxLayoutAlign=\"center\">\n                                            <div fxFlex=\"30%\">\n                                                <mat-checkbox formControlName=\"isReffHospital\"  (change)=\"enableReffHospital($event)\">Reffer Hospital</mat-checkbox>\n                                            </div>\n                                            <div fxFlex=\"70%\">\n                                                <mat-form-field style=\"width:100%;\">\n                                                    <mat-select formControlName=\"reffHospitalCtrl\" placeholder=\"\" #singleSelect>\n                                                        <ngx-mat-select-search formControlName=\"reffHospitalFilterCtrl\" [placeholderLabel]=\"'Search'\" [noEntriesFoundLabel]=\"'no records found'\"></ngx-mat-select-search>\n                                                        <mat-option *ngFor=\"let reports of filteredHospitals | async\" [value]=\"reports\">\n                                                            {{reports.name}}\n                                                        </mat-option>\n                                                    </mat-select>\n                                                    </mat-form-field>\n                                            </div>\n                                        </div>\n\n\n\n                                    </div>\n                                </div>\n                              \n                                <div class=\"container infocontainer\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" fxLayoutAlign=\"center\" style=\"padding-bottom: 2%;\">\n                                    \n                                    <div fxFlex=\"80%\"></div>\n                                    <div fxFlex=\"20%\">\n                                        <p style=\"color:#F00;text-align: right;padding-right: 10px;\">{{validFormErr}}</p>\n                                        <button mat-flat-button color=\"warn\" class=\"\" type=\"button\" (click)=\"resetPresForm();\">+ New</button>\n                                        <button mat-flat-button color=\"primary\" class=\"phrmcybtn\" type=\"submit\" *ngIf=\"sendPhrmcyBtnActive\" >Send To Pharmacy</button>\n                                       \n                                        <button mat-flat-button color=\"default\" class=\"phrmcybtn\" *ngIf=\"!sendPhrmcyBtnActive\" style=\"vertical-align: middle;padding: 4px 0;\" type=\"button\">\n                                            <mat-spinner [diameter]=\"25\" color=\"primary\" ></mat-spinner>\n                                          </button>\n                                    </div>\n                                </div>\n\n                            </form>\n\n\n                    \n                        </mat-tab>\n\n                        <mat-tab>\n                            <ng-template mat-tab-label>\n                                <mat-icon>face</mat-icon>\n                                Pregnancy\n                            </ng-template>\n                            Content 2\n                        </mat-tab>\n\n                        <mat-tab>\n                            <ng-template mat-tab-label>\n                                <mat-icon>note_add</mat-icon>\n                                Vaccination\n                            </ng-template>\n                            Content 3\n                        </mat-tab>\n\n\n                    </mat-tab-group>\n                </section>\n\n\n\n\n\n            </mat-card-content>\n        </mat-card>\n\n    </div>\n    <!--end of search container-->\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/layout/opdprepration/opdprepration.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/opdprepration/opdprepration.component.ts ***!
  \*****************************************************************/
/*! exports provided: OpdpreprationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpdpreprationComponent", function() { return OpdpreprationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _service_symptomdisease_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../service/symptomdisease.service */ "./src/app/service/symptomdisease.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_datashare_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../service/datashare.service */ "./src/app/service/datashare.service.ts");
/* harmony import */ var _service_patient_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../service/patient.service */ "./src/app/service/patient.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_successdialog_successdialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/successdialog/successdialog.component */ "./src/app/layout/components/successdialog/successdialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var OpdpreprationComponent = /** @class */ (function () {
    function OpdpreprationComponent(router, commonService, symptomdiseaseService, datashareService, patientService, dialog) {
        this.router = router;
        this.commonService = commonService;
        this.symptomdiseaseService = symptomdiseaseService;
        this.datashareService = datashareService;
        this.patientService = patientService;
        this.dialog = dialog;
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
        this.version = _angular_material__WEBPACK_IMPORTED_MODULE_2__["VERSION"];
        this.relations = [];
        this.symptoms = [];
        this.diagnosis = [];
        this.medicines = [];
        this.dosages = [];
        this.frequency = [];
        this.instructions = [];
        this.medreports = [];
        this.refferHospitals = [];
        this.filteredMedicines = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.filteredDosages = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.filteredFrequency = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.filterRelations = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.filteredRelationsMulti = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.filteredInstruction = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.filteredReports = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.filteredHospitals = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.filterSymptom = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.filteredSymptomMulti = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.filterDiagnosis = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.filteredDiagnosisMulti = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.presciptionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            symptomsMultiCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            symptomsMultiFilterCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            diagnosisMultiCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            diagnosisMultiFilterCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            //    date: new FormControl(new Date().toISOString()),
            medicineCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            medicineFilterCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            dosageCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            dosageFilterCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            instructionCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            instructionFilterCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            investigationDt: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](new Date().toISOString()),
            reportsCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            reportsFilterCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            daysCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            finalsummryCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            sickCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            sickdaysCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]({ value: '', disabled: true }),
            approvalCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            admitCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            observCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            isReffHospital: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            reffHospitalCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]({ value: '', disabled: true }),
            reffHospitalFilterCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
        this.presciptionHealthForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            hdnpatientID: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            hdnregistrationID: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            hdnpresciptionID: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            patientID: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]({ value: '', disabled: true }),
            prescpID: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]({ value: '', disabled: true }),
            patientType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]({ value: '', disabled: true }),
            patientName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]({ value: '', disabled: true }),
            patientAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]({ value: '', disabled: true }),
            pulse: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            tempratute: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            anaemia: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            bp: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            jaundice: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            odema: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
        });
        this.patientObj = this.datashareService.getData();
        if (this.patientObj) {
            localStorage.setItem("tpcd", this.patientObj.patient_code);
            localStorage.setItem("regid", this.patientObj.registration_id);
        }
        this.localStrgPcode = localStorage.getItem("tpcd");
        this.localStrgRid = localStorage.getItem("regid");
    }
    OpdpreprationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSymptoms();
        this.filteredSymptomMulti.next(this.symptoms.slice());
        this.presciptionForm.get('symptomsMultiFilterCtrl').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterSymptomsMulti();
        });
        this.getIvestigations();
        this.filteredReports.next(this.medreports.slice());
        this.presciptionForm.get('reportsFilterCtrl').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterMedReports();
        });
        this.getHospitals();
        this.filteredHospitals.next(this.refferHospitals.slice());
        this.presciptionForm.get('reffHospitalFilterCtrl').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterHospital();
        });
        var response;
        var pdata;
        var symptomlist;
        var diagnosislist;
        var medicinedata;
        var reportdata;
        this.patientService.getPatientByCode(this.localStrgPcode).then(function (data) {
            response = data;
            if (response.msg_status == 200) {
                pdata = response.result;
                symptomlist = response.symptomsInfo;
                diagnosislist = response.diseaseInfo;
                medicinedata = response.medicineInfo;
                reportdata = response.reportsInfo;
                _this.presciptionHealthForm.patchValue({
                    hdnpatientID: pdata.patient_code,
                    hdnregistrationID: _this.localStrgRid,
                    hdnpresciptionID: pdata.prescription_addmission_id,
                    patientID: pdata.patient_code,
                    prescpID: response.prescriptionID,
                    patientType: pdata.patient_type,
                    patientName: pdata.patient_name,
                    patientAge: response.age,
                    pulse: pdata.pulse,
                    tempratute: pdata.temp,
                    anaemia: pdata.anemia,
                    bp: pdata.bp,
                    jaundice: pdata.jaundice,
                    odema: pdata.odema,
                    height: pdata.height,
                    weight: pdata.weight
                });
                var sickCtrlStatus = pdata.sick_flag == 'Y' ? true : false;
                if (pdata.sick_flag == 'Y') {
                    _this.presciptionForm.controls['sickdaysCtrl'].enable();
                }
                var accidental_approval = pdata.accidental_approval == 1 ? true : false;
                var keepObserv = pdata.keep_in_observation == 1 ? true : false;
                var isAdmit = pdata.keep_in_observation == 0 ? true : false;
                var isreferal = pdata.hospital_rec_flag == 1 ? true : false;
                if (isreferal) {
                    _this.presciptionForm.controls['reffHospitalCtrl'].enable();
                }
                _this.presciptionForm.patchValue({
                    finalsummryCtrl: pdata.comments,
                    sickCtrl: sickCtrlStatus,
                    sickdaysCtrl: pdata.no_of_days_sick,
                    approvalCtrl: accidental_approval,
                    observCtrl: keepObserv,
                    admitCtrl: isAdmit,
                    isReffHospital: isreferal
                });
                var count1 = Object.keys(symptomlist).length;
                if (count1 > 0) {
                    var resultObj1 = void 0;
                    for (var i = 0; i < count1; i++) {
                        resultObj1 = {
                            'name': symptomlist[i].symptom,
                            'id': symptomlist[i].symptom_id
                        };
                        _this.symptoms.push(resultObj1);
                    }
                    _this.presciptionForm.get("symptomsMultiCtrl").setValue(_this.symptoms);
                }
                var count2 = Object.keys(diagnosislist).length;
                if (count2 > 0) {
                    var resultObj2 = void 0;
                    for (var i = 0; i < count2; i++) {
                        resultObj2 = {
                            'name': diagnosislist[i].diagonosis_name,
                            'id': diagnosislist[i].diagonosis_id
                        };
                        _this.diagnosis.push(resultObj2);
                    }
                    _this.filteredDiagnosisMulti.next(_this.diagnosis.slice());
                    _this.presciptionForm.get("diagnosisMultiCtrl").setValue(_this.diagnosis);
                    var medicinObj = {
                        "value": _this.diagnosis
                    };
                    _this.getMedicine(medicinObj);
                }
                var count3 = Object.keys(medicinedata).length;
                if (count3 > 0) {
                    var resultObj3_medicine = void 0;
                    var resultObj4_dosage = void 0;
                    var resultObj5_frequency = void 0;
                    for (var i = 0; i < count3; i++) {
                        resultObj3_medicine = {
                            'id': medicinedata[i].medicine_id,
                            'name': medicinedata[i].medicine_name,
                            'type': ''
                        };
                        resultObj4_dosage = {
                            'id': medicinedata[i].dose_id,
                            'value': medicinedata[i].value
                        };
                        resultObj5_frequency = {
                            'id': medicinedata[i].dose_id,
                            'frequency': medicinedata[i].frequency_name
                        };
                        var forDays = medicinedata[i].number_of_days_sick_leave;
                        var data_1 = { medicinetd: resultObj3_medicine, dosagetd: resultObj4_dosage, unittd: resultObj5_frequency, daystd: forDays, actiontd: 'x' };
                        _this.addedMeddata.push(data_1);
                    }
                }
                var count4 = Object.keys(reportdata).length;
                if (count4 > 0) {
                    var resultObj6_Reports = void 0;
                    for (var i = 0; i < count4; i++) {
                        resultObj6_Reports = {
                            'id': reportdata[i].test_id,
                            'name': reportdata[i].investigation_name
                        };
                        var reportdate = reportdata[i].date;
                        var data_2 = { invdate: reportdate, reports: resultObj6_Reports, action: 'x' };
                        _this.addedInvestigations.push(data_2);
                    }
                }
                var referalHosp_Obj = {
                    "id": pdata.referal_hospital_id,
                    "name": pdata.hospital_name
                };
                _this.refferHospitals.push(referalHosp_Obj);
                _this.presciptionForm.get("reffHospitalCtrl").setValue(_this.refferHospitals[0]);
                /*
                let data = {medicinetd:'fd', dosagetd:"dgf", unittd: 4 , daystd:15 , actiontd: 'x' };
                th is.addedMeddata.push(data);
                */
            }
            else {
            }
        }, function (error) {
            console.log("There is some error on submitting...");
        });
    };
    OpdpreprationComponent.prototype.validateRecomChkBox = function (event, tag) {
        if (tag == "ADMIT") {
            this.presciptionForm.patchValue({
                observCtrl: false
            });
        }
        if (tag == "OBSERVATION") {
            this.presciptionForm.patchValue({
                admitCtrl: false
            });
        }
    };
    OpdpreprationComponent.prototype.enableSickDay = function (event) {
        if (event.checked) {
            this.presciptionForm.controls['sickdaysCtrl'].enable();
        }
        else {
            this.presciptionForm.patchValue({
                sickdaysCtrl: ''
            });
            this.presciptionForm.controls['sickdaysCtrl'].disable();
        }
    };
    OpdpreprationComponent.prototype.enableReffHospital = function (event) {
        if (event.checked) {
            this.presciptionForm.controls['reffHospitalCtrl'].enable();
        }
        else {
            this.presciptionForm.patchValue({
                reffHospitalCtrl: ''
            });
            this.presciptionForm.controls['reffHospitalCtrl'].disable();
        }
    };
    OpdpreprationComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    OpdpreprationComponent.prototype.filterSymptomsMulti = function () {
        if (!this.symptoms) {
            return;
        }
        // get the search keyword
        var search = this.presciptionForm.get('symptomsMultiFilterCtrl').value;
        if (!search) {
            this.filteredSymptomMulti.next(this.symptoms.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredSymptomMulti.next(this.symptoms.filter(function (symptom) { return symptom.name.toLowerCase().indexOf(search) > -1; }));
    };
    OpdpreprationComponent.prototype.filterDiagnosisMulti = function () {
        if (!this.diagnosis) {
            return;
        }
        // get the search keyword
        var search = this.presciptionForm.get('diagnosisMultiFilterCtrl').value;
        if (!search) {
            this.filteredDiagnosisMulti.next(this.diagnosis.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredDiagnosisMulti.next(this.diagnosis.filter(function (diagnos) { return diagnos.name.toLowerCase().indexOf(search) > -1; }));
    };
    OpdpreprationComponent.prototype.filterMedicines = function () {
        if (!this.medicines) {
            return;
        }
        // get the search keyword
        var search = this.presciptionForm.get('medicineFilterCtrl').value;
        if (!search) {
            this.filteredMedicines.next(this.medicines.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredMedicines.next(this.medicines.filter(function (medicine) { return medicine.name.toLowerCase().indexOf(search) > -1; }));
    };
    OpdpreprationComponent.prototype.filterDosage = function () {
        if (!this.dosages) {
            return;
        }
        // get the search keyword
        var search = this.presciptionForm.get('dosageFilterCtrl').value;
        if (!search) {
            this.filteredDosages.next(this.dosages.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredDosages.next(this.dosages.filter(function (dosages) { return dosages.value.toLowerCase().indexOf(search) > -1; }));
    };
    OpdpreprationComponent.prototype.filterInstruction = function () {
        if (!this.frequency) {
            return;
        }
        // get the search keyword
        var search = this.presciptionForm.get('instructionFilterCtrl').value;
        if (!search) {
            this.filteredInstruction.next(this.frequency.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredInstruction.next(this.frequency.filter(function (frequency) { return frequency.frequency.toLowerCase().indexOf(search) > -1; }));
    };
    OpdpreprationComponent.prototype.filterMedReports = function () {
        if (!this.medreports) {
            return;
        }
        // get the search keyword
        var search = this.presciptionForm.get('reportsFilterCtrl').value;
        if (!search) {
            this.filteredReports.next(this.medreports.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredReports.next(this.medreports.filter(function (medreport) { return medreport.name.toLowerCase().indexOf(search) > -1; }));
    };
    OpdpreprationComponent.prototype.filterHospital = function () {
        if (!this.refferHospitals) {
            return;
        }
        // get the search keyword
        var search = this.presciptionForm.get('reffHospitalFilterCtrl').value;
        if (!search) {
            this.filteredHospitals.next(this.refferHospitals.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredHospitals.next(this.refferHospitals.filter(function (reffhospital) { return reffhospital.name.toLowerCase().indexOf(search) > -1; }));
    };
    OpdpreprationComponent.prototype.addMedicine = function () {
        this.medicineError = "";
        //let date = this.presciptionForm.get('date').value;
        var medicine = this.presciptionForm.get('medicineCtrl').value;
        var dosage = this.presciptionForm.get('dosageCtrl').value;
        var frequency = this.presciptionForm.get('instructionCtrl').value;
        var days = this.presciptionForm.get('daysCtrl').value;
        if (medicine == "") {
            this.medicineError = "Error : Select Medicine";
        }
        else {
            //let data = {datetd: date, medicinetd:medicine, dosagetd:dosage, unittd: frequency , daystd:days , actiontd: 'x' };
            var data = { medicinetd: medicine, dosagetd: dosage, unittd: frequency, daystd: days, actiontd: 'x' };
            this.addedMeddata.push(data);
            this.presciptionForm.patchValue({
                medicineCtrl: '',
                dosageCtrl: '',
                instructionCtrl: '',
                daysCtrl: ''
            });
        }
    };
    OpdpreprationComponent.prototype.addInvestigation = function () {
        this.testReportError = "";
        var date = this.presciptionForm.get('investigationDt').value;
        var report = this.presciptionForm.get('reportsCtrl').value;
        if (report == "") {
            this.testReportError = "Error : Select at least one test";
        }
        else {
            var data = { invdate: date, reports: report, action: 'x' };
            this.addedInvestigations.push(data);
            this.presciptionForm.patchValue({
                reportsCtrl: ''
            });
        }
    };
    OpdpreprationComponent.prototype.removeData = function (i) {
        this.addedMeddata.splice(i, 1);
    };
    OpdpreprationComponent.prototype.removeMedReports = function (i) {
        this.addedInvestigations.splice(i, 1);
    };
    OpdpreprationComponent.prototype.onSubmit = function () {
        /*console.log(this.presciptionForm.value);
        console.log(this.addedMeddata);
        console.log(this.addedInvestigations);
        console.log(this.presciptionHealthForm.value);*/
        var _this = this;
        if (this.validatePresciptionForm()) {
            this.sendPhrmcyBtnActive = false;
            var response_1;
            this.symptomdiseaseService.insertToOPD(this.presciptionHealthForm.value, this.presciptionForm.value, this.addedMeddata, this.addedInvestigations).then(function (data) {
                response_1 = data;
                _this.sendPhrmcyBtnActive = true;
                if (response_1.msg_status == 200) {
                    _this.openDialog();
                    localStorage.removeItem("tpcd");
                    localStorage.removeItem("regid");
                }
                else {
                }
            }, function (error) {
                console.log("There is some error on submitting...");
            });
        }
    };
    OpdpreprationComponent.prototype.validatePresciptionForm = function () {
        this.validFormErr = "";
        var validForm = false;
        if (this.presciptionForm.controls['sickCtrl'].value && this.presciptionForm.controls['sickdaysCtrl'].value <= 0) {
            this.validFormErr = "Error : Sick Days must be greater than 0";
            validForm = false;
        }
        validForm = true;
        return validForm;
    };
    OpdpreprationComponent.prototype.resetPresForm = function () {
        // this.presciptionForm.reset();
        this.presciptionForm.patchValue({
            symptomsMultiCtrl: '',
            symptomsMultiFilterCtrl: '',
            diagnosisMultiCtrl: '',
            diagnosisMultiFilterCtrl: '',
            //  date: new Date().toISOString(),
            medicineCtrl: '',
            medicineFilterCtrl: '',
            dosageCtrl: '',
            dosageFilterCtrl: '',
            instructionCtrl: '',
            instructionFilterCtrl: '',
            investigationDt: new Date().toISOString(),
            reportsCtrl: '',
            reportsFilterCtrl: '',
            daysCtrl: '',
            finalsummryCtrl: '',
            sickCtrl: '',
            sickdaysCtrl: '',
            approvalCtrl: '',
            admitCtrl: '',
            observCtrl: '',
            isReffHospital: '',
            reffHospitalCtrl: '',
            reffHospitalFilterCtrl: ''
        });
        this.addedMeddata = [];
        this.addedInvestigations = [];
    };
    OpdpreprationComponent.prototype.clearFormValidErr = function (event) {
        this.validFormErr = "";
    };
    OpdpreprationComponent.prototype.getIvestigations = function () {
        var _this = this;
        var dataval;
        var reportlist;
        this.symptomdiseaseService.getInvestigations().then(function (data) {
            dataval = data;
            reportlist = dataval.result;
            var count = Object.keys(dataval.result).length;
            var resultObj;
            for (var i = 0; i < count; i++) {
                resultObj = {
                    'name': dataval.result[i].investigation_name,
                    'id': dataval.result[i].investigation_id
                };
                _this.medreports.push(resultObj);
            }
            _this.filteredReports.next(_this.medreports.slice());
        }, function (error) {
            console.log("There is some error in Investigation List...");
        });
    };
    OpdpreprationComponent.prototype.getHospitals = function () {
        var _this = this;
        var dataval;
        var hospitallist;
        this.commonService.getHospitals().then(function (data) {
            dataval = data;
            hospitallist = dataval.result;
            var count = Object.keys(dataval.result).length;
            var resultObj;
            for (var i = 0; i < count; i++) {
                resultObj = {
                    'name': dataval.result[i].hospital_name,
                    'id': dataval.result[i].hospital_id
                };
                _this.refferHospitals.push(resultObj);
            }
            _this.filteredHospitals.next(_this.refferHospitals.slice());
        }, function (error) {
            console.log("There is some error in Investigation List...");
        });
    };
    OpdpreprationComponent.prototype.getSymptoms = function () {
        var _this = this;
        var dataval;
        var symptomlist;
        this.symptomdiseaseService.getSymptoms().then(function (data) {
            dataval = data;
            symptomlist = dataval.result;
            var count = Object.keys(dataval.result).length;
            var resultObj;
            for (var i = 0; i < count; i++) {
                resultObj = {
                    'name': dataval.result[i].symptom,
                    'id': dataval.result[i].symptom_id
                };
                _this.symptoms.push(resultObj);
            }
            _this.filteredSymptomMulti.next(_this.symptoms.slice());
            //this.presciptionForm.get("symptomsMultiCtrl").setValue([this.symptoms[0],this.symptoms[1]]);
        }, function (error) {
            console.log("There is some error in Relation List...");
        });
    };
    OpdpreprationComponent.prototype.getDiseaseList = function (obj) {
        var _this = this;
        var dataval;
        var diagnosislist;
        this.diagnosis = [];
        this.symptomdiseaseService.getDiseasesBySymptom(obj.value).then(function (data) {
            dataval = data;
            diagnosislist = dataval.result;
            var count = Object.keys(dataval.result).length;
            var resultObj;
            for (var i = 0; i < count; i++) {
                resultObj = {
                    'name': dataval.result[i].diagonosis_name,
                    'id': dataval.result[i].diagonosis_id
                };
                _this.diagnosis.push(resultObj);
            }
            _this.filteredDiagnosisMulti.next(_this.diagnosis.slice());
            _this.presciptionForm.get('diagnosisMultiFilterCtrl').valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._onDestroy))
                .subscribe(function () {
                _this.filterDiagnosisMulti();
            });
        }, function (error) {
            console.log("There is some error in Diagnosis List...");
        });
    };
    OpdpreprationComponent.prototype.getMedicine = function (obj) {
        var _this = this;
        var dataval;
        var medicinelist;
        this.medicines = [];
        this.symptomdiseaseService.getMedicineByDisease(obj.value).then(function (data) {
            dataval = data;
            medicinelist = dataval.result;
            var count = Object.keys(dataval.result).length;
            var resultObj;
            for (var i = 0; i < count; i++) {
                resultObj = {
                    'name': dataval.result[i].medicine_name,
                    'id': dataval.result[i].medicine_id,
                    'type': dataval.result[i].medicine_type
                };
                _this.medicines.push(resultObj);
            }
            _this.filteredMedicines.next(_this.medicines.slice());
            _this.presciptionForm.get('medicineFilterCtrl').valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._onDestroy))
                .subscribe(function () {
                _this.filterMedicines();
            });
        }, function (error) {
            console.log("There is some error in Medicine List...");
        });
    };
    OpdpreprationComponent.prototype.clearTestError = function (obj) {
        this.testReportError = "";
    };
    OpdpreprationComponent.prototype.getOtherDependent = function (obj) {
        this.medicineError = "";
        this.getDosage(obj);
        this.getFrequency(obj);
    };
    OpdpreprationComponent.prototype.getDosage = function (obj) {
        var _this = this;
        var dataval;
        var dosagelist;
        this.dosages = [];
        this.symptomdiseaseService.getDosageByMedicine(obj.value).then(function (data) {
            dataval = data;
            dosagelist = dataval.result;
            var count = Object.keys(dataval.result).length;
            var resultObj;
            for (var i = 0; i < count; i++) {
                resultObj = {
                    'id': dataval.result[i].dosage_id,
                    'value': dataval.result[i].value
                };
                _this.dosages.push(resultObj);
            }
            _this.filteredDosages.next(_this.dosages.slice());
            _this.presciptionForm.get('dosageFilterCtrl').valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._onDestroy))
                .subscribe(function () {
                _this.filterDosage();
            });
        }, function (error) {
            console.log("There is some error in Dosage List...");
        });
    };
    OpdpreprationComponent.prototype.getFrequency = function (obj) {
        var _this = this;
        var dataval;
        var frequencylist;
        this.frequency = [];
        this.symptomdiseaseService.getFrequencyByMedicine(obj.value).then(function (data) {
            dataval = data;
            frequencylist = dataval.result;
            var count = Object.keys(dataval.result).length;
            var resultObj;
            for (var i = 0; i < count; i++) {
                resultObj = {
                    'id': dataval.result[i].frequency_master_id,
                    'frequency': dataval.result[i].frequency
                };
                _this.frequency.push(resultObj);
            }
            _this.filteredInstruction.next(_this.frequency.slice());
            _this.presciptionForm.get('instructionFilterCtrl').valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._onDestroy))
                .subscribe(function () {
                _this.filterInstruction();
            });
        }, function (error) {
            console.log("There is some error in Frequency List...");
        });
    };
    OpdpreprationComponent.prototype.gotoList = function () {
        this.router.navigateByUrl('panel/todaysreg');
    };
    OpdpreprationComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_components_successdialog_successdialog_component__WEBPACK_IMPORTED_MODULE_10__["SuccessdialogComponent"], {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('singleSelect'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelect"])
    ], OpdpreprationComponent.prototype, "singleSelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('multiSelect'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelect"])
    ], OpdpreprationComponent.prototype, "multiSelect", void 0);
    OpdpreprationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-opdprepration',
            template: __webpack_require__(/*! ./opdprepration.component.html */ "./src/app/layout/opdprepration/opdprepration.component.html"),
            styles: [__webpack_require__(/*! ./opdprepration.component.css */ "./src/app/layout/opdprepration/opdprepration.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _service_symptomdisease_service__WEBPACK_IMPORTED_MODULE_5__["SymptomdiseaseService"], _service_datashare_service__WEBPACK_IMPORTED_MODULE_7__["DatashareService"], _service_patient_service__WEBPACK_IMPORTED_MODULE_8__["PatientService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], OpdpreprationComponent);
    return OpdpreprationComponent;
}());



/***/ }),

/***/ "./src/app/layout/opdprepration/opdprepration.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/opdprepration/opdprepration.module.ts ***!
  \**************************************************************/
/*! exports provided: OpdpreprationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpdpreprationModule", function() { return OpdpreprationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _opdprepration_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./opdprepration-routing.module */ "./src/app/layout/opdprepration/opdprepration-routing.module.ts");
/* harmony import */ var _opdprepration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./opdprepration.component */ "./src/app/layout/opdprepration/opdprepration.component.ts");
/* harmony import */ var _components_successdialog_successdialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/successdialog/successdialog.component */ "./src/app/layout/components/successdialog/successdialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var OpdpreprationModule = /** @class */ (function () {
    function OpdpreprationModule() {
    }
    OpdpreprationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _opdprepration_routing_module__WEBPACK_IMPORTED_MODULE_4__["OpdpreprationRoutingModule"],
                _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_2__["AppMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            declarations: [_opdprepration_component__WEBPACK_IMPORTED_MODULE_5__["OpdpreprationComponent"], _components_successdialog_successdialog_component__WEBPACK_IMPORTED_MODULE_6__["SuccessdialogComponent"]],
            entryComponents: [_components_successdialog_successdialog_component__WEBPACK_IMPORTED_MODULE_6__["SuccessdialogComponent"]]
        })
    ], OpdpreprationModule);
    return OpdpreprationModule;
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
//# sourceMappingURL=opdprepration-opdprepration-module.js.map