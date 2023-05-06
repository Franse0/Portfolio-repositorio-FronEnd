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

  agregarDatos(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>('http://localhost:8080/new/educacion', educacion)
  }
}

