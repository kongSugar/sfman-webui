import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http, RequestOptions, JsonpModule} from '@angular/http';
import {provideAuth, AuthHttp, AuthConfig}      from 'angular2-jwt';
import {Auth} from "./auth.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy, APP_BASE_HREF} from '@angular/common';


import {DialogModule, DataTableModule, InputMaskModule} from 'primeng/primeng';
import {InputTextModule, ButtonModule} from 'primeng/primeng';
import {EditorModule, SharedModule} from 'primeng/primeng';
import {PanelModule, DropdownModule} from 'primeng/primeng';

import {AppComponent} from './app.component';
import {AccountComponent} from './account/account.component';
import {ExplorerComponent} from './explorer/explorer.component';
import {CalendarComponent} from './calendar/calendar.component';
import {ItemsComponent} from './explorer/items/items.component';
import {AuthGuard} from "./auth.guard";
import {LoginComponent} from './login/login.component';
import {AuthenticationCallbackActivateGuard} from "./AuthenticationCallbackActivate.guard";
import {ROUTER_PROVIDERS} from "@angular/router/src/router_module";
import {AppRoutesModule} from "./app.routes";


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({}), http, options);
}
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    ExplorerComponent,
    CalendarComponent,
    ItemsComponent,
    LoginComponent
  ],
  imports: [
    DialogModule, PanelModule, DropdownModule, DataTableModule, InputMaskModule,
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
    AuthenticationCallbackActivateGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
