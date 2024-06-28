import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { MouseCollectionComponent } from './components/mouse-collection/mouse-collection.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CakeCollectionComponent } from './components/cake-collection/cake-collection.component';
import { BannerComponent } from './components/banner/banner.component';
import { CakeCollectionItemComponent } from './components/cake-collection-item/cake-collection-item.component';
import { CartContainerComponent } from './components/cart-container/cart-container.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { CreateCakeFormComponent } from './components/admin/create-cake-form/create-cake-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CakeAccessoryComponent } from './components/cake-accessory/cake-accessory.component'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { CakeManagementPageAdminComponent } from './components/cake-management-page-admin/cake-management-page-admin.component';
import { BillReportComponent } from './components/bill-report/bill-report.component';
import { MoreIngredientsComponent } from './components/more-ingredients/more-ingredients.component';
import { CakeDrawComponent } from './components/cake-draw/cake-draw.component';
import { PolicyComponent } from './components/policy/policy.component';
import { ShopSystemComponent } from './components/shop-system/shop-system.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoaderComponent } from './loader/loader.component';
import { LoginAdminComponent } from './components/admin/login-admin/login-admin.component';
import { AdminPageComponent } from './components/admin/admin-page/admin-page.component';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { WrapperBillReportComponent } from './components/admin/wrapper-bill-report/wrapper-bill-report.component';
@NgModule({
  declarations: [
    AppComponent,
    WhyChooseUsComponent,
    MouseCollectionComponent,
    CakeCollectionComponent,
    BannerComponent,
    CakeCollectionItemComponent,
    CartContainerComponent,
    WelcomePageComponent,
    FooterComponent,
    AdminHomeComponent,
    CreateCakeFormComponent,
    HeaderComponent,
    CakeAccessoryComponent,
    HeaderAdminComponent,
    CakeManagementPageAdminComponent,
    BillReportComponent,
    MoreIngredientsComponent,
    CakeDrawComponent,
    PolicyComponent,
    ShopSystemComponent,
    LoaderComponent,
    LoginAdminComponent,
    AdminPageComponent,
    WrapperBillReportComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    MatDialogModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule,
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
