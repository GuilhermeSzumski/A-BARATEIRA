const {  DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Medicamento = sequelize.define('Medicamento', {
    id : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    nome_fantasia: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    principio_ativo_id: {
        type: DataTypes.UUID,
        references: {
            model: 'PrincipioAtivo',
            key: 'id'
        }
    },
    industria_id: {
        type: DataTypes.UUID,
        reference: {
            model: 'Industria',
            key: 'id'
        }
    },
    preco_compra: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    preco_venda: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
}, {
    tableName: 'medicamento',
    timestamps: false,
});

module.exports = Medicamento;