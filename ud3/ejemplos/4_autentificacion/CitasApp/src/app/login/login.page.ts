import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import { CitasService } from '../shared/services/citas.service';
import { Cita } from '../shared/interfaces/cita';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  formulario:FormGroup;
  citas:Cita[]=[];

  constructor(private loginService:LoginService,
              private citasService:CitasService) { 
    this.formulario=new FormGroup({
      username:new FormControl({value:"kminchelle",disabled:this.obtenidoLogin()}),
      password:new FormControl({value:"0lelplR",disabled:this.obtenidoLogin()})
    })
  }


  login(){
   
    this.loginService.login(this.formulario.value).subscribe({
      next:(data)=>{
        if(data.id){
            localStorage.setItem("token",data.token);
        }
      },
      error:(error)=>{
        console.error("ERROR"+error);

      },
      complete:()=>{
        console.log("Finish");
      }
    })
  }

  obtenidoLogin():boolean{
     if (localStorage.getItem("token"))
      return true;
     else
     return false;
  }

  logout(){
    localStorage.removeItem("token");
  }

   obtenerCitas(){
    this.citasService.getCitas(localStorage.getItem("token")!).subscribe({
      next:(data)=>{
       //console.log(data);
       this.citas=data.quotes;
       console.log(this.citas);
      },
      error:(error)=>{
        console.error("ERROR"+error);

      },
      complete:()=>{
        console.log("Finish");
      }
    })
  }
}
