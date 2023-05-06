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
    throw new Error('Method not implemented.');
  }

  
  inciarSesion(loginUsuario:FormGroup){
    this.login.inciarSesion(loginUsuario)
  }

  // loading:boolean = false;
  // loginUsuario : FormGroup;
  // logueado:boolean=false;

  // constructor(private fb:FormBuilder,
  //   private aFAuth:AngularFireAuth,
  //   private toastr: ToastrService,
  //   private router:Router,
  //   private firebaseError: ErrorFirebaseService){
  //     this.loginUsuario = this.fb.group({
  //       email:[" ", [Validators.required]],
  //       password:[" ", Validators.required]
  //     })

  //     this.aFAuth.authState.subscribe((user)=>{
  //       if(user){
  //         console.log("el usuario esta logueado");
  //         this.logueado=true;
  //       } else {
  //         console.log("el usuario no esta logueado");
  //         this.logueado=false;
  //       }
  //     })
  //   }
  // ngOnInit(): void {

  // }

  // estaLogueado(){
  //   return this.logueado;
  // }

  // inciarSesion(){
  //   const email = this.loginUsuario.value.email;
  //   const password = this.loginUsuario.value.password;
  //   this.loading=true;
  //   this.aFAuth.signInWithEmailAndPassword(email, password)
  //   .then((user)=>{
  //     console.log(user)
  //     // this.router.navigate(['/login'])
  //     if(user.user?.emailVerified){
  //       this.router.navigate(['/portfolio'])
  //     } else {
  //       this.router.navigate(['/verificacion'])
  //     }
  //   }).catch((error )=>{
  //     console.log(error);
  //     this.loading=false;
  //     this.toastr.error(this.firebaseError.firebaseCodeError(error.code), 'Error')
  //   })
  //   }




  



  }


