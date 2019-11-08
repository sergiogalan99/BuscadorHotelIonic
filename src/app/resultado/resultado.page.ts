import { Camas } from './../core/model/camas';
import { TipoHabitacion } from './../core/model/tipoHabitacion';
import { Categoria } from './../core/model/categoria';
import { Seleccion } from './../core/model/seleccion';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../core/model/hotel';
import { Habitacion } from '../core/model/habitacion';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {
  seleccionDebug;
  public _seleccion: Seleccion;
  public _arrayHoteles: Hotel[];
  private _arrayHabitacion: Habitacion[];
  



  constructor(private router: Router) {

    this._seleccion = this.router.getCurrentNavigation().extras.state.seleccion;
    this._arrayHoteles = this.router.getCurrentNavigation().extras.state.hoteles;
    console.log(this._arrayHoteles);
    this.seleccionDebug = JSON.stringify(this._seleccion);
   
    /*const result = this._arrayHabitacion.filter(habitacion => habitacion.tipoHabitacion.capacidad === this._seleccion.capacidad);
    console.log(result);*/
   


  }


  ngOnInit() {
  }
  public get arrayHoteles() {
    return this._arrayHoteles;
  }
}
