'use strict';

var parser = require('../libs/parser');
var mongoose = require('mongoose');
var articles = mongoose.model('Article', require('../data/schemas/articles'));

function save(bot, trigger) {
  var url = getUrl(trigger.text);

  if (url) {
    parser.parse(url).then(function (parsedArticle) {
      saveArticle(parsedArticle, trigger.roomId);
      bot.say(trigger.personDisplayName + ', thanks for the article!');
    });
  } else {
    bot.say('Sorry, ' + trigger.personDisplayName + ', I couldn\'t recognized the article.');
  }
};

function getUrl(message) {
  var URL_PATTERN = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi;
  var urlMatches = message.match(URL_PATTERN);
  var url = urlMatches ? urlMatches[0] : null;
  return url;
}

function saveArticle(parsedArticle, roomId) {
  var props = {
    title: parsedArticle.title(),
    url: parsedArticle.canonicalLink(),
    roomId: roomId,
    thumbnail: parsedArticle.image(),
    description: parsedArticle.description(),
    tags: parsedArticle.tags() || parsedArticles.keywords()
  };

  var article = new articles(props);
  article.save();
}

module.exports = save;