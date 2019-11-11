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

  /**
   * Getter $extrasHtml
   * @return {boolean[] }
   */
  public get $extrasHtml() {
    return this.extrasHtml;
  }

  /**
   * Setter $extrasHtml
   * @param {boolean[] } value
   */
  public set $extrasHtml(value) {
    this.extrasHtml = value;
  }


  public get $seleccionCategoria(): string {
    return this.seleccionCategoria;
  }
  public get $seleccionCama(): string {
    return this.seleccionCama;
  }
  public get $seleccionCapacidad(): string {
    return this.seleccionCapacidad;
  }
  public set $seleccionCategoria(value: string) {
    this.seleccionCategoria = value;
  }
  public set $seleccionCama(value: string) {
    this.seleccionCama = value;
  }
  public set $seleccionCapacidad(value: string) {
    this.seleccionCapacidad = value;
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

  private _arrayCategoria = [];
  private _arrayCama = [];
  private _arrayCapacidad = [];
  private _arrayExtras = [];
  private seleccionCategoria: string = "";
  private seleccionCama: string = "";
  private seleccionCapacidad: string = "";
  private extrasHtml = [];

  knobValues = {
    upper: 1000,
    lower: 0
  };

  ngOnInit() {


  }

  public updatePriceLabels() {
    console.log(this.extrasHtml)
    this.peticionService.$habitacionMin = new Habitacion(new TipoHabitacion(Capacidad[this.$seleccionCapacidad], Camas[this.$seleccionCama], new Complemento(this.extrasHtml)), this.knobValues.lower,'');
    this.peticionService.$habitacionMax = new Habitacion(new TipoHabitacion(Capacidad[this.$seleccionCapacidad], Camas[this.$seleccionCama], new Complemento(this.extrasHtml)), this.knobValues.upper,"");
    this.peticionService.$puntuacion = Categoria[this.seleccionCategoria];
    this.peticionService.lanzar();
  }

}
