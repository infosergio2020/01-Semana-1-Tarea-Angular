export class ObraDetalle {
    nombre:string;
    imageUrl:string;
    descripcion:string;
    etiquetas:string[];

    constructor(n:string, u:string,d:string,tags:string[]){
        this.nombre = n;
        this.imageUrl = u;
        this.descripcion = d
        this.etiquetas = tags;
    }
}