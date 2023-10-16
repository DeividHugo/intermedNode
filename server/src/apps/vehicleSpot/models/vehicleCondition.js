const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');

const VehicleCondition = sequelize.define('VehicleCondition', {
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

module.exports = VehicleCondition;
