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

  public _arrayHoteles: Hotel[] = [];
  private hotelesOriginales: Hotel[];

  constructor(public router: Router) {
    this.hotelesOriginales = this.router.getCurrentNavigation().extras.state.hoteles;
    let seleccion: Seleccion = this.router.getCurrentNavigation().extras.state.seleccion;
    this.filtrarHoteles(seleccion);
  }

  ngOnInit() {
  }

  

  private filtrarHoteles(seleccion: Seleccion) {
    let hotelesFiltrados: Hotel[] = this.filtrarPorPrecio(seleccion,this.hotelesOriginales);
 

    if (seleccion.puntuacion) {
      let hotelPorPuntuacion = this.filtrarPorPuntuacion(seleccion, hotelesFiltrados);
      hotelesFiltrados=hotelPorPuntuacion;
    } 

    if (seleccion.capacidad&&seleccion.capacidad!=="") {
      let hotelPorCapacidad=this.filtrarPorCapacidad(seleccion,hotelesFiltrados);
      hotelesFiltrados=hotelPorCapacidad;
    }

    if(seleccion.cama&&seleccion.cama!==""){
      let hotelPorCama=this.filtrarPorCama(seleccion,hotelesFiltrados);
      hotelesFiltrados=hotelPorCama;
      
    }
    if (seleccion.extras&&seleccion.extras.length>0) {
      let hotelPorExtra=this.filtrarPorExtras(seleccion,hotelesFiltrados);
      hotelesFiltrados=hotelPorExtra;
    }
    this._arrayHoteles = hotelesFiltrados;
    console.log(this.arrayHoteles);
  }
  filtrarPorCama(seleccion: Seleccion, hoteles: Hotel[]):Hotel[] {
    let hotelesFiltrados: Hotel[] = [];
    hoteles.forEach(hotel => {
      let habitacion = hotel.tiposHabitacion.filter(habitacion => habitacion.tipoHabitacion.camas.toString()==seleccion.cama);
      if (habitacion.length > 0) {
        hotelesFiltrados.push(hotel);
      }
    })
    return hotelesFiltrados;
  }
  filtrarPorCapacidad(seleccion: Seleccion, hoteles: Hotel[]):Hotel[] {
    let hotelesFiltrados: Hotel[] = [];
    hoteles.forEach(hotel => {
      let habitacion = hotel.tiposHabitacion.filter(habitacion => habitacion.tipoHabitacion.capacidad.toString()==seleccion.capacidad);
      if (habitacion.length > 0) {
        hotelesFiltrados.push(hotel);
      }
    })
    return hotelesFiltrados;
  }

  private filtrarPorPuntuacion(seleccion: Seleccion, hoteles: Hotel[]): Hotel[] {
  
    let hotelesFiltrados = hoteles.filter(hotel => Categoria[hotel.categoria.toString()]==seleccion.puntuacion);
    return hotelesFiltrados;
  }
  private filtrarPorPrecio(seleccion: Seleccion,hoteles:Hotel[]): Hotel[] {
    let hotelesFiltrados: Hotel[] = [];
    hoteles.forEach(hotel => {
      let habitacion = hotel.tiposHabitacion.filter(habitacion => habitacion.precio <= seleccion.precioMax && habitacion.precio >= seleccion.precioMin);
      if (habitacion.length > 0) {
        hotelesFiltrados.push(hotel);
      }
    })
    return hotelesFiltrados;
  }

  

  private filtrarPorExtras(seleccion:Seleccion,hoteles:Hotel[]):Hotel[]{
    let hotelesFiltrados: Hotel[] = [];
    hoteles.forEach(hotel => {
      let aniadirHotel=false;
      hotel.tiposHabitacion.forEach(habitacion=>{
       let habitacionFiltrada = habitacion.tipoHabitacion.complementos.nombre.filter(extra=>seleccion.extras.includes(extra.toString())&&seleccion.extras.length== habitacion.tipoHabitacion.complementos.nombre.length);
       if(habitacionFiltrada.length>0){
        aniadirHotel=true;
       }
      })
      if(aniadirHotel){
        hotelesFiltrados.push(hotel);
      }
    })
    return hotelesFiltrados;
  }

  public get arrayHoteles() {
    return this._arrayHoteles;
  }
}