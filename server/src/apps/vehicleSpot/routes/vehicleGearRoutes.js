const BaseRouter = require('../../../utils/baseRouter');
const VehicleGearController = require('../controllers/vehicleGearController');

class VehicleGearRouter extends BaseRouter {
  constructor() {
    super(VehicleGearController);
  }
}

module.exports = new VehicleGearRouter();
