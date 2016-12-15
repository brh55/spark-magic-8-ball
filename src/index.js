const Flint = require('node-flint');
const webhook = require('node-flint/webhook');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./configs/config');
const commands = require('./commands/index');

app.use(bodyParser.json());

// Flint
var flint = new Flint(config);
flint.messageFormat = 'markdown';
flint.start();

// Flint Command Listeners
flint.hears(/.+/g, commands.shake);

app.post('/flint', webhook(flint));

var server = app.listen(config.port, () => {
  flint.debug('Flint listening on port %s', config.port);
});

process.on('SIGINT', () => {
  flint.debug('Shutting down...');
  server.close();
  flint.stop().then(() => process.exit() );
});
