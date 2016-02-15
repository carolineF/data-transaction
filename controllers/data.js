'use strict';

function DataController() {}

DataController.prototype.upload = function(req, res) {
  res.render('upload');
};

DataController.prototype.index = function(req, res){
  res.render('data-info');
};

module.exports = DataController;
