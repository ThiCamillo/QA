// repeticao por array = forEach = para cada elemento do array
// arrow function = função sem nome = função anonima, vai ser executada pelo tamanho do array

const cidades = ['Sao Paulo', 'Rio de Janeiro', 'Florianopolis', 'Recife']

cidades.forEach((elemento, index) => {
    console.log('Execução numero: ' + index)
    console.log(elemento)
})


// for normal