import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalconstantService } from './globalconstant.service';
import { resolve } from 'url';
import { Observable } from 'rxjs';


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
/**
 * @name deleteRecords
 * @param delid 
 * @desc change status is_deleted 'Y'
 */

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



  saveMasterDataByDialog(datas) {
    let myData = JSON.stringify({datas:datas});
    return new Promise(resolve => {
       this.http.post(this.global.masterDataSave_URL , myData).subscribe(data => {
         resolve(data);
       }, err => {
         console.log(err);
       });
    });
  }


  getMasterInfo(tbl) {
    let data = JSON.stringify({datas:tbl});
    return new Promise(resolve => {
       this.http.post(this.global.getmasterTblData_URL,data).subscribe(data => {
         resolve(data);
       }, err => {
         console.log(err);
       });
    });
  }

  getGroup() {
    return new Promise(resolve => {
       this.http.get(this.global.groupList_URL).subscribe(data => {
         resolve(data);
       }, err => {
         console.log(err);
       });
    });
  }
  

 
/**
 * @author Shankha Ghosh
 * @param formval 
 * @description Inser test name into Investigation table
 */
  insertIntoInvestigation(formval) {
    let datas = JSON.stringify({fdata:formval});
    return new Promise(resolve => {
      this.http.post(this.global.insertINV_URL,datas).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
   });
  }

/**
 * @author Shankha Ghosh
 * @description get Investigation List
 */
getTestList() {
  return new Promise(resolve => {
     this.http.get(this.global.invList_URL).subscribe(data => {
       resolve(data);
     }, err => {
       console.log(err);
     });
  });
}

/**
 * @author Shankha Ghosh
 * @param formval 
 * @description Update investagation data by investagation_id
 */
updateInvestigation(formval) {
  let datas = JSON.stringify({fdata:formval});
  return new Promise(resolve => {
    this.http.post(this.global.updateINV_URL,datas).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
 });
}
  
/**
 * @author Shankha Ghosh
 * @param formval 
 * @description Insert diagonosis into diagonosis table
 */


insertIntoDiagonosis(formval) {
  let datas = JSON.stringify({fdata:formval});
  return new Promise(resolve => {
    this.http.post(this.global.insertDIAG_URL,datas).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
 });
}


/**
 * @author Shankha Ghosh
 * @description get Diagonosis List
 */
getDiagonosisList() {
  return new Promise(resolve => {
     this.http.get(this.global.diagList_URL).subscribe(data => {
       resolve(data);
     }, err => {
       console.log(err);
     });
  });
}

/**
 * @author Shankha Ghosh
 * @description get Diagonosis Data by Id
 */
getDiagonosisDataById(data) {
 // console.log(data);
  let datas = JSON.stringify({data:data});
  return new Promise(resolve => {
    
      this.http.post(this.global.diagData_URL,datas).subscribe(data => {
       resolve(data);
     }, err => {
       console.log(err);
     });
  });
}

/**
 * @author Shankha Ghosh
 * @param formval 
 * @description Update Diagonosis data by diagonosis_id
 */
updateDiagonosis(formval) {
  let datas = JSON.stringify({fdata:formval});
  return new Promise(resolve => {
    this.http.post(this.global.updateDIAG_URL,datas).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
 });
}

/**
 * @author Shankha Ghosh
 * @description get symptoms List
 */
getSymptomsList() {
  return new Promise(resolve => {
     this.http.get(this.global.sympList_URL).subscribe(data => {
       resolve(data);
     }, err => {
       console.log(err);
     });
  });
}

/**
 * @author Shankha Ghosh
 * @param formval 
 * @description Insert symptoms into symptoms table
 */


insertIntoSymptoms(formval) {
  let datas = JSON.stringify({fdata:formval});
  return new Promise(resolve => {
    this.http.post(this.global.insertSYMP_URL,datas).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
 });
}
/**
 * @author Shankha Ghosh
 * @param formval 
 * @description file upload excel
 */
uploadFile(formval) {
  let datas = JSON.stringify({fdata:formval});
  return new Promise(resolve => {
    this.http.post(this.global.excelvalidation_URL,datas).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
 });
}
/**
 * 
 * @param formdata 
 */
