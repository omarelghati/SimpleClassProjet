import { Route } from '@angular/router';
import {WelcomeComponent } from './index';

export const HomeRoutes : Route[] = [
    {path : 'welcomepage',component: WelcomeComponent},
     { path: 'lazy', loadChildren: 'lazy/lazy.module#LazyModule' }
];