//Criando uma objeto Javascript

let pessoa = {
    nome: "Adailton Cerqueira",
    idade: 30,
    altura:1.71,
    cidade:"Salvador",
    hobbies: ["ler","jogar","assistir"]
};
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
console.log("Altura (m):", pessoa.altura);
console.log("Cidade:", pessoa.cidade);
console.log("Hobbies", pessoa.hobbies.join(", "));

// Convertendo o objeto Javascript para uma string
let pessoaStr = JSON.stringify(pessoa);
console.log("String JSON:",pessoaStr);