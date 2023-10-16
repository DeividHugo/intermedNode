const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');
const Vehicle = require('./vehicle');

const VehicleItem = sequelize.define('VehicleItem', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

VehicleItem.belongsTo(Vehicle, {
  foreignKey: 'vehicleId',
  allowNull: false,
  onDelete: 'CASCADE',
});

module.exports = VehicleItem;
