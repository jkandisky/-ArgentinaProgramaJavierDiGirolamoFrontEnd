import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hardsoft } from 'src/app/model/hardsoft';
import { SHardsoftService } from 'src/app/service/s-hardsoft.service';

@Component({
  selector: 'app-edit-hardsoft',
  templateUrl: './edit-hardsoft.component.html',
  styleUrls: ['./edit-hardsoft.component.css']
})
export class EditHardsoftComponent implements OnInit {
  harLab : Hardsoft = null;  

  constructor(private sHardsoft: SHardsoftService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHardsoft.detail(id).subscribe(
      data => {
        this.harLab = data;
      }, err => {
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    )

  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHardsoft.update(id, this.harLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar Skill");
        this.router.navigate(['']);
      }
      )
  }
}
