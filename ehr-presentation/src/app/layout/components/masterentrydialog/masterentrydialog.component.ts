import { Component, OnInit,Inject } from '@angular/core';
import { CommonService } from '../../../service/common.service';
import { Validators, FormBuilder, FormGroup, FormControl , FormArray } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { MatSelect, VERSION } from '@angular/material';



@Component({
  selector: 'app-masterentrydialog',
  templateUrl: './masterentrydialog.component.html',
  styleUrls: ['./masterentrydialog.component.css']
})
export class MasterentrydialogComponent implements OnInit {
  fieldsArry = [];
  msg:string;
  heading:string;
  msgIcon:string;
  iconColor:string;
  redirectUrl:string;
  tablename : string;
  dataFrom : string;
  formIntilizeGroup ;
  masterEntryForm:any = FormGroup;

  dynamicForm:any = FormGroup;

  constructor(private router:Router,public dialogRef: MatDialogRef<MasterentrydialogComponent> , private commonService:CommonService, @Inject(MAT_DIALOG_DATA) public data: any , private fb: FormBuilder ) { 

    this.fieldsArry = this.data.fielddatas;  
    this.tablename = this.data.tbl;  
    this.dataFrom = this.data.datafrom;
    this.heading = this.data.heading;
    this.formIntilizeGroup = this.data.initializeField

    this.masterEntryForm = new FormGroup(this.formIntilizeGroup);
    //console.log(this.masterEntryForm);
  }


  ngOnInit() {

  }


  closeDialog(): void {
    let data = {"from":"Close"}
    this.dialogRef.close();
  }


  saveMasterEntryData(){
    let response;
    let otherinfo = {tname:this.tablename,datafrm:this.dataFrom}
    let params = {
      formsVal : this.masterEntryForm.value,
      otherInfo : otherinfo
    }
   
    this.commonService.saveMasterDataByDialog(params).then(data => {
      response = data;
     if(response.msg_status == 200) {
      this.dialogRef.close();
     }
     else{
       console.log();
     }
             
    },
    error => {
     console.log("There is some error in master data entry dialog...");
   });
  }



}
