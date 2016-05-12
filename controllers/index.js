'use strict';

var Data = require('../models/index').Data;
var Category = require('../models/index').Category;

function indexController(){}

indexController.prototype.index = function(req, res){

  var data = {categories: [{id: 1,name: '移动电信'},{id:2, name:'餐饮美食'}],
              datas: [{title:'微博', price:'100',dataSize:'100M',dataTime:'2016-05-09',description:'1、获取最新的公共微博' +
              '2、获取当前登录用户及其所关注用户的最新微博3、获取当前登录用户及其所关注用户的最新微博4、' +
              '获取当前登录用户及其所关注用户的最新微博的ID等', owner:'小红',path:'/data/createTables.sql'}]
   };

  res.render('index', data);
  //data中要添加一个字段description
  /*Data.pageAll(8, req.query.page, function(totalPages, datas){
    res.render('index', {datas: datas, totalPages: totalPages, query: ''});
  });*/
  //res.render('index', data);
};

module.exports = indexController;
