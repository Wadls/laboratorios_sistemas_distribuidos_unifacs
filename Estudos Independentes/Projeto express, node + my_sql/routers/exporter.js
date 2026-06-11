const routerAtendimento = require('./atendimentoRouter')
module.exports = (app)=>{
    app.use(routerAtendimento);
}