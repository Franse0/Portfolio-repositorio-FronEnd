import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Experiencia } from 'src/app/modelos/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-experiencia-edit',
  templateUrl: './experiencia-edit.component.html',
  styleUrls: ['./experiencia-edit.component.css']
})
export class ExperienciaEditComponent {

  experienciaList:any;
  logueado= this.login.estaLogueado();
  formEdit:FormGroup;
  
    ngOnInit():void{
      this.experienciaService.obtenerdatos().subscribe(data=>{
        console.log(data);
        this.experienciaList=data
      })
    }

  constructor(private experienciaService:ExperienciaService, private login:LoginService,private formBuilder:FormBuilder){
    this.formEdit = this.formBuilder.group({
      // id:['',[]],
      nombreExp:['',[] ],
      descripcion:['',[]],
      imgExp:['',[]],
      persona_id:['',[]],
    })
  };

  agregarExperiencia(){
    const experiencia:Experiencia={
      nombreExp:this.formEdit.value.nombreExo,
      descripcion:this.formEdit.value.descripcion,
      imgExp:this.formEdit.value.imgExp,
      persona_id:this.formEdit.value.perosna_id,
    }
    this.experienciaService.agregardatos(experiencia).subscribe(()=>{})
    console.log(experiencia);
    this.formEdit.reset();
    this.experienciaService.obtenerdatos()
  }


  borrar(id:number){
    try {
      this.experienciaService.borrardatos(id).subscribe(()=>{
        this.experienciaService.obtenerdatos()
      })
    } catch (error) {
      console.log(error)     
    }
  }
}
