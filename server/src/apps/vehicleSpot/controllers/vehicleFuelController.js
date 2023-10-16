const BaseController = require('../../../utils/baseController');
const VehicleFuel = require('../models/vehicleFuel');

class VehicleFuelController extends BaseController {
  constructor() {
    super(VehicleFuel);
  }
}

module.exports = new VehicleFuelController();
