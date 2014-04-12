var mainCtrl = require('./controllers');
var authorsCtrl = require('./controllers/authors');

module.exports = function (app) {
  app.get('/', mainCtrl.index);
  app.post('/login', authorsCtrl.login);
  app.post('/logout', authorsCtrl.logout);
};
