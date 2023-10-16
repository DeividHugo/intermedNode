const BaseRouter = require('../../../utils/baseRouter');
const CompanyBannerController = require('../controllers/companyBannerController');

class CompanyBannerRouter extends BaseRouter {
  constructor() {
    super(CompanyBannerController);
  }
}

module.exports = new CompanyBannerRouter();
