const BaseController = require('../../../utils/baseController');
const VehicleCondition = require('../models/vehicleCondition');

class VehicleConditionController extends BaseController {
  constructor() {
    super(VehicleCondition);
  }
}

module.exports = new VehicleConditionController();
