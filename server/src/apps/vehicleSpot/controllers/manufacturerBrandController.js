const BaseController = require('../../../utils/baseController');
const ManufacturerBrand = require('../models/manufacturerBrand');

class ManufacturerBrandController extends BaseController {
  constructor() {
    super(ManufacturerBrand);
  }
}

module.exports = new ManufacturerBrandController();
