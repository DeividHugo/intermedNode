const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');

const VehicleTransmissionType = sequelize.define('VehicleTransmissionType', {
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

module.exports = VehicleTransmissionType;
