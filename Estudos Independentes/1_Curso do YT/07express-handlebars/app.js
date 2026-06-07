//Importando o Express e o Express Handlebars
const express = require('express');
var exphbs = require('express-handlebars');

//App
const app = express();

//Template
app.engine('handlebars', exphbs.engine({defaultLayout : 'principal'}));
app.set('view engine', 'handlebars');

app.get('/',function (req,res) {
    res.render('inicio');
});
app.get('/sobre',function (req,res) {
    res.render('sobre');
});
let data = require('./data.json');

app.use(express.json());
app.get('/clients', function(req, res){
    res.json(data);
});


// Servidor
app.listen(8080);
