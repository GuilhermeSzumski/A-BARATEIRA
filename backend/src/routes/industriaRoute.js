const express = require('express');
const industriaController = require('../controllers/industriaController.js');

const router = express.Router();

// GET all industrias
router.get('/', industriaController.getAllIndustrias);

// GET industria by ID
router.get('/:id', industriaController.getIndustriaById);

// POST create new industria
router.post('/', industriaController.createIndustria);

// PUT update industria by ID
router.put('/:id', industriaController.updateIndustria);

// DELETE industria by ID
router.delete('/:id', industriaController.deleteIndustria);

module.exports = router;