var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
import { CommonService } from './../../service/common.service';
import { SymptomdiseaseService } from './../../service/symptomdisease.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DatashareService } from './../../service/datashare.service';
import { PatientService } from './../../service/patient.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SuccessdialogComponent } from '../components/successdialog/successdialog.component';
import { PhramcyService } from '../../service/phramcy.service';
var MedicineissueComponent = /** @class */ (function () {
    function MedicineissueComponent(router, commonService, datashareService, patientService, dialog, phramcyService, fb, symptomdiseaseService) {
        /*
    this.prescriptionMedForm = new FormGroup({
      medicineHdnID : new FormControl(''),
      instruction : new FormControl('Test Instruction'),
      stock : new FormControl('10'),
      issue : new FormControl('')
    });
    */
        this.router = router;
        this.commonService = commonService;
        this.datashareService = datashareService;
        this.patientService = patientService;
        this.dialog = dialog;
        this.phramcyService = phramcyService;
        this.fb = fb;
        this.symptomdiseaseService = symptomdiseaseService;
        this.issueBtnDisable = false;
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
        this.prescriptionMedPatientInfoForm = new FormGroup({
            patientID: new FormControl({ value: '', disabled: true }),
            patientType: new FormControl({ value: '', disabled: true }),
            patientName: new FormControl({ value: '', disabled: true }),
            patientAge: new FormControl({ value: '', disabled: true }),
            prescriptionNo: new FormControl({ value: '', disabled: true })
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
        this.prescriptionMedForm = this.fb.group({
            medicineRows: this.fb.array([])
        });
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
    MedicineissueComponent.prototype.initializeMedicine = function (medidval, stockval, issueval) {
        return this.fb.group({
            medicineHdnID: [medidval],
            stock: [stockval],
            issue: [issueval]
        });
    };
    MedicineissueComponent.prototype.getMedicinesByPrescription = function (prescriptionID) {
        var _this = this;
        var response;
        var meddata;
        this.phramcyService.getMedicinesByPrescription(prescriptionID).then(function (data) {
            response = data;
            meddata = response.result;
            if (response.msg_status == 200) {
                _this.medicineListsDatas.push(meddata);
                var count3 = Object.keys(meddata).length;
                var control = _this.prescriptionMedForm.controls['medicineRows'];
                for (var i = 0; i < count3; i++) {
                    control.push(_this.initializeMedicine(_this.medicineListsDatas[0][i].medicine_id, _this.medicineListsDatas[0][i].totalstock, null));
                }
            }
        }, function (error) {
            console.log("There is some error on submitting...");
        });
    };
    MedicineissueComponent.prototype.getbatchInfo = function (data, event, index, stockval) {
        var _this = this;
        this.issueBtnDisable = false;
        document.querySelector('#batchinfo_' + index).innerHTML = "";
        var issuedqty = event.target.value;
        if (issuedqty > 0) {
            if (this.validateMedIssue(stockval, issuedqty)) {
                var response_1;
                this.phramcyService.getMedicineBatchInfo(data.medicine_id, event.target.value).then(function (data) {
                    response_1 = data;
                    _this.sendPhrmcyBtnActive = true;
                    if (response_1.msg_status == 200) {
                        document.querySelector('#batchinfo_' + index).innerHTML = response_1.batchnos;
                    }
                    else {
                    }
                }, function (error) {
                    console.log("There is some error on submitting...");
                });
            }
            else {
                document.querySelector('#batchinfo_' + index).innerHTML = "<span style='color:red'>Check Issue Qty.</span>";
            }
        }
    };
    MedicineissueComponent.prototype.validateMedIssue = function (stock, issue) {
        this.issueBtnDisable = false;
        if (parseInt(issue, 10) > parseInt(stock, 10)) {
            this.issueBtnDisable = true;
            return false;
        }
        return true;
    };
    MedicineissueComponent.prototype.issueMedicine = function () {
        var _this = this;
        this.sendPhrmcyBtnActive = false;
        var response;
        this.phramcyService.insertToMedicineIssue(this.prescriptionMedPatientInfoForm.value, this.prescriptionMedForm.value).then(function (data) {
            response = data;
            _this.sendPhrmcyBtnActive = true;
            if (response.msg_status == 200) {
                localStorage.removeItem("prescid");
                localStorage.removeItem("prescpcode");
                localStorage.removeItem("prescpno");
                _this.openDialog();
            }
            else {
                _this.openDialogError();
            }
        }, function (error) {
            console.log("There is some error on submitting...");
        });
    };
    MedicineissueComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(SuccessdialogComponent, {
            width: '350px',
            disableClose: true,
            data: {
                msg: 'Medicine Issued Successfully',
                msgicon: 'check_circle',
                iconcolor: '#1d8c3d',
                btnurl: 'panel/prescriptionlist'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    MedicineissueComponent.prototype.openDialogError = function () {
        var dialogRef = this.dialog.open(SuccessdialogComponent, {
            width: '350px',
            disableClose: true,
            data: {
                msg: 'There is some Problem.Try again...',
                msgicon: 'check_circle',
                iconcolor: '#1d8c3d',
                btnurl: 'panel/medicineissue'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    MedicineissueComponent = __decorate([
        Component({
            selector: 'app-medicineissue',
            templateUrl: './medicineissue.component.html',
            styleUrls: ['./medicineissue.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [Router,
            CommonService,
            DatashareService,
            PatientService,
            MatDialog,
            PhramcyService,
            FormBuilder,
            SymptomdiseaseService])
    ], MedicineissueComponent);
    return MedicineissueComponent;
}());
export { MedicineissueComponent };
//# sourceMappingURL=medicineissue.component.js.map