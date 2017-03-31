import { Routes, RouterModule } from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AccountComponent} from "./account/account.component";
import {ExplorerComponent} from "./explorer/explorer.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {AuthGuard} from "./auth.guard";
import {LoginComponent} from "./login/login.component";
import {AuthenticationCallbackActivateGuard} from "./AuthenticationCallbackActivate.guard";


export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AuthenticationCallbackActivateGuard]
    , pathMatch: "full"
  },
  {
    path: 'account',
    component: AccountComponent, canActivate: [AuthGuard]
  },
  {
    path: 'explorer',
    component: ExplorerComponent, canActivate: [AuthGuard]

  },
  {
    path: 'calendar',
    component: CalendarComponent, canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];


export const AppRoutesModule = RouterModule.forRoot(ROUTE_CONFIG);
