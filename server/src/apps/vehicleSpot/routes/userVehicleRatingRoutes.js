const BaseRouter = require('../../../utils/baseRouter');
const UserVehicleRatingController = require('../controllers/userVehicleRatingController');

class UserVehicleRatingRouter extends BaseRouter {
  constructor() {
    super(UserVehicleRatingController);
  }
}

module.exports = new UserVehicleRatingRouter();
