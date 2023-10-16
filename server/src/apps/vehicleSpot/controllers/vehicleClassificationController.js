const BaseController = require('../../../utils/baseController');
const VehicleClassification = require('../models/vehicleClassification');

class VehicleClassificationController extends BaseController {
  constructor() {
    super(VehicleClassification);
  }
}

module.exports = new VehicleClassificationController();
