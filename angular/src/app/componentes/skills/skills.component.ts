import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/acerca_de.service';
import { TecnologiasService } from 'src/app/servicios/tecnologias.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  constructor(private tecnologiaService:TecnologiasService){};
  skillsList:any;

  ngOnInit():void{
    this.tecnologiaService.obtenerDatos().subscribe(data=>{
      console.log("Reciebiendo datos del skills");
      console.log(data);
      this.skillsList=data;
    })
  }
}
