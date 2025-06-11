const NotaFiscal = require('../models/notaFiscalModel.js');

//Lista todas as notas fiscais
exports.findAllNotasFiscais = async (req, res) => {
    try {
        const notasFiscais = await NotaFiscal.findAll();
        res.status(200).json(notasFiscais);
    } catch (error) {
        console.error('Erro ao buscar notas fiscais:', error);
        res.status(500).json({ error: 'Erro ao buscar notas fiscais' });
    };
};

//Busca uma nota fiscal pelo ID
exports.findNotaFiscalById = async (req, res) => {
    try {
        const notaFiscal = await NotaFiscal.findByPk(req.params.id);
        if (!notaFiscal) {
            return res.status(404).json({ error: 'Nota fiscal não encontrada' });
        }
        res.status(200).json(notaFiscal);
    } catch (error) {
        console.error('Erro ao buscar nota fiscal:', error);
        res.status(500).json({ error: 'Erro ao buscar nota fiscal' });
    };
};

//Cria uma nova nota fiscal
exports.createNotaFiscal = async (req, res) => {
    try {
        const novaNotaFiscal = await NotaFiscal.create(req.body);
        res.status(201).json(novaNotaFiscal);
    } catch (error) {
        console.error('Erro ao criar nota fiscal:', error);
        res.status(400).json({ error: 'Erro ao criar nota fiscal' });
    };
};

//Atualiza uma nota fiscal existente
exports.updateNotaFiscal = async (req, res) => {
    try {
        const notaFiscalAtualizada = await NotaFiscal.findByPk(req.params.id);
        if (!notaFiscalAtualizada) {
            return res.status(404).json({ error: 'Nota fiscal não encontrada' });
        };
        await notaFiscalAtualizada.update(req.body);
        res.status(200).json(notaFiscalAtualizada);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar nota fiscal' });
    };
};

//Deleta uma nota fiscal
exports.deleteNotaFiscal = async (req, res) => {
    try {
        const notaFiscalDeletada = await NotaFiscal.findByPk(req.params.id);
        if (!notaFiscalDeletada) {
            return res.status(404).json({ error: 'Nota fiscal não encontrada' });
        };
        await notaFiscalDeletada.destroy();
        res.status(200).json({ message: 'Nota fiscal deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar nota fiscal' });
    };
};