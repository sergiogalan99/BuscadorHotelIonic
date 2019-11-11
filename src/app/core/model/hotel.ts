import { Habitacion } from "./habitacion";
import { Categoria } from "./categoria";

export class Hotel {
        private _nombre:string;
        private _categoria: Categoria;
        private _tiposHabitacion: Habitacion[];

	constructor(nombre: string, categoria: Categoria, tiposHabitacion: Habitacion[]) {
		
		this._nombre = nombre;
		this._categoria = categoria;
		this._tiposHabitacion = tiposHabitacion;
	}

    
	public get nombre(): string {
		return this._nombre;
	}

	public get categoria(): Categoria {
		return this._categoria;
	}

    
	public get tiposHabitacion(): Habitacion[] {
		return this._tiposHabitacion;
	}

   
	public set nombre(value: string) {
		this._nombre = value;
	}

	public set categoria(value: Categoria) {
		this._categoria = value;
	}

  
	public set tiposHabitacion(value: Habitacion[]) {
		this._tiposHabitacion = value;
	}
        
}
