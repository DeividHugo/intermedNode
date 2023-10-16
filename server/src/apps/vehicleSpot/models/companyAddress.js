const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');

const CompanyAddress = sequelize.define('CompanyAddress', {
  cep: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = CompanyAddress;
