import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorFirebaseService } from './error/error-firebase.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

type NewType = FormBuilder;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 
  loading:boolean = false;
  logueado:boolean=this.estaLogueado();

  constructor(
    private aFAuth:AngularFireAuth,
    private toastr: ToastrService,
    private router:Router,
    private firebaseError: ErrorFirebaseService){
    

      this.aFAuth.authState.subscribe((user)=>{
        if(user){
          console.log("el usuario esta logueado");
          this.logueado=true;
        } else {
          console.log("el usuario no esta logueado");
          this.logueado=false;
        }
        console.log(this.logueado)
        return this.logueado;
      })
    }
  ngOnInit(): void {

  }

  estaLogueado(){
    return this.logueado;
  }

  inciarSesion(loginUsuario:FormGroup){
    const email = loginUsuario.value.email;
    const password = loginUsuario.value.password;
    this.loading=true;
    this.aFAuth.signInWithEmailAndPassword(email, password)
    .then((user)=>{
      console.log(user)
      // this.router.navigate(['/login'])
      if(user.user?.emailVerified){
        this.router.navigate(['/portfolio'])
      } else {
        this.router.navigate(['/verificacion'])
      }
    }).catch((error )=>{
      console.log(error);
      this.loading=false;
      this.toastr.error(this.firebaseError.firebaseCodeError(error.code), 'Error')
    })
    }


  
    logOutService(){
      this.aFAuth.signOut().then(()=>{
        this.loading=true
        window.location.reload()
        this.router.navigate(['/portfolio'])
      })
    }


}
