const Cotacao = require('../models/cotacaoModel.js');

// Listar todas as cotações
exports.getAllCotacoes = async (req, res) => {
    try {
        const cotacoes = await Cotacao.findAll();
        res.status(200).json(cotacoes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar cotações', error });
        console.error('Erro ao buscar cotações:', error);
    }
};

// Buscar cotação por ID
exports.getCotacaoById = async (req, res) => {
    try {
        const cotacao = await Cotacao.findByPk(req.params.id);
        if (!cotacao) {
            return res.status(404).json({ message: 'Cotação não encontrada' });
        }
        res.status(200).json(cotacao);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar cotação', error });
    }
};

// Criar nova cotação
exports.createCotacao = async (req, res) => {
    try {
        const novaCotacao = await Cotacao.create(req.body);
        res.status(201).json(novaCotacao);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar cotação', error });
    }
};

// Atualizar cotação
exports.updateCotacao = async (req, res) => {
    try {
        const cotacaoAtualizada = await Cotacao.findByPk(req.params.id);
        if (!cotacaoAtualizada) {
            return res.status(404).json({ message: 'Cotação não encontrada' });
        }
        await cotacaoAtualizada.update(req.body);
        res.status(200).json(cotacaoAtualizada);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar cotação', error });
    }
};

// Deletar cotação
exports.deleteCotacao = async (req, res) => {
    try {
        const cotacaoDeletada = await Cotacao.findByPk(req.params.id);
        if (!cotacaoDeletada) {
            return res.status(404).json({ message: 'Cotação não encontrada' });
        }
        await cotacaoDeletada.destroy();
        res.status(204).json({ message: 'Cotação deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar cotação', error });
    }
};