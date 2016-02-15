'use strict';

function DataController() {}

DataController.prototype.upload = function(req, res) {
  res.render('upload');
};

DataController.prototype.index = function(req, res){
  res.render('data-info');
};

DataController.prototype.buy = function(req, res){
  res.render('buy');
};

module.exports = DataController;
