import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicsService } from '../shared/services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.page.html',
  styleUrls: ['./comics.page.scss'],
})
export class ComicsPage  {
  public idPersonaje!:number;
  public listaComics:any[]=[];

  constructor(private activatedRoute:ActivatedRoute,
              private comicService:ComicsService) { 
    this.activatedRoute.params.subscribe(params=>{
      this.idPersonaje=parseInt(params["id"]);
      console.log(this.idPersonaje);
      this.comicService.getComics(this.idPersonaje).subscribe({
        next:(data)=>{
          this.listaComics=data.data.results;
          console.log(this.listaComics);
        },
        error:(error)=>{
          console.error(error);
  
        },
        complete:()=>{ }
    });
  });
}
}