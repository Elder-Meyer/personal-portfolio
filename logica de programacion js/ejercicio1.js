// ejercicio 1, dado un número devolver su tabla de multiplicar completa

function tablaMultiplicar(numero){
    let resultado = `# Tabla del ${numero} # \n`
    
    for(let i =1; i<=10; i++){
        let multiplicacion = i * numero  
        resultado += `${i} x ${numero} = ${multiplicacion} \n`
    }

    return resultado
}
  
console.log(tablaMultiplicar(1))
console.log(tablaMultiplicar(2))
console.log(tablaMultiplicar(3))
console.log(tablaMultiplicar(4))
console.log(tablaMultiplicar(5))
console.log(tablaMultiplicar(6))
console.log(tablaMultiplicar(7))
console.log(tablaMultiplicar(8))
console.log(tablaMultiplicar(9))
console.log(tablaMultiplicar(10))

