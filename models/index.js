var fs = require('fs');
var path = require('path');
var uuid = require('node-uuid');
var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.mongodb);

var models = module.exports = {};

var generateId = function () {
  return uuid
    .v4()
    .replace(/-/g, '');
};

var o = function (name) {
  name = name.toLowerCase();
  var wrapper = require(path.join(__dirname, name));
  name = name[0].toUpperCase() + name.slice(1);
  models[name] = wrapper(mongoose, generateId);
}

o('post');
o('comment');
