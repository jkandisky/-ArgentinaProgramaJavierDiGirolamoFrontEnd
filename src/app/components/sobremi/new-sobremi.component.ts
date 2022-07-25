import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sobremi } from 'src/app/model/sobremi';
import { SSobremiService } from 'src/app/service/s-sobremi.service';

@Component({
  selector: 'app-new-sobremi',
  templateUrl: './new-sobremi.component.html',
  styleUrls: ['./new-sobremi.component.css']
})
export class NewSobremiComponent implements OnInit {
   nombreS: string = '';
   descripcionS: string = '';
  constructor(private sSobremi: SSobremiService, private router: Router,) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const sobr = new Sobremi(this.nombreS, this.descripcionS);
    this.sSobremi.save(sobr).subscribe(
      data=>{
        alert("Experiencia Añadida");
        this.router.navigate(['']);
    }, err =>{
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }
}
