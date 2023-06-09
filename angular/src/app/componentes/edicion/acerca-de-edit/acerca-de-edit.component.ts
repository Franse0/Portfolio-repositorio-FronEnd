import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Persona } from 'src/app/modelos/persona';
import { PortfolioService } from 'src/app/servicios/acerca_de.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-acerca-de-edit',
  templateUrl: './acerca-de-edit.component.html',
  styleUrls: ['./acerca-de-edit.component.css']
})
export class AcercaDeEditComponent {
  miPortfolio:any;
  formEdit:FormGroup;
  myPortfolio:any;
  logueado:boolean=this.login.estaLogueado();
  id:any="";


  constructor(private datosPortfolio:PortfolioService,private formBuilder:FormBuilder, private acercadDeService:PortfolioService, private login:LoginService){
    this.formEdit=this.formBuilder.group({
      id:['',[]],
      nombre:['',[]],
      apellido:['',[]],
      fecha_nac:['',[]],
      nacionalidad:['',[]],
      mail:['',[]],
      sobre_mi:['',[]],
      ocupacion:['',[]]
    })
   };

   ngOnInit(){
    this.acercadDeService.obtenerDatos().subscribe((data)=>{
      this.myPortfolio=data
    })
   }

   agregarPersona(){
    const persona:Persona={
      id:this.formEdit.value.id,
      nombre:this.formEdit.value.nombre,
      apellido:this.formEdit.value.apellido,
      fecha_nac:this.formEdit.value.fecha_nac,
      nacionalidad:this.formEdit.value.nacionalidad,
      mail:this.formEdit.value.mail,
      sobre_mi:this.formEdit.value.sobre_mi,
      ocupacion:this.formEdit.value.ocupacion,
    }
    this.acercadDeService.agregarDatos(persona).subscribe(()=>{
      this.acercadDeService.obtenerDatos()
    })
    this.formEdit.reset()
    this.acercadDeService.obtenerDatos()
  }

  borrarr(id:number){
    try {
      this.acercadDeService.borrarDatos(id).subscribe(()=>{
        this.acercadDeService.obtenerDatos();
        console.log("Borrado Correctamente")
      })
    } catch (error) {
      console.log(error)
    }
  }

  getPersona(id:number){
    this.acercadDeService.obtenerPersona(id).subscribe((res)=>{
      try {
        console.log(res);
        const{id,nombre,apellido,fecha_nac,nacionalidad,mail,sobre_mi,ocupacion}=res;
        this.id=id;
        this.formEdit.setValue({id,nombre,apellido,fecha_nac,nacionalidad,mail,sobre_mi,ocupacion})
      } catch (error) {
        console.log(error)
      }
    })
  }

  actualizarPersona(){
    const persona:Persona={
      id:this.formEdit.value.id,
      nombre:this.formEdit.value.nombre,
      apellido:this.formEdit.value.apellido,
      fecha_nac:this.formEdit.value.fecha_nac,
      nacionalidad:this.formEdit.value.nacionalidad,
      mail:this.formEdit.value.mail,
      sobre_mi:this.formEdit.value.sobre_mi,
      ocupacion:this.formEdit.value.ocupacion, 
    }
    this.acercadDeService.editarPersona(persona).subscribe(()=>{
      this.acercadDeService.obtenerDatos()
      this.formEdit.reset()
    })
  }
}
