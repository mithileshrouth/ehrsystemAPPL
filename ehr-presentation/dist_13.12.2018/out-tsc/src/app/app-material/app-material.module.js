var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatMenuModule, MatNativeDateModule, MatSortModule, MatPaginatorModule, MatButtonToggleModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatBadgeModule } from '@angular/material/badge';
var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                MatInputModule,
                MatIconModule,
                MatButtonModule,
                MatCheckboxModule,
                MatProgressSpinnerModule,
                MatToolbarModule,
                MatSidenavModule,
                MatListModule,
                MatMenuModule,
                MatExpansionModule,
                MatCardModule,
                MatAutocompleteModule,
                MatDividerModule,
                MatFormFieldModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatGridListModule,
                MatTableModule,
                FlexLayoutModule,
                MatDialogModule,
                MatTabsModule,
                MatSortModule,
                MatPaginatorModule,
                MatRadioModule,
                MatSelectModule,
                NgxMatSelectSearchModule,
                MatButtonToggleModule,
                MatBadgeModule
            ],
            declarations: [],
            exports: [
                MatInputModule,
                MatIconModule,
                MatButtonModule,
                MatCheckboxModule,
                MatProgressSpinnerModule,
                MatToolbarModule,
                MatSidenavModule,
                MatListModule,
                MatMenuModule,
                MatExpansionModule,
                MatCardModule,
                MatAutocompleteModule,
                MatDividerModule,
                MatFormFieldModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatGridListModule,
                MatTableModule,
                FlexLayoutModule,
                MatDialogModule,
                MatTabsModule,
                MatSortModule,
                MatPaginatorModule,
                MatRadioModule,
                MatSelectModule,
                NgxMatSelectSearchModule,
                MatButtonToggleModule,
                MatBadgeModule
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());
export { AppMaterialModule };
//# sourceMappingURL=app-material.module.js.map