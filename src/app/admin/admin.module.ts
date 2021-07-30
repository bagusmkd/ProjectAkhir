import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { materialdesain } from '../material/material';
import { DataComponent } from './data/data.component';
import { JadwalComponent } from './jadwal/jadwal.component';

import { TambahdataComponent } from './tambahdata/tambahdata.component';
import { FormsModule } from '@angular/forms';
import { TambahjadwalComponent } from './tambahjadwal/tambahjadwal.component';




const routes: Routes=[
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'data',
        component:DataComponent
      },
      {
        path:'jadwal',
        component:JadwalComponent
      },
    

    ]
  }
]
@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    DataComponent,
    JadwalComponent,

    TambahdataComponent,
    TambahjadwalComponent,
 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    materialdesain,
    FormsModule
  ]
})
export class AdminModule { }
