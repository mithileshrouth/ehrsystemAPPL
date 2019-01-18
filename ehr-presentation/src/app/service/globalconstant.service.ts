import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalconstantService {

  constructor() { }
  
 // private APIURL = "http://192.168.2.16:8088/ehrsystem/ehrsrvc/";
  //private APIURL = "http://192.168.2.10/ehrsystem/ehrsrvc/";
  //private APIURL = "http://127.0.0.1:8011/ehrsystem/ehrsrvc/";
  //private APIURL = "http://127.0.0.1/ehrsystem/ehrsrvc/";
  private APIURL = "http://127.0.0.1/ehrsystemAPPL/ehrsrvc/";
 // private APIURL =  "http://13.234.41.243/devehrsystem/ehrsrvc/";
  //private APIURL = "http://medewise.com/medehr/";
  // private APIURL = "http://softhought.com/medewise/ehrsrvc/";
  private APIKEY = "24ecdccb1258eaacfd441e012ac034392403c692";

  // URL INFO
  //public signin = this.APIURL+"login/getLogin" ;

  public signin = this.APIURL+"login/getLogin";

  //Patient
  public ListPatient = this.APIURL+"patient/getAllPatient";
  public patientdetail_URL = this.APIURL+"patient/getPatientDetail";
  public registerPatient_URL = this.APIURL+"registration/registerPatient";
  public addnewPatient_URL = this.APIURL+"patient/addNewPatient";
  public searchPatient_URL = this.APIURL+"patient/searchPatient";
  

  public todaysReg_URL = this.APIURL+"registration/getTodaysRegistration";
  public isregisterdToday_URL = this.APIURL+"registration/isRegisteredToday";

  public insertVaccination_URL = this.APIURL+"opd/insertIntoVaccination";
  public insertIntoPregnancy_URL = this.APIURL+"opd/savePregnancyInfo";
 

  // Blood Group
  public bloodgrpList_URL = this.APIURL+"master/getBloodGroup";
  public patienttypeList_URL = this.APIURL+"master/getPatientType";
  public empDependPatienttypeList_URL = this.APIURL+"master/getDepTagEmplType";

  // Relations
  public relationList_URL = this.APIURL+"master/getRelations";
  public relationbyTypeList_URL = this.APIURL+"master/getRelationsByType";
  public hospitalList_URL = this.APIURL+"master/getHospitals";
  public estateList_URL = this.APIURL+"estate/getEstate";
  public estateByEmpl_URL = this.APIURL+"estate/getEstateByEmpl";

  public investigationlist_URL = this.APIURL+"master/getInvestigations";
  public symptomlist_URL = this.APIURL+"symptoms/getSymptoms";
  public diseaselist_URL = this.APIURL+"disease/getDiseaseBySymptoms";
  public medicinelist_URL = this.APIURL+"medicine/getMedicineBySymptoms";
  public medicinelistByName_URL = this.APIURL+"medicine/getMedicineByName";
  public allMedicineList_URL = this.APIURL+"medicine/getAllMedicineList";

  public dosageByMedlist_URL = this.APIURL+"medicine/getDosageByMedicine";
  public frequencyByMedlist_URL = this.APIURL+"medicine/getFrequencyByMedicine";

  public insertOPD_URL = this.APIURL+"opd/insertIntoOpd";

  public todaysRegDoct_URL = this.APIURL+"registration/getTodaysRegDoct";

  //sick leave approval
  public sickApprovalList_URL = this.APIURL +"patient/getSickApprovedList";
  public sickApprovalUpdate_URL = this.APIURL +"patient/updateSickLeaveApprovalStatus";
  public sickApprovalCount_URL = this.APIURL+"patient/getSickLeaveApproveCount";


  public patientPrescInfoBycode_URL = this.APIURL+"opd/getPatientPrescInfoByCode";
  public patientLastPregnenctInfoBycode_URL = this.APIURL+"opd/getLastPregnencyInfoByCode";

  public patientInfoBycode_URL = this.APIURL+"patient/getPatientInfoByCode";
  public patientSearchBycode_URL = this.APIURL+"patient/patientSearchByCode";
  public patientSearchByQry_URL = this.APIURL+"patient/patientSearchByQry";
  public associatedEmpSearchBycode_URL = this.APIURL+"patient/associateEmpByCode";
  public patientSearchByaadhar_URL = this.APIURL+"patient/patientSearchByAadhar";
  public ipdpatientByEmpRel_URL = this.APIURL+"patient/getPatientListIPD";

  /* --------------------------------------------------------- 
   * ---------------------------------------------------------
   * @ Pharmcy URL LIST
   * ---------------------------------------------------------
   * ---------------------------------------------------------
   */

  public todaysPrescriptionPharmcy_URL = this.APIURL+"pharamcy/getPrescriptionListPharamcy";
  public todaysIPDPrescriptionPharmcy_URL = this.APIURL+"pharamcy/getIPDPrescriptionListPharamcy";
  public medicineByprescriptionID_URL = this.APIURL+"pharamcy/getMedicineByPrescription";
  public insertMedicineIssue_URL = this.APIURL+"pharamcy/insertIntoMedicineIssue";
  public medicineBatchInfo_URL = this.APIURL+"medicine/getMedicineBatchInfoAccordingtoStock";
  public issuedMedByDateAndMed_URL = this.APIURL+"pharamcy/getIssuedMedByDtAndMed";


  public deleteRecord_URL = this.APIURL+"remove/removeRecord";

    /* --------------------------------------------------------- 
   * ---------------------------------------------------------
   * @ Pharmcy URL IPD
   * ---------------------------------------------------------
   * ---------------------------------------------------------
   */

  public insertIPD_URL = this.APIURL+"ipd/registerIPD";
  public todasyIPDList_URL = this.APIURL+"ipd/getIPDListByDt";
  public ipdDischargeList_URL = this.APIURL+"ipd/getIPDDischargeListByDt";
  public ipdDetailInfoByID_URL = this.APIURL+"ipd/getIpdDetailInfoByID";
  public insertregularVisitIPD_URL = this.APIURL+"ipd/saveIPDRegularVisit";
  public ipddischargeSave_URL = this.APIURL+"ipd/saveIPDDischarge";
  public removeDischarge_URL = this.APIURL+"ipd/removeIPDDischarge";

  public ipdPatientVisitHistory_URL = this.APIURL+"ipd/getIpdPatientVisitHistory";
  public opdPatientPrescHistory_URL = this.APIURL+"opd/getOpdPatientPrescHistory";


  public vaccinationScheduleList_URL = this.APIURL+"master/getVaccinationSchedule";
  public vaccinListByschedule_URL = this.APIURL+"master/getPatientVaccinListBySchedule";




  public masterDataSave_URL = this.APIURL+"master/saveCommonMastDatas";

  getApiURL(){
    return this.APIURL;
  }
 
  getAPiKey(){
    return this.APIKEY;
  }

  public getToken(): string {
    return localStorage.getItem("token");
  }

}