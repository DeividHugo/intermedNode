const BaseController = require('../../../utils/baseController');
const UserVehicleRating = require('../models/userVehicleRating');

class UserVehicleRatingController extends BaseController {
  constructor() {
    super(UserVehicleRating);
  }
}

module.exports = new UserVehicleRatingController();
