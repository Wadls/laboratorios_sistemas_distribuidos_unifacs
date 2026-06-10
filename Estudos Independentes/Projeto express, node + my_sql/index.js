const express = require('express');
const app = express();
const port = 3000;


app.listen(port),(error)=>{
    if (error) {
        console.log('Deu Erro');
        return;
    }
    console.log('Server is Running')

};
app.get('/',(req,res)=>{
    res.send("<h1>O bixo é bom mesmo né</h1>");
});