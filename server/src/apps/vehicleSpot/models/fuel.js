const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');

const Fuel = sequelize.define('Fuel', {
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

module.exports = Fuel;
