const BaseController = require('../../../utils/baseController');
const UserVehicleProposal = require('../models/userVehicleProposal');

class UserVehicleProposalController extends BaseController {
  constructor() {
    super(UserVehicleProposal);
  }
}

module.exports = new UserVehicleProposalController();
