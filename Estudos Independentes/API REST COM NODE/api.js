//API = Application Programing Interface
//REST = Representational State Transfer
//Principais Métodos HTTP inclusos nas boas práticas do REST: GET, POST, PUT/PATCH, DELETE
//GET: Coletar/Pegar Informações
//POST: Criar Informações
//PUT/PATCH: Alterar uma informação Existente
//DELETE: Apagar Informações
import express from "express";

const app = express();
const PORT = 3000;
const objResponse = {
    nome: 'Roberto',
    company: 'Uber'
}
app.get('/',(request,response)=>{
    response.json(objResponse);
})
app.listen(PORT, ()=> console.log(`O servidor está  rodando na porta ${PORT}`));
