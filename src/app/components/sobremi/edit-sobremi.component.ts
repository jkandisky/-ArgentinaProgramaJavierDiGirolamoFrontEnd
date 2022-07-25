import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sobremi } from 'src/app/model/sobremi';
import { SSobremiService } from 'src/app/service/s-sobremi.service';

@Component({
  selector: 'app-edit-sobremi',
  templateUrl: './edit-sobremi.component.html',
  styleUrls: ['./edit-sobremi.component.css']
})
export class EditSobremiComponent implements OnInit {
  sobLab : Sobremi = null;  

  constructor(private sSobremi: SSobremiService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSobremi.detail(id).subscribe(
      data => {
        this.sobLab = data;
      }, err => {
        alert("Error al modificar Experiencia");
        this.router.navigate(['']);
      }
    )

  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSobremi.update(id, this.sobLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar Experiencia");
        this.router.navigate(['']);
      }
      )
  }
}
