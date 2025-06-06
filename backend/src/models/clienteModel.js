const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.TEXT
    },
    cpf: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'cliente',
    timestamps: false
});

module.exports = Cliente;
