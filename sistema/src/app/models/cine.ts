export class Cine {

    _id?: string;
    codigo: string;
    nombre: string;
    direccion: string;
    telefono: string
   

    constructor(codigo:string, nombre:string, direccion: string, telefono: string){
        this.codigo = codigo;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono
    }

}