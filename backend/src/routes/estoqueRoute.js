const express = require('express');
const estoqueController = require('../controllers/estoqueController.js');

const router = express.Router();

// Listar todos os estoques
router.get('/', estoqueController.getAllEstoques);

// Buscar estoque por ID
router.get('/:id', estoqueController.getEstoqueById);

// Criar novo estoque
router.post('/', estoqueController.createEstoque);

// Atualizar estoque existente
router.put('/:id', estoqueController.updateEstoque);

// Deletar estoque
router.delete('/:id', estoqueController.deleteEstoque);

module.exports = router;