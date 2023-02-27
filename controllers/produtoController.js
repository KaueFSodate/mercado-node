const conexao = require('../DB/conexao');
const produtos = require('../model/produtos');

module.exports = class produtoController {

    static telaMercado(req, res){

        const sql = `SELECT *FROM produtos`;
    
        conexao.query(sql, (error, data) => { // Injetando a query no BD
            if(error){
                console.log(error);
            }
        
            const produtos = data;
            res.render('mercado', {produtos})
    
            });
    }
    

    static cadastrar(req, res){ // Função de cadastrar usuario

        // Criação do objeto
        const produto = new produtos(); 
        
        // Objeto recebendo o valor dos inputs
        produto.setNome(req.body.nome);
        produto.setQuantidade(req.body.quantidade)
        produto.setValor(req.body.valor)
        produto.setTotal(req.body.quantidade * req.body.valor);

        const sql = `INSERT INTO produtos(nome, valor, quantidade, total) VALUES (?,?,?,?)`
        const data = [produto.getNome(), produto.getValor(), produto.getQuantidade(), produto.getTotal()]


        conexao.query(sql, data, (error) => { // Injetando a query no BD
            if(error){
                console.log(error);
            }
    
            res.redirect('/mercado'); // Redirecionar para a tela de lojin
        });
    }

    static deletar(req, res){
        const produto = new produtos(); 
        
        // Objeto recebendo o valor dos inputs
        produto.setIdprodutos(req.params.idprodutos);

        const sql = `DELETE FROM produtos WHERE (idprodutos = ${produto.getIdprodutos()});`;
        

        conexao.query(sql, (error, data) => { // Injetando a query no BD
            if(error){
                console.log(error);
            }
    
            const produtos = data;
            res.render('mercado', {produtos})
            res.redirect('/mercado')

        });
    }

    static telaEditar(req, res){

        const id = req.params.idprodutos;

        const sql = `SELECT *FROM produtos where idprodutos = ${id}`;
    
        conexao.query(sql, (error, data) => { // Injetando a query no BD
            if(error){
                console.log(error);
            }
        
            const produtos = data[0];
            res.render('editar', {produtos})
    
        });
    }

    static editarProduto(req, res){

        // Variaveis que irão receber o valor dos inputs
        const id = req.body.idprodutos
        const nome = req.body.nome
        const valor = req.body.valor
        const quantidade = req.body.quantidade
        const total = req.body.quantidade * req.body.valor;

        // String SQL
        const sql = `update produtos set nome = '${nome}', valor ='${valor}', quantidade ='${quantidade}', total = ${total} where idprodutos = '${id}'`

        conexao.query(sql, (error) => {
            if(error){
                console.log(error);
            }

            res.redirect('/mercado');
        });

    }
}
