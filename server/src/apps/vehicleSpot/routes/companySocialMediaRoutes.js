const BaseRouter = require('../../../utils/baseRouter');
const CompanySocialMediaController = require('../controllers/companySocialMediaController');

class CompanySocialMediaRouter extends BaseRouter {
  constructor() {
    super(CompanySocialMediaController);
  }
}

module.exports = new CompanySocialMediaRouter();
