import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [ 
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'reg', loadChildren: './patientreg/patientreg.module#PatientregModule' },
            { path: 'registration', loadChildren: './patienregistration/patienregistration.module#PatienregistrationModule' },
            { path: 'todaysreg' , loadChildren:'./todaysregistration/todaysregistration.module#TodaysregistrationModule'},
            { path:'opd', loadChildren:'./opdprepration/opdprepration.module#OpdpreprationModule'},
            { path:'ipd', loadChildren:'./ipdregistration/ipdregistration.module#IpdregistrationModule'},
            { path:'doctor', loadChildren:'./doctor/doctor.module#DoctorModule'},
            { path:'ipdvisit', loadChildren:'./ipdvisit/ipdvisit.module#IpdvisitModule'},
            { path:'ipdlist', loadChildren:'./ipdlist/ipdlist.module#IpdlistModule'},
            { path:'discharge', loadChildren:'./ipddischarge/ipddischarge.module#IpddischargeModule'},
            { path:'test', loadChildren:'./admin/investigation/investigation.module#InvestigationModule'},
            { path:'testlist', loadChildren:'./admin/investigationlist/investigationlist.module#InvestigationlistModule'},
            { path:'diagnosis', loadChildren:'./admin/diagonosis/diagonosis/diagonosis.module#DiagonosisModule'},
            { path:'diagnosislist', loadChildren:'./admin/diagonosis/diagonosislist/diagonosislist.module#DiagonosislistModule'},
            { path:'excel', loadChildren:'./admin/importexcel/importexcel.module#ImportexcelModule'},
            { path:'symptoms', loadChildren:'./admin/symptoms/symptoms/symptoms.module#SymptomsModule'},
            { path:'symptomslist', loadChildren:'./admin/symptoms/symptomslist/symptomslist.module#SymptomslistModule'},
            { path:'grn', loadChildren:'./admin/importgrn/importgrn.module#ImportgrnModule'},

            { path:'med', loadChildren:'./admin/medicine/medicine/medicine.module#MedicineModule'},
            { path:'medlist', loadChildren:'./admin/medicine/medicinelist/medicinelist.module#MedicinelistModule'},
           

            { path:'sickapproval', loadChildren:'./sickleaveapproval/sickleaveapproval.module#sickleaveapprovalModule'} ,  
            { path:'prescriptionlist', loadChildren:'./pharmacymedicinelist/pharmacymedicinelist.module#PharmacymedicinelistModule'} , 
            { path:'medicineissue', loadChildren:'./medicineissue/medicineissue.module#MedicineissueModule'},
            { path:'reportsupload', loadChildren:'./admin/reportsupload/reportsupload.module#ReportsuploadModule'},
            
           
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
