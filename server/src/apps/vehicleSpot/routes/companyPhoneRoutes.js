const BaseRouter = require('../../../utils/baseRouter');
const CompanyPhoneController = require('../controllers/companyPhoneController');

class CompanyPhoneRouter extends BaseRouter {
  constructor() {
    super(CompanyPhoneController);
  }
}

module.exports = new CompanyPhoneRouter();
