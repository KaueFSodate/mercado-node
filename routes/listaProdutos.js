const express = require('express');
const router = express.Router();
const produtoControl = require('../controllers/produtoController')


router.get('/', produtoControl.telaMercado)

router.post('/cadastrarProduto', produtoControl.cadastrar)

router.get('/deletar/:idprodutos', produtoControl.deletar)


module.exports = router;