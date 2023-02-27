const express = require('express');
const handlebars = require('express-handlebars');
const port = 8080;
const usuariosC= require('./routes/cadastrar')
const usuariosAcessar = require('./routes/login')
const mercado = require('./routes/listaProdutos')
const editar = require('./routes/editar')
const app = express();

// Configuração para acessar o handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

app.use(express.static('public')); // Linkar o css

// Pegar as informações do body
app.use(express.urlencoded({
    extended: true

    })
)

app.use('/cadastrar', usuariosC);

app.use('/login', usuariosAcessar);

app.use('/mercado', mercado)

app.use('/editar', editar)

app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`)
})