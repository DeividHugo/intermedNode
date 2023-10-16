const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');

const CompanyEmail = sequelize.define('CompanyEmail', {
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = CompanyEmail;
