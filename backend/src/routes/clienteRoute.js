const express = require('express');
const clienteController = require('../controllers/clienteController.js');

const router = express.Router();

// Listar todos os clientes
router.get('/', clienteController.getAllClientes);

// Buscar cliente por ID
router.get('/:id', clienteController.getClienteById);

// Criar novo cliente
router.post('/', clienteController.createCliente);

// Atualizar cliente existente
router.put('/:id', clienteController.updateCliente);

// Deletar cliente
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;