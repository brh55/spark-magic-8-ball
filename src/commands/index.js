'use strict';

const shake = require('./shake');

function commandFactory() {
    return new commands;
}

function commands() {
    this.shake = shake;
}

module.exports = commandFactory();
