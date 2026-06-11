const { Router } = require('express');
const router = Router();



router.get('/atendimentos', (req,res)=>{
    res.send('Listando Atendimentos');
});


router.post('/atendimento', (req,res)=>{
    res.send('Criando Atendimento');
});


router.put('/atendimento/:id', (req,res)=>{
    const {id} = req.params;
    res.send(`Atualizando o atendimento ${id}`);
});


router.delete('/atendimento/:id', (req,res)=>{
    const {id} = req.params;
    res.send(`Apagando o atendimento ${id}`);
});


module.exports = router;