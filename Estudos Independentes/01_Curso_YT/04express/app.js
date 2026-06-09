//Importando o Módulo Express
const express = require('express');

//Criando Variável para ter acesso as funcionalidades do Express
const app = express();

//Rota
app.get('/', function(req, res) {
    res.write('<h1>Entendendo o Express');
    res.end();
});

// Servidor
app.listen(8080);