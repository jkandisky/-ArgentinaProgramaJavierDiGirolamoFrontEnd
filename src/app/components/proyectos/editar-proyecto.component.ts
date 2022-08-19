import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  proy: Proyectos=null;

  constructor(private proyectoServicio: ProyectosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoServicio.detalle(id).subscribe(
      data => {
        this.proy = data;
      }, err => {
        this.router.navigate(['/principal']);
      }
    )
  }
  OnUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoServicio.actualizar(id, this.proy).subscribe(data => {
      alert("Proyecto actualizado");
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar proyecto");
      this.router.navigate(['']);
    })
  }

}