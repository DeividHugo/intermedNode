const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');
const User = require('./user');
const Vehicle = require('./vehicle');

const UserVehicleProposal = sequelize.define('UserVehicleProposal', {
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  value: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

UserVehicleProposal.belongsTo(User, {
  foreignKey: 'userId',
  allowNull: false,
  onDelete: 'CASCADE',
});

UserVehicleProposal.belongsTo(Vehicle, {
  foreignKey: 'vehicleId',
  allowNull: false,
  onDelete: 'CASCADE',
});

module.exports = UserVehicleProposal;
