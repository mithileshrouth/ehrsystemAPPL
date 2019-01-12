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
        Component({
            selector: 'app-successdialog',
            templateUrl: './successdialog.component.html',
            styleUrls: ['./successdialog.component.css']
        }),
        __param(4, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [Router, MatDialogRef, CommonService, PatientService, Object])
    ], SuccessdialogComponent);
    return SuccessdialogComponent;
}());
export { SuccessdialogComponent };
//# sourceMappingURL=successdialog.component.js.map