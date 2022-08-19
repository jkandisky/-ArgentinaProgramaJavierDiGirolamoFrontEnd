import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  proyUrl = 'https://javierdigirolamo.herokuapp.com/proyectos/'

  constructor(private httpClient: HttpClient) { }
    
    public lista(): Observable<Proyectos[]>{
      return this.httpClient.get<Proyectos[]>(this.proyUrl + 'lista');
    }

    public detalle(id:number): Observable<Proyectos>{
      return this.httpClient.get<Proyectos>(this.proyUrl + `detalle/${id}`);
    }

    public actualizar(id: number, proyecto: Proyectos): Observable<any>{
      return this.httpClient.put<any>(this.proyUrl+`actualizar/${id}`, proyecto);
    }
  
    public save(proyectos: Proyectos):Observable<any>{
      return this.httpClient.post<any>(this.proyUrl+'crear',proyectos);
    }

    public borrar(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.proyUrl+`borrar/${id}`);
    }
}