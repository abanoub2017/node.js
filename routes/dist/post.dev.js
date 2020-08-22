"use strict";

var path = require('path');

var express = require('express');

var rootDir = require('../helper/path');

var adminData = require('./admin');

var router = express.Router();
router.get('/', function (req, res, next) {
  var posts = adminData.posts;
  res.render('posts', {
    pos: posts,
    title: 'Posts ',
    path: '/'
  });
});
module.exports = router;