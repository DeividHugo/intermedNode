const BaseRouter = require('../../../utils/baseRouter');
const UserVehicleProposalController = require('../controllers/userVehicleProposalController');

class UserVehicleProposalRouter extends BaseRouter {
  constructor() {
    super(UserVehicleProposalController);
  }
}

module.exports = new UserVehicleProposalRouter();
