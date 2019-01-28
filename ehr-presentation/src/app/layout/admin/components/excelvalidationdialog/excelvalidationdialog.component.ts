import { Component, OnInit,Inject  } from '@angular/core';
import { CommonService } from '../../../../service/common.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PatientService } from '../../../../service/patient.service';
import { Observable} from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-excelvalidationdialog',
  templateUrl: './excelvalidationdialog.component.html',
  styleUrls: ['./excelvalidationdialog.component.css']
})
export class ExcelvalidationdialogComponent implements OnInit {

  exceldata;
  employeeList=[];
  public isButtonVisible = true;
  totalError=0;

  public msg=false;
  messagetext='';

  updatemessage:string;
  updateaction:string;
  validFormErr:string;


  test_cls=0;
  constructor(
    private router:Router,
    public dialogRef: MatDialogRef<ExcelvalidationdialogComponent> ,
    private commonService:CommonService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any 
    ) {

    this.exceldata = this.data;  
    console.log("Start");
    console.log(this.employeeList);
    console.log("End");
   }

  ngOnInit() {
    
    
    const count1 = Object.keys(this.exceldata.estate_name).length;

    if(count1 > 0) {
      let resultObj1;
      for(let i = 0; i<count1; i++){

       // console.log(this.exceldata.age[i]);

       if(this.exceldata.estate_name[i].error != 0){
        this.totalError++;
       }


      resultObj1 = {
          
          'estate_name': this.exceldata.estate_name[i],
          'employee_code': this.exceldata.employee_code[i],
          'pf_no': this.exceldata.pf_no[i],
          'employee_name': this.exceldata.employee_name[i],
          'father_name': this.exceldata.father_name[i],
          'division_or_departm': this.exceldata.division_or_departm[i],
          'category': this.exceldata.category[i],
          'challan':this.exceldata.challan[i],
          'line':this.exceldata.line[i],
          'dob': this.exceldata.dob[i],
          'doj': this.exceldata.doj[i],
          
      }
     // this.selectedSymptom.push(resultObj1);
      this.employeeList.push(resultObj1);
     
      }

          console.log(this.totalError);
          if(this.totalError >0){
            this.isButtonVisible = false;
            
          }
        
   

  }


    
  }



  errorcheck(value){
    console.log(value);
    if(value=='0' || value==0){return false;}else{return  true;}
    }


    saveData(){
      console.log('save');
      console.log(this.employeeList);

      let response;
    this.commonService.insertIntoEmployee(this.employeeList,).then(data => {
      response = data;
      if(response.msg_data == "SUCCESS" && response.msg_status == "200"){
        //this.openDialog();
        this.isButtonVisible=false;
      

        this.updatemessage='Saved Successfully';
        this.updateaction='Import File';
 
        console.log('success');
        this.openSnackBar(this.updatemessage,this.updateaction);
       
      }
      else{
      //  this.openDialogError();
     

        this.updatemessage='Something Wrong!';
        this.updateaction='';
  
        
        this.openSnackBar(this.updatemessage,this.updateaction);

      }
      console.log(response);
    },
    error => {
        console.log("There is some error on submitting...");
    });
    }


    redirectToComp(){
     
      this.dialogRef.close();
      this.router.navigateByUrl('panel/excel');
     
    }    


    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

}//end of class
