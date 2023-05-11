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
  id:any="";
  
    ngOnInit():void{
      this.experienciaService.obtenerdatos().subscribe(data=>{
        console.log(data);
        this.experienciaList=data
      })
    }

  constructor(private experienciaService:ExperienciaService, private login:LoginService,private formBuilder:FormBuilder){
    this.formEdit = this.formBuilder.group({
      id:['',[]],
      nombre_exp:['',[] ],
      descripcion:['',[]],
      img_exp:['',[]],
      persona_id:['',[]],
      url_git:['',[]]
    })
  };

  agregarExperiencia(){
    const experiencia:Experiencia={
      id:this.formEdit.value.id,
      nombre_exp:this.formEdit.value.nombre_exp,
      descripcion:this.formEdit.value.descripcion,
      img_exp:this.formEdit.value.img_exp,
      persona_id:this.formEdit.value.persona_id,
      url_git:this.formEdit.value.url_git
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

  getExperiencia(id:number){
    this.experienciaService.obtenerExperiencia(id).subscribe((res)=>{
      try {
        console.log(res)
        const {id,nombre_exp, descripcion, img_exp, url_git, persona_id}=res;
        this.id = persona_id;
        this.formEdit.setValue({ id,nombre_exp, descripcion, img_exp, url_git, persona_id,})
      } catch (error) {
        console.log(error)
      }
    })
  }

  editarExperiencia(){
    const experiencia:Experiencia={
      id:this.formEdit.value.id,
      nombre_exp:this.formEdit.value.nombre_exp,
      descripcion:this.formEdit.value.descripcion,
      img_exp:this.formEdit.value.img_exp,
      persona_id:this.formEdit.value.persona_id,
      url_git:this.formEdit.value.url_git
    }
    this.experienciaService.editardatos(experiencia).subscribe(()=>{
      this.experienciaService.obtenerdatos()
      this.formEdit.reset();
    })
    }
}
