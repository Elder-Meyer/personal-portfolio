// ejercicio 3
// dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella
// la frase y la palabra deben ser parametros de una funcion

// coincidencias("frase", "palabra") //

function coincidencias(frase, busqueda){
    let textoLimpio = frase.toLowerCase().replace(/["",.+-:¿?]/gi, "");
    let resultado = 0;

    if(textoLimpio.includes(busqueda)){
        let palabras = textoLimpio.split(" ");
        let mapa = {};

        for(let palabra of palabras){
            if(mapa[palabra]){
                mapa[palabra]++;
            } else {
                mapa[palabra] = 1;
            }
        }

        resultado = mapa[busqueda];
    } else {
        resultado = 0;
    }
    return resultado;
}


frase = `
    Si todos vieran tu sonrisa como yo, ningún astronauta volvería a buscar las estrellas. 
    Te mostraría los mas hermoso de este mundo pero seguro ya te viste en un espejo. 
    Si fuera astronauta te llevaría a la luna, pero como no lo soy te llevo en mi corazón. 
    ¿Para que tratar de ver el cielo y las estrellas?, si tan solo con ver tus ojos puedo ver cada una de ellas. 
    Aunque tus ojos no sean azules encontré el cielo en ellos. 
    Millones de estrellas en el cielo y ninguna se compara con el brillo de tus ojos. 
    El sonido de la lluvia era mi favorito hasta que te escuché reir. 
    Me gustan las estrellas y tu tienes el universo en tus ojos. 
    Ni la velocidad de la luz se compara a la aceleración de mi corazón cuando te veo sonreir. 
    Según la ciencia lo perfecto no existe, y mirame aquí, viendo lo perfecta que eres. 
`
busqueda = `cielo`
console.log(
    `
    La palabra: "${busqueda}"
    Aparece: ${coincidencias(frase, busqueda)} vez/veces
    En la(s) siguiente(s) oración(es): 
    ---------------------------------------------------------------------------------------------------------
    ${frase}
    `
)
