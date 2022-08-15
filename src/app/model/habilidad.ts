export class Habilidad {
    id?: number;
    nombreHab: string;
    valorHab: string;

    constructor(nombreHab: string,valorHab: string){
        this.nombreHab = nombreHab;
        this.valorHab = valorHab;
    }
}