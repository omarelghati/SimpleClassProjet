import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import {WelcomeComponent} from './welcomepage/welcome.component';
import {WelcomepComponent} from './welcomeprof/welcome.component';
import {WelcomeContent} from './welcomepage/welcomeContent.component';
import {LogoutComponent} from './logout/logout.component';
const APP_ROUTES: Routes = [
    { path: '', component: SigninComponent },
    { path: 'welcome', component: WelcomeComponent},
    {path: 'prof', component: WelcomepComponent },
    {path: 'logout', component: LogoutComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);