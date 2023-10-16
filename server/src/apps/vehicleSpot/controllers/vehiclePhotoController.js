const BaseController = require('../../../utils/baseController');
const VehiclePhoto = require('../models/vehiclePhoto');

class VehiclePhotoController extends BaseController {
  constructor() {
    super(VehiclePhoto);
  }
}

module.exports = new VehiclePhotoController();
