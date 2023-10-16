const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');
const Fuel = require('./fuel');
const Vehicle = require('./vehicle');

const VehicleFuel = sequelize.define('VehicleFuel', {});

VehicleFuel.belongsTo(Fuel, {
  foreignKey: 'fuelId',
  allowNull: false,
  onDelete: 'CASCADE',
});

VehicleFuel.belongsTo(Vehicle, {
  foreignKey: 'vehicleId',
  allowNull: false,
  onDelete: 'CASCADE',
});

module.exports = VehicleFuel;
