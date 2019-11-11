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
  private precioMax: number = 100;
  private precioMin: number = 50;
  private seleccionCategoria: string = "";
  private seleccionCama: string = "";
  private seleccionCapacidad: string = "";
  private extrasHtml: boolean[] = [];

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

  ngOnInit() {


  }

  /**
   * Getter $extrasHtml
   * @return {boolean[] }
   */
  public get $extrasHtml(): boolean[] {
    return this.extrasHtml;
  }

  /**
   * Setter $extrasHtml
   * @param {boolean[] } value
   */
  public set $extrasHtml(value: boolean[]) {
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
  public get $precioMax(): number {
    return this.precioMax;
  }
  public get $precioMin(): number {
    return this.precioMin;
  }
  public set $precioMax(value: number) {
    this.precioMax = value;
  }
  public set $precioMin(value: number) {
    this.precioMin = value;
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

  public updatePriceLabels() {
    let extrame: Extras[] = [];
    for (let index = 0; index < this.extrasHtml.length; index++) {
      if (this.$extrasHtml[index] === true) {
        extrame.push(this.arrayExtras[index]);
      }
    }
    // tslint:disable-next-line:max-line-length
    this.peticionService.$habitacionMin = new Habitacion(new TipoHabitacion(Capacidad[this.$seleccionCapacidad], Camas[this.$seleccionCama], new Complemento(extrame)), this.precioMin,'');
    this.peticionService.$habitacionMax = new Habitacion(new TipoHabitacion(Capacidad[this.$seleccionCapacidad], Camas[this.$seleccionCama], new Complemento(extrame)), this.precioMax,"");
    this.peticionService.$puntuacion = Categoria[this.seleccionCategoria];
    this.peticionService.lanzar()
  }

}
