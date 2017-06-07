import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { routing } from './app.routing';
import { AuthService } from './auth.service';
import { WelcomeComponent } from './welcomepage/welcome.component';
import { WelcomeContent } from './welcomepage/welcomeContent.component';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    WelcomeComponent,
    WelcomeContent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
