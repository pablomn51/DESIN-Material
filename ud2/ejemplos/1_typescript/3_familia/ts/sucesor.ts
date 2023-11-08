import Persona from "./persona.js"

export default class Sucesor extends Persona{
    constructor(nombre, apellidos,moto=null){
        super(nombre,apellidos);
        this._moto=moto;
}
get  Moto(){
    return  this._moto;
            }
set  Moto(moto){
    this._moto  = moto;
    }

desplazarse(puntoA,puntoB){
    let medio=this._moto?"en moto":"a pie";
    return "Estoy yendo desde "+puntoA+" hasta "+puntoB+" "+medio;
}

}

