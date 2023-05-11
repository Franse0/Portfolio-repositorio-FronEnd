import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Educacion } from 'src/app/modelos/educacion';
import { EducacionServiciosService } from 'src/app/servicios/educacion.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-educacion-edit',
  templateUrl: './educacion-edit.component.html',
  styleUrls: ['./educacion-edit.component.css']
})
export class EducacionEditComponent {
  formEdit:FormGroup;
  formBorrar:FormGroup;
  logueado:boolean=this.login.estaLogueado();
  educacionLista:any;
  id:String="";


  ngOnInit(){
    this.educacionService.obtenerDatos().subscribe((data)=>{
      this.educacionLista=data
    })
  }

  constructor(private educacionService:EducacionServiciosService, private formBuilder:FormBuilder, private login:LoginService){
    this.formEdit = this.formBuilder.group({
      id:['',[]],
      escuela:['',[] ],
      img_school:['',[]],
      descripcion:['',[]],
      start:['',[]],
      end:['',[]],
      certificado:['',[]],
      persona_id:['',[]]
    })

    this.formBorrar = this.formBuilder.group({
      identificador:["",[]]
    })


  }
      
  agregarEducacion(){
    console.log("Agregando educacion")
    const e:Educacion= {
      id:this.formEdit.value.id,
      escuela: this.formEdit.value.escuela,
      img_school: this.formEdit.value.img_school,
      descripcion: this.formEdit.value.descripcion,
      start: this.formEdit.value.start,
      end: this.formEdit.value.end,
      certificado: this.formEdit.value.certificado,
      persona_id:this.formEdit.value.persona_id
    }
    this.educacionService.agregarDatos(e).subscribe(()=>{
      this.educacionService.obtenerDatos()
    });
    console.log(e);
    this.formEdit.reset()
    this.educacionService.obtenerDatos()
  }


  borrarEsto(){
    const id = this.formBorrar.value.identificador;
    this.educacionService.borrarDatos(id).subscribe(()=>{})
    this.educacionService.obtenerDatos()
}

borrar(id:number){
  try {
    this.educacionService.borrarDatos(id).subscribe(()=>{this.educacionService.obtenerDatos()
      console.log("borrado")
    })
    
  } catch (error) {
    console.log(error)     
  }
}

getEducacion(id:number){
    this.educacionService.obtenerEducacion(id).subscribe((res)=>{
      try {
        console.log(res)
        const{id, escuela,img_school,descripcion,start,end,certificado,persona_id}=res;
        this.id = persona_id;
        this.formEdit.setValue({id,escuela,img_school,descripcion,start,end,certificado,persona_id})
      } catch (error) {
       console.log(error) 
      }
    })
}

actualizarEducacion(){
  const educacion:Educacion={
    id:this.formEdit.value.id,
    escuela: this.formEdit.value.escuela,
    img_school: this.formEdit.value.img_school,
    descripcion: this.formEdit.value.descripcion,
    start: this.formEdit.value.start,
    end: this.formEdit.value.end,
    certificado: this.formEdit.value.certificado,
    persona_id:this.formEdit.value.persona_id
  }
  this.educacionService.editarEducacion(educacion).subscribe(()=>{
    this.educacionService.obtenerDatos()
    this.formEdit.reset()
  })
}

}
