const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');

const CompanySocialMidia = sequelize.define('CompanySocialMidia', {
  type: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
  },
  iconPath: {
    type: DataTypes.STRING,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = CompanySocialMidia;
