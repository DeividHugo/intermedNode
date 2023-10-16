const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');

const CompanyBanner = sequelize.define('CompanyBanner', {
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

module.exports = CompanyBanner;
