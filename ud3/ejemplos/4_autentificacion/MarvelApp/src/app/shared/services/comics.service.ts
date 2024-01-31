import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  private PUBLIC_KEY="efae4e097bdd03d0a43581e8d25c5388"; /* Cambiar por tu clave pública */
  private baseURL= "http://gateway.marvel.com/v1/public"
  private tamPagina=20;
  private paginaActual=0;
  private sufijoURL=`apikey=${this.PUBLIC_KEY}`;

  constructor(private httpClient:HttpClient) { }

  public getComics(idPersonaje:number):Observable<any>{
   let  url= `${this.baseURL}/characters/${idPersonaje}/comics?${this.sufijoURL}`;    
    return this.httpClient.get(url);
  }
}
