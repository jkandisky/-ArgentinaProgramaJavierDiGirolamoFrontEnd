import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css']
})
export class NuevaHabilidadComponent implements OnInit {
  nombreHab: string='';
  valorHab: string='';

  constructor(private habilidadServicio: HabilidadService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const hab=new Habilidad(this.nombreHab, this.valorHab);
    this.habilidadServicio.save(hab).subscribe(data => {
      alert("Habilidad añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Error")
      this.router.navigate(['']);
    })
  }

}
