(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todaysregistration-todaysregistration-module"],{

/***/ "./src/app/layout/todaysregistration/todaysregistration-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/todaysregistration/todaysregistration-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: TodaysregistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodaysregistrationRoutingModule", function() { return TodaysregistrationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todaysregistration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todaysregistration.component */ "./src/app/layout/todaysregistration/todaysregistration.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _todaysregistration_component__WEBPACK_IMPORTED_MODULE_2__["TodaysregistrationComponent"]
    }
];
var TodaysregistrationRoutingModule = /** @class */ (function () {
    function TodaysregistrationRoutingModule() {
    }
    TodaysregistrationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TodaysregistrationRoutingModule);
    return TodaysregistrationRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/todaysregistration/todaysregistration.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/layout/todaysregistration/todaysregistration.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".patientsearchTabs .mat-icon {\r\n    padding-right: 5px;\r\n}\r\n\r\n.mat-header-cell {\r\n    color: rgb(3, 14, 41);\r\n    letter-spacing: 1px;\r\n}\r\n\r\ntr.mat-header-row {\r\n    background: #f9f9f9;\r\n    font-weight: 700;\r\n}\r\n\r\n.mat-cell {\r\n    font-size: 12px;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n/*\r\nmat-footer-row,\r\nmat-header-row,\r\nmat-row,\r\ntd.mat-cell,\r\ntd.mat-footer-cell,\r\nth.mat-header-cell {\r\n border-bottom-color: #DCE4F8; \r\n}\r\n\r\n.reglisttable {\r\n    border: 1px solid #DCE4F8;\r\n}\r\n*/\r\n\r\n.reglisttables , .visitedtables {\r\n    margin-top: 0.5%;\r\n}\r\n\r\n.reglisttable a {\r\n    border-radius: 100px;\r\n    font-size: 12px;\r\n    letter-spacing: 2px;\r\n}\r\n\r\n.mat-tab-labels { \r\n    background: #1f6fc9 !important;\r\n    font-size: 12px;\r\n    letter-spacing: 1px;\r\n    opacity: 1;\r\n}\r\n\r\n.mat-tab-label-active{\r\n    background-color: #085287;\r\n    opacity: 1 !important;\r\n  }\r\n\r\n.mat-tab-label .mat-tab-label-content {\r\n    color: #FFF;\r\n    font-size: 12px;\r\n}\r\n\r\n.norecord h2{\r\n    letter-spacing: 2px;\r\n    font-weight: 400;\r\n}\r\n\r\n.card_title{\r\n    font-weight: 400;\r\n    letter-spacing: 2px;\r\n    font-family: Roboto;\r\n    font-size: 1.2rem;\r\n    margin:4px;\r\n  }\r\n\r\n.mat-expansion-panel-header {\r\n    font-size: 13px;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.customeBtn{\r\n    border: 0;\r\n    background: #0e58c8;\r\n    padding: 6px 17px;\r\n    border-radius: 14px;\r\n    color: #FFF;\r\n}\r\n\r\n.cutomTbl{\r\n    border: 1px solid #efefef;\r\n    border-bottom: 0px;\r\n}\r\n\r\n.cutomTbl tr th {\r\n    padding: 8px 10px;\r\n    text-align: left;\r\n    border-bottom: 1px solid #dfe0e0;\r\n    font-weight: 500;\r\n    background: #f2f2f2;\r\n    font-size: 0.75rem;\r\n    height: 40px;\r\n   \r\n}\r\n\r\n.cutomTbl tr td {\r\n    padding: 8px 10px;\r\n    text-align: left;\r\n    border-bottom: 1px solid #dfe0e0;\r\n    color: black;\r\n    font-size: 0.75rem;\r\n}\r\n\r\n.custombadge{\r\n    float: right;\r\n    font-weight: 500;\r\n    border-radius: 2px;\r\n    width: 20px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    text-align: center;\r\n    color: #FFF;\r\n    text-align: center;\r\n    \r\n}"

/***/ }),

