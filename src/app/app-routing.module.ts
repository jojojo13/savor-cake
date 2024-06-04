import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { CreateCakeFormComponent } from './components/admin/create-cake-form/create-cake-form.component';
import { CakeManagementPageAdminComponent } from './components/cake-management-page-admin/cake-management-page-admin.component';
import { BillReportComponent } from './components/bill-report/bill-report.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'cart', component: CartContainerComponent },
  { path: 'admin', component: AdminHomeComponent, children:[
    {path:'cakes', component:CakeManagementPageAdminComponent},
    {path:'bill', component:BillReportComponent}
  ] },

]
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
