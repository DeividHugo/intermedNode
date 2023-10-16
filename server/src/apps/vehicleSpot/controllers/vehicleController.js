const BaseController = require('../../../utils/baseController');
const Vehicle = require('../models/vehicle');

class VehicleController extends BaseController {
  constructor() {
    super(Vehicle);
  }
}

module.exports = new VehicleController();
