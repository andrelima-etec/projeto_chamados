const express = require('express');

const operacaoController = require('../controllers/operacaoController');

const router = express.Router();

router.get('/operacoes/somar', operacaoController.somar);
router.post('/operacoes/somar', operacaoController.somarPost);
router.get('/operacoes/subtrair', operacaoController.subtrair);

module.exports = router;