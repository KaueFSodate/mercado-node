const express = require('express');
const router = express.Router();
const usuarioControl = require('../controllers/usersController')


router.get('/', usuarioControl.telaLogin)

router.post('/acessar', usuarioControl.acessar)


module.exports = router;