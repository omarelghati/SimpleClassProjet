import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import {WelcomeComponent} from './welcomepage/welcome.component';

const APP_ROUTES: Routes = [
    { path: '', component: SigninComponent },
    { path: 'welcome', component: WelcomeComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);