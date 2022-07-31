import { Component, OnInit } from '@angular/core';
import { Hardsoft } from 'src/app/model/hardsoft';
import { SHardsoftService } from 'src/app/service/s-hardsoft.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hardsoft',
  templateUrl: './hardsoft.component.html',
  styleUrls: ['./hardsoft.component.css']
})
export class HardsoftComponent implements OnInit {
  hard:Hardsoft[] = [];

  constructor(private sHardsoft: SHardsoftService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHardsoft();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  cargarHardsoft():void{
    this.sHardsoft.lista().subscribe(data => {this.hard = data;})
    
} 
  delete(id?: number){
    if(id != undefined){
      this.sHardsoft.delete(id).subscribe(
        data => {
          this.cargarHardsoft();
        }, err => {
          alert("No se pudo borrar la skill");
        }
        )
    } 
  }
}
