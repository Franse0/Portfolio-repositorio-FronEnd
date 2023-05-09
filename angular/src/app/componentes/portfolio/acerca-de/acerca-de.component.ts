import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/acerca_de.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {

    miPortfolio:any;
    logueado:boolean=this.login.estaLogueado();


    constructor(private datosPortfolio:PortfolioService, private router:Router,private login:LoginService){ };

    ngOnInit(): void{
      this.datosPortfolio.obtenerDatos().subscribe(data => {
        console.log("Recibiendo datos seccion acerca de");
        console.log(data);
        this.miPortfolio=data;
      });
    }

    edit(){
      this.router.navigate(['/acercadeedit'])
    }
}
