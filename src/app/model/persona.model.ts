export class persona{
    id?:number;
    nombre:string;
    appelido:string;
    img:string;

    constructor(nombre:string, appelido:string, img:string){
        this.nombre = nombre;
        this.appelido = appelido;
        this.img = img;
    }

}