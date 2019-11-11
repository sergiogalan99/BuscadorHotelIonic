import { Component, OnInit } from '@angular/core';
import { PeticionControllerService } from '../shared/peticion-controller.service';
import { Categoria } from '../core/model/categoria';
import { Camas } from '../core/model/camas';
import { Capacidad } from '../core/model/capacidad';
import { Extras } from '../core/model/extras';
import { TipoHabitacion } from '../core/model/tipoHabitacion';
import { Habitacion } from '../core/model/habitacion';
import { Complemento } from '../core/model/complemento';

@Component({
  selector: 'app-peticion',
  templateUrl: './peticion.page.html',
  styleUrls: ['./peticion.page.scss'],
})
export class PeticionPage implements OnInit {
  private _arrayCategoria = [];
  private _arrayCama = [];
  private _arrayCapacidad = [];
  private _arrayExtras = [];
  private _seleccionCategoria: string = "";
  private _seleccionCama: string = "";
  private _seleccionCapacidad: string = "";
  private _extrasHtml = [];

  knobValues = {
    upper: 1000,
    lower: 0
  };

  constructor(public peticionService: PeticionControllerService) {
    for (let index = 0; index < Object.keys(Categoria).length / 2; index++) {
      this._arrayCategoria.push(Categoria[index].toString());
    }
    for (let index = 0; index < Object.keys(Camas).length / 2; index++) {
      this._arrayCama.push(Camas[index].toString());
    }
    for (let index = 0; index < Object.keys(Capacidad).length / 2; index++) {
      this._arrayCapacidad.push(Capacidad[index].toString());
    }
    for (let index = 0; index < Object.keys(Extras).length / 2; index++) {
      this._arrayExtras.push(Extras[index].toString());
    }
  }

  public get seleccionCategoria(): string {
    return this._seleccionCategoria;
  }
  public get seleccionCama(): string {
    return this._seleccionCama;
  }
  public get seleccionCapacidad(): string {
    return this._seleccionCapacidad;
  }
  public get arrayCategoria() {
    return this._arrayCategoria;
  }
  public get arrayCama() {
    return this._arrayCama;
  }
  public get arrayCapacidad() {
    return this._arrayCapacidad;
  }
  public get arrayExtras() {
    return this._arrayExtras;
  }
  public get extrasHtml() {
    return this._extrasHtml;
  }
 
  public set seleccionCategoria(value: string) {
    this._seleccionCategoria = value;
  }
  public set seleccionCama(value: string) {
    this._seleccionCama = value;
  }
  public set seleccionCapacidad(value: string) {
    this._seleccionCapacidad = value;
  }
  public set extrasHtml(value) {
    this._extrasHtml = value;
  }
  ngOnInit() {

  }

  public updatePriceLabels() {
    this.peticionService.precioMin = new Habitacion(new TipoHabitacion(Capacidad[this._seleccionCapacidad], Camas[this._seleccionCama], new Complemento(this._extrasHtml)), this.knobValues.lower,'');
    this.peticionService.precioMax = new Habitacion(new TipoHabitacion(Capacidad[this._seleccionCapacidad], Camas[this._seleccionCama], new Complemento(this._extrasHtml)), this.knobValues.upper,"");
    this.peticionService.puntuacion = Categoria[this._seleccionCategoria];
    this.peticionService.lanzar();
  }

}
