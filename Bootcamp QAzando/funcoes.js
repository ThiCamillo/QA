//FUNÇÕES = bloco de codigo que a gente chama para ser executado - metodo
// pode ou nao receber paramentros
//pode ou nao retornar dados
/*
function gerarNome(nome, sobrenome, idade) {
    console.log('Nome:', nome, sobrenome)
    console.log('Idade:', idade)
}
*/
//colocando retorno na função

function gerarNome(nome, sobrenome) {
    return ('Nome: ' + nome + sobrenome)
}
//console.log(gerarNome('Luiz', ' da Silva'))

const nomeGerado = gerarNome('Pedro', ' Carvalho')
console.log(nomeGerado)