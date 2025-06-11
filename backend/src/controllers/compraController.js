const Compra = require('../models/compraModel.js');

//Listar todas as compras
exports.findAllCompras = async (req, res) => {
    try {
        const compras = await Compra.findAll();
        res.status(200).json(compras);
    } catch (error) {
        console.error('Erro ao buscar compras:', error);
        res.status(500).json({ error: 'Erro ao buscar compras' });
    }
};

//Listar uma compra pelo ID
exports.findCompraById = async (req, res) => {
    const { id } = req.params;
    try {
        const compra = await Compra.findByPk(id);
        if (!compra) {
            return res.status(404).json({ error: 'Compra não encontrada' });
        }
        res.status(200).json(compra);
    } catch (error) {
        console.error('Erro ao buscar compra:', error);
        res.status(500).json({ error: 'Erro ao buscar compra' });
    }
};

//Criar uma nova compra
exports.createCompra = async (req, res) => {
    try {
        const novaCompra = await Compra.create(req.body);
        res.status(201).json(novaCompra);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar compra', details: error.message });
    };
};

//Atualizar uma compra existente
exports.updateCompra = async (req, res) => {
    try {
        const compraAtualizada = await Compra.findByPk(req.params.id);
        if (!compraAtualizada) {
            return res.status(404).json({ error: 'Compra não encontrada' });
        };
        await compraAtualizada.update(req.body);
        res.status(200).json(compraAtualizada);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao atualizar compra', details: error.message });
    };
};

//Deletar uma compra
exports.deleteCompra = async (req, res) => {
    try {
        const compraDeletada = await Compra.findByPk(req.params.id);
        console.log('Compra a ser deletada:', compraDeletada);
        if (!compraDeletada) {
            return res.status(404).json({ error: 'Compra não encontrada' });
        };
        await compraDeletada.destroy();
        res.status(200).json({ message: 'Compra deletada com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar compra', details: error.message });
    };
};