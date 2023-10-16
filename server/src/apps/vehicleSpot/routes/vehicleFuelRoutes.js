const BaseRouter = require('../../../utils/baseRouter');
const VehicleFuelController = require('../controllers/vehicleFuelController');

class VehicleFuelRouter extends BaseRouter {
  constructor() {
    super(VehicleFuelController);
  }
}

module.exports = new VehicleFuelRouter();
