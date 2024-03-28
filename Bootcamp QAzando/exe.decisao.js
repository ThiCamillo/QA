//Exercicio 2 - estrutura de decisao

/*
Percorrer uma list de cidades
contendo: ['Sao Paulo', 'Rio de Janeiro', 'Florianopolis', 'Recife']
Para cada item verificar, se a cidade de Florianopolis esta presente na lista
printar o nome da cidade
caso esteja, avisar
caso nao seja o elemento procurado, avisar
numero da execução

Execução: 1
Cidade: São Paulo
Encontrado / Não encontrado
-------------

*/


const cidades = ['Sao Paulo', 'Rio de Janeiro', 'Florianopolis', 'Recife']

cidades.forEach((cidade, indice) => {
    console.log('Execução: ', indice + 1)
    console.log('Cidade: ', cidade)
    
    if (cidade == 'Florianopolis') {
        console.log('Encontrado!')
    } else {
        console.log('Não encontrado!')
    }
    console.log('-----------------------')
})