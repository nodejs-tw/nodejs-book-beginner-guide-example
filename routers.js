var mainCtrl = require('./controllers');

module.exports = function (app) {
  app.get('/', mainCtrl.index);
};
