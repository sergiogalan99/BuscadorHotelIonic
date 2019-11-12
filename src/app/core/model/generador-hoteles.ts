import { Habitacion } from './habitacion';
import { TipoHabitacion } from './tipoHabitacion';
import { Extras } from './extras';
import { Complemento } from './complemento';
import { Camas } from './camas';
import { Capacidad } from './capacidad';

import { Categoria } from './categoria';
import { Hotel } from './hotel';
export class GeneradorHoteles {
    private _arrayHoteles = [];
    private _arrayImagenes=["https://www.esloqueveo.com/thumbnail.aspx?p_registro=133671&p=3&t=33","https://www.walk2view.com/thumbnail.aspx?p_registro=141054&p=3&t=33","https://www.walk2view.com/thumbnail.aspx?p_registro=141051&p=3&t=33","https://pix10.agoda.net/hotelImages/336827/-1/300c52523e50091cedf21265fde5719e.jpg","http://todoen360.com/thumbnail.aspx?p_registro=139263&p=3&t=33","data:image/jpeg;base64,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"];
    private _arraynombresHoteles = ["Hotel Parissi", "Hotel Realeza", "Hotel Mulan","Hotel Sergio", "Hotel Platinum", "Hotel Bjusjine", "Hotel Wine", "Hotel Caravela"];

    public getHoteles(): Hotel[] {

        for (let index = 0; index < this._arraynombresHoteles.length; index++) {
            this._arrayHoteles.push(new Hotel(this._arraynombresHoteles[index], (this.obtenerCategoria()), this.generaraHabitacion()));

        }
        return this._arrayHoteles;
    }
    public getRandom(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }
    public generaraHabitacion(): Habitacion[] {
        let arrayHabitaciones = [];
      
       
            arrayHabitaciones.push(new Habitacion(new TipoHabitacion((this.obtenerCapacidad()), (this.obtenerCama()), new Complemento(this.obtenerExtras(this.getRandom(0, 4)))), this.getRandom(0, 1000), this._arrayImagenes[this.getRandom(0, this._arrayImagenes.length-1)]));
        
        return arrayHabitaciones;
    }

    public obtenerCategoria(): Categoria {
        let categoria;
        let numeroEstrellas = this.getRandom(1, 5);
        categoria = Categoria[numeroEstrellas];
        return categoria;

    }


    public obtenerCama(): Camas {
        let cama;
        let numeroCama = this.getRandom(0, 2);
        cama = Camas[numeroCama];
        return cama;

    }
    public obtenerCapacidad(): Capacidad {
        let capacidad;
        let numeroCapacidad = this.getRandom(0, 2);
        capacidad = Capacidad[numeroCapacidad];
        return capacidad;

    }
    public obtenerExtras(numeroCapacidad: number): Extras[] {

        let generarExtras;
        let bandera = false;
        let arrayExtras = [];

        if (numeroCapacidad != 0) {
            for (let i = 0; i < numeroCapacidad; i++) {
                if (bandera === false) {
                    generarExtras = Extras[this.getRandom(0, 3)];
                    arrayExtras.push(generarExtras);
                    bandera = true;
                } else {
                    let longitud = arrayExtras.length;
                    let banderaDos = true
                    do {
                        banderaDos = true;
                        generarExtras = Extras[this.getRandom(0, 3)];
                        for (let index = 0; index < longitud; index++) {
                            if (generarExtras === arrayExtras[index]) {
                                banderaDos = false;
                            }
                        }
                    } while (banderaDos === false);
                    arrayExtras.push(generarExtras);
                }
            }
        }
        return arrayExtras;

    }


}

