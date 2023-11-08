
/* Definición de clase Persona */

export default class Persona{
    constructor (nombre="Sin nombre",apellido="Sin apellido"){
    this._nombre=nombre;
    this._apellido=apellido;
}

get Nombre(){
    return this._nombre;
    }
set Nombre(name){
    this._nombre = name;
    }
get Apellido(){
    return this._apellido;
            }
set Apellido(name){
    this._apellido=apellido;
    }


comer(platos){
    let salida="Estoy comiendo ";
    if(platos)
        platos.forEach(plato=>
                salida+=plato+" ");
    else    
        salida+=" un bocata de chorizo";

    return salida;
};


}
