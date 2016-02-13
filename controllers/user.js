'use strict';

function UserController(){};

UserController.prototype.login = function(req, res) {
  res.render('login');
};

module.exports = UserController;
