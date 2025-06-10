const EstoqueMedicamento = require('../models/estoqueMedicamentoModel.js');

//Listar todos os estoque de medicamentos
exports.getAllEstoqueMedicamentos = async (req, res) => {
    try {
        const estoqueMedicamentos = await EstoqueMedicamento.findAll();
        res.status(200).json(estoqueMedicamentos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar estoque de medicamentos', error });
        console.error('Erro ao buscar estoque de medicamentos:', error);
    }
};

// Buscar estoque de medicamento por ID
exports.getEstoqueMedicamentoById = async (req, res) => {
    try {
        const estoqueMedicamento = await EstoqueMedicamento.findByPk(req.params.id);
        if (!estoqueMedicamento) {
            return res.status(404).json({ message: 'Estoque de medicamento não encontrado' });
        }
        res.status(200).json(estoqueMedicamento);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar estoque de medicamento', error });
    }
};

// Criar novo estoque de medicamento
exports.createEstoqueMedicamento = async (req, res) => {
    try {
        const novoEstoqueMedicamento = await EstoqueMedicamento.create(req.body);
        res.status(201).json(novoEstoqueMedicamento);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar estoque de medicamento', error });
    }
};

// Atualizar estoque de medicamento
exports.updateEstoqueMedicamento = async (req, res) => {
    try {
        const estoqueMedicamentoAtualizado = await EstoqueMedicamento.findByPk(req.params.id);
        if (!estoqueMedicamentoAtualizado) {
            return res.status(404).json({ message: 'Estoque de medicamento não encontrado' });
        }
        await estoqueMedicamentoAtualizado.update(req.body);
        res.status(200).json(estoqueMedicamentoAtualizado);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar estoque de medicamento', error });
    }
};

// Deletar estoque de medicamento
exports.deleteEstoqueMedicamento = async (req, res) => {
    try {
        const estoqueMedicamentoDeletado = await EstoqueMedicamento.findByPk(req.params.id);
        if (!estoqueMedicamentoDeletado) {
            return res.status(404).json({ message: 'Estoque de medicamento não encontrado' });
        }
        await estoqueMedicamentoDeletado.destroy();
        res.status(204).json({ message: 'Estoque de medicamento deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar estoque de medicamento', error });
    }
};