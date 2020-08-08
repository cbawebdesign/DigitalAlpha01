import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { StrategyComponent } from './strategy/strategy.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DisclaimersComponent } from './disclaimers/disclaimers.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import {PortfolioCardComponent} from './portfolio/portfolioCard.component';
import { DalphateamComponent } from './dalphateam/dalphateam.component';
import { DalphaportfolioComponent } from './dalphaportfolio/dalphaportfolio.component';
import { ContactusComponent } from './contactus/contactus.component';
import {SharedModule} from './shared.module';
import { ResponsibilitiesComponent } from './responsibilities/responsibilities.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';

import { LoginComponent } from './login/login.component';


import { SignInComponent } from 'src/app/components/signin/signin.component';
//import { ComponentsComponent } from 'src/app/components/components.component';

import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

import { AuthService } from '../services/auth.service';


import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [ StrategyComponent, SignUpComponent, LoginComponent, DashboardComponent, SignInComponent, PortfolioComponent, DisclaimersComponent, OurteamComponent, PortfolioCardComponent,  DalphateamComponent, DalphaportfolioComponent, ResponsibilitiesComponent,  /*ContactusComponent*/],
  imports: [
    CommonModule,
    FormsModule,
    HomeModule,
    PagesRoutingModule,
    SharedModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],


  providers: [
    AuthService
  ],

})
export class PagesModule { }
