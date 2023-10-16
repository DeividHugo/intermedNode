const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');

const Manufacturer = sequelize.define('Manufacturer', {
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

module.exports = Manufacturer;
