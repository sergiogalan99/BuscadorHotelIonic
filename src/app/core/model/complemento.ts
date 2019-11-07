import { Extras } from './extras';

export class Complemento {
    private _nombre: Extras[];

    constructor(nombre: Extras[]) {
        this._nombre = nombre;
    }

    public get nombre(): Extras[] {
        return this._nombre;
    }

    public set nombre(value: Extras[]) {
        this._nombre = value;
    }

}