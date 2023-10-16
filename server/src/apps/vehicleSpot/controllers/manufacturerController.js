const BaseController = require('../../../utils/baseController');
const Manufacturer = require('../models/manufacturer');

class ManufacturerController extends BaseController {
  constructor() {
    super(Manufacturer);
  }
}

module.exports = new ManufacturerController();
