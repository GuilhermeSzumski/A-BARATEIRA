const PrincipioAtivo = require('../models/principioAtivoModel.js');
const { Op } = require('sequelize');

// Listar todos
exports.getAll = async (req, res) => {
    try {
        const principios = await PrincipioAtivo.findAll();
        res.json(principios);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar princípios ativos.' });
    }
};

// Buscar por ID
exports.getById = async (req, res) => {
    try {
        const principio = await PrincipioAtivo.findByPk(req.params.id);
        if (!principio) return res.status(404).json({ error: 'Princípio ativo não encontrado.' });
        res.json(principio);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar princípio ativo.' });
    }
};

// Criar novo
exports.create = async (req, res) => {
    console.log('REQ BODY:', req.body);
    try {
        const novo = await PrincipioAtivo.create(req.body);
        res.status(201).json(novo);
    } catch (err) {
        res.status(400).json({ error: 'Erro ao criar princípio ativo.', details: err.errors });
        console.error('Erro ao criar princípio ativo:', err);
    }
};

// Atualizar
exports.update = async (req, res) => {
    try {
        const principio = await PrincipioAtivo.findByPk(req.params.id);
        if (!principio) return res.status(404).json({ error: 'Princípio ativo não encontrado.' });
        await principio.update({ ...req.body, ultima_atualizacao: new Date() });
        res.json(principio);
    } catch (err) {
        res.status(400).json({ error: 'Erro ao atualizar princípio ativo.', details: err.errors });
    }
};

// Deletar
exports.delete = async (req, res) => {
    try {
        const principio = await PrincipioAtivo.findByPk(req.params.id);
        if (!principio) return res.status(404).json({ error: 'Princípio ativo não encontrado.' });
        await principio.destroy();
        res.json({ message: 'Princípio ativo removido com sucesso.' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao remover princípio ativo.' });
    }
};