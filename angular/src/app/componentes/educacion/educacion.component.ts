import { Component } from '@angular/core';
import { EducacionServiciosService } from 'src/app/servicios/educacion.service';
import { PortfolioService } from 'src/app/servicios/acerca_de.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educacionList:any;

  constructor( private educacionService:EducacionServiciosService){};


  // ngOnInit():void{
  //   this.portfolioService.obtenerDatos().subscribe(data =>{
  //     console.log("recibiendo info de la educacion");
  //     this.educacionList=data.educacion;
  //   })
  // }
  ngOnInit():void{
    this.educacionService.obtenerDatos().subscribe(data =>{
      console.log("recibiendo info de la educacion");
      this.educacionList=data;
    })
  }

}
