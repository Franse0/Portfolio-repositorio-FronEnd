import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/acerca_de.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService){}

  ngOnInit(): void{
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
  }
}
