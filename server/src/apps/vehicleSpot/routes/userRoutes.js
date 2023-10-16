const BaseRouter = require('../../../utils/baseRouter');
const UserController = require('../controllers/userController');

class UserRouter extends BaseRouter {
  constructor() {
    super(UserController);
  }
}

module.exports = new UserRouter();
