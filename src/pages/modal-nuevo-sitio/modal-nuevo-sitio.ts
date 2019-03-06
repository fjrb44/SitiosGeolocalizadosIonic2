import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CoordsProvider } from '../../providers/coords/coords';

/**
 * Generated class for the ModalNuevoSitioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-nuevo-sitio',
  templateUrl: 'modal-nuevo-sitio.html',
})
export class ModalNuevoSitioPage {
  coords: any = { lat: 0, lng: 0, add: "" }
  description: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private coordP: CoordsProvider
  ) {
  }

  ionViewDidLoad() {
    this.coords.lat = this.navParams.get('lat');
    this.coords.lng = this.navParams.get('lng');
    this.coords.add = this.navParams.get('add');

    this.getAddress(this.coords);
  }
  cerrarModal() {
    this.viewCtrl.dismiss();
  }
  getAddress(coords): any {
    this.coords.add += " Latitud: "+coords.lat+" Longitud: "+coords.lng;
    return coords;
  }
  guardarSitio(){
    this.coordP.aniadirCoor(this.coords.lat, this.coords.lng, this.coords.add);
    this.cerrarModal();
  }
}
