import { Categoria } from './categoria';

export class Seleccion {
    private _precioMin: number;
    private _precioMax: number;
    private _puntuacion: Categoria;
    private _extras:string[];
    private _capacidad:string;
    private _cama:string;


	constructor(precioMin: number, precioMax: number, puntuacion: string,extras:string[],seleccionCapacidad:string,cama:string) {
		this._precioMin = precioMin;
		this._precioMax = precioMax;
		this._puntuacion = Categoria[puntuacion];
        this._extras=extras;
        this._capacidad=seleccionCapacidad;
        this._cama=cama;
	}
   


   
	public get precioMin(): number {
		return this._precioMin;
	}

	public get precioMax(): number {
		return this._precioMax;
	}

	public get puntuacion(): Categoria {
		return this._puntuacion;
	}

	public get extras(): string[] {
		return this._extras;
    }

	public get capacidad(): string{
		return this._capacidad;
    }
    
    public get cama(): string{
		return this._cama;
	}

	public set precioMin(value: number) {
		this._precioMin = value;
	}

	public set precioMax(value: number) {
		this._precioMax = value;
	}

	public set puntuacion(value: Categoria) {
		this._puntuacion = value;
	}

	public set extras(value: string[]) {
		this._extras = value;
    }

	public set capacidad(value: string) {
		this._capacidad = value;
	}

	public set cama(value: string) {
		this._cama = value;
	}
}