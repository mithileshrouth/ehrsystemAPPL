import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppMaterialModule } from '../../../../app-material/app-material.module';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { ChallanlistComponent } from './challanlist.component';
import { ChallanlistRoutingModule } from './challanlist-routing.module';







@NgModule({
  imports: [
    CommonModule,
    ChallanlistRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule 
    
    
  ],
  providers:[],
  declarations: [ChallanlistComponent],
  entryComponents : [ChallanlistComponent]
})
export class ChallanlistModule { }
