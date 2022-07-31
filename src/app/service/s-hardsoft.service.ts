import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hardsoft } from '../model/hardsoft';

@Injectable({
  providedIn: 'root'
})
export class SHardsoftService {
  harURL = 'https://javierdigirolamo.herokuapp.com/'


  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Hardsoft[]>{
    return this.httpClient.get<Hardsoft[]>(this.harURL + 'lista');
  }

  public  detail(id: number):Observable<Hardsoft>{
    return this.httpClient.get<Hardsoft>(this.harURL + `detail/${id}`);
  }

  public save(hardsoft:Hardsoft):Observable<any>{
    return this.httpClient.post<any>(this.harURL + 'create', hardsoft);
  }

  public update(id: number, hardsoft: Hardsoft): Observable<any>{
    return this.httpClient.put<any>(this.harURL + `update/${id}`, hardsoft);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.harURL + `delete/${id}`);
  }
} 