/***/ "./src/app/layout/todaysregistration/todaysregistration.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/todaysregistration/todaysregistration.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wraper-container\">\r\n    <div class=\"search-container\">\r\n\r\n\r\n    \r\n        <div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"1.5%\" fxLayoutAlign=\"center\">\r\n\r\n           \r\n\r\n\r\n            <div class=\"patientsearchTabs\" fxFlex=\"90%\">\r\n                    <mat-toolbar style=\"background: transparent;\"> \r\n                            <h4 class=\"card_title\"> Today's Registration</h4>\r\n                    </mat-toolbar>\r\n                    <mat-card>\r\n                        <button mat-raised-button color=\"primary\" class=\"customeBtn\" (click)=gotoSickLeaveApprovalList()>\r\n                            Sick leave approval\r\n                        </button>\r\n                    </mat-card>\r\n                    \r\n\r\n                <mat-tab-group (selectedTabChange)=\"tabChanged($event)\">\r\n                    <mat-tab>\r\n                        <ng-template mat-tab-label>\r\n                            <mat-icon>how_to_reg</mat-icon>\r\n                            <span matBadge=\"{{allcount}}\" matBadgeOverlap=\"false\" matBadgeColor=\"warn\"> All</span>\r\n                        </ng-template>\r\n\r\n                        \r\n                    </mat-tab>\r\n\r\n                    <mat-tab (click)=\"getTodaysReg()\">\r\n                        <ng-template mat-tab-label>\r\n                            <mat-icon class=\"example-tab-icon\">insert_chart</mat-icon>\r\n                            <span matBadge=\"{{pwcount}}\" matBadgeOverlap=\"false\" matBadgeColor=\"warn\"> Permanent Worker</span>\r\n                        </ng-template>\r\n                        \r\n                    </mat-tab>\r\n\r\n                    <mat-tab (click)=\"getTodaysReg()\">\r\n                        <ng-template mat-tab-label>\r\n                            <mat-icon class=\"example-tab-icon\">nature_people</mat-icon>\r\n                            <span matBadge=\"{{twcount}}\" matBadgeOverlap=\"false\" matBadgeColor=\"warn\"> Temporary Worker</span>\r\n                        </ng-template>\r\n                        \r\n                       \r\n                    </mat-tab>\r\n                    <mat-tab (click)=\"getTodaysReg()\">\r\n                        <ng-template mat-tab-label>\r\n                            <mat-icon class=\"example-tab-icon\">transfer_within_a_station</mat-icon>\r\n                            <span matBadge=\"{{depcount}}\" matBadgeOverlap=\"false\" matBadgeColor=\"warn\"> Dependent</span>\r\n                        </ng-template>\r\n                        \r\n                        \r\n                    </mat-tab>\r\n                    <mat-tab (click)=\"getTodaysReg()\">\r\n                        <ng-template mat-tab-label>\r\n                            <mat-icon class=\"example-tab-icon\">streetview</mat-icon>\r\n                            <span matBadge=\"{{nwcount}}\" matBadgeOverlap=\"false\" matBadgeColor=\"warn\"> Non-Worker</span>\r\n                        </ng-template>\r\n                        \r\n                       \r\n                    </mat-tab>\r\n\r\n                    <mat-tab (click)=\"getTodaysReg()\">\r\n                        <ng-template mat-tab-label>\r\n                            <mat-icon class=\"example-tab-icon\">visibility</mat-icon>\r\n                            Attended\r\n                        </ng-template>\r\n\r\n\r\n                    </mat-tab>\r\n                </mat-tab-group>\r\n\r\n\r\n                <div class=\"reglisttables\" *ngIf=\"openReglistBlock\">\r\n                        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 reglisttable\" style=\"width: 100%;\" *ngIf=\"recordsFound\">\r\n    \r\n                                <ng-container matColumnDef=\"action\">\r\n                                    <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                                    <td mat-cell *matCellDef=\"let row\">\r\n                                        <a mat-raised-button color=\"warn\" (click)=\"getPresciption(row)\" *ngIf=\"isButtonActive\">\r\n                                            <mat-icon>enhanced_encryption</mat-icon>\r\n                                            Open\r\n                                        </a>\r\n                                        <mat-spinner [diameter]=\"25\"  *ngIf=\"!isButtonActive\"></mat-spinner>\r\n                                    </td>\r\n                                </ng-container>\r\n            \r\n                                <ng-container matColumnDef=\"patient_code\">\r\n                                    <th mat-header-cell *matHeaderCellDef> Patient ID </th>\r\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.patient_code}} </td>\r\n                                </ng-container>\r\n            \r\n                                <ng-container matColumnDef=\"patient_name\">\r\n                                    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.patient_name}} </td>\r\n                                </ng-container>\r\n            \r\n                                <ng-container matColumnDef=\"birthdate\">\r\n                                    <th mat-header-cell *matHeaderCellDef> DOB </th>\r\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.birthdate}} </td>\r\n                                </ng-container>\r\n            \r\n                                <ng-container matColumnDef=\"gender\">\r\n                                    <th mat-header-cell *matHeaderCellDef> Gender </th>\r\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.gender}} </td>\r\n                                </ng-container>\r\n            \r\n                                <ng-container matColumnDef=\"division_number\">\r\n                                    <th mat-header-cell *matHeaderCellDef> Division No </th>\r\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.division_number}} </td>\r\n                                </ng-container>\r\n            \r\n                                <ng-container matColumnDef=\"challan_number\">\r\n                                    <th mat-header-cell *matHeaderCellDef> Challan No</th>\r\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.challan_number}} </td>\r\n                                </ng-container>\r\n            \r\n                                <ng-container matColumnDef=\"line_number\">\r\n                                    <th mat-header-cell *matHeaderCellDef> Line No </th>\r\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.line_number}} </td>\r\n                                </ng-container>\r\n            \r\n                                <ng-container matColumnDef=\"mobile_one\">\r\n                                    <th mat-header-cell *matHeaderCellDef> Mobile </th>\r\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.mobile_one}} </td>\r\n                                </ng-container>\r\n            \r\n                                <ng-container matColumnDef=\"adhar\">\r\n                                    <th mat-header-cell *matHeaderCellDef> Aadhar </th>\r\n                                    <td mat-cell *matCellDef=\"let row\"> {{row.adhar}} </td>\r\n                                </ng-container>\r\n            \r\n                                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                            </table>\r\n\r\n\r\n                            <mat-toolbar class=\"norecord\" *ngIf=\"!recordsFound\">\r\n                                <h2>No Records found for today</h2>\r\n                            </mat-toolbar>\r\n    \r\n                </div><!-- Reg List Tables-->\r\n                <div class=\"visitedtables\"  *ngIf=\"!openReglistBlock\">\r\n                    \r\n                        <mat-accordion class=\"example-headers-align\">\r\n                                <mat-expansion-panel  (opened)=\"setStep(0)\" hideToggle (click)=\"firstTab(1)\">\r\n                                  <mat-expansion-panel-header>\r\n                                    <mat-panel-title>\r\n                                        <mat-icon>how_to_reg</mat-icon> All \r\n                                      \r\n                                    </mat-panel-title>\r\n                                    <div class=\"custombadge\" style=\"background: #142ba8;\">{{allcountVisited}}</div>\r\n                                  </mat-expansion-panel-header>\r\n                              \r\n                                 \r\n                                    <table style=\"width:98%;\" class=\"cutomTbl\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">\r\n                                        <tr>\r\n                                            <th>Patient ID</th>\r\n                                            <th>Name</th>\r\n                                            <th>DOB</th>\r\n                                            <th>Gender</th>\r\n                                            <th>Division </th>\r\n                                            <th>Challan </th>\r\n                                            <th>Line </th>\r\n                                            <th>Mobile </th>\r\n                                            <th>Aadhar </th>\r\n                                            <th>Status </th>\r\n                                        </tr>\r\n\r\n                                        <tr *ngFor=\"let allregVisited of todaysregistrationList[0]; let i = index \">\r\n                                            <td>{{allregVisited.patient_code}}</td>\r\n                                            <td>{{allregVisited.patient_name}}</td>\r\n                                            <td>{{allregVisited.birthdate}}</td>\r\n                                            <td>{{allregVisited.gender}}</td>\r\n                                            <td>{{allregVisited.division_number}}</td>\r\n                                            <td>{{allregVisited.challan_number}}</td>\r\n                                            <td>{{allregVisited.line_number}}</td>\r\n                                            <td>{{allregVisited.mobile_one}}</td>\r\n                                            <td>{{allregVisited.adhar}}</td>\r\n                                            <td>\r\n                                                <button mat-mini-fab>\r\n                                                    <mat-icon>done</mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n                                          \r\n                                        </tr>\r\n                                    </table>\r\n    \r\n                                </mat-expansion-panel> <!--end of 1-->\r\n                              \r\n                                <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\r\n                                  <mat-expansion-panel-header>\r\n                                    <mat-panel-title>\r\n                                            <mat-icon class=\"example-tab-icon\">insert_chart</mat-icon>\r\n                                             Permanent Worker\r\n                                    </mat-panel-title>\r\n                                    <div class=\"custombadge\" style=\"background: #2f47c8;\">{{pwcountVisited}}</div>\r\n                                  </mat-expansion-panel-header>\r\n                                  <table style=\"width:98%;\" class=\"cutomTbl\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">\r\n                                        <tr>\r\n                                            <th>Patient ID</th>\r\n                                            <th>Name</th>\r\n                                            <th>DOB</th>\r\n                                            <th>Gender</th>\r\n                                            <th>Division </th>\r\n                                            <th>Challan </th>\r\n                                            <th>Line </th>\r\n                                            <th>Mobile </th>\r\n                                            <th>Aadhar </th>\r\n                                            <th>Status </th>\r\n                                        </tr>\r\n\r\n                                        <tr *ngFor=\"let permVisited of todaysregistrationList[0];  \">\r\n                                            <td>{{permVisited.patient_code}}</td>\r\n                                            <td>{{permVisited.patient_name}}</td>\r\n                                            <td>{{permVisited.birthdate}}</td>\r\n                                            <td>{{permVisited.gender}}</td>\r\n                                            <td>{{permVisited.division_number}}</td>\r\n                                            <td>{{permVisited.challan_number}}</td>\r\n                                            <td>{{permVisited.line_number}}</td>\r\n                                            <td>{{permVisited.mobile_one}}</td>\r\n                                            <td>{{permVisited.adhar}}</td>\r\n                                            <td>\r\n                                                <button mat-mini-fab>\r\n                                                    <mat-icon>done</mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n                                          \r\n                                        </tr>\r\n                                    </table>\r\n    \r\n                                </mat-expansion-panel>\r\n                              \r\n                                <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\r\n                                  <mat-expansion-panel-header>\r\n                                    <mat-panel-title>\r\n                                            <mat-icon class=\"example-tab-icon\">nature_people</mat-icon>\r\n                                            Temporary Worker\r\n                                    </mat-panel-title>\r\n                                    <div class=\"custombadge\" style=\"background: #4960da;\">{{twcountVisited}}</div>\r\n                                  </mat-expansion-panel-header>\r\n                              \r\n                                  <table style=\"width:98%;\" class=\"cutomTbl\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">\r\n                                        <tr>\r\n                                            <th>Patient ID</th>\r\n                                            <th>Name</th>\r\n                                            <th>DOB</th>\r\n                                            <th>Gender</th>\r\n                                            <th>Division </th>\r\n                                            <th>Challan </th>\r\n                                            <th>Line </th>\r\n                                            <th>Mobile </th>\r\n                                            <th>Aadhar </th>\r\n                                            <th>Status </th>\r\n                                        </tr>\r\n\r\n                                        <tr *ngFor=\"let tempVisited of todaysregistrationList[0];  \">\r\n                                            <td>{{tempVisited.patient_code}}</td>\r\n                                            <td>{{tempVisited.patient_name}}</td>\r\n                                            <td>{{tempVisited.birthdate}}</td>\r\n                                            <td>{{tempVisited.gender}}</td>\r\n                                            <td>{{tempVisited.division_number}}</td>\r\n                                            <td>{{tempVisited.challan_number}}</td>\r\n                                            <td>{{tempVisited.line_number}}</td>\r\n                                            <td>{{tempVisited.mobile_one}}</td>\r\n                                            <td>{{tempVisited.adhar}}</td>\r\n                                            <td>\r\n                                                <button mat-mini-fab>\r\n                                                    <mat-icon>done</mat-icon>\r\n                                                </button>\r\n                                            </td>\r\n                                          \r\n                                        </tr>\r\n                                    </table>\r\n\r\n                                </mat-expansion-panel>\r\n    \r\n                                <mat-expansion-panel [expanded]=\"step === 3\" (opened)=\"setStep(3)\" hideToggle>\r\n                                        <mat-expansion-panel-header>\r\n                                          <mat-panel-title>\r\n                                                  <mat-icon class=\"example-tab-icon\">nature_people</mat-icon>\r\n                                                  Dependent\r\n                                          </mat-panel-title>\r\n                                          <div class=\"custombadge\" style=\"background: #647aef;\">{{depcountVisited}}</div>\r\n                                        </mat-expansion-panel-header>\r\n                                    \r\n                                        \r\n                                        <table style=\"width:98%;\" class=\"cutomTbl\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">\r\n                                                <tr>\r\n                                                    <th>Patient ID</th>\r\n                                                    <th>Name</th>\r\n                                                    <th>DOB</th>\r\n                                                    <th>Gender</th>\r\n                                                    <th>Division </th>\r\n                                                    <th>Challan </th>\r\n                                                    <th>Line </th>\r\n                                                    <th>Mobile </th>\r\n                                                    <th>Aadhar </th>\r\n                                                    <th>Status </th>\r\n                                                </tr>\r\n        \r\n                                                <tr *ngFor=\"let dependVisited of todaysregistrationList[0];  \">\r\n                                                    <td>{{dependVisited.patient_code}}</td>\r\n                                                    <td>{{dependVisited.patient_name}}</td>\r\n                                                    <td>{{dependVisited.birthdate}}</td>\r\n                                                    <td>{{dependVisited.gender}}</td>\r\n                                                    <td>{{dependVisited.division_number}}</td>\r\n                                                    <td>{{dependVisited.challan_number}}</td>\r\n                                                    <td>{{dependVisited.line_number}}</td>\r\n                                                    <td>{{dependVisited.mobile_one}}</td>\r\n                                                    <td>{{dependVisited.adhar}}</td>\r\n                                                    <td>\r\n                                                        <button mat-mini-fab>\r\n                                                            <mat-icon>done</mat-icon>\r\n                                                        </button>\r\n                                                    </td>\r\n                                                  \r\n                                                </tr>\r\n                                            </table>\r\n\r\n                                      </mat-expansion-panel>\r\n    \r\n                                <mat-expansion-panel [expanded]=\"step === 4\" (opened)=\"setStep(4)\" hideToggle>\r\n                                    <mat-expansion-panel-header>\r\n                                        <mat-panel-title>\r\n                                                      <mat-icon class=\"example-tab-icon\">nature_people</mat-icon>\r\n                                                      Non-Worker\r\n                                        </mat-panel-title>\r\n                                        <div class=\"custombadge\" style=\"background: #8c9bec;\">{{nwcountVisited}}</div>\r\n                                    </mat-expansion-panel-header>\r\n                                        \r\n                                    <table style=\"width:98%;\" class=\"cutomTbl\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">\r\n                                            <tr>\r\n                                                <th>Patient ID</th>\r\n                                                <th>Name</th>\r\n                                                <th>DOB</th>\r\n                                                <th>Gender</th>\r\n                                                <th>Division </th>\r\n                                                <th>Challan </th>\r\n                                                <th>Line </th>\r\n                                                <th>Mobile </th>\r\n                                                <th>Aadhar </th>\r\n                                                <th>Status </th>\r\n                                            </tr>\r\n    \r\n                                            <tr *ngFor=\"let nonWorkerVisited of todaysregistrationList[0];  \">\r\n                                                <td>{{nonWorkerVisited.patient_code}}</td>\r\n                                                <td>{{nonWorkerVisited.patient_name}}</td>\r\n                                                <td>{{nonWorkerVisited.birthdate}}</td>\r\n                                                <td>{{nonWorkerVisited.gender}}</td>\r\n                                                <td>{{nonWorkerVisited.division_number}}</td>\r\n                                                <td>{{nonWorkerVisited.challan_number}}</td>\r\n                                                <td>{{nonWorkerVisited.line_number}}</td>\r\n                                                <td>{{nonWorkerVisited.mobile_one}}</td>\r\n                                                <td>{{nonWorkerVisited.adhar}}</td>\r\n                                                <td>\r\n                                                    <button mat-mini-fab>\r\n                                                        <mat-icon>done</mat-icon>\r\n                                                    </button>\r\n                                                </td>\r\n                                              \r\n                                            </tr>\r\n                                        </table>    \r\n\r\n                                </mat-expansion-panel>\r\n                              \r\n                              </mat-accordion>\r\n                </div><!-- visited Expansen List -->\r\n\r\n\r\n\r\n            </div> <!--end of flex-->\r\n        </div>\r\n\r\n\r\n\r\n           \r\n\r\n\r\n\r\n\r\n\r\n            </div>\r\n            <!--end of search container-->\r\n        </div>"

