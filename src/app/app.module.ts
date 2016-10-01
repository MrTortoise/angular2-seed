import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {Home, About, Auth, AuthLogin} from './components';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {NgReduxModule} from 'ng2-redux';

@NgModule({
  declarations: [AppComponent, About, Home, Auth, AuthLogin],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig), NgReduxModule],
  providers   : [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
