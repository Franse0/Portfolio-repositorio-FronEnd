import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/acerca_de.service';
import { LoginService } from 'src/app/servicios/login.service';
import { TecnologiasService } from 'src/app/servicios/tecnologias.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skillsList:any;
  logueado:boolean=this.login.estaLogueado();


  constructor(private tecnologiaService:TecnologiasService ,private login:LoginService){};

  ngOnInit():void{
    this.tecnologiaService.obtenerDatos().subscribe(data=>{
      console.log("Reciebiendo datos del skills");
      console.log(data);
      this.skillsList=data;
    })
  }
}
