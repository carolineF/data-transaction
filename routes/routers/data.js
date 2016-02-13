'use strict';

var express = require('express');
var router = express.Router();

var DataController = require('../../controllers/data');
var dataController = new DataController();

router.get('/upload', dataController.upload);

module.exports = router;
