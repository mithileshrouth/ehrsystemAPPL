var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CommonService } from '../../service/common.service';
import { RegistrationService } from '../../service/registration.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
var SickleaveapprovalComponent = /** @class */ (function () {
    function SickleaveapprovalComponent(commonservice, registrationService, router) {
        this.commonservice = commonservice;
        this.registrationService = registrationService;
        this.router = router;
        this.displayedColumns = ['action',
            'patient_code',
            'patient_name',
            'gender',
            'division_number',
            'challan_number',
            'line_number',
            'mobile_one',
            'no_of_days_sick'];
        this.sickLeaveList = [];
        this.recordsFound = false;
        this.isButtonActive = true;
        this.sickLeaveApprovalCount = 0;
        this.totalTodaysRegCount = 0;
        this.date = new FormControl(new Date());
    }
    SickleaveapprovalComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    SickleaveapprovalComponent.prototype.ngOnInit = function () {
        this.getSickApproveList();
        this.getSickLeaveApproveCount();
        //this.dataSource.paginator = this.paginator;
    };
    SickleaveapprovalComponent.prototype.getSickApproveList = function () {
        var _this = this;
        //sickleaveList
        this.sickLeaveList = [];
        this.recordsFound = false;
        var dataval;
        var sickLeaveData;
        this.commonservice.getSickApproveList().then(function (data) {
            dataval = data;
            sickLeaveData = dataval.sickleaveList;
            _this.sickLeaveList.push(sickLeaveData);
            var tcount = _this.sickLeaveList[0].length;
            if (tcount > 0) {
                _this.recordsFound = true;
            }
            _this.dataSource = new MatTableDataSource(_this.sickLeaveList[0]);
        }, function (error) {
            console.log("Error in listing sick leave");
        });
    };
    SickleaveapprovalComponent.prototype.getSickLeaveApproveCount = function () {
        var _this = this;
        var sickLeaveListCount = [];
        this.totalTodaysRegCount = 0;
        this.sickLeaveApprovalCount = 0;
        var dataval;
        var countData;
        this.commonservice.getSickLeaveApproveCount().then(function (data) {
            dataval = data;
            countData = dataval.result;
            //console.log(countData);
            _this.totalTodaysRegCount = countData.totalRegister;
            _this.sickLeaveApprovalCount = countData.totalApproved;
        }, function (error) {
            console.log("Error in listing sick leave count");
        });
    };
    SickleaveapprovalComponent.prototype.sickApprove = function (opdId, status) {
        var _this = this;
        var sickLeaveApprovalStatus;
        var response;
        if (status == 'Y') {
            sickLeaveApprovalStatus = 'N';
        }
        else {
            sickLeaveApprovalStatus = 'Y';
        }
        this.registrationService.sickApprove(opdId, sickLeaveApprovalStatus).then(function (data) {
            response = data;
            if (response.result == 1) {
                _this.getSickApproveList();
                _this.getSickLeaveApproveCount();
            }
        }, function (error) {
            console.log("Error in sick approve update");
        });
    };
    SickleaveapprovalComponent.prototype.goTodaysRegistration = function () {
        this.router.navigateByUrl('panel/todaysreg');
    };
    __decorate([
        ViewChild(MatPaginator),
        __metadata("design:type", MatPaginator)
    ], SickleaveapprovalComponent.prototype, "paginator", void 0);
    SickleaveapprovalComponent = __decorate([
        Component({
            selector: 'app-sickleaveapproval',
            templateUrl: './sickleaveapproval.component.html',
            styleUrls: ['./sickleaveapproval.component.css']
        }),
        __metadata("design:paramtypes", [CommonService, RegistrationService, Router])
    ], SickleaveapprovalComponent);
    return SickleaveapprovalComponent;
}());
export { SickleaveapprovalComponent };
//# sourceMappingURL=sickleaveapproval.component.js.map