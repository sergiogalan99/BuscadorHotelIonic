import { Habitacion } from './habitacion';
import { Categoria } from './categoria';
import { Hotel } from './hotel';

export class Comparador {
    private habitacionMin: Habitacion;
    private habitacionMax: Habitacion;
    private puntuacion: Categoria;
    private hoteles: Hotel[] = [];
    private hotelesEnsenar: Hotel[] = [];
    private ensenarHabitacion: Habitacion[] = [];

    constructor($habitacionMin: Habitacion, $habitacionMax: Habitacion, $puntuacion: Categoria, $hoteles: Hotel[]) {
        this.habitacionMin = $habitacionMin;
        this.habitacionMax = $habitacionMax;
        this.puntuacion = $puntuacion;
        this.hoteles = $hoteles;
    }

    comprobar() {
        this.$hotelesEnsenar = [];
        this.comprobarCategoria();
        return this.$hotelesEnsenar;
    }

    private comprobarCategoria() {
        this.hoteles.forEach(element => {
            this.$ensenarHabitacion = [];
            if (this.puntuacion === undefined) {
                element.tiposHabitacion.forEach(habita => {
                    this.comprobarPrecio(habita);
                });
            } else if (this.puntuacion === element.categoria) {
                element.tiposHabitacion.forEach(habita => {
                    this.comprobarPrecio(habita);
                });
            }
            if (this.$ensenarHabitacion.length != 0) {
                this.$hotelesEnsenar.push(new Hotel(element.nombre, element.categoria, this.$ensenarHabitacion));
            }

        });
    }
    private comprobarPrecio(habitacion: Habitacion) {
        if (this.habitacionMax.precio > habitacion.precio && this.$habitacionMin.precio < habitacion.precio) {
            this.comprobarCama(habitacion);
        }
    }
    private comprobarCama(habitacion: Habitacion) {
        if (this.habitacionMax.tipoHabitacion.camas === undefined) {
            this.comprobarCapacidad(habitacion);
        } else if (this.habitacionMax.tipoHabitacion.camas === habitacion.tipoHabitacion.camas) {
            this.comprobarCapacidad(habitacion);
        }
    }
    private comprobarCapacidad(habitacion: Habitacion) {

        if (this.habitacionMax.tipoHabitacion.capacidad === undefined) {
            this.comprobarExtras(habitacion);
        } else if (this.habitacionMax.tipoHabitacion.capacidad === habitacion.tipoHabitacion.capacidad) {
            this.comprobarExtras(habitacion);
        }
    }
    private comprobarExtras(habitacion: Habitacion) {
        if (this.habitacionMax.tipoHabitacion.complementos.nombre.length === 0) {
            this.$ensenarHabitacion.push(habitacion);
        } else {
            let arrayExtras = habitacion.tipoHabitacion.complementos.nombre;
            let arrayPeticion = this.habitacionMax.tipoHabitacion.complementos.nombre;
            let contador = 0;
            for (let index = 0; index < arrayPeticion.length; index++) {
                for (let indexDos = 0; indexDos < arrayExtras.length; indexDos++) {
                    if (arrayExtras[indexDos] === arrayPeticion[index]) {
                        contador++;
                    }
                }
            }

            if (contador >= 1 && contador >= arrayPeticion.length) {
                this.$ensenarHabitacion.push(habitacion)

            }
        }
    }

    /**
     * Getter $habitacionMin
     * @return {Habitacion}
     */
    public get $habitacionMin(): Habitacion {
        return this.habitacionMin;
    }

    /**
     * Getter $habitacionMax
     * @return {Habitacion}
     */
    public get $habitacionMax(): Habitacion {
        return this.habitacionMax;
    }

    /**
     * Getter $puntuacion
     * @return {Categoria}
     */
    public get $puntuacion(): Categoria {
        return this.puntuacion;
    }

    /**
     * Getter $hoteles
     * @return {Hotel[] }
     */
    public get $hoteles(): Hotel[] {
        return this.hoteles;
    }

    /**
     * Getter $hotelesEnsenar
     * @return {Hotel[] }
     */
    public get $hotelesEnsenar(): Hotel[] {
        return this.hotelesEnsenar;
    }

    /**
     * Getter $ensenarHabitacion
     * @return {Habitacion[] }
     */
    public get $ensenarHabitacion(): Habitacion[] {
        return this.ensenarHabitacion;
    }

    /**
     * Setter $habitacionMin
     * @param {Habitacion} value
     */
    public set $habitacionMin(value: Habitacion) {
        this.habitacionMin = value;
    }

    /**
     * Setter $habitacionMax
     * @param {Habitacion} value
     */
    public set $habitacionMax(value: Habitacion) {
        this.habitacionMax = value;
    }

    /**
     * Setter $puntuacion
     * @param {Categoria} value
     */
    public set $puntuacion(value: Categoria) {
        this.puntuacion = value;
    }

    /**
     * Setter $hoteles
     * @param {Hotel[] } value
     */
    public set $hoteles(value: Hotel[]) {
        this.hoteles = value;
    }

    /**
     * Setter $hotelesEnsenar
     * @param {Hotel[] } value
     */
    public set $hotelesEnsenar(value: Hotel[]) {
        this.hotelesEnsenar = value;
    }

    /**
     * Setter $ensenarHabitacion
     * @param {Habitacion[] } value
     */
    public set $ensenarHabitacion(value: Habitacion[]) {
        this.ensenarHabitacion = value;
    }


}