const express = require('express');
const medicamentoController = require('../controllers/filialController.js');

const router = express.Router();

// Listar todas as filiais
router.get('/', medicamentoController.getAllFiliais);

// Buscar filial por ID
router.get('/:id', medicamentoController.getFilialById);

// Criar nova filial
router.post('/', medicamentoController.createFilial);

// Atualizar filial existente
router.put('/:id', medicamentoController.updateFilial);

// Deletar filial
router.delete('/:id', medicamentoController.deleteFilial);

module.exports = router;