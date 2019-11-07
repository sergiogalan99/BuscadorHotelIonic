
import { Capacidad } from './capacidad';
import { Complemento } from './complemento';
import { Camas } from './camas';
export class TipoHabitacion{
    private _capacidad: Capacidad;
    private _camas: Camas;
    private _complementos: Complemento;


	constructor(capacidad: Capacidad, camas: Camas, complementos: Complemento) {
		this._capacidad = capacidad;
		this._camas = camas;
		this._complementos = complementos;
	}

	public get capacidad(): Capacidad {
		return this._capacidad;
	}

   
	public get camas(): Camas {
		return this._camas;
	}

	public get complementos(): Complemento {
		return this._complementos;
	}

  
	public set capacidad(value: Capacidad) {
		this._capacidad = value;
	}

	public set camas(value: Camas) {
		this._camas = value;
	}

	public set complementos(value: Complemento) {
		this._complementos = value;
	}

}