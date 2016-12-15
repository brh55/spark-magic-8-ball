'use strict';

var Flint = require('node-flint');
var webhook = require('node-flint/webhook');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var config = require('./configs/config');
var commands = require('./commands/index');

app.use(bodyParser.json());

// Flint
var flint = new Flint(config);
flint.messageFormat = 'markdown';
flint.start();

// Flint Command Listeners
flint.hears(/.+/g, commands.shake);

app.post('/flint', webhook(flint));
var server = app.listen(config.port, function () {
  flint.debug('Flint listening on port %s', config.port);
});

process.on('SIGINT', function () {
  flint.debug('Shutting down...');
  server.close();
  flint.stop().then(function () {
    process.exit();
  });
});