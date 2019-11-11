import { Capacidad } from './capacidad';
import { Camas } from './camas';
import { Categoria } from './categoria';

export class Seleccion {
    private _categoria: string;
  
	constructor(categoria: string) {
		this._categoria = categoria;
	}
	public get selecCategoria(): string {
		return this._categoria;
	}
	public set selectCategoria(value: string) {
		this._categoria = value;
	}

}