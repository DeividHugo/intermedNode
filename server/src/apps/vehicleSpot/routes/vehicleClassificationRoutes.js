const BaseRouter = require('../../../utils/baseRouter');
const VehicleClassificationController = require('../controllers/vehicleClassificationController');

class VehicleClassificationRouter extends BaseRouter {
  constructor() {
    super(VehicleClassificationController);
  }
}

module.exports = new VehicleClassificationRouter();
