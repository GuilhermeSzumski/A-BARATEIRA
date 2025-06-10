const Filial = require('../models/filialModel.js');

// Listar todas as filiais
exports.getAllFiliais = async (req, res) => {
    try {
        const filiais = await Filial.findAll();
        res.status(200).json(filiais);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar filiais', error });
        console.error('Erro ao buscar filiais:', error);
    }
};

// Buscar filial por ID
exports.getFilialById = async (req, res) => {
    try {
        const filial = await Filial.findByPk(req.params.id);
        if (!filial) {
            return res.status(404).json({ message: 'Filial não encontrada' });
        }
        res.status(200).json(filial);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar filial', error });
    }
};

// Criar nova filial
exports.createFilial = async (req, res) => {
    try {
        const novaFilial = await Filial.create(req.body);
        res.status(201).json(novaFilial);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar filial', error });
    }
};

// Atualizar filial
exports.updateFilial = async (req, res) => {
    try {
        const filialAtualizada = await Filial.findByPk(req.params.id);
        if (!filialAtualizada) {
            return res.status(404).json({ message: 'Filial não encontrada' });
        }
        await filialAtualizada.update(req.body);
        res.status(200).json(filialAtualizada);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar filial', error });
    }
};

// Deletar filial
exports.deleteFilial = async (req, res) => {
    try {
        const filialDeletada = await Filial.findByPk(req.params.id);
        if (!filialDeletada) {
            return res.status(404).json({ message: 'Filial não encontrada' });
        }
        await filialDeletada.destroy();
        res.status(204).json({ message: 'Filial deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar filial', error });
    }
};