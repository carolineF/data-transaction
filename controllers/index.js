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

  var pageIndex = parseInt(req.query.pageIndex) || 1;
  var pageSize = parseInt(req.query.pageSize) || 6;
  var categories ;

  Category.findAll().then(function(instance){
    categories = instance;
    Data.findAndPage(pageIndex, pageSize, function(datas){

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
