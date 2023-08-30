// ejercicio2, dada una palabra decir si es un palindromo o no

function palindromo(texto){
    let invertido = texto.split('').reverse().join('')
    return invertido === texto
}
  
  
let palabra = "otto"
console.log(`La palabra ${palabra}, ¿es un palindromo? ${palindromo(palabra)} ` )

palabra = "elder"
console.log(`La palabra ${palabra}, ¿es un palindromo? ${palindromo(palabra)} ` )