//Express
const express = require('express');

// BodyParser
const bodyParser = require('body-parser');

//App
const app = express();

//Configurar o BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Rotas
app.get('/', function (req,res) {
    res.sendFile(__dirname+'/form.html');
    
});

app.post('/receber', function (req,res) {
    res.write('<h1>' + req.body.nome + '</h1>');
    res.end();
})

//Servidor
app.listen(8080)