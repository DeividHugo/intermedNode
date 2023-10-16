const BaseRouter = require('../../../utils/baseRouter');
const VehicleConditionController = require('../controllers/vehicleConditionController');

class VehicleConditionRouter extends BaseRouter {
  constructor() {
    super(VehicleConditionController);
  }
}

module.exports = new VehicleConditionRouter();
