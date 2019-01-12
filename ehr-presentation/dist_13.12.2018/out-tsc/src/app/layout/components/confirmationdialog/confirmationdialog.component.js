var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Inject } from '@angular/core';
import { CommonService } from '../../../service/common.service';
import { PatientService } from '../../../service/patient.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
var ConfirmationdialogComponent = /** @class */ (function () {
    function ConfirmationdialogComponent(router, dialogRef, commonService, patientService, data) {
        this.router = router;
        this.dialogRef = dialogRef;
        this.commonService = commonService;
        this.patientService = patientService;
        this.data = data;
        this.msg = this.data.msg;
        this.msgIcon = this.data.msgicon;
        this.iconColor = this.data.iconcolor;
        this.redirectUrl = this.data.btnurl;
        this.idfordel = this.data.delid;
        this.tblColumn = this.data.tblidcolumn;
        this.delfromTbl = this.data.tblinfo;
    }
    ConfirmationdialogComponent.prototype.ngOnInit = function () {
    };
    /*
    redirectToComp(){
      this.dialogRef.close();
      this.router.navigateByUrl(this.redirectUrl);
     
    }
    */
    ConfirmationdialogComponent.prototype.cancelDialog = function () {
        this.dialogRef.close();
    };
    ConfirmationdialogComponent.prototype.deleteFromTable = function (delid, column, tblinfo) {
        var _this = this;
        console.log("Delete ID " + delid);
        console.log("Delete ID " + tblinfo);
        var response;
        this.commonService.deleteRecords(delid, column, tblinfo).then(function (data) {
            response = data;
            if (response.msg_status == 200) {
                var data_1 = {
                    "from": "Save",
                };
                _this.dialogRef.close(data_1);
            }
            else {
            }
        }, function (error) {
            console.log("There is some error on submitting...");
        });
    };
    ConfirmationdialogComponent = __decorate([
        Component({
            selector: 'app-confirmationdialog',
            templateUrl: './confirmationdialog.component.html',
            styleUrls: ['./confirmationdialog.component.css']
        }),
        __param(4, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [Router, MatDialogRef, CommonService, PatientService, Object])
    ], ConfirmationdialogComponent);
    return ConfirmationdialogComponent;
}());
export { ConfirmationdialogComponent };
//# sourceMappingURL=confirmationdialog.component.js.map