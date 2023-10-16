const BaseController = require('../../../utils/baseController');
const VehicleGear = require('../models/vehicleGear');

class VehicleGearController extends BaseController {
  constructor() {
    super(VehicleGear);
  }
}

module.exports = new VehicleGearController();
