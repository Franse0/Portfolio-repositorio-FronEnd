import { Component } from '@angular/core';
import { EducacionServiciosService } from 'src/app/servicios/educacion.service';
import { PortfolioService } from 'src/app/servicios/acerca_de.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Educacion } from 'src/app/modelos/educacion';
import { LoginComponent } from '../../login/login.component';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  logueado:boolean=this.login.estaLogueado();

  educacionList:any;
  formEdit:FormGroup;

  constructor( private educacionService:EducacionServiciosService, private formBuilder:FormBuilder, private login:LoginService){
    this.formEdit = this.formBuilder.group({
      // id:['',[]],
      escuela:['',[] ],
      img_school:['',[]],
      descripcion:['',[]],
      start:['',[]],
      end:['',[]],
      certificado:['',[]]
    })
    // this.logueado = this.login.logueado;
    // , private login:LoginComponent

  };

  agregarEducacion(){
    console.log("Agregando educacion")
    // const datosForm=this.formEdit.value;
    const e:Educacion= {
      escuela: this.formEdit.value.escuela,
      img_school: this.formEdit.value.img_school,
      descripcion: this.formEdit.value.descripcion,
      start: this.formEdit.value.start,
      end: this.formEdit.value.end,
      certificado: this.formEdit.value.certificado,
    }
    // console.log(datosForm)
    this.educacionService.agregarDatos(e).subscribe(()=>{
      
    });
    console.log(e);
  }


  // ngOnInit():void{
  //   this.portfolioService.obtenerDatos().subscribe(data =>{
  //     console.log("recibiendo info de la educacion");
  //     this.educacionList=data.educacion;
  //   })
  // }
  ngOnInit():void{
    this.educacionService.obtenerDatos().subscribe(data =>{
      console.log("recibiendo info de la educacion");
      this.educacionList=data;
    })
  }

}
