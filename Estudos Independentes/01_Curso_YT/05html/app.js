//importar o express
const express = require('express');

//App
const app = express();

// Especificar local do CSS e da imagem
app.use(express.static(__dirname+'/public'));

//Rota
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/pagina.html'); 
});

app.listen(8080);