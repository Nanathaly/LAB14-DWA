export class Cine {

    _id?: string;
    nombre: string;
    calle: string;
    numero: number;
    telefono: number;

    constructor(nombre:string, calle:string, numero: number, telefono: number){
        this.nombre = nombre;
        this.calle = calle;
        this.numero = numero;
        this.telefono = telefono;
    }

}