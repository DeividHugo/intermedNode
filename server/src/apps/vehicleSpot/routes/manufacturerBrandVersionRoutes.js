const BaseRouter = require('../../../utils/baseRouter');
const ManufacturerBrandVersionController = require('../controllers/manufacturerBrandVersionController');

class ManufacturerBrandVersionRouter extends BaseRouter {
  constructor() {
    super(ManufacturerBrandVersionController);
  }
}

module.exports = new ManufacturerBrandVersionRouter();
