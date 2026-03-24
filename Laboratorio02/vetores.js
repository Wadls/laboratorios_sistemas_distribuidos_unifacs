//Definindo Números
const numeros = [1, 2, 3, 4, 5];

// Acessando Elementos do Vetor
console.log(`Primeiro elemento do vetor ${numeros[0]}`);
console.log(`Terceiro elemento do vetor ${numeros[2]}`);

//Adicionando um elemento ao final do vetor
numeros.push(6)
console.log(`Vetor após adcionar um elemento ${numeros}`);

//Removendo o Último elemento do vetor
const ultimoElementoDoVetor =numeros.pop();
console.log(`Elemento Removido ${ultimoElementoDoVetor}`);
console.log(`Vetor após remover o último elemento ${numeros}`);

//Iterando sobre os elementos do vetor
console.log('Iterando sobre os elementos do vetor: ');
numeros.forEach((numero, index) =>{
    console.log(`Elemento no índice ${index}: ${numero} `);
});

//Definindo um vetor de filmes
const filmes = ['Inception', 'The Matrix', 'Interstellar', 'Lord of the Rings'];

//Adicionando um elemento ao início do vetor
filmes.unshift('The Godfather');
console.log(`Vetor de filmes após adicionar um elemento ao início ${filmes}`);

console.log('Termine isso quando chegar em casa');