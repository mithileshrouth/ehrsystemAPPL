var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
var GlobalconstantService = /** @class */ (function () {
    function GlobalconstantService() {
        // private APIURL = "http://192.168.2.16:8088/ehrsystem/ehrsrvc/";
        //private APIURL = "http://192.168.2.10/ehrsystem/ehrsrvc/";
        //private APIURL = "http://127.0.0.1:8011/ehrsystem/ehrsrvc/";
        //private APIURL = "http://127.0.0.1/ehrsystem/ehrsrvc/";
        this.APIURL = "http://127.0.0.1/ehrsystem/ehrsrvc/";
        // private APIURL = "http://softhought.com/medewise/ehrsrvc/";
        this.APIKEY = "24ecdccb1258eaacfd441e012ac034392403c692";
        // URL INFO
        //public signin = this.APIURL+"login/getLogin" ;
        this.signin = this.APIURL + "login/getLogin";
        //Patient
        this.ListPatient = this.APIURL + "patient/getAllPatient";
        this.patientdetail_URL = this.APIURL + "patient/getPatientDetail";
        this.registerPatient_URL = this.APIURL + "registration/registerPatient";
        this.addnewPatient_URL = this.APIURL + "patient/addNewPatient";
        this.searchPatient_URL = this.APIURL + "patient/searchPatient";
        this.todaysReg_URL = this.APIURL + "registration/getTodaysRegistration";
        this.isregisterdToday_URL = this.APIURL + "registration/isRegisteredToday";
        // Blood Group
        this.bloodgrpList_URL = this.APIURL + "master/getBloodGroup";
        this.patienttypeList_URL = this.APIURL + "master/getPatientType";
        // Relations
        this.relationList_URL = this.APIURL + "master/getRelations";
        this.hospitalList_URL = this.APIURL + "master/getHospitals";
        this.estateList_URL = this.APIURL + "estate/getEstate";
        this.investigationlist_URL = this.APIURL + "master/getInvestigations";
        this.symptomlist_URL = this.APIURL + "symptoms/getSymptoms";
        this.diseaselist_URL = this.APIURL + "disease/getDiseaseBySymptoms";
        this.medicinelist_URL = this.APIURL + "medicine/getMedicineBySymptoms";
        this.dosageByMedlist_URL = this.APIURL + "medicine/getDosageByMedicine";
        this.frequencyByMedlist_URL = this.APIURL + "medicine/getFrequencyByMedicine";
        this.insertOPD_URL = this.APIURL + "opd/insertIntoOpd";
        this.todaysRegDoct_URL = this.APIURL + "registration/getTodaysRegDoct";
        //sick leave approval
        this.sickApprovalList_URL = this.APIURL + "patient/getSickApprovedList";
        this.sickApprovalUpdate_URL = this.APIURL + "patient/updateSickLeaveApprovalStatus";
        this.sickApprovalCount_URL = this.APIURL + "patient/getSickLeaveApproveCount";
        this.patientPrescInfoBycode_URL = this.APIURL + "opd/getPatientPrescInfoByCode";
        this.patientInfoBycode_URL = this.APIURL + "patient/getPatientInfoByCode";
        this.patientSearchBycode_URL = this.APIURL + "patient/patientSearchByCode";
        /* ---------------------------------------------------------
         * ---------------------------------------------------------
         * @ Pharmcy URL LIST
         * ---------------------------------------------------------
         * ---------------------------------------------------------
         */
        this.todaysPrescriptionPharmcy_URL = this.APIURL + "pharamcy/getPrescriptionListPharamcy";
        this.medicineByprescriptionID_URL = this.APIURL + "pharamcy/getMedicineByPrescription";
        this.insertMedicineIssue_URL = this.APIURL + "pharamcy/insertIntoMedicineIssue";
        this.medicineBatchInfo_URL = this.APIURL + "medicine/getMedicineBatchInfoAccordingtoStock";
        this.deleteRecord_URL = this.APIURL + "remove/removeRecord";
    }
    GlobalconstantService.prototype.getApiURL = function () {
        return this.APIURL;
    };
    GlobalconstantService.prototype.getAPiKey = function () {
        return this.APIKEY;
    };
    GlobalconstantService.prototype.getToken = function () {
        return localStorage.getItem("token");
    };
    GlobalconstantService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GlobalconstantService);
    return GlobalconstantService;
}());
export { GlobalconstantService };
//# sourceMappingURL=globalconstant.service.js.map