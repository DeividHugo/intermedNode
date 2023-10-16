const BaseRouter = require('../../../utils/baseRouter');
const VehicleTransmissionTypeController = require('../controllers/vehicleTransmissionTypeController');

class VehicleTransmissionTypeRouter extends BaseRouter {
  constructor() {
    super(VehicleTransmissionTypeController);
  }
}

module.exports = new VehicleTransmissionTypeRouter();
