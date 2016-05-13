'use strict';

var Data = require('../models/index').Data;
var Category = require('../models/index').Category;

function indexController(){}

indexController.prototype.index = function(req, res){

  var pageIndex = parseInt(req.query.pageIndex) || 1;
  var pageSize = parseInt(req.query.pageSize) || 6;
  var categoryId = parseInt(req.query.categoryId) || -1;
  var categories ;

  Category.findAll().then(function(instance){
    categories = instance;
    Data.findAndPage(pageIndex, pageSize, categoryId, function(datas){

      res.render('index',
        { "categories": categories,
          "datas": datas.rows,
          "totalPages": datas.count,
          "pageCount": Math.ceil(datas.count / pageSize)
        });
    });
  });

};

module.exports = indexController;
