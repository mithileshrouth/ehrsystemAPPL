import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild , ViewEncapsulation } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { MatSelect, VERSION } from '@angular/material';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { CommonService } from './../../service/common.service';
import { SymptomdiseaseService } from './../../service/symptomdisease.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DatashareService } from './../../service/datashare.service';
import { PatientService } from './../../service/patient.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA , MatDialogConfig } from '@angular/material';
import { SuccessdialogComponent } from '../components/successdialog/successdialog.component';
import { IpdService } from './../../service/ipd.service';
import { MasterentrydialogComponent } from '../components/masterentrydialog/masterentrydialog.component';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';





interface Medicine {
  id: string,
  name: string,
  type: string
}

interface Dosage {
  id: string,
  value: string,
}

interface Frequency {
  id: string,
  frequency: string,
}

interface Relation {
  id: string;
  name: string;
}

interface Instruction{
  id: string;
  name: string;
}

interface Reports{
  id: string;
  name: string;
}

interface AssociatedEmpl {
  id: string,
  code: string,
  name: string
}



@Component({
  selector: 'app-ipdregistration',
  templateUrl: './ipdregistration.component.html',
  styleUrls: ['./ipdregistration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IpdregistrationComponent implements OnInit {

  ipdRegistrationForm : FormGroup;
  patientList = []; 
  relationsList = []; 
  bloodGroupList = [];
  addedMeddata = [];
  addedInvestigations = [];

  
  medicineError:string = "";
  testReportError:string = "";
  validFormErr:string = "";

  constructor(private router:Router, private commonService:CommonService, private symptomdiseaseService:SymptomdiseaseService , private datashareService:DatashareService , private patientService:PatientService , public dialog: MatDialog , private ipdService:IpdService,public snackBar: MatSnackBar) { 
    
    this.ipdRegistrationForm = new FormGroup({
      admissionDtCtrl: new FormControl(new Date().toISOString()),
      roomNoCtrl: new FormControl(''),
      bedNoCtrl: new FormControl(''),
      employeeCode: new FormControl(''),
      emplCodeFilterCtrl: new FormControl(''),  
      relationCtrl: new FormControl(''),  
      symptomsMultiCtrl: new FormControl(''),
      choosePatientCtrl: new FormControl(''),
      patinetNameCtrl: new FormControl(''),
      bldgrpCtrl: new FormControl({value: '', disabled: true}, Validators.required),
      bpCtrl: new FormControl(''),
      haemoglobinCtrl: new FormControl(''),
      bldsugarFCtrl: new FormControl(''),
      bldsugarPPCtrl: new FormControl(''),
      jaundiceCtrl: new FormControl(''),
      tempCtrl: new FormControl(''),
      heightCtrl: new FormControl(''),
      weightCtrl: new FormControl(''), 
      odemaCtrl: new FormControl(''), 
      
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
      generalExaminationCtrl : new FormControl(''),
      systemicExaminationCtrl : new FormControl(''),
      provisionalExaminationCtrl : new FormControl(''),
      finalDiagnosisCtrl : new FormControl('')
    });

  }

  version = VERSION;

  private relations: Relation[] = [];
  private medicines: Medicine[] = [];
  private dosages: Dosage[] = [];
  private frequency: Frequency[] = [];
  private instructions: Instruction[] = [];
  private medreports: Reports[] = [];
  
  public filteredMedicines: ReplaySubject<Medicine[]> = new ReplaySubject<Medicine[]>(1);
  public filteredDosages: ReplaySubject<Dosage[]> = new ReplaySubject<Dosage[]>(1);
  public filteredFrequency: ReplaySubject<Frequency[]> = new ReplaySubject<Frequency[]>(1);

  public filterRelations: ReplaySubject<Relation[]> = new ReplaySubject<Relation[]>(1);
  public filteredRelationsMulti: ReplaySubject<Relation[]> = new ReplaySubject<Relation[]>(1);

  public filteredInstruction: ReplaySubject<Frequency[]> = new ReplaySubject<Frequency[]>(1);
  public filteredReports: ReplaySubject<Reports[]> = new ReplaySubject<Reports[]>(1);


  private associatedEmplList: AssociatedEmpl[] = [];
  public filteredAssociatedEmpl: ReplaySubject<AssociatedEmpl[]> = new ReplaySubject<AssociatedEmpl[]>(1);
  
  @ViewChild('singleSelect') singleSelect: MatSelect; 

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();

  ngOnInit() {
    this.getPatientCode('E');
    this.getRelations();
    this.getBloodGroup();

    this.getMedicine('A');


    // Investigation Dropdown Population
    this.getIvestigations();
    this.filteredReports.next(this.medreports.slice());
    this.ipdRegistrationForm.get('reportsFilterCtrl').valueChanges
        .pipe(takeUntil(this._onDestroy))
        .subscribe(() => {
          this.filterMedReports();
    });



  }


  getPatientListBySearch(event) {
    if(event.key == "ArrowDown" || event.key == "ArrowUp"){}
    else{
      this.getPatientCode(event.target.value);
    }
  }

  getMedicineBySerach(event) {
    if(event.key == "ArrowDown" || event.key == "ArrowUp"){}
    else{
      this.getMedicine(event.target.value);
    }
  }

  getOtherDependent(obj){
    this.medicineError = "";
    this.getDosage(obj);
    this.getFrequency(obj);
  }

  addMedicine() {
    this.medicineError = "";
    //let date = this.presciptionForm.get('date').value;
    let medicine = this.ipdRegistrationForm.get('medicineCtrl').value;
    let dosage = this.ipdRegistrationForm.get('dosageCtrl').value;
    let frequency = this.ipdRegistrationForm.get('instructionCtrl').value;
    let days = this.ipdRegistrationForm.get('daysCtrl').value;
    
    if(medicine == ""){
      this.medicineError = "Error : Select Medicine";
    }
    else{
      //let data = {datetd: date, medicinetd:medicine, dosagetd:dosage, unittd: frequency , daystd:days , actiontd: 'x' };
      let data = {medicinetd:medicine, dosagetd:dosage, unittd: frequency , daystd:days , actiontd: 'x' };
      this.addedMeddata.push(data);
  
      this.ipdRegistrationForm.patchValue({
        medicineCtrl:'',
        dosageCtrl:'',
        instructionCtrl:'',
        daysCtrl:''
      });
  
    }
  }

  removeData(i){
    this.addedMeddata.splice(i, 1);
  }


  addInvestigation(){
    this.testReportError = "";
    let date = this.ipdRegistrationForm.get('investigationDt').value;
    let report = this.ipdRegistrationForm.get('reportsCtrl').value;

    if(report==""){
      this.testReportError = "Error : Select at least one test";
    }
    else{
      let data = {invdate: date, reports:report, action: 'x' };
      this.addedInvestigations.push(data);

      this.ipdRegistrationForm.patchValue({
        reportsCtrl:''
      });

    }
  }

  removeMedReports(i){
    this.addedInvestigations.splice(i, 1);
  }

  clearTestError(obj){
    this.testReportError = "";
  }



  getChoosePatient(event) {
       // console.log(event.value.code);
      let empcode = event.value.code;
      let relation = this.ipdRegistrationForm.get('relationCtrl').value;
      this.getChoosePatientList(empcode,relation);



  }

  getChoosePatientByRel(event) {
    // console.log(event.value.code);
  
   let relation = event.value;
   let empcode = this.ipdRegistrationForm.get('employeeCode').value;
   console.log(empcode.code);
   this.getChoosePatientList(empcode.code,relation);



}

  selectPatient(event) {
   // console.log(event);

    if(event.value.blood_group == "" || event.value.blood_group == null) {
      this.ipdRegistrationForm.controls['bldgrpCtrl'].enable();
    }
    else {
      this.ipdRegistrationForm.controls['bldgrpCtrl'].disable();
    }

    this.ipdRegistrationForm.patchValue({
      patinetNameCtrl : event.value.patient_name ,
      bldgrpCtrl : event.value.blood_group 
    });
  }

  getChoosePatientList(empcode,relation) {

    this.ipdRegistrationForm.patchValue({
      patinetNameCtrl : null ,
      bldgrpCtrl : null 
    });

    let dataval;
    let patientlist;
    this.patientService.getPatientForIPD(empcode,relation).then(data => {
      this.patientList = [];
      dataval = data;
      patientlist = dataval.result;
      this.patientList.push(patientlist);
    },
    error => {
     console.log("There is some error in Patient List...");
   });
  }


 

  getDosage(obj){
    let dataval;
    let dosagelist;
    this.dosages = [];
    this.symptomdiseaseService.getDosageByMedicine(obj.value).then(data => {
      dataval = data;
      dosagelist = dataval.result;
      var count = Object.keys(dataval.result).length;
               let resultObj;
               for(let i = 0; i<count; i++){
                resultObj = {
                    'id': dataval.result[i].dosage_id	,
                    'value' : dataval.result[i].value
                }
                this.dosages.push(resultObj);
            }
           
    this.filteredDosages.next(this.dosages.slice());
    this.ipdRegistrationForm.get('dosageFilterCtrl').valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterDosage();
      });

             
    },
    error => {
     console.log("There is some error in Dosage List...");
   });
  }


  getFrequency(obj){
    let dataval;
    let frequencylist;
    this.frequency = [];
    this.symptomdiseaseService.getFrequencyByMedicine(obj.value).then(data => {
      dataval = data;
      frequencylist = dataval.result;
      var count = Object.keys(dataval.result).length;
               let resultObj;
               for(let i = 0; i<count; i++){
                resultObj = {
                    'id': dataval.result[i].frequency_master_id	,
                    'frequency' : dataval.result[i].frequency
                }
                this.frequency.push(resultObj);
            }
           
            this.filteredInstruction.next(this.frequency.slice());
            this.ipdRegistrationForm.get('instructionFilterCtrl').valueChanges
              .pipe(takeUntil(this._onDestroy))
              .subscribe(() => {
                this.filterInstruction();
              });
             
    },
    error => {
     console.log("There is some error in Frequency List...");
   });
  }

  getRelations() {
   
    let dataval;
    let relationlist;
    this.commonService.getRelations().then(data => {
      this.relationsList = [];
      dataval = data;
      relationlist = dataval.result;
      this.relationsList.push(relationlist);
    },
    error => {
     console.log("There is some error in Relation List...");
   });
  }

  getBloodGroup(){
    let dataval;
    let bldgrouplist;
    this.commonService.getBloodGroup().then(data => {
      dataval = data;
      bldgrouplist = dataval.result;
      this.bloodGroupList.push(bldgrouplist);
    },
    error => {
     console.log("There is some error in Blood Group List...");
   });
  }

  getIvestigations(){
    let dataval;
    let reportlist;
    this.symptomdiseaseService.getInvestigations().then(data => {
      dataval = data;
      reportlist = dataval.result;
      var count = Object.keys(dataval.result).length;
               let resultObj;
               for(let i = 0; i<count; i++){
                resultObj = {
                    'name':dataval.result[i].investigation_name,
                    'id': dataval.result[i].investigation_id
                }
                this.medreports.push(resultObj);
            }
            this.filteredReports.next(this.medreports.slice());

             
    },
    error => {
     console.log("There is some error in Investigation List...");
   });
  }

  getPatientCode(code) {
    this.associatedEmplList = [];
    let dataval;
    let patientlist;
    this.patientService.associatedEmplByCode(code).then(data => {
      dataval = data;
      patientlist = dataval.patient;
      var count = Object.keys(dataval.patient).length;
               let resultObj;
              for(let i = 0; i<count; i++){

                resultObj = {
                    'id': dataval.patient[i].patient_id,
                    'code':dataval.patient[i].patient_code,
                    'name':dataval.patient[i].patient_name
                    
                }
                this.associatedEmplList.push(resultObj);
            }
           
          this.filteredAssociatedEmpl.next(this.associatedEmplList.slice());
         
          this.ipdRegistrationForm.get('emplCodeFilterCtrl').valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
              this.filterAssociateEmployee();
          });
         
      },
    error => {
     console.log("There is some error in Pcode List...");
   });
  }



  onSubmit(formdata) {
    console.log(formdata);

      //this.sendPhrmcyBtnActive = false;
     
        let response;
        this.ipdService.insertIntoIPD(formdata,this.addedMeddata,this.addedInvestigations).then(data => {
          response = data;
          if(response.msg_data == "SUCCESS" && response.msg_status == "200"){
            this.openDialog();
            this.ipdRegistrationForm.reset();
            this.addedMeddata = [];
            this.addedInvestigations = [];
          }
          else{
            this.openDialogError();
          }
          console.log(response);
        },
        error => {
            console.log("There is some error on submitting...");
        });
  

  }

  openDialog() {
    const dialogRef = this.dialog.open(SuccessdialogComponent, {
      width: '350px',
      disableClose: true,
      data:  {
        msg : 'IPD Done Successfully',
        msgicon : 'check_circle',
        iconcolor: '#1d8c3d',
        btnurl : 'panel/ipdlist'
        }
    });
  
    dialogRef.afterClosed().subscribe(result => {
    
    });
  }

  openDialogError() {
    const dialogRef = this.dialog.open(SuccessdialogComponent, {
      width: '350px',
      disableClose: true,
      data:  {
        msg : 'There is some problem.Try again ...',
        msgicon : 'check_circle',
        iconcolor: '#1d8c3d',
        btnurl : 'panel/ipd'
        }
    });
  
    dialogRef.afterClosed().subscribe(result => {
    
    });
  }

  // Investigation
  openInvestigationEntryDialog() {
      
    
     
     
    let fields = [
      {
        "ctrlname" : "investigationNameCtrl",
        "inputtyep" : "text",
        "placeholder" : "Test Name *"
      }
      
    ];

    let formCtrlInilize = {
      investigationNameCtrl : new FormControl('',Validators.required)
      
    }

    const dialogRef = this.dialog.open(MasterentrydialogComponent, {
      width: '350px',
      disableClose: true,
      data:  {
        fielddatas : fields,
        initializeField:formCtrlInilize,
        iconcolor: '#1d8c3d',
        tbl : 'investigation',
        datafrom : 'INVESTIGATION', // don't change this value
        heading:'Add Test'
       }
    });
  
    dialogRef.afterClosed().subscribe(result => {
        //this.getDiseaseList(this.presciptionForm.get("symptomsMultiCtrl").value);
        if(result.from=="Save") {
          this.openSnackBar("Test Added successfully");
          this.getIvestigations();
        }
    });

  }

  openSnackBar(msg) {
    let config = new MatSnackBarConfig();
    config.duration = 3000;
    this.snackBar.open(msg, "", config);
   
  }


  backToIpdList() {
    this.router.navigateByUrl('panel/ipdlist');
  }
  /*
  * --------------------------------------------------------------------------------------------------------
  * ----------------------------------------MEDICINE RELATED CALLS------------------------------------------
  * --------------------------------------------------------------------------------------------------------
  *
  **/

 getMedicine(medname){
  let dataval;
  let medicinelist;
  this.medicines = [];
  this.symptomdiseaseService.getMedicineListByName(medname).then(data => {
    dataval = data;
    medicinelist = dataval.result;
    var count = Object.keys(dataval.result).length;
             let resultObj;
             for(let i = 0; i<count; i++){
              resultObj = {
                  'name':dataval.result[i].medicine_name,
                  'id': dataval.result[i].medicine_id	,
                  'type' : dataval.result[i].medicine_type
              }
              this.medicines.push(resultObj);
          }
         
  this.filteredMedicines.next(this.medicines.slice());
  this.ipdRegistrationForm.get('medicineFilterCtrl').valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterMedicines();
    });

           
  },
  error => {
   console.log("There is some error in Medicine List...");
 });
}







  private filterAssociateEmployee() {
    if (!this.associatedEmplList) {
      return;
    }
    let search = this.ipdRegistrationForm.get('emplCodeFilterCtrl').value;
    if (!search) {
      this.filteredAssociatedEmpl.next(this.associatedEmplList.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    
    this.filteredAssociatedEmpl.next(
      this.associatedEmplList.filter(associatedEmplList => associatedEmplList.code.toLowerCase().indexOf(search) > -1)
    );
  }

  private filterMedReports() {
    if (!this.medreports) {
      return;
    }
    // get the search keyword
    let search =  this.ipdRegistrationForm.get('reportsFilterCtrl').value;
    if (!search) {
      this.filteredReports.next(this.medreports.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredReports.next(
      this.medreports.filter(medreport => medreport.name.toLowerCase().indexOf(search) > -1)
    );
  }


  private filterMedicines() {
    if (!this.medicines) {
      return;
    }
    // get the search keyword
    let search =  this.ipdRegistrationForm.get('medicineFilterCtrl').value;
    if (!search) {
      this.filteredMedicines.next(this.medicines.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredMedicines.next(
      this.medicines.filter(medicine => medicine.name.toLowerCase().indexOf(search) > -1)
    );
  }

  private filterDosage() {
    if (!this.dosages) {
      return;
    }
    // get the search keyword
    let search =  this.ipdRegistrationForm.get('dosageFilterCtrl').value;
    if (!search) {
      this.filteredDosages.next(this.dosages.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredDosages.next(
      this.dosages.filter(dosages => dosages.value.toLowerCase().indexOf(search) > -1)
    );
  }

  private filterInstruction() {
    if (!this.frequency) {
      return;
    }
    // get the search keyword
    let search =  this.ipdRegistrationForm.get('instructionFilterCtrl').value;
    if (!search) {
      this.filteredInstruction.next(this.frequency.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredInstruction.next(
      this.frequency.filter(frequency => frequency.frequency.toLowerCase().indexOf(search) > -1)
    );
  }


}
