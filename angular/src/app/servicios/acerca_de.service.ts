import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  url:string = 'http://localhost:8080/ver/';

  // obtenerDatos():Observable<any>{
  //   return this.http.get("./assets/data/data.json");
  // }
  obtenerDatos():Observable<any>{
    return this.http.get(this.url+"personas");
  }
}
