'use strict';

function example(bot, trigger) {
  bot.say(buildExampleMessage());
}

function buildExampleMessage() {
  return 'Hi this is a test!';
}

module.exports = example;