import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorFirebaseService } from 'src/app/servicios/error/error-firebase.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit{

  loading:boolean=false;
  recuperarUsuario:FormGroup;

  constructor(private fb:FormBuilder,
    private aFAuth:AngularFireAuth,
    private toastr: ToastrService,
    private router:Router,
    private firebaseError: ErrorFirebaseService){

      this.recuperarUsuario = this.fb.group({
        email:["", [Validators.required, ]]
      });
  }

  ngOnInit(): void {} 
  

  recuperarCuenta(){
    
    console.log("dale")
    const email = this.recuperarUsuario.value.email;
    this.loading=true;
    console.log(email)
    this.aFAuth.sendPasswordResetEmail(email)
    .then(()=>{
      this.toastr.info("Fue enviado el email para recuperar su contraseña", "recuperar contraseña")
      this.router.navigate(['/login']);
    }) .catch((error)=>{
      this.toastr.error(this.firebaseError.firebaseCodeError(error.code), "Error")
      this.loading=false;
    })
  }
}
