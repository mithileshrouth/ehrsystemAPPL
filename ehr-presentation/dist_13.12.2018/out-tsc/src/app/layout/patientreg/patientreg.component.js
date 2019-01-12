var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PatientService } from '../../service/patient.service';
import { GlobalconstantService } from '../../service/globalconstant.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import * as jwt_decode from "jwt-decode";
var ELEMENT_DATA = [
    { position: 1, name: 'Mithilesh Routh', weight: 1236547891, symbol: 'Permanent' },
    { position: 2, name: 'Aayush Kumar', weight: 3214587965, symbol: 'Dependent' },
];
var PatientsCls = /** @class */ (function () {
    function PatientsCls() {
    }
    return PatientsCls;
}());
export { PatientsCls };
var PatientregComponent = /** @class */ (function () {
    function PatientregComponent(patientService, _global, dialog) {
        /*
        this.filteredStates = this.patientCtrl.valueChanges
          .pipe(
            startWith(''),
            map(patient => patient ? this._filterStates(patient) : this.patients.slice())
          );
          */
        this.patientService = patientService;
        this._global = _global;
        this.dialog = dialog;
        this.registerButtonActive = true;
        this.loaderActive = false;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
        this.isCheked = false;
        this.enableAdvancesearch = false;
        this.patientlst = [];
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
        this.date = new FormControl(new Date());
        this.serializedDate = new FormControl((new Date()).toISOString());
        this.patientCtrl = new FormControl();
        /*
        filteredStates: Observable<Patient[]>;
      
        patients: Patient[] = [
          {
            name: 'Mithilesh Routh',
            emplcode: 'E0001',
           
          
          },
          {
            name: 'Abhik Ghosh',
            emplcode: 'E0001/SO',
          
          },
          {
            name: 'Shibu Sankar',
            emplcode: 'E0002',
           
          
          },
          {
            name: 'Suman Mukherjee ',
            emplcode: 'E0003',
           
          }
        ];
      */
        this.listofPatient = [];
        this.selected = null;
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
    }
    /*
       private _filterStates(value: string): Patient[] {
        const filterValue = value.toLowerCase();
    
        return this.patients.filter(patient => patient.name.toLowerCase().indexOf(filterValue) === 0);
      }
    */
    PatientregComponent.prototype.enableAdvanceSearch = function (event) {
        this.isCheked = !this.isCheked;
        if (this.isCheked == true) {
            this.enableAdvancesearch = true;
        }
        else {
            this.enableAdvancesearch = false;
        }
    };
    PatientregComponent.prototype.ngOnInit = function () {
        this.getPatientLists();
        this.getContacts();
        var token = this.getDecodedAccessToken(localStorage.getItem("token"));
        console.log(token.data.user_name); // show decoded token object in console
    };
    PatientregComponent.prototype.getContacts = function () {
        var _this = this;
        var patient;
        this.patientService.GetPatientListAll().subscribe(function (data) {
            patient = data;
            _this.patientlst.push(data);
            console.log(data);
        });
    };
    PatientregComponent.prototype.getPatientLists = function () {
        var _this = this;
        var dataval;
        var patiendata;
        this.patientService.getPatientList().then(function (data) {
            dataval = data;
            patiendata = dataval.patient;
            _this.listofPatient.push(patiendata);
        }, function (error) {
            console.log("There is some error in Patient list...");
        });
    };
    PatientregComponent.prototype.getPatientDetail = function (patient) {
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
    PatientregComponent.prototype.getDecodedAccessToken = function (token) {
        try {
            return jwt_decode(token);
        }
        catch (Error) {
            return null;
        }
    };
    PatientregComponent.prototype.onSubmit = function () {
        var _this = this;
        this.registerButtonActive = false;
        this.loaderActive = true;
        var response;
        console.log(this.patientRegForm.value);
        this.patientService.registerPatient(this.patientRegForm.value).then(function (data) {
            response = data;
            if (response.msg_status == 200) {
            }
            else {
                _this.registerButtonActive = true;
                _this.loaderActive = false;
            }
        }, function (error) {
            console.log("There is some error on submitting...");
        });
    };
    PatientregComponent = __decorate([
        Component({
            selector: 'app-patientreg',
            templateUrl: './patientreg.component.html',
            styleUrls: ['./patientreg.component.css']
        }),
        __metadata("design:paramtypes", [PatientService, GlobalconstantService, MatDialog])
    ], PatientregComponent);
    return PatientregComponent;
}());
export { PatientregComponent };
//# sourceMappingURL=patientreg.component.js.map