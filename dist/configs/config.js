'use strict';

var utils = require('../libs/utils');
require('dotenv').config();

var config = {
  webhookUrl: process.env.WEBHOOK_URL,
  token: process.env.TOKEN,
  port: process.env.PORT || 5000
};

module.exports = utils.checkUndefined(config);