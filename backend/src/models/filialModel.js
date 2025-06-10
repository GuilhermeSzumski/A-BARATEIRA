const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Filial = sequelize.define('Filial', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    endereco: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'filial',
    timestamps: false
});

module.exports = Filial;