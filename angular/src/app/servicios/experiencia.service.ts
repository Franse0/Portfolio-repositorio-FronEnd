import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  
  constructor(private http:HttpClient) { }
  
  url:string="http://localhost:8080/ver/";

  obtenerdatos():Observable<any>{
  return this.http.get(this.url+'experiencia');
  }
}
