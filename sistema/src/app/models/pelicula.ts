export class Pelicula {

    _id?: string;
    titulo: string;
    director: string;
    clasificacion: string;
    protagonista: string;
    genero: string;

    constructor(titulo:string, director:string, clasificacion: string,protagonista: string, genero: string){
        this.titulo = titulo;
        this.director = director;
        this.clasificacion = clasificacion;
        this.protagonista = protagonista;
        this.genero = genero;
    }

}