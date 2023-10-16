const BaseController = require('../../../utils/baseController');
const ManufacturerBrandVersion = require('../models/manufacturerBrandVersion');

class ManufacturerBrandVersionController extends BaseController {
  constructor() {
    super(ManufacturerBrandVersion);
  }
}

module.exports = new ManufacturerBrandVersionController();
