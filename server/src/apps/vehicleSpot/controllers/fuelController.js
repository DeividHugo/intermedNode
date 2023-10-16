const BaseController = require('../../../utils/baseController');
const Fuel = require('../models/fuel');

class FuelController extends BaseController {
  constructor() {
    super(Fuel);
  }
}

module.exports = new FuelController();
