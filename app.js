var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routers = require('./routers');
var models = require('./models');

var app = module.exports = express();

app.use(cookieParser());
app.use(session({ secret: 'keyboard cat', key: 'sid', cookie: { secure: true }}));
app.use(bodyParser());

routers(app);

app.listen(3000);
