import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../modelos/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionServiciosService {
  
  url:string = 'http://localhost:8080/';
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get(this.url+"ver/educacion");
  }

  obtenerEducacion(id:number):Observable<Educacion>{
    return this.http.get<Educacion>(this.url+"ver/educacion/"+id);
  }

  editarEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(this.url+"editar/educacion", educacion);
  }
  agregarDatos(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>('http://localhost:8080/new/educacion', educacion)
  }

  borrarDatos(id:number){
    return this.http.delete<Educacion>(this.url+"borrar/educacion/"+id)
  }
}

