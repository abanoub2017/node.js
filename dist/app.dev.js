"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var path = require('path');

var rootDir = require('./helper/path');

var app = express();

var adminData = require('./routes/admin');

var postRouter = require('./routes/post');

app.use(bodyParser.urlencoded({
  extended: false
})); // Static Route

app.use(express["static"](path.join(__dirname, 'public'))); // Middleware

app.use('/admin', adminData.routes);
app.use(postRouter); // Handel 404 page not found

app.use(function (req, res, next) {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});
app.listen(3000);