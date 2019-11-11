import { element } from 'protractor';
import { Capacidad } from './capacidad';
import { Camas } from './camas';
import { Categoria } from './categoria';
import { Habitacion } from './habitacion';
import { Hotel } from './hotel';

export class Seleccion {
    private _precioMin: Habitacion;
    private _precioMax: Habitacion;
    private _puntuacion: Categoria;
    private _hoteles: Hotel[] = [];
    private _mostrarHoteles: Hotel[] = [];
    private _mostarHabitaciones: Habitacion[] = [];


	constructor(precioMin: Habitacion, precioMax: Habitacion, puntuacion: Categoria, hoteles: Hotel[]) {
		this._precioMin = precioMin;
		this._precioMax = precioMax;
		this._puntuacion = puntuacion;
		this._hoteles = hoteles;

	}
   
    comprobar() {
        this._mostrarHoteles = [];
        this.comprobarCategoria();
        return this._mostrarHoteles;
    }

    private comprobarCategoria() {
       
        if (undefined != this._puntuacion) {
            this._hoteles = this._hoteles.filter(hotel => this._puntuacion === hotel.categoria);
        }
        this._hoteles.forEach(element => {
            this._mostarHabitaciones = [];
            this._mostarHabitaciones = element.tiposHabitacion.filter(habitacion => this._precioMax.precio > habitacion.precio && this._precioMin.precio < habitacion.precio);
            if (this._precioMax.tipoHabitacion.camas != undefined) {
                this._mostarHabitaciones = element.tiposHabitacion.filter(habitacion => this._precioMax.tipoHabitacion.camas === habitacion.tipoHabitacion.camas);
            }
            if (this._precioMax.tipoHabitacion.capacidad != undefined) {
                this._mostarHabitaciones = element.tiposHabitacion.filter(habitacion => this._precioMax.tipoHabitacion.capacidad === habitacion.tipoHabitacion.capacidad);
            }
            if (this._mostarHabitaciones.length != 0) {
                this._mostrarHoteles.push(new Hotel(element.nombre, element.categoria, this._mostarHabitaciones));
            }
        });

    }

    private comprobarExtras(habitacion: Habitacion) {
        if (this._precioMax.tipoHabitacion.complementos.nombre.length === 0) {
            this._mostarHabitaciones.push(habitacion);
        } else {
            let arrayExtras = habitacion.tipoHabitacion.complementos.nombre;
            let arrayPeticion = this._precioMax.tipoHabitacion.complementos.nombre;
            let contador = 0;
            for (let index = 0; index < arrayPeticion.length; index++) {
                for (let indexDos = 0; indexDos < arrayExtras.length; indexDos++) {
                    if (arrayExtras[indexDos] === arrayPeticion[index]) {
                        contador++;
                    }
                }
            }

            if (contador >= 1 && contador >= arrayPeticion.length) {
                this._mostarHabitaciones.push(habitacion)

            }
        }
    }

 
    public get precioMin(): Habitacion {
        return this._precioMin;
    }

  
    public get precioMax(): Habitacion {
        return this._precioMax;
    }

    public get puntuacion(): Categoria {
        return this._puntuacion;
    }

    public get hoteles(): Hotel[] {
        return this._hoteles;
    }

    public get mostarHoteles(): Hotel[] {
        return this._mostrarHoteles;
    }

 
    public get mostarHabitaciones(): Habitacion[] {
        return this._mostarHabitaciones;
    }

    public set precioMin(value: Habitacion) {
        this._precioMin = value;
    }

  
    public set precioMax(value: Habitacion) {
        this._precioMax = value;
    }

    public set puntuacion(value: Categoria) {
        this._puntuacion = value;
    }

  
    public set hoteles(value: Hotel[]) {
        this._hoteles = value;
    }

  
    public set mostrarHoteles(value: Hotel[]) {
        this._mostrarHoteles = value;
    }

   
    public set mostarHabitaciones(value: Habitacion[]) {
        this._mostarHabitaciones = value;
    }



}