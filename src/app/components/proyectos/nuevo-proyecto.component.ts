import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent implements OnInit {
  nombreProy: string='';
  detalleProy: string='';
  enlaceProy: string='';
  imagen: string='';

  constructor(private proyectoServicio: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proy=new Proyectos(this.nombreProy, this.detalleProy, this.enlaceProy, this.imagen);
    this.proyectoServicio.save(proy).subscribe(data => {
      alert("Proyecto cargado");
      this.router.navigate(['']);
    }, err => {
      alert("Error");
      this.router.navigate(['']);
    })
  }

}