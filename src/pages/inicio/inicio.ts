import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';

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

  constructor(private backgroundGeolocation: BackgroundGeolocation, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
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
