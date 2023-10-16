const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService'); 
const Manufacturer = require('./manufacturer'); 

const ManufacturerBrand = sequelize.define('ManufacturerBrand', {
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

ManufacturerBrand.belongsTo(Manufacturer, {
  foreignKey: 'ManufacturerId',
  allowNull: false,
  onDelete: 'CASCADE', 
});

module.exports = ManufacturerBrand;
