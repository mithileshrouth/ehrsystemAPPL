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
var DatashareService = /** @class */ (function () {
    function DatashareService() {
        this.sharedData = "";
        this.sharingData = { objPatient: "" };
        this.prescriptionsingleRow = { objPresSingledata: "" };
    }
    DatashareService.prototype.saveData = function (obj) {
        this.sharingData.objPatient = obj;
    };
    DatashareService.prototype.getData = function () {
        return this.sharingData.objPatient;
    };
    DatashareService.prototype.savePrescriptionRowData = function (obj) {
        this.prescriptionsingleRow.objPresSingledata = obj;
    };
    DatashareService.prototype.getPrescriptionRowData = function () {
        return this.prescriptionsingleRow.objPresSingledata;
    };
    DatashareService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DatashareService);
    return DatashareService;
}());
export { DatashareService };
//# sourceMappingURL=datashare.service.js.map