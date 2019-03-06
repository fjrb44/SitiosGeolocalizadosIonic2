import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';

import { MisTabsPage } from "../pages/mis-tabs/mis-tabs";
import { InicioPage } from "../pages/inicio/inicio";
import { ListadoPage } from "../pages/listado/listado";
import { InfoPage } from "../pages/info/info";
import { ModalNuevoSitioPage } from '../pages/modal-nuevo-sitio/modal-nuevo-sitio';

import { BackgroundGeolocation } from "@ionic-native/background-geolocation";

@NgModule({
  declarations: [
    MyApp,
    MisTabsPage,
    InicioPage,
    ListadoPage,
    InfoPage,
    ModalNuevoSitioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MisTabsPage,
    InicioPage,
    ListadoPage,
    InfoPage,
    ModalNuevoSitioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BackgroundGeolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
