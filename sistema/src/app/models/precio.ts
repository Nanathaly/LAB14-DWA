export class Precio {

    _id?: string;
    codigo: string;
    tipo: string;
    valor: number

    constructor(codigo:string, tipo:string, valor: number){
        this.codigo = codigo;
        this.tipo = tipo;
        this.valor = valor
    }
}