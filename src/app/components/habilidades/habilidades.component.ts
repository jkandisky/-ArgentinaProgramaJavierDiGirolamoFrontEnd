import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  hab: Habilidad[] = [];

  constructor(private habilidadServicio: HabilidadService, private tokenServicio: TokenService) { }

  isLogged=false;

  ngOnInit(): void {
    this.cargarHabilidades();

    if(this.tokenServicio.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged=false;
    }
  }

  cargarHabilidades(): void{
    this.habilidadServicio.lista().subscribe(data=>{
      this.hab = data;
    }
      )
  }

  borrar(id?: number){
    if(id != undefined){
      this.habilidadServicio.borrar(id).subscribe(
        data => {
          alert("Se borró la entrada");
          window.location.reload();
        }, err => {
          alert("Error");
          window.location.reload();
      })
    }  
  }

}