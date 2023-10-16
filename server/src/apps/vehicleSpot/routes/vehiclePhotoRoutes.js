const BaseRouter = require('../../../utils/baseRouter');
const VehiclePhotoController = require('../controllers/vehiclePhotoController');

class VehiclePhotoRouter extends BaseRouter {
  constructor() {
    super(VehiclePhotoController);
  }
}

module.exports = new VehiclePhotoRouter();
