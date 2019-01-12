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
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CommonService } from '../../service/common.service';
import { RegistrationService } from '../../service/registration.service';
import { DatashareService } from '../../service/datashare.service';
import { Router } from '@angular/router';
import { PhramcyService } from '../../service/phramcy.service';
import { FormGroup, FormControl } from '@angular/forms';
var PharmacymedicinelistComponent = /** @class */ (function () {
    function PharmacymedicinelistComponent(commonService, registerService, datashareService, router, phramcyService) {
        this.commonService = commonService;
        this.registerService = registerService;
        this.datashareService = datashareService;
        this.router = router;
        this.phramcyService = phramcyService;
        this.openReglistBlock = true;
        this.openVisitedBlock = false;
        this.prescriptionList = [];
        this.recordsFound = false;
        this.isButtonActive = true;
        this.displayedColumns = [
            'action',
            'patient_code',
            'patient_name',
            'mobile_one'
        ];
        this.pharmacyListsrchForm = new FormGroup({
            pharmcylistSrchDt: new FormControl((new Date()).toISOString())
        });
    }
    PharmacymedicinelistComponent.prototype.ngOnInit = function () {
        this.isButtonActive = true;
        //this.getTodaysRegForDoc("ALL","N");
        this.getPrescriptionsForPharmcy(new Date().toDateString());
        document.querySelector('.prescriptionBtn').style.display = 'block';
        document.querySelector('.prescriptionLoader').style.display = 'none';
    };
    PharmacymedicinelistComponent.prototype.searchPrescriptionList = function () {
        var searchdt = this.pharmacyListsrchForm.get("pharmcylistSrchDt").value;
        this.getPrescriptionsForPharmcy(searchdt);
    };
    PharmacymedicinelistComponent.prototype.getPrescriptionsForPharmcy = function (date) {
        var _this = this;
        this.prescriptionList = [];
        var dataval;
        var presclist;
        this.phramcyService.getPrescriptionsListForPharmcy(date).then(function (data) {
            dataval = data;
            presclist = dataval.result;
            _this.prescriptionList.push(presclist);
            console.log(_this.prescriptionList);
            var tcount = _this.prescriptionList[0].length;
            if (tcount > 0) {
                _this.recordsFound = true;
                _this.dataSource = new MatTableDataSource(_this.prescriptionList[0]);
            }
        }, function (error) {
            console.log("error in todays pharamcy medicine list");
        });
    };
    /*
      getTodaysRegForDoc(type,serve) {
        this.todaysregistrationList = [];
        this.recordsFound  = false;
        let dataval;
        let regdata;
        this.registerService.getTodaysRegForDoc(type,serve).then(data => {
          dataval = data;
          regdata = dataval.todaysreg_data;
         
          this.todaysregistrationList.push(regdata);
          const tcount = this.todaysregistrationList[0].length;
         if(tcount > 0){
           this.recordsFound = true;
         }
          this.dataSource = new MatTableDataSource(this.todaysregistrationList[0]);
          
        },
        error => {
         console.log("error in todays registration list");
       });
      }
     */
    PharmacymedicinelistComponent.prototype.getMedicineByPresciption = function (event, data) {
        //console.log(event); 
        //console.log(event.target.id); 
        document.querySelector('#prescriptrowBtn_' + data.prescription_ID).style.display = 'none';
        document.querySelector('#prescriptrowLoader_' + data.prescription_ID).style.display = 'block';
        this.datashareService.savePrescriptionRowData(data);
        this.router.navigate(['/panel/medicineissue']);
    };
    __decorate([
        ViewChild(MatPaginator),
        __metadata("design:type", MatPaginator)
    ], PharmacymedicinelistComponent.prototype, "paginator", void 0);
    __decorate([
        ViewChild(MatSort),
        __metadata("design:type", MatSort)
    ], PharmacymedicinelistComponent.prototype, "sort", void 0);
    PharmacymedicinelistComponent = __decorate([
        Component({
            selector: 'app-pharmacymedicinelist',
            templateUrl: './pharmacymedicinelist.component.html',
            styleUrls: ['./pharmacymedicinelist.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [CommonService,
            RegistrationService,
            DatashareService,
            Router,
            PhramcyService])
    ], PharmacymedicinelistComponent);
    return PharmacymedicinelistComponent;
}());
export { PharmacymedicinelistComponent };
//# sourceMappingURL=pharmacymedicinelist.component.js.map