const BaseRouter = require('../../../utils/baseRouter');
const VehicleController = require('../controllers/vehicleController');

class VehicleRoutes extends BaseRouter {
  constructor() {
    super(VehicleController);
  }
}

module.exports = new VehicleRoutes();
