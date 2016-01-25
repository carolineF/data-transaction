'use strict';

function indexController(){}

indexController.prototype.index = function(req, res){
  res.render('index', {});
};

module.exports = indexController;
