const express =  require('express');
let data = require('./data.json');
const app =  express();


app.use(express.json());
app.get('/clients', function(req, res){
    res.json(data);
});
app.get('/clients/:id', function(req, res){
    const {id} = req.params;
    const client  = data.find(cli => cli.id === Number(id));

    res.json(client);
});
    

app.listen(8080, ()=> console.log('server is running'));