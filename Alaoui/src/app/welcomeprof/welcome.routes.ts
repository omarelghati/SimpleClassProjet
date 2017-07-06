import { Route } from '@angular/router';
import {WelcomepComponent } from './index';

export const HomeRoutes : Route[] = [
    {path : 'welcomepage',component: WelcomepComponent},
     { path: 'lazy', loadChildren: 'lazy/lazy.module#LazyModule' }
];