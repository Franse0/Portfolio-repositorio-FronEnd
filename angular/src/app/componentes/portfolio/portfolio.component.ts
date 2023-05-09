import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  logueado:boolean=this.login.estaLogueado()


  constructor(private afAuth:AngularFireAuth,
    private router:Router, private login:LoginService){}
  ngOnInit(): void {
  }

  logOut(){
    this.afAuth.signOut().then(()=>{
      this.router.navigate(['/portfolio'])
    })
  }

}