/***/ }),

/***/ "./src/app/layout/todaysregistration/todaysregistration.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/todaysregistration/todaysregistration.component.ts ***!
  \***************************************************************************/
/*! exports provided: TodaysregistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodaysregistrationComponent", function() { return TodaysregistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var _service_registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/registration.service */ "./src/app/service/registration.service.ts");
/* harmony import */ var _service_datashare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/datashare.service */ "./src/app/service/datashare.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodaysregistrationComponent = /** @class */ (function () {
    function TodaysregistrationComponent(commonService, registerService, datashareService, router) {
        this.commonService = commonService;
        this.registerService = registerService;
        this.datashareService = datashareService;
        this.router = router;
        this.openReglistBlock = true;
        this.openVisitedBlock = false;
        this.todaysregistrationListCount = [];
        this.todaysregistrationList = [];
        this.patientTypeList = [];
        this.recordsFound = false;
        this.isButtonActive = true;
        this.allcount = 0;
        this.pwcount = 0;
        this.twcount = 0;
        this.depcount = 0;
        this.nwcount = 0;
        this.allcountVisited = 0;
        this.pwcountVisited = 0;
        this.twcountVisited = 0;
        this.depcountVisited = 0;
        this.nwcountVisited = 0;
        this.displayedColumns = [
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
        this.tabLoadTimes = [];
        this.step = 0;
        console.log("Data service " + this.datashareService.sharedData);
    }
    TodaysregistrationComponent.prototype.setStep = function (index) {
        this.step = index;
        if (this.step == 0) {
            this.getTodaysRegForDoc("ALL", "Y");
        }
        else if (this.step == 1) {
            this.getTodaysRegForDoc("P/W", "Y");
        }
        else if (this.step == 2) {
            this.getTodaysRegForDoc("T/W", "Y");
        }
        else if (this.step == 3) {
            this.getTodaysRegForDoc("Dep", "Y");
        }
        else if (this.step == 4) {
            this.getTodaysRegForDoc("N/W", "Y");
        }
    };
    TodaysregistrationComponent.prototype.nextStep = function () {
        this.step++;
    };
    TodaysregistrationComponent.prototype.prevStep = function () {
        this.step--;
    };
    TodaysregistrationComponent.prototype.firstTab = function (e) {
        //console.log("fgdsf"+e);
    };
    TodaysregistrationComponent.prototype.ngOnInit = function () {
        this.isButtonActive = true;
        this.getTodaysRegForDoc("ALL", "N");
        this.getTodaysRegForDocCount("ALL", "N");
        this.getTodaysRegForDocCount("P/W", "N");
        this.getTodaysRegForDocCount("T/W", "N");
        this.getTodaysRegForDocCount("Dep", "N");
        this.getTodaysRegForDocCount("N/W", "N");
    };
    TodaysregistrationComponent.prototype.tabChanged = function (tabChangeEvent) {
        this.openReglistBlock = true;
        var tabindx;
        tabindx = tabChangeEvent.index;
        if (tabindx == 0) {
            this.getTodaysRegForDoc("ALL", "N");
        }
        else if (tabindx == 1) {
            this.getTodaysRegForDoc("P/W", "N");
        }
        else if (tabindx == 2) {
            this.getTodaysRegForDoc("T/W", "N");
        }
        else if (tabindx == 3) {
            this.getTodaysRegForDoc("Dep", "N");
        }
        else if (tabindx == 4) {
            this.getTodaysRegForDoc("N/W", "N");
        }
        else if (tabindx == 5) {
            this.openReglistBlock = false;
            this.getTodaysRegForDocCountVisited("ALL", "Y");
            this.getTodaysRegForDocCountVisited("P/W", "Y");
            this.getTodaysRegForDocCountVisited("T/W", "Y");
            this.getTodaysRegForDocCountVisited("Dep", "Y");
            this.getTodaysRegForDocCountVisited("N/W", "Y");
        }
    };
    TodaysregistrationComponent.prototype.getTimeLoaded = function (index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    };
    TodaysregistrationComponent.prototype.getPatientType = function () {
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
    TodaysregistrationComponent.prototype.getTodaysRegForDoc = function (type, serve) {
        var _this = this;
        this.todaysregistrationList = [];
        this.recordsFound = false;
        var dataval;
        var regdata;
        this.registerService.getTodaysRegForDoc(type, serve).then(function (data) {
            dataval = data;
            regdata = dataval.todaysreg_data;
            _this.todaysregistrationList.push(regdata);
            var tcount = _this.todaysregistrationList[0].length;
            if (tcount > 0) {
                _this.recordsFound = true;
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.todaysregistrationList[0]);
        }, function (error) {
            console.log("error in todays registration list");
        });
    };
    TodaysregistrationComponent.prototype.getTodaysRegForDocCount = function (type, serve) {
        var _this = this;
        this.todaysregistrationListCount = [];
        var dataval;
        var regdata;
        this.registerService.getTodaysRegForDoc(type, serve).then(function (data) {
            dataval = data;
            regdata = dataval.todaysreg_data;
            _this.todaysregistrationListCount = [];
            _this.todaysregistrationListCount.push(regdata);
            var tcount = 0;
            tcount = _this.todaysregistrationListCount[0].length;
            if (type == "ALL") {
                _this.allcount = tcount;
            }
            else if (type == "P/W") {
                _this.pwcount = tcount;
            }
            else if (type == "T/W") {
                _this.twcount = tcount;
            }
            else if (type == "Dep") {
                _this.depcount = tcount;
            }
            else if (type == "N/W") {
                _this.nwcount = tcount;
            }
        }, function (error) {
            console.log("error in todays registration list");
        });
    };
    TodaysregistrationComponent.prototype.getTodaysRegForDocCountVisited = function (type, serve) {
        var _this = this;
        this.todaysregistrationListCount = [];
        var dataval;
        var regdata;
        this.registerService.getTodaysRegForDoc(type, serve).then(function (data) {
            dataval = data;
            regdata = dataval.todaysreg_data;
            _this.todaysregistrationListCount = [];
            _this.todaysregistrationListCount.push(regdata);
            var tcount = 0;
            tcount = _this.todaysregistrationListCount[0].length;
            if (type == "ALL") {
                _this.allcountVisited = tcount;
            }
            else if (type == "P/W") {
                _this.pwcountVisited = tcount;
            }
            else if (type == "T/W") {
                _this.twcountVisited = tcount;
            }
            else if (type == "Dep") {
                _this.depcountVisited = tcount;
            }
            else if (type == "N/W") {
                _this.nwcountVisited = tcount;
            }
        }, function (error) {
            console.log("error in todays registration list");
        });
    };
    TodaysregistrationComponent.prototype.getPresciption = function (p) {
        //    console.log("P value "+p.registration_id);
        this.isButtonActive = false;
        this.datashareService.saveData(p);
        this.router.navigate(['/panel/opd']);
    };
    TodaysregistrationComponent.prototype.gotoSickLeaveApprovalList = function () {
        this.router.navigateByUrl('panel/sickapproval');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], TodaysregistrationComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], TodaysregistrationComponent.prototype, "sort", void 0);
    TodaysregistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todaysregistration',
            template: __webpack_require__(/*! ./todaysregistration.component.html */ "./src/app/layout/todaysregistration/todaysregistration.component.html"),
            styles: [__webpack_require__(/*! ./todaysregistration.component.css */ "./src/app/layout/todaysregistration/todaysregistration.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_service_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _service_registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"], _service_datashare_service__WEBPACK_IMPORTED_MODULE_4__["DatashareService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], TodaysregistrationComponent);
    return TodaysregistrationComponent;
}());



