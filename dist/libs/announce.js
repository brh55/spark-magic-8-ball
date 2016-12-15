'use strict';

var kue = require('kue');
var queue = kue.createQueue();
var mongoose = require('mongoose');
var article = mongoose.model('Article', require('../data/schemas/articles'));
mongoose.Promise = require('bluebird');

function announce(bot, article) {
    var message = buildMessage(article);

    bot.say({
        markdown: message,
        files: [article.image()]
    });
}

function buildMessage(article) {
    var message = '### [' + article.title + '](' + article.url + ') \n\n \n           ' + article.description + ' \n\n \n           *Today\'s article recommended by ' + article.suggester + '*';

    return message;
}

function getRooms() {
    return article.find().distinct('roomId').then(function (roomIds) {
        return roomIds;
    });
}

function buildAnnouncements() {
    var rooms = getRooms();
    var articleMapping = new Map();

    rooms.forEach(function (roomId) {
        assignArticle(roomId, articleMapping);
    });

    articleMapping.forEach(buildJob);
}

function assignArticle(roomId, mapping) {
    article.find({
        'roomId': roomId
    }).then(function (articles) {
        var articleIndex = Math.random() * (articles.length - 0) + 0;
        var assignedArticle = articles[articleIndex];
        mapping.set(roomId, assignedArticle);
    });
}

function buildJob(value, key) {
    var job = queue.create('announcement', value).save(function (err) {
        if (!err) console.log(job.id);
    });
}