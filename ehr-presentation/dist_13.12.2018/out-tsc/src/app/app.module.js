var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokeninterceptorService } from './service/tokeninterceptor.service';
import { GlobalconstantService } from './service/globalconstant.service';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatMenuModule } from '@angular/material';
import { AppMaterialModule } from './app-material/app-material.module';
var AppModule = /** @class */ (function () {
    function AppModule(router) {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
            ],
            imports: [
                BrowserModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                AppMaterialModule,
                HttpClientModule,
                AppRoutingModule,
                LayoutModule,
                MatToolbarModule,
                MatSidenavModule,
                MatListModule,
                MatMenuModule
            ],
            providers: [GlobalconstantService, AuthService, ErrorHandler,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: TokeninterceptorService,
                    multi: true
                }
            ],
            bootstrap: [AppComponent]
        }),
        __metadata("design:paramtypes", [Router])
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map