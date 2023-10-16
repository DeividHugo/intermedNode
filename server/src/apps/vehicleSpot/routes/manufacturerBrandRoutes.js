const BaseRouter = require('../../../utils/baseRouter');
const ManufacturerBrandController = require('../controllers/manufacturerBrandController');

class ManufacturerBrandRoutes extends BaseRouter {
  constructor() {
    super(ManufacturerBrandController);
  }
}

module.exports = new ManufacturerBrandRoutes();
