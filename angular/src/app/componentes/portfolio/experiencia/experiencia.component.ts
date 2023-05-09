import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
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

  constructor(private experienciaService:ExperienciaService, private login:LoginService, private router:Router){};

  ngOnInit():void{
    this.experienciaService.obtenerdatos().subscribe(data=>{
      console.log(data);
      this.experienciaList=data
    })
  }

  edit(){
    this.router.navigate(['/experienciaedit'])
  }
}
