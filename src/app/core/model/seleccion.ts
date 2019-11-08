import { Capacidad } from './capacidad';
import { Camas } from './camas';
import { Categoria } from './categoria';

export class Seleccion {
    private _categoria: Categoria;
    private _capacidad: Capacidad;
    private _camas: Camas;
    private _extras: string[];
    private _precio: number[];




	constructor(categoria: Categoria, capacidad: Capacidad, camas: Camas, extras: string[], precio: number[]) {
		this._categoria = categoria;
		this._capacidad = capacidad;
		this._camas = camas;
		this._extras = extras;
		this._precio = precio;
	}

    /**
     * Getter categoria
     * @return {Categoria}
     */
	public get categoria(): Categoria {
		return this._categoria;
	}

    /**
     * Getter capacidad
     * @return {Capacidad}
     */
	public get capacidad(): Capacidad {
		return this._capacidad;
	}

    /**
     * Getter camas
     * @return {Camas}
     */
	public get camas(): Camas {
		return this._camas;
	}

    /**
     * Getter extras
     * @return {string[]}
     */
	public get extras(): string[] {
		return this._extras;
	}

    /**
     * Getter precio
     * @return {number[]}
     */
	public get precio(): number[] {
		return this._precio;
	}

    /**
     * Setter categoria
     * @param {Categoria} value
     */
	public set categoria(value: Categoria) {
		this._categoria = value;
	}

    /**
     * Setter capacidad
     * @param {Capacidad} value
     */
	public set capacidad(value: Capacidad) {
		this._capacidad = value;
	}

    /**
     * Setter camas
     * @param {Camas} value
     */
	public set camas(value: Camas) {
		this._camas = value;
	}

    /**
     * Setter extras
     * @param {string[]} value
     */
	public set extras(value: string[]) {
		this._extras = value;
	}

    /**
     * Setter precio
     * @param {number[]} value
     */
	public set precio(value: number[]) {
		this._precio = value;
	}

   

}