import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tecnologia } from 'src/app/modelos/tecnologias';
import { LoginService } from 'src/app/servicios/login.service';
import { TecnologiasService } from 'src/app/servicios/tecnologias.service';

@Component({
  selector: 'app-skills-edit',
  templateUrl: './skills-edit.component.html',
  styleUrls: ['./skills-edit.component.css']
})
export class SkillsEditComponent {
  skillsList:any;
  logueado:boolean=this.login.estaLogueado();
  formEdit:FormGroup;
  id:String="";

  constructor(private tecnologiaService:TecnologiasService ,private login:LoginService, private formBuilder:FormBuilder){
    this.formEdit = this.formBuilder.group({
      id:["",[]],
      nombre_tec:["",[]],
      img_tec:['',[]],
      persona_id:['',[]]
    })

  };

  ngOnInit():void{
    this.tecnologiaService.obtenerDatos().subscribe(data=>{
      console.log("Reciebiendo datos del skills");
      console.log(data);
      this.skillsList=data;
    })
  }

  borrar(id:number){
    try {
      this.tecnologiaService.borrarDatos(id).subscribe(()=>{
        this.tecnologiaService.obtenerDatos()
      })
    
    } catch (error) {
      console.log(error)
    }
  }

  agregarSkill(){
    const tecnologia:Tecnologia={
      id:this.formEdit.value.id,
      nombre_tec:this.formEdit.value.nombre_tec,
      img_tec:this.formEdit.value.img_tec,
      persona_id:this.formEdit.value.persona_id,
    }
    this.tecnologiaService.agregarDatos(tecnologia).subscribe(()=>{
      this.tecnologiaService.obtenerDatos()
      this.formEdit.reset()
    })
  }

  getProducto(id:number){
    this.tecnologiaService.obtenerTecnologia(id).subscribe((res)=>{
      try {
        console.log(res)
        const {id,nombre_tec, img_tec, persona_id}=res;
        this.id= persona_id  ;
        this.formEdit.setValue({id,nombre_tec, img_tec, persona_id})
      } catch (error) {
        console.log(error)
      }
    })
  }

  editarTec(){
    const tecnologia:Tecnologia={
      id:this.formEdit.value.id,
      nombre_tec:this.formEdit.value.nombre_tec,
      img_tec:this.formEdit.value.img_tec,
      persona_id:this.formEdit.value.persona_id,
    }
    this.tecnologiaService.editarTecnologia (tecnologia).subscribe(()=>{
      this.tecnologiaService.obtenerDatos()
      this.formEdit.reset()
    })
  }

}
