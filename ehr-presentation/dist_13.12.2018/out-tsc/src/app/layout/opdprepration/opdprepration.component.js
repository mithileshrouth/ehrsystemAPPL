var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { MatSelect, VERSION } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommonService } from './../../service/common.service';
import { SymptomdiseaseService } from './../../service/symptomdisease.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DatashareService } from './../../service/datashare.service';
import { PatientService } from './../../service/patient.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SuccessdialogComponent } from '../components/successdialog/successdialog.component';
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
        this.version = VERSION;
        this.relations = [];
        this.symptoms = [];
        this.diagnosis = [];
        this.medicines = [];
        this.dosages = [];
        this.frequency = [];
        this.instructions = [];
        this.medreports = [];
        this.refferHospitals = [];
        this.filteredMedicines = new ReplaySubject(1);
        this.filteredDosages = new ReplaySubject(1);
        this.filteredFrequency = new ReplaySubject(1);
        this.filterRelations = new ReplaySubject(1);
        this.filteredRelationsMulti = new ReplaySubject(1);
        this.filteredInstruction = new ReplaySubject(1);
        this.filteredReports = new ReplaySubject(1);
        this.filteredHospitals = new ReplaySubject(1);
        this.filterSymptom = new ReplaySubject(1);
        this.filteredSymptomMulti = new ReplaySubject(1);
        this.filterDiagnosis = new ReplaySubject(1);
        this.filteredDiagnosisMulti = new ReplaySubject(1);
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new Subject();
        this.presciptionForm = new FormGroup({
            symptomsMultiCtrl: new FormControl(''),
            symptomsMultiFilterCtrl: new FormControl(''),
            diagnosisMultiCtrl: new FormControl(''),
            diagnosisMultiFilterCtrl: new FormControl(''),
            //    date: new FormControl(new Date().toISOString()),
            medicineCtrl: new FormControl(''),
            medicineFilterCtrl: new FormControl(''),
            dosageCtrl: new FormControl(''),
            dosageFilterCtrl: new FormControl(''),
            instructionCtrl: new FormControl(''),
            instructionFilterCtrl: new FormControl(''),
            investigationDt: new FormControl(new Date().toISOString()),
            reportsCtrl: new FormControl(''),
            reportsFilterCtrl: new FormControl(''),
            daysCtrl: new FormControl(''),
            finalsummryCtrl: new FormControl(''),
            sickCtrl: new FormControl(''),
            sickdaysCtrl: new FormControl({ value: '', disabled: true }),
            approvalCtrl: new FormControl(''),
            admitCtrl: new FormControl(''),
            observCtrl: new FormControl(''),
            isReffHospital: new FormControl(''),
            reffHospitalCtrl: new FormControl({ value: '', disabled: true }),
            reffHospitalFilterCtrl: new FormControl('')
        });
        this.presciptionHealthForm = new FormGroup({
            hdnpatientID: new FormControl(''),
            hdnregistrationID: new FormControl(''),
            hdnpresciptionID: new FormControl(''),
            patientID: new FormControl({ value: '', disabled: true }),
            prescpID: new FormControl({ value: '', disabled: true }),
            patientType: new FormControl({ value: '', disabled: true }),
            patientName: new FormControl({ value: '', disabled: true }),
            patientAge: new FormControl({ value: '', disabled: true }),
            pulse: new FormControl(''),
            tempratute: new FormControl(''),
            anaemia: new FormControl(''),
            bp: new FormControl(''),
            jaundice: new FormControl(''),
            odema: new FormControl(''),
            height: new FormControl(''),
            weight: new FormControl('')
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
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function () {
            _this.filterSymptomsMulti();
        });
        this.getIvestigations();
        this.filteredReports.next(this.medreports.slice());
        this.presciptionForm.get('reportsFilterCtrl').valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function () {
            _this.filterMedReports();
        });
        this.getHospitals();
        this.filteredHospitals.next(this.refferHospitals.slice());
        this.presciptionForm.get('reffHospitalFilterCtrl').valueChanges
            .pipe(takeUntil(this._onDestroy))
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
                .pipe(takeUntil(_this._onDestroy))
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
                .pipe(takeUntil(_this._onDestroy))
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
                .pipe(takeUntil(_this._onDestroy))
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
                .pipe(takeUntil(_this._onDestroy))
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
        var dialogRef = this.dialog.open(SuccessdialogComponent, {
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
        ViewChild('singleSelect'),
        __metadata("design:type", MatSelect)
    ], OpdpreprationComponent.prototype, "singleSelect", void 0);
    __decorate([
        ViewChild('multiSelect'),
        __metadata("design:type", MatSelect)
    ], OpdpreprationComponent.prototype, "multiSelect", void 0);
    OpdpreprationComponent = __decorate([
        Component({
            selector: 'app-opdprepration',
            templateUrl: './opdprepration.component.html',
            styleUrls: ['./opdprepration.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [Router, CommonService, SymptomdiseaseService, DatashareService, PatientService, MatDialog])
    ], OpdpreprationComponent);
    return OpdpreprationComponent;
}());
export { OpdpreprationComponent };
//# sourceMappingURL=opdprepration.component.js.map