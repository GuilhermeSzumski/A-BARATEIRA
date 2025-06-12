const express = require('express');
const funcionarioController = require('../controllers/funcionarioController.js');

const router = express.Router();

// Rota para obter todos os funcionários
router.get('/', funcionarioController.getAllFuncionarios);

// Rota para obter um funcionário por ID
router.get('/:id', funcionarioController.getFuncionarioById);

// Rota para criar um novo funcionário
router.post('/', funcionarioController.createFuncionario);

// Rota para atualizar um funcionário existente
router.put('/:id', funcionarioController.updateFuncionario);

// Rota para deletar um funcionário
router.delete('/:id', funcionarioController.deleteFuncionario);

module.exports = router;