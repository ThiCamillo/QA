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
/*
nomes.forEach((nome, indice) => {
    console.log('Execução: ', indice + 1)
    console.log('Nome:' + nome)
    console.log('-----------------')
})
*/

for (let indice = 0; indice < nomes.length; indice++) {
    console.log('Execução: ', indice + 1)
    console.log('Nome: ' + nomes[indice])
    console.log('-----------------')
}