import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../shared/services/personajes.service';
import { Personaje } from '../shared/interfaces/personaje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
  public personajes:Personaje[]=[];

  constructor(private personajesService:PersonajesService,
              private router:Router) { }

  ngOnInit() {
    this.personajesService.getPersonajes().subscribe({
      next:(data)=>{
        console.log(data.data.results);
        this.personajes=data.data.results;
      },
      error:(error)=>{
        console.error(error);

      },
      complete:()=>{}


      
  });
  }

  scrollInfinito($evento: any) {
    this.personajesService.getPersonajes().subscribe({
      next:(data)=>{
        console.log(data.data.results);
        this.personajes=this.personajes.concat(data.data.results);
        console.log(this.personajes);
      },
      error:(error)=>{
        console.error(error);

      },
      complete:()=>{
        if($evento)
          $evento.target.complete();

      }
  });

}
public verComics(id:number){
  this.router.navigate(["/comics",id]);
}
}