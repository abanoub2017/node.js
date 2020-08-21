"use strict";

var express = require('express');

var router = express.Router();
router.get('/', function (req, res, next) {
  console.log('in onther Middleware');
  res.send('<h1>Hello form express</h2>');
});
module.exports = router;