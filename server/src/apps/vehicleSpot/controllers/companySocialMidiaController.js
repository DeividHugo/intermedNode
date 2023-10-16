const BaseController = require('../../../utils/baseController');
const CompanySocialMedia = require('../models/companySocialMedia');

class CompanySocialMediaController extends BaseController {
  constructor() {
    super(CompanySocialMedia);
  }
}

module.exports = new CompanySocialMediaController();
