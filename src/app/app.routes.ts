import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AccountComponent} from "./account/account.component";
import {LagerComponent} from "./lager/lager.component";
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
    path: 'home',
    component: HomeComponent, canActivate: [AuthGuard]
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
    path: 'test',
    component: LagerComponent, canActivate: [AuthGuard]
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
