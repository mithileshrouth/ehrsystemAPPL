var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MedicineissueComponent } from './medicineissue.component';
import { MedicineissueRoutingModule } from './medicineissue-routing.module';
import { SuccessdialogComponent } from '../components/successdialog/successdialog.component';
var MedicineissueModule = /** @class */ (function () {
    function MedicineissueModule() {
    }
    MedicineissueModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                MedicineissueRoutingModule,
                AppMaterialModule,
                FormsModule,
                ReactiveFormsModule
            ],
            providers: [],
            declarations: [MedicineissueComponent, SuccessdialogComponent],
            entryComponents: [SuccessdialogComponent]
        })
    ], MedicineissueModule);
    return MedicineissueModule;
}());
export { MedicineissueModule };
//# sourceMappingURL=medicineissue.module.js.map