var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PatienregistrationComponent } from './patienregistration.component';
var routes = [
    {
        path: '', component: PatienregistrationComponent
    }
];
var PatienregistrationRoutingModule = /** @class */ (function () {
    function PatienregistrationRoutingModule() {
    }
    PatienregistrationRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], PatienregistrationRoutingModule);
    return PatienregistrationRoutingModule;
}());
export { PatienregistrationRoutingModule };
//# sourceMappingURL=patienregistration-routing.module.js.map