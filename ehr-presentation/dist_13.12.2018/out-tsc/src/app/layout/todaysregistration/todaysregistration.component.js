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
var TodaysregistrationComponent = /** @class */ (function () {
    function TodaysregistrationComponent(commonService, registerService, datashareService, router) {
        this.commonService = commonService;
        this.registerService = registerService;
        this.datashareService = datashareService;
        this.router = router;
        this.openReglistBlock = true;
        this.openVisitedBlock = false;
        this.todaysregistrationListCount = [];
        this.todaysregistrationList = [];
        this.patientTypeList = [];
        this.recordsFound = false;
        this.isButtonActive = true;
        this.allcount = 0;
        this.pwcount = 0;
        this.twcount = 0;
        this.depcount = 0;
        this.nwcount = 0;
        this.allcountVisited = 0;
        this.pwcountVisited = 0;
        this.twcountVisited = 0;
        this.depcountVisited = 0;
        this.nwcountVisited = 0;
        this.displayedColumns = [
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
        this.tabLoadTimes = [];
        this.step = 0;
        console.log("Data service " + this.datashareService.sharedData);
    }
    TodaysregistrationComponent.prototype.setStep = function (index) {
        this.step = index;
        if (this.step == 0) {
            this.getTodaysRegForDoc("ALL", "Y");
        }
        else if (this.step == 1) {
            this.getTodaysRegForDoc("P/W", "Y");
        }
        else if (this.step == 2) {
            this.getTodaysRegForDoc("T/W", "Y");
        }
        else if (this.step == 3) {
            this.getTodaysRegForDoc("Dep", "Y");
        }
        else if (this.step == 4) {
            this.getTodaysRegForDoc("N/W", "Y");
        }
    };
    TodaysregistrationComponent.prototype.nextStep = function () {
        this.step++;
    };
    TodaysregistrationComponent.prototype.prevStep = function () {
        this.step--;
    };
    TodaysregistrationComponent.prototype.firstTab = function (e) {
        //console.log("fgdsf"+e);
    };
    TodaysregistrationComponent.prototype.ngOnInit = function () {
        this.isButtonActive = true;
        this.getTodaysRegForDoc("ALL", "N");
        this.getTodaysRegForDocCount("ALL", "N");
        this.getTodaysRegForDocCount("P/W", "N");
        this.getTodaysRegForDocCount("T/W", "N");
        this.getTodaysRegForDocCount("Dep", "N");
        this.getTodaysRegForDocCount("N/W", "N");
    };
    TodaysregistrationComponent.prototype.tabChanged = function (tabChangeEvent) {
        this.openReglistBlock = true;
        var tabindx;
        tabindx = tabChangeEvent.index;
        if (tabindx == 0) {
            this.getTodaysRegForDoc("ALL", "N");
        }
        else if (tabindx == 1) {
            this.getTodaysRegForDoc("P/W", "N");
        }
        else if (tabindx == 2) {
            this.getTodaysRegForDoc("T/W", "N");
        }
        else if (tabindx == 3) {
            this.getTodaysRegForDoc("Dep", "N");
        }
        else if (tabindx == 4) {
            this.getTodaysRegForDoc("N/W", "N");
        }
        else if (tabindx == 5) {
            this.openReglistBlock = false;
            this.getTodaysRegForDocCountVisited("ALL", "Y");
            this.getTodaysRegForDocCountVisited("P/W", "Y");
            this.getTodaysRegForDocCountVisited("T/W", "Y");
            this.getTodaysRegForDocCountVisited("Dep", "Y");
            this.getTodaysRegForDocCountVisited("N/W", "Y");
        }
    };
    TodaysregistrationComponent.prototype.getTimeLoaded = function (index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    };
    TodaysregistrationComponent.prototype.getPatientType = function () {
        var _this = this;
        var dataval;
        var patienttypelist;
        this.commonService.getPatientType().then(function (data) {
            dataval = data;
            patienttypelist = dataval.result;
            _this.patientTypeList.push(patienttypelist);
        }, function (error) {
            console.log("There is some error in Estate List...");
        });
    };
    TodaysregistrationComponent.prototype.getTodaysRegForDoc = function (type, serve) {
        var _this = this;
        this.todaysregistrationList = [];
        this.recordsFound = false;
        var dataval;
        var regdata;
        this.registerService.getTodaysRegForDoc(type, serve).then(function (data) {
            dataval = data;
            regdata = dataval.todaysreg_data;
            _this.todaysregistrationList.push(regdata);
            var tcount = _this.todaysregistrationList[0].length;
            if (tcount > 0) {
                _this.recordsFound = true;
            }
            _this.dataSource = new MatTableDataSource(_this.todaysregistrationList[0]);
        }, function (error) {
            console.log("error in todays registration list");
        });
    };
    TodaysregistrationComponent.prototype.getTodaysRegForDocCount = function (type, serve) {
        var _this = this;
        this.todaysregistrationListCount = [];
        var dataval;
        var regdata;
        this.registerService.getTodaysRegForDoc(type, serve).then(function (data) {
            dataval = data;
            regdata = dataval.todaysreg_data;
            _this.todaysregistrationListCount = [];
            _this.todaysregistrationListCount.push(regdata);
            var tcount = 0;
            tcount = _this.todaysregistrationListCount[0].length;
            if (type == "ALL") {
                _this.allcount = tcount;
            }
            else if (type == "P/W") {
                _this.pwcount = tcount;
            }
            else if (type == "T/W") {
                _this.twcount = tcount;
            }
            else if (type == "Dep") {
                _this.depcount = tcount;
            }
            else if (type == "N/W") {
                _this.nwcount = tcount;
            }
        }, function (error) {
            console.log("error in todays registration list");
        });
    };
    TodaysregistrationComponent.prototype.getTodaysRegForDocCountVisited = function (type, serve) {
        var _this = this;
        this.todaysregistrationListCount = [];
        var dataval;
        var regdata;
        this.registerService.getTodaysRegForDoc(type, serve).then(function (data) {
            dataval = data;
            regdata = dataval.todaysreg_data;
            _this.todaysregistrationListCount = [];
            _this.todaysregistrationListCount.push(regdata);
            var tcount = 0;
            tcount = _this.todaysregistrationListCount[0].length;
            if (type == "ALL") {
                _this.allcountVisited = tcount;
            }
            else if (type == "P/W") {
                _this.pwcountVisited = tcount;
            }
            else if (type == "T/W") {
                _this.twcountVisited = tcount;
            }
            else if (type == "Dep") {
                _this.depcountVisited = tcount;
            }
            else if (type == "N/W") {
                _this.nwcountVisited = tcount;
            }
        }, function (error) {
            console.log("error in todays registration list");
        });
    };
    TodaysregistrationComponent.prototype.getPresciption = function (p) {
        //    console.log("P value "+p.registration_id);
        this.isButtonActive = false;
        this.datashareService.saveData(p);
        this.router.navigate(['/panel/opd']);
    };
    TodaysregistrationComponent.prototype.gotoSickLeaveApprovalList = function () {
        this.router.navigateByUrl('panel/sickapproval');
    };
    __decorate([
        ViewChild(MatPaginator),
        __metadata("design:type", MatPaginator)
    ], TodaysregistrationComponent.prototype, "paginator", void 0);
    __decorate([
        ViewChild(MatSort),
        __metadata("design:type", MatSort)
    ], TodaysregistrationComponent.prototype, "sort", void 0);
    TodaysregistrationComponent = __decorate([
        Component({
            selector: 'app-todaysregistration',
            templateUrl: './todaysregistration.component.html',
            styleUrls: ['./todaysregistration.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [CommonService, RegistrationService, DatashareService, Router])
    ], TodaysregistrationComponent);
    return TodaysregistrationComponent;
}());
export { TodaysregistrationComponent };
//# sourceMappingURL=todaysregistration.component.js.map