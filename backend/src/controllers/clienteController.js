const Cliente = require('../models/clienteModel.js');

// Listar todos os clientes
exports.getAllClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar clientes', error });
        console.error('Erro ao buscar clientes:', error);
    }
};

// Buscar cliente por ID
exports.getClienteById = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar cliente', error });
    }
};

// Criar novo cliente
exports.createCliente = async (req, res) => {
    console.log('REQ BODY:', req.body);
    try {
        const novoCliente = await Cliente.create(req.body);
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar cliente', error });
    }
};

// Atualizar cliente
exports.updateCliente = async (req, res) => {
    try {
        const clienteAtualizado = await Cliente.findByPk(req.params.id);
        if (!clienteAtualizado) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        await clienteAtualizado.update(req.body);
        res.status(200).json(clienteAtualizado);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar cliente', error });
    }
};

// Deletar cliente
exports.deleteCliente = async (req, res) => {
    try {
        const clienteDeletado = await Cliente.findByPk(req.params.id);
        if (!clienteDeletado) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        await clienteDeletado.destroy();
        res.status(200).json({ message: 'Cliente deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar cliente', error });
    }
};