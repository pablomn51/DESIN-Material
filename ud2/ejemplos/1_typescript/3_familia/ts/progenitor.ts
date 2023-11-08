
/* Definición de la clase Padre */
import Persona from "./persona.js"

export default class Progenitor extends Persona {
    constructor(nombre, apellidos, coche = "Sin coche") {
        super(nombre, apellidos);
        this._coche = coche;
    }
    get Coche() {
        return this._coche;
    }
    set Coche(coche) {
        this._coche = coche;
    }
    comer() {
        return "Estoy comiendo huevos";
    }

    desplazarse(puntoA,puntoB){
        let medio=this._coche?"en coche":"a pie";
        return "Estoy yendo desde "+puntoA+" hasta "+puntoB+" "+medio;
    }
    
    
  

}
