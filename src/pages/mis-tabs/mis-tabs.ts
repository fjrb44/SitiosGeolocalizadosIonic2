import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { InicioPage } from "../inicio/inicio";
import { ListadoPage } from "../listado/listado";
import { InfoPage } from "../info/info";

/**
 * Generated class for the MisTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-tabs',
  templateUrl: 'mis-tabs.html'
})
export class MisTabsPage {

  inicioRoot = 'InicioPage';
  listadoRoot = 'ListadoPage';
  infoRoot = 'InfoPage';

  tab1Root: any = InicioPage;
  tab2Root: any = ListadoPage;
  tab3Root: any = InfoPage;

  constructor(public navCtrl: NavController) {}

}
