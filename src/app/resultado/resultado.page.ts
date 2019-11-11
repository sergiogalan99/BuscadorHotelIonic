import { Camas } from './../core/model/camas';
import { TipoHabitacion } from './../core/model/tipoHabitacion';
import { Categoria } from './../core/model/categoria';
import { Seleccion } from './../core/model/seleccion';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../core/model/hotel';
import { Habitacion } from '../core/model/habitacion';
import { PeticionControllerService } from '../shared/peticion-controller.service';

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
  private result




  constructor(public router: Router, public peticionService: PeticionControllerService) {

    this._arrayHoteles = this.router.getCurrentNavigation().extras.state.hoteles;
    // console.log(this._arrayHoteles[0].categoria);
    // this.result = this._arrayHoteles.filter(habitacion =>  habitacion.categoria === this._seleccion.categoria);
    // console.log(this.result);



  }


  ngOnInit() {
  }
  public get arrayHoteles() {
    return this._arrayHoteles;
  }
}
