const express = require('express');

class BaseRouter {
  constructor(controller) {
    this.controller = controller;
    this.router = express.Router();
    this.modelName = controller.getModelName(); 

    this.router.get(`/list/`, this.controller.getAllRecords);
    this.router.get(`/detail/:id`, this.controller.getRecordById);
    this.router.post(`/create/`, this.controller.createRecord);
    this.router.put(`/update/:id`, this.controller.updateRecord);
    this.router.delete(`/delete/:id`, this.controller.deleteRecord);
  }

  getRouter() {
    return this.router;
  }
}

module.exports = BaseRouter;
