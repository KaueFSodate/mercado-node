const conexao = require('../DB/conexao')
const usuarios = require('../model/usuarios')

module.exports = class usersController{

    // Renderizar a tela de cadastro
    static telaCadastro(req, res){
        res.render('cadastro');
    }

    static cadastrar(req, res){ // Função de cadastrar usuario

        // Criação do objeto
        const usuario = new usuarios(); 
        
        // Objeto recebendo o valor dos inputs
        usuario.setNome(req.body.nome);
        usuario.setSenha(req.body.senha);

        const sql = `INSERT INTO usuarios(nome, senha) VALUES (?,?)`
        const data = [usuario.getNome(), usuario.getSenha()]


        conexao.query(sql, data, (error) => { // Injetando a query no BD
            if(error){
                console.log(error);
            }
    
            res.redirect('/login'); // Redirecionar para a tela de lojin
        });


    }

    // Renderizar a tela do login
    static telaLogin(req, res){
        res.render('login');
    }

    // Função de acessar o login
    static acessar(req, res){

        // Criação do objeto
        const usuario = new usuarios(); 
        
        // Objeto recebendo o valor dos inputs
        usuario.setNome(req.body.nome);
        usuario.setSenha(req.body.senha);


        const sql = `SELECT nome, senha FROM usuarios WHERE nome = '${usuario.getNome()}' AND senha = '${usuario.getSenha()}'`

        conexao.query(sql, (error, data) => { // Injetando a query no BD
            if(error){
                console.log(error);
                return;
            }
    
            const usuario = data[0];
        
            if(usuario){    // Se tiver valor no select ira entrar na tela de livros
                res.redirect('/mercado');
            }else{
                res.redirect('/login');
            }
        });
    }
    

}