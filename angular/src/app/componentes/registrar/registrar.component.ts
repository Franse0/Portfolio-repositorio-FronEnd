import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';
import { ErrorFirebaseService } from 'src/app/servicios/error/error-firebase.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  loading:boolean = false;
  registrarUsuario:FormGroup;

  constructor(private fb:FormBuilder,
              private aFAuth:AngularFireAuth,
              private toastr: ToastrService,
              private router:Router,
              private firebaseError: ErrorFirebaseService){
    this.registrarUsuario = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],
      repetirPassword:['', [Validators.required, Validators.minLength(8)]],
    });
  }
  ngOnInit(): void {
    
  }
  
  registrar(){
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;
    console.log(this.registrarUsuario)
    
    if(password !== repetirPassword){
      this.toastr.error("Las contraseñas ingresadas deben ser las mismas", "Error")
      return;
    }
    
    this.loading=true;
    this.aFAuth.createUserWithEmailAndPassword(email, password)
    .then(()=>{
      // this.toastr.success("Te enviamos un email para que confirmes tu identidad", "Exitos!")
      this.verificarCorrer();
    }).catch((error)=>{
      console.log(error);
      this.loading=false;
      this.toastr.error(this.firebaseError.firebaseCodeError(error.code), "Error");
    })
  }

  verificarCorrer(){
    this.aFAuth.currentUser
    .then(user=> user?.sendEmailVerification())
    .then(()=>{
          this.toastr.info("fue enviado un correo electronico para su respectiva validacion", 'Validar correo');
          this.router.navigate(['/login'])
      })
  }

}

