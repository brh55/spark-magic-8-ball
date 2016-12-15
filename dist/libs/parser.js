'use strict';

var extractor = require('unfluff');
var request = require('request');
var Promise = require('bluebird');

module.exports = {
  parse: parse
};

function parse(articleUrl) {
  return new Promise(function (resolve, reject) {
    request({
      method: 'GET',
      uri: articleUrl
    }, function (error, response, body) {
      if (error) {
        reject(error);
      } else resolve(extract(body));
    });
  });
}

function extract(data) {
  return extractor.lazy(data, 'en');
}