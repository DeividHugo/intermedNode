const BaseController = require('../../../utils/baseController');
const CompanyBanner = require('../models/companyBanner');

class CompanyBannerController extends BaseController {
  constructor() {
    super(CompanyBanner);
  }
}

module.exports = new CompanyBannerController();
