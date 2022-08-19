import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proy: Proyectos[] = [];

  constructor(private proyectoServicio: ProyectosService, private tokenServicio: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();

    if(this.tokenServicio.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
  }

  cargarProyectos():void{
    this.proyectoServicio.lista().subscribe(data => {
      this.proy = data;
    })
  }

  borrar(id?: number){
    if(id != undefined){
    this.proyectoServicio.borrar(id).subscribe(
      data => {
        alert("Se borró la experiencia");
        window.location.reload();
      }, err => {
        alert("Error");
        window.location.reload();
    })
  }
  }
}