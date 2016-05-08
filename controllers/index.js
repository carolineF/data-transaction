'use strict';

var Data = require('../models/index').Data;
var Category = require('../models/index').Category;

function indexController(){}

indexController.prototype.index = function(req, res){

  var data = {categories: [{id: 1,name: ''},{id:2, name:''}],
              datas: [{title:'', price:'100',dataSize:'100M',dataTime:'',description:'', owner:'',path:''}]
   };

  res.render('index', data);
  //data中要添加一个字段description
  /*Data.pageAll(8, req.query.page, function(totalPages, datas){
    res.render('index', {datas: datas, totalPages: totalPages, query: ''});
  });*/
  //res.render('index', data);
};

module.exports = indexController;
