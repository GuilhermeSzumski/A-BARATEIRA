const Medicamento = require('../models/medicamentoModel.js');

exports.getAllMedicamentos = async (req, res) => {
    try {
        const medicamentos = await Medicamento.findAll();
        res.status(200).json(medicamentos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar medicamentos', error });
    }
};

exports.getMedicamentoById = async (req, res) => {
    try {
        const medicamento = await Medicamento.findByPk(req.params.id);
        if (!medicamento) {
            return res.status(404).json({ message: 'Medicamento não encontrado' });
        }
        res.status(200).json(medicamento);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar medicamento', error });
    }
};

exports.createMedicamento = async (req, res) => {
    try {
        const medicamentoSalvo = await Medicamento.create(req.body);
        res.status(201).json(medicamentoSalvo);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar medicamento', error });
    }
};

exports.updateMedicamento = async (req, res) => {
    try {
        const medicamentoAtualizado = await Medicamento.findByPk(req.params.id);
        if (!medicamentoAtualizado) {
            return res.status(404).json({ message: 'Medicamento não encontrado' });
        }
        await medicamentoAtualizado.update(req.body);
        res.status(200).json(medicamentoAtualizado);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar medicamento', error });
    }
};

exports.deleteMedicamento = async (req, res) => {
    try {
        const medicamentoDeletado = await Medicamento.findByPk(req.params.id);
        if (!medicamentoDeletado) {
            return res.status(404).json({ message: 'Medicamento não encontrado' });
        }
        await medicamentoDeletado.destroy();
        res.status(204).json({ message: 'Medicamento deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar medicamento', error });
    }
};