'use strict';

function DataController() {}

DataController.prototype.upload = function(req, res) {
  res.render('upload');
};

module.exports = DataController;
