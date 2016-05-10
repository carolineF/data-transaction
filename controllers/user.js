'use strict';

var User = require('../models/index').User;

function UserController(){}

UserController.prototype.login = function(req, res) {
  res.render('login');
};
UserController.prototype.loginCreate = function(req, res) {
  var email = req.body.email,
    password = req.body.password;

  User.verify(email, password, function(data){
      console.log( email);
    if(data) {
      res.cookie("id", email, {expires: new Date(Date.now() + 1800000)});
      res.send({isTrue: true});
    }else{
      res.send({isTrue: false});
    }
  });
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

UserController.prototype.logout = function (req, res) {
  res.clearCookie('id', {path: '/'});
  res.redirect('/');
};

module.exports = UserController;
