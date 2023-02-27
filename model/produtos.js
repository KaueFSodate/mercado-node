class produtos {

    constructor(idprodutos, nome, valor, quantidade, total){
        this.idprodutos = idprodutos;
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
        this.total = total;
    }

    getIdprodutos() {
        return this.idprodutos;
    }

    setIdprodutos(idprodutos){
        this.idprodutos = idprodutos;
    }

    getNome() {
        return this.nome;
    }

    setNome(nome){
        this.nome = nome;
    }

    getValor() {
        return this.valor;
    }

    setValor(valor){
        this.valor = valor;
    }

    getQuantidade() {
        return this.quantidade;
    }

    setQuantidade(quantidade){
        this.quantidade = quantidade;
    }

    getTotal() {
        return this.total;
    }

    setTotal(total){
        this.total = total;
    }

}

module.exports = produtos;