const express = require('express');
const NotaFiscalController = require('../controllers/notaFiscalController.js');

const router = express.Router();

// Lista todas as notas fiscais
router.get('/', NotaFiscalController.findAllNotasFiscais);

// Busca uma nota fiscal pelo ID
router.get('/:id', NotaFiscalController.findNotaFiscalById);

// Cria uma nova nota fiscal
router.post('/', NotaFiscalController.createNotaFiscal);

// Atualiza uma nota fiscal existente
router.put('/:id', NotaFiscalController.updateNotaFiscal);

// Deleta uma nota fiscal
router.delete('/:id', NotaFiscalController.deleteNotaFiscal);

module.exports = router;