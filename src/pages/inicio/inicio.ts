import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
// import { Geolocation } from 'ionic-native'; Esto no funciona
import { Platform } from 'ionic-angular';
import { ModalNuevoSitioPage } from '../modal-nuevo-sitio/modal-nuevo-sitio';

declare var google: any;

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  logs: string[] = [];
  map: any; // Manejador
  coords : any = { lat: 0, lng: 0 };

  constructor(
    private backgroundGeolocation: BackgroundGeolocation,
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public modalCtrl: ModalController
  ) {
    platform.ready().then(() => {
      this.obtenerPosicion();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }
  nuevoSitio(){
    // aquí vamos a abrir el modal para añadir nuestro sitio.
    let mimodal = this.modalCtrl.create( ModalNuevoSitioPage,this.coords );
    mimodal.present();
  }

  /*
  loadMap(){
    let mapContainer = document.getElementById('map');
    this.map = new google.maps.Map(mapContainer, {
      center: this.coords,
      zoom: 12
    });

    let miMarker = new google.maps.Marker({
      icon : 'assets/img/ico_estoy_aqui.png',
      map: this.map,
      position: this.coords
    });
  }
  */

  obtenerPosicion(): any{
    //BackgroundGeolocation.getCurrentPosition
    this.cambiarPosicion(36.5378761,-4.6399426);
  }

  cambiarPosicion(lat: number, lng: number){
    this.coords.lat = lat;
    this.coords.lng = lng;
  }

  start(){
    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 1,
      distanceFilter: 1,
      debug: true,
      stopOnTerminate: false,
      // Android only section
      locationProvider: 1,
      startForeground: true,
      interval: 6000,
      fastestInterval: 5000,
      activitiesInterval: 10000,
    };

    console.log('start');

    this.backgroundGeolocation
    .configure(config)
    .then((location: BackgroundGeolocationResponse) => {
      console.log(location);
      this.logs.push(`${location.latitude},${location.longitude}`);
    });
    // start recording location
    this.backgroundGeolocation.start();

  }

}
