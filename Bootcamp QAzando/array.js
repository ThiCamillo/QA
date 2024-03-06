const paises = ['Brasil', 'Argentina', 'Alemanha'] //array - lista de dados

console.log('Acessando o país: ' + paises[0]) //acessando uma posição do array
console.log('Tamanho do array: ' + paises.length) //tamanho do array

//operações com o array

paises.push('USA') //adiciona no final do array
paises.pop() //remove ultimo elemento
paises.unshift('França') // adiciona no começo
paises.shift() //remove primeiro elemento

console.log(paises)