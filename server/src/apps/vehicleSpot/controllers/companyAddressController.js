const BaseController = require('../../../utils/baseController');
const CompanyAddress = require('../models/companyAddress');

class CompanyAddressController extends BaseController {
  constructor() {
    super(CompanyAddress);
  }
}

module.exports = new CompanyAddressController();
