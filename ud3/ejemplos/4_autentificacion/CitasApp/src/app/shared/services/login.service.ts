import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="https://dummyjson.com/auth/login";

  constructor(private httpClient:HttpClient) { 
  }

  public login(usuario:any):Observable<any>{
    let headers=new HttpHeaders({
      "Content-Type":"application/json"
    });
    return this.httpClient.post(this.url,JSON.stringify(usuario),{headers});
  }
}
