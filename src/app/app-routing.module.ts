import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/login'
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path:'public',
    loadChildren:()=>import('./public/public.module').then(mod=>mod.PublicModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static forChild(routes: Routes): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}
