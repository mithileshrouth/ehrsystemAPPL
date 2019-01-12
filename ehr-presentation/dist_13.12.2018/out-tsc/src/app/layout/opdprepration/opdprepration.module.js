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
import { OpdpreprationRoutingModule } from './opdprepration-routing.module';
import { OpdpreprationComponent } from './opdprepration.component';
import { SuccessdialogComponent } from '../components/successdialog/successdialog.component';
var OpdpreprationModule = /** @class */ (function () {
    function OpdpreprationModule() {
    }
    OpdpreprationModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                OpdpreprationRoutingModule,
                AppMaterialModule,
                FormsModule,
                ReactiveFormsModule
            ],
            providers: [],
            declarations: [OpdpreprationComponent, SuccessdialogComponent],
            entryComponents: [SuccessdialogComponent]
        })
    ], OpdpreprationModule);
    return OpdpreprationModule;
}());
export { OpdpreprationModule };
//# sourceMappingURL=opdprepration.module.js.map