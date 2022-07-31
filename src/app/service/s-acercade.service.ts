import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acercade } from '../model/acercade';

@Injectable({
  providedIn: 'root'
})
export class SAcercadeService {
  aceURL = 'https://javierdigirolamo.herokuapp.com/'


  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Acercade[]>{
    return this.httpClient.get<Acercade[]>(this.aceURL + 'lista');
  }

  public  detail(id: number):Observable<Acercade>{
    return this.httpClient.get<Acercade>(this.aceURL + `detail/${id}`);
  }

  public save(acercade:Acercade):Observable<any>{
    return this.httpClient.post<any>(this.aceURL + 'create', acercade);
  }

  public update(id: number, acercade: Acercade): Observable<any>{
    return this.httpClient.put<any>(this.aceURL + `update/${id}`, acercade);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.aceURL + `delete/${id}`);
  }
} 
