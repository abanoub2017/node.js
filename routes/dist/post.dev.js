"use strict";

var path = require('path');

var express = require('express');

var rootDir = require('../helper/path');

var adminData = require('./admin');

var router = express.Router();
router.get('/', function (req, res, next) {
  var posts = adminData.posts;
  res.sendFile(path.join(rootDir, 'views', 'posts.html'), {
    pos: posts,
    docTitle: 'posts page'
  });
});
module.exports = router;