const express = require('express');
const estoqueMedicamentoController = require('../controllers/estoqueMedicamentoController.js');

const router = express.Router();

router.get('/', estoqueMedicamentoController.getAllEstoqueMedicamentos); 
router.get('/:id', estoqueMedicamentoController.getEstoqueMedicamentoById);
router.post('/', estoqueMedicamentoController.createEstoqueMedicamento);
router.put('/:id', estoqueMedicamentoController.updateEstoqueMedicamento);
router.delete('/:id', estoqueMedicamentoController.deleteEstoqueMedicamento);

module.exports = router;