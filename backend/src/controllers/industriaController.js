const Industria = require('../models/industriaModel.js');
const { Op } = require('sequelize');

// Listar todas as indústrias
exports.getAllIndustrias = async (req, res) => {
    try {
        const industrias = await Industria.findAll();
        res.status(200).json(industrias);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar indústrias', error });
    }
};

// Buscar uma indústria por ID
exports.getIndustriaById = async (req, res) => {
    try {
        const industria = await Industria.findByPk(req.params.id);
        if (!industria) {
            return res.status(404).json({ message: 'Indústria não encontrada' });
        }
        res.status(200).json(industria);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar indústria', error });
        console.error(error);
    }
};

// Criar uma nova indústria
exports.createIndustria = async (req, res) => {
    try {
        const industriaSalva = await Industria.create(req.body);
        res.status(201).json(industriaSalva);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar indústria', error });
    }
};

// Atualizar uma indústria existente
exports.updateIndustria = async (req, res) => {
    try {
        const [updatedRows] = await Industria.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedRows === 0) {
            return res.status(404).json({ message: 'Indústria não encontrada' });
        }
        const industriaAtualizada = await Industria.findByPk(req.params.id);
        res.status(200).json(industriaAtualizada);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar indústria', error });
        console.error('Erro ao atualizar indústria:', error);
    }
};

// Deletar uma indústria
exports.deleteIndustria = async (req, res) => {
    try {
        const deletedRows = await Industria.destroy({
            where: { id: req.params.id }
        });
        if (deletedRows === 0) {
            return res.status(404).json({ message: 'Indústria não encontrada' });
        }
        res.status(200).json({ message: 'Indústria deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar indústria', error });
    }
};
