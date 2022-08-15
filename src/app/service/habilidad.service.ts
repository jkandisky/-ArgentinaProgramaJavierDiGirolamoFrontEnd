import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  habUrl = 'http://localhost:8080/habilidades/'

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.habUrl + 'lista');
  }

  public detalle(id: number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.habUrl + `detalle/${id}`);
  }

  public actualizar(id: number, habilidad: Habilidad): Observable<any> {
    return this.httpClient.put<any>(this.habUrl + `actualizar/${id}`, habilidad);
  }

  public save(habilidad: Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.habUrl + 'crear', habilidad);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.habUrl + `borrar/${id}`);
  }
}