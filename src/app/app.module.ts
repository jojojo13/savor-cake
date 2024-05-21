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
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
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
    CreateCakeFormComponent
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
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
