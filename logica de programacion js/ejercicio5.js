// ejercicio 5
// cuanto es el x porciento de x numero

// cuanto es el 20% de 100

// tantoPorciento(20, 100) // devuelve: 20
// tantoPorciento(43, 897) // devuelve: 385.71

function tantoPorciento(porcentaje, numero){
    let mensaje = "";
    let resultado = 0;
    
    if(!porcentaje || !numero){
        mensaje = "Necesitas ingresar los parametros"
    } else {
        resultado = (numero * (porcentaje/100));
        mensaje = `El ${porcentaje}% de ${numero} es ${resultado}`
    }

    return mensaje;
}


console.log(tantoPorciento(43, 897))
