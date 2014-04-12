var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');

var models = module.exports = {};

var o = function (name) {
  name = name.toLowerCase();
  var wrapper = require(path.join(__dirname, name));
  name = name[0].toUpperCase() + name.slice(1);
  models[name] = wrapper(mongoose);
}


