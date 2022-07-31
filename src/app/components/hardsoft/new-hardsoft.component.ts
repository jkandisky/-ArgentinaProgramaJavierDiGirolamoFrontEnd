import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hardsoft } from 'src/app/model/hardsoft';
import { SHardsoftService } from 'src/app/service/s-hardsoft.service';

@Component({
  selector: 'app-new-hardsoft',
  templateUrl: './new-hardsoft.component.html',
  styleUrls: ['./new-hardsoft.component.css']
})
export class NewHardsoftComponent implements OnInit {
   nombreH: string = '';
   descripcionH: string = '';
  constructor(private sHardsoft: SHardsoftService, private router: Router,) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const hard = new Hardsoft(this.nombreH, this.descripcionH);
    this.sHardsoft.save(hard).subscribe(
      data=>{
        alert("Skill Añadida");
        this.router.navigate(['']);
    }, err =>{
      alert("Fallo");
      this.router.navigate(['']);
    }
    )
  }
}