import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sobremi } from '../model/sobremi';

@Injectable({
  providedIn: 'root'
})
export class SSobremiService {
  sobURL = 'https://javierdigirolamo.herokuapp.com/'


  constructor(private httpClient: HttpClient) { }

  public lista():Observable<Sobremi[]>{
    return this.httpClient.get<Sobremi[]>(this.sobURL + 'lista');
  }

  public  detail(id: number):Observable<Sobremi>{
    return this.httpClient.get<Sobremi>(this.sobURL + `detail/${id}`);
  }

  public save(sobremi:Sobremi):Observable<any>{
    return this.httpClient.post<any>(this.sobURL + 'create', sobremi);
  }

  public update(id: number, sobremi: Sobremi): Observable<any>{
    return this.httpClient.put<any>(this.sobURL + `update/${id}`, sobremi);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.sobURL + `delete/${id}`);
  }
} 

