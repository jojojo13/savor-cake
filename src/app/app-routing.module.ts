import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';

import { CakeManagementPageAdminComponent } from './components/cake-management-page-admin/cake-management-page-admin.component';
import { BillReportComponent } from './components/bill-report/bill-report.component';
import { LoginAdminComponent } from './components/admin/login-admin/login-admin.component';
import { AthenticateGuard } from './services/athenticate.guard';
import { AdminPageComponent } from './components/admin/admin-page/admin-page.component';
import { WrapperBillReportComponent } from './components/admin/wrapper-bill-report/wrapper-bill-report.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'cart', component: CartContainerComponent },
  { path: 'admin', component: AdminHomeComponent, children:[
    {path:"login", component: LoginAdminComponent},
    {path:'dashboard', component:AdminPageComponent, canActivate:[AthenticateGuard]},
    {path:'cakes', component:CakeManagementPageAdminComponent, canActivate:[AthenticateGuard]},
    {path:'bills', component:WrapperBillReportComponent, canActivate:[AthenticateGuard]}
  ] }

]
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
