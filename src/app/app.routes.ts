import { Routes, RouterModule } from '@angular/router';
import {AccountComponent} from "./account/account.component";
import {ExplorerComponent} from "./explorer/explorer.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {AuthGuard} from "./auth.guard";
import {LoginComponent} from "./login/login.component";


export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
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
    redirectTo: 'login'
  }
];


export const AppRoutesModule = RouterModule.forRoot(ROUTE_CONFIG);
