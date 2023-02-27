const express = require('express');
const router = express.Router();
const produtoControl = require('../controllers/produtoController')

// Mostrar o livro que será editado
router.get('/:idprodutos', produtoControl.telaEditar)

// Editar o livro
router.post('/', produtoControl.editarProduto)

module.exports = router;