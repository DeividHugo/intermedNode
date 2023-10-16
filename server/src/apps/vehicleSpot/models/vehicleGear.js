const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');

const VehicleGear = sequelize.define('VehicleGear', {
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

module.exports = VehicleGear;
