//Converter uma String para o formato JSON, com dados de um filme
let filmeStr = '{"titulo": "Inception", "ano": 2010, "diretor": "Christopher Nolan", "generos": ["Ação","Ficção Científica","Suspense"], "duracao": 148}';
console.log("String JSON:", filmeStr);

//Convertendo a string para um objeto Javascript
let filme = JSON.parse(filmeStr);

//Acessando e exibindo as propriedades do objeto JavaScript
console.log("Titulo:", filme.titulo);
console.log("Ano:", filme.ano);
console.log("Diretor:", filme.diretor);
console.log("Gêneros:", filme.generos.join(","));
console.log("Duração (min):", filme.duracao);