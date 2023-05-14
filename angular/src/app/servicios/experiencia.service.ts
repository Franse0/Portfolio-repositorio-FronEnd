import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelos/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  
  url:string="https://portfolio-backend-qzoa.onrender.com/";
  constructor(private http:HttpClient) { }
  

  obtenerdatos():Observable<any>{
  return this.http.get(this.url+'ver/experiencia');
  }

  obtenerExperiencia(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(this.url+"ver/experiencia/"+ id)
  }

  editardatos(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(this.url+"editar/experiencia", experiencia);
  }

  agregardatos(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(this.url+"new/experiencia", experiencia)
  }
  
  borrardatos(id:number){
    return this.http.delete<Experiencia>(this.url +'borrar/experiencia/'+id)
  }
  
  // borrardatos(id:number):Observable<Experiencia>{
  //   return this.http.delete<Experiencia>(this.url+'/borrar/experiencia/'+id)
  // }
}
