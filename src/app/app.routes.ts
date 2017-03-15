import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AccountComponent} from "./account/account.component";

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];


export const AppRoutesModule = RouterModule.forRoot(ROUTE_CONFIG);
