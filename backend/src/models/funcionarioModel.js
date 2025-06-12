const DataTypes = require('sequelize');
const sequelize = require('../config/db.js');

const Funcionario = sequelize.define('Funcionario', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cargo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    salario_base: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    comissao_percentual: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },
}, {
    tableName: 'funcionario',
    timestamps: false
});

module.exports = Funcionario;