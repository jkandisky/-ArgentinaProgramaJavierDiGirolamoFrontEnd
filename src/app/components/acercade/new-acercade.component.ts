import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acercade } from 'src/app/model/acercade';
import { SAcercadeService } from 'src/app/service/s-acercade.service';

@Component({
  selector: 'app-new-acercade',
  templateUrl: './new-acercade.component.html',
  styleUrls: ['./new-acercade.component.css']
})
export class NewAcercadeComponent implements OnInit {
   nombreA: string = '';
   descripcionA: string = '';
  constructor(private sAcercade: SAcercadeService, private router: Router,) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const acer = new Acercade(this.nombreA, this.descripcionA);
    this.sAcercade.save(acer).subscribe(
      data=>{
        alert("Solicitud Añadida");
        this.router.navigate(['']);
    }, err =>{
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }
}
