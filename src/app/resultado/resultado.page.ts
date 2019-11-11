import { Hotel } from './../core/model/hotel';
import { Camas } from './../core/model/camas';
import { TipoHabitacion } from './../core/model/tipoHabitacion';
import { Categoria } from './../core/model/categoria';
import { Seleccion } from './../core/model/seleccion';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habitacion } from '../core/model/habitacion';
import { filter } from 'minimatch';
import { from } from 'rxjs';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {
  seleccionDebug;
  public _seleccion: Seleccion;
  public _arrayHoteles: Hotel[];

  fil: Hotel[];




  constructor(private router: Router) {

    this._seleccion = this.router.getCurrentNavigation().extras.state.seleccion;
    this._arrayHoteles = this.router.getCurrentNavigation().extras.state.hoteles;
    console.log(this._arrayHoteles);
    console.log(this._seleccion);

    this.seleccionDebug = JSON.stringify(this._seleccion);
    for (let i = 0; i < this._arrayHoteles.length; i++) {
      if (this._arrayHoteles[i].categoria == '⭐'){

      }

    }
    /* this.fil= this._arrayHoteles.filter(hero => (hero.categoria.toString()== '⭐'));
     for (let i = 0; i < this.fil.length; i++) {
       console.log(this.fil[i]);
       
     }*/


  }

  ngOnInit() {
  }
  public get arrayHoteles() {
    return this._arrayHoteles;
  }
  private shouldPushInArray(item, filter) {
    if (typeof filter !== 'string') {
      item = item.toString();
      filter = filter.toString();
    }

    // Filter main logic
    item = item.toLowerCase();
    filter = filter.toLowerCase();
    if (item.indexOf(filter) !== -1) {
      return true;
    }
    return false;
  }

}
