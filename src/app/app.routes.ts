import { Routes } from '@angular/router';
import { Page404Component } from './page-404/page-404.component';

export const routes: Routes = [
    { path: '**', component: Page404Component },
];
