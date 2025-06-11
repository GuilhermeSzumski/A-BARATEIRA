const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Cotacao = sequelize.define('Cotacao', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    principio_ativo_id: {
        type: DataTypes.UUID,
        references: {
            model: 'principio_ativo',
            key: 'id'
        }
    },
    industria_id: {
        type: DataTypes.UUID,
        references: {
            model: 'industria',
            key: 'id'
        }
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false
    },
    data_cotacao: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    tableName: 'cotacao',
    timestamps: false
});

module.exports = Cotacao;