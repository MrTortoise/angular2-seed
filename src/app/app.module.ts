import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {Home, About, Auth, AuthLogin, NavBar} from './components';
import {NgReduxModule} from 'ng2-redux';
import {Providers} from './app.providers';

@NgModule({
  declarations: [AppComponent, About, Home, Auth, AuthLogin, NavBar],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig), NgReduxModule],
  providers   : Providers,
  bootstrap   : [AppComponent]
})
export class AppModule {

}
