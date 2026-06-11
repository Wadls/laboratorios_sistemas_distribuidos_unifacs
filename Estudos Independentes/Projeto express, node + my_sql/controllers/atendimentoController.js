class AtendimentoController {
    buscar(){
        return 'buscando atendimentos';
    }
    criar(){
        return 'criando atendimentos';
    }
    autalizar(id){
        return "Alterando atendimento número " + id + "...";
    }
    deletar(id){
        return "Deletando atendimento número " + id + "...";
    }
}
module.exports = new AtendimentoController();