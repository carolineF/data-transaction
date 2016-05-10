'use strict';

var User = require('../models/index').User;

function UserController(){};

UserController.prototype.login = function(req, res) {
  res.render('login');
};
UserController.prototype.loginCreate = function(req, res) {
  var name = req.name;
  var password = req.password;
};

UserController.prototype.register = function(req, res) {
  res.render('register');
};
UserController.prototype.addUser = function(req, res) {
  console.log('addUser');
  User.add(req.body.email, req.body.name, req.body.password);
  res.cookie('id', req.body.email, {expires: new Date(Date.now() + 1800000)});
  res.redirect('/');
};
UserController.prototype.isQualified = function(req, res) {
  User.registerVerify(req.param('email'), req.param('password'), req.param('name'), function (verify) {
    res.send(verify);
  });
};

module.exports = UserController;
