'use strict';

function UserController(){};

UserController.prototype.login = function(req, res) {
  res.render('login');
};

UserController.prototype.register = function(req, res) {
  res.render('register');
};

module.exports = UserController;
