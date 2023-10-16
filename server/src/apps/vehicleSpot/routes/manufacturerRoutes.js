const BaseRouter = require('../../../utils/baseRouter');
const ManufacturerController = require('../controllers/manufacturerController');

class ManufacturerRouter extends BaseRouter {
  constructor() {
    super(ManufacturerController);
  }
}

module.exports = new ManufacturerRouter();
