const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');

const VehicleClassification = sequelize.define('VehicleClassification', {
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

module.exports = VehicleClassification;
