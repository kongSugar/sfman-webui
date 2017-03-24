import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http, RequestOptions, JsonpModule} from '@angular/http';
import {provideAuth, AuthHttp, AuthConfig}      from 'angular2-jwt';
import {Auth} from "./auth.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {DialogModule, DataTableModule} from 'primeng/primeng';
import {InputTextModule, ButtonModule} from 'primeng/primeng';
import {EditorModule, SharedModule} from 'primeng/primeng';
import {PanelModule, DropdownModule} from 'primeng/primeng';

import {AppRoutesModule} from "./app.routes";
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AccountComponent} from './account/account.component';
import {ExplorerComponent} from './explorer/explorer.component';
import {CalendarComponent} from './calendar/calendar.component';
import {LagerComponent} from './lager/lager.component';
import {ItemsComponent} from './explorer/items/items.component';
import {AuthGuard} from "./auth.guard";
import {LoginComponent} from './login/login.component';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({}), http, options);
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    ExplorerComponent,
    CalendarComponent,
    LagerComponent,
    ItemsComponent,
    LoginComponent
  ],
  imports: [
    DialogModule, PanelModule, DropdownModule, DataTableModule,
    InputTextModule,
    ButtonModule,
    EditorModule,
    SharedModule,
    AppRoutesModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule, JsonpModule
  ],
  providers: [
    AuthGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
