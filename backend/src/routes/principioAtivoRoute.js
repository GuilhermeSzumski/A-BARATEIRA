const express = require('express');
const principioAtivoController = require('../controllers/principioAtivoController.js');

const router = express.Router();

// Listar todos
router.get('/', principioAtivoController.getAll);

// Buscar por ID
router.get('/:id', principioAtivoController.getById);

// Criar novo
router.post('/', principioAtivoController.create);

// Atualizar
router.put('/:id', principioAtivoController.update);

// Deletar
router.delete('/:id', principioAtivoController.delete);

module.exports = router;