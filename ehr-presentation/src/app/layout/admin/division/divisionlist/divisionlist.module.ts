import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppMaterialModule } from '../../../../app-material/app-material.module';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { DivisionlistComponent } from './divisionlist.component';
import { DivisionlistRoutingModule } from './divisionlist-routing.module';





@NgModule({
  imports: [
    CommonModule,
    DivisionlistRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule 
    
    
  ],
  providers:[],
  declarations: [DivisionlistComponent],
  entryComponents : [DivisionlistComponent]
})
export class DivisionlistModule { }
