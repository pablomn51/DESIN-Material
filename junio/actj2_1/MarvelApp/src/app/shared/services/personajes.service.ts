import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private PUBLIC_KEY="X"; /* Cambiar por tu clave pública */
  private baseURL= "http://gateway.marvel.com/v1/public"
  private tamPagina=20;
  private paginaActual=0;
  private sufijoURL=`apikey=${this.PUBLIC_KEY}`;

  constructor(private httpClient:HttpClient) { }

  public getPersonajes():Observable<any>{
    this.paginaActual++;
    let url = `${this.baseURL}/characters?${this.sufijoURL}&limit=${this.tamPagina}&offset=${(this.paginaActual-1)*this.tamPagina}`;
    return this.httpClient.get(url);
  }
}
