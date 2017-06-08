import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import {WelcomeComponent} from './welcomepage/welcome.component';
import {WelcomeContent} from './welcomepage/welcomeContent.component';
const APP_ROUTES: Routes = [
    { path: '', component: SigninComponent },
    { path: 'welcome', component: WelcomeComponent,
    children :[
        { path:'omar', component:WelcomeContent}
    ]}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);