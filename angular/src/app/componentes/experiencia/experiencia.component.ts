import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/acerca_de.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experienciaList:any;

  constructor(private portfolioService:PortfolioService){};

  ngOnInit():void{
    this.portfolioService.obtenerDatos().subscribe(data => {
      console.log(data);
      this.experienciaList=data;
    })
  }
}
