const BaseController = require('../../../utils/baseController');
const CompanyPhone = require('../models/companyPhone');

class CompanyPhoneController extends BaseController {
  constructor() {
    super(CompanyPhone);
  }
}

module.exports = new CompanyPhoneController();
