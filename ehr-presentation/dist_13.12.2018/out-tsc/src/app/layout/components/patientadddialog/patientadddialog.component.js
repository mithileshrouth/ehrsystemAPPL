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
import { FormGroup, FormControl } from '@angular/forms';
import { PatientService } from '../../../service/patient.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl((new Date()).toISOString());
        this.patientAddForm = new FormGroup({
            pcodeCtrl: new FormControl(''),
            pnameCtrl: new FormControl(''),
            dobCtrl: new FormControl(''),
            genderCtrl: new FormControl(''),
            mobileCtrl: new FormControl(''),
            alternatemblCtrl: new FormControl(''),
            aadharCtrl: new FormControl(''),
            bldgrpCtrl: new FormControl(''),
            patienttypeCtrl: new FormControl(''),
            associateCtrl: new FormControl(''),
            relationCtrl: new FormControl(''),
            linenoCtrl: new FormControl(''),
            divisionCtrl: new FormControl(''),
            challannoCtrl: new FormControl(''),
            estateCtrl: new FormControl('')
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
        Component({
            selector: 'app-patientadddialog',
            templateUrl: './patientadddialog.component.html',
            styleUrls: ['./patientadddialog.component.css']
        }),
        __param(3, Inject(MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [MatDialogRef, CommonService, PatientService, String])
    ], PatientadddialogComponent);
    return PatientadddialogComponent;
}());
export { PatientadddialogComponent };
//# sourceMappingURL=patientadddialog.component.js.map