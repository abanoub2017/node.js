"use strict";

var path = require('path');

var rootDir = require('../helper/path');

var experss = require('express');

var router = experss.Router();
var posts = [];
router.get('/add-posts', function (req, res, next) {
  res.sendFile(path.join(rootDir, 'views', 'add-posts.html'));
});
router.post('/add-posts', function (req, res, next) {
  posts.push({
    title: req.body.title
  });
  res.redirect('/');
}); // module.exports = router 

exports.routes = router;
exports.posts = posts;