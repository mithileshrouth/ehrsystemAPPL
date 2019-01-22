import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppMaterialModule } from '../../../../app-material/app-material.module';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { SymptomslistRoutingModule } from './symptomslist-routing.module';
import { SymptomslistComponent } from './symptomslist.component';
import { DiagonosisedialogComponent } from '../../components/diagonosisedialog/diagonosisedialog.component';







/* import { SuccessdialogComponent } from '../components/successdialog/successdialog.component'; */

@NgModule({
  imports: [
    CommonModule,
    SymptomslistRoutingModule,

    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule 
    
    
  ],
  providers:[],
  declarations: [SymptomslistComponent, DiagonosisedialogComponent],
  entryComponents : [DiagonosisedialogComponent]
})
export class SymptomslistModule { }
