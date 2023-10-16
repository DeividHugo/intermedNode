const BaseRouter = require('../../../utils/baseRouter');
const CompanyAddressController = require('../controllers/companyAddressController');

class CompanyAddressRouter extends BaseRouter {
  constructor() {
    super(CompanyAddressController); 
  }
}

module.exports = new CompanyAddressRouter();
