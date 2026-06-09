// importar o módulo http
const http = require('http');

//Criar o servidor
http.createServer(function (req, res) {
    res.write('Aprendendo Node.js do Zero');
    res.end();
}).listen(8080);