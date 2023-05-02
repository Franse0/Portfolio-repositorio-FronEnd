import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {

  miPortfolio:any;


    constructor(private datosPortfolio:PortfolioService){ };

    ngOnInit(): void{
      this.datosPortfolio.obtenerDatos().subscribe(data => {
        console.log("Recibiendo datos seccion acerca de");
        console.log(data);
        this.miPortfolio=data;
      });
    }
}
