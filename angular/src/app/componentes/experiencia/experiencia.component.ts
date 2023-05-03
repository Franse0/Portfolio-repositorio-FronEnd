import { Component } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experienciaList:any;

  constructor(private experienciaService:ExperienciaService){};

  ngOnInit():void{
    this.experienciaService.obtenerdatos().subscribe(data=>{
      console.log(data);
      this.experienciaList=data
    })
  }
}
