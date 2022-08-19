export class Proyectos {
    id?: number;
    nombreProy: string;
    detalleProy: string;
    enlaceProy: string;
    imagen: string;

    constructor(nombreProy: string,detalleProy:string,enlaceProy:string,imagen:string){
        this.nombreProy=nombreProy;
        this.detalleProy=detalleProy;
        this.enlaceProy=enlaceProy;
        this.imagen=imagen;
    }
}