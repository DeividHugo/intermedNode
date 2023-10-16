const connection = require('../services/databaseService');

connection
  .authenticate()
  .then(() => {
    console.log('Connection to the database established successfully.');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
