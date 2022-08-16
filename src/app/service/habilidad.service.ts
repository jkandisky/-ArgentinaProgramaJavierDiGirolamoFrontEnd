import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  habURL = 'https://javierdigirolamo.herokuapp.com/habilidades/';

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.habURL + 'lista');
  }

  public detalle(id: number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.habURL + `detalle/${id}`);
  }

  public actualizar(id: number, habilidad: Habilidad): Observable<any> {
    return this.httpClient.put<any>(this.habURL + `actualizar/${id}`, habilidad);
  }

  public save(habilidad: Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.habURL + 'crear', habilidad);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.habURL + `borrar/${id}`);
  }
}