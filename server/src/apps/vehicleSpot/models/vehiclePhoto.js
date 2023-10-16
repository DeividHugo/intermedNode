const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');
const Vehicle = require('./vehicle');

const VehiclePhoto = sequelize.define('VehiclePhoto', {
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

VehiclePhoto.belongsTo(Vehicle, {
  foreignKey: 'vehicleId',
  allowNull: false,
  onDelete: 'CASCADE',
});

module.exports = VehiclePhoto;
