var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('./config');
var routers = require('./routers');
var models = require('./models');

var app = module.exports = express();

app.use(cookieParser());
app.use(session(config.session || {}));
app.use(bodyParser());

routers(app);

app.listen(3000);
