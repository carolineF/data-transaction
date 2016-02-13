'use strict';

var express = require('express');
var router = express.Router();

var IndexController = require('../../controllers/index');
var indexController = new IndexController();

var UserController = require('../../controllers/user');
var userController = new UserController();

router.get('/', indexController.index);

router.get('/login', userController.login);

router.get('/register', userController.register);

module.exports = router;
