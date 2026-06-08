const express = require('express');
const fs = require('fs');
const arquivo = 'jogos.db';

const app = express();
app.use(express.json());

app.listen(3000,()=> {
    console.log('servidor rodando na porta 3000.');
    console.log('acesse a url http://localhost:3000');
    fs.access(arquivo, fs.constants.F_OK, (err)=>{
        if (err) {
            console.log(`${arquivo} não existe. Criando arquivo...`);
            let jogosIniciais = [
                {id:0,nome:"The Legend of Zelda: Ocarina of Time", ano: 1998, categoria: "RPG"},
                {id:1,nome:"Super Mario World", ano: 1990, categoria: "Plataforma"},
                {id:2,nome:"Age of Empires II", ano: 1999, categoria: "Estratégia"},
                {id:3,nome:"Dark Souls III", ano: 2016, categoria: "RPG"},
                {id:4,nome:"The Witcher 3", ano: 2015, categoria: "RPG"},
                {id:5,nome:"Street Fighter 2", ano: 1991, categoria: "Luta"},
                {id:6,nome:"The Elder Scrolls V: Skyrim", ano: 2011, categoria: "RPG"},
                {id:7,nome:"The Last of Us", ano: 2013, categoria: "Aventura"},
                {id:8,nome:"God of War", ano: 2018, categoria: "Ação"},
                {id:9,nome:"Half-Life 2", ano: 2004, categoria: "FPS"}
            ];
            fs.writeFileSync(arquivo,JSON.stringify(jogosIniciais));
        }
    })
})

app.get('/', (req,res)=>res.send('Servidor rodando, tudo ok!'));

app.get('/jogos',(req,res)=>{
    let data = fs.readFileSync(arquivo);
    let jogos = JSON.parse(data);

    //Verificando se foi passado um parâmetro de busca
    if (req.query.categoria) {
        jogos = jogos.filter(jogos =>jogos.categoria.toLowercase().includes(req.query.categoria.toLowerCase()))
        
    }
    res.send(jogos);
});

app.get('/jogos/:id',(req,res)=>{
    let data = fs.readFileSync(arquivo);
    let jogos = JSON.parse(data);
    let jogo = jogos.find(jogo => jogo.id == req.params.id);

    if (jogo) {
        res.send(jogo);
    }else{
        res.status(404).send('O Jogo não foi encontrado');
    }
});

app.post('/jogos',(req,res)=>{
    let data = fs.readFileSync(arquivo);
    let jogos = JSON.parse(data);
    let novoJogo = req.body;

    novoJogo.id = jogos.length + 1;
    jogos.push(novoJogo);

    fs.writeFileSync(arquivo,JSON.stringify(jogos));
    res.status(201).send(novoJogo);
});

app.put('/jogos',(req,res)=>{
    let data = fs.readFileSync(arquivo);
    let jogos = JSON.parse(data);
    let novoJogo = req.body;

    let jogo = jogos.find(jogo=>{
        if (jogo.id  = req.params.id) {
            jogo.nome = novoValor.nome;
            jogo.categoria = novoValor.categoria;
            jogo.ano = novoValor.ano;
            fs.writeFileSync(arquivo,JSON.stringify(jogos));
            return jogo
        }
    });

    if (jogo) {
        res.send(jogo);
    }else{
        res.status(404).send('O Jogo não foi encontrado');
    }
});

app.delete('/jogos/:id', (req, res)=>{
    let data = fs.readFileSync(arquivo);
    let jogos = JSON.parse(data);

    //Verifica se algum jogo foi removido
    if (!jogos.find(jogo=> jogo.id == req.params.id)) {
        return res.status(404).send('O jogo não foi encontrado');
    }

    //Filtra o Array para remover o jogo com o id especificado
    let jogosAtualizados = jogos.filter(jogo => jogo.id != req.params.id);

    //Escreve o array atualizado de volta no arquivo
    fs.writeFileSync(arquivo,JSON.stringify(jogosAtualizados));
    res.send('Jogo Removido com Sucesso');
})