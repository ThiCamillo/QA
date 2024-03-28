//exercicio 3 - Funções
// criar uma função
// que soma dois numeros e retorna esse numero somado
//deve ser enviado por parametros os 2 numeros da conta

//Numero1: 20
//Numero2: 10
//Soma: 30
/*
function soma(numero1, numero2){
    const resultado = numero1 + numero2
    return resultado
}
console.log(soma(12,8))
*/
/*
function soma(numero1, numero2) {
    console.log('Número1: ' + numero1)
    console.log('Número2: ' + numero2)
    return ('Soma: ' + (numero1 + numero2))
}
console.log(soma(20, 10))
*/


function soma(numero1, numero2) {
    const resultado = numero1 + numero2
    console.log('Número1:', numero1)
    console.log('Número2:', numero2)
    console.log('Soma:', resultado)
}
soma(20, 10)
