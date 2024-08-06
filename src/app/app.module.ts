import { IonicModule } from '@ionic/angular';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExploreCarsComponent } from './explore-cars/explore-cars.component';
import { HomeComponent } from './home/home.component';
import { Component } from '@angular/core';
import { AboutUSComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOperationsComponent } from './admin-operations/admin-operations.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BuyCarComponent } from './buy-car/buy-car.component';
import { PaymentComponent } from './payment/payment.component';
import { RouterModule, ROUTES } from '@angular/router';
import { UpdateCarComponent } from './update-car/update-car.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewMyCarsComponent } from './view-my-cars/view-my-cars.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExploreCarsComponent,
    AboutUSComponent,
    LoginComponent,
    RegisterComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminOperationsComponent,
    DeleteCarComponent,
    NotFoundComponent,
    BuyCarComponent,
    PaymentComponent,
    UpdateCarComponent,
    FeedbackComponent,
    ContactUsComponent,
    ViewMyCarsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
