import { TipoHabitacion } from './tipoHabitacion';
export class Habitacion {
	private _tipoHabitacion: TipoHabitacion;
	private _imagen: string;
	private _precio: number;

	constructor(tipoHabitacion: TipoHabitacion, precio: number, imagen: string) {
		this._tipoHabitacion = tipoHabitacion;
		this._precio = precio;
		this._imagen = imagen;

	}
	public set imagen(value: string) {
		this._imagen = value;
	}

	public get imagen(): string {
		return this._imagen;
	}

	public get tipoHabitacion(): TipoHabitacion {
		return this._tipoHabitacion;
	}

	public get precio(): number {
		return this._precio;
	}

	public set tipoHabitacion(value: TipoHabitacion) {
		this._tipoHabitacion = value;
	}

	public set precio(value: number) {
		this._precio = value;
	}


}
