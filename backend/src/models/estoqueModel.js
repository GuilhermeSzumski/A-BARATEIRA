const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Filial = sequelize.define('Filial', {
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
    filial_id: {
        type: DataTypes.UUID,
        references: {
            model: 'filial',
            key: 'id'
        }
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ultima_atualizacao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'estoque',
    timestamps: false
});

module.exports = Filial;