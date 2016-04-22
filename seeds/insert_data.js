'use strict';

var User = require('../models/index').User;
var Category = require('../models/index').Category;
var Data = require('../models/index').Data;
var path = require('../config/path.json');

var Users = [
  {name: 'user1', Email: '12344556662@163.com', password: '111111'},
  {name: 'user2', Email: '12344556662@163.com', password: '111111'},
  {name: 'user3', Email: '12344556662@163.com', password: '111111'},
  {name: 'user4', Email: '12344556662@163.com', password: '111111'},
  {name: 'user5', Email: '12344556662@163.com', password: '111111'},
  {name: 'user6', Email: '12344556662@163.com', password: '111111'}
];

var Categories = [
  {name: '移动电信'},
  {name: '餐饮美食'},
  {name: '建筑工程'},
  {name: '医疗工程'},
  {name: '社交沟通'},
  {name: '互联网'},
  {name: '政府部门'},
  {name: '教育学院'}
];

var Datas = [
  {title: '标题1',dataSize: '100M', price: '100', dataTime: new Date(), path: path[1], user_id: 4, category_id: 2},
  {title: '标题2',dataSize: '100M', price: '100', dataTime: new Date(), path: path[2], user_id: 3, category_id: 3},
  {title: '标题3',dataSize: '100M', price: '100', dataTime: new Date(), path: path[3], user_id: 1, category_id: 2},
  {title: '标题4',dataSize: '100M', price: '100', dataTime: new Date(), path: path[4], user_id: 2, category_id: 1},
  {title: '标题5',dataSize: '100M', price: '100', dataTime: new Date(), path: path[5], user_id: 4, category_id: 3},
  {title: '标题6',dataSize: '100M', price: '100', dataTime: new Date(), path: path[6], user_id: 5, category_id: 4},
  {title: '标题7',dataSize: '100M', price: '100', dataTime: new Date(), path: path[7], user_id: 2, category_id: 1},
];

User.bulkCreate(Users).then(function() {
  Category.bulkCreate(Categories).then(function(){
    Data.bulkCreate(Datas);
  });
});