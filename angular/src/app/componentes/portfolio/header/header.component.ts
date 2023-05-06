import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // logueado:boolean=false;
  logueado:boolean=this.login.estaLogueado()
  constructor(private login:LoginService){
  
    
  
  }
  abrirNav(){
    let nav:any = document.getElementById("nav");
    console.log(nav)
    nav.classList.toggle("nav-visible");
  }

}