/***/ }),

/***/ "./src/app/layout/todaysregistration/todaysregistration.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/todaysregistration/todaysregistration.module.ts ***!
  \************************************************************************/
/*! exports provided: TodaysregistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodaysregistrationModule", function() { return TodaysregistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _todaysregistration_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todaysregistration-routing.module */ "./src/app/layout/todaysregistration/todaysregistration-routing.module.ts");
/* harmony import */ var _todaysregistration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todaysregistration.component */ "./src/app/layout/todaysregistration/todaysregistration.component.ts");
/* harmony import */ var _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-material/app-material.module */ "./src/app/app-material/app-material.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TodaysregistrationModule = /** @class */ (function () {
    function TodaysregistrationModule() {
    }
    TodaysregistrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _todaysregistration_routing_module__WEBPACK_IMPORTED_MODULE_2__["TodaysregistrationRoutingModule"],
                _app_material_app_material_module__WEBPACK_IMPORTED_MODULE_4__["AppMaterialModule"]
            ],
            declarations: [
                _todaysregistration_component__WEBPACK_IMPORTED_MODULE_3__["TodaysregistrationComponent"]
            ]
        })
    ], TodaysregistrationModule);
    return TodaysregistrationModule;
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



/***/ })

}]);
//# sourceMappingURL=todaysregistration-todaysregistration-module.js.map