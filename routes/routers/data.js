'use strict';

var express = require('express');
var router = express.Router();

var DataController = require('../../controllers/data');
var dataController = new DataController();

router.get('/upload', dataController.upload);

router.get('/id', dataController.index);

router.get('/buy', dataController.buy);

module.exports = router;
