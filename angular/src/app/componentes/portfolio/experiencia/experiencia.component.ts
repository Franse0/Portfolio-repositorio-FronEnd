import { Component } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experienciaList:any;
  logueado= this.login.estaLogueado();

  constructor(private experienciaService:ExperienciaService, private login:LoginService){};

  ngOnInit():void{
    this.experienciaService.obtenerdatos().subscribe(data=>{
      console.log(data);
      this.experienciaList=data
    })
  }
}
