const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');

const CompanyPhone = sequelize.define('CompanyPhone', {
  internationalCode: {
    type: DataTypes.STRING(4),
  },
  localCode: {
    type: DataTypes.STRING(4),
  },
  number: {
    type: DataTypes.STRING(14), 
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = CompanyPhone;
