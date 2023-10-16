const BaseController = require('../../../utils/baseController');
const CompanyEmail = require('../models/companyEmail');

class CompanyEmailController extends BaseController {
  constructor() {
    super(CompanyEmail);
  }
}

module.exports = new CompanyEmailController();
