const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const NotaFiscal = sequelize.define('NotaFiscal', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    compra_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Compras',
            key: 'id'
        }
    },
    medicamento_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Medicamentos',
            key: 'id'
        }
    },
    filial_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Filiais',
            key: 'id'
        }
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco_unitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
}, {
    tableName: 'nota_fiscal',
    timestamps: false,
});

module.exports = NotaFiscal;