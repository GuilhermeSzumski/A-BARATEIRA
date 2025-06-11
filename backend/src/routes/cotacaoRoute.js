const express = require('express');
const cotacaoController = require('../controllers/cotacaoController.js');

const router = express.Router();

// Listar todas as cotações
router.get('/', cotacaoController.getAllCotacoes);

// Buscar cotação por ID
router.get('/:id', cotacaoController.getCotacaoById);

// Criar nova cotação
router.post('/', cotacaoController.createCotacao);

// Atualizar cotação
router.put('/:id', cotacaoController.updateCotacao);

// Deletar cotação
router.delete('/:id', cotacaoController.deleteCotacao);

module.exports = router;
