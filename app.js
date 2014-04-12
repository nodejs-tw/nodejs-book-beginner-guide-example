var express = require('express');
var routers = require('./routers');

var app = module.exports = express();

routers(app);

app.listen(3000);
