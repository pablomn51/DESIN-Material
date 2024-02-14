import { Component } from '@angular/core';
import { Device } from '@capacitor/device';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public load:boolean;

  /* Inyectamos Platform para obtener el lenguaje y el servicio de traducción TranslateService */
  constructor(private platform:Platform,
              private translate:TranslateService) {
        this.translate.setDefaultLang("es");
        this.initApp();
        this.load=false;
}

  /* Obtiene el lenguaje a partir del dispositivo */
  async initApp(){
    this.platform.ready().then(async ()=>{
        const language=await Device.getLanguageCode();
        if(language.value){
          this.translate.use(language.value.slice(0,2))
        }
        this.load=true;
       

    }

    );

  }

}
