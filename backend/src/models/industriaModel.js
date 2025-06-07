const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Industria = sequelize.define('Industria', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nome: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    cnpj: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'industria',
    timestamps: false
});

module.exports = Industria;