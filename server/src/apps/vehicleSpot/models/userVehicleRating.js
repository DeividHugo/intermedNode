const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');
const User = require('./user');
const Vehicle = require('./vehicle');

const UserVehicleRating = sequelize.define('UserVehicleRating', {
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  feedback: {
    type: DataTypes.TEXT,
  },
});

UserVehicleRating.belongsTo(User, {
  foreignKey: 'userId',
  allowNull: false,
  onDelete: 'CASCADE',
});

UserVehicleRating.belongsTo(Vehicle, {
  foreignKey: 'vehicleId',
  allowNull: false,
  onDelete: 'CASCADE',
});

module.exports = UserVehicleRating;
