import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { CoordsProvider } from '../../providers/coords/coords';
import { CoordsProvider } from '../../providers/coords/coords';

/**
 * Generated class for the ListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html',
})
export class ListadoPage {
  // coordenadas: {lat: number, lng: number, add: string}[] = [{lat: 1, lng: 2, add: "A"}];

  constructor(public navCtrl: NavController, public navParams: NavParams, public coordP: CoordsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');

    // this.coordenadas = this.coordP.getCoord();
  }

}
