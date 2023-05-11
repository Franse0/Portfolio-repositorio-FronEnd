import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url:string = 'http://localhost:8080/';
  constructor(private http:HttpClient) { };


  // obtenerDatos():Observable<any>{
  //   return this.http.get("./assets/data/data.json");
  // }
  obtenerDatos():Observable<any>{
    return this.http.get(this.url+"ver/personas");
  }

  obtenerPersona(id:number):Observable<Persona>{
    return this.http.get<Persona>(this.url+"ver/persona/"+id);
  }

  editarPersona(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url+"editar/persona", persona);
  }

  agregarDatos(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url+'new/persona',persona)
  }

  borrarDatos(id:number){
    return this.http.delete<Persona>(this.url+'borrar/persona/'+id)
  }
}
