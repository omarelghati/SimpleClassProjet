import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { routing } from './app.routing';
import { AuthService } from './auth.service';
import { WelcomeComponent } from './welcomepage/welcome.component';
import { WelcomepComponent } from './welcomeprof/welcome.component';
import { WelcomeContent } from './welcomepage/welcomeContent.component';
import { WelcomepContent } from './welcomeprof/welcomeContent.component';
import { Popup } from './welcomepage/remarquePopup.component';
import { Chart } from './welcomepage/chart.component';
import { ChartProf } from './welcomeprof/chart.component';
import { PopupAdd } from './welcomeprof/addEleve.component';
import { LogoutComponent } from './logout/logout.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    WelcomeComponent,
    WelcomepComponent,
    WelcomeContent,
    WelcomepContent,
    Popup,
    PopupAdd,
    LogoutComponent,
    Chart,
    ChartProf
          ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
   ChartsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
