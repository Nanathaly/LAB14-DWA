export class Proyeccion {
    _id?: string;
    codigo: string;
    horarioPase: string;
    pelicula: string;
    genero: string;
    clasificacion: string;
    cine: string;
    direccion: string;
    precio: number
  
    constructor(
      codigo: string,
      horarioPase: string,
      pelicula: string,
      genero: string,
      clasificacion: string,
      cine: string,
      direccion: string,
      precio: number
    ) {
      this.codigo = codigo;
      this.horarioPase = horarioPase;
      this.pelicula = pelicula;
      this.genero = genero;
      this.clasificacion = clasificacion;
      this.cine = cine;
      this.direccion = direccion;
      this.precio = precio
    }
  }