import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExploreCarsComponent } from './explore-cars/explore-cars.component';
import { HomeComponent } from './home/home.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IonicModule } from '@ionic/angular';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOperationsComponent } from './admin-operations/admin-operations.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BuyCarComponent } from './buy-car/buy-car.component';
import { PaymentComponent } from './payment/payment.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewMyCarsComponent } from './view-my-cars/view-my-cars.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'explore', component: ExploreCarsComponent },
  { path: 'about', component: AboutUSComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'adminoperation', component: AdminOperationsComponent },
  { path: 'deletecar', component: DeleteCarComponent },
  { path: 'buycar', component: BuyCarComponent },
  { path: 'updatecar', component: UpdateCarComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'view', component: ViewMyCarsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), IonicModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