public uploadImage(formdata:any){
 // let datas = JSON.stringify({fdata:formdata});
  
  return this.http.post(this.global.excelvalidation_URL,formdata)
  .catch((err) => {
                
    // Do messaging and error handling here

    return Observable.throw(err)
  });

  }

  basicUpload(files: File[]){
    console.log('Files')
    console.log(files);
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f))
    return new Promise(resolve => {
    this.http.post(this.global.excelvalidation_URL, formData)
      .subscribe(event => {  
        console.log('done')
      })
    });
  }


  /**
 * @author Shankha Ghosh
 * @param formval 
 * @description Insert diagonosis into diagonosis table
 */


insertIntoEmployee(formval) {
  let datas = JSON.stringify({fdata:formval});
  return new Promise(resolve => {
    this.http.post(this.global.insertEMP_URL,datas).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
 });
}


/**
 * @author Shankha Ghosh
 * @description get Upload report List by patient id
 */
getUploadreportList(data) {
  let datas = JSON.stringify({data:data}); 
  return new Promise(resolve => {
     this.http.post(this.global.reportUploadList_URL,datas).subscribe(data => {
       resolve(data);
     }, err => {
       console.log(err);
     });
  });
}
deleteReportbyId(data) {
// console.log(data);
let datas = JSON.stringify({data:data});
return new Promise(resolve => {
  
    this.http.post(this.global.deleteReport_URL,datas).subscribe(data => {
     resolve(data);
   }, err => {
     console.log(err);
   });
});
}


/**
 * @author Shankha Ghosh
 * @description delete row record
 */

deleteRowRecords(delid,column,fromtbl) {
  let myData = JSON.stringify({tid:delid,tc:column,from:fromtbl});
  return new Promise(resolve => {
     this.http.post(this.global.deleteRowRecord_URL,myData).subscribe(data => {
       resolve(data);
      
     }, err => {
       console.log(err);
     });
   });
}

/**
 * @author Shankha Ghosh
 * @description filter Test name
 */

filterTestByName(name){
  let myData = JSON.stringify({pcode: name});
   return new Promise(resolve => {
      this.http.post(this.global.testSearchByQry_URL,myData).subscribe(data => {
        resolve(data);
       
      }, err => {
        console.log(err);
      });
    });
}



/**
 * @author Shankha Ghosh
 * @description change status
 */
setstatus(rowid,tablename,columnname,status) {
  // console.log(data);
   let datas = JSON.stringify({rowid:rowid,tablename:tablename,columnname:columnname,value:status});
   return new Promise(resolve => {
     
       this.http.post(this.global.changeStatusData_URL,datas).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
   });
 }

 /**
 * @author Shankha Ghosh
 * @param formval 
 * @description Update Diagonosis data by diagonosis_id
 */
updateSymptoms(formval) {
  let datas = JSON.stringify({fdata:formval});
  return new Promise(resolve => {
    this.http.post(this.global.updateSYMP_URL,datas).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
 });
}


  /**
 * @author Shankha Ghosh
 * @param formval 
 * @description Insert diagonosis into diagonosis table
 */


insertIntoMedicine(formval) {
  let datas = JSON.stringify({fdata:formval});
  return new Promise(resolve => {
    this.http.post(this.global.insertMED_URL,datas).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
 });
}


  /**
 * @author Shankha Ghosh
 * @param formval 
 * @description get dropdown
 */

getDropdownData(tbl) {
  let data = JSON.stringify({datas:tbl});
  return new Promise(resolve => {
     this.http.post(this.global.getmasterDropdown_URL,data).subscribe(data => {
       resolve(data);
     }, err => {
       console.log(err);
     });
  });
}


/**
 * @author Shankha Ghosh
 * @param formval 
 * @description Insert symptoms into symptoms table
 */


insertNewMedicine(formval) {
  let datas = JSON.stringify({fdata:formval});
  return new Promise(resolve => {
    this.http.post(this.global.insertMEDI_URL,datas).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
 });
}

}
