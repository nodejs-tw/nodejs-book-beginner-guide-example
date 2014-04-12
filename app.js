var express = require('express');

var app = module.exports = express();

app.use(helloWorld);

function helloWorld(req, res) {
  res.send('Hello World');
}

app.listen(3000);
