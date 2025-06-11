const express = require('express');
const compraController = require('../controllers/compraController.js');

const router = express.Router();

// Listar todas as compras
router.get('/', compraController.findAllCompras);

// Listar uma compra pelo ID
router.get('/:id', compraController.findCompraById);

// Criar uma nova compra
router.post('/', compraController.createCompra);

// Atualizar uma compra existente
router.put('/:id', compraController.updateCompra);

// Deletar uma compra
router.delete('/:id', compraController.deleteCompra);

module.exports = router;