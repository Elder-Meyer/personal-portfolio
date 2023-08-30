// ejercicio 4
// dado una cadena de caracteres, darle la vuelta e invertir el orden de sus caracteres
// sin usar metodos propios del lenguaje

function invertir(texto){
    let invertido = "";

    for(let letra of texto){
        invertido = letra + invertido
    }
    return invertido
}

texto = "ElderMeyer"
console.log(`El texto ${texto} invertido es; ${invertir(texto)}`)