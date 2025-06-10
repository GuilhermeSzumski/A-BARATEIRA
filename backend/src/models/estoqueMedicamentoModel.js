const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const EstoqueMedicamento = sequelize.define('EstoqueMedicamento', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    medicamento_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'medicamento',
            key: 'id'
        }
    },
    filial_id: {
        type: DataTypes.UUID,
        allowNull: false,
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
    tableName: 'estoque_medicamento',
    timestamps: false
});

module.exports = EstoqueMedicamento;