import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from '../interfaces/cita';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  url="https://dummyjson.com/auth/quotes";

  constructor(private httpClient:HttpClient) { }

  public getCitas(token:string):Observable<any>{
    let headers=new HttpHeaders({
      "Authorization": `Bearer ${token}`
    });
    return this.httpClient.get(this.url,{headers});
  }
}
