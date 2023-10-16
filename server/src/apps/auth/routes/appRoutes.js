const express = require('express');
const authController = require('../controllers/authController');

module.exports = (app) => {
  app.post('/auth/sign-in/', authController.create)
};
