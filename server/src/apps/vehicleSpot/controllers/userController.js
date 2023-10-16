const BaseController = require('../../../utils/baseController');
const User = require('../models/user');

class UserController extends BaseController {
  constructor() {
    super(User);
  }
}

module.exports = new UserController();
