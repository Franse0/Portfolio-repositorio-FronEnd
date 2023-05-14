import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnologia } from '../modelos/tecnologias';

@Injectable({
  providedIn: 'root'
})
export class TecnologiasService {

  url:string = 'https://portfolio-backend-qzoa.onrender.com/';

  constructor(private http:HttpClient) {}


  obtenerDatos():Observable<any>{
    return this.http.get(this.url+"ver/tecnologia");
  }

  agregarDatos(tecnologia:Tecnologia):Observable<Tecnologia>{
    return this.http.post<Tecnologia>(this.url+'new/tecnologia', tecnologia);
  }

  editarTecnologia(tecnologia: Tecnologia):Observable<Tecnologia>{
    return this.http.post<Tecnologia>(this.url+"new/tecnologia/", tecnologia)
  }
  borrarDatos(id:number){
    console.log("borrando")
    return this.http.delete<Tecnologia>(this.url+'borrar/tecnologia/'+id);
  }

  obtenerTecnologia(id:number){
    return this.http.get<Tecnologia>(this.url+"ver/tecnologia/"+id)
  }


  
}
