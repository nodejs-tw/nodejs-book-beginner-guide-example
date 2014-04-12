var mainCtrl = require('./controllers');
var authorsCtrl = require('./controllers/authors');
var postCtrl = require('./controllers/post');

module.exports = function (app) {
  app.get('/', mainCtrl.index);
  app.post('/login', authorsCtrl.login);
  app.post('/logout', authorsCtrl.logout);
  app.post('/post/create', postCtrl.create);
};
