//Importar arquivo de cáculos

const calculos = require('./calculos');

// Obter a função para multiplicar e somar
let multiplicar = calculos.multiplicar
let somar = calculos.somar

//Realizar um Cálculo de Multiplicação

console.log(somar(5,6));
console.log(multiplicar(5,6));
