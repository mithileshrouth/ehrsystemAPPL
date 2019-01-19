import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';


import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { OkdialogComponent } from './components/dialog/okdialog/okdialog.component';
import { SuccessdialogComponent } from './components/successdialog/successdialog.component';
import { ConfirmationdischargeComponent } from  './components/confirmationdischarge/confirmationdischarge.component';
import { MasterentrydialogComponent } from './components/masterentrydialog/masterentrydialog.component';



@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule
       
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, OkdialogComponent , SuccessdialogComponent , ConfirmationdischargeComponent, MasterentrydialogComponent  ],
    entryComponents : [SuccessdialogComponent , ConfirmationdischargeComponent , MasterentrydialogComponent ]
 
})
export class LayoutModule {}
