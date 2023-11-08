
/* Definición de clase Familia */

export default class Familia{
    constructor (domicilio="Sin casa",renta=0){
        this._domicilio=domicilio;
        this._renta=renta;
        this._miembros=new Array();
    }
    
    addMiembro(m){
        this._miembros.push(m);
    };
    

    llamadaComer(){
        console.log("A COMERRRRR");
        this._miembros.forEach(miembro=>
            console.log(miembro.comer())
        );
    }

    vacaciones(origen,destino){
        console.log("VACACIONESSSSS");

        this._miembros.forEach(miembro=>
            console.log(miembro.desplazarse(origen,destino)));
    }
      
    }

  
    