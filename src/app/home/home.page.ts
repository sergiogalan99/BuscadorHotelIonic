import { Habitacion } from './../core/model/habitacion';
import { GeneradorHoteles } from './../core/model/generador-hoteles';
import { Hotel } from './../core/model/hotel';
import { Seleccion } from './../core/model/seleccion';
import { Component } from '@angular/core';
import { Categoria } from '../core/model/categoria';
import { Capacidad } from '../core/model/capacidad';
import { Camas } from '../core/model/camas';
import { Extras } from '../core/model/extras';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage {

  private _arrayCategoria = [];
  private _arrayCamas = [];
  private _arrayCapacidad = [];
  private _arrayExtras = [];
   seleccion: Seleccion;

   seleccionCategoria :string;
   seleccionCama :string;
   seleccionCapacidad :string;
   seleccionExtras :string;
  knobValues: {} = { upper: 1000, lower: 0 };

  private _hoteles: Hotel[] = [];




  constructor(public router: Router) {
    this._hoteles = new GeneradorHoteles().getHoteles();

    for (let index = 0; index < Object.keys(Categoria).length / 2; index++) {
      this._arrayCategoria.push(Categoria[index].toString());
    }
    for (let index = 0; index < Object.keys(Camas).length / 2; index++) {
      this._arrayCamas.push(Camas[index].toString());
    }
    for (let index = 0; index < Object.keys(Capacidad).length / 2; index++) {
      this._arrayCapacidad.push(Capacidad[index].toString());
    }
    for (let index = 0; index < Object.keys(Extras).length / 2; index++) {
      this._arrayExtras.push(Extras[index].toString());
    }
  }
  public buscarHoteles() {
    this.seleccion = new Seleccion(this.seleccionCategoria);
    console.log(this.seleccion);
    let navigationExtras: NavigationExtras = {
      state: {
        seleccion: this.seleccion,
        hoteles: this._hoteles
      }
    }
    this.router.navigate(['resultado'], navigationExtras);
  }
  public get arrayCategoria() {
    return this._arrayCategoria;
  }
  public get arrayCamas() {
    return this._arrayCamas;
  }
  public get arrayCapacidad() {
    return this._arrayCapacidad;
  }
  public get arrayExtras() {
    return this._arrayExtras;
  }
  
  







}
