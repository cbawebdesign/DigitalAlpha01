import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
//import { ComponentsComponent } from 'src/app/components/components.component';
//import { SigninComponent } from './components/signin/signin.component';

//import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
   // ComponentsComponent,
    //SigninComponent,
   // DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,  // Add this only in the root module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
