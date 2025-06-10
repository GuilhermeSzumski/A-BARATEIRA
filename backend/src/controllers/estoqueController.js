const Estoque = require('../models/estoqueModel.js');

// Listar todo o estoque
exports.getAllEstoques = async (req, res) => {
    try {
        const estoques = await Estoque.findAll();
        res.status(200).json(estoques);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar estoque', error });
        console.error('Erro ao buscar estoque:', error);
    }
};

// Buscar estoque por ID
exports.getEstoqueById = async (req, res) => {
    try {
        const estoque = await Estoque.findByPk(req.params.id);
        if (!estoque) {
            return res.status(404).json({ message: 'Estoque não encontrado' });
        }
        res.status(200).json(estoque);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar estoque', error });
    }
};

// Criar novo estoque
exports.createEstoque = async (req, res) => {
    try {
        const novoEstoque = await Estoque.create(req.body);
        res.status(201).json(novoEstoque);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar estoque', error });
    }
};

// Atualizar estoque
exports.updateEstoque = async (req, res) => {
    try {
        const estoqueAtualizado = await Estoque.findByPk(req.params.id);
        if (!estoqueAtualizado) {
            return res.status(404).json({ message: 'Estoque não encontrado' });
        }
        await estoqueAtualizado.update(req.body);
        res.status(200).json(estoqueAtualizado);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar estoque', error });
    }
};

// Deletar estoque
exports.deleteEstoque = async (req, res) => {
    try {
        const estoqueDeletado = await Estoque.findByPk(req.params.id);
        if (!estoqueDeletado) {
            return res.status(404).json({ message: 'Estoque não encontrado' });
        }
        await estoqueDeletado.destroy();
        res.status(204).json({ message: 'Estoque deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar estoque', error });
    }
};