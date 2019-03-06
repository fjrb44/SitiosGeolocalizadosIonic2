import { Injectable } from '@angular/core';

/*
  Generated class for the CoordsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoordsProvider {
  private coord: {lat: number, lng: number, add: string}[];

  constructor() {
    this.coord = [];
    console.log('Hello CoordsProvider Provider');
  }

  aniadirCoor(lat: number, lng: number, add: string){
    const cor = { lat: lat,lng: lng,add: add }
    this.coord.push(cor);
  }

  getCoord():{lat: number, lng: number, add: string}[]{
    return this.coord;
  }
}
