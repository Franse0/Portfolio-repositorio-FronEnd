import { Component } from '@angular/core';
import { EducacionServiciosService } from 'src/app/servicios/educacion.service';
import { PortfolioService } from 'src/app/servicios/acerca_de.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Educacion } from 'src/app/modelos/educacion';
import { LoginComponent } from '../../login/login.component';
import { LoginService } from 'src/app/servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  logueado:boolean=this.login.estaLogueado();
  loading:boolean=this.login.loading;
  educacionList:any;
  formEdit:FormGroup;
  formBorrar:FormGroup;

  constructor( private educacionService:EducacionServiciosService, private router:Router,private formBuilder:FormBuilder, private login:LoginService){
    this.formEdit = this.formBuilder.group({
      // id:['',[]],
      escuela:['',[] ],
      img_school:['',[]],
      descripcion:['',[]],
      start:['',[]],
      end:['',[]],
      certificado:['',[]]
    })

    this.formBorrar = this.formBuilder.group({
      identificador:["",[]]
    })


  };

  // agregarEducacion(){
  //   console.log("Agregando educacion")
  //   const e:Educacion= {
  //     escuela: this.formEdit.value.escuela,
  //     img_school: this.formEdit.value.img_school,
  //     descripcion: this.formEdit.value.descripcion,
  //     start: this.formEdit.value.start,
  //     end: this.formEdit.value.end,
  //     certificado: this.formEdit.value.certificado,
  //   }
  //   this.educacionService.agregarDatos(e).subscribe(()=>{
      
  //   });
  //   console.log(e);
  //   this.formEdit.reset()
  //   this.educacionService.obtenerDatos()
  // }



  ngOnInit():void{
    this.educacionService.obtenerDatos().subscribe(data =>{
      console.log("recibiendo info de la educacion");
      this.educacionList=data;
    })
  }


  // borrarEsto(){
  //     const id = this.formBorrar.value.identificador;
  //     this.educacionService.borrarDatos(id).subscribe(()=>{})
  //     this.educacionService.obtenerDatos()
  // }

  // borrar(id:number){
  //   try {
  //     this.educacionService.borrarDatos(id).subscribe(()=>{})
  //     this.educacionService.obtenerDatos()

  //   } catch (error) {
  //     console.log(error)     
  //   }
  // }

  editar(){
    this.router.navigate(["/educacionedit"])
  }
}



