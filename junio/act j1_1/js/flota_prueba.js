import Autobus from './autobus.js'
import Flota from './flota.js'

var flota = new Flota();

if (flota.addAutobus(new Autobus("5534-GRF", "Oviedo", "Gijón", new Date("12-11-2017"), 20, 6)))
    console.log("Se ha insertado el autobús 5534-GRF");
else
    console.log("No se ha podido insertar el autobús 5534-GRF");

if (flota.addAutobus(new Autobus("4423-GRF", "Candás", "Luanco", new Date("12-10-2017"), 10, 6)))
    console.log("Se ha insertado el autobús 4423-GRF");
else
    console.log("No se ha podido insertar el autobús 4423-GRF");

if (flota.addAutobus(new Autobus("4423-GRF", "Candás", "Luanco", new Date("12-10-2017"), 10, 6)))
    console.log("No ha insertado el autobús 4423-GRF (repetido)");
else
    console.log("No se ha podido insertar el autobús 4423-GRF (repetido)");

if (flota.addAutobus(new Autobus("1111-GRF", "Avilés", "Oviedo", new Date("12-11-2017"), 15, 8)))
    console.log("Se ha insertado el autobús 1111-GRF");
else
    console.log("No se ha podido insertar el autobús 1111-GRF");

console.log("RECUENTO TOTAL FLOTA: --------------------");
for (let [matricula, autobus] of flota.getAutobuses()) {
    console.log(` ${matricula}. ${autobus.Origen}  a ${autobus.Destino}`);

}


