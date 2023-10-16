const BaseRouter = require('../../../utils/baseRouter');
const CompanyEmailController = require('../controllers/companyEmailController');

class CompanyEmailRouter extends BaseRouter {
  constructor() {
    super(CompanyEmailController);
  }
}

module.exports = new CompanyEmailRouter();
