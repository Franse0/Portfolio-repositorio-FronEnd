import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  url:string = 'http://localhost:8080/ver/';

  constructor(private http:HttpClient) {}


  obtenerDatos():Observable<any>{
    return this.http.get(this.url+"tecnologia");

  }
}
