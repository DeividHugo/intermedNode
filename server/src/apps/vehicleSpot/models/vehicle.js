const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');
const VehicleCondition = require('./vehicleCondition');
const VehicleClassification = require('./vehicleClassification');
const VehicleGear = require('./vehicleGear');
const ManufactureBrandVersion = require('./manufacturerBrandVersion');

const Vehicle = sequelize.define('Vehicle', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  kms: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  year: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  seats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

Vehicle.belongsTo(VehicleCondition, {
  foreignKey: 'VehicleConditionId',
  onDelete: 'CASCADE',
});

Vehicle.belongsTo(VehicleClassification, {
  foreignKey: 'VehicleClassificationId',
  onDelete: 'CASCADE',
});

Vehicle.belongsTo(VehicleGear, {
  foreignKey: 'VehicleGearId',
  onDelete: 'CASCADE',
});

Vehicle.belongsTo(ManufactureBrandVersion, {
  foreignKey: 'ManufactureBrandVersionId',
  onDelete: 'CASCADE',
});

module.exports = Vehicle;
