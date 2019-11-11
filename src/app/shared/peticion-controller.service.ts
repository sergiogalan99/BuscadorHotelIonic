import { GeneradorHoteles } from './../core/model/generador-hoteles';
import { Hotel } from './../core/model/hotel';
import { Injectable } from '@angular/core';
import { Habitacion } from '../core/model/habitacion';
import { Categoria } from '../core/model/categoria';
import { NavigationExtras, Router } from '@angular/router';
import { Seleccion } from '../core/model/seleccion';

@Injectable({
     providedIn: 'root'
})
export class PeticionControllerService {
     private _precioMinimo: Habitacion;
     private _precioMax: Habitacion;
     private _puntuacion: Categoria;
     private _hoteles: Hotel[] = [];
     private _mostrarHoteles: Hotel[] = [];
     constructor(public router: Router) {
          this._hoteles = new GeneradorHoteles().getHoteles();
     }
     lanzar() {
          this._mostrarHoteles = new Seleccion(this._precioMinimo, this._precioMax, this._puntuacion, this._hoteles).comprobar();
          let navigationExtras: NavigationExtras = {
               state: {
                    hoteles: this._mostrarHoteles
               }
          }
          this.router.navigate(['resultado'], navigationExtras);
     }

     public get mostrarHoteles(): Hotel[] {
          return this._mostrarHoteles;
     }

   
     public set mostrarHoteles(value: Hotel[]) {
          this._mostrarHoteles = value;
     }


    
     public get puntuacion(): Categoria {
          return this._puntuacion;
     }

     public set puntuacion(value: Categoria) {
          this._puntuacion = value;
     }

     public get precioMinimo(): Habitacion {
          return this._precioMinimo;
     }

     public get precioMax(): Habitacion {
          return this._precioMax;
     }

     public get hoteles(): Hotel[] {
          return this._hoteles;
     }

     public set precioMin(value: Habitacion) {
          this._precioMinimo = value;
     }

     public set precioMax(value: Habitacion) {
          this._precioMax = value;
     }

     public set hoteles(value: Hotel[]) {
          this._hoteles = value;
     }

}
