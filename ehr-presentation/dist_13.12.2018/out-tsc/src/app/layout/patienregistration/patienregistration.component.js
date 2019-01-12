var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, NgZone } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PatientService } from '../../service/patient.service';
import { GlobalconstantService } from '../../service/globalconstant.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { RegistrationService } from '../../service/registration.service';
import { PatientadddialogComponent } from '../components/patientadddialog/patientadddialog.component';
import * as jwt_decode from "jwt-decode";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { MatSelect, VERSION } from '@angular/material';
import { ConfirmationdialogComponent } from '../components/confirmationdialog/confirmationdialog.component';
var PatienregistrationComponent = /** @class */ (function () {
    function PatienregistrationComponent(zone, patientService, _global, dialog, registerService) {
        this.zone = zone;
        this.patientService = patientService;
        this._global = _global;
        this.dialog = dialog;
        this.registerService = registerService;
        this.version = VERSION;
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
        this.serializedDate = new FormControl((new Date()).toISOString());
        this.patientCtrl = new FormControl();
        this.listofPatient = [];
        this.todaysregistrationList = [];
        this.selected = null;
        this.patientcodes = [];
        this.filteredPatientCode = new ReplaySubject(1);
        this.aadharnumbers = [];
        this.filteredPatientAadhar = new ReplaySubject(1);
        this.filteredPatientName = new ReplaySubject(1);
        this._onDestroy = new Subject();
        this.patientRegForm = new FormGroup({
            searchpatientCtrl: new FormControl(''),
            hdnPatientID: new FormControl(''),
            regdate: new FormControl(''),
            patienname: new FormControl(''),
            patientmobileno: new FormControl(''),
            patientid: new FormControl(''),
            patientName: new FormControl(''),
            patientGender: new FormControl(''),
            patientDOB: new FormControl(''),
            patientBloodGrp: new FormControl(''),
            patientType: new FormControl(''),
            patientRelation: new FormControl(''),
            patientLineNo: new FormControl(''),
            patientDivisionNo: new FormControl(''),
            patientChallanNo: new FormControl(''),
            patientEstate: new FormControl('')
        });
        this.IDsearchForm = new FormGroup({
            patientID: new FormControl(''),
            pcodeFilterCtrl: new FormControl(''),
            patientAadhar: new FormControl(''),
            aadharFilterCtrl: new FormControl('')
        });
        this.FieldsearchForm = new FormGroup({
            patientNameCtrl: new FormControl(''),
            patientDOBCtrl: new FormControl(new Date()),
            patientMobileCtrl: new FormControl(''),
            patientNameFilterCtrl: new FormControl('')
        });
        this.patientTblRegForm = new FormGroup({
            regpcodeCtrl: new FormControl(''),
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
        // this.getPatientCode();
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
            .pipe(takeUntil(this._onDestroy))
            .subscribe(function () {
            _this.IDsearchForm.patchValue({
                patientAadhar: _this.resetSelect
            });
        });
    };
    PatienregistrationComponent.prototype.getPatientListBySearch = function (event) {
        console.log(event.target.value);
        this.getPatientCode(event.target.value);
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
            return jwt_decode(token);
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
            _this.dataSource = new MatTableDataSource(_this.todaysregistrationList[0]);
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
    PatienregistrationComponent.prototype.deleteRegistration = function (registrerid) {
        console.log(registrerid);
        this.openConfirmationDialog(registrerid);
    };
    PatienregistrationComponent.prototype.openConfirmationDialog = function (delid) {
        var _this = this;
        var dialogRef = this.dialog.open(ConfirmationdialogComponent, {
            width: '350px',
            disableClose: true,
            data: {
                msg: 'Do you want to delete ?',
                msgicon: 'delete_forever',
                iconcolor: '#696766',
                btnurl: 'panel/registration',
                delid: delid,
                tblidcolumn: 'registration_id',
                tblinfo: 'registration'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.todaysregistrationList = [];
            _this.getTodaysRegistration();
        });
    };
    PatienregistrationComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(PatientadddialogComponent, {
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
    PatienregistrationComponent.prototype.getPatientCode = function (code) {
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
                .pipe(takeUntil(_this._onDestroy))
                .subscribe(function () {
                _this.filterPatientCode();
            });
            _this.IDsearchForm.get('aadharFilterCtrl').valueChanges
                .pipe(takeUntil(_this._onDestroy))
                .subscribe(function () {
                _this.filterPatientAadhar();
            });
            _this.FieldsearchForm.get('patientNameFilterCtrl').valueChanges
                .pipe(takeUntil(_this._onDestroy))
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
        ViewChild(MatPaginator),
        __metadata("design:type", MatPaginator)
    ], PatienregistrationComponent.prototype, "paginator", void 0);
    __decorate([
        ViewChild(MatSort),
        __metadata("design:type", MatSort)
    ], PatienregistrationComponent.prototype, "sort", void 0);
    __decorate([
        ViewChild('singleSelect'),
        __metadata("design:type", MatSelect)
    ], PatienregistrationComponent.prototype, "singleSelect", void 0);
    PatienregistrationComponent = __decorate([
        Component({
            selector: 'app-patienregistration',
            templateUrl: './patienregistration.component.html',
            styleUrls: ['./patienregistration.component.css']
        }),
        __metadata("design:paramtypes", [NgZone, PatientService, GlobalconstantService, MatDialog, RegistrationService])
    ], PatienregistrationComponent);
    return PatienregistrationComponent;
}());
export { PatienregistrationComponent };
//# sourceMappingURL=patienregistration.component.js.map