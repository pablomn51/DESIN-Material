import Persona from "./persona.js"
import Progenitor from "./progenitor.js";
import Sucesor from "./sucesor.js";
import Familia from "./familia.js";

let persona1=new Persona("Pepe","Gonzalez");
persona1.Nombre="Pepito"; 
console.log(persona1.Nombre+ " "+persona1.Apellido);
console.log(persona1.comer(["huevos","patatas","pan"]));

let padre=new Progenitor("Pepe","Gonzalez","Seat Córdoba");
let madre=new Progenitor("Juana","Perez","Seat Córdoba");
var hijo=new Sucesor("Martin","Gonzalez","Kawasaki");
var hijo2=new Sucesor("Maria","Gonzalez");

console.log(padre.comer());
console.log(madre.comer());
console.log(hijo.comer(["pizza","pasta"]));
console.log(hijo2.comer());
console.log(padre.desplazarse("casa","trabajo"));
console.log(hijo.desplazarse("casa","trabajo"));
console.log(hijo2.desplazarse("casa","trabajo"));


var familia=new Familia();
familia.addMiembro(padre);
familia.addMiembro(madre);
familia.addMiembro(hijo);
familia.addMiembro(hijo2);

familia.llamadaComer();
familia.vacaciones("Madrid","Benidorm");

