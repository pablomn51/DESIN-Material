

const ppt = function (jugada) {
    let p1 = jugada.p1;
    let p2= jugada.p2;
    let resultado = "";
    console.log(`Juega p1: ${p1} p2: ${p2}`);
    if (p1 == p2)
        resultado = "Es un empate";
    else
        if (p1 == "Piedra")
            if ((p2 == 'Tijera'))
                resultado = "El ganador es p1";
            else
                resultado = "El ganador es p2";
        else if (p1 == "Papel")
            if (p2 == 'Piedra')
                resultado = "El ganador es p1";
            else
                resultado = "El ganador es p2";
        else if (p1 == "Tijera")
            if (p2 == 'Papel')
                resultado = "El ganador es p1";
            else
                resultado = "El ganador es p2";

    return resultado;
}


const pptB = function ({p1,p2}) {
   
    let resultado = "";
    console.log(`Juega p1: ${p1} p2: ${p2}`);
    if (p1 == p2)
        resultado = "Es un empate";
    else
        if (p1 == "Piedra")
            if ((p2 == 'Tijera'))
                resultado = "El ganador es p1";
            else
                resultado = "El ganador es p2";
        else if (p1 == "Papel")
            if (p2 == 'Piedra')
                resultado = "El ganador es p1";
            else
                resultado = "El ganador es p2";
        else if (p1 == "Tijera")
            if (p2 == 'Papel')
                resultado = "El ganador es p1";
            else
                resultado = "El ganador es p2";

    return resultado;
}


console.log(ppt({p1:"Piedra",p2:"Tijera"}));
console.log(ppt({p1:"Tijera",p2:"Piedra"}));

console.log(pptB({p1:"Papel",p2:"Tijera"}));
console.log(pptB({p1:"Tijera",p2:"Piedra"}));
