export default class Flota {
    constructor() {
        this._autobuses = new Map();
    }

    getAutobuses() {
        return this._autobuses;
    }

    addAutobus(autobus) {
        if (this._autobuses.has(autobus.Matricula)) {
            return false;
        } else {
            this._autobuses.set(autobus.Matricula, autobus);
            return true;
        }
    }

    getAutobusPosicion(posicion){
        (posicion >0 && posicion < this._autobuses.size) ? this.autobuses[posicion] : null;
    }

    getAutobus(origen, destino) {
        let resultado = null;
        this._autobuses.forEach((bus, matricula) => {
            if (bus.Origen == origen && bus.Destino == destino && bus.getPorcentajeOcupacion() < 100) {
                resultado = bus;
            }
        });
        return resultado;
    }

    getNumeroAutobuses() {
        return this._autobuses.size;
    }   

}