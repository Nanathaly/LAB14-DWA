export class Protagonista {

    _id?: string;
    codigo: string;
    nombre: string;
    fechaNacimiento: string
   

    constructor(codigo:string, nombre:string, fechaNacimiento: string){
        this.codigo = codigo;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento
    }

}