const Sequelize = require('sequelize');
const dbConfig = require('../config/databaseConfig');

const connection = new Sequelize(dbConfig);

module.exports = connection;