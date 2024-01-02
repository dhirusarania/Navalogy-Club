import { Routes } from '@angular/router';
import { Page404Component } from './page-404/page-404.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
    { path: '**', component: Page404Component },
    { path: './', component:HomeComponent },
    
];
