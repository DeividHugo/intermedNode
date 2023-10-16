const BaseRouter = require('../../../utils/baseRouter');
const VehicleItemController = require('../controllers/vehicleItemController');

class VehicleItemRouter extends BaseRouter {
  constructor() {
    super(VehicleItemController);
  }
}

module.exports = new VehicleItemRouter();
