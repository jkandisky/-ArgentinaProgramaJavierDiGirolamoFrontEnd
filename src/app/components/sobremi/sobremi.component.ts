import { Component, OnInit } from '@angular/core';
import { Sobremi } from 'src/app/model/sobremi';
import { SSobremiService } from 'src/app/service/s-sobremi.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  sobr:Sobremi[] = [];

  constructor(private sSobremi: SSobremiService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSobremi();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  cargarSobremi():void{
    this.sSobremi.lista().subscribe(data => {this.sobr = data;})
    
} 
  delete(id?: number){
    if(id != undefined){
      this.sSobremi.delete(id).subscribe(
        data => {
          this.cargarSobremi();
        }, err => {
          alert("No se pudo borrar la epxeriencia");
        }
        )
    } 
  }
}
