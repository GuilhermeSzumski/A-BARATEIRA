const express = require('express');
const medicamentoController = require('../controllers/medicamentoController.js');

const router = express.Router();

// GET all medicamentos
router.get('/', medicamentoController.getAllMedicamentos);

// GET medicamento by ID
router.get('/:id', medicamentoController.getMedicamentoById);

// POST create new medicamento
router.post('/', medicamentoController.createMedicamento);

// PUT update medicamento by ID
router.put('/:id', medicamentoController.updateMedicamento);

// DELETE medicamento by ID
router.delete('/:id', medicamentoController.deleteMedicamento);

module.exports = router;