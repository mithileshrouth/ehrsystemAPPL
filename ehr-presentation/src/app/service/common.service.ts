import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalconstantService } from './globalconstant.service';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public http: HttpClient,private global:GlobalconstantService) {}

  getBloodGroup() {
    return new Promise(resolve => {
       this.http.get(this.global.bloodgrpList_URL).subscribe(data => {
         resolve(data);
       }, err => {
         console.log(err);
       });
    });
  }


  getVaccinationSchedule() {
    return new Promise(resolve => {
       this.http.get(this.global.vaccinationScheduleList_URL).subscribe(data => {
         resolve(data);
       }, err => {
         console.log(err);
       });
    });
  }

  getPatientType() {
    return new Promise(resolve => {
       this.http.get(this.global.patienttypeList_URL).subscribe(data => {
         resolve(data);
       }, err => {
         console.log(err);
       });
    });
  }

  getDepEmployeeType() {
    return new Promise(resolve => {
       this.http.get(this.global.empDependPatienttypeList_URL).subscribe(data => {
         resolve(data);
       }, err => {
         console.log(err);
       });
    });
  }


  getRelations() {
    return new Promise(resolve => {
       this.http.get(this.global.relationList_URL).subscribe(data => {
         resolve(data);
       }, err => {
         console.log(err);
       });
    });
  }

  getRelationsByType(type) {
    let myData = JSON.stringify({type:type});
    return new Promise(resolve => {
       this.http.post(this.global.relationbyTypeList_URL , myData).subscribe(data => {
         resolve(data);
       }, err => {
         console.log(err);
       });
    });
  }

  getEstates() {
    return new Promise(resolve => {
       this.http.get(this.global.estateList_URL).subscribe(data => {
         resolve(data);
       }, err => {
         console.log(err);
       });
    });
  }

  getEstateByEmpl(empcode) {
    let myData = JSON.stringify({empcode:empcode});
    return new Promise(resolve => {
       this.http.post(this.global.estateByEmpl_URL , myData).subscribe(data => {
         resolve(data);
       }, err => {
         console.log(err);
       });
    });
  }
  
  getHospitals(){
    return new Promise(resolve => {
      this.http.get(this.global.hospitalList_URL).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
   });
  }

  getSickApproveList(){
    return new Promise(resolve=>{
      this.http.get(this.global.sickApprovalList_URL).subscribe(data=>{
        resolve(data);
      },err=>{console.log(err)
      });
    });
  }

  getSickLeaveApproveCount(){
    return new Promise(resolve=>{this.http.get(this.global.sickApprovalCount_URL).subscribe(data=>{
      resolve(data);  
    },
    err=>{console.log(err)
    });
  });
  }


  deleteRecords(delid,column,fromtbl) {
    let myData = JSON.stringify({tid:delid,tc:column,from:fromtbl});
    return new Promise(resolve => {
       this.http.post(this.global.deleteRecord_URL,myData).subscribe(data => {
         resolve(data);
        
       }, err => {
         console.log(err);
       });
     });
  }

}
