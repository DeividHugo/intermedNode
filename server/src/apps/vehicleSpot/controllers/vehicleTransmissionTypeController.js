const BaseController = require('../../../utils/baseController');
const VehicleTransmissionType = require('../models/vehicleTransmissionType');

class VehicleTransmissionTypeController extends BaseController {
  constructor() {
    super(VehicleTransmissionType);
  }
}

module.exports = new VehicleTransmissionTypeController();
