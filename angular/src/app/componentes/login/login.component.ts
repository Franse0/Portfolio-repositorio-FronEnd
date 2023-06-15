import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorFirebaseService } from 'src/app/servicios/error/error-firebase.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  loginUsuario : FormGroup;

  constructor(private login:LoginService, private fb:FormBuilder){
    this.loginUsuario = this.fb.group({
      email:[" ", [Validators.required]],
      password:[" ", Validators.required]
    })
    return 
  }

  ngOnInit(): void {
    this.login.estaLogueado()
  }

  
  inciarSesion(loginUsuario:FormGroup){
    this.login.inciarSesion(loginUsuario)
  }





  



  }


