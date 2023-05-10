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


  ngOnInit(){
    this.educacionService.obtenerDatos().subscribe((data)=>{
      this.educacionLista=data
    })
  }

  constructor(private educacionService:EducacionServiciosService, private formBuilder:FormBuilder, private login:LoginService){
    this.formEdit = this.formBuilder.group({
      // id:['',[]],
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


loguedo(){
  this.logueado =this.login.estaLogueado()
}
}
