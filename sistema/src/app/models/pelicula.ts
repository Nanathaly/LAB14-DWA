export class Pelicula {
    _id?: string;
    codigo: string;
    titulo: string;
    director: string;
    genero: string;
    clasificacion: string;
    protagonista: string
 
  
    constructor(
      codigo: string,
      titulo: string,
      director: string,
      genero: string,
      clasificacion: string,
      protagonista: string,
    ) {
      this.codigo = codigo;
      this.titulo = titulo;
      this.director = director;
      this.genero = genero;
      this.clasificacion = clasificacion;
      this.protagonista = protagonista
    }
  }
  