const BaseController = require('../../../utils/baseController');
const VehicleItem = require('../models/vehicleItem');

class VehicleItemController extends BaseController {
  constructor() {
    super(VehicleItem);
  }
}

module.exports = new VehicleItemController();
