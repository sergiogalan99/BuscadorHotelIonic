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

    /**
     * Getter nombre
     * @return {string}
     */
	public get nombre(): string {
		return this._nombre;
	}

    /**
     * Getter categoria
     * @return {Categoria}
     */
	public get categoria(): Categoria {
		return this._categoria;
	}

    /**
     * Getter tiposHabitacion
     * @return {Habitacion[]}
     */
	public get tiposHabitacion(): Habitacion[] {
		return this._tiposHabitacion;
	}

    /**
     * Setter nombre
     * @param {string} value
     */
	public set nombre(value: string) {
		this._nombre = value;
	}

    /**
     * Setter categoria
     * @param {Categoria} value
     */
	public set categoria(value: Categoria) {
		this._categoria = value;
	}

    /**
     * Setter tiposHabitacion
     * @param {Habitacion[]} value
     */
	public set tiposHabitacion(value: Habitacion[]) {
		this._tiposHabitacion = value;
	}
        
}
