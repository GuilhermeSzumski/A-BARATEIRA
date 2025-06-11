const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Compra = sequelize.define('Compra', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    data_compra: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    industria_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'industria',
            key: 'id'
        }
    },
    valor_total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    tableName: 'compra',
    timestamps: false,
    underscored: true
});

module.exports = Compra;