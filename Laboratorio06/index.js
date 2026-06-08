const { error } = require('console');
const express = require('express');
const db = require('./db').db; //importando a instância do banco de dados

//Tu vai Excluir esses dois daqui a pouco
const fs = require('fs');
const arquivo = 'jogos.db';

const app = express();
const APP_PORT = process.env.APP_PORT || 3000;
app.use(express.json());

app.listen(3000,()=> {
    console.log(`API de jogo em execução na porta ${APP_PORT}`);
    console.log(`acesse a url http://localhost:${APP_PORT}`);
    
                // {id:0,nome:"The Legend of Zelda: Ocarina of Time", ano: 1998, categoria: "RPG"},
                // {id:1,nome:"Super Mario World", ano: 1990, categoria: "Plataforma"},
                // {id:2,nome:"Age of Empires II", ano: 1999, categoria: "Estratégia"},
                // {id:3,nome:"Dark Souls III", ano: 2016, categoria: "RPG"},
                // {id:4,nome:"The Witcher 3", ano: 2015, categoria: "RPG"},
                // {id:5,nome:"Street Fighter 2", ano: 1991, categoria: "Luta"},
                // {id:6,nome:"The Elder Scrolls V: Skyrim", ano: 2011, categoria: "RPG"},
                // {id:7,nome:"The Last of Us", ano: 2013, categoria: "Aventura"},
                // {id:8,nome:"God of War", ano: 2018, categoria: "Ação"},
                // {id:9,nome:"Half-Life 2", ano: 2004, categoria: "FPS"}
           
        
    }
);

app.get('/', (req,res)=>res.send('API VERSION 1.1.0 on-line!'));

app.get('/jogos',(req,res)=>{
    let query = "SELECT * FROM jogos";

    //Verificando se foi passado um parâmetro de busca
    if (req.query.categoria) {
        query+= "WHERE categoria LIKE '%" + req.query.categoria + "%'"
    }
    db.all(query, [], (err,jogos)=>{
        if (err) return res.status(500).json({error: err.message});
        res.send(jogos);
    })
    
});

app.get('/jogos/:id',(req,res)=>{
    let query = "SELECT FROM * jogos where id = ?";
    db.get(query,[req.params.id],(err, jogo) => {
        if (err) return res.status(500).json({error: err.message});
    })

    if (jogo) {
        res.send(jogo);
    }else{
        res.status(404).send('O Jogo não foi encontrado');
    }
});

app.post('/jogos', (req, res) => {
    const { nome, categoria, ano } = req.body;
    
    if (!nome || !categoria || !ano) {
        return res.status(400).json({ error: "Campos nome, categoria e ano são obrigatórios" });
    }

    db.run("INSERT INTO jogos (nome, categoria, ano) VALUES (?, ?, ?)",
        [nome, categoria, ano], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).send({ id: this.lastID, nome });
    });
});


app.put('/jogos/:id', (req, res) => {
    const { nome, categoria, ano } = req.body;
    const id = req.params.id;

    let query = "SELECT * FROM jogos where id = ?";
    db.get(query, [id], (err, jogo) => {
        if (err) return res.status(500).json({ error: err.message });
        if (jogo) {
            db.run("UPDATE jogos set nome = ?, categoria = ?, ano = ? where id = ?",
                [nome, categoria, ano, id], function (err) {
                if (err) return res.status(500).json({ error: err.message });
                res.send(jogo);
            });
        } else {
            res.status(404).send('Jogo não encontrado.');
        }
    });
});

app.delete('/jogos/:id', (req, res) => {
    const id = req.params.id;

    db.run("DELETE FROM jogos where id = ?", [id], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.send('Jogo removido com sucesso.');
    });
});