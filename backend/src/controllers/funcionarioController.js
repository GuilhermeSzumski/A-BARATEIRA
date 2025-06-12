const Funcionario = require('../models/funcionarioModel.js');

exports.getAllFuncionarios = async (req, res) => {
    try {
        const funcionarios = await Funcionario.findAll();
        res.status(200).json(funcionarios);
    } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
        res.status(500).json({ error: 'Erro ao buscar funcionários' });
    }
}

exports.getFuncionarioById = async (req, res) => {
    const { id } = req.params;
    try {
        const funcionario = await Funcionario.findByPk(id);
        if (!funcionario) {
            return res.status(404).json({ error: 'Funcionário não encontrado' });
        }
        res.status(200).json(funcionario);
    } catch (error) {
        console.error('Erro ao buscar funcionário:', error);
        res.status(500).json({ error: 'Erro ao buscar funcionário' });
    }
}

exports.createFuncionario = async (req, res) => {
    try {
        const novaFilial = await Funcionario.create(req.body);
        res.status(201).json(novaFilial);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar funcionário', details: error.message });
    }
}

exports.updateFuncionario = async (req, res) => {
    const funcionarioAtualizado = await Funcionario.findByPk(req.params.id);
    if (!funcionarioAtualizado) {
        return res.status(404).json({ error: 'Funcionário não encontrado' });
    };
    try {
        await funcionarioAtualizado.update(req.body);
        res.status(200).json(funcionarioAtualizado);
    } catch (error) {
        console.error('Erro ao atualizar funcionário:', error);
        res.status(400).json({ error: 'Erro ao atualizar funcionário', details: error.message });
    };
}

exports.deleteFuncionario = async (req, res) => {
    const funcionarioDeletado = await Funcionario.findByPk(req.params.id);
    if (!funcionarioDeletado) {
        return res.status(404).json({ error: 'Funcionário não encontrado' });
    };
    try {
        await funcionarioDeletado.destroy();
        res.status(200).json({ message: 'Funcionário deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar funcionário:', error);
        res.status(500).json({ error: 'Erro ao deletar funcionário' });
    };
};