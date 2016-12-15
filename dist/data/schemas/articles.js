'use strict';

/**
 * Variable Declarations
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Channel Schema
 */
var article = new Schema({
  title: String,
  url: String,
  roomId: String,
  thumbnail: String,
  tags: String,
  suggester: String
});

module.exports = article;