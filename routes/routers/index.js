'use strict';

var express = require('express');
var router = express.Router();

var IndexController = require('../../controllers/index');
var indexController = new IndexController();

router.get('/', indexController.index);

module.exports = router;
