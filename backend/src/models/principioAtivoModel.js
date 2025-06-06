const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const PrincipioAtivo = sequelize.define('PrincipioAtivo', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
    estoque_minimo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    codigo_atc: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
    status: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    data_cadastro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    ultima_atualizacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'principio_ativo',
    timestamps: false,
});

module.exports = PrincipioAtivo;