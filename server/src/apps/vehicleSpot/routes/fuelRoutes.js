const BaseRouter = require('../../../utils/baseRouter');
const FuelController = require('../controllers/fuelController');

class FuelRouter extends BaseRouter {
  constructor() {
    super(FuelController);
  }
}

module.exports = new FuelRouter();
