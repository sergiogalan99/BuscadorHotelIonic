import { Seleccion } from './../core/model/seleccion';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../core/model/categoria';
import { Camas } from '../core/model/camas';
import { Capacidad } from '../core/model/capacidad';
import { Extras } from '../core/model/extras';
import { NavigationExtras, Router } from '@angular/router';
import { GeneradorHoteles } from '../core/model/generador-hoteles';

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
  private _seleccionCategoria: string;
  private _seleccionCama: string;
  private _seleccionCapacidad: string;
  private _extrasHtml : string[]= [];
  private hoteles;

  knobValues = {
    upper: 1000,
    lower: 0
  };

  constructor(public router: Router) {
    this.hoteles = new GeneradorHoteles().getHoteles();
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

  public buscarHotel() {
    let seleccion: Seleccion = new Seleccion(this.knobValues.lower, this.knobValues.upper, this._seleccionCategoria, this._extrasHtml,this._seleccionCapacidad,this._seleccionCama);

    let navigationExtras: NavigationExtras = {
      state: {
        seleccion: seleccion,
        hoteles:this.hoteles
      }
    }
    this.router.navigate(['resultado'], navigationExtras);
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

	public get seleccionCategoria(): string  {
		return this._seleccionCategoria;
	}

	public get seleccionCama(): string  {
		return this._seleccionCama;
	}

	public get seleccionCapacidad(): string  {
		return this._seleccionCapacidad;
	}

	public set seleccionCategoria(value: string ) {
		this._seleccionCategoria = value;
	}

	public set seleccionCama(value: string ) {
		this._seleccionCama = value;
	}

	public set seleccionCapacidad(value: string ) {
		this._seleccionCapacidad = value;
  }
  
  public set extrasHtml(value){
    this._extrasHtml=value;
  }

}
