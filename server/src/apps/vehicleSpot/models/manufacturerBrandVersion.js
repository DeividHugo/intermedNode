const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService'); 
const ManufacturerBrand = require('./manufacturerBrand'); 

const ManufactureBrandVersion = sequelize.define('ManufactureBrandVersion', {
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

ManufactureBrandVersion.belongsTo(ManufacturerBrand, {
  foreignKey: 'ManufacturerBrandId', 
  allowNull: false,
  onDelete: 'CASCADE',
});

module.exports = ManufactureBrandVersion;
