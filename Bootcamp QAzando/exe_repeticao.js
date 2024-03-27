//exercicio 1 - Estrutura de repeticao

//percorrer uma lista de nomes, contendo os nomes:
//Eduardo, Maria, Fernando, Joao e Francisco
//numero da execução, começando em 1
//nome que esta sendo executado
//separadores

//Execução: 1
//Nome: Eduardo
//-------------

const nomes = ['Eduardo', 'Maria', 'Fernando', 'Joao', 'Francisco']

//nomes.forEach((pessoa, indice) => {
 //   console.log('Execução: ' + indice)
 //   console.log(pessoa)
//})

//cidades.forEach((elemento, index) => {
//console.log('Execução numero: ' + index)
//console.log(elemento)
//})

for (let indice = 1; indice < nomes.length; indice++) {
    console.log('Execução: ' + indice)
    console.log('Nome: ' + nomes[indice])
    console.log('-----------------')
